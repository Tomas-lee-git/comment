import React,{Component} from 'react';
import PropTypes from 'prop-types'

class Comment extends React.Component{
    static propTypes={
        comment:PropTypes.object.isRequired
    }
    constructor(props){
        super(props)
        this.state={
            timeString:''
        }
    }
    // static defaultProps={}
    componentWillMount(){
        this._updateTime()
        this.timer=setInterval(()=>{this._updateTime()},5000);
    }
    compnentDidMount(){
        clearInterval(this.timer)
    }
    _updateTime(){
        const duration=(new Date()-this.props.comment.createdTime)/1000;
        this.setState({
            timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    render(){
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        )
    }
    
}
export default Comment;