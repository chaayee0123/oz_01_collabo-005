import { Route, Routes } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import "./App.css";
import Join from "./pages/Join/Index";
import Main from "./pages/Main/Index";
import Meet from "./pages/Meet/Index";
import MyInfo from "./pages/MyInfo/Index";
5;
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Meet' element={<Meet />}></Route>
        <Route path='/MyInfo' element={<MyInfo />}></Route>
        <Route path='/Join' element={<Join />}></Route>
        <Route path='*' element={<div> 없는 페이지임</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
