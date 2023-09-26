import classes from './Badge.module.css'

const Badge = (props) => {
    return <div className={classes.badge}>
        <img src={props.img} alt={props.imgDescription}/>
        <span>{props.element}</span>
    </div>
}
export default Badge;