import './App.css';
import Banner from './components/Banner';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react'


// We need a function that will handle the submission of the form
// and update the tasks that are displayed in the <ui>
function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2'])
  const handleSubmit = (text) => {
    setTasks([...tasks, text])
  }

  return (
    <div className="App">
      <Banner x={'this is variable x'} /* example prop*/ />
      {/*Functions can be passed as Props */}
      <TaskForm handleSubmit={handleSubmit} />
      {/*  tasks is the key, the key is the name of the variable in the next file. What goes in the {...} is what the VALUE of that variable will be in the next file. This is a PROP in React
      
      The line below means "I want a variable called 'tasks' for use in the TaskList component."*/}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
