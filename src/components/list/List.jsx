import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../redux/modules/news';

const List = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.news);

    return (
        <Container fluid className='text-center'>
         <Row>
           {news.map((item) => {
           return (
            <Col>
                <h1>{item.title}</h1>
            </Col>
           );
           })}
        </Row>
        </Container>
    );
}

export default List;