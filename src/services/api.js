// service files to hold all the api calls

// use axois to get data from the backend
import axios from 'axios';

export function getData() {
    axios({
        // Perform a GET request (READ)
        method: "GET",
        // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
        url:'/api/get-user-result',
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
        }
    })
};

export function getSearchData(searchPlayerVar) {
    axios({
        // Perform a GET request (READ)
        method: "GET",
        // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
        url:'/api/search-players',
        params: {
            player_name: searchPlayerVar
        }
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
        }
    })
};

export function postData(data) {
    axios({
        // Perform a POST request (CREATE)
        method: "POST",
        // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
        url:"/api/v1/PPRS",
        data: data,
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
        }
    })
};

export function putData(data) {
    axios({
        // Perform a PUT request (UPDATE)
        method: "PUT",
        // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
        url:"/api/v1/PPRS",
        data: data,
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
        }
    })
};

export function deleteData(data) {
    axios({
        // Perform a DELETE request (DELETE)
        method: "DELETE",
        // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
        url:"/api/v1/PPRS",
        data: data,
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
        }
    })
};