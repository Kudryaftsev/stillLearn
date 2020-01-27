import React from 'react';
import './App.css';
import Footballers from './Footballers/Footballers'

class App extends React.Component{
  state = {
    footballers: [
      { name: 'CriRo', position: 'Cf', assists: 25, goals: 30, coast: 70000000 },
      { name: 'Dybala', position: 'Cf', assists: 13, goals: 29, coast: 55000000 },
      { name: 'Costa', position: 'Rm', assists: 11, goals: 24, coast: 40000000 },
      { name: 'Griezman', position: 'Lm', assists: 5, goals: 11, coast: 20000000 },
      { name: 'Kiki', position: 'Dm', assists: 1111, goals: 2234, coast: 3312312312312 },
      { name: 'Modric', position: 'Cm', assists: 33, goals: 14, coast: 17000000 },
    ],
    //  отобразить?
    isShow: true
  }

  inTeamFunction = () => {
    console.log( 'In team' )
  }

  outTeam( index ) {
    const foots = this.state.footballers.concat() //  1) создать массив, вернее скопировать
    foots.splice( index, 1 )                      //  2) удалить элемент из скопированного массива

    this.setState( { footballers: foots } )       //  3) изменить state на новый массив
  }

  showBlocks = () => {
    this.setState( { isShow: !this.state.isShow } )
    console.log( this.state.isShow )
  }

  render(){
    return(
    <div className="app">
      <button className="app__button" onClick={ this.showBlocks }>Show/Hide</button>
      <div className="footballers">
        { this.state.isShow 
            ?this.state.footballers.map( (foot, index) => {
              return (
                <Footballers
                key={ index }
                name={ foot.name }
                position={ foot.position }
                assists={ foot.assists }
                goals={ foot.goals }
                coast={ foot.coast }
                inTeam = { () => this.inTeamFunction() }
                outTeam = { this.outTeam.bind( this, index ) }
                />
          )
        } ): null } 
      </div>
    </div>
    )
  }
}

export default App;
