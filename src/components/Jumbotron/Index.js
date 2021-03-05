import React from 'react'

import {Container, Pane, SubTitle, Title, Inner, Image, Item } from './styles/Jumbotron'

const Jumbotron = ({children, direction = 'row', ...restProps}) => {
    return (
        <Item direction={direction}>
            <Inner>
                {/* <p>I am the Jumbo</p> */}
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Image = function JumbotronImage({children, ...restProps}) {
    return <Image {...restProps}/>
}


export default Jumbotron
