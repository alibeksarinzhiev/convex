import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const CustomContext = createContext();


export const Context = (props)=>{
    const [product,setProduct] = useState([])
    const [user,setUser]= useState({email:''})
    const [status,setStatus] = useState(false)
    const [basket,setBasket] = useState([])
    const [dairy,setDairy] = useState([])
    const [grocery,setGrocery] = useState([])
    const [flakes,setFlakes] = useState([])
    const [dumplings,setDumplings] = useState([])
    const [fish,setFish] = useState([])
    const [meat,setMeat] = useState([])
    const [vegetable,setVegetable] = useState([])
    const [carbonated,setCarbonated] = useState([])
    const [sandwich,setSandwich] = useState([])
    const [vegetables,setVegetables] = useState([])
    const [fruits,setFruits] = useState([])
    const [actions,setActions] = useState([])


    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setProduct(data))
    },[])


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

const addBasket = (id)=>{
    console.log('найден товар с ' + id)
    const find = product.find(el => el.id === id)
    const localUser = JSON.parse(localStorage.getItem('user'))

    if (user.email.length<1){
        alert('сначало войдите в аккаунт чтобы добавлять в корзину')
    }else {
        setBasket([...basket, find])
    }
    console.log(basket)
}

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


    const addDairy = (id)=>{
        console.log('найден товар с ' + id)
        const find = dairy.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setDairy(
                data.filter((el)=>{
                    return el.category === 'dairy'
                })
            ))
    },[])

    const addGrocery = (id)=>{
        console.log('найден товар с ' + id)
        const find = grocery.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setGrocery(
                data.filter((el)=>{
                    return el.category === 'grocery'
                })
            ))
    },[])


    const addSandwich = (id)=>{
        console.log('найден товар с ' + id)
        const find = sandwich.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setSandwich(
                data.filter((el)=>{
                    return el.category === 'sandwich'
                })
            ))
    },[])


    const addFlakes = (id)=>{
        console.log('найден товар с ' + id)
        const find = flakes.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setFlakes(
                data.filter((el)=>{
                    return el.category === 'flakes'
                })
            ))
    },[])

    const addDumplings = (id)=>{
        console.log('найден товар с ' + id)
        const find = dumplings.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setDumplings(
                data.filter((el)=>{
                    return el.category === 'dumplings'
                })
            ))
    },[])


    const addFish = (id)=>{
        console.log('найден товар с ' + id)
        const find = fish.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setFish(
                data.filter((el)=>{
                    return el.category === 'fish'
                })
            ))
    },[])

    const addMeat = (id)=>{
        console.log('найден товар с ' + id)
        const find = meat.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setMeat(
                data.filter((el)=>{
                    return el.category === 'meat'
                })
            ))
    },[])

    const addVegetable = (id)=>{
        console.log('найден товар с ' + id)
        const find = vegetable.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setVegetable(
                data.filter((el)=>{
                    return el.category === 'vegetable'
                })
            ))
    },[])

    const addCarbonated = (id)=>{
        console.log('найден товар с ' + id)
        const find = carbonated.find(el => el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/product_convex')
            .then(({data})=>setCarbonated(
                data.filter((el)=>{
                    return el.category === 'carbonated'
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
        grocery,
        addGrocery,
        sandwich,
        addSandwich,
        flakes,
        addFlakes,
        dumplings,
        addDumplings,
        dairy,
        addDairy,
        fish,
        addFish,
        meat,
        addMeat,
        vegetable,
        addVegetable,
        carbonated,
        addCarbonated,
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
        login,
        product,
        setProduct,
        addBasket
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}