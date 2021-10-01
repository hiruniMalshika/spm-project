import  {useState, useEffect} from 'react'
import axios from 'axios'


function UserAPI(token) {

    const[isLogged, setIsLogged] = useState(false)
    const [isCashier, setIsCashier] = useState(false)
    const [isManager, setIsManager] = useState(false)
    const [isKitchenManger, setIsKitchenManager] = useState(false)
    const [isUser, setIsUser] = useState(false)

    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    

    useEffect(() => {
        if(token){
            const getUser = async ()=>{
                try{
                    const res = await axios.get('/csuser/infor', {
                        headers: {Authorization: token}
                    })
                    
                    setIsLogged(true)
                    res.data.role === 0 ? setIsUser(true) : setIsUser(false);
                    res.data.role === 1 ? setIsManager(true) : setIsManager(false);
                    res.data.role === 2 ? setIsCashier(true) : setIsCashier(false);
                    res.data.role === 3 ? setIsKitchenManager(true) : setIsKitchenManager(false);
                    setCart(res.data.cart)
                    
                }catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

    const addCart = async (food) => {
        if(!isLogged) return alert("Please login to continue")

        const check = cart.every(item => {
            return item._id !== food._id
        })

        if(check){
            setCart([...cart, {...food, quantity: 1}])

            await axios.patch('/csuser/addcart', {cart: [...cart, {...food, quantity: 1}]}, {
                headers:{Authorization: token}
            })
        }
        else{
            alert("This product has been added to cart")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isUser : [isUser, setIsUser],
        isCashier: [isCashier, setIsCashier],
        isManager: [isManager, setIsManager],  
        isKitchenManager: [isKitchenManger, setIsKitchenManager],  
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default UserAPI
