import axios from 'axios'

import config from './config'
import {
    ProductsDataBegin,
    ProductsDataSuccess,
    ProductsDataFail,
    isDataEnded
} from '../actions/productsAction.js'


// get the products by category
export const getProductsByType = (Id, type, page)=>{
    let url = ``
    return dispatch => {
        if (page === 0)
        dispatch(ProductsDataBegin())
        //get data from SaoasApi

        // send a url depened on witch type is asked for
        if (type === "category"){
            url = `${config.baseUrl}/productbyCategorie/${Id}/page/${page+1}/maxResult/${10}`
        }
        else if(type === "culture"){
            url = `${config.baseUrl}/productbyCulture/${Id}`
        }
        else {
            console.log('the error is in the getProduct if statement')
        }
        return axios.get(url)

            // if the connection with the api server is okay
            .then(response =>{
                if (response.status === 200){
                    dispatch(ProductsDataSuccess(response.data, page))
                    console.log("response length : ", response.data.length)
                    console.log("current page number : ", page," categoryID: ",Id)
                    if(response.data.length <10){
                        dispatch(isDataEnded(-1))
                    }

                } else{
                    throw Error(response.status)
                }

            // if there is an error with establishing the connection with the server
            }).catch(err => {
                dispatch(ProductsDataFail(err.message));
                console.log("what you did wrong is : ",err.message);
            })
    }
};