import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../redux/modules/news';
import { Card, Button } from 'react-bootstrap';
import { BsTrash, BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.news);
    const onDeleteNews = (id) => {
        dispatch(deleteNews(id));
    }

    return (
        <Container fluid="md">
            <Row className='mt-3'>
                {news.map((item) => {
                    return (
                        <Col key={item.id}>
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
                                                    onClick={() => onDeleteNews(item.id)}
                                                >
                                                    <BsTrash />
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button
                                                    variant='warning'
                                                >
                                                    <BsPencilSquare />

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
                    );
                })}
            </Row>
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



export default List;