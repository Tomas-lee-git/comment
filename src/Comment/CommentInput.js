import React, { Component } from 'react';
class CommentInput extends React.Component {
    constructor(props) {
        console.log('component will constructor')
        super(props);
        this.state = {
            username: '',
            content: '',
            // text:`<p>hello</p>`
           createdTime:+new Date()
        }
        this.getUsername=this.getUsername.bind(this)
        this.getContent=this.getContent.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
    }   
    // lifcycle 
    componentWillMount() {
        console.log('component will mount')
        this._loadUsername();
    }
    componentDidMount() {
        console.log('component did mount')
        this.textareaDom.focus();
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    shouldComponentUpdate(){
        console.log('should component need update?')
        return true;
    }
    componentWillUpdate(){
        console.log('component will update')
    }
    componentDidUpdate(){
        console.log('component did update')
    }
    // selfEvent
    _saveUsername(){
        localStorage.setItem('username',this.state.username)
    }
    _loadUsername(){
        if(localStorage.getItem('username')){
            this.setState({
                username:localStorage.getItem('username')
            })
        }
    }
    //eventListener 
    getUsername(e) {
        this.setState({
            username: e.target.value
        })

    }
    getContent(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit(e) {
        if (this.props.onSubmit) {
            const {username,content}=this.state;
            const createdTime=+new Date();
            this.props.onSubmit({username,content,createdTime});
        } 
        this.setState({
            content: ''
        })
    }
    handleBlur(){
        this._saveUsername()
    }
 
    render() {
        console.log('component will render')
        return (
            <div className='comment-input'>
                <div className='comment-field'> 
                    <span className='comment-field-name'>用户名：</span>
                    <input value={this.state.username} onChange={this.getUsername} onBlur={this.handleBlur} />
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <textarea ref={textareaDom=>{this.textareaDom=textareaDom}}value={this.state.content} onChange={this.getContent} />
                    {/* <div dangerouslySetInnerHTML={{__html:this.state.text}}></div> */}
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput;