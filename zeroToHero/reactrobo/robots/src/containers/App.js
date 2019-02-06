import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'

import SearchBox from '../components/SearchBox'


// state means the decription of yor app
//state is able to change 
// a parent feeds state to a child component
// state >> props




class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })


    }
    render() {
        const { robots, searchfield } = this.state
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1> :


            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>

    }

}


export default App;