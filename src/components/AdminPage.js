import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { getData } from '../services/api';
import { useState } from 'react';

import axios from 'axios';


function AdminPage() {
    const [playerIdValue, setPlayerIdValue] = useState('');
    const [newTeamValue, setNewTeamValue] = useState('');

    const [userIdValue, setUserIdValue] = useState('');

    const [res, setRes] = useState([]);

    //  const deleteInput = (data) => {
    //     deleteData().then((data) => {
    //         setResultData(data);
    //     });
    // };

    // const [playerIdValue, setPlayerIdValue] = useState('');

    function getData () { 
        axios({
            // Perform a GET request (READ)
            method: "GET",
            // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
            url:'/api/get-user-result',
        })
        .then((response) => {
            setRes(response.data);
            return response.data;
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    };

    function getUserResultData() {
        getData(); 
        console.log(res);
    }

    const putAdminData = () => {
        const data = new FormData();
        data.append('playerid', playerIdValue);
        data.append('newteam', newTeamValue);

        axios({
            // Perform a PUT request (UPDATE)
            method: "PUT",
            // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
            url:"/api/admin",
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

    const deleteAdminUserData = () => {
        const data = new FormData();
        data.append('userid', userIdValue);

        axios({
            // Perform a PUT request (UPDATE)
            method: "DELETE",
            // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
            url:"/api/admin",
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



    return (
        <div className="admin-page">
            <div className='page-wrap2'>
                <div className='block-wrap2'>
                    <p>Admin Page!</p>
                    <div style={{ marginBottom: 20 }}>
                        <Link to='/mainPage'>
                            Back to Main Page
                        </Link>
                    </div>

                    <Button onClick={getUserResultData}>Get User Data</Button>


                    <div className='inputs'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">PlayerId </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-sm"
                                value={playerIdValue} onInput={(e) => setPlayerIdValue(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">New team </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-sm"
                                value={newTeamValue} onInput={(e) => setNewTeamValue(e.target.value)}
                            />
                        </InputGroup>
                        <Button onClick={putAdminData}>Update!</Button>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">UserId </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-sm"
                                value={userIdValue} onInput={(e) => setUserIdValue(e.target.value)}
                            />
                        </InputGroup>
                        <Button onClick={deleteAdminUserData}>Delete!</Button>
                    </div>
                </div>

                <div>
                    {Object.entries(res).map((key, index) => {
                        
                        return <div>
                            <ul>
                                <li key={index}>
                                BigPlay: {key[1]["BigPlay"]} 
                                 - 
                                FavoriteTeam: {key[1]["FavoriteTeam"]}
                                 - 
                                Hometown: {key[1]["Hometown"]}
                                 -  
                                OffenseDefense: {key[1]["OffenseDefense"]}
                                 - 
                                PassRun: {key[1]["PassRun"]} 
                                 - 
                                Penalties: {key[1]["Penalties"]}
                                 - 
                                UserId: {key[1]["UserId"]} 
                                 - 
                                UserName: {key[1]["UserName"]}
                                </li>
                            </ul>
                            </div>
                            
                    })}
                </div>

            </div>
        </div>

    )
}

export default AdminPage;