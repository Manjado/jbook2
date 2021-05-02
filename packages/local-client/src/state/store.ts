import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { persisMiddlware} from './middlewares/presist-middlware'

export const store = createStore(reducer, {}, applyMiddleware(persisMiddlware ,thunk));
