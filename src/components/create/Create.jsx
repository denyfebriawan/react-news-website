import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addNews } from "../../redux/modules/news";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = nextId();

    const [news, setNews] = useState({
        id: 0,
        title: "",
        writter: "",
        body: "",
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setNews({ ...news, [name]: value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (news.title.trim() === "" || news.writter.trim() === "" || news.body.trim() === "") return;

        dispatch(addNews({ ...news, id }));
        setNews({
            id: 0,
            title: "",
            writter: "",
            body: "",
        })
    }

    return (
        <>
            <Header />
            <Container fluid>
                <Row className="mt-3">
                    <Col>
                        <Card bg="secondary" text="white">
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={onSubmitHandler}>
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
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            name="body"
                                            value={news.body}
                                            style={{ height: '200px' }}
                                            onChange={onChangeHandler}
                                        />
                                    </FloatingLabel>
                                    <Button
                                        variant="primary"
                                        className="mt-3 text-center"
                                        onClick={() => {
                                            navigate("/")
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