import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                <Link to='/'>
                </Link>
                <h1>Friends:</h1>
                {this.props.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h1>{friend.name}</h1>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(FriendsList)
