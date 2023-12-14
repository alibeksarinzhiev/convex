import React from 'react';
import './search.scss'
import img from './images/234557-konina_ulan_tushenaya_vysshii_sort_325_g.jpg'
import Cart from "../../Components/Cart";


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
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="search__stroka">
                        <Cart/>
                        <Cart/>
                        <Cart/>
                    </div>
                    <div className="search__stroka">
                      <Cart/>
                      <Cart/>
                      <Cart/>
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
                </div>
                </div>
            </div>
        </section>
    );
};

export default Search;