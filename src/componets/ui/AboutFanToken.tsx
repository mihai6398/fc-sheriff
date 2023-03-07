import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const AboutFanToken = () => {
    return (
        <div style={{background: '#EDF1F7', height: '1120px'}} className={'d-flex align-items-center'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={'presentation-text-content'}>
                            <h3 style={{fontSize: '42px', fontWeight: '700'}} className={'text-dark'}>
                                What is FC SHERIFF <br/>
                                Fan Token?
                            </h3>
                            <p className={'opacity-75 pt-3 custom-text'}>
                                The FC SHERIFF Fan Token is a utility token that gives FC SHERIFF fans a tokenized share of influence on club decisions.
                                <br/> <br/>
                                Token holders can vote via smart contract on various “fan decision” polls published by FC SHERIFF Club. The token serves as a membership key that allows users to compete for exclusive rewards, club recognition, and more. FC SHERIFF is contractually bound to act according to poll results.
                                <br/> <br/>
                                FC SHERIFF Fan Token holders can interact (chatting with like-minded users/connecting, voting on polls, etc.), competing in contests and quizzes and earn rewards, including:
                                <br/> <br/>
                                <ul>
                                    <li className={'mb-4 list-style-active'}>Matchday tickets.</li>
                                    <li className={'mb-4 list-style-active'}>Cashback offers from official online shops.</li>
                                    <li className={'mb-4 list-style-active'}>Exclusive experiences.</li>
                                    <li className={'mb-4 list-style-active'}>In-app Token bonuses.</li>
                                    <li className={'mb-4 list-style-active'}>Club-specific NFTs.</li>
                                    <li className={'list-style-active'}>Digital badges.</li>
                                </ul>
                                <p>Future FC SHERIFF token utility includes:</p>
                                <ul>
                                    <li className={'mb-4 list-style-active'}>Integrating access in partnered applications/sites.</li>
                                    <li className={'mb-4 list-style-active'}>Spending tokens to redeem VIP goods and services.</li>
                                    <li className={'mb-4 list-style-active'}>Staking Token for NFT rewards.</li>
                                    <li className={'mb-4 list-style-active'}>Real-world Utility (matchday tickets, NFTs whose ownership signifies real-world ownership of merchandise, VIP access to stadiums, etc.).</li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{height: '300px'}} className={'bg-white d-flex align-items-center text-center mb-5'}>
                            <div className={'w-100'}>
                                <i><img src={'/assets/icon/home.png'} alt=""/></i>
                                <h3>A Step Closer</h3>
                                <p>Supercharge your fan experience</p>
                            </div>
                        </div>
                        <div style={{height: '300px', background:'linear-gradient(277.09deg, #313545 15.4%, #121118 100.07%)'}} className={'d-flex align-items-center text-center mb-5'}>
                           <div className={'w-100'}>
                               <i><img src={'/assets/icon/monetization_on.png'} alt=""/></i>
                               <h3 className={'text-white'}>Get Involved</h3>
                               <p className={'text-white'}>Manchester United will now turn to you for <br/> selected club decision</p>
                           </div>
                        </div>
                        <div style={{height: '300px'}} className={'bg-white d-flex align-items-center text-center'}>
                            <div className={'w-100'}>
                                <i><img src={'assets/icon/all_inclusive.png'} alt=""/></i>
                                <h3>Exclusive Benefits</h3>
                                <p>Unique rewards, exclusive merchandise & <br/> exceptional fan experiences</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutFanToken;