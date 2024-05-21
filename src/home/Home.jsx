import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center my-[100px] text-white">
           <p>Передовая IT студия</p>
            <h1 className="mb-[40px] mt-[15px] text-[48px] w-[829px] text-center font-medium">Мы создаем легкие решения
                сложных задач и проблем
            </h1>
            <button className="text-white px-[50px] py-3 bg-[#4985FF] rounded-[30px]">
                Наши проекты
            </button>
        </div>
    );
};

export default Home;