import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>
                Welcome Friend
            </p>
            <Link
                to='/login'>
                Login now!
            </Link>
        </div>
    )
}

export default Home
