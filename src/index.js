import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';     // Link 태그를 사용하기 위해서 BrowserRouter 태그로 감싸줘야함.
import AppLayout from './components/AppLayout';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>


    
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout>
            <App />           {/* App 컴포넌트에 라우터를 설정 -> App 에서 보여주는 내용이 바뀌는 형식. */}
          </AppLayout>
        </BrowserRouter>
      </Provider>
    




  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
