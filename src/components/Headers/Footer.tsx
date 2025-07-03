import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Globe,
  Phone,
} from "lucide-react";
import { images } from "../../assets/images/images";

const socials = [
  { Icon: Instagram, bgHover: "hover:bg-[#C13584]" },
  { Icon: Facebook, bgHover: "hover:bg-[#1877F2]" },
  { Icon: Twitter, bgHover: "hover:bg-[#1DA1F2]" },
  { Icon: Youtube, bgHover: "hover:bg-[#FF0000]" },
];

function Footer() {
  return (
    <footer>
      <div className="bg-white dark:bg-gray-900 2xl:py-3 py-1 fixed w-full bottom-0 drop-shadow-[0_-2px_5px_rgb(0,0,0,0.15)] z-50 transition-colors duration-300">
        <div className="flex items-center justify-between container">
          {/* social icons */}
          <ul className="flex items-center gap-2 py-4 ">
            {socials.map(({ Icon, bgHover }, i) => (
              <li
                key={i}
                className="relative group hover:-translate-y-3 duration-500 cursor-pointer"
              >
                <div className="absolute top-0 right-1 sm:w-10 w-8 sm:h-8 h-6.5 custom-hexgon bg-black/20 dark:bg-white/10 backdrop-blur-2xl" />
                <div className="absolute inset-0 sm:w-10 w-8 sm:h-8 h-6.5 custom-hexgon bg-black/50 dark:bg-white/20 backdrop-blur-2xl" />

                <div
                  className={`sm:w-10 w-8 sm:h-8 h-6.5 custom-hexgon flex justify-center items-center relative duration-500
                        bg-white dark:bg-gray-800 ${bgHover} transition-colors`}
                >
                  <Icon
                    strokeWidth={2}
                    className="text-[#058340] dark:text-white group-hover:text-white duration-500 w-5 h-5"
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* QR + info */}
          <div className="flex items-center sm:gap-5 gap-2">
            <div className="flex flex-col gap-3 items-end text-xs text-gray-800 dark:text-gray-200 transition-colors">
              <div className="flex items-center gap-1">
                <p>sidf.gov.sa</p>
                <Globe className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-1">
                <p>0118251555</p>
                <Phone className="w-4 h-4" strokeWidth={1.5} fill="black" />
                {/* Add this Tailwind class to apply dark fill: */}
                {/* className="fill-black dark:fill-white" */}
              </div>
            </div>

            <img
              className="sm:w-20 sm:h-15 w-15 h-16 object-contain"
              src={images.QR_code}
              alt="qr-code"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
