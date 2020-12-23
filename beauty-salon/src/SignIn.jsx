import React from 'react'

import styled from 'styled-components'

const SignLink = styled.p`
    font-size: 12px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <SignLink onClick={this.props.link}>{this.props.name}</SignLink>
    }
}
