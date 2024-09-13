import { header } from "./componentes/header/header.js";
import { seccionTareas } from "./componentes/componentes/itemtarea/itemtarea.js";

let vinculo = document.querySelector(".root");

vinculo.appendChild(header);

vinculo.appendChild(seccionTareas);
