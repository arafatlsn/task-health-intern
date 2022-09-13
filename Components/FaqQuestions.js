import Image from "next/image";
import doctorPose from "../Assets/pose_8.png";
import ellipseOne from "../Assets/Ellipse 10.png";
import ellipseTwo from "../Assets/Ellipse 11.png";
import bloodImg from "../Assets/Blood Pressure.png";
import heart from "../Assets/Defibrillator.png";
import handGlabs from "../Assets/Gloves.png";
import Accordion from "../Components/Accordion";
import bulb from "../Assets/image 5 (1).png";

const Handler = () => {
  return (
    <div className="flex justify-between mt-[56px]">
      {/* accordion side  */}
      <div className="w-[579px]">
        <h6 className="text-secondary text-[18px] font-[600]">
          FAQ Questions{" "}
        </h6>
        <h3 className="text-[33px] font-[500] leading-[39px]">
          Get Your General Answer
        </h3>
        <div>
          <Accordion />
        </div>
      </div>
      {/* image side  */}
      <div className="w-[321px] h-[321px] relative">
        <Image src={doctorPose} className="z-[100]" />
        <div className="absolute bottom-[-7%] z-[50]">
          <Image src={ellipseOne} />
        </div>
        <div className="absolute top-[6%] left-[30%] z-[50]">
          <Image src={ellipseTwo} />
        </div>
        <div className="absolute top-[-3%] right-[5%] z-[50]">
          <Image src={bloodImg} />
        </div>
        <div className="absolute top-[15%] left-[5%] z-[50]">
          <Image src={heart} />
        </div>
        <div className="absolute bottom-[30%] right-[25%] z-[50]">
          <Image src={handGlabs} />
        </div>
        <div className="absolute bottom-[15%] left-0 z-[100] translate-x-[-40%]">
          <button className="bg-[white] w-[211px] h-[58px] py-[14px] pl-[10px] pr-[35px] text-start text-[12px] leading-[15px] flex items-center gap-[10px] rounded-[10px]">
            <div className="p-[10px] flex justify-center items-center rounded-[50%] bg-[#FFF0CC]">
              <Image className="w-[20px] h-[20px]" src={bulb} />
            </div>{" "}
            Get Solutions From Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Handler;
