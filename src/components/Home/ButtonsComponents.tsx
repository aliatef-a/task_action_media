import { useState } from "react";
import SharedButton from "../shared/SharedButton";
import FadeInWhenVisible from "../shared/FadeInWhenVisible";
import { useTranslation } from "react-i18next";

type BtnVariant =
  | "about"
  | "board"
  | "structure"
  | "chairmanMessage"
  | "ceoMessage";

function ButtonsComponents() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<BtnVariant>("about");

  const buttons: { labelKey: BtnVariant; value: BtnVariant }[] = [
    { labelKey: "about", value: "about" },
    { labelKey: "board", value: "board" },
    { labelKey: "structure", value: "structure" },
    { labelKey: "chairmanMessage", value: "chairmanMessage" },
    { labelKey: "ceoMessage", value: "ceoMessage" },
  ];

  return (
    <section>
      <div className="container flex items-center justify-center gap-x-10 gap-y-5 text-center my-7 flex-wrap xl:flex-nowrap">
        {buttons.map((btn, i) => (
          <FadeInWhenVisible key={btn.value} delay={0.1 * i} direction="bottom">
            <SharedButton
              active={btn.value === selected}
              onClick={() => setSelected(btn.value)}
            >
              {t(`buttons.${btn.labelKey}`)}
            </SharedButton>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

export default ButtonsComponents;
