import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import JreapSagas from './sagas'


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}))  : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
const store = createStore( rootReducer, enhancer );

sagaMiddleware.run(JreapSagas)

export default store;
