import React, {useState} from 'react';

const Header = () => {
    const [burger, setBurger] = useState(false);

    const toggleMenu = () => {
        setBurger(!burger);
    };

    return (
        <div>
            <div className="h-[80px] flex items-center justify-center relative">
                <nav className="hidden text-[16px] text-white md:flex gap-[40px]">
                    <a href="#">Главная</a>
                    <a href="#">Наши проекты</a>
                    <a href="#">Услуги</a>
                    <a href="#">Новости</a>
                    <a href="#">Контакты</a>
                </nav>
                <div className="md:hidden" onClick={toggleMenu}>
                    <button className="focus:outline-none absolute right-3 top-[15px] z-50">
                        <svg className={`w-8 h-8 transition-transform ${burger ? 'transform rotate-90' : ''}`} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {burger && (
                    <nav className="md:hidden text-white bg-gray-500 w-full pt-[50px] sm:pb-[10px] absolute top-0 left-0 z-10 shadow-lg">
                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">Главная</a>
                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">Наши проекты</a>
                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">Услуги</a>
                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">Новости</a>
                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-200">Контакты</a>
                    </nav>
                )}
            </div>
            <hr className="w-[100%]"/>
        </div>
    );
};


export default Header;