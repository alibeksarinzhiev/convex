import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const CustomContext = createContext();


export const Context = (props)=>{
    const [user,setUser]= useState({email:''})
    const [status,setStatus] = useState(false)
    const [product,setProduct] = useState([])
    const [basket,setBasket] = useState([])
    const [dairy,setDairy] = useState([])
    const [vegetables,setVegetables] = useState([])
    const [fruits,setFruits] = useState([])

    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>{setProduct(data)})
    },[])


    const addVegetables = (id)=>{
        console.log('найден товар с ' + id)
        const find = vegetables.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setVegetables(data.filter((el)=>{
                return el.category === 'vegetables'
            })))
    },[])


    const addFruits = (id)=>{
        console.log('найден товар с ' + id)
        const find = vegetables.find(el => el.id === id)
        setBasket([...basket,find])
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




    const value ={
        user,
        setUser,
        status,
        setStatus,
        dairy,
        setDairy,
        vegetables,
        fruits,
        addFruits,
        addVegetables,
        showPassword,
        loginUser,
        logOut,
        login
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}