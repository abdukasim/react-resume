import { FaSwimmer, FaBasketballBall, FaTv } from "react-icons/fa";

const iconClass = "text-white text-6xl";

export const SocialSlideData = [
  {
    title: "Interest",
    icons: [
      <div>
        <FaSwimmer className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Swimming</h4>
      </div>,
      <div>
        <FaBasketballBall className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Basketball</h4>
      </div>,
      <div>
        <FaTv className={iconClass} />
        <h4 className="text-white text-xs ml-2 mt-2">Watching TV</h4>
      </div>,
    ],
  },
  {
    title: "Information",
    icons: [
      <div>
        <p className="text-white">
          Name: <span className="ml-28">Yimage</span>
        </p>
      </div>,
      <div>
        <p className="text-white">
          Address: <span className="ml-24">Gerji</span>
        </p>
      </div>,
      <div>
        <p className="text-white">
          Birthday: <span className="ml-20">09/03/1996</span>
        </p>
      </div>,
      <div>
        <p className="text-white">
          Mobile: <span className="ml-20">+251901186214</span>
        </p>
      </div>,
      <div>
        <p className="text-white">
          Social Level: <span className="ml-16">Bumble Bee</span>
        </p>
      </div>,
    ],
  },
];
