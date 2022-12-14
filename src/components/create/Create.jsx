import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addNews } from "../../redux/modules/news";
import { useNavigate } from "react-router-dom";

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

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setNews({...news, [name]:value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (news.title.trim() === "" || news.writter.trim() === "" || news.body.trim() === "") {
            alert("Fill all the form!")
        } else {

            dispatch(addNews({...news, id}));
            setNews({
                id: 0,
                title: "",
                writter: "",
                body: "",
            })
            alert("New news has been added")
            navigate("/")
        }

    }

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
                                    value={news.title}
                                    onChange={onChangeHandler}
                                />
                                <Form.Label>News Writter</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="writter"
                                    value={news.writter}
                                    onChange={onChangeHandler}
                                />
                                <Form.Label>News Body</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="body"
                                    value={news.body}
                                    onChange={onChangeHandler}
                                />

                                <Button 
                                variant="primary" 
                                className="mt-3 text-center"
                                
                                onClick={onSubmitHandler}
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