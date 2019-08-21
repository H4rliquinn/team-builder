import React from 'react';

function TeamList(props){
    // console.log(props);
    return(
        <div className="teamList">
            {props.team.map((item)=>{
                return (
                    <div className="teamMember" key={item.name}>
                        <div className="name" >{item.name}</div>
                        <div className="email">{item.email}</div>
                        <div className="position">{item.position}</div>
                    </div>  
                )
            })}
        </div>
    )
}

export default TeamList;