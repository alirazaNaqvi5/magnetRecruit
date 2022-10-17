
import Navbar from "./Navbar";

import WhoweAre from "./WhoweAre";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Clients from "./Clients";
import Candidate from "./Candidate";
import SearchJob from "./SearchJob";
import ContactUs from "./ContactUs";
import Carosel from "./Carosel";




function App() {
  return (
    <div className="App">
      
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path="/" element={<Home/>} ></Route>
      <Route path="Whoweare/" element={<WhoweAre/>}></Route>
      <Route path="Clients/" element={<Clients/>}></Route>
      <Route path="Candidate/" element={<Candidate/>}></Route>
      <Route path="Searchjob/" element={<SearchJob/>}></Route>
      <Route path="ContactUs/" element={<ContactUs/>}></Route>
   

   </Routes>  
   </BrowserRouter>
    </div>
  );
}

export default App;
