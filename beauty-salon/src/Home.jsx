import React from 'react'
import { pulse } from 'react-animations'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Pulse = styled.div`
    margin: 0;
    position: absolute;
    top: 40%;
    left: 15%;
    animation: 5s ${keyframes`${pulse}`} infinite;
`

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home">
                <Pulse>
                    <h1 className="home-text">СВЕТИСЬ ОТ СЧАСТЬЯ</h1>
                </Pulse>
                <img className="home-img" src="./img/main1.jpg" />
            </div>
        )
    }
}
