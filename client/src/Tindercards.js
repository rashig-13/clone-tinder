import React,{useEffect, useState} from 'react'
import './Tindercards.css'
import TinderCard from 'react-tinder-card'
import axios from  'axios';

export default function Tindercards() {
    const [people,setPeople] = useState([]);



useEffect(() => {
  axios.get("https://clone1-tinder.herokuapp.com/tinder/card").then((res) => {
    setPeople(res.data);
  })
  .catch((err) => console.log(err));

}, []);

  // console.log(people,"gyjh");
    const swiped = (direction,nameToDelete) => {
        console.log("removing" + nameToDelete)
      }
      const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
  return (
    <div className="Tindercards">
        <div className="tindercards__cardcontainer">

        {people.map(person =>(
       <TinderCard className="swipe" 
       key={person.name} 
       preventSwipe={['up','down']} 
       onSwipe={(dir) => swiped(dir,person.name)}
       onCardLeftScreen={() => outOfFrame(person.name)}  >
         <div
          style={{ backgroundImage : `url(${person.imgUrl})`}}
          className='card'
         >
           <h3>{person.name}</h3>  
           
        </div>  
       </TinderCard>
      ))}
        </div>
   
    </div>
  )
}
