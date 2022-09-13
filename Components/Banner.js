import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import doctorImage from "../Assets/pose_2.png";
import avatarOne from "../Assets/Ellipse 6 (1).png";
import avatarTwo from "../Assets/Ellipse 7.png";
import avatarThree from "../Assets/Ellipse 8.png";
import avatarFour from "../Assets/Ellipse 9.png";
import progressOne from "../Assets/Rectangle 4.png"
import progressTwo from "../Assets/Rectangle 5.png"

const Handler = () => {
  return (
    <div className="flex justify-between mt-[55px]">
      {/* banner left side  */}
      <div>
        <div>
          <h1 className="text-[60px] font-[500] leading-[73px]">
            Your <span className="text-primary">Health</span> Is Our <br /> Top{" "}
            <span className="text-secondary">Priority</span>
          </h1>
          <p className="text-[18px] text-paragraphColor font-[500] w-[392px] mt-[14px]">
            There are many variations of passages of lpsum available, but the
            majority hae suffered.
          </p>
          <button className="px-[20px] py-[15px] bg-primary text-[white] text-[18px] font-[500] rounded-[5px] mt-[32px] leading-[20px]">
            Meet Our Specialist
          </button>
        </div>
        <div className="flex gap-[24px] mt-[56px]">
          <div className="flex flex-col items-center">
            <h2 className="text-secondary text-[24px] font-[500]">262K+</h2>
            <p className="text-paragraphColor font-[500]">Recovered Patients</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-secondary text-[24px] font-[500]">96%</h2>
            <p className="text-paragraphColor font-[500]">Satisfaction Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-secondary text-[24px] font-[500]">86+</h2>
            <p className="text-paragraphColor font-[500]">Expert Doctors</p>
          </div>
        </div>
      </div>
      {/* banner right side  */}
      <div>
        <div
          id={styles.bannerDoctorBg}
          className="w-[466px] h-[466px] relative"
        >
          <Image src={doctorImage} alt="" />
          <button className="flex gap-[10px] items-center absolute bg-secondary text-[white] py-[15px] px-[30px] leading-[15px] rounded-[5px] left-0 top-[315px] z-[50] translate-x-[-30%] whitespace-nowrap">
            <FaRegCheckCircle /> Regular Checkup
          </button>
          <div id={styles.meetDoctors} className="absolute top-[350px] right-0 translate-x-[4rem] bg-[white] px-[16px] py-[10px] rounded-[10px]">
            <p className="text-textColor leading-[17px] font-[550]">
              Meet Our Doctors
            </p>
            <div className="mt-[16px] flex items-center">
              <Image src={avatarOne} />
              <Image src={avatarTwo} className="translate-x-[-15%]" />
              <Image src={avatarThree} className="translate-x-[-15%]" />
              <Image src={avatarFour} className="translate-x-[-15%]" />
              <span><BsFillPlusCircleFill className="text-primary text-[30px] ml-[13px]"/></span>
            </div>
            <div className="flex flex-col gap-[10px] mt-[10px]">
            <Image src={progressOne} />
            <Image src={progressTwo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
