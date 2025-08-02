import React, { useState, useEffect } from 'react';
import TodoListImage from '../../assets/todolist.png'
import './TodoList.css';

export default function TodoList() {

  const listaStorage = localStorage.getItem('Lista');

  const [list, setList] = useState(listaStorage ? JSON.parse(listaStorage) : []);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem('Lista', JSON.stringify(list));
  }, [list]);

  // Adiciona a nova tarefa à lista
  function addItem(form){
    form.preventDefault();

    if(!newItem){
      return
    }
    setList([...list, { text: newItem, isCompleted: false }])
    setNewItem("")
    document.getElementById('input').focus();
  }

  // Marca uma tarefa como concluida
  function clicou(index){
    const listaAuxiliar = [...list];
    listaAuxiliar[index].isCompleted = !listaAuxiliar[index].isCompleted;
    setList(listaAuxiliar);
  }

  // Deleta uma tarefa
  function deletar(index){
    const listaAuxiliar = [...list];
    listaAuxiliar.splice(index, 1);
    setList(listaAuxiliar);
  }

  // Deleta todas as tarefas
  function deletarTudo(){
    setList([]);
  }

  return(
    <div>
      <h1>Todo List</h1>

      <form onSubmit={addItem} className='form-contain'>
        <input
          id='input'
          value={newItem}
          onChange={(e) => { setNewItem( e.target.value ) }}
          className='input-contain'
          type="text"
          placeholder='Digite uma tarefa'
        />
        <button className='btn-submit' type='submit'>Add</button>
      </form>

      <div className='tasks-contain'>
        <div style={{ textAlign: 'center' }}>
          {
            list.length < 1
              ?
              <img src={TodoListImage} />
              :
              list.map((item, index) => (
                <div
                  key={index} 
                  className={ item.isCompleted ? "task is-completed" : 'task' }>
                  <span onClick={() => {clicou(index)}}>{item.text}</span>
                  <button onClick={() => {deletar(index)}} className='btn-delete'>Deletar</button>
                </div>
              ))
          }
        </div>
        {
          list.length > 0 &&
          <button onClick={() => {deletarTudo()}} className='btn-delete-all'>Deletar Todas</button>
        }
      </div>

    </div>
  )
}
