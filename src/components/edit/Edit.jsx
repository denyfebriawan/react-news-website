import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsByID } from "../../redux/modules/news";
import Header from "../header/Header";

const Edit = () => {

    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.p_news);
    const {id} = useParams();
   

    useEffect(() => {
        dispatch(getNewsByID(id));

    }, [dispatch, id]);

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
                                    
                                />
                                <Form.Label>News Writter</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="writter"
                                    value={news.writter}
                                    
                                />
                                <Form.Label>News Body</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="body"
                                    value={news.body}
                                    
                                />

                                <Button 
                                variant="primary" 
                                className="mt-3 text-center"
                                
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