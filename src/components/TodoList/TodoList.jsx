import './TodoList.css';

export default function TodoList() {
  return(
    <div>
      <h1>Todo List</h1>

      <form className='form-contain'>
        <input 
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
