import React from 'react'
import './home.css'
import demons from '../data/data_demons';
import { Link  } from 'react-router-dom';

const Demons = () => {
  return (
    <div>
         <h1>Demons</h1><br />
        <table>
          <tr>
          {demons.slice(0, 3).map(demon => {
            return (
              <td key={demon.id}><Link to={`/DisplayDemon/${demon.id}`} key={demon.id}><img src={demon.img} alt={demon.name} /> <br />{demon.title}</Link></td>
            
                
              
            );
          })}
          </tr>
        </table>
        <h1>Uppermoons</h1><br />
        <table>
          <tr>
          {demons.slice(3, 9).map(demon => {
            return (
              <td key={demon.id}><Link to={`/DisplayDemon/${demon.id}`} key={demon.id}><img src={demon.img} alt={demon.name} /> <br />{demon.title}</Link></td>
            
                
              
            );
          })}
          </tr>
        </table>
        <h1>Lower Moons</h1><br />
        <table>
          <tr>
          {demons.slice(9, 15).map(demon => {
            return (
              <td key={demon.id}><Link to={`/DisplayDemon/${demon.id}`} key={demon.id}><img src={demon.img} alt={demon.name} /> <br />{demon.title}</Link></td>
            
                
              
            );
          })}
          </tr>
        </table>
    </div>
  )
}

export default Demons