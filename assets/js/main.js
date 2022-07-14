const newTodo = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodo');
const todos = document.getElementById('list');
const messageError = document.getElementById('messageError');

if (typeof (Storage) !== "undefined") {

    // Al cargar la página se cargan todos los datos de la LocalStorage a un HTML.
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('todos')) {
            let todosList = JSON.parse(localStorage.getItem('todos'));
            todosList.forEach((todoList) => {
                // Creamos cada dato con un "P" y le damos una clase "todo".
                const p = document.createElement('p');
                const div = document.createElement('div');
                const div2 = document.createElement('div')
                p.setAttribute('class', 'todo');
                p.setAttribute('id', todoList.id)
                p.innerText = todoList.content;
                todos.appendChild(p);

                p.appendChild(div2);
                p.appendChild(div);

                const buttonXmark = document.createElement('i');
                const buttonTrash = document.createElement('i');
                const buttonTrash2 = document.createElement('i');
                const buttonCheck = document.createElement('i');
                div2.setAttribute('class', 'actions-uncheck');
                div2.appendChild(buttonCheck);
                div2.appendChild(buttonTrash2);
                div.setAttribute('class', 'actions-check');
                div.appendChild(buttonXmark);
                div.appendChild(buttonTrash);
                buttonTrash2.setAttribute('class', 'fa-solid fa-trash-can');
                buttonTrash2.setAttribute('title', 'Eliminar');
                buttonCheck.setAttribute('class', 'fa-solid fa-circle-check');
                buttonCheck.setAttribute('title', 'Marcar')
                buttonXmark.setAttribute('class', 'fa-solid fa-circle-xmark');
                buttonXmark.setAttribute('title', 'Desmarcar');
                buttonTrash.setAttribute('class', 'fa-solid fa-trash-can');
                buttonTrash.setAttribute('title', 'Eliminar');
                buttonTrash.setAttribute('id', todoList.id);
                buttonCheck.setAttribute('id', todoList.id);
                buttonXmark.setAttribute('id', todoList.id);
                buttonTrash2.setAttribute('id', todoList.id);
            })

            // Filtramos todos los datos del LocalStorage que tengan el "true"
            // Y luego obtenemos todos los elementos del HTML con el dato filtrado.
            // Y le agramos la clase para que se sepa que ese TODO esta completado.
            let todoListArray = JSON.parse(localStorage.getItem('todos'));
            let checkedFilter = todoListArray.filter(obj => obj.checked === true)
            checkedFilter.forEach((obj) => {
                let id = document.getElementById(`${obj.id}`)
                id.classList.add('checked')
            })

            // Temas
            const buttonThemeLight = document.querySelector('.theme-light');
            const buttonThemeDark = document.querySelector('.theme-dark');
            buttonThemeLight.addEventListener('click', () => {
                localStorage.setItem('theme', 'light')
                location.reload();
            })
            buttonThemeDark.addEventListener('click', () => {
                localStorage.setItem('theme', 'dark');
                location.reload();
            })


            // Todos los recursos para poder cambiar de tema.
            const body = document.querySelector('.body');
            const header = document.querySelector('.header');
            const title = document.querySelector('.title');
            const note = document.querySelector('.note');
            const newTodoElement = document.querySelector('.new-todo');
            const addTodoElement = document.querySelector('.add-todo');
            const todosElements = document.querySelectorAll('.todo');
            const todosCheckElements = document.querySelectorAll('.checked')

            let theme = localStorage.getItem('theme');
            if (theme) {
                if (theme === 'light') {
                    body.style.backgroundColor = '#B5FFE3';
                    header.style.backgroundColor = '#183153';
                    buttonThemeLight.style.display = 'none';
                    buttonThemeDark.style.display = 'block';
                    title.style.color = '#B5FFE3';
                    newTodoElement.style.borderBottom = '1.5px solid #183153';
                    newTodoElement.style.color = '#183153';
                    addTodoElement.style.backgroundColor = '#183153';
                    addTodoElement.style.color = '#B5FFE3';
                    note.style.color = '#183153'
                    note.style.borderLeft = '2px solid #183153';
                    if (todosElements) {
                        todosElements.forEach((todo) => {
                            todo.style.background = '#183153';
                            todo.style.color = '#B5FFE3';
                        })
                    }
                    if (todosCheckElements) {
                        todosCheckElements.forEach((todo) => {
                            todo.style.backgroundColor = '#B5FFE3';
                            todo.style.color = '#183153';
                            todo.style.border = '3px solid #183153';
                        })
                    }
                } else if (theme === 'dark') { 
                    body.style.backgroundColor = '#183153';
                    header.style.backgroundColor = '#B5FFE3';
                    buttonThemeLight.style.display = 'block';
                    buttonThemeDark.style.display = 'none';
                    title.style.color = '#183153';
                    newTodoElement.style.borderBottom = '1.5px solid #B5FFE3';
                    newTodoElement.style.color = '#B5FFE3';
                    addTodoElement.style.backgroundColor = '#B5FFE3';
                    addTodoElement.style.color = '#183153';
                    note.style.color = '#B5FFE3'
                    note.style.borderLeft = '2px solid #B5FFE3';
                    if (todosElements) {
                        todosElements.forEach((todo) => {
                            todo.style.background = '#B5FFE3';
                            todo.style.color = '#183153';
                        })
                    }
                    if (todosCheckElements) {
                        todosCheckElements.forEach((todo) => {
                            todo.style.backgroundColor = '#183153';
                            todo.style.color = '#B5FFE3';
                            todo.style.border = '3px solid #B5FFE3';
                        })
                    }
                }
            }
        } else {
            let todoListArray = JSON.parse(localStorage.getItem('todos')) || new Array();
            let todoListArrayJSON = JSON.stringify(todoListArray);
            localStorage.setItem('todos', todoListArrayJSON);
            localStorage.setItem('theme', 'dark');

            // Temas
            const buttonThemeLight = document.querySelector('.theme-light');
            const buttonThemeDark = document.querySelector('.theme-dark');
            buttonThemeLight.addEventListener('click', () => {
                localStorage.setItem('theme', 'light')
                location.reload();
            })
            buttonThemeDark.addEventListener('click', () => {
                localStorage.setItem('theme', 'dark');
                location.reload();
            })

            // Todos los recursos para poder cambiar de tema.
            const body = document.querySelector('.body');
            const header = document.querySelector('.header');
            const title = document.querySelector('.title');
            const note = document.querySelector('.note');
            const newTodoElement = document.querySelector('.new-todo');
            const addTodoElement = document.querySelector('.add-todo');
            const todosElements = document.querySelectorAll('.todo');
            const todosCheckElements = document.querySelectorAll('.checked')

            if (theme) {
                if (theme === 'light') {
                    body.style.backgroundColor = '#B5FFE3';
                    header.style.backgroundColor = '#183153';
                    buttonThemeLight.style.display = 'none';
                    buttonThemeDark.style.display = 'block';
                    title.style.color = '#B5FFE3';
                    newTodoElement.style.borderBottom = '1.5px solid #183153';
                    newTodoElement.style.color = '#183153';
                    addTodoElement.style.backgroundColor = '#183153';
                    addTodoElement.style.color = '#B5FFE3';
                    note.style.color = '#183153'
                    note.style.borderLeft = '2px solid #183153';
                    if (todosElements) {
                        todosElements.forEach((todo) => {
                            todo.style.background = '#183153';
                            todo.style.color = '#B5FFE3';
                        })
                    }
                    if (todosCheckElements) {
                        todosCheckElements.forEach((todo) => {
                            todo.style.backgroundColor = '#B5FFE3';
                            todo.style.color = '#183153';
                            todo.style.border = '3px solid #183153';
                        })
                    }
                } else if (theme === 'dark') {  
                    body.style.backgroundColor = '#183153';
                    header.style.backgroundColor = '#B5FFE3';
                    buttonThemeLight.style.display = 'block';
                    buttonThemeDark.style.display = 'none';
                    title.style.color = '#183153';
                    newTodoElement.style.borderBottom = '1.5px solid #B5FFE3';
                    newTodoElement.style.color = '#B5FFE3';
                    addTodoElement.style.backgroundColor = '#B5FFE3';
                    addTodoElement.style.color = '#183153';
                    note.style.color = '#B5FFE3'
                    note.style.borderLeft = '2px solid #B5FFE3';
                    if (todosElements) {
                        todosElements.forEach((todo) => {
                            todo.style.background = '#B5FFE3';
                            todo.style.color = '#183153';
                        })
                    }
                    if (todosCheckElements) {
                        todosCheckElements.forEach((todo) => {
                            todo.style.backgroundColor = '#183153';
                            todo.style.color = '#B5FFE3';
                            todo.style.border = '3px solid #B5FFE3';
                        })
                    }
                }
            }
        }

        const iconsCheck = document.querySelectorAll('.fa-circle-check');
        iconsCheck.forEach((iconCheck) => {
            iconCheck.addEventListener('click', () => {
                checkTodo(iconCheck.id)
            })
        })

        // Creamos una función para el evento
        // La funcion va cambiar el "checked" a "true", para asi interpretar que esta marcada.
        function checkTodo(id) {
            let todosListArray = JSON.parse(localStorage.getItem('todos'));
            let idChecked = todosListArray.findIndex((obj => obj.id == id));
            todosListArray[idChecked].checked = true;
            let todoListArrayJSON = JSON.stringify(todosListArray);
            localStorage.setItem('todos', todoListArrayJSON)
            location.reload();
        }

        const deleteButtons = document.querySelectorAll('.fa-circle-xmark');
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', () => {
                uncheckTodo(deleteButton.id)
            })
        })

        // Creamos una función para el evento.
        // La función va cambiar el "checked" a "false", para asi interpretar que esta desmarcada.
        function uncheckTodo(id) {
            let todosListArray = JSON.parse(localStorage.getItem('todos'));
            let idUnchecked = todosListArray.findIndex((obj => obj.id == id));
            todosListArray[idUnchecked].checked = false;
            let todoListArrayJSON = JSON.stringify(todosListArray);
            localStorage.setItem('todos', todoListArrayJSON);
            location.reload();
        }

        // Eliminar un TODO.
        const iconsTrash = document.querySelectorAll('.fa-trash-can');
        iconsTrash.forEach((iconTrash) => {
            iconTrash.addEventListener('click', () => {
                deleteTodo(iconTrash.id)
            })
        })

        function deleteTodo(id) {
            let todosListArray = JSON.parse(localStorage.getItem('todos'));
            let idDelete = todosListArray.findIndex(obj => obj.id == id);
            todosListArray.splice(idDelete, 1)
            let todoListArrayJSON = JSON.stringify(todosListArray);
            localStorage.setItem('todos', todoListArrayJSON);
            location.reload()
        }

        // Le agregamos un evento de tipo Click al boton de enviado.
        // Le pasamos una función.
        addTodoButton.addEventListener('click', saveTodoObj)

        // Hacemos la función para el evento
        // La función lo que haces es guardar en la LocalStorage
        // Los guarda como un Array y asi se pueden agregar muchos.
        function saveTodoObj() {
            let todoObj = {
                "content": `${newTodo.value}`,
                "checked": false,
                "id": todoGeneratorId()
            }
            let todoListArray = JSON.parse(localStorage.getItem('todos')) || [];
            todoListArray.push(todoObj)
            let todoListArrayJSON = JSON.stringify(todoListArray);
            localStorage.setItem('todos', todoListArrayJSON);
            console.log('[Guardado] Nuevo Todo')
            location.reload()
        }

        // Hacemos una función para generar un identificador para cada objecto de un array.
        function todoGeneratorId() {
            let lastTodoId = localStorage.getItem("lastTodoId") || "-1";
            let newTodoId = JSON.parse(lastTodoId) + 1;
            localStorage.setItem("lastTodoId", JSON.stringify(newTodoId))
            return newTodoId
        }
    })
} else {
    // Mensaje de error por si el navegador no soporta LocalStorage.
    messageError.style.display = 'block';
    messageError.innerHTML = 'Tu navegador no soporta el "Storage" (permite almacenar datos de manera local en el navegador y sin necesidad de realizar alguna conexión a una base de datos.) de modo que utilizamos el Storage para almacenar las "Tareas", no podemos ofrecerte el correcto funcionamiento de la aplicación.<br><br>Te recomendamos que pruebes con otro navegador.'
}



