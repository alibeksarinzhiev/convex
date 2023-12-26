import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const CustomContext = createContext();


export const Context = (props)=>{
    const [user,setUser]= useState({email:''})
    const [status,setStatus] = useState(false)
    const [basket,setBasket] = useState([])
    const [dairy,setDairy] = useState([])
    const [vegetables,setVegetables] = useState([])
    const [fruits,setFruits] = useState([])
    const [actions,setActions] = useState([])


     const addActions = (id)=>{
        console.log('найден товар с ' + id)
        const find = actions.find(el => el.id === id)
        const localUser = JSON.parse(localStorage.getItem('user'))

        if (user.email.length<1){
            alert('сначало войдите в аккаунт чтобы добавлять в корзину')
        }else {
            setBasket([...basket, find])
        }
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setActions(data.filter((el)=>{
                return el.action === 'true'
            })))
    },[])



    const addVegetables = (id)=>{
        console.log('найден товар с ' + id)
        const find = vegetables.find(el => el.id === id)
        const localUser = JSON.parse(localStorage.getItem('user'))

        if (user.email.length<1){
            alert('сначало войдите в аккаунт чтобы добавлять в корзину')
        }else {
            setBasket([...basket, find])
        }
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setVegetables(data.filter((el)=>{
                return el.category === 'vegetables'
            })))
    },[])


    const addFruits = (id)=>{
        const find = fruits.find (el =>el.id === id)

            setBasket( [...basket,find])

        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setFruits(
                data.filter((el)=>{
                    return el.category === 'fruits'
                })
            ))
    },[])


    const showPassword = ()=>{
        setStatus(!status)
    }
    const navigate = useNavigate()
    const loginUser = (data)=>{
        axios.post('http://localhost:8080/login',data )
            .then((res)=>{
                localStorage.setItem('user',JSON.stringify(res.data.user))
                setUser(res.data.user)
            })
        navigate('/')
    }
    const logOut = ()=>{
        setUser({email:''})
        localStorage.removeItem('user')
    }
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('user')) !==null)
            setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    const login=(data)=>{
        console.log(data)
    }


    const plusOne = (id)=>{
        const find = basket.find (el =>el.id === id)
        setBasket(basket.map((el)=>{
            if (el.id === id){
                if (el.quantity === 30){
                    el.quantity = 'max'
                    return el
                }
                else if (el.quantity === 'max'){
                    return el
                }
                else if (el.quantity === 'min'){
                    el.quantity = 1
                    return el
                }
                return {...el,quantity:el.quantity+ +1}
            }
            return el
        }))

    }

    const minusOne = (id)=>{
        const find = basket.find (el =>el.id === id)
        setBasket(basket.map((el)=>{
            if (el.id === id){
                if (el.quantity === 1){
                    el.quantity = 'min'
                    return el
                }
                else if (el.quantity === 'min'){
                    return el
                }
                else if (el.quantity === 'max'){
                    el.quantity = 30
                    return el
                }
                return {...el,quantity:el.quantity - 1}
            }
            return el
        }))

    }



    const deleteObject = (id)=>{
        console.log('найдено' + id)
        const find = basket.find (el =>el.id === id)
        setBasket(basket.filter((el)=>{
            if (el.id !== id){
                return [...basket,el.id !== find]
            }
        }))
        console.log('удален объект с id ' + id)
    }
    const deleteAll = ()=>{
        setBasket([])
        console.log(basket)
    }


    const value ={
        user,
        setUser,
        status,
        setStatus,
        dairy,
        setDairy,
        vegetables,
        fruits,
        basket,
        actions,
        setActions,
        addActions,
        addFruits,
        addVegetables,
        showPassword,
        plusOne,
        minusOne,
        deleteObject,
        deleteAll,
        loginUser,
        logOut,
        login
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}