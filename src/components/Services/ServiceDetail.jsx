import classes from './ServiceDetail.module.css';
import {Link, useParams, useRouteLoaderData} from "react-router-dom";
import DOMPurify from "dompurify";
import Badge from "../UI/Badge.jsx";
import price from "../../assets/UI/badge_price.png";
import sablier from "../../assets/UI/badge_sablier.png";
import people from "../../assets/UI/badge_people.png";
import {useEffect} from "react";
export const ServiceDetail = () => {
  const id = useParams().id
  const services = useRouteLoaderData('root');
  const service = services.find(service => service.id === id);
  const sanitizedDescription = DOMPurify.sanitize(service.progress)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes['service__detail']}>
    <h1 className={classes['service__title']}>{service.title}</h1>
    <div>
      <Badge element={service.price} img={price} imgDescription={"Etiquette de prix"}/>
      <Badge element={service.duration} img={sablier} imgDescription={"Sablier"}/>
      <Badge element={service.public} img={people}
             imgDescription={"Personnage pour illustrer le public cible"}/>
    </div>

    <img src={service.imgURL} alt="" className={classes['service__detail__img']}/>
    <p dangerouslySetInnerHTML={{__html: sanitizedDescription}} style={{textAlign:'justify'}}></p>
    <Link to={'..'}>Retour</Link>
  </div>

}