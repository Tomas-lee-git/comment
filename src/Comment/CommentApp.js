import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

import './CommentApp.css'

class CommentApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            isShowInput:true
        }
        this.getInfo = this.getInfo.bind(this);
        this.clickHandle=this.clickHandle.bind(this)
    }
    componentWillMount(){
        this._loadCommentList();
    }
    _loadCommentList(){
        if(localStorage.getItem('commentList')){
            this.setState({
                commentList:JSON.parse(localStorage.getItem('commentList'))
            })
        }
    }
    _saveCommentList(){
        localStorage.setItem('commentList',JSON.stringify(this.state.commentList))
    }
    getInfo(comment) {
        if (!comment.username) { return alert('Please input your name') }
        if (!comment.content) { return alert('Please input your comment') }
        this.setState({
            commentList: [...this.state.commentList, comment]
        },()=>{this._saveCommentList()})  
    }
    clickHandle(){
        this.setState({
            isShowInput:!this.state.isShowInput
        })
    }
    render() {
        return (
            <div className="wrapper">
            <button onClick={this.clickHandle}>{this.state.isShowInput?'关闭评论输入':'打开评论输入'}</button>
              {this.state.isShowInput?  <CommentInput onSubmit={this.getInfo}/>:null}
                <CommentList commentList={this.state.commentList} />
            </div>
        )
    }
}
export default CommentApp;