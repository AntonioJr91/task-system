import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import TaskReducer from "../reducers/TaskReducer";

export const TaskContext = createContext();

const STORE_TASKS = 'tasks'

export const TaskProvider = ({ children }) => {

   const [taskList, dispatch] = useReducer(TaskReducer, [] , () => JSON.parse(localStorage.getItem(STORE_TASKS)) || []);
   const [task, setTask] = useState('');

   const inputNewTaskRef = useRef();

   const [openModal, setOpenModal] = useState(false);
   const [inputModal, setInputModal] = useState('');
   const [currentTaskEditId, setCurrentTaskEditId] = useState(null);

   useEffect(() => {
      localStorage.setItem(STORE_TASKS, JSON.stringify(taskList));
   }, [taskList]);

   const handleAddTask = () => {
      if (task.trim() === '') return toast.warning("Você não pode adicionar uma tarefa vazia.");

      const newTask = {
         id: Date.now(),
         title: task,
         done: false
      };
      
      // const currentTasks = JSON.parse(localStorage.getItem(STORE_TASKS)) || [];
      // const updateTasks = [...currentTasks, newTask];
      // localStorage.setItem(STORE_TASKS, JSON.stringify(updateTasks));
      // setTaskList(updateTasks);

      dispatch({type: 'add_task', payload: newTask});
      toast.success("Tarefa adicionada!");
      inputNewTaskRef.current?.focus();
      setTask('');
   }

   const handleDeleteTask = (id) => {
      const tasks = JSON.parse(localStorage.getItem(STORE_TASKS));
      // const updateTasks = tasks.filter(task => task.id !== id);

      const confirm = window.confirm("Deseja remover a tarefa?");
      if (confirm) {
         toast.success("A tarefa foi removida.");
         // localStorage.setItem(STORE_TASKS, JSON.stringify(updateTasks));

         dispatch({type:'del', payload:id})
         // setTaskList(updateTasks);
      }
   };

   const handleEditTask = (id) => {
      setOpenModal(!openModal);
      const tasks = JSON.parse(localStorage.getItem(STORE_TASKS)) || [];
      const taskToEdit = tasks.find(task => task.id === id);
   
      if (taskToEdit) {
         setInputModal(taskToEdit.title);
         setCurrentTaskEditId(id);
      }

   };

   const handleSaveTaskEdited = () => {
      const tasks = JSON.parse(localStorage.getItem(STORE_TASKS)) || [];

      // const update = tasks.map(task => {
      //    if(task.id === currentTaskEditId){
      //       return {...task, title: inputModal};
      //    }
      //    return task;
      // });

      toast.success("A alteração foi efetuada.");
      // localStorage.setItem(STORE_TASKS, JSON.stringify(update));
      dispatch({type:'edit', payload: {
         currentTaskEditId: currentTaskEditId,
         inputModal: inputModal
      }})
      // setTaskList(update);
      setOpenModal(!openModal);
      
   }

   const handleTaskDone = (id) => {
      const tasks = JSON.parse(localStorage.getItem(STORE_TASKS)) || [];

      // const update = tasks.map(task => {
      //    if(task.id === id){
      //       return {...task, done: !task.done}
      //    }
      //    return task;
      // });
      // localStorage.setItem(STORE_TASKS, JSON.stringify(update));

      dispatch({type: 'taskDone', payload: id})
      // setTaskList(update);
   }

   return (
      <TaskContext.Provider value={{task, setTask, inputNewTaskRef, taskList, dispatch, handleAddTask, handleDeleteTask, handleEditTask, openModal, setOpenModal, inputModal, setInputModal,handleSaveTaskEdited, handleTaskDone}}>
         {children}
      </TaskContext.Provider>
   );
}











   // const handleEditTask = (id) => {
   //    setOpenModal(!openModal);
   
   //    const tasks = JSON.parse(localStorage.getItem(STORE_TASKS)) || [];
   //    const taskToEdit = tasks.find(task => task.id === id);
   
   //    if (taskToEdit) {
   //       setInputModal(taskToEdit.title);
   //    }
   
   //    const updatedTasks = tasks.map(task => {
   //       if (task.id === id) {
   //          return { ...task, title: inputModal }; 
   //       }
   //       return task;
   //    });
   
   //    localStorage.setItem(STORE_TASKS, JSON.stringify(updatedTasks));
   //    setTaskList(updatedTasks);
   // }


