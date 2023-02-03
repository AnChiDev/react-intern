import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*3.
Viết các component dưới đây tại Index.js
1. Tạo 1 Class Component chứa HTML: <p>Xin chào ReactJS, hiển thị HTML sử dụng Class Component<p>
- Hiển thị Class Component đã tạo vào thẻ Div Root (Thay thế component   <App />)
2. Tạo 1 Function Component chứa HTML: <p>Xin chào ReactJS, hiển thị HTML sử dụng Function Component<p>
- Hiển thị Function Component đã tạo vào thẻ Div Root  (Thay thế component   <App />)*/



// class Hello extends React.Component {
//   render() {
//     return <p className="text">Xin chào ReactJs, hiển thị HTML sử dụng Class Component</p>;
//   }
// }
// function Hello2() {
//   return <p className="text">Xin chào ReactJs, hiển thị HTML sử dụng Function Component</p>;
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello />
    <Hello2 /> */}
    <App />
  </React.StrictMode>
  //2.Hiển thị HTML: "<p>Xin chào ReactJS<p>" trong 1 thẻ div root tại index.js <body> <div id="root"></div> </body>
  // <body> <div id="root"><p>Xin chào ReactJS</p></div> </body>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
