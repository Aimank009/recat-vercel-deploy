import React, { useEffect, useState } from "react";
import logo_2 from "../assets/logo_2.png";
import { useNavigate } from "react-router-dom";

export default function AlreadyOwner({ companyKey }) {
  console.log("CK", companyKey);
  const [ck, setCk] = useState(companyKey);

  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCk(companyKey);

    console.log(ck);
  }, [companyKey]);

  const handleClick = () => {
    navigate("/allocations");
  };

  return (
    <div className="w-full h-screen flex flex-row items-center justify-between gap-[5%]">
      <div className="border rounded-[5%] w-[100%] ml-[5%]  h-[50%] border-[#E8E8E8]">
        <div className="text-center">
          <h1 className="font-source-code-pro text-semilight text-3xl mt-[10%] text-[#212427]">
            Enter Company Key
          </h1>
          <h1 className="text-[#5B5B5D] text-center mt-[5%] font-source-code-pro">
            Please enter your Company Key and
          </h1>
          <h1 className="text-[#5B5B5D] text-center font-source-code-pro">
            confirm it.
          </h1>
        </div>

        <h1 className="font-medium font-source-code-pro ml-5 mt-5 mb-2 text-sm text-[#212427]">
          Company key
        </h1>
        <div className="flex ">
          <input
            text=""
            className="ml-[4%] w-[87%] h-[56px] flex items-center  font-source-code-pro focus:outline-[#3A74F2] border border-[#BDBDBD] text-[#BDBDBD] rounded-xl px-2 focus:outline-none "
            placeholder=" Enter Company Key"
          />
        </div>

        <h1
          onClick={handleClick}
          className="ml-5  text-center w-[88%] font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px] mr-[10px] mt-[5%] text-[#FFFFFF]"
        >
          Go to Dashboard
        </h1>
      </div>

      <div className="rounded-[5%] w-full h-[90%] mr-[5%]  ">
        <div className="rounded-[5%] h-[100%] w-full bg-[#3A74F2] text-left">
          <img className="pt-5 w-[30%]" src={logo_2} alt="" />
          <div className="w-[90%] pt-20 pl-10 h-[40%px]">
            <h1 className="font-source-code-pro text-[#FFFFFF] text-[400%]">
              Private Captable
            </h1>
            <h1 className="font-source-code-pro text-[#FFFFFF] text-[400%]">
              Built on FHE
            </h1>
            <h1 className="font-source-code-pro mt-10 text-[#FFFFFF] text-[100%]">
              Allocate your token now privately.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
