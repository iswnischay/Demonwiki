import React from 'react'
import './home.css'
import demons from '../data/data_slayers';
import { Link  } from 'react-router-dom';

const Hasiras = () => {
  return (
    <div>
         <h1>Demon Slayers</h1><br />
        <table>
          <tr>
          {demons.slice(9,15).map(demon => {
            return (
              <td key={demon.id}><Link to={`/DisplayHashiras/${demon.id}`} key={demon.id}><img src={demon.img} alt={demon.name} /> <br />{demon.name}</Link></td>
            
                
              
            );
          })}
          </tr>
        </table>
        <h1>Hashiras</h1><br />
        <table>
          <tr>
          {demons.slice(0,9).map(demon => {
            return (
              <td key={demon.id}><Link to={`/DisplayHashiras/${demon.id}`} key={demon.id}><img src={demon.img} alt={demon.name} /> <br />{demon.title}</Link></td>
            
                
              
            );
          })}
          </tr>
        </table>
    </div>
  )
}

export default Hasiras