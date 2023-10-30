import React from "react";

// commonTitle component use for some similar work shortly use in any other design pages.
const CommonTitle = ({title, subtitle, description}) => {
  return (
    <div>
      <p className="text-[#e73c3e] text-[18px] font-normal">{title}</p>
      <h1 className="text-3xl md:text-4xl font-semibold leading-[40px] md:leading-[50px] md:text-[#111111] my-5">
       {subtitle}
      </h1>
      <p className="text-[#606060] text-[18px] font-normal mb-6 leading-[32px]">
        {description}
      </p>
    </div>
  );
};

export default CommonTitle;
