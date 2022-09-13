import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";

const Handler = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between">
          {/* first div  */}
          <div>
            <h1 className="text-[1.7rem] font-bold text-primary">
              Doc<span className="text-secondary">mic.</span>
            </h1>
            <p className="text-[14px] leading-[21px] text-paragraphColor font-[500] w-[237px] mt-[14.41px]">
              {
                "simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee"
              }
            </p>
            <div className="flex gap-[16px] mt-[35px]">
              <span>
                <BsFacebook className="w-[32px] h-[32px] text-primary  p-[8px] box-content bg-[white]  rounded-[50%]" />
              </span>
              <span>
                <RiInstagramFill className="w-[32px] h-[32px] text-primary  p-[8px] box-content bg-[white]  rounded-[50%]" />
              </span>
              <span>
                <AiFillGoogleCircle className="w-[32px] h-[32px] text-primary  p-[8px] box-content bg-[white]  rounded-[50%]" />
              </span>
              <span>
                <AiFillTwitterCircle className="w-[32px] h-[32px] text-primary  p-[8px] box-content bg-[white]  rounded-[50%]" />
              </span>
              <span>
                <BsYoutube className="w-[32px] h-[32px] text-primary  p-[8px] box-content bg-[white] rounded-[50%]" />
              </span>
            </div>
          </div>
          {/* links div  */}
          <div>
            <ul>
              <li className="text-[14px] text-secondary leading-[16px] mb-[15px]">
                Quick Links
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                About us
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Our Pricing
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Our Gallery
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Appointments
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Privacy & Policy
              </li>
            </ul>
          </div>
          {/* third div  */}
          <div>
            <ul>
              <li className="text-[14px] text-secondary leading-[16px] mb-[15px] invisible">
                {"dkldsk"}
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Services
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Our Doctors
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Our Latest News
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Careers
              </li>
              <li className="text-[14px] text-textColor leading-[16px] mb-[15px]">
                Contact us
              </li>
            </ul>
          </div>
          {/* fourth div  */}
          <div>
            <ul>
              <li className="text-[14px] text-secondary leading-[16px] mb-[15px]">
                Opening Hours
              </li>
              <li className="text-[14px] leading-[16px] mb-[15px]">
                <div className="flex gap-[12px]">
                  <span className="w-[65px] text-primary whitespace-nowrap">Mon- Tue</span>
                  <span>08:00 AM- 05:00 PM</span>
                </div>
              </li>
              <li className="text-[14px] leading-[16px] mb-[15px]">
                <div className="flex gap-[12px]">
                  <span className="w-[65px] text-primary whitespace-nowrap">Wed- Thu</span>
                  <span>09:00 AM- 06:00 PM</span>
                </div>
              </li>
              <li className="text-[14px] leading-[16px] mb-[15px]">
                <div className="flex gap-[12px]">
                  <span className="w-[65px] text-primary whitespace-nowrap">Fri- Sat</span>
                  <span>10:00 AM- 07:00 PM</span>
                </div>
              </li>
              <li className="text-[14px] leading-[16px] mb-[15px]">
                <div className="flex gap-[12px]">
                  <span className="w-[65px] text-primary whitespace-nowrap">Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </li>
              <li className="text-[14px] leading-[16px] mb-[15px]">
                <div className="flex gap-[12px]">
                  <span className="w-[65px] text-primary whitespace-nowrap">Personal</span>
                  <span>Mon- 05:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-[32px] text-[14px] text-textColor">Copyright @222 Medicom All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Handler;
