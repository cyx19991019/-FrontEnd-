import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component{

    //定义约束
    static propTypes ={
        comments:PropTypes.object.isRequired
    }

    render() {
        // 取数据
        const {comments} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <button className="btn btn-danger">删除</button>
                </div>
                <p className="user"><span>{comments.username}</span>说：</p>
                <p className="centence">{comments.content}</p>
            </li>
        );
    }
}

