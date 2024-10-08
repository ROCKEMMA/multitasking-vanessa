import { tareas } from "../../../data/Dbtarea.js"; 
import { usuarios } from "../../../data/DbUsuario.js"; 

// Función para crear un elemento HTML
function crearElemento(tag, clase, contenido) {
  const elemento = document.createElement(tag);
  if (clase) elemento.className = clase;
  if (contenido) elemento.textContent = contenido;
  return elemento;
}

// Función para obtener emojis de los usuarios asignados
function obtenerEmojisDeUsuarios(idsUsuarios) {
  return idsUsuarios.map(id => {
    
    const usuario = usuarios.find(user => user.id_usuario === id);
  });
}

// Función para crear una tarjeta de tarea
function crearTarea({ nombre, personas, fecha, estado }) {
  const tarea = crearElemento('div', 'tarea');
  
  const nombreTarea = crearElemento('h3', 'nombre-tarea', nombre);
  tarea.appendChild(nombreTarea);

  const personasAsignadas = crearElemento('p', 'personas-asignadas', `Personas asignadas ${obtenerEmojisDeUsuarios(personas).join(' ')}`);
  tarea.appendChild(personasAsignadas);
  
  const fechaEntrega = crearElemento('p', 'fecha-entrega', `Fecha de entrega ${fecha}`);
  tarea.appendChild(fechaEntrega);
  
  const estadoTarea = crearElemento('p', 'estado-tarea', `Estado ${estado}`);
  tarea.appendChild(estadoTarea);
  
  return tarea;
}

// Función para generar y agregar todas las tareas
function renderizarTareas(tareas) {
  const contenedor = crearElemento('section', 'lista-tareas');

  tareas.forEach(tareaData => {
    const tareaElement = crearTarea({
      nombre: tareaData.nombre,
      personas: tareaData.usuarios_asignados,
      fecha: tareaData.fecha_limite,
      estado: tareaData.estado,
    });
    contenedor.appendChild(tareaElement);
  });

  return contenedor;
}

// Generar la sección de tareas y exportarla
const seccionTareas = renderizarTareas(tareas);

export { seccionTareas };
