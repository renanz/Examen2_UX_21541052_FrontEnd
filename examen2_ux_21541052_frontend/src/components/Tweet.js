import React from 'react'

const Tweet = ({ tweet }) =>
    <div key={tweet.id}>
        <h4>{tweet.username}</h4>
        <p>{tweet.body}</p>
    </div>

export default Tweet