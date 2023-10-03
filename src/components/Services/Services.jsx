import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import classes from './Services.module.css'
import Service from "./Service.jsx";
const Services = (props) => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchServicesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://kimremy-d0827-default-rtdb.europe-west1.firebasedatabase.app/services.json');


            const data = await response.data;
            const loadedMovies = [];

            for (const key in data){
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    shortDescription : data[key].shortDescription,
                    price : data[key].price,
                    duration : data[key].duration,
                    people : data[key].public,
                    imgURL : data[key].imgURL
                })
            }

            setServices(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
        console.log(services)
    }, []);
    useEffect(() => {
        fetchServicesHandler()

    }, [fetchServicesHandler]);
    //TODO: Render image dynamic
  return <section id={"services"} className={classes.services}>

      <div className={classes['services__title']}>
          <div className={classes['services__title__trait']}></div>
          <h2>Services</h2>
          <div className={classes['services__title__trait']}></div>
      </div>
      <div className={classes['services__cards']}>
          {services.map((service)=>(
              <Service onShowServiceModal={props.onShowServiceModal} title={service.title} imgURL={service.imgURL} key={service.id} shortDescription={service.shortDescription} price={service.price} duration={service.duration} people={service.people}/>
          ))}

      </div>


  </section>
}

export default Services;