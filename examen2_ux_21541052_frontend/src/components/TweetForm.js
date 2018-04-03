import React, { Component } from 'react'
import axios from 'axios'

class TweetForm extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.tweet.username,
            body: this.props.tweet.body
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
      }

    handleBlur = () => {
        const tweet = {
            username: this.state.username,
            body: this.state.body
        }

        axios.put(
            `http://localhost:3001/api/v1/tweets/${this.props.tweet.id}`,
            {
                tweet: tweet
            }
        )
        .then(response => {
            console.log(response)
            this.props.updateTweet(response.data)
        })
        .catch (error => console.log(error))
    }

    render() {
        return (
            <div className="tweet">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text" name="username" placeholder='Enter a username' 
                        value={this.state.username} onChange={this.handleInput} />

                    <textarea className='input' name="body" placeholder='Write your tweet'
                        value={this.state.body} onChange={this.handleInput} />
                </form>
            </div>
        )
    }
}

export default TweetForm