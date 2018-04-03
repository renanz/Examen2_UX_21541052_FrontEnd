import React, { Component } from 'react'
import axios from 'axios'

class TweetsContainer extends Component {
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/tweets.json')
        .then(response => {
            console.log(response)
            this.setState({tweets: response.data})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                Tweet Feed
            </div>
        )
    }
}

export default TweetsContainer