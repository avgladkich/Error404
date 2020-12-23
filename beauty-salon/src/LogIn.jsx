import React from 'react'

import styled from 'styled-components'

const InputTag = styled.input`
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    width: 350px;
    display: inline-block;
    caret-color: #21262d;
    font-size: 16px;
    padding: 8px 13px;
    color: #444;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    outline: 0;
    text-align: left;
    line-height: 24px;
    margin-bottom: 4px;
    border: 1px solid #dfdfdf;
`

export default class LogIn extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { placeholder } = this.props
        return (
            <div>
                <InputTag placeholder={placeholder} />
            </div>
        )
    }
}
