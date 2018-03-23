
//CommentBox.js
import React, { Component } from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';
import DATA from './../../data';
import style from './../../content/css/style';
class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        return (
            <div style={style.commentBox}>
                <h2>Comments:</h2>
                <CommentList data={DATA} />
                <CommentForm />
            </div>
        )
    }
}
export default CommentBox;