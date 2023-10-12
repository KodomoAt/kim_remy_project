import classes from './About.module.css';
import magnetisme from '../../assets/about/magnetisme.png';

const About = () => {
    return <section id={"about"} className={classes.about}>

        <div className={classes['about__title']}>
            <div className={classes['about__title__trait']}></div>
            <h2>À propos</h2>
            <div className={classes['about__title__trait']}></div>
        </div>
        <div className={classes.paragraph}>
            <h1>Le Magnétisme, une approche complémentaire et à disposition de tous :
            </h1>
            <img src={magnetisme} alt="Photo d'une séance de magnetisme sur un homme"/>

            <p style={{textAlign:"justify", }}>« Fille de magnétiseur, j'ai dès petite appréhendé le monde invisible comme une aide permettant
                d'accompagner les personnes vers le soulagement et la guérison de leurs maux.
            </p>

            <p>Je me suis très jeune interrogée sur le monde qui m'entoure, son fonctionnement et notre raison d'être
                sur la Terre. Ces questions m'ont d'abord amenée à me diriger vers des études d'ingénieures, ce qui m'a
                permis de développer ma logique et la compréhension matérielle de notre société.
            </p>
            <p>J'ai ensuite souhaité développer avec mon père nos "compétences" en magnétisme afin d'en comprendre le
                fonctionnement et pouvoir accompagner un maximum de personnes vers un mieux-être. Nous avons alors suivi
                la formation de magnétisme et de radiesthésie de Thierry Balbo à Grenoble. Cela m'a appris à suivre un
                protocole énergétique qui rééquilibre l'énergie globale de la personne ou de l'animal grâce à l'Energie
                universelle.
            </p>
            <p>Depuis 2018, je propose des soins de magnétisme pour les humains et pour les animaux. Passionnée par le
                monde du vivant (humains, animaux, plantes) j'ai suivi d'autres stages (massages, méthode fascia Emmett,
                passeuse d'âme...) permettant de compléter mes soins en fonction des pathologies que je rencontrais.
            </p>
            <p>t parce que je pense que chaque symptôme est un message de l'âme qui souhaite pleinement s'exprimer, je
                propose à ceux qui le souhaitent d'échanger sur leur problématique afin de trouver ensemble des issues
                possibles à leurs obstacles.
            </p>
            <p>Au plaisir de vous rencontrer. »
            </p>
        </div>
        <h1></h1>

    </section>
};

export default About;