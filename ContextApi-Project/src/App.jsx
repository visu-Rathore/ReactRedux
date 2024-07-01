
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Cotext/UserCotextProvider'
function App() {

  
  return (
    <UserContextProvider>
    <h1>hello world</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App








