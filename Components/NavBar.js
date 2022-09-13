const Handler = () => {
  return (
    <div className="flex justify-between items-center py-[15px]">
      {/* logo  */}
      <div>
        <h1 className="text-[2rem] font-bold text-primary">
          Doc<span className="text-secondary">mic.</span>
        </h1>
      </div>
      {/* nav menu list  */}
      <div>
        <ul className="flex gap-[30px]">
          <li className="text-[18px] text-paragraphColor font-[500]">Home</li>
          <li className="text-[18px] text-paragraphColor font-[500]">About</li>
          <li className="text-[18px] text-paragraphColor font-[500]">Departments</li>
          <li className="text-[18px] text-paragraphColor font-[500]">Pages</li>
          <li className="text-[18px] text-paragraphColor font-[500]">Blogs</li>
          <li className="text-[18px] text-paragraphColor font-[500]">Contacts</li>
        </ul>
      </div>
      {/* nav button  */}
      <div>
        <button className="bg-primary text-[18px] font-[500] text-[white] px-[20px] py-[14px] rounded-[5px] leading-[20px]">Free Consultation</button>
      </div>
    </div>
  );
};

export default Handler;
