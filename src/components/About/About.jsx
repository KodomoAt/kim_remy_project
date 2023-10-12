import classes from './About.module.css';
import magnetisme from '../../assets/about/magnetisme.png';
import tarot from '../../assets/about/tarot.png';
import cheval from '../../assets/about/cheval.png';
import {Alert} from "../UI/Alert.jsx";

const About = () => {
    return <section id={"about"} className={classes.about}>

        <div className={classes['about__title']}>
            <div className={classes['about__title__trait']}></div>
            <h2>À propos</h2>
            <div className={classes['about__title__trait']}></div>
        </div>
        <div className={classes['paragraph--left']}>
            <h1>Le Magnétisme, une approche complémentaire et à disposition de tous :
            </h1>
            <img src={magnetisme} alt="Photo d'une séance de magnetisme sur un homme"/>

            <p>
                « Fille de magnétiseur, j'ai dès petite appréhendé le monde invisible
                comme une aide permettant
                d'accompagner les personnes vers le soulagement et la guérison de leurs maux.
            </p>

            <p>
                Je me suis très jeune interrogée sur le monde qui m'entoure, son fonctionnement et notre raison d'être
                sur la Terre. Ces questions m'ont d'abord amenée à me diriger vers des études d'ingénieures, ce qui m'a
                permis de développer ma logique et la compréhension matérielle de notre société.
            </p>
            <p>
                J'ai ensuite souhaité développer avec mon père nos "compétences" en magnétisme afin d'en comprendre le
                fonctionnement et pouvoir accompagner un maximum de personnes vers un mieux-être. Nous avons alors suivi
                la formation de magnétisme et de radiesthésie de Thierry Balbo à Grenoble. Cela m'a appris à suivre un
                protocole énergétique qui rééquilibre l'énergie globale de la personne ou de l'animal grâce à l'Energie
                universelle.
            </p>
            <p>
                Depuis 2018, je propose des soins de magnétisme pour les humains et pour les animaux. Passionnée par le
                monde du vivant (humains, animaux, plantes) j'ai suivi d'autres stages (massages, méthode fascia Emmett,
                passeuse d'âme...) permettant de compléter mes soins en fonction des pathologies que je rencontrais.
            </p>
            <p>
                Et parce que je pense que chaque symptôme est un message de l'âme qui souhaite pleinement s'exprimer, je
                propose à ceux qui le souhaitent d'échanger sur leur problématique afin de trouver ensemble des issues
                possibles à leurs obstacles.
            </p>
            <p>
                Au plaisir de vous rencontrer. »
            </p>
        </div>
        <div className={classes['paragraph--right']}>
            <h1>Le Tarot, une découverte passionnante</h1>
            <img src={tarot} alt="Séance de tirage de tarot"/>
            <p>
                « Passionnée par le Tarot de Marseille, j'ai commencé à me tirer les cartes pour moi-même, puis pour des
                amis, les amis d'amis, puis à des inconnus...
            </p>
            <p>
                J'utilise le tarot non pas à des fins divinatoires mais plutôt en tant qu'outil d'aide à la décision.
                Dans
                les tirages que je propose, il n'y a pas de bons ou de mauvais chemins. Il n'y a que des conseils pour
                réussir au mieux les chemins que vous souhaitez emprunter.

            </p>
            <p>
                J'ai étudié pendant plusieurs années l'Histoire du tarot de Marseille principalement par le biais de
                Tarologues tels que Kris Hadar, Laurence Godde ou encore Sebastien Michel.

            </p>
            <p>
                J'utilise les techniques picturales et symboles originels du Tarot ainsi que ma propre intuition pour
                adapter mes tirages au consultant.

            </p>
            <p>
                Durant mes ateliers, je vous propose d'utiliser le tarot comme un voyage d'introspection menant à des
                prises de conscience sur votre être profond.

            </p>
            <p>
                Au plaisir de vous rencontrer.»

            </p>
        </div>

        <div className={classes['paragraph--left']}>
            <h1>
                Mes chevaux, une histoire d’amour, d’aventure et de remise en question :
            </h1>
            <img src={cheval} alt="Une femme et son cheval"/>
            <p>
                Les animaux que j’ai croisé sur mon chemin m’ont tous apporté leur petite leçon de vie me permettant
                d’évoluer vers le chemin de l’amour inconditionnel et de découverte de moi-même.
            </p>
            <p>
                Après avoir voyager plusieurs mois avec mon conjoint, notre chienne et nos trois chevaux à travers
                l’Europe, j’ai développé une relation de pure complicité avec ces animaux. Je les connais par cœur et
                eux me connaissent mieux que moi-même.
            </p>
            <p>
                Le cheval a la capacité de lire en vous comme aucun humain ne peut le faire. Il se concentre plus
                particulièrement sur vos émotions pour comprendre qui vous êtes. De ce fait, il se positionne en miroir
                face à vous et pour pouvoir créer une relation saine et agréable, vous devez totalement vous abandonner
                à ce que vous êtes dans le plus profond de votre âme.

            </p>

            <p>
                Grâce à eux, j’ai pu enlever des masques qui
                s’étaient installés depuis l’enfance et qui m’empêchaient d’être moi-même. J’aimerai partager avec vous
                cette expérience pour vous accompagner vers ce qui vous empêche d’avancer et de vous exprimer
                pleinement.
            </p>
        </div>


    </section>
};

export default About;