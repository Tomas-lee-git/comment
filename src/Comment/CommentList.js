import React from 'react';
import Comment from'./Comment';

const CommentList=(props)=>{
    return(
        <div>
            {props.commentList.map((v,i)=>{
               return <Comment key={i} comment={v}/>
            })}
        </div>
    )
}
export default CommentList;