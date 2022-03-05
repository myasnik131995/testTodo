/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../img/logo.jpg'

const About = () => {
    return(
        <div className='about'>
            <img src={logo}/>
            <h1>Тестовое задание</h1>
            <h2>Технический стек:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>REACT</li>
                <li>REACT ROUTER</li>
                <li>AXIOS</li>
            </ul>
            <h2>Реализованный функционал:</h2>
            <ul>
                <li>Переход между страницами(2шт.) осуществлен через navbar (react router)</li>
                <li>Переход между страницами без перегрузки страницы (пагинация)</li>
                <li>Реализован интерактивный список (сортировка, фильтрация)</li>
                <li>Данные списка запрошены с https://jsonplaceholder.typicode.com/todos (Реализован постраничный вывод todo)</li>
                <li>Реализованы возможности добавления/изменения/удаления todo</li>
            </ul>
        <p>Подробнее о приложении и о себе готов рассказать на собеседовании! </p>
        </div>
    )
}

export default About;