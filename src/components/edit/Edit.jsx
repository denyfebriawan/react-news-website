import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editNews, getNewsByID } from "../../redux/modules/news";
import Header from "../header/Header";

const Edit = () => {

    const dispatch = useDispatch();
    const p_news = useSelector((state) => state.news.p_news);
    const {id} = useParams();
    const navigate = useNavigate();

    const [news, setNews] = useState({
        id: 0,
        title:"",
        writter: "",
        body:"",
    })
   

    useEffect(() => {
        dispatch(getNewsByID(id));

    }, [dispatch, id]);

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setNews({...news, [name]:value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (news.title.trim() === "" || news.writter.trim() === "" || news.body.trim() === "") return;

        dispatch(editNews({...news, id}));
        setNews({
            id: 0,
            title: "",
            writter: "",
            body: "",
        })
        navigate("/")
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
                                    new_value={news.title}
                                    value={p_news.title}
                                    onChange={onChangeHandler}
                                    
                                />
                                <Form.Label>News Writter</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="writter"
                                    new_value={news.writter}
                                    value={p_news.writter}
                                    onChange={onChangeHandler}
                                    
                                />
                                <Form.Label>News Body</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="body"
                                    new_value={news.body}
                                    value={p_news.body}
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

export default Edit;