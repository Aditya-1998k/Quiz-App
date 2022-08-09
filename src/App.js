import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Quiz from './Component/Quiz/Quiz';
import Home from './Component/Home';


const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
