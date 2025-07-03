import { useTranslation } from "react-i18next";
import FadeInWhenVisible from "../shared/FadeInWhenVisible";
import { Mileston } from "./Milestone";

export const SectionAbout = () => {
  const { t } = useTranslation();

  // ترجمات من i18next
  const title = t("sectionAbout.title");
  const paragraph = t("sectionAbout.paragraph");
  const milestones = t("sectionAbout.milestones", { returnObjects: true }) as {
    value: string;
    unit: string;
    caption: string;
  }[];

  return (
    <section className="container mx-auto py-4">
      <FadeInWhenVisible direction="bottom">
        <h2 className="text-center w-full sm:w-fit mb-8 text-2xl lg:text-4xl font-bold text-primary">
          {title}
        </h2>
      </FadeInWhenVisible>

      <div className="flex flex-wrap items-center gap-10 sm:gap-20">
        <div className="md::flex-[0_0_60%] xl:flex-[0_0_55%]">
          <FadeInWhenVisible direction="right" delay={0.2}>
            <p className="text-xl leading-8 font-medium text-secandry text-justify">
              {paragraph}
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="grid gap-10 flex-1 pr-10 sm:pr-0 ">
          {milestones.map((m, idx) => (
            <FadeInWhenVisible key={idx} direction="bottom" delay={0.3 + idx * 0.2}>
              <Mileston {...m} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
