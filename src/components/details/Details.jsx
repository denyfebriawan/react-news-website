import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getNewsByID } from "../../redux/modules/news";
import Header from "../header/Header";
import axios from "axios";


const Detail = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.p_news);
    const {id} = useParams();
   

    // useEffect(() => {
    //     dispatch(getNewsByID(id));

    // }, [dispatch, id]);

    const [todos, setTodos] = useState([]);

	
  const fetchTodos = async () => {
    const { data } = await axios.get(`https://advance-react-team9.herokuapp.com/news/${id}`);
    setTodos(data); 
  };
	
	
   useEffect(() => {
		
    fetchTodos();
  }, []);

    return (
        <>
        <Header/>    
            <Card  style=
            {{ 
                maxWidth: "1000px",
                margin: "auto",
                marginTop: "50px",
            }}
            >
                <Card.Header
                    className="text-center"
                >
                <h2>{todos.title}</h2>
                <br />
                Written by: {todos.writter}
            </Card.Header>
             <Card.Body>
                    <TextWrapper>{todos.body}</TextWrapper>
                </Card.Body>
            </Card>
           
        
        </>
    );
}

const TextWrapper = styled.div`
  text-align: justify;

`;

export default Detail;