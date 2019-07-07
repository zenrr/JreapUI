import { put } from 'redux-saga/effects';
import { changeLgoinInfoAction } from "./action"
import axios from "axios";
import Jreap  from '../../utils/core'
import { LoginInfo } from '../../types';


export  function* getLoginInfo(value?:LoginInfo | null) : IterableIterator<any> { 
    const res =yield axios.request({
        url:'/getLoginInfo.from',
        method: "POST",
        data:{
            username:value
        }
    })
    const action = changeLgoinInfoAction(res.data);
    yield put(action)
}
