

## План: Личный кабинет участника с авторизацией и управлением доступом

### Суть
Участники программы получают личный кабинет (`/cabinet`), где видят доступные встречи. Вход через Google или Email OTP. По умолчанию все зарегистрированные имеют доступ. Админ видит список участников и может отключать доступ.

### База данных

**Новая таблица `participants`:**
```sql
create table public.participants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  email text not null,
  full_name text,
  avatar_url text,
  is_active boolean not null default true,  -- админ может отключить
  created_at timestamptz not null default now()
);

alter table public.participants enable row level security;

-- Участник видит только себя
create policy "Users can view own participant record"
  on public.participants for select to authenticated
  using (user_id = auth.uid());

-- Админы видят всех
create policy "Admins can view all participants"
  on public.participants for select to authenticated
  using (public.is_admin());

-- Админы могут обновлять (is_active)
create policy "Admins can update participants"
  on public.participants for update to authenticated
  using (public.is_admin());

-- Автоматическое создание при первом входе
create policy "Users can insert own participant record"
  on public.participants for insert to authenticated
  with check (user_id = auth.uid());
```

### Авторизация

1. **Настроить Google OAuth** — вызвать Configure Social Login tool для Google
2. **Email OTP (Magic Link)** — использовать `supabase.auth.signInWithOtp({ email })` — работает из коробки, не требует пароля
3. **Включить auto-confirm** для OTP — нет, OTP сам подтверждает email

### Новые страницы и компоненты

**1. `/login` — Страница входа для участников**
- Два варианта: кнопка "Войти через Google" и форма email для OTP
- После входа → редирект на `/cabinet`
- Минималистичный дизайн в стиле сайта

**2. `/cabinet` — Личный кабинет участника**
- Защищён: если не авторизован → редирект на `/login`
- Если `is_active = false` → показать "Доступ отключён"
- Показывает список встреч из таблицы `meetings` (нужна RLS policy для участников)
- Каждая встреча — карточка с кнопкой "Открыть презентацию"

**3. `/cabinet/meeting/:id` — Просмотр презентации участником**
- Та же `Meeting1PresentationShell`, но обёрнута в `ParticipantGuard`
- Без кнопки "Назад в админку" — кнопка ведёт в `/cabinet`

**4. Компонент `ParticipantGuard`**
- Проверяет авторизацию + `is_active` в таблице `participants`
- Если не авторизован → `/login`
- Если не активен → сообщение "Доступ отключён"

**5. Админ-панель: новый раздел "Участники" (`/admin/participants`)**
- Список всех участников: email, имя, дата регистрации, статус
- Тогл для включения/выключения доступа (is_active)
- Добавить в AdminSidebar

### RLS для meetings (дополнительная policy)

```sql
-- Активные участники могут видеть встречи
create policy "Active participants can view meetings"
  on public.meetings for select to authenticated
  using (
    exists (
      select 1 from public.participants
      where user_id = auth.uid() and is_active = true
    )
  );
```

### Маршруты (App.tsx)

```
/login           → ParticipantLogin
/cabinet         → ParticipantGuard → CabinetPage
/cabinet/meeting/:id → ParticipantGuard → Meeting1PresentationShell (с навигацией в /cabinet)
```

### Порядок реализации

1. Миграция БД (таблица `participants` + RLS)
2. Настройка Google OAuth (Configure Social Login tool)
3. Страница `/login` (Google + Email OTP)
4. `ParticipantGuard` компонент
5. Страница `/cabinet` со списком встреч
6. Маршрут `/cabinet/meeting/:id` для просмотра презентации
7. Админ-раздел "Участники" с управлением доступом
8. Обновление AdminSidebar и App.tsx

