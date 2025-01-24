import React, { useEffect, useState } from 'react';

const initialState = [
  {
    id: 11,
    text: 'Doctors Appointment',
    finished: false,
  },
  {
    id: 212,
    text: 'Meeting at School',
    finished: true,
  },
  {
    id: 33,
    text: 'Food Shopping',
    finished: false,
  },
];

const TaskList = () => {
  console.log(
    'TaskList component is rendered to the browser',
    new Date().toLocaleTimeString()
  );

  // this function 'useState', when called for the first time, will accept the initial state
  // and returns an array with 2 elements:
  // 1. initial state
  // 2. a function to update the state (mutate the state)

  const [tasks, setTasks] = useState(initialState);

  const clearAllTasks = () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    setTasks([]); // set the tasks array to an empty array
  };

  const toggleTaskStatus = (id) => {
    const tasksCopy = [...tasks]; // shallow copy
    const task = tasksCopy.find((t) => t.id === id);
    task.finished = !task.finished;
    setTasks(tasksCopy); // update the state with the new array
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find((t) => t.id === id);
    if (
      taskToDelete &&
      window.confirm(`Are you sure you want to delete "${taskToDelete.text}"?`)
    ) {
      // create a new array with the task removed
      const newTasks = tasks.filter((t) => t.id !== id);
      // set the new array as the latest state
      setTasks(newTasks); // whenever the state is updated, the component will re-render
    }
  };

  // convert tasks array into JSX
  const tasksJsx = tasks.map((t) => (
    <li className='list-group-item' key={t.id}>
      <button
        onClick={() => toggleTaskStatus(t.id)}
        className='btn btn-link'
        style={{ textDecoration: 'none' }}
      >
        {t.finished ? <s>{t.text}</s> : t.text}
      </button>

      <button
        onClick={() => deleteTask(t.id)}
        className='btn btn-link text-danger float-end'
      >
        <i className='bi bi-trash'></i>
      </button>
    </li>
  ));

  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target is the form element which triggered the form submission
    // in our case, it is the form

    if (!newTaskText) return;

    const newTask = {
      id: new Date().getTime(),
      text: newTaskText,
      finished: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText(''); // clear the textfield
  };

  const changeHandler = (e) => {
    // e.target represents the textfield that is being changed
    setNewTaskText(e.target.value);
  };

  return (
    <>
      <h2>Manage your tasks</h2>

      <div style={{ width: '500px' }}>
        <form onSubmit={handleSubmit}>
          <input
            onChange={changeHandler}
            value={newTaskText}
            autoFocus
            placeholder='type a new task and press RETURN'
            type='text'
            className='form-control mb-3'
          />
        </form>

        {/* an example of a CONDITIONAL */}

        {tasks.length > 0 && (
          <button
            onClick={clearAllTasks}
            className='btn btn-outline-danger mb-3'
          >
            Clear all
          </button>
        )}
        <ul className='list-group'>{tasksJsx}</ul>
      </div>
    </>
  );
};

export default TaskList;
