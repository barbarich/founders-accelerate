import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { months, getAllWeeks, getWeekTitle } from "@/data/program";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Copy,
  Plus,
  Trash2,
  Check,
  Presentation,
  Video,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Cohort {
  id: string;
  name: string;
  start_date: string;
  is_active: boolean;
}

interface InviteCode {
  id: string;
  code: string;
  label: string | null;
  is_active: boolean;
  max_uses: number | null;
  used_count: number;
}

interface Participant {
  id: string;
  email: string;
  full_name: string | null;
  is_active: boolean;
  created_at: string;
}

interface CohortMaterial {
  id: string;
  week_number: number;
  type: string;
  title: string;
  url: string;
}

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += "-";
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default function AdminCohortDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cohort, setCohort] = useState<Cohort | null>(null);
  const [codes, setCodes] = useState<InviteCode[]>([]);
  const [students, setStudents] = useState<Participant[]>([]);
  const [materials, setMaterials] = useState<CohortMaterial[]>([]);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Material form state per week
  const [matForm, setMatForm] = useState<{
    type: string;
    title: string;
    url: string;
  }>({ type: "presentation", title: "", url: "" });

  const load = async () => {
    if (!id) return;

    const { data: cohortData } = await supabase
      .from("cohorts")
      .select("*")
      .eq("id", id)
      .single();
    setCohort(cohortData as Cohort);

    const { data: codesData } = await supabase
      .from("invite_codes")
      .select("*")
      .eq("cohort_id", id)
      .order("created_at", { ascending: false });
    setCodes((codesData as InviteCode[]) ?? []);

    const { data: studentsData } = await supabase
      .from("participants")
      .select("*")
      .eq("cohort_id", id)
      .order("created_at", { ascending: false });
    setStudents((studentsData as Participant[]) ?? []);

    const { data: matsData } = await supabase
      .from("cohort_materials")
      .select("*")
      .eq("cohort_id", id)
      .order("week_number")
      .order("sort_order");
    setMaterials((matsData as CohortMaterial[]) ?? []);
  };

  useEffect(() => {
    load();
  }, [id]);

  const updateCohort = async (updates: Partial<Cohort>) => {
    if (!id) return;
    await supabase.from("cohorts").update(updates).eq("id", id);
    load();
  };

  const generateInviteCode = async () => {
    if (!id) return;
    await supabase.from("invite_codes").insert({
      code: generateCode(),
      cohort_id: id,
      is_active: true,
      max_uses: 1,
      used_count: 0,
    });
    load();
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const deleteCode = async (codeId: string) => {
    await supabase.from("invite_codes").delete().eq("id", codeId);
    load();
  };

  const getMaterialsForWeek = (weekNumber: number) =>
    materials.filter((m) => m.week_number === weekNumber);

  const addMaterial = async (weekNumber: number) => {
    if (!id || !matForm.url) return;
    await supabase.from("cohort_materials").insert({
      cohort_id: id,
      week_number: weekNumber,
      type: matForm.type,
      title: matForm.title || (matForm.type === "presentation" ? "Презентация" : matForm.type === "video" ? "Запись встречи" : "Материал"),
      url: matForm.url,
    });
    setMatForm({ type: "presentation", title: "", url: "" });
    load();
  };

  const deleteMaterial = async (matId: string) => {
    await supabase.from("cohort_materials").delete().eq("id", matId);
    load();
  };

  if (!cohort) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const allWeeks = getAllWeeks();

  return (
    <div>
      <button
        onClick={() => navigate("/admin/cohorts")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Назад к потокам
      </button>

      <h1 className="text-2xl font-bold text-foreground mb-6">{cohort.name}</h1>

      <Tabs defaultValue="materials">
        <TabsList className="mb-6">
          <TabsTrigger value="info">Инфо и коды</TabsTrigger>
          <TabsTrigger value="students">Студенты ({students.length})</TabsTrigger>
          <TabsTrigger value="materials">Материалы</TabsTrigger>
        </TabsList>

        {/* Tab 1: Info & Codes */}
        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardContent className="p-5 space-y-4">
              <div className="space-y-2">
                <Label>Название</Label>
                <Input
                  defaultValue={cohort.name}
                  onBlur={(e) => updateCohort({ name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Дата старта</Label>
                <Input
                  type="date"
                  defaultValue={cohort.start_date}
                  onBlur={(e) => updateCohort({ start_date: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={cohort.is_active}
                  onCheckedChange={(v) => updateCohort({ is_active: v })}
                />
                <Label>Активный</Label>
              </div>
            </CardContent>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Коды доступа</h2>
              <Button size="sm" onClick={generateInviteCode}>
                <Plus className="w-4 h-4 mr-1" /> Сгенерировать
              </Button>
            </div>
            {codes.length === 0 ? (
              <p className="text-sm text-muted-foreground">Кодов пока нет</p>
            ) : (
              <div className="space-y-2">
                {codes.map((c) => (
                  <Card key={c.id}>
                    <CardContent className="p-3 flex items-center gap-3">
                      <code className="text-sm font-mono bg-secondary px-2 py-1 rounded flex-1">
                        {c.code}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {c.used_count}/{c.max_uses ?? "~"}
                      </span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          c.is_active
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {c.is_active ? "Активен" : "Неактивен"}
                      </span>
                      <button
                        onClick={() => copyCode(c.code)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {copiedCode === c.code ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteCode(c.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        {/* Tab 2: Students */}
        <TabsContent value="students">
          {students.length === 0 ? (
            <p className="text-sm text-muted-foreground">Студентов пока нет</p>
          ) : (
            <div className="space-y-2">
              {students.map((s) => (
                <Card key={s.id}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {s.full_name || s.email}
                      </p>
                      {s.full_name && (
                        <p className="text-xs text-muted-foreground">
                          {s.email}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(s.created_at).toLocaleDateString("ru-RU")}
                    </span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        s.is_active
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s.is_active ? "Активен" : "Неактивен"}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Tab 3: Materials (12-week grid) */}
        <TabsContent value="materials">
          <p className="text-sm text-muted-foreground mb-4">
            Добавляйте материалы после каждого занятия. Они сразу появятся в
            кабинетах студентов.
          </p>
          <div className="space-y-2">
            {allWeeks.map((week) => {
              const weekMats = getMaterialsForWeek(week.number);
              const isExpanded = expandedWeek === week.number;
              const hasPres = weekMats.some((m) => m.type === "presentation");
              const hasVideo = weekMats.some((m) => m.type === "video");

              return (
                <Card key={week.number}>
                  <CardContent className="p-0">
                    <button
                      onClick={() =>
                        setExpandedWeek(isExpanded ? null : week.number)
                      }
                      className="w-full p-4 flex items-center gap-3 text-left"
                    >
                      <span className="text-xs font-mono text-muted-foreground w-6">
                        {week.number}
                      </span>
                      <span className="flex-1 text-sm font-medium">
                        {week.title}
                      </span>
                      <div className="flex items-center gap-1.5 mr-2">
                        {hasPres && (
                          <Presentation className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {hasVideo && (
                          <Video className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                        {weekMats.filter(
                          (m) =>
                            m.type !== "presentation" && m.type !== "video"
                        ).length > 0 && (
                          <FileText className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-border pt-4">
                        {/* Existing materials */}
                        {weekMats.length > 0 && (
                          <div className="space-y-2 mb-4">
                            {weekMats.map((m) => (
                              <div
                                key={m.id}
                                className="flex items-center gap-2 text-sm"
                              >
                                {m.type === "presentation" ? (
                                  <Presentation className="w-4 h-4 text-muted-foreground" />
                                ) : m.type === "video" ? (
                                  <Video className="w-4 h-4 text-muted-foreground" />
                                ) : (
                                  <FileText className="w-4 h-4 text-muted-foreground" />
                                )}
                                <span className="flex-1 truncate">
                                  {m.title}
                                </span>
                                <a
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline"
                                >
                                  Открыть
                                </a>
                                <button
                                  onClick={() => deleteMaterial(m.id)}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add material form */}
                        <div className="flex gap-2">
                          <select
                            value={matForm.type}
                            onChange={(e) =>
                              setMatForm({ ...matForm, type: e.target.value })
                            }
                            className="text-sm border border-border rounded-lg px-2 py-1.5 bg-background"
                          >
                            <option value="presentation">Презентация</option>
                            <option value="video">Видео</option>
                            <option value="resource">Другое</option>
                          </select>
                          <Input
                            placeholder="Название (необязательно)"
                            value={matForm.title}
                            onChange={(e) =>
                              setMatForm({ ...matForm, title: e.target.value })
                            }
                            className="text-sm"
                          />
                          <Input
                            placeholder="URL"
                            value={matForm.url}
                            onChange={(e) =>
                              setMatForm({ ...matForm, url: e.target.value })
                            }
                            className="text-sm flex-1"
                          />
                          <Button
                            size="sm"
                            onClick={() => addMaterial(week.number)}
                            disabled={!matForm.url}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
