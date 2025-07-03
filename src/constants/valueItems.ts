import {
  Award,
  Rocket,
  Users2,
  TrendingUp,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  colorClass: string;
  Icon: LucideIcon;
}

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: 1,
    title: "نجاح العميل",
    description: "ندعــــم نجــــاح عملائنــــا حيــــث إن نجاحهم هو نجاحنا.",
    colorClass: "text-[#3b82b4]",
    Icon: Award,
  },
  {
    id: 2,
    title: "التمكين",
    description:
      "نســــعى لتمكين الاخريــــن، لنحقق العمــــل معــــاً ونحقــــق المخرجات بكفاءة عالية.",
    colorClass: "text-[#22c55e]",
    Icon: Rocket,
  },
  {
    id: 3,
    title: "التعاون",
    description: "نؤمن بأن التعاون يحقق أفضل النتائج ويعزّز الابتكار المشترك.",
    colorClass: "text-[#f59e0b]",
    Icon: Users2,
  },
  {
    id: 4,
    title: "التنمية",
    description:
      "التنميــــة فــــي صميــــم عملنــــا وهي الدافع لكل ما نقوم به.",
    colorClass: "text-[#ef4444]",
    Icon: TrendingUp,
  },
  {
    id: 5,
    title: "الاعتمادية",
    description:
      "يمكن الاعتماد علينا في أي عمل يوكل إلينا وبالقرارات التي نتخذها.",
    colorClass: "text-[#8b5cf6]",
    Icon: ShieldCheck,
  },
];
