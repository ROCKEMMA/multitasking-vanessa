// Crear el elemento del menú
let menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');

let menuImage = document.createElement('img');
menuImage.src = 'https://w7.pngwing.com/pngs/313/789/png-transparent-menu-list-options-ui-lines-icon.png';
menuImage.alt = 'Menu';
menuIcon.appendChild(menuImage);

let title = document.createElement('h1');
title.classList.add('app-name');  
title.textContent = 'Multitasking';

let searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');

let searchInput = document.createElement('input');
searchInput.classList.add('search-bar');  
searchInput.type = 'text';
searchInput.placeholder = 'Buscar';                         

let addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.textContent = '+';

let emojiButton = document.createElement('button');
emojiButton.classList.add('emoji-button');
emojiButton.textContent = '🥇';

searchContainer.appendChild(searchInput);
searchContainer.appendChild(addButton);
searchContainer.appendChild(emojiButton);

let header = document.createElement('div');
header.classList.add('header');

header.appendChild(menuIcon);
header.appendChild(title);
header.appendChild(searchContainer);

export { header };
