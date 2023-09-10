
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './root/App/App';
import 'antd/dist/antd.css';
import '../src/assets/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../src/app/hooks/Reactİ18.ts/Translation';
import {store} from '../src/app/hooks/store'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  
 
    <Provider store={store}>
       
      
      <App/>
     
      
    </Provider>,
 
  document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept()
  }
  
