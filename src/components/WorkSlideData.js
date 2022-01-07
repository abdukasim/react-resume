import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJava,
  FaPython,
  FaJs,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaLinkedin,
  FaFreeCodeCamp,
} from "react-icons/fa";

const CenterediconClass = "text-white text-6xl object-center mx-auto";
const iconClass = "text-white text-6xl object-center";

export const WorkSlideData = [
  {
    title: "Skill Set",
    icons: [
      <FaHtml5 className={iconClass} />,
      <FaCss3Alt className={iconClass} />,
      <FaPhp className={iconClass} />,
      <FaJava className={iconClass} />,
      <FaPython className={iconClass} />,
      <FaJs className={iconClass} />,
    ],
  },
  {
    title: "Experience",
    icons: [
      <div>
        <FaGoogle className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Aug 2019</h4>
        <h4 className="text-white text-xs ml-2 ">Feb 2019</h4>
      </div>,
      <div>
        <FaMicrosoft className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Aug 2019</h4>
        <h4 className="text-white text-xs ml-2 ">Feb 2019</h4>
      </div>,
      <div>
        <FaApple className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Aug 2019</h4>
        <h4 className="text-white text-xs ml-2 ">Feb 2019</h4>
      </div>,
      <div>
        <FaLinkedin className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Aug 2019</h4>
        <h4 className="text-white text-xs ml-2 ">Feb 2019</h4>
      </div>,
    ],
  },
  {
    title: "Certificates",
    icons: [
      <div>
        <FaGoogle className={CenterediconClass} />
        <h4 className="text-white text-xs  mt-2 text-center ">
          Google Analytics Certificate
        </h4>
      </div>,
      <div>
        <FaFreeCodeCamp className={CenterediconClass} />
        <h4 className="text-white text-xs mt-2 text-center ">
          Freecodecamp Responsive Design
        </h4>
      </div>,
    ],
  },
];
