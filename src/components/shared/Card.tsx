import IconHeaderCard from "./IconHeaderCard";

type Props = {
  text: string;
  srcImg?: string;
  children?: React.ReactNode;
};

function Card({ text, srcImg, children }: Props) {
  return (
    <div className="relative drop-shadow-[-2px_4px_2px_rgb(0,0,0,0.15)] group w-full">
      <div className="bg-white dark:bg-gray-800 transition-colors duration-300 p-4 rounded-md">
        <IconHeaderCard text={text} srcImg={srcImg} key={text} />
        {children}
      </div>
    </div>
  );
}

export default Card;
