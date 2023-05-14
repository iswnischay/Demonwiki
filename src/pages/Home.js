import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='homepage'>
      <h1>Demon Slayer Wiki</h1>
      <ul>

        <div>
          <h2>What is Demon slayer ?</h2>
          <h4>
            <p>
              Demon Slayer: Kimetsu no Yaiba ( Kimetsu no Yaiba, "Blade of Demon Destruction") is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneously published by Shueisha on their Manga Plus platform. It follows teenage <Link to={"/DisplayHashiras/10"}> Tanjiro Kamado </Link> , who strives to become a Demon Slayer after his family was slaughtered and his younger sister, <Link to={"/DisplayDemon/2"}> Nezuko </Link> , turned into a demon.
            </p>
          </h4>
        </div>
        <div>
          <h2>Plot of The Anime</h2>
          <h4>
            <p>
              The story takes place in Taishō era Japan, where a secret society, known as the Demon Slayer Corps, has been waging a secret war against demons for centuries. The demons are former humans who were turned into demons by Muzan Kibutsuji injecting them with his own blood, and they feed on humans and possess supernatural abilities such as super strength, powers that demons can obtain called "Blood Demon Art", and regeneration. Demons can only be killed if they are decapitated with weapons crafted from an alloy known as Nichirin, injected with poison extracted from wisteria flowers, or exposed to sunlight. The Demon Slayers, on the other hand, are entirely human. However, they employ special elemental breathing techniques, known as "Breathing Styles", which grant them superhuman strength and increased resistance, helping them fight against demons. The strongest Demon Slayers are known as the Hashira, and gain this rank through either killing a member of the Twelve Kizuki (the twelve strongest demons under Muzan) or killing fifty demons after ranking up multiple times.
            </p>
          </h4>
        </div>
        <div>
          <h2>Story</h2>
          <h4>
            <p>
              In Taisho-era Japan, <Link to={"/DisplayHashiras/10"}> Tanjiro Kamado </Link> is a kindhearted boy who makes a living selling charcoal. However, his peaceful life is shattered when a Demon slaughters his entire family. His little sister <Link to={"/DisplayDemon/2"}> Nezuko </Link> is the only survivor, but she has been transformed into a Demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the Demon who ruined his life.
          </p>
        </h4>
      </div><li><h2>Characters</h2><br /><br /><br /><br /></li><div>
        <h2><Link to="/Hashiras">Demon Slayers</Link></h2>
        <h4>
          <p>
            The Demon Slayers are the central adversary to the demon race. They are an organization trained to destroy them through a multitude of well refined techniques and tools developed across centuries to exterminate them. As a result, demons tend to live in secrecy with the population at large being ignorant to their existence. Even more, some demons blend into human society as a way to hide from persecutors and also to have a much easier access to prey.
          </p>
        </h4>
      </div><div>
        <h2><Link to="/Demons">Demons</Link></h2>
        <h4>
          <p>
            Demons  are the titular main antagonistic faction of the manga Demon Slayer. They were originally humans who are transformed or been cursed by Muzan Kibutsuji, turned into ravenous monsters feeding on human flesh, and most of them have no shred of humanity inside of them. Despite their strength, they are easily felled by sunlight, turning to ash upon death.
          </p>
        </h4>
      </div>
       
      </ul>
    
     
    </div>
  )
}

export default Home