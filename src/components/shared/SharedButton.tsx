import React from "react";

type SharedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
  active?: boolean;
};

function SharedButton({
  children,
  onClick,
  htmlType = "button",
  disabled = false,
  active = false,
}: SharedButtonProps) {
  return (
    <div className="drop-shadow-btn shadow-2xl inline-block">
      <div className="cut-tl-br bg-white dark:bg-gray-800 transition-colors duration-300">
        <button
          type={htmlType}
          onClick={onClick}
          disabled={disabled}
          className={`text-[18px] font-medium px-10 py-[6px] text-nowrap transition-all ease-in-out duration-300 cursor-pointer
            ${
              active
                ? "bg-primary text-white"
                : "bg-white dark:bg-gray-800 text-[#c1c3c5] dark:text-gray-300"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {children}
        </button>
      </div>
    </div>
  );
}

export default SharedButton;
