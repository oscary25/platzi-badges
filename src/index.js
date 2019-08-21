// element.innerHTML = "hello, mundo";
// const container = document.getElementById("app");
// container.appendChild(element);
import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Badgenews from "./pagess/Badgenews";
// const name = "oscary";

// const jsx = (
//   <div>
//     <h1>Hola, Bienvenido {name}</h1>
//     <p>Eres Una Maquina,pro,mastodonte</p>
//   </div>
// );
// const element = document.createElement("h1");/ otro metodo de crear contenido
const container = document.getElementById("app");
// reactDom.render(_que_,_donde_ );
reactDom.render(<Badgenews />, container);
//siempre aqui  hay que poner las variales
