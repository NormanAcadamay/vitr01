import useTodo from "../hooks/useTodo"


function TodoItem(props) {
  const {job, setEditId} = props
  const {hdlDel} = useTodo()

  const onDelete = () => {
    if(confirm('Delete this item?')) { hdlDel(job.id) }
  }
  return (

    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <button className="button-one" onClick={()=>{setEditId(job.id)}}>Edit</button>
        <button className="button-two" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem