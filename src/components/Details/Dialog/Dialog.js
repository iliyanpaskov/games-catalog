import {  useHistory, useParams } from "react-router-dom";
import * as userServices from "../../../services/userService"
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Dialog.css"


const Dialog = ({
    message,
    handleDialog
}) => {
    
    const { user } = useContext(AuthContext);
    const historyHook = useHistory();
    const {id} = useParams()
    
    


    const deleteGame = () =>{
        userServices.deleteGame(user.accessToken, id);
        historyHook.push("/my-games")
    }

    return (
        <div className="dialog-box">
            <div className="dialog">
                <h3 className="dialog-message">{message}</h3>
                <div className="dialog-btns">
                    <button className="yes-btn" onClick={deleteGame} >Yes</button>
                    <button className="no-btn" onClick={()=>handleDialog(false)}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;