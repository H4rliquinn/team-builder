import React, {useState} from 'react';
import './App.scss';
import TeamList from './components/TeamList.js'

const teamData=[{name:'Larry',email:'hi@mynameislarry.com',position:'Team Lead'},{name:'Darryl',email:'thisismybrother@mynameislarry.com',position:'Font-End Dev'},{name:'Daryll',email:'thisismyotherbrother@mynameislarry.com',position:'Back-End Dev'}];

function App() {

  const [team,setTeam]=useState(teamData);

  return (

    <div className="App">
        <h1>TEAM LIST</h1>
        <TeamList team={teamData}/>
    </div>
  );
}

export default App;
