import GenericPage from "../page/GenericPage";
import { useParams } from 'react-router-dom';
import axios from "axios";
import AppContext from "../../store/AppContext";
import { useContext } from "react";
import { io } from 'socket.io-client';
import { useState } from "react";

function Chat (){
    // const token = localStorage.getItem("token"); // récupère le jeton d'authentification depuis le stockage local
    const [messages, setMessages] = useState([])
    const ctx = useContext(AppContext);
    const config = {
        headers: {
          Authorization: `Bearer ${ctx.token}`, // ajoute le jeton d'authentification dans l'en-tête d'autorisation
        },
      };
    const { id } = useParams()
    const res = axios.get(`http://localhost:3000/api/user/chat/me/${id}?limit=10&skip=0`,config).then((response) => response.data);
    console.log( res)
    
    // for (let i = 0; i < res.; i++) {
    //   str = str + i;
    // }
    

    return (
        <GenericPage>
            
        </GenericPage>
    );
}

export default Chat;