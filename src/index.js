// element.innerHTML = "hello, mundo";
// const container = document.getElementById("app");
// container.appendChild(element);
import React from "react";
import reactDom from "react-dom";
import Badge from "./components/Badge";
// const name = "oscary";

<<<<<<< HEAD
import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
=======
// const jsx = (
//   <div>
//     <h1>Hola, Bienvenido {name}</h1>
//     <p>Eres Una Maquina,pro,mastodonte</p>
//   </div>
// );
// const element = document.createElement("h1");/ otro metodo de crear contenido
const container = document.getElementById("app");
// reactDom.render(_que_,_donde_ );
reactDom.render(<Badge />, container);
//siempre aqui  hay que poner las variales
>>>>>>> fe29a24... ultimo
