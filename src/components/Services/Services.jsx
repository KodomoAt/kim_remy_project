import classes from './Services.module.css'
import Card from "../UI/Card.jsx";
const Services = () => {
  return <div className={classes.services}>
      <div>
          <div className={classes['services__title__trait']}></div>
          <h1>Services</h1>
          <div className={classes['services__title__trait']}></div>
      </div>
      <Card/>

  </div>
}

export default Services;