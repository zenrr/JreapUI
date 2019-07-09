import axios from 'axios'
import createMessage from '../../utils/message'

const lookUpService = axios.create({
    baseURL : '',
    timeout:10000,
    headers:{
        'content-type':'application/x-www-form-urlencoded'
    }
})

// request拦截器
lookUpService.interceptors.request.use(
    config => {
        // TODO
        config.url = 'jreap' + config.url
        return config
    },
    error => {
        
    }
)

// request拦截器
lookUpService.interceptors.response.use(
    response => {
        // TODO
        console.log(response)
        const { jsonArray } = response.data
        return dataMap(jsonArray)
    },
    error => {
        if(error.response.status === 404){
            createMessage({
                msg:'你要查找的内容可能到火星去了'
            })
        } else if(error.response.status === 405){
            createMessage({
                msg:'请求参数不对'
            })
        }  else if(error.response.status === 504){
            createMessage({
                msg:'请求参数不对'
            })
            return 
        }
        
    }
)

function dataMap (data:any):void{
    data.map( item => {
        item.key = item.id;
        if(item.items.length > 0){
            dataMap(item)
        }
    })
    return data

}

export default lookUpService