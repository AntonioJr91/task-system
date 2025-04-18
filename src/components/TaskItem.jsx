import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TaskContext } from "../contexts/TaskContext";
import ModalEdit from "./ModalEdit";

export default function TaskItem() {

  const { taskList, openModal, handleDeleteTask, handleEditTask, handleTaskDone } = useContext(TaskContext);

  return (

    openModal
      ?
      <ModalEdit />
      :
      taskList.map((task, index) => (
        <div key={index} className={`flex items-center justify-between border border-[#9D00FF] rounded-lg px-4 py-3 shadow-sm my-4 transition-colors duration-300
          ${task.done ? 'opacity-80' : 'bg-[#2E1A47]'}`}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-[#00FFFF] w-5 h-5"
              readOnly
              checked={task.done}
              onClick={() => handleTaskDone(task.id)}
            />
            <span className={`${task.done ? 'line-through text-[#888] italic' : 'text-[#EDEDED]'}`}>
              {task.title}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              className={`text-[#00FFFF] ${task.done ? 'cursor-not-allowed opacity-35' : 'transition hover:cursor-pointer'}`} title="Editar"
              disabled={task.done}
              onClick={() => handleEditTask(task.id)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-500 hover:text-white transition hover:cursor-pointer" title="Deletar"
              onClick={() => handleDeleteTask(task.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))
  );
}