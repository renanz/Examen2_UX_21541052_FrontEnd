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
        this.setState({[e.target.name]: e.target.value})
      }

    render() {
        return (
            <div className="tweet">
                <form>
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