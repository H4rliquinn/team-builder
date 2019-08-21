import React, {useState} from 'react';
import './App.scss';
import TeamList from './components/TeamList.js'
import Form from './components/Form.js'



function App() {

  const [team,setTeam]=useState(teamData);

  const addMember = (member)=>{
    console.log(team,member);
    setTeam([...team, member]);
    console.log("New Team",team);
  }

  return (

    <div className="App">
        <h1>TEAM LIST</h1>
        <TeamList team={team}/>
        <Form addMember={addMember} />
    </div>
  );
}

const teamData=[{name:'Larry',email:'hi@mynameislarry.com',position:'Team Lead'},{name:'Darryl',email:'thisismybrother@mynameislarry.com',position:'Font-End Dev'},{name:'Daryll',email:'thisismyotherbrother@mynameislarry.com',position:'Back-End Dev'}];

export default App;
