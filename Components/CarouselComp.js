import { Carousel } from "flowbite-react";
import plus from "../Assets/Ornament 57.jpg";
import ornament from "../Assets/Ornament 24.jpg";
import Image from "next/image";
import boy from "../Assets/Ikbal 1.png";

const Handler = () => {
  return (
    <div className="mt-[56px]">
      <h6 className="text-secondary text-center text-[18px] font-[600]">
        Testimonial{" "}
      </h6>
      <h3 className="text-[33px] text-center font-[500] leading-[39px]">
        What they say?
      </h3>
      <div className="h-[255px] w-[664px] mx-auto mt-[56px]">
        <Carousel indicators={false} leftControl=" " rightControl=" ">
          <div className="h-[255px] w-[664px]  flex justify-between px-[24px] pt-[24px] relative ">
            {/* text side  */}
            <div>
              <h6 className="text-[14px] font-[500] text-textColor leading-[17px]">
                David James
              </h6>
              <p className="text-[12px] leading-[15px] mt-[8px]">Patient</p>
              <p className="text-[14px] text-paragraphColor leading-[21px] mt-[14px] w-[382px]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it is a long established fact that a reader will
                be distracted by the readable content{" "}
              </p>
            </div>
            <div className="absolute bottom-0 left-[1%]">
              <Image src={plus} />
            </div>
            <div className="absolute top-0 right-0">
              <Image src={ornament} />
            </div>
            {/* image side  */}
            <div className="w-[228px] h-[228px] flex justify-center items-center">
              <Image src={boy} />
            </div>
          </div>
          <div className="h-[255px] w-[664px]  flex justify-between px-[24px] pt-[24px] relative ">
            {/* text side  */}
            <div>
              <h6 className="text-[14px] font-[500] text-textColor leading-[17px]">
                David James
              </h6>
              <p className="text-[12px] leading-[15px] mt-[8px]">Patient</p>
              <p className="text-[14px] text-paragraphColor leading-[21px] mt-[14px] w-[382px]">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it is a long established fact that a reader will
                be distracted by the readable content{" "}
              </p>
            </div>
            <div className="absolute bottom-0 left-[1%]">
              <Image src={plus} />
            </div>
            <div className="absolute top-0 right-0">
              <Image src={ornament} />
            </div>
            {/* image side  */}
            <div className="w-[228px] h-[228px] flex justify-center items-center">
              <Image src={boy} />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Handler;
