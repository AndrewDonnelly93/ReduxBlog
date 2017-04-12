import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=afasdsfdfdnikjlcxv';

const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: 'FETCH_POSTS',
        payload: request
    }
};

const createPost = (props) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: 'CREATE_POST',
        payload: request
    }
};

const fetchPost = (id) => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: 'FETCH_POST',
        payload: request
    }
};

const deletePost = (id) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: 'DELETE_POST',
        payload: request
    }
};

export {fetchPosts, createPost, fetchPost, deletePost};