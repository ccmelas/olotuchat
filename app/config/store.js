import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './../reducers';

//const middleware = [];

const enhancer = compose(applyMiddleware(thunk));

// if (process.env.NODE_ENV === 'development') {
//     middleware.push(logger);
// }

const store = createStore(reducers, enhancer);

export default store;