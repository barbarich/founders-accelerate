

# Fix: Admin panel slow loading / blank content

## Root cause

The `AdminGuard` component has a race condition and performs async database queries inside `onAuthStateChange` callback. Supabase documentation warns against this — async work inside the auth listener can block subsequent auth events and cause hangs/delays, especially on production domains where network latency is higher.

The flow:
1. `onAuthStateChange` fires with `INITIAL_SESSION` → starts async `admin_users` query
2. `getSession().then()` also fires → starts another async `admin_users` query  
3. Both race to set `loading = false`, and the auth listener's async work can block/delay resolution

On the custom domain (vs preview), this race condition manifests as the loading spinner staying indefinitely or content never rendering.

## Fix

Rewrite `AdminGuard` to:
1. **Not do async work inside `onAuthStateChange`** — only store the session
2. **Use a separate `useEffect`** that watches the session and then checks admin status
3. **Eliminate the duplicate `getSession` call** — `onAuthStateChange` with `INITIAL_SESSION` event already covers it

```text
Before:
  onAuthStateChange → async query admin_users (BLOCKS)
  getSession → async query admin_users (RACES)

After:
  onAuthStateChange → setSession (sync, fast)
  useEffect([session]) → query admin_users (clean, no race)
```

## Changes

**1 file: `src/components/admin/AdminGuard.tsx`**

- Remove async work from `onAuthStateChange` callback — just `setSession(session)`
- Remove duplicate `getSession().then()` block
- Add `useEffect` that depends on `session` to check admin status via `admin_users` query
- Handle `loading` state: start as `true`, set to `false` after initial session is resolved and admin check completes
- Add a `initialized` ref to track when the first session event has been processed

