import Image from "next/image";
import doctorPose from "../Assets/pose_7 (1).png";
import mask from "../Assets/Masker.png";
import senitizer from "../Assets/Hand Sanitizer.png";
import thermoGun from "../Assets/ThermoGun.png";
import ellipseOne from "../Assets/Ellipse 10.png";
import ellipseTwo from "../Assets/Ellipse 11.png";
import doctorSupport from "../Assets/image 5.png";
import exclusiveSupport from "../Assets/image 6.png";
import frinedlyEnvironment from "../Assets/image 7.png";
import nurseSupport from "../Assets/image 8.png";

const Handler = () => {
  return (
    <div className="flex justify-between mt-[56px]">
      {/* image side  */}
      <div className="w-[321px] h-[321px] relative mt-[16px]">
        <Image alt="h3llo world" src={doctorPose} className="z-[100]" />
        <div className="absolute bottom-[-10%] z-[50]">
          <Image alt="h3llo world" src={ellipseOne} />
        </div>
        <div className="absolute top-[10%] left-[30%] z-[50]">
          <Image alt="h3llo world" src={ellipseTwo} />
        </div>
        <div className="absolute top-0 left-[28%] z-[50]">
          <Image alt="h3llo world" src={mask} />
        </div>
        <div className="absolute bottom-[25%] left-[10%] z-[50]">
          <Image alt="h3llo world" src={senitizer} />
        </div>
        <div className="absolute bottom-[20%] right-[10%] z-[50]">
          <Image alt="h3llo world" src={thermoGun} />
        </div>
      </div>
      {/* text side  */}
      <div className="w-[579px]">
        <h6 className="text-secondary text-[18px] font-[600]">
          Our Hospital Feature{" "}
        </h6>
        <h3 className="text-[33px] font-[500] leading-[39px]">
          Make An Appointment Easy And Fast Services
        </h3>
        {/* cards  */}
        <div className="flex flex-wrap justify-between gap-[20px]">
          {/* doctor support  */}
          <div className="w-[279px] h-[157px] px-[17px] pt-[10px] card">
            <div className="flex items-end justify-between">
              <h6 className="text-[14px] text-textColor">
                24 Hours Doctor Support
              </h6>
              <div className="w-[45px] h-[45px] bg-[#E8F3FD] rounded-[50%] flex justify-center items-center">
                <Image
                  alt="h3llo world"
                  src={doctorSupport}
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
            <p className="text-paragraphColor mt-[12px] text-[14px]">{`simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</p>
          </div>
          {/* exclusive support  */}
          <div className="w-[279px] h-[157px] px-[17px] pt-[10px] pb-[17px] card">
            <div className="flex items-end justify-between">
              <h6 className="text-[14px] text-textColor">Exclusive Supports</h6>
              <div className="w-[45px] h-[45px] bg-[#FDE7E8] rounded-[50%] flex justify-center items-center">
                <Image
                  alt="h3llo world"
                  src={exclusiveSupport}
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
            <p className="text-paragraphColor mt-[12px] text-[14px]">{`simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</p>
          </div>
          {/* friendly environment  */}
          <div className="w-[279px] h-[157px] px-[17px] pt-[10px] pb-[17px] card">
            <div className="flex items-end justify-between">
              <h6 className="text-[14px] text-textColor">
                Friendly Environment{" "}
              </h6>
              <div className="w-[45px] h-[45px] bg-[#E0F0DB] rounded-[50%] flex justify-center items-center">
                <Image
                  src={frinedlyEnvironment}
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
            <p className="text-paragraphColor mt-[12px] text-[14px]">{`simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</p>
          </div>
          {/* nurse support  */}
          <div className="w-[279px] h-[157px] px-[17px] pt-[10px] pb-[17px] card">
            <div className="flex items-end justify-between">
              <h6 className="text-[14px] text-textColor">
                24 Hours Nurse Support{" "}
              </h6>
              <div className="w-[45px] h-[45px] bg-[#FFEECC] rounded-[50%] flex justify-center items-center">
                <Image src={nurseSupport} className="w-[35px] h-[35px]" />
              </div>
            </div>
            <p className="text-paragraphColor mt-[12px] text-[14px]">{`simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
