type Props = {
  text: string;
  srcImg?: string;
};

function IconHeaderCard({ text, srcImg }: Props) {
  return (
    <div className="group border-b border-[#c1c3c5] dark:border-white/20 w-fit pl-10 mr-5 hover:border-primary transition-colors duration-300">
      <div className="flex items-center gap-5 md:gap-10 text-nowrap">
        <div className="bg-[#c1c3c5] dark:bg-white/20 group-hover:bg-primary text-white px-4 py-2 w-fit cut-tl-br ltr:-ml-10 rtl:-mr-7 transition-colors duration-300">
          <img src={srcImg} alt="icon" className="w-27 h-12" />
        </div>

        <p className="text-lg sm:text-4xl font-bold text-[#c1c3c5] dark:text-white group-hover:text-primary transition-colors duration-300">
          {text}
        </p>
      </div>
    </div>
  );
}

export default IconHeaderCard;
