import React from 'react';
import ProjectRequestForm from './ProejctRequestForm';

export default function ContactComponent() {
  return (
    <div className=" w-full h-fit overflow-hidden flex flex-col items-start justify-start sm:pb-16 sm:px-6  mx-auto bg-[#e1e6fe]">
      {/* 상단 텍스트/버튼 등 */}
      <div className=" max-w-[1536px] mx-auto w-full flex flex-col items-start mt-24 md:mt-16 px-6 ">
        <p className="text-black text-2xl sm:text-[30px] md:text-[42px] font-normal">
          믿을 수 있는 전문가 윈어스에게
        </p>
        <p className="text-black text-2xl sm:text-[30px] md:text-[60px] font-bold mb-4">
          프로젝트를 맡겨주세요
        </p>
        <div className="flex w-full justify-between items-center">
          <p className="flex-1 text-black text-sm sm:text-lg md:text-2xl font-[300]">
            윈어스에 의로할 프로젝트가 있거나, 필요한 서비스가 있다면
            <br /> 아래 항목을 작성해주세요.
          </p>
          <div className="hidden lg:flex space-x-16">
            <div className="flex flex-col space-y-1">
              <p className="text-[#032FF4] text-2xl font-bold">이메일</p>
              <p className="text-gray-500 text-xl">wewinus302@gmail.com</p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[#032FF4] text-2xl font-bold">문의전화</p>
              <p className="text-gray-500 text-xl">02-915-3702</p>
            </div>
          </div>
        </div>
      </div>
      {/* 견적의뢰 작성 */}
      <div className="flex max-w-[1536px] w-full md:h-[900px] mx-auto mt-8 md:mt-20 bg-white shadow-[0_4px_1px_0_rgba(3, 47, 244, 0.12)]">
        <ProjectRequestForm />
      </div>
      <div className="sm:hidden flex flex-col p-4 space-y-4">
        <div className="flex flex-col space-y-1">
          <p className="text-[#032FF4] text-xl font-bold">이메일</p>
          <p className="text-gray-500 text-lg">wewinus302@gmail.com</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[#032FF4] text-xl font-bold">문의전화</p>
          <p className="text-gray-500 text-lg">02-915-3702</p>
        </div>
      </div>
    </div>
  );
}
