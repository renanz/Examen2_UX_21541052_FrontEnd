import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
import update from 'immutability-helper'
import TweetForm from './TweetForm'


class TweetsContainer extends Component {
    constructor(props){
		super(props)
		this.state = {
            tweets: [],
            editingTweetId: null,
            notification: ''
		}
	}
    componentDidMount() {
        axios.get('https://examen2-ux-21541052-backend.herokuapp.com/api/v1/tweets.json')
        .then(response => {
            console.log(response)
            this.setState({tweets: response.data})
        })
        .catch(error => console.log(error))
    }

    addNewTweet = () => {
        axios.post ('https://examen2-ux-21541052-backend.herokuapp.com/api/v1/tweets',
            { tweet:
                {
                    username: '',
                    body: ''
                }
            }
        )
        .then(response => {
            console.log(response)
            const tweets = update(this.state.tweets, {
                $splice: [[0, 0, response.data]]
            })
            this.setState({
                tweets: tweets,
                editingTweetId: response.data.id
            })
        })
        .catch(error => console.log(error))
    }

    updateTweet = (tweet) => {
        const tweetIndex = this.state.tweets.findIndex(x => x.id === tweet.id)
        const tweets = update(this.state.tweets, {
          [tweetIndex]: { $set: tweet }
        })
        this.setState({
            tweets: tweets,
            notification: 'Cambios efectuados'
        })
      }
    
    resetNotification = () => {
        this.setState({notification: ''})
    }

    enableEditing = (id) => {
        this.setState({editingIdeaId: id})
      }

    render() {
        return (
            <div>
                <div>
                    <button className="newTweetButton" onClick={this.addNewTweet}>
                        New Tweet
                    </button>
                    <span className="notification">
                        {this.state.notification}
                    </span>
                </div>
                <div>
                    {this.state.tweets.map((tweet) => {
                        if(this.state.editingTweetId === tweet.id){
                            return(
                                <TweetForm tweet={tweet} key={tweet.id} updateTweet={this.updateTweet} 
                                    resetNotification={this.resetNotification}/>
                            )
                        }
                        else{
                            return(
                                <Tweet tweet={tweet} key={tweet.id} onClick={this.enableEditing} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default TweetsContainer