import ToDoList from './ToDoList'
import AddToDo from './AddToDo'

const Layout = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <AddToDo/>
      <ToDoList />
    </div>
  )
}

export default Layout 
