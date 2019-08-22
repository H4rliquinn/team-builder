import React, {useState} from 'react';
import './App.scss';
import TeamList from './components/TeamList.js'
import Form from './components/Form.js'



function App() {

  const [team,setTeam]=useState(teamData);
  const [memberToEdit,setmemberToEdit]=useState(null);

  const addMember = (member)=>{
    // console.log(team,member);
    setTeam([...team, member]);
    // console.log("New Team",team);
  }

const editMember=(e)=>{
  // console.log(e.target.value,team);
  const foundMember = team.find((item)=>{
    return item.name===e.target.value,team;
  })
}

  return (

    <div className="App">
        <h1>TEAM LIST</h1>
        <TeamList team={team}  editMember={editMember}/>
        <Form addMember={addMember} memberToEdit={memberToEdit}/>
    </div>
  );
}

const teamData=[{name:'Larry',email:'hi@mynameislarry.com',position:'Team Lead'},{name:'Darryl',email:'thisismybrother@mynameislarry.com',position:'Font-End Dev'},{name:'Daryll',email:'thisismyotherbrother@mynameislarry.com',position:'Back-End Dev'}];

export default App;
