import React from 'react';
import SvgFlie from "../assets/svg/SvgFlie.jsx";

const Corporations = () => {
    return (
        <div className="w-[1440px] m-aut flex flex-col justify-center items-center">
            <div className="mt-[110px]
         ">
                <h1 className="text-[36px] text-center font-bold mb-[30px] text-black
               sm:text-[50px]
               2xl:text-[36px]">
                    Мы создаем мобильные приложения <br/>
                    для крупных корпораций
                </h1>

                <p className="text-gray-600 font-normal text-center
                sm:text-[30px]
                2xl:text-[18px]"> Lorem
                    Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br/> Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.</p>

            </div>


            <div className=" flex gap-[40px] mt-[50px] ml-[190px]
            sm:grid grid-cols-1 sm:mr-[160px] sm:text-[25px]
            md:grid md:grid-cols-2
           2xl:grid 2xl:grid-cols-3 2xl:text-[17px]

               ">
                <div className="flex items-center gap-7">

                    <div className="py-[7px] px-[7px] rounded-full border-2 border-black-200 ">
                        <div className="py-[20px] px-[20px] border-2 border-blue-200 rounded-full">
                            <SvgFlie/>
                        </div>

                    </div>
                    <div>
                        <h1 className="font-bold text-[20px] sm:text-[30px] 2xl:text-[20px]">Создание сайтов</h1>
                        <p className="text-gray-500">Lorem Ipsum - это текст- <br/> "рыба", часто используе
                            в <br/> печати и вэб-дизайне.</p>
                    </div>


                </div>
                <div className="flex items-center gap-7">

                    <div className="py-[7px] px-[7px] rounded-full border-2 border-black-200 ">
                        <div className="py-[20px] px-[20px] border-2 border-blue-200 rounded-full">
                            <SvgFlie/>
                        </div>

                    </div>
                    <div>
                        <h1 className="font-bold text-[20px] sm:text-[30px] 2xl:text-[20px]">Создание сайтов</h1>
                        <p className="text-gray-500">Lorem Ipsum - это текст- <br/> "рыба", часто используе
                            в <br/> печати и вэб-дизайне.</p>
                    </div>


                </div>
                <div className="flex items-center gap-7">

                    <div className="py-[7px] px-[7px] rounded-full border-2 border-black-200 ">
                        <div className="py-[20px] px-[20px] border-2 border-blue-200 rounded-full">
                            <SvgFlie/>
                        </div>

                    </div>
                    <div>
                        <h1 className="font-bold text-[20px] sm:text-[30px] 2xl:text-[20px]">Создание сайтов</h1>
                        <p className="text-gray-500">Lorem Ipsum - это текст- <br/> "рыба", часто используе
                            в <br/> печати и вэб-дизайне.</p>
                    </div>


                </div>

            </div>


            <button className="py-[10px] px-[40px] bg-blue-500 rounded-[80px] text-white  mt-[55px]
          sm:py-[20px] sm:px-[60px] sm:text-[30px]
          2xl:py-[10px] 2xl:px-[40px] 2xl:text-[20px]"> Все услуги
            </button>
        </div>
    );
};

export default Corporations;