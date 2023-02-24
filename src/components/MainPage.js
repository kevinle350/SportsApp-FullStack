/* eslint-disable default-case */
import React from 'react';
import './MainPage.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


// import apis from services folder
import { getData } from '../services/api';
import { getSearchData } from '../services/api';
// import { postData } from '../services/api';
// import { putData } from '../services/api';
// import { deleteData } from '../services/api';



function MainPage() {

    // new line start
    let [resultData, setResultData] = useState('');

    // search players 
    let [searchPlayerVar, setSearchPlayer] = useState('');
    let [playerSearchResultData, setPlayerSearchResultData] = useState('');

    // form group
    let [favoriteTeamVar, setFavoriteTeam] = useState('');
    let [homeTownValue, setHomeTownValue] = useState('');
    let [runPlay, setRunPlay] = useState('');
    let [passPlay, setPassPlay] = useState('');
    let [offensivePlay, setOffensivePlay] = useState('');
    let [defensivePlay, setDefensivePlay] = useState('');

    let [insertResult, setInsertResult] = useState([]);

    // get data from backend
    const getDataFromBackend = () => {
        const res = getData();
        console.log(res);
        // setResultData(res);
    }

    const submitData = async () => {
        console.log('submit data');
        const data = new FormData();
        data.append('favorite_team', favoriteTeamVar);
        data.append('hometown', homeTownValue);
        data.append('run', runPlay);
        data.append('pass', passPlay);
        data.append('offense', offensivePlay);
        data.append('defense', defensivePlay);
        
        axios({
            // Perform a POST request (CREATE)
            method: "POST",
            // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
            url:"/api/insert",
            data: data,
        })
        .then((response) => {
            setInsertResult(response.data);
            return response.data;
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    }

    // const submitData = (data) => {
    //     axios({
    //         // Perform a POST request (CREATE)
    //         method: "POST",
    //         // 👇🏼👇🏼👇🏼 api route goes here 👇🏼👇🏼👇🏼
    //         url:"/api/v1/PPRS",
    //         data: data,
    //     })
    //     .then((response) => {
    //         return response.data;
    //     }).catch((error) => {
    //         if (error.response) {
    //             console.log(error.response)
    //         }
    //     })
    // }

    
    const searchUsersBtn = async () => {
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
            setPlayerSearchResultData(response.data[0]);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    }

    const handleChange = event => {
        console.log(event);
        switch (event.target.value) {
            case 'Pass':
                setPassPlay(true);
                break;
            case 'Run':
                setRunPlay(true);
                break;
            case 'Offensive':
                setOffensivePlay(true);
                break;
            case 'Defensive':
                setDefensivePlay(true);
                break;
        }
    }


    // post data to backend
    // const postDataToBackend = (data) => {
    //     postData().then((data) => {
    //         setResultData(data);
    //     });
    // };

    // // update data to backend
    // const putDataToBackend = () => {
    //     putData().then((data) => {
    //         setResultData(data);
    //     });
    // };

    // // delete data to backend
    // const deleteDataToBackend = () => {
    //     deleteData().then((data) => {
    //         setResultData(data);
    //     });
    // };

    // const todo = insertResult.map((item, i) => <div>{item["TeamName"]}</div>)



    return (
        <div className='page-wrap'>
            <div className='block-wrap'>
                <div className='header-section'>
                    <div className='header-title'>
                        <p>PPRS</p>
                        <Link to='/adminPage' className=''>
                            AdminPage: Built Different
                        </Link>
                    </div>
                    <div className='about-us'>
                        <div className='about-us-left'>
                            <p>Who are we?</p>
                            <p>We're a passionate group who love sports, code, and stats</p>
                        </div>
                        <div className='about-us-right'>
                            <p>Why do we do it?</p>
                            <p>To pass and not make this the 13th reason Why</p>
                        </div>
                    </div>
                </div>

                <form>
                    <div className='main-section'>

                        <div className='main-title'>
                            <p>
                                How does this work?
                            </p>
                        </div>
                        <div>
                            <p>Ready to try? Start the questionaire below!</p>
                            <div className='inputs'>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm">Your favorite team/s?</InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-sm"
                                        value={favoriteTeamVar} onInput={(e) => setFavoriteTeam(e.target.value)}
                                    />
                                </InputGroup>
                                
                            </div>
                        </div>
                        <div>
                            <p>Hometown</p>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                                <Form.Control
                                    placeholder="PLACEHOLDER"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-sm"
                                    value={homeTownValue} onInput={(e) => setHomeTownValue(e.target.value)}
                                />
                            </InputGroup>
                        </div>
                        <div>
                            <p>Choose which type of plays and side of the football you'll like to see</p>
                            <div className='play-types'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Run plays"
                                    value="Run"
                                    onChange={handleChange}                                    
                                />
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Pass plays"
                                    value="Pass"
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Offensive"
                                    value="Offensive"
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Defensive"
                                    value="Defensive"
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <p>Don't show teams with high penalties?</p>
                            <Button variant="primary" onClick={getDataFromBackend}>Yes</Button>
                            <Button variant="primary">No</Button>{' '} */}
                        </div>
                        <Button onClick={submitData}>Submit</Button>
                    </div>
                </form>

                

                <div className='under'>
                    <div>
                        {console.log(insertResult)}
                        Versus Super Bowl Champions: 
                        {insertResult.length > 0 && 
                            <p>
                                {insertResult[0]['AwayTeam']} vs {insertResult[0]['HomeTeam']}
                            </p>
                        }
                    </div>
                    
                    {insertResult.length > 0 &&
                        Object.entries(insertResult).map((key, index) => {
                        
                            if (key[0] !== 0 || key[0] !== 33) {
                                return <div>{key[1]["TeamName"]} {key[1]["Rating"]}</div>
                            }

                            return null;
                                
                        })
                    }
                       
                   
                    
                    <div >
                        {insertResult.length > 0 &&
                            <p>
                                Top 3 Match-ups: <br></br> {insertResult[33][0]} <br></br> {insertResult[33][1]} <br></br> {insertResult[33][2]}
                            </p>
                        }
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Search players </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-sm"
                            value={searchPlayerVar} onInput={(e) => setSearchPlayer(e.target.value)}
                        />
                        <button onClick={searchUsersBtn}>Search for players</button>
                    </InputGroup>
                    <div>
                        <p>
                            Player name: {playerSearchResultData.PlayerName}
                            player id: {playerSearchResultData.PlayerId}
                            Position: {playerSearchResultData.Position}
                            Team name: {playerSearchResultData.TeamName}
                        </p>
                    </div>
                </div>
                


                {resultData && console.log(resultData) &&
                    <div>
                        <p>{resultData.Welcome}</p>
                    </div>
                }

            </div>
        </div >
    )
}

export default MainPage;