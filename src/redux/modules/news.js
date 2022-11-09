const ADD_NEWS = "ADD_NEWS";
const GET_NEWS_BY_ID = "GET_NEWS_BY_ID";
const DELETE_NEWS = "DELETE_NEWS";
const EDIT_NEWS = "EDIT_NEWS";

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

export const editNews = (payload) => {
    return {
        type: EDIT_NEWS,
        payload,
    }
}

const initialState = {
    news: [
        {
            id: '1',
            title: 'Food price rise significantly',
            writter: 'Johny Silverhand',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus odio, libero veniam reprehenderit repellendus eaque adipisci sed beatae, consequuntur quasi repudiandae! Placeat unde, beatae commodi perspiciatis vel ipsam architecto consequuntur rerum soluta fuga eveniet esse laudantium ratione illo iure? Atque voluptas labore voluptatum possimus repellendus laudantium esse reiciendis, pariatur ea autem, iure molestiae voluptatibus quod quidem ullam, voluptate iusto? Doloremque, vitae? Assumenda minima repudiandae doloremque nisi dolor quae accusantium dolorem repellat, illum hic? Quidem consectetur ratione voluptatum minus itaque dolorum numquam fuga odit aliquam. Excepturi tempora ullam, nostrum qui accusamus quis optio aspernatur dolore nemo pariatur corrupti, magni ea dicta? Id amet ab alias incidunt pariatur eum molestias odit iste! Assumenda quisquam quis cumque quia, minus ipsam optio a. Illo iure magni, accusantium pariatur rerum in iste nihil cumque sequi placeat quod libero fugiat tempore minima, eos repellat ea quo distinctio, veniam perspiciatis doloremque fuga ad. Consequuntur rerum exercitationem cum possimus suscipit, maxime id itaque veniam fugit, necessitatibus laboriosam officiis consectetur cupiditate, tenetur dolorem iure amet? Optio perspiciatis minus tempore earum nesciunt eius ea, sunt dolore harum? Doloribus molestiae aliquam officia ad adipisci omnis odit saepe, enim, accusantium nihil consequatur sapiente dolorem eum incidunt obcaecati perferendis, natus provident repellat. Culpa, nobis. Aspernatur officiis, omnis blanditiis doloremque quasi ad. Illum possimus quam necessitatibus corporis architecto reiciendis, reprehenderit provident! Quo rem pariatur provident, corrupti a, neque fugit perspiciatis perferendis voluptates voluptatem repudiandae odit ratione eum sequi repellat harum animi nobis architecto voluptatibus, unde vero commodi tenetur. Delectus nulla saepe corrupti officia ab.',

        }
    ],

    p_news: {
        id:'0',
        title:'',
        writter:'',
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

        case EDIT_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload]
            }
            
    
        default:
            return state;
    }
}

export default news;