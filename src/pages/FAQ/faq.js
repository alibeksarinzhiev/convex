import React from 'react';
import './faq.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import drop from '../../img/arrow_to_down.png'


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
                            <h3>Что такое электронный магазин Convex?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                        <div className='faq__question'>
                            <h3>Что делать, если у меня возникает ошибка при оплате заказа/пополнении
                                баланса, банковской картой?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                        <div className='faq__question'>
                            <h3>В течение, какого времени осуществляется доставка заказа? </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                        <div className='faq__question'>
                            <h3>Какая стоимость доставки?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                        <div className='faq__question'>
                            <h3>Планируется ли расширение ассортимента?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                        <div className='faq__question'>
                            <h3>Для чего знать Логин близкого человека находящегося в учреждении УИС?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" fill="#46C578"/>
                            </svg>
                        </div>
                        <div className="faq__line"></div>
                    </div>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<img src={drop} alt=""/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;