import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useStudentSession } from "@/components/cabinet/StudentGuard";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  url: string;
  category: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  general: "Основное",
  tools: "Инструменты",
  templates: "Шаблоны",
  community: "Сообщество",
};

export default function CabinetResources() {
  const session = useStudentSession();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    if (!session) return;

    supabase
      .from("resources")
      .select("*")
      .or(`cohort_id.eq.${session.cohortId},cohort_id.is.null`)
      .order("sort_order")
      .then(({ data }) => {
        setResources((data as Resource[]) ?? []);
      });
  }, [session]);

  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Ресурсы</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Полезные ссылки и инструменты
      </p>

      {resources.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Ресурсы пока не добавлены
        </p>
      ) : (
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {CATEGORY_LABELS[cat] || cat}
              </h2>
              <div className="space-y-2">
                {resources
                  .filter((r) => r.category === cat)
                  .map((r) => (
                    <a
                      key={r.id}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="hover:border-primary/30 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {r.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
