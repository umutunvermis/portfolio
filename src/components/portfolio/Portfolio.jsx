import Projects from '../projects/Projects';
import './portfolio.scss'
import { useEffect, useState } from 'react';
import {fish, social, chat} from "../../data.js"
export default function Portfolio() {

  const [selected,setSelected] = useState("fish");
  const [data,setData] = useState([]);
  const list = [
    {
      id: "social",
      title: "Simple Social Media App",
    },
    {
      id: "fish",
      title: "Fish Auciton Web App",
    },
    {
      id: "chat",
      title: "Chatroom in C",
    },
  ];

  useEffect(()=>{
    switch (selected) {
      case "fish":
        setData(fish);
        break;
      case "social":
        setData(social);
        break;
      case "chat":
        setData(chat);
        break;
      default:
        setData(fish);
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
        <h1>Projects</h1>
          <ul>
            {list.map((item)=> (
              <Projects 
                title={item.title} 
                active={selected === item.id }
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        <div className="container">     
          
          <div className="item">
            {data.map((d) => (
              <h2>{d.title}</h2>
            ))}
            {data.map((d) => (
              <h3>{d.text}</h3>
            ))}
            {data.map((d) => (
              <h3>{d.tech}</h3>
            ))}
            {data.map((d) => (
              <a href={d.git}>Source</a>
            ))}
          </div>
        </div>
    </div>
  )
}
