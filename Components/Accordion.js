import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const Handler = () => {
  const [activeAccordion, setActiveAccordion] = useState([
    "Get Your General Answer".toLowerCase(),
  ]);
  const accordionHandler = (text) => {
    if (activeAccordion.indexOf(text.toLowerCase()) === -1) {
      setActiveAccordion([...activeAccordion, text.toLowerCase()]);
    } else {
      const newAccordion = activeAccordion.filter(
        (el) => el !== text.toLowerCase()
      );
      setActiveAccordion(newAccordion);
    }
  };

  return (
    <div className="mt-[15px]">
      {/* first accordion  */}
      <div className="w-[320px]">
        <div
          onClick={() => accordionHandler("Get Your General Answer")}
          className="flex justify-between items-center"
        >
          <p className="text-textColor cursor-pointer">
            Get Your General Answer
          </p>
          {activeAccordion.indexOf("Get Your General Answer".toLowerCase()) !==
          -1 ? (
            <IoIosArrowUp className="text-[1.3rem] text-primary" />
          ) : (
            <BiPlus className="text-[1.3rem] text-primary" />
          )}
        </div>
        <p
          className={`text-[14px] text-paragraphColor mt-[1rem] ${
            activeAccordion.indexOf("Get Your General Answer".toLowerCase()) ===
              -1 && "hidden"
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          laudantium asperiores tenetur rerum autem. Animi vero mollitia
          repellat quia totam?
        </p>
      </div>
      {/* second accordion  */}
      <div className="w-[320px] mt-[15px]">
        <div
          onClick={() => accordionHandler("Will I always see my own doctor")}
          className="flex justify-between items-center"
        >
          <p className="text-textColor cursor-pointer">
            Will I always see my own doctor?
          </p>
          {activeAccordion.indexOf("Will I always see my own doctor".toLowerCase()) !==
          -1 ? (
            <IoIosArrowUp className="text-[1.3rem] text-primary" />
          ) : (
            <BiPlus className="text-[1.3rem] text-primary" />
          )}
        </div>
        <p
          className={`text-[14px] text-paragraphColor mt-[1rem] ${
            activeAccordion.indexOf(
              "Will I always see my own doctor".toLowerCase()
            ) === -1 && "hidden"
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          laudantium asperiores tenetur rerum autem. Animi vero mollitia
          repellat quia totam?
        </p>
      </div>
      {/* third accordion  */}
      <div className="w-[320px] mt-[15px]">
        <div
          onClick={() => accordionHandler("What is one Medical’s care")}
          className="flex justify-between items-center"
        >
          <p className="text-textColor cursor-pointer">
            What is one Medical’s care?
          </p>
          {activeAccordion.indexOf("What is one Medical’s care".toLowerCase()) !==
          -1 ? (
            <IoIosArrowUp className="text-[1.3rem] text-primary" />
          ) : (
            <BiPlus className="text-[1.3rem] text-primary" />
          )}
        </div>
        <p
          className={`text-[14px] text-paragraphColor mt-[1rem] ${
            activeAccordion.indexOf(
              "What is one Medical’s care".toLowerCase()
            ) === -1 && "hidden"
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          laudantium asperiores tenetur rerum autem. Animi vero mollitia
          repellat quia totam?
        </p>
      </div>
      {/* fourth accordion  */}
      <div className="w-[320px] mt-[15px]">
        <div
          onClick={() => accordionHandler("What is evidence based medicine")}
          className="flex justify-between items-center"
        >
          <p className="text-textColor cursor-pointer">
            What is evidence based medicine?
          </p>
          {activeAccordion.indexOf("What is evidence based medicine".toLowerCase()) !==
          -1 ? (
            <IoIosArrowUp className="text-[1.3rem] text-primary" />
          ) : (
            <BiPlus className="text-[1.3rem] text-primary" />
          )}
        </div>
        <p
          className={`text-[14px] text-paragraphColor mt-[1rem] ${
            activeAccordion.indexOf(
              "What is evidence based medicine".toLowerCase()
            ) === -1 && "hidden"
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          laudantium asperiores tenetur rerum autem. Animi vero mollitia
          repellat quia totam?
        </p>
      </div>
      {/* fifth accordion  */}
      <div className="w-[320px] mt-[15px]">
        <div
          onClick={() => accordionHandler("What is an academic medical center")}
          className="flex justify-between items-center"
        >
          <p className="text-textColor cursor-pointer">
            What is an academic medical center?
          </p>
          {activeAccordion.indexOf("What is an academic medical center".toLowerCase()) !==
          -1 ? (
            <IoIosArrowUp className="text-[1.3rem] text-primary" />
          ) : (
            <BiPlus className="text-[1.3rem] text-primary" />
          )}
        </div>
        <p
          className={`text-[14px] text-paragraphColor mt-[1rem] ${
            activeAccordion.indexOf(
              "What is an academic medical center".toLowerCase()
            ) === -1 && "hidden"
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          laudantium asperiores tenetur rerum autem. Animi vero mollitia
          repellat quia totam?
        </p>
      </div>
    </div>
  );
};

export default Handler;
