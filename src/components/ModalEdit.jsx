import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function ModalEdit() {

   const { inputModal, setInputModal,setOpenModal,handleSaveTaskEdited } = useContext(TaskContext);

   return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
         <div className="bg-[#2E1A47] text-[#EDEDED] p-6 rounded-2xl shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-audiowide text-[#00FFFF] mb-4 text-center">
               Editar Tarefa
            </h2>

            <div className="space-y-4 font-exo">
               <label className="block">
                  <span className="text-sm mb-1 text-[#EDEDED]">Título da Tarefa</span>
                  <input
                     type="text"
                     className="w-full p-3 rounded-lg bg-[#110C17] text-[#EDEDED] border border-[#9D00FF] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                     placeholder="Digite o novo título da tarefa"
                     value={inputModal}
                     onChange={(e) => setInputModal(e.target.value)}
                  />
               </label>
            </div>

            <div className="flex justify-center gap-4 mt-6">
               <button
                  className="bg-[#9D00FF] text-white px-5 py-2 rounded-xl hover:bg-[#00FFFF] hover:text-[#110C17] transition font-semibold hover:cursor-pointer"
                  onClick={handleSaveTaskEdited}
               >
                  Salvar Alterações
               </button>
               <button
                  className="bg-[#110C17] border border-[#9D00FF] text-[#EDEDED] px-5 py-2 rounded-xl hover:border-[#00FFFF] transition hover:cursor-pointer"
                  onClick={() => setOpenModal(false)}
               >
                  Cancelar
               </button>
            </div>
         </div>
      </div>

   );
}
