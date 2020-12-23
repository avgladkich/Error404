import React from 'react'

export default class HomeClientPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="HomeClientPage">
                <h1>HomeClientPage</h1>
                <div>
                    <h1>Вы вошли как клиент</h1>
                </div>
            </div>
        )
    }
}
