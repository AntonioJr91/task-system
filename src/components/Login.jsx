import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
   const { email, password, inputRef, setEmail, setPassword, handleLogin } = useContext(UserContext);
   
   const handlePressEnter = (e) => {
      const enter = e.code.toLowerCase();
      if (enter === "enter") handleLogin();
   };

   return (
      <div className="min-h-screen bg-[#110C17] flex items-center justify-center px-4">
         <div className="w-full max-w-md bg-[#2E1A47] rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl text-[#00FFFF] font-bold mb-6 text-center font-audiowide">
               Login
            </h2>

            <div className="space-y-4">
               <div>
                  <label className="block text-[#EDEDED] mb-1">Email</label>
                  <input
                     type="email"
                     className="w-full p-3 rounded-lg bg-[#110C17] text-[#EDEDED] border border-[#9D00FF] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                     placeholder="seu@email.com"
                     value={email}
                     ref={inputRef}
                     onChange={(e) => { setEmail(e.target.value) }}
                  />
               </div>

               <div>
                  <label className="block text-[#EDEDED] mb-1">Senha</label>
                  <input
                     type="password"
                     className="w-full p-3 rounded-lg bg-[#110C17] text-[#EDEDED] border border-[#9D00FF] focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                     placeholder="••••••••"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     onKeyDown={(e) => handlePressEnter(e)}
                  />
               </div>

               <button
                  className="w-full p-3 mt-4 rounded-lg bg-[#9D00FF] text-white hover:bg-[#00FFFF] hover:text-[#110C17] transition font-semibold hover:cursor-pointer"
                  onClick={handleLogin}
               >
                  Entrar
               </button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6 flex flex-col border border-red-500 rounded-md p-1">
               <span className="text-[#00FFFF] cursor-pointer hover:underline">Email padrão = admin@admin.com</span>
               <span className="text-[#00FFFF] cursor-pointer hover:underline">Senha Padrão = admin</span>
            </p>
         </div>
      </div>
   );
}

export default Login;
