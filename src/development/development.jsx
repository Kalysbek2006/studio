import React from 'react';
import ImgComp from "../assets/img/Rectangle 2 (1).png"
import SvgOur from "../assets/svg/SvgOur.jsx";

const Development = () => {
    return (

        <div className="w-[1440px] bg-gray-200 m-auto mt-[105px]
       ">

            <div className="flex items-center pt-[100px]
            sm:ml-[80px] sm:flex-col
            xl:flex-row xl:ml-[240px]">
                <div>
                    <h1 className="text-[36px] font-bold text-gray-800
                    sm:text-[90px] xl:text-[46px]">Высокие стандарты <br/> разработки</h1>
                    <p className="text-gray-600 my-[30px] text-base font-normal
                    sm:text-4xl
                    xl:text-[20px]">Lorem Ipsum - это текст-"рыба", часто
                        используемый в <br/> печати и вэб-дизайне. Lorem Ipsum
                        является
                        стандартной <br/> "рыбой" для текстов на латинице с начала XVI века. <br/> стандартной "рыбой"
                        для текстов на
                        латинице с начала <br/> XVI века.</p>

                    <h2 className="text-blue-500 underline text-base font-medium
                    sm:text-[36px]
                    xl:text-[18px]">Подробнее о компании</h2>
                </div>
                <div>
                    <img className="w-[500px] h-[400px]
                    sm:w-[900px] sm:h-[650px] sm:mt-[90px]
                    xl:w-[500px] xl:h-[400px] xl:mb-[60px] xl:ml-[50px]" src={ImgComp} alt="img"/>
                </div>

            </div>


            <hr className="w-full border-gray-400 border-t-2 my-10"/>


<div className="flex justify-center gap-[100px] py-[20px]">
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
            <SvgOur/>
            <h1 className="text-[34px] font-normal">125</h1>
        </div>
        <h2 className="text-gray-600 text-base font-normal">Our projects</h2>
    </div>
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
            <SvgOur/>
            <h1 className="text-[34px] font-normal">125</h1>
        </div>
        <h2 className="text-gray-600 text-base font-normal">Our projects</h2>
    </div>
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
            <SvgOur/>
            <h1 className="text-[34px] font-normal">125</h1>
        </div>
        <h2 className="text-gray-600 text-base font-normal">Our projects</h2>
    </div>
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
            <SvgOur/>
            <h1 className="text-[34px] font-normal">125</h1>
        </div>
        <h2 className="text-gray-600 text-base font-normal">Our projects</h2>
    </div>
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
            <SvgOur/>
            <h1 className="text-[34px] font-normal">125</h1>
        </div>
        <h2 className="text-gray-600 text-base font-normal">Our projects</h2>
    </div>
</div>




        </div>
    );
};

export default Development;