import React from "react";
import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getNewsByID } from "../../redux/modules/news";
import Header from "../header/Header";


const Detail = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.p_news);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getNewsByID(id));

    }, [dispatch, id]);

    return (
        <>
            <Header />
            <Card style=
                {{
                    maxWidth: "1000px",
                    margin: "auto",
                    marginTop: "50px",
                }}
            >
                <Card.Header
                    className="text-center"
                >
                    <h2>{news.title}</h2>
                    <br />
                    Written by: {news.writter}
                </Card.Header>
                <Card.Body>
                    <TextWrapper>{news.body}</TextWrapper>
                </Card.Body>
            </Card>


        </>
    );
}

const TextWrapper = styled.div`
  text-align: justify;

`;

export default Detail;