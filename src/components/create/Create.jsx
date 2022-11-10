import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addNews } from "../../redux/modules/news";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = nextId();

    const [news, setNews] = useState({
        id: 0,
        title:"",
        writter: "",
        body:"",
    })

    // const onChangeHandler = (event) => {
    //     const {name, value} = event.target;
    //     setNews({...news, [name]:value})
    // }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     if (news.title.trim() === "" || news.writter.trim() === "" || news.body.trim() === "") {
    //         alert("Fill all the form!")
    //     } else {

    //         dispatch(addNews({...news, id}));
    //         setNews({
    //             id: 0,
    //             title: "",
    //             writter: "",
    //             body: "",
    //         })
    //         alert("New news has been added")
    //         navigate("/")
    //     }

    // }

    const [todo, setTodo] = useState({
        id: 0,
        title: "",
        writter: "",
        body: "",
      });

      const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]:value})
    }
    
      const [todos, setTodos] = useState([]);
    
      const fetchTodos = async () => {
        const { data } = await axios.get("https://advance-react-team9.herokuapp.com/news");
        setTodos(data);
      };
    
      const onSubmitHandler = (todo) => {
        if (todo.title.trim() === "" || todo.writter.trim() === "" || todo.body.trim() === "") {
          alert("Fill all the form!")
        } else {

          axios.post("https://advance-react-team9.herokuapp.com/news", todo)
          alert('News has been added!');
          navigate("/");
        }
       
      };
    
      useEffect(() => {
        fetchTodos();
      }, []);

    return (
        <>
        <Header/>
        <Container fluid>
            <Row className="mt-3">
                <Col>
                    <Card bg="secondary" text="white">
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>News Title</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="title"
                                    onChange={(ev) => {
                                        const { value } = ev.target;
                                        setTodo({
                                          ...todo,
                                          title: value,
                                        });
                                      }}
                                />
                                <Form.Label>News Writter</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="writter"
                                    onChange={(ev) => {
                                        const { value } = ev.target;
                                        setTodo({
                                          ...todo,
                                          writter: value,
                                        });
                                      }}
                                />
                                <Form.Label>News Body</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="body"
                                    onChange={(ev) => {
                                        const { value } = ev.target;
                                        setTodo({
                                          ...todo,
                                          body: value,
                                        });
                                      }}
                                />

                                <Button 
                                variant="primary" 
                                className="mt-3 text-center"
                                
                                onClick={(e) => {
                                    // 👇 Prevent browser refresh when submitted
                                e.preventDefault();
                                onSubmitHandler(todo);
                                }}
                                >SUBMIT</Button>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Create;