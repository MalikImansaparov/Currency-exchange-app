import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <h1>Как с нами связаться</h1>
                    Мы всегда рады ответить на интересующие вас вопросы и выслушать ваши предложения по улучшению
                    сервиса FastExchange.ru.<br/> Также мы принимаем заявки на включение в листинг новых обменных
                    пунктов. <br/>Используйте следующий адрес для связи с нами:
                    E-mail: <a href='#'>info@FastExchange.ru</a>
                </p>
            </div>
        );
    }
}

export default About;
