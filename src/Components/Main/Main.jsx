/* eslint-disable react/prop-types */
// import { useState } from 'react';
import styles from './Main.module.css';
// import Sections from '../Sections/Sections.jsx';
import { useSelector } from 'react-redux';

export default function Main(){

  //const [showSection, setShowSection] = useState("");

  const data = useSelector((state) => state.data)

  console.log(data)
    
      // let sections = []
      // // eslint-disable-next-line no-unused-vars
      // data.forEach(el=> {
      //   if(!sections.includes(el.category)){
      //     sections.push(el.category)
      //   }
      // })

    return (

          <main className={styles.products}>
          {/* {
            showSection === "" ?
              sections.map(el => (
                  <Sections key={el} sectionId={el} productos={data} setShowSection={setShowSection}/>
              )) 
              :
              sections.filter(el => el.category === showSection).map(el => {
                if(el.category === showSection){
                  return <Sections key={el.name} sectionId={el} productos={data} setShowSection={setShowSection} />
                }
              } )            
          } */}
            {
              data.items.map(el => <h1 key={el.name}>{el.name}</h1>)
            }
              
          </main>  
      
    )
}


