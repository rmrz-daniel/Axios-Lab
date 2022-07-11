import React, { Component } from 'react'
import axios from 'axios'

class ImageList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }

    postDelete = (postid) => {
        console.log(postid)
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${postid}`)
        .then(response => {
            if(response.data != null){
                this.setState({
                    posts: this.state.posts.filter(post => post.id !== postid)
                })
            }
        })
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: 'Error retreiving data'})
            })
    }

    render() {
        const {posts, error} = this.state
        return (
            <div>
                <strong>List of posts</strong>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                        <th>Delete</th>
                    </tr>
                    {
                        posts.length ?
                        posts.map(post => 
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td><img src={post.thumbnailUrl} alt="thumbnail"/></td>
                                <td><button onClick={this.postDelete.bind(this, post.id)}>Delete</button></td>
                            </tr>
                            ) :
                        null
                    }
                    {
                        error ? <div>{error}</div>:null
                    }
                </table>
            </div>
        )
    }
}

export default ImageList