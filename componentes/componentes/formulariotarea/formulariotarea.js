// Crear el contenedor del formulario
const formularioContainer = document.createElement('div');
formularioContainer.id = 'formularioTareaContainer'; // Asegúrate de que tenga un ID
formularioContainer.classList.add('formulario-container');
formularioContainer.style.display = 'none'; // Oculta el contenedor inicialmente

// Crear el formulario
const taskForm = document.createElement('form'); // Cambiamos a 'form'
taskForm.classList.add('task-form');

// Título del formulario
const title = document.createElement('h2');
title.textContent = 'Agregar Nueva Tarea';
taskForm.appendChild(title);

// Campo de descripción de la tarea
const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Descripción de la tarea';
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.required = true; // Campo obligatorio
taskForm.appendChild(descriptionLabel);
taskForm.appendChild(descriptionInput);

// Selección múltiple para usuarios
const userLabel = document.createElement('label');
userLabel.textContent = 'Seleccionar usuarios';
const userSelect = document.createElement('select');
userSelect.multiple = true; // Permitir selección múltiple

// Agregar opciones de usuario (ejemplo)
['Usuario 1', 'Usuario 2', 'Usuario 3'].forEach(user => {
    const option = document.createElement('option');
    option.value = user;
    option.textContent = user;
    userSelect.appendChild(option);
});

taskForm.appendChild(userLabel);
taskForm.appendChild(userSelect);

// Campo para la fecha de entrega
const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Fecha de entrega';
const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
taskForm.appendChild(dueDateLabel);
taskForm.appendChild(dueDateInput);

// Selección para estado
const statusLabel = document.createElement('label');
statusLabel.textContent = 'Estado';
const statusSelect = document.createElement('select');
const assignedOption = document.createElement('option');
assignedOption.value = 'asignado';
assignedOption.textContent = 'Asignado';
const unassignedOption = document.createElement('option');
unassignedOption.value = 'sin_asignar';
unassignedOption.textContent = 'Sin asignar';
statusSelect.appendChild(assignedOption);
statusSelect.appendChild(unassignedOption);
taskForm.appendChild(statusLabel);
taskForm.appendChild(statusSelect);

// Botón para crear una nueva tarea
const createTaskButton = document.createElement('button');
createTaskButton.type = 'button'; // Cambia a 'button' para evitar el envío del formulario
createTaskButton.textContent = 'Crear Tarea';
createTaskButton.classList.add('create-task-button');
taskForm.appendChild(createTaskButton);

// Botón para cerrar el formulario
const closeButton = document.createElement('button');
closeButton.type = 'button'; // Cambia a 'button' para evitar el envío del formulario
closeButton.textContent = 'Cerrar';
closeButton.classList.add('close-form');
taskForm.appendChild(closeButton);

// Agregar el formulario al contenedor
formularioContainer.appendChild(taskForm);
document.body.appendChild(formularioContainer);

// Añadir evento al botón de agregar tarea en el header
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    // Restablecer todos los campos de entrada a su estado inicial
    taskForm.reset(); // Restablece el formulario
    formularioContainer.style.display = 'flex'; // Muestra el formulario
});

// Añadir funcionalidad para cerrar el formulario
closeButton.addEventListener('click', () => {
    formularioContainer.style.display = 'none'; // Oculta el formulario
    taskForm.reset(); // Restablece el formulario
});

export { formularioContainer };
