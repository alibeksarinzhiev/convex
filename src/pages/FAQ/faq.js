import React from 'react';
import './faq.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import drop from '../../img/arrow_to_down.png'
import vid from './image/image 13.png'


const Faq = () => {
    return (
        <section className='faq'>
            <div className="container">
                <div className="faq__box">
                    <div className="faq__left">
                        <h2>Вопрос-ответ</h2>
                        <h3>Часто задаваемые вопросы</h3>
                        <h3>Отправить посылку от родных
                            в учреждение</h3>
                        <h3>Вопросы по работе с сайтом</h3>
                        <button>Задать вопрос</button>
                    </div>

                    <div className="faq__right">
                        <div className='faq__question'>
                            <Accordion className='accordion'>
                                <AccordionSummary
                                    expandIcon={<img src={drop} alt=""/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h2 className='faq__typografia'>Что такое электронный магазин Convex?</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <p className='faq__opisanie'>
                                            Convex – это специализированный электронный магазин по доставке продуктов питания и товаров первой необходимости в Исправительные Колонии и Следственные Изоляторы РК.
                                            В электронном магазине представлены товары, включенные в перечень вещей и предметов, разрешенных для передачи лицам, находящимся в СИЗО и Исправительных Колониях.<br/><br/>

                                            В электронном магазине Convex можно:<br/><br/>
                                            1. Пополнив собственный баланс, отправить подследственному в СИЗО сформированный вами заказ.<br/><br/>
                                            2. Перевести денежные средства на баланс  подследственному или оужденному находящемуся в СИЗО или в Исправительных коланиях, для самостоятельного оформления заказа через Терминал установленного внутри учреждения.
                                        </p>
                                        <img src={vid} alt=""/>

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='faq__question'>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<img src={drop} alt=""/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h2 className='faq__typografia'>Что делать, если у меня возникает ошибка при оплате заказа/пополнении
                                        баланса, банковской картой?</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='faq__question'>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<img src={drop} alt=""/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h2 className='faq__typografia'>В течение, какого времени осуществляется доставка заказа? </h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='faq__question'>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<img src={drop} alt=""/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h2 className='faq__typografia'>Какая стоимость доставки?</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='faq__question'>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<img src={drop} alt=""/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography><h2 className='faq__typografia'>Планируется ли расширение ассортимента?</h2> </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;