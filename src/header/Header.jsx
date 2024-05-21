import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="text-[16px] flex items-center justify-center gap-[40px] h-[80px] text-white">
                <a href="#">Главная</a>
                <a href="#">Наши проекты</a>
                <a href="#">Услуги</a>
                <a href="#">Новости</a>
                <a href="#">Контакты</a>
            </div>
            <hr className="w-[100%]"/>
        </div>
    );
};

export default Header;