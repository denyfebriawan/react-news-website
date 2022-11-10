import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { addNews, editNews, getNewsByID } from "../../redux/modules/news";
import Header from "../header/Header";
import axios from "axios";

const Edit = () => {

    // const dispatch = useDispatch();
    // const p_news = useSelector((state) => state.news.p_news);
    const {id} = useParams();
    const navigate = useNavigate();

    // const [news, setNews] = useState({
    //     id: 0,
    //     title:"",
    //     writter: "",
    //     body:"",
    // })
   

    // useEffect(() => {
    //     dispatch(getNewsByID(id));

    // }, [dispatch, id]);

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setEditTodo({...editTodo, [name]:value})
        
    }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     if (news.title.trim() === "" || news.writter.trim() === "" || news.body.trim() === "") {
    //         alert("Fill all the form")
    //     } else {

    //         dispatch(editNews({...news, id}));
    //         setNews({
    //             id: 0,
    //             title: "",
    //             writter: "",
    //             body: "",
    //         })
    //         alert("News has been edited")
    //         navigate("/")
    //     }

    // }

    const [todos, setTodos] = useState({
        id: 0,
        title: "",
        writter: "",
        body: "",
      });

      const [editTodo, setEditTodo] = useState({
        id: 0,
        title: "",
        writter: "",
        body: "",
      });

      const fetchTodos = async () => {
        const { data } = await axios.get(`https://advance-react-team9.herokuapp.com/news/${id}`);
        setTodos(data);
        
      };

      const onClickEditButtonHandler = (todoId, edit) => {
        if (editTodo.title.trim() === "" || editTodo.writter.trim() === "" || editTodo.body.trim() === "") {
            setEditTodo(todos)
            alert("Fill all the form!")
          } else {
            alert("News has been edited")
            axios.patch(`https://advance-react-team9.herokuapp.com/news/${todoId}`, edit);
            navigate("/")
            window.location.reload();
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
                                    value={editTodo.title || todos.title}
                                    // onChange={(ev) => {
                                    //     setEditTodo({
                                    //       ...editTodo,
                                    //       title: ev.target.value,
                                    //     });
                                    //   }}     
                                    // value={news.title || p_news.title}
                                    onChange={onChangeHandler}
                                    
                                />
                                <Form.Label>News Writter</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="writter"
                                    value={editTodo.writter || todos.writter}
                                    onChange={onChangeHandler}
                                    // value={news.writter || p_news.writter}
                                    // onChange={onChangeHandler}
                                    
                                />
                                <Form.Label>News Body</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="body"
                                    value={editTodo.body || todos.body}
                                    onChange={onChangeHandler}                
                                    // value={news.body || p_news.body}
                                    // onChange={onChangeHandler}
                                    
                                />

                                <Button 
                                variant="primary" 
                                className="mt-3 text-center"
                                type="button"
                                onClick={() => onClickEditButtonHandler(id, editTodo)}
                                // onClick={onSubmitHandler}
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