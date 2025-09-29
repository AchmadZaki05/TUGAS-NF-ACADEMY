import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import Tim from './path/Tim';
import Kontak from './path/Kontak';


function App() {
  return (
    <>
  <BrowserRouter>
<Routes>
<Route index element={<Home />} />
 <Route path="Tim" element={<Tim/>} />
  <Route path="Kontak" element={<Kontak/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
