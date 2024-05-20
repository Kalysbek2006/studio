import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[60px] md:pb-[100px] text-white">
            <p className="text-center text-[14px] md:text-[18px]">Передовая IT студия</p>
            <h1 className="mb-[20px] mt-[10px] md:mb-[40px] md:mt-[15px] text-[24px] md:text-[36px] lg:text-[45px] max-w-[60%] md:w-[900px] text-center font-medium">
                Мы создаем легкие решения сложных задач и проблем
            </h1>
            <button className="text-white px-[20px] py-2 md:px-[30px] md:py-3 lg:px-[50px] lg:py-4 bg-[#4985FF] rounded-[20px] md:rounded-[30px]">
                Наши проекты
            </button>
        </div>
    );
};

export default Home;