import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet'

class TweetsContainer extends Component {
    constructor(props){
		super(props)
		this.state = {
			tweets: []
		}
	}
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
                <button className="newTweetButton">
                    New Tweet
                </button>
                {this.state.tweets.map((tweet) => {
                    return(
                        <Tweet tweet={tweet} key={tweet.id} />
                    )
                })}
            </div>
        )
    }
}

export default TweetsContainer