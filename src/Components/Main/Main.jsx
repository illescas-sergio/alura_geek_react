import styles from './Main.module.css';
import Sections from '../Sections/Sections.jsx';
import { useState, useEffect } from 'react';

export default function Main(){

    const [data, setData] = useState([]);
  
  
    useEffect(()=>{
      fetch("http://localhost:8000/products/")
      .then(resp => resp.json())
      .then(res => setData(res))
      .then(data => console.log(data))
      .catch(err => console.log(err))
    },[])
    
    console.log(data)

    // eslint-disable-next-line no-unused-vars
    

      let sections = []
      // eslint-disable-next-line no-unused-vars
      let sectionsArray = data.forEach(el=> {
        if(!sections.includes(el.category)){
          sections.push(el.category)
        }
      })
      console.log(sectionsArray)
      console.log(data)

    return (
        <main className={styles.products}>
            {
                sections.map(el => (
                    <Sections key={el} sectionId={el} productos={data}/>
                ))
            }
        </main>
    )
}


