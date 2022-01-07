import Swipe from "react-easy-swipe";
import { useState } from "react/cjs/react.development";
import { WorkSlideData } from "./WorkSlideData";

const WorkSlider = () => {
  let [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    let newSlide =
      currentSlide === WorkSlideData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? WorkSlideData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div>
      <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
        {WorkSlideData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "mt-36 ml-12" : "hidden"}>
              <h2
                className={
                  index === currentSlide
                    ? "text-4xl font-semibold text-white"
                    : "hidden"
                }
              >
                {slide.title}
              </h2>

              <div
                className={
                  index === currentSlide
                    ? "flex flex-wrap overflow-hidden -mx-3  mt-16"
                    : "hidden"
                }
              >
                {slide.icons.map((icon, index) => {
                  return (
                    <div className="w-1/3 overflow-hidden my-3 px-3">
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Swipe>
    </div>
  );
};

export default WorkSlider;
