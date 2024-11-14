import { FaLink } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import Slider from "react-slick/lib/slider";
import "./project-card.css";

function ProjectCard({ title, date, content, images, stack, link }) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-1 top-[40%] bg-purple-300 dark:bg-lime-600 opacity-75 text-black dark:text-white rounded-full p-2 cursor-pointer z-10`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-1 top-[40%] bg-purple-300 dark:bg-lime-600 opacity-75 text-black dark:text-white rounded-full p-2 cursor-pointer z-10`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  const isSingleImage = images && Array.isArray(images) && images.length === 1;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: images && images.length === 1 ? 1 : 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: false,
          swipeToSlide: true,
          centermode: true,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-white border border-stone-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </p>
            <div className="flex gap-2">
              {link.deployed !== "" && (
                <FaLink
                  onClick={() => window.open(link.deployed, "_blank")}
                  className="cursor-pointer text-purple-700 dark:text-lime-400"
                />
              )}
              {link.github !== "" && (
                <FaGithub
                  onClick={() => window.open(link.github, "_blank")}
                  className="cursor-pointer text-purple-700 dark:text-lime-400"
                />
              )}
            </div>
          </div>
          <p className="text-xs dark:text-gray-300 mb-2">{date}</p>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-4 items-center justify-center h-full">
            <div className="flex justify-center w-[80%] mx-auto sm:h-auto md:h-64">
              {images.length > 0 ? (
                !isSingleImage ? (
                  <div className="flex flex-col justify-center w-[250px] md:w-full h-auto overflow-hidden">
                    <Slider {...sliderSettings}>
                      {images &&
                        Array.isArray(images) &&
                        images.length > 0 &&
                        images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Project image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ))}
                    </Slider>
                  </div>
                ) : (
                  <img
                    src={images[0]}
                    className="max-w-full max-h-full object-contain"
                    alt={`Project image`}
                  />
                )
              ) : (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">
                  No image for this project.
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-1 self-start">
              {stack.map((techno, index) => (
                <p
                  key={index}
                  className="px-2 text-sm text-black dark:text-white bg-purple-300 dark:bg-lime-600 rounded-lg"
                >
                  {techno}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
