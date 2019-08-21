import React, {useState} from 'react';

function Form(props){
    const [teamMember,setTeamMember]=useState({ name: "", email: "", position: "" });
    // console.log(props);
    // console.log(teamMember)
    const changeHandler=(e)=>{
        // console.log(e.target.value);
        setTeamMember({...teamMember, [e.target.name]:e.target.value});
        // console.log(team)
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        props.addMember(teamMember);
        setTeamMember({ name: "", email: "", position: "" })
        // console.log(e);
      }

    return(
        <div className="form">
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <div className="formItem">
                    <label htmlFor="name">Name: </label>
                    <input onChange={changeHandler} name="name" type="text" placeholder="Name Here" value={teamMember.name} />
                </div>
                <div className="formItem">
                    <label htmlFor="email">Email: </label>
                    <input onChange={changeHandler} name="email" type="text" placeholder="Email Here" value={teamMember.email} />
                </div>
                <div className="formItem">
                    <label htmlFor="position">Role: </label>
                    <input onChange={changeHandler} name="position" type="text" placeholder="Role Here" value={teamMember.position} />
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}

export default Form;