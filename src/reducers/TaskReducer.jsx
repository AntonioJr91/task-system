export default function TaskReducer(tasks, action) {

   const STORE_TASKS = 'tasks'

   switch (action.type) {

      case 'add_task':
         const updateAdd = [...tasks, action.payload]
         localStorage.setItem(STORE_TASKS, JSON.stringify(updateAdd));
         return updateAdd;
         
      case 'del':
         const updateDel = tasks.filter(task => task.id !== action.payload); 
         localStorage.setItem(STORE_TASKS, JSON.stringify(updateDel));
         return updateDel

      case 'edit': 
      const updateEdit = tasks.map(task => {
         if(task.id === action.payload.currentTaskEditId){
            return {...task, title: action.payload.inputModal};
         }
         return task;
      });
      localStorage.setItem(STORE_TASKS, JSON.stringify(updateEdit));
      return updateEdit

      case 'taskDone':
      const updateDone = tasks.map(task => {
         if(task.id === action.payload){
            return {...task, done: !task.done}
         }
         return task;
      });
      localStorage.setItem(STORE_TASKS, JSON.stringify(updateDone));
      return updateDone;

      default: return tasks;
   }
}