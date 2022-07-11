import React, { Component } from 'react'
import axios from 'axios'

class ImageAddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
        })
    }

    render() {
        const{ userId, title} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>UserId: </label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ImageAddForm