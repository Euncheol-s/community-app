import axios from 'axios';

const BOARD_API="https://localhost:8080/api/board";
class BoardService{
    getBoards(){
        return axios.get(BOARD_API);
    }
}
export default new BoardService();