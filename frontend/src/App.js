import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css';
// import Home from "./pages/home/Home";
// import Signup from "./pages/credentials/Signup.jsx";
 import Login from "./pages/credentials/Login.jsx"
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        {/* <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/> */}
       {/* <Route path="/register" element={<Signup/>}/> */}
       <Route path="/signin" element={<Login/>}/>
       {/* <Route path="/profile" element={<Profile/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
