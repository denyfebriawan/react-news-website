const ADD_NEWS = "ADD_NEWS";
const GET_NEWS_BY_ID = "GET_NEWS_BY_ID";
const DELETE_NEWS = "DELETE_NEWS";

export const addNews = (payload) => {
    return {
        type: ADD_NEWS,
        payload,
    }
}

export const deleteNews = (payload) => {
    return {
    type: DELETE_NEWS,
    payload,
    }
}

export const getNewsByID = (payload) => {
    return {
        type: GET_NEWS_BY_ID,
        payload,
    }
}

const initialState = {
    news: [
        {
            id: '1',
            title: 'Food price rise significantly',
            writter: 'Johny Silverhand',
            body: 'For two weeks our food price will be higher than last month prepare your money!',

        }
    ],

    p_news: {
        id:'0',
        title:'',
        body:'',
    }
}

const news = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload],
            };
        
        case DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter((p_news) => p_news.id !== action.payload),
            };

        case GET_NEWS_BY_ID:
            return {
                ...state,
                p_news: state.news.find((p_news) => {
                    return p_news.id === action.payload;
                }),
            };
            
    
        default:
            return state;
    }
}

export default news;