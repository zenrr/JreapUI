import { put, takeEvery } from 'redux-saga/effects';
import { IS_NEW_UESR_LODING ,  GET_LOGIN_INFO ,CHANGE_USERNAME , CHANGE_PASSWORD , LOGIN} from '../core/login/actionTypes'

import {getLoginInfo} from "../core/login/sagas";

// generator 函数
function* JreapSagas():IterableIterator<any> {
	yield takeEvery(GET_LOGIN_INFO, getLoginInfo);
}

export default JreapSagas;