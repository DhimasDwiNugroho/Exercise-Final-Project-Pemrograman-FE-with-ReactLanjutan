import React from "react";
import { Route, Routes} from 'react-router-dom';
import NavBar from "./components/Navbar";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import Home from "./Routes/Home";
import Student from "./Routes/Student"
import NotFound from "./Routes/NotFound"
import Footer from "./components/Footer"
// TODO: answer here
import "./style/stylee.css"


const App = () => {
    return (
        <>
            <div className="container-home-page">
                <NavBar/>
                <Routes> 
                  <Route path="/" element={<Home />} />
                  <Route path="/add" element={<AddStudent />} />
                  <Route path="/student" element={<Student />} />
                  <Route path="/student/:id" element={<EditStudent />} />
                  <Route path="*" element={<NotFound />} />
                </Routes> 
            </div>
            <Footer/>
        </>
         // TODO: replace this    
    );
};

export default App;
