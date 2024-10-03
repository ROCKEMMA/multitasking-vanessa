const usuarios = [
  {
    id_usuario: 1,
    nombre: "Ana Pérez",
    tareas_asignadas: [1],
    estados_tareas: {
      1: "en progreso"
    }
  },
  {
    id_usuario: 2,
    nombre: "Luis García",
    tareas_asignadas: [1, 2],
    estados_tareas: {
      1: "en progreso",
      2: "incompleto"
    }
  },
  {
    id_usuario: 3,
    nombre: "María López",
    tareas_asignadas: [2, 3],
    estados_tareas: {
      2: "incompleto",
      3: "completo"
    }
  },
  {
    id_usuario: 4,
    nombre: "Carlos Fernández",
    tareas_asignadas: [4, 8],
    estados_tareas: {
      4: "en progreso",
      8: "en progreso"
    }
  },
  {
    id_usuario: 5,
    nombre: "Sofía Martínez",
    tareas_asignadas: [5, 8, 12],
    estados_tareas: {
      5: "incompleto",
      8: "en progreso",
      12: "en progreso"
    }
  },

];

export { usuarios };
