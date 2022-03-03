/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../img/logo.jpg'

const About = () => {
    return(
        <div className='about'>
            <img src={logo}/>
            <h1>Тестовое задание</h1>
            <p>Приложение написано согласно техническому заданию.<br/>
            <b>Использовалось:</b> react, react router, js, html, css, axios<br/>
            <b>Реализован следующий функционал:</b><br/>
            - пагинация без перезагрузки страницы<br/>
            - подгрузка "списка дел" с сервера (использовал бибилотеку axios)<br/>
            - добавление нового todo<br/>
            - </p>
        </div>
    )
}

export default About;