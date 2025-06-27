/*
Vanilla JS implementation of basic todos app
*/


export default function App() {
  function onSubmit() {
    const field = document.getElementById('field')
    if (field.value !== '') {
      addTodo(field.value)
      field.value = ''
    }
  }

  function onDelete(e) {
    const element = e.currentTarget.parentElement
    element.remove()
  }

  function addTodo(text) {
    const wrapper = document.getElementById('todos')
    const newTodo = document.createElement('li')
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', onDelete)
    
    newTodo.innerHTML = `<span>${text}</span>`
    newTodo.appendChild(deleteButton)
    
    wrapper.appendChild(newTodo)
  }

  window.addEventListener('load', () => {
    addTodo('Walk the dog')
    addTodo('Water the plants')
    addTodo('Wash the dishes')
  })

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input id="field" type="text" placeholder="Add your task" />
        <div>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
      <ul id="todos">
        <li>
          <span>Walk the dog</span>
          <button onClick={onDelete}>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button onClick={onDelete}>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button onClick={onDelete}>Delete</button>
        </li>
      </ul>
    </div>
  );
}
