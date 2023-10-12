import classes from './AboutParagraph.module.css';

export const AboutParagraph = (props) => {
  return <div className={classes.paragraph}>
      {props.children}
  </div>
}