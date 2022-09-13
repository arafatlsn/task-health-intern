import { GiHeartBeats } from "react-icons/gi";
import { TbClipboardCheck } from "react-icons/tb";
import { FaTooth } from "react-icons/fa";
import bagPlus from "../Assets/Vector (2).png";
import Image from "next/image";

const Handler = () => {
  return (
    <div className="mt-[65px]">
      <h6 className="text-secondary text-center text-[18px] font-[600]">
        Our Services
      </h6>
      <h3 className="text-[33px] text-center font-[500]">
        Services For Your Health
      </h3>
      <div className="flex items-center gap-[20px] justify-center mt-[28px]">
        {/* cardiology  */}
        <div className="w-[236px] h-[152px] p-[12px] box-content card">
          <h6 className="flex items-end justify-between text-textColor font-[600]">
            Cardiology <GiHeartBeats className="text-secondary text-[1.8rem]" />
          </h6>
          <p className="text-paragraphColor mt-[12px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-textColor font-[600] mt-[24px]">
            Explore Now
          </button>
        </div>
        {/* daily checkup  */}
        <div className="w-[236px] h-[152px] p-[12px] box-content card">
          <h6 className="flex items-end justify-between text-textColor font-[600]">
            Monthly Check Up{" "}
            <TbClipboardCheck className="text-[#2D42FF] text-[1.8rem]" />
          </h6>
          <p className="text-paragraphColor mt-[12px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-textColor font-[600] mt-[24px]">
            Explore Now
          </button>
        </div>
        {/* Dental Care */}
        <div className="w-[236px] h-[152px] p-[12px] box-content card">
          <h6 className="flex items-end justify-between text-textColor font-[600]">
            Dental Care <FaTooth className="text-primary text-[1.8rem]" />
          </h6>
          <p className="text-paragraphColor mt-[12px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-textColor font-[600] mt-[24px]">
            Explore Now
          </button>
        </div>
        {/* Opthalmology  */}
        <div className="w-[236px] h-[152px] p-[12px] box-content card">
          <h6 className="flex items-end justify-between text-textColor font-[600]">
            Opthalmology{" "}
            <Image
              alt="h3llo world"
              src={bagPlus}
              className="text-secondary h-[1.8rem]"
            />
          </h6>
          <p className="text-paragraphColor mt-[12px]">
            Seduahag perspiciati under omnised atused error.
          </p>
          <button className="text-textColor font-[600] mt-[24px]">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Handler;
