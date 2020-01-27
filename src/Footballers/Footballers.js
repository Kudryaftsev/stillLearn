import React from 'react'

export default props => (
    <div className="footballers__player">
        <h3>Name: { props.name }</h3>
        <p>Position: { props.position }</p>
        <p>Assists: { props.assists }</p>
        <p>Goals: { props.goals }</p>
        <p>Coast: { props.coast }</p>
        <button onClick={ props.inTeam }>Team</button>
        <button onClick={ props.outTeam }>Delete</button>
    </div>
)