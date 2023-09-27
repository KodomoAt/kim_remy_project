import classes from './PhotoHeroSection.module.css'
import mountain from '../../assets/hero/nature-mountain.svg'

const PhotoHeroSection = () => {
  return <div className={classes['hero_section__photo']}>
      <img src={mountain} alt="Dessin vectoriel représentant une forêt d'automne"/>
  </div>
};

export default PhotoHeroSection;