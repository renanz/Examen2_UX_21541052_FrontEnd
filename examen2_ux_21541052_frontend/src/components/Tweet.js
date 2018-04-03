import React, {Component} from 'react'

class Tweet extends Component {

    handleClick = () => {
        this.props.onClick(this.props.tweet.id)
    }

    render() {
        return(
            <div className="tweet">
                <h4 onClick={this.handleClick}>{this.props.tweet.username}</h4>
                <p onClick={this.handleClick}>{this.props.tweet.body}</p>
            </div>
        )
    }
}

export default Tweet