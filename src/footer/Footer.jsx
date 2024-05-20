import React, {useState} from 'react';
import Tt from "../assets/svg/Tt.jsx";
import Telef from "../assets/svg/Telef.jsx";
import Bg from "../assets/svg/Bg.jsx";
import Nan from "../assets/svg/Nan.svg"

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);
    const toggleTwo = () => setTwo(!two);
    const toggleThree = () => setThree(!three);

    return (
        <footer className="h-[400px] pt-[50px] bg-[#F6F6F8]">
            <div className="md:flex pl-[30px] gap-[20px] 2xl:xl:lg:flex justify-evenly">
                <div className="mb-2">
                    <h1 className="text-[20px] font-medium mb-[35px]" onClick={toggleAccordion}>
                        Основные ссылки
                        <button className="ml-2 focus:outline-none md:hidden">
                            <svg className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h1>
                    <div className={`md:flex md:flex-col ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Главная"/>
                            <p className="text-[#999999]">Главная</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Наши проекты"/>
                            <p className="text-[#999999]">Наши проекты</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Наши услуги"/>
                            <p className="text-[#999999]">Наши услуги</p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <img src={Nan} alt="Контакты"/>
                            <p className="text-[#999999]">Контакты</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="text-[20px] font-medium mb-[35px]" onClick={toggleTwo}>
                        Наши проекты
                        <button className="ml-2 focus:outline-none md:hidden">
                            <svg className={`w-6 h-6 transition-transform ${two ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h1>
                    <div className={`md:flex md:flex-col ${two ? 'block' : 'hidden'} md:block`}>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="РосНано"/>
                            <p className="text-[#999999]">РосНано</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Сколково"/>
                            <p className="text-[#999999]">Сколково</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Проект Восток"/>
                            <p className="text-[#999999]">Проект “Восток”</p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <img src={Nan} alt="ТЭЦ Калининграда"/>
                            <p className="text-[#999999]">ТЭЦ Калининграда</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="text-[20px] font-medium mb-[35px]" onClick={toggleThree}>
                        Социальные сети
                        <button className="ml-2 focus:outline-none md:hidden">
                            <svg className={`w-6 h-6 transition-transform ${three ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h1>
                    <div className={`md:flex md:flex-col ${three ? 'block' : 'hidden'} md:block`}>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="VK.com"/>
                            <p className="text-[#999999]">VK.com</p>
                        </div>
                        <div className="flex items_center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Instagram"/>
                            <p className="text-[#999999]">Instagram</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src={Nan} alt="Facebook"/>
                            <p className="text-[#999999]">Facebook</p>
                        </div>
                        <div className="flex items_center gap-[8px]">
                            <img src={Nan} alt="Twitter"/>
                            <p className="text-[#999999]">Twitter</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-[20px] font-medium mb-[35px]">Контактная информация</h1>
                    <div className="flex items-center gap-[10px]">
                        <Tt />
                        <p className="text-[#999999]">test@test.ru</p>
                    </div>
                    <div className="flex items-center gap-[10px] my-[30px]">
                        <Telef />
                        <p className="text-[#999999]">+8 777 555 66 99</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <Bg />
                        <p className="text-[#999999]">Москва, Бульвар Ленина 33</p>
                    </div>
                </div>
            </div>
            <hr className="mt-[40px] mb-[20px]"/>
            <h1 className="text-[20px] text-[#999999] text-center bottom-0">
                (с) 2019. Все права защищены.
            </h1>
        </footer>
    );
};

export default Footer;