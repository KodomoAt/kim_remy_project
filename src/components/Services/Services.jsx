import  {useState} from 'react';
import classes from './Services.module.css'
import ServiceCard from "./ServiceCard.jsx";
import ServiceModal from "./ServiceModal.jsx";

const Services = (services) => {
    // const [services, setServices] = useState([]);
    const [serviceSelected, setServiceSelected] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [serviceModalIsShown, setServiceModalIsShown] = useState(false);
    console.log(services)

    const showServiceModalHandler = (id) => {
        document.body.classList.add('modal-open');
        const service = services.find(service => service.id === id);
        setServiceModalIsShown(true);
        setServiceSelected(service)

    }
    const hideServiceModalHandler = () => {
        document.body.classList.remove('modal-open');
        setServiceModalIsShown(false)


    }

    // const fetchServicesHandler = useCallback(async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         console.log(import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_URL)
    //         const response = await axios.get(import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_URL);
    //
    //
    //         const data = await response.data;
    //         const loadedMovies = [];
    //
    //         for (const key in data) {
    //             loadedMovies.push({
    //                 id: key,
    //                 title: data[key].title,
    //                 shortDescription: data[key].shortDescription,
    //                 price: data[key].price,
    //                 duration: data[key].duration,
    //                 people: data[key].public,
    //                 imgURL: data[key].imgURL,
    //                 progress: data[key].progress
    //             })
    //         }
    //
    //         setServices(loadedMovies);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     setIsLoading(false);
    //
    // }, []);
    // useEffect(() => {
    //     fetchServicesHandler()
    //
    // }, [fetchServicesHandler]);
    // //TODO: Render image dynamic
    return <section id={"services"} className={classes.services}>
        {serviceModalIsShown && <ServiceModal onClick={hideServiceModalHandler} service={serviceSelected}/>}

        <div className={classes['services__title']}>
            <div className={classes['services__title__trait']}></div>
            <h2>Services</h2>
            <div className={classes['services__title__trait']}></div>
        </div>
        <div className={classes['services__cards']}>
            {services.services.map((service) => (
                <ServiceCard onShowServiceModal={showServiceModalHandler} title={service.title}
                             imgURL={service.imgURL}
                             key={service.id}
                             shortDescription={service.shortDescription}
                             price={service.price}
                             duration={service.duration}
                             people={service.public}
                             id={service.id}/>
            ))}

        </div>


    </section>
}

export default Services;