import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/details/Details";
import Main from "../components/main/Main";
import Create from "../components/create/Create";
import Edit from "../components/edit/Edit";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/add-news" element={<Create/>}/>
                <Route path="/:id" element={<Details/>}/>
                <Route path="/edit-news" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;