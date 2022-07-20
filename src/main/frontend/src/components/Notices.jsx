import { Link } from "react-router-dom";
import React, { Component } from "react";
import BoardService from '../service/BoardService';

class Notice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PostLists: []
        }

    }
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ PostLists: res.data});
        });
    }
    render() {
        return (
            <div>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>좋아요수</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.PostLists.map(
                                    Post =>
                                    <tr>
                                        <td> {Post.id} </td>
                                        <td> {Post.title} </td>
                                        <td> {Post.author} </td>
                                        <td> {Post.board_date} </td>
                                        <td> {Post.recommend} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Notice;