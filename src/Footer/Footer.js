import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <footer id='footer' className='footer'>
                <div className='footer-bottom'>
                    <div className='container'>
                        <div className='flex-container'>
                        <div className='flex-item'>
                          <h1 className='footer-title'>
                                <a href='https://itgid.info'>2020-&copy; FastExchange</a>
                            </h1>
                            <p>All Rights Reserved</p>
                        </div>
                        <div className='flex-item'>
                            <div className='module-body'>
                                <ul className='list-unstyled'>
                                    <li><a href='/sitemap' target='Карта сайта'>Карта сайта</a></li>
                                    <li><a href='/sitemap.xml' target='blank' tooltip='Google Sitemap'>Google Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex-item'>
                            <div className='module-body'>
                                <ul className='list-unstyled'>
                                    <li><a href='/d'>Гарантии</a></li>
                                    <li><a href='/s'>О сервисе</a></li>
                                    <li><a href='/s'>Условия возврата</a></li>
                                    <li><a href='/p'>Соглашение об исползования сервиса</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        <div className='copyright-bar'>
            <div className='flex-container'>
                <div className='flex-item'>
                    <ul className='link'></ul>
                </div>
                <div className='flex-item'>
                    <div className='clearfix payments-methods'>
                        <ul>
                            <img src='' data-toggle='tooltip' data-placement='top'
                                 data-original-title='www.webmoney.ru' alt=''/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
    }
    }
    export default Footer;
