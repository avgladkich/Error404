import React from 'react'
import styled from 'styled-components'

const SubmitBtn = styled.button`
    margin-top: 8px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    user-select: none;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 8px 13px;
    font-size: 15px;
    height: 40px;
    line-height: 24px;
    background: #8b3e2c;
    color: #fff;
    border: 1px solid transparent;

    &:hover {
        background: #a77474;
    }
`

export default class Submit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <SubmitBtn onClick={this.props.submit}>
                    {this.props.name}
                </SubmitBtn>
            </>
        )
    }
}
