import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import { UserContext, UserProvider } from './contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import Loading from './components/Loading';
import { TaskProvider } from './contexts/TaskContext';

function AppContent() {
  const { currentUser } = useContext(UserContext);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => {
        setShowDashboard(true);
      }, 1000);

      return () => clearTimeout(timer);

    } else {
      setShowDashboard(false)
    }
  }, [currentUser]);

  if(currentUser && !showDashboard) return <Loading/>

  return (
    !currentUser ? <Login/> : <Dashboard/>
  );
}

function App() {

  return (
    <>
      <UserProvider>
        <TaskProvider>

        <AppContent />
        <ToastContainer theme='dark' pauseOnHover={false} autoClose={1000} />

        </TaskProvider>
      </UserProvider>
    </>
  )
}

export default App
