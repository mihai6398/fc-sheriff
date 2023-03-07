import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

const Steps = () => {
    const [financeContent, setFinanceContent] = useState<string>(`go to bitcoin.com download the app and create wallet.`);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const steps = [
        {
            title: "Step 1",
            content: "Go to bitcoin.com download the app and create wallet.",
        },
        {
            title: "Step 2",
            content: "Send Us ETH to Our address : 0x222dB2f64F6b871cc0cF58dED2e1dC8094f6Abe3",
        },
        {
            title: "Step 3",
            content: "Once your Transaction Is confirmed you will Receive your token to the same wallet.",
        },
    ];

    const handleStepClick = (index: number) => {
        setFinanceContent(steps[index].content);
        setCurrentStep(index);
    };

    return (
        <div className={'d-flex align-items-center'} style={{backgroundImage: `url('/assets/image/step.png')`, height: '505px'}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3 style={{fontSize: '48px'}} className={'text-white pb-3'}>
                            The Right Financial Plan Changes <span className={'px-2'} style={{color: "black", background: 'yellow'}}>Everything</span>
                        </h3>
                        <div>
                        <span className={'text-white'}>
                            We are excited to announce the first public round only 5,000,000 FC SHERIFF tokens, price is $1 per token.
                        </span>
                            <p className={'text-white'}>
                                Note : Min contribution is 100$. Max contribution is 20.000$ per user.
                            </p>
                            <p className={'text-white'}>
                                GET MORE <span className={'text-yellow'}>30%</span> WHEN YOUR INVEST 1 ETH (ONLY from 01 Sep 2021 to 30 Nov 2021 )
                            </p>
                        </div>
                    </Col>
                    <Col lg={'6'}>
                        <div className={'text-white pl-5 pt-5  text-start'}>
                            <p className={''}>How do I participate:</p>
                            <ul className={'p-0 d-inline-flex'}>
                                {steps.map((step, index) => (
                                    <li className={'pr-4'} key={step.title}>
                                    <span
                                        onClick={() => handleStepClick(index)}
                                        className={currentStep === index ? ' text-yellow fs-3 fw-bold me-3 cursor-pointer' : 'text-white fs-3 fw-bold me-3 cursor-pointer'}
                                    >
                                        {step.title}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                {financeContent}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Steps;
