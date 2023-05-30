import React , { useState } from 'react'

import demons from '../data/data_demons';
import { useParams } from 'react-router-dom'
import './Display.css';


const DisplayDemons = () => {
      const { demonid } = useParams();
      const demon = demons.find((demon) => demon.id == demonid);

      
      
      

      

      const slimgs = [
        {id:1,value:demon.sl1},
        {id:2,value:demon.sl2},
        {id:3,value:demon.sl3},
        {id:4,value:demon.sl4},
        {id:5,value:demon.sl5},
        
      ]
      const [sliderData,setSliderdata] = useState(slimgs[0])
              const handeleClick=(index)=>{
                const slider=slimgs[index];
                setSliderdata(slider);
              }
       if (demon.sl1 != null)
      {return (
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
          <section>
          <h2>Galary</h2>
        <table className='galarytable'>
         <tr>
             <th>
                 <div class="bigimage">
                 <img className="full-img" src={sliderData.value} alt='somename' />
                 </div>
             </th>
         </tr>
         <tr>
           <td className='tdsmallimg'>
             <div class="small-img">
               {
                 slimgs.map((data,i)=> 
                   <img key={data.id} className='small-img' src={data.value} onClick={()=>handeleClick(i)} alt='somename' /> 
                 ) 
                }
              </div>
             </td>
         </tr>
     </table>
          </section>
        <h2>  Abilities  </h2>
        <section>
            {demon.abilities}
        </section>
        <h2>  Blood Demon Art  </h2>
          <section>
              {demon.BloodDemonArt}
          </section>
        </div>
      );}

      else{
        return (
          <div className="Giyu" >
           
          <h1>{demon.title}</h1>
          
          <div className="basicinfo">
            <img src={demon.img} alt={demon.name}/>
            <h1>   {demon.name}</h1>
          </div>
          <br/><br/><br/>
          <h2>  Basic Info  </h2>
          <section>
              {demon.basicinfo}
            </section>
            
          <h2>  Abilities  </h2>
          <section>
              {demon.abilities}
          </section>
          <br/>
          <h2>  Blood Demon Art  </h2>
          <section>
              {demon.BloodDemonArt}
          </section>
          <br/><br/>
          </div>
        );


      }
}

export default DisplayDemons