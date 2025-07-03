import { useTranslation } from "react-i18next";
import { images } from "../../assets/images/images";
import { svg } from "../../assets/svg/svg";
import FadeInWhenVisible from "../shared/FadeInWhenVisible";
import ScaleInCard from "../shared/ScaleInCard";

export default function Goals() {
  const { t } = useTranslation();

  const title = t("goals.title");
  const description = t("goals.description");
  const cards = t("goals.cards", { returnObjects: true }) as string[];
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <section className="container my-13">
      <div
        className={`${
          isRTL ? "Goolcut-tl-br" : " Goolcut-rtl"
        } bg-cover bg-center relative isolate`}
        style={{ backgroundImage: `url(${images.solar_system})` }}
      >
        <div className="absolute inset-0 bg-primary/60 dark:bg-black/60 -z-10 transition-colors duration-300" />

        <div className="mx-auto px-4 py-8 text-white relative">
          <FadeInWhenVisible direction="bottom">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">
              {title}
            </h3>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="bottom" delay={0.2}>
            <p className="leading-8 text-white/90 dark:text-gray-200 text-lg font-semibold mt-5">
              {description}
            </p>
          </FadeInWhenVisible>

          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-8 px-5 sm:px-15 my-10">
            {cards.map((text, i) => {
              const iconKey = `stratgy_icon${i + 1}` as keyof typeof svg;
              return (
                <ScaleInCard
                  key={i}
                  className="p-4 min-h-[280px] bg-black/20 dark:bg-white/10 transition-colors duration-300 Cardcut-tr-bl"
                >
                  <img src={svg[iconKey]} alt={`strategy_icon_${i + 1}`} />
                  <p className="leading-7">{text}</p>
                </ScaleInCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
