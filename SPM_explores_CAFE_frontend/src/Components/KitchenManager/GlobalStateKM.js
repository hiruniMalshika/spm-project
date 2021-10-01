import React, {createContext, useState} from 'react'
import FoodsAPI from '../../api/FoodsAPI'
import KMCategoriesAPI from '../../api/KMCategoriesAPI'
// import KMmessagesAPI from '../../api/KMmessagesAPI'
import KMDailyMenuAPI from '../../api/KMDailyMenuAPI'
import KMCustomersAPI from '../../api/KMCustomersAPI'
import OrdersKMAPI from '../../api/OrdersKMAPI'



export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
     
    // FoodsAPI()
    // const state = {
    //     token: [token, setToken],
    //     foodsAPI: FoodsAPI()
    // }
    // GetOrdersAPI()
    
    const state = {
        token: [token, setToken],
        foodsAPI: FoodsAPI(),

        // kmmessagesAPI: KMmessagesAPI(),

        kmcategoriesAPI: KMCategoriesAPI(), 

        kmcustomersAPI: KMCustomersAPI(),

        kmdailyMenuAPI: KMDailyMenuAPI(),

        ordersKMAPI: OrdersKMAPI()
 

    }


    

    return(
        <GlobalState.Provider value={state} >
            {children}
        </GlobalState.Provider>
        
    )
}