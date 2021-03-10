import React from 'react';
import faqsData from '../fixtures/faqs.json'
import Accordian from '../components/Accordian/index'

const FaqsContainer = () => {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {
                faqsData.map(item => (
                    <Accordian.Item key = {item.id}>
                        <Accordian.Header>{item.header}</Accordian.Header>
                        <Accordian.Body>{item.body}</Accordian.Body>
                    </Accordian.Item>
                ))
            }
        </Accordian>
    )
}

export default FaqsContainer