import React from 'react';
import Tt from "../assets/svg/Tt.jsx";
import Telef from "../assets/svg/Telef.jsx";
import Bg from "../assets/svg/Bg.jsx";
import Nan from "../assets/svg/Nan.svg"

const Footer = () => {
    return (
        <footer className="h-[400px] pt-[50px]">
            <div className="flex justify-evenly">
                <div>
                    <h1 className="text-[20px] font-medium mb-[35px]">Контактная информация</h1>
                    <div className="flex items-center gap-[10px]">
                        <Tt/>
                        <p className="text-[#999999]">test@test.ru</p>
                    </div>
                    <div className="flex items-center gap-[10px] my-[30px]">
                        <Telef/>
                        <p className="text-[#999999]">+8 777 555 66 99</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <Bg/>
                        <p className="text-[#999999]">Москва, Бульвар Ленина 33</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[20px] font-medium mb-[35px]">Основные ссылки</h1>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Главная</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Наши проекты</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]"> Наши услуги</p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]"> Контакты</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[20px] font-medium mb-[35px]">Наши проекты</h1>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">РосНано</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Сколково</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]"> Проект “Восток”</p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">ТЭЦ Калининграда</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[20px] font-medium mb-[35px]">Социальные сети</h1>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">VK.com</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Instagram</p>
                    </div>
                    <div className="flex items-center gap-[8px] mb-[30px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Facebook</p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <img src={Nan} alt="img"/>
                        <p className="text-[#999999]">Twitter</p>
                    </div>
                </div>
            </div>
            <hr className="mt-[40px] mb-[20px]"/>
            <h1 className="text-[20px] text-[#999999] text-center">
                (с) 2019. Все права защищены.
            </h1>
        </footer>
    );
};

export default Footer;