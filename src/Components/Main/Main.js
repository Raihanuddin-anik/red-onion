import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Section from '../Section/Section';
import {Row} from 'react-bootstrap';
import './Main.css'

const Main = () => {
    const firstTem = data.slice(0, 18)
    const [allData, setallData] = useState(firstTem);
    console.log(allData);

    return (
      
           <div className="row">
              
            
                {
                    allData.map(data => <Section data={data}></Section>)
                }
              
           </div>
      
    );
};

export default Main;