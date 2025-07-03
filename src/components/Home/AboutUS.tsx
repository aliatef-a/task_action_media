import { useTranslation } from "react-i18next";
import { svg } from "../../assets/svg/svg";
import Card from "../shared/Card";
import FadeInWhenVisible from "../shared/FadeInWhenVisible";
import { Award, Rocket, ShieldCheck, TrendingUp, Users2 } from "lucide-react";

function AboutUS() {
  const ICONS = [Award, Rocket, Users2, TrendingUp, ShieldCheck];
  const COLORS = [
    "text-[#3b82b4]",
    "text-[#22c55e]",
    "text-[#f59e0b]",
    "text-[#ef4444]",
    "text-[#8b5cf6]",
  ];
  const { t } = useTranslation();
  const values = t("about.valuesList", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];
  return (
    <section>
      <div className="container mb-8 overflow-hidden">
        <div className="grid md:grid-cols-2 mb-7 gap-x-10 gap-y-7 w-full items-start justify-center">
          <FadeInWhenVisible direction="left">
            <Card text={t("about.vision")} srcImg={svg.about_icon1}>
              <p className="mt-7 mb-5 text-lg text-secandry font-semibold">
                {t("about.visionText")}
              </p>
            </Card>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="right" delay={0.2}>
            <Card text={t("about.mission")} srcImg={svg.about_icon2}>
              <p className="mt-7 mb-5 text-lg text-secandry font-semibold">
                {t("about.missionText")}
              </p>
            </Card>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible direction="bottom" delay={0.4}>
          <Card text={t("about.values")} srcImg={svg.value_icon}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-7 mb-5">
              {values.map((item, index) => {
                const Icon = ICONS[index];
                const colorClass = COLORS[index];

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 text-center
            bg-black/10 dark:bg-white/10 rounded-lg
            shadow-sm hover:shadow-md
            transition-shadow duration-300"
                  >
                    <Icon
                      className={`w-14 h-14 ${colorClass}`}
                      strokeWidth={1.8}
                    />
                    <p className={`text-3xl font-medium ${colorClass}`}>
                      {item.title}
                    </p>
                    <p className="text-base text-secandry dark:text-gray-300 leading-8 font-medium">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default AboutUS;
