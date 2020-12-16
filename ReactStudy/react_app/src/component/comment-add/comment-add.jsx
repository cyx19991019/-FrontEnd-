import React,{Component} from 'react'
import PropsTypes from 'prop-types'

export default class CommentAdd extends Component{

    static propsTypes={
        comments:PropsTypes.func.isRequired
    }

    state = {
        username:'',
        content:''
    }


    render() {
        const {username,content} = this.state
        return (
            <div className="col-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" name="username"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" name="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary pull-right" >提&nbsp;&nbsp;交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

