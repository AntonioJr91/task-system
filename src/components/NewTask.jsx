import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function NewTask() {

   const { task, setTask, inputNewTaskRef, handleAddTask } = useContext(TaskContext);

   const handlePressEnter = (e) => {
      const enter = e.code.toLowerCase();
      if (enter === 'enter') {
         handleAddTask();
      }
   };

   return (
      <>
         <input
            type="text"
            name="task"
            id="task"
            value={task}
            ref={inputNewTaskRef}
            placeholder="Insira uma nova tarefa"
            className="flex-1 p-3 rounded-lg bg-[#110C17] text-[#EDEDED] border border-[#9D00FF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => handlePressEnter(e)}
         />

         <button
            type="button"
            className="px-6 py-3 rounded-lg bg-[#9D00FF] text-white font-semibold hover:bg-[#00FFFF] hover:text-[#110C17] transition hover:cursor-pointer"
            onClick={handleAddTask}
         >
            Adicionar
         </button>
      </>
   );
}