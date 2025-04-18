import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


   const STORE_USERS = 'users';
   const admin = [{ id: 1, email: "admin@admin.com", password: "admin" }];
   localStorage.setItem(STORE_USERS, JSON.stringify(admin));

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const inputRef = useRef();

   const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
      const user = localStorage.getItem('currentUser');
      if (user) {
         setCurrentUser(user);
      }
      inputRef.current?.focus();
   }, []);

   const handleLogin = () => {
      if (email.trim() === '' || password.trim() === '') {
         toast.error('Preencha os campos corretamente.');
         return;
      }

      setEmail('')
      setPassword('');


      const userLogged = JSON.parse(localStorage.getItem(STORE_USERS)) || [];
      const user = userLogged.find(user => user.email === email && user.password === password);

      if (!user) return toast.error("Usuário não econtrado.");

      userLogged.map(user => localStorage.setItem('currentUser', JSON.stringify(user)));

      toast.success("Efetuando seu login...");
      localStorage.setItem(STORE_USERS, JSON.stringify(userLogged));
      setCurrentUser(true);
  
   }

   const handleLogout = () => {
      toast.success('Logout sendo efetuado...');
      setTimeout(() => {
         localStorage.removeItem('currentUser');
         window.location.reload();
      }, 1000);
   };

   return (
      <UserContext.Provider value={{ email, setEmail, password, setPassword, inputRef, currentUser, handleLogin, handleLogout }}>
         {children}
      </UserContext.Provider>
   );
}