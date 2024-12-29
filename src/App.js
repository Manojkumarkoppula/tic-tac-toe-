
import { useState } from 'react';
import './App.css';

function App() {

  const[game,setgame]=useState(true)
  function Checkwin(){
    const winCombo =[
      [0,1,2],   
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]    
    ]
      let c =[];
  
  
      for(let i=0; i<=8;i++){
        c.push(document.getElementById(`cell${i}`).innerHTML)
      }
  
      for(let x of winCombo){
        if(x.every(index => c[index]===player)){
          document.getElementById('result').innerHTML=player + " is winner"
          setgame(false)
          document.getElementById('nextplayer').innerHTML=""
        }
      }
      
  
      
    }
  

  const[player,setPlayer]=useState('x');
  
  
    function add(index)
  {
        if(game)
        {
          let v=document.getElementById(index);
          if(v.innerHTML=="")
          {
             if(player=='x')
             {
               v.innerHTML=player;
               Checkwin()
               setPlayer('0');
             }
             else
            {
              v.innerHTML=player;
              Checkwin()
              setPlayer('x');
            }
          }
         else
        {
         alert("dont allow double click")
        }
     }
        }
  
  
  

  return (
    <>
      <div className='container'>
        <h2>Tik Tak Toe</h2>
        <div className='main'>
          <div className='inner' id='cell0' onClick={()=>add('cell0')}></div>
          <div className='inner' id='cell1' onClick={()=>add('cell1')}></div>
          <div className='inner' id='cell2' onClick={()=>add('cell2')}></div>
          <div className='inner' id='cell3' onClick={()=>add('cell3')}></div>
          <div className='inner' id='cell4' onClick={()=>add('cell4')}></div>
          <div className='inner' id='cell5' onClick={()=>add('cell5')}></div>
          <div className='inner' id='cell6' onClick={()=>add('cell6')}></div>
          <div className='inner' id='cell7' onClick={()=>add('cell7')}></div>
          <div className='inner' id='cell8' onClick={()=>add('cell8')}></div>
          
        </div>
        <h2 id='nextplayer'>player {player}'s turn</h2>
        <h2 id='result'></h2>
        <button onClick={()=>window.location='/'}>Refresh</button>
      </div>
    </>
  );
}

export default App;
