import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/details/Details";
import Main from "../components/main/Main";
import Create from "../components/create/Create";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/add-news" element={<Create/>}/>
                <Route path="/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;