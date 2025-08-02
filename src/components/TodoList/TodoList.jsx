import { useState } from 'react';
import './TodoList.css';

export default function TodoList() {

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Adiciona a nova tarefa à lista
  function addItem(form){
    form.preventDefault();

    if(!newItem){
      return;
    }

    setList([...list, { text: newItem, isCompleted: false }]);
    setNewItem("");
    document.getElementById('input').focus();
  }

  return(
    <div>
      <h1>Todo List</h1>

      <form onSubmit={addItem} className='form-contain'>
        <input
          id='input'
          value={newItem}
          onChange={(e) => { setNewItem(e.target.value) }}
          className='input-contain'
          type="text"
          placeholder='Digite uma tarefa'
        />
        <button className='btn-submit' type='submit'>Add</button>
      </form>

      <div className='tasks-contain'>
        <div className='task'>
          <span>Tarefa Teste</span>
          <button className='btn-delete'>Deletar</button>
        </div>
        <div className='task is-completed'>
          <span>Tarefa Marcada</span>
          <button className='btn-delete'>Deletar</button>
        </div>

        <button className='btn-delete-all'>Deletar Todas</button>
      </div>

    </div>
  )
}
