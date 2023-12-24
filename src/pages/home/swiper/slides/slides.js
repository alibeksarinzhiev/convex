import React from 'react';
import './slides.scss'
import Food from '././image_slides/Food.png'
import New from './image_slides/New.png'
import Stock from './image_slides/Stock.png'
import Kits from './image_slides/Kits.png'
import { motion } from "framer-motion"

const Slides = () => {
    return (
        <section className='slides'>

                <div className="container">
                      < div className="slides__tovar">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ from: 70, duration: 1}}
                             className="slides__dishes">
                        <img src={Food} alt=""/>
                        <h2>Горячие блюда</h2>
                        <p>Вкуснейшие блюда из 4 ресторанов</p>
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ from: 70, duration: 1}}
                        className="slides__newItems">
                        <img src={New} alt=""/>
                        <h2>Новинки</h2>
                        <p>Новые позиции</p>
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ from: 70, duration: 1}}
                        className="slides__stock">
                        <img src={Stock} alt=""/>
                        <h2>Акции</h2>
                        <p>Лучшие цены</p>
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ from: 70, duration: 1}}
                        className="slides__kits">
                        <img src={Kits} alt=""/>
                        <h2>Комплекты</h2>
                        <p>Все в одном</p>
                    </motion.div>
                </div>
                    </div>
        </section>
    );
};

export default Slides;