import Image from "next/image";
import doctorPose from "../Assets/pose_4.png";
import ellipse from "../Assets/Ellipse 11.png";
import bloodImg from "../Assets/Blood Pressure.png";
import firstAid from "../Assets/First Aid.png";
import plastrer from "../Assets/Plastrer.png";
import styles from "../styles/Experiences.module.css";

const Handler = () => {
  return (
    <div className="flex justify-between items-center mt-[56px]">
      {/* text side  */}
      <div className="w-[579px]">
        <h6 className="text-secondary text-[18px] font-[600]">
          16+ Years Experiences{" "}
        </h6>
        <h3 className="text-[33px] font-[500] leading-[39px]">
          We Are Always ensure Best Medical Treatment For Your Health
        </h3>
        <p className="text-paragraphColor mt-[14px] font-[500]">
          {`simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look lik`}
        </p>
      </div>
      {/* image side  */}
      <div>
        <div
          id={styles.experiencesImage}
          className="w-[321px] h-[321px] relative"
        >
          <Image src={doctorPose} className="z-[100]" />
          <div className="absolute top-[-3%] left-[30%] z-[50]">
            <Image src={ellipse} />
          </div>
          <div className="absolute top-[-3%] right-[5%] z-[50]">
            <Image src={bloodImg} />
          </div>
          <div className="absolute top-[8%] left-[5%] z-[50]">
            <Image src={firstAid} />
          </div>
          <div className="absolute bottom-[30%] left-[25%] z-[50]">
            <Image src={plastrer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handler;
