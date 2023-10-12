import classes from './Alert.module.css';

export const Alert = (props) => {
  return <div className={`${classes.alert} ${props.type || ''}`}>
      <span onClick={props.onClick} className={classes.closeBtn} >&times;</span>
      {props.children}
  </div>
}