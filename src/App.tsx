import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './components/molecules/Account'
import Chat from './components/molecules/Chat'
import Chats from './components/molecules/Chats'
import Feed from './components/molecules/Feed'
import Layout from './components/molecules/Layout'
import Login from './components/molecules/Login'
import Register from './components/molecules/Register'

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout></Layout>}>
              <Route index element={<Feed />} />
             <Route path="chat" element={<Chats />}/>
            <Route path="/chat/:chatid" element={<Chat />} />
            <Route path="account" element={<Account/>} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
