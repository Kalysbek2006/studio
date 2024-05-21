import React from 'react';
import ImgBlock from "../assets/img/Rectangle 2.2.png"

const Work = () => {
    return (
        <div>
            <div className="w-[1440px] m-auto bg-blue-700 h-[440px]">

                <div className="flex items-center justify-around pt-[90px] pb-[30px]">

                    <h1 className="text-white text-3xl font-bold sm:text-[40px]
                    2xl:text-3xl">Наши работы, на которых <br/>
                        мы специализируемся</h1>

                    <button className="py-[7px] text-white px-[30px] rounded-[30px] bg-blue-400
                    sm:text-[30px]
                    2xl:text-[20px]">Все услуги</button>
                </div>

                <div className="flex items-center gap-5 absolute ml-[230px] mb-[900px]
                sm:ml-[390px] sm:w-[750px] sm:grid grid-cols-2 sm:gap-9
                2xl:grid 2xl:grid-cols-3 2xl:w-[940px] 2xl:ml-[300px]">

                    <div>
                        <img className="w-[350px] h-[300px]" src={ImgBlock} alt=""/>
                        <h1 className="text-[18px] font-medium my-[20px]
                        sm:text-[26px] 2xl:text-[18px]">
                            <span className="text-blue-700">01.</span>
                            Исследование и упаковка</h1>

                        <p className="text-gray-600 text-base font-normal sm:text-[20px] 2xl:text-base">Lorem Ipsum - это текст-"рыба", часто <br/>
                            используемый в печати и вэб-дизайне. <br/>
                            Lorem Ipsum является стандартной <br/>
                            "рыбой" для текстов на латинице с <br/>
                            начала XVI века.</p>


                        <h2 className="text-blue-500 underline mt-[10px] text-base font-medium sm:text-[20px]
                        2xl:text-base">Подробнее</h2>

                    </div>
                    <div>
                        <img className="w-[350px] h-[300px]" src={ImgBlock} alt=""/>
                        <h1 className="text-[18px] font-medium my-[20px]
                        sm:text-[26px] 2xl:text-[18px]">
                            <span className="text-blue-700 ">01.</span>
                            Исследование и упаковка</h1>

                        <p className="text-gray-600 text-base font-normal sm:text-[20px]
                        2xl:text-base">Lorem Ipsum - это текст-"рыба", часто <br/>
                            используемый в печати и вэб-дизайне. <br/>
                            Lorem Ipsum является стандартной <br/>
                            "рыбой" для текстов на латинице с <br/>
                            начала XVI века.</p>


                        <h2 className="text-blue-500 underline mt-[10px] text-base font-medium sm:text-[20px]
                        2xl:text-base">Подробнее</h2>

                    </div>
                    <div className="sm:hidden 2xl:block">
                        <img className="w-[350px] h-[300px]" src={ImgBlock} alt=""/>
                        <h1 className="text-[18px] font-medium my-[20px]">
                            <span className="text-blue-700">01.</span>
                            Исследование и упаковка</h1>

                        <p className="text-gray-600 text-base font-normal">Lorem Ipsum - это текст-"рыба", часто <br/>
                            используемый в печати и вэб-дизайне. <br/>
                            Lorem Ipsum является стандартной <br/>
                            "рыбой" для текстов на латинице с <br/>
                            начала XVI века.</p>


                        <h2 className="text-blue-500 underline mt-[10px] text-base font-medium">Подробнее</h2>

                    </div>

                </div>

            </div>


            <div className="w-[1440px] h-[400px] bg-gray-200  m-auto">
                <hr className="w-[1100px] border-gray-400 border-t-2 ml-[230px] absolute mt-[320px] sm:hidden"/>

            </div>


        </div>

    )
};

export default Work;