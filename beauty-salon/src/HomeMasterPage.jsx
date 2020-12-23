import React from 'react'

export default class HomeMasterPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="HomeMasterPage">
                <h1>HomeMasterPage</h1>
                <div>
                    <h1>Вы вошли как мастер или салон</h1>
                </div>
            </div>
        )
    }
}
