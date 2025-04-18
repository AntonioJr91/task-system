import { useContext } from "react";
import NewTask from "./NewTask";
import TaskItem from "./TaskItem";
import { UserContext } from "../contexts/UserContext";

function Dashboard() {

   const { handleLogout } = useContext(UserContext);

   return (
      <div className="min-h-screen bg-[#110C17] text-[#EDEDED] font-exo px-6 py-8">
         <header className="mb-8 flex justify-center">
            <h1 className="text-4xl text-[#00FFFF] font-audiowide text-center">
               Painel de Tarefas
            </h1>
            <button
               className="text-sm text-[#888] hover:text-[#00FFFF] transition duration-200 font-exo ml-10 cursor-pointer"
               onClick={handleLogout}
            >
               Sair
            </button>

         </header>

         <main>
            <section className="max-w-2xl mx-auto p-6 rounded-2xl">
               <div className="flex gap-3 mb-10">
                  <NewTask />
               </div>
               <TaskItem />
            </section>
         </main>
      </div>
   );
}

export default Dashboard;
