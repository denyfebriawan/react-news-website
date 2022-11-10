import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../redux/modules/news';
import { Card, Button } from 'react-bootstrap';
import { BsTrash, BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const List = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.news);
    const onDeleteNews = (id) => {
        dispatch(deleteNews(id));
    }

    const onClickDeleteButtonHandler = (todoId) => {
        axios.delete(`https://advance-react-team9.herokuapp.com/news/${todoId}`);
        alert("News has been deleted!");
        window.location.reload();
    };
    const [todos, setTodos] = useState([]);

    // Create a function that makes a get request through axios.
    // Since we need to do asynchronous processing, we process it through async/await syntax.
    const fetchTodos = async () => {
        const { data } = await axios.get("https://advance-react-team9.herokuapp.com/news");
        setTodos(data); // Set the data fetched from the server as the state of useState.
    };

    // Use useEffect to execute the created function when the component is mounted.
    useEffect(() => {
        // Put the created function in the effect statement and execute it.
        fetchTodos();
    }, []);

    // Check through the console whether data fetching is normal.
    console.log(todos);

    const [query, setQuery] = useState('');


    return (

        <Container fluid="md">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={event => setQuery(event.target.value)}
                />
            </Form>
            {todos.filter(item => {
                if (query === '') {
                    return item;
                } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return item;
                }
            }).map((item) => {
                return (
                    <Row className='mt-3' key={item.id}>
                        <Col>
                            <Card bg='secondary' text='white'>
                                <Card.Body className='d-flex justify-content-between'>
                                    <div>
                                        <h3>Title : {item.title}</h3>
                                        <p>written by : {item.writter}</p>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col>
                                                <Button
                                                    variant='danger'
                                                    onClick={() => onClickDeleteButtonHandler(item.id)}
                                                >
                                                    <BsTrash />
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button
                                                    variant='warning'
                                                >
                                                    <BTNEdit
                                                        className='no_hover'
                                                        to={`/edit/${item.id}`} key={item.id}
                                                    >
                                                        <BsPencilSquare />
                                                    </BTNEdit>
                                                </Button>
                                            </Col>

                                        </Row>
                                        <Row className='mt-3'>

                                            <BTNLink
                                                className='no_hover'
                                                to={`/${item.id}`} key={item.id}
                                            >
                                                Details
                                            </BTNLink>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
}


const BTNLink = styled(Link)`
    text-decoration: none;
    color: white;
    border: none;
    text-align: center;
    border-radius: 5px;
    background-color: blue;
    padding: 5px;
    
    &:hover.no_hover {
        color: inherit;
    }
`;

const BTNEdit = styled(Link)`
     text-decoration: none;
`;



export default List;