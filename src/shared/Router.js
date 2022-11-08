import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/details/Details";
import Main from "../components/main/Main";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;