import styles from './AssemblyLine.module.css'
import { useState } from 'react'

const AssemblyLine = ({ stages }) => {
  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTasks([...tasks, { task, id: new Date().getTime().toString() }])
    setTask('')
  }

  const deleteHandler = (id) => {
    const newList = tasks.filter((tasks) => tasks.id !== id)

    setTasks(newList)
  }

  return (
    <>
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='to-do-input'>Add an item:</label>
          <input
            type='text'
            id='to-do-input'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type='submit'
            disabled={task ? false : true}
          >
            Add
          </button>
        </form>
      </div>

      <div className={styles.table}>
        {stages.map((title) => {
          return <div key={title}>{title}</div>
        })}
      </div>

      {tasks.map((tasks) => {
        return (
          <p
            onClick={() => deleteHandler(tasks.id)}
            key={tasks.id}
            className={styles.tasks_box}
          >
            {tasks.task}
          </p>
        )
      })}
    </>
  )
}

export default AssemblyLine
