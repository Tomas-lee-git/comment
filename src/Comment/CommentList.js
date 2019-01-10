import React from 'react';
import Comment from'./Comment';

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete(index){
        if(this.props.onDeleteComment){
                this.props.onDeleteComment(index);
        }
    }
    render(){
        return(
            <div>
                {this.props.commentList.map((v,i)=>{
                   return <Comment key={i} index={i} comment={v} onDeleteComment={this.handleDelete}/>
                })}
            </div>
        )
    }
}
export default CommentList;