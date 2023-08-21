import styles from './Main.module.css';
import Sections from '../Sections/Sections.jsx';
import { useState, useEffect } from 'react';

export default function Main(){

    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   // Función para hacer la solicitud a la API
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("http://localhost:8000/api/products/");
    //       const jsonData = await response.json();
    //       setData(jsonData);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
      
    //   // Llamamos a la función para hacer la solicitud cuando el componente se monta
    //   fetchData();
    // }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
  
    useEffect(()=>{
      fetch("http://localhost:8000/api/products/")
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
        if(!sections.includes(el.sectionId)){
          sections.push(el.sectionId)
        }
      })
      console.log(sectionsArray)
      console.log(sections)

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


