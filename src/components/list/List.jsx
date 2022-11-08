import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../redux/modules/news';
import { Card } from 'react-bootstrap';

const List = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.news);

    return (
        <Container fluid>
         <Row className='mt-3'>
           {news.map((item) => {
           return (
            <Col key={item.id}>
                <Card bg='secondary' text='white'>
                <Card.Body>
                    <h3>Title : {item.title}</h3>
                    <p>written by : {item.writter}</p>
                </Card.Body>
                </Card>
            </Col>
           );
           })}
        </Row>
        </Container>
    );
}

export default List;