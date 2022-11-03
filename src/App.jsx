import React, {useState,useEffect} from "react";
import API from "./api";
import Player from "./components/Player";
import "@styles/global.scss";
import "@styles/App.scss";



const App = () =>{
    const [team, setTeam] = useState({})
    const [players, setPlayers] = useState([])

    const getTeams = async () => {
        // const response = await API.get('players/seasons');
        const response = await API.get('players/squads?team=33');
       console.log(response.data)
       console.log(response.data.response)
       console.log(response.data.response[0])
       
       // console.log(response) 
       setTeam(response.data.response[0].team)   
       setPlayers(response.data.response[0].players)   

    }
    useEffect(() => {
        getTeams()
    },[])

    return (
        <div className="App">
        <h1>
            Base de proyecto de futbol poco - React 
        </h1>
        <div>
            {
                team && 

                    <div>
                        <img src={team.logo} alt="" />
                        <p key={team.id}>{team.name}</p>
                    </div>
                
            }
        <div className="container">
            {
                players && players.map(player => (
                    <Player player={player} key={player.id} />
                ))
            }
        </div>
        </div>
        </div>
    )
}

export default App