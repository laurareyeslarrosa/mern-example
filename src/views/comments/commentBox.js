
//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './commentList';
import CommentForm from './commentForm';
import style from './../../content/css/style';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    loadCommentsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleCommentSubmit(comment) {
        axios.post(this.props.url, comment)
        .then(res => {
            this.setState({data: res});
        })
        .catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div style={style.commentBox}>
                <h2>Comments:</h2>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}
export default CommentBox;