import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getNewsByID } from "../../redux/modules/news";


const Edit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const news = useSelector((state) => state.news.p_news);

    const navigateHome = () => {
        navigate("/");
    }

    useEffect(() => {
        dispatch(getNewsByID(id));
    }, [dispatch, id]);

    const [newsEdit, setNewsEdit] = useState({
        id: '0',
        title: '',
        writter: '',
        body: '',
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setNewsEdit({ ...newsEdit, [name]: value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (newsEdit.title.trim() === "" || newsEdit.writter.trim() === "" || newsEdit.body.trim() === "") return;

        navigateHome();
    }
    return (
        <>
            <Header />
            <Container fluid>
                <h3>
                    Edit News
                </h3>
                <Row className="mt-3">
                    <Col>
                        <Card bg="secondary" text="white">
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={onSubmitHandler}>
                                    <Form.Label>News Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={newsEdit.title}
                                        onChange={onChangeHandler}
                                    />
                                    <Form.Label>News Writter</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="writter"
                                        value={newsEdit.writter}
                                        onChange={onChangeHandler}
                                    />
                                    <Form.Label>News Body</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            name="body"
                                            value={newsEdit.body}
                                            style={{ height: '200px' }}
                                            onChange={onChangeHandler}
                                        />
                                    </FloatingLabel>
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
    )
};

export default Edit;