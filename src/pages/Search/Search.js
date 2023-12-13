import React from 'react';
import './search.scss'
import img from './images/234557-konina_ulan_tushenaya_vysshii_sort_325_g.jpg'


const Search = () => {
    return (
        <section className='search'>
            <div className="container">
                <ul>
                    <li>Главная/</li>
                    <li>Еда/</li>
                    <li>Консервы</li>
                </ul>
                <h2>Консервы</h2>
                <div className='search__box'>
                <div className="search__left">
                    <h3>Стоимость в сомах</h3>
                    <div className='search__prise'>
                        <p>от</p>
                        <input type="text" placeholder='0 сом'/>
                        <p>от</p>
                        <input type="text" placeholder='0 сом'/>
                    </div>
                    <h3>Все (грамм)</h3>
                    <div className='search__prise'>
                        <p>от</p>
                        <input type="text" placeholder='0 сом'/>
                        <p>от</p>
                        <input type="text" placeholder='0 сом'/>
                    </div>
                    <div className="search__gal">
                        <input type="checkbox"/> <span>Акции</span>
                    </div>
                    <div className="search__gal">
                        <input type="checkbox"/> <span>В наличии</span>
                    </div>
                    <div className="search__gal">
                        <input type="checkbox"/> <span>Популярные товары</span>
                    </div>
                    <div className="search__gal">
                        <input type="checkbox"/> <span>Новинки</span>
                    </div>
                    <button className='search__prim'>Применить</button>
                    <button className='search__sbros'>Сбросить</button>
                </div>

                <div className="search__right">
                    <div className='search__rek'>
                        <p>16 товаров</p>
                        <div className='search__icon'>
                            <p>По увеличению цены</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.86128 5.52861C3.12163 5.26826 3.54374 5.26826 3.80409 5.52861L7.99935 9.72387L12.1946 5.52861C12.455 5.26826 12.8771 5.26826 13.1374 5.52861C13.3978 5.78896 13.3978 6.21106 13.1374 6.47141L8.47075 11.1381C8.2104 11.3984 7.78829 11.3984 7.52794 11.1381L2.86128 6.47141C2.60093 6.21106 2.60093 5.78896 2.86128 5.52861Z" fill="#303030"/>
                            </svg>
                        </div>
                    </div>
                    <div className="search__stroka">
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div className="search__stroka">
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                        <div className="search__cart">
                            <img src={img} alt=""/>
                            <h4>Конина тушеная Улан, есть
                                возможность в 2 строки</h4>
                            <h3>В наличии: 11 шт.</h3>
                            <p>Вес: 130гр</p>
                            <div className="search__coin">
                                <p>500 сом</p>
                                <button>В корзину</button>
                            </div>
                        </div>
                    </div><div className="search__stroka">
                    <div className="search__cart">
                        <img src={img} alt=""/>
                        <h4>Конина тушеная Улан, есть
                            возможность в 2 строки</h4>
                        <h3>В наличии: 11 шт.</h3>
                        <p>Вес: 130гр</p>
                        <div className="search__coin">
                            <p>500 сом</p>
                            <button>В корзину</button>
                        </div>
                    </div>
                    <div className="search__cart">
                        <img src={img} alt=""/>
                        <h4>Конина тушеная Улан, есть
                            возможность в 2 строки</h4>
                        <h3>В наличии: 11 шт.</h3>
                        <p>Вес: 130гр</p>
                        <div className="search__coin">
                            <p>500 сом</p>
                            <button>В корзину</button>
                        </div>
                    </div>
                    <div className="search__cart">
                        <img src={img} alt=""/>
                        <h4>Конина тушеная Улан, есть
                            возможность в 2 строки</h4>
                        <h3>В наличии: 11 шт.</h3>
                        <p>Вес: 130гр</p>
                        <div className="search__coin">
                            <p>500 сом</p>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Search;