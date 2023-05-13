import React from 'react'
import demons from '../data/data_slayers';
import { useParams } from 'react-router-dom'
import './Display.css';

const DisplayHashiras = () => {
      const { demonid } = useParams();
      const demon = demons.find((demon) => demon.id == demonid);
      
      return (
        <div className="Giyu" >
         
          <h1>{demon.title}</h1>
          
          <div className="basicinfo">
            <img src={demon.img} alt={demon.name}/>
            <h1>   {demon.name}</h1>
          </div>
          <h2>  Basic Info  </h2>
          <section>
              {demon.basicinfo}
            </section>
          <br /><br /><br />
          <h2>  Abilities  </h2>
          <section>
              {demon.abilities}
          </section>
          <h2>  Breathing Style  </h2>
          <section>
              {demon.BreathingStyle}
          </section>
        </div>
      );
}

export default DisplayHashiras