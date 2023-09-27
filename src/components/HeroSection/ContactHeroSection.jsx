import classes from './ContactHeroSection.module.css'
import phone from '../../assets/hero/phone.svg'
import email from '../../assets/hero/email.png'
import address from '../../assets/hero/address.png'

const ContactHeroSection = () => {
    return <div className={classes.contact}>
        <div>
            <div>
                <div>
                    <img src={phone} alt="Icône représentant un téléphone"/>
                </div>
                <a href="tel:0600000000">
                    06.00.00.00.00
                </a>
            </div>
            <div>
                <div>
                    <img src={email} alt="Icône représentant le signe @ d'une adresse e-mail"/>
                </div>
                <a href={"mailto: cristal.remy@gmail.com"}>
                    cristal.remy@gmail.com
                </a>
            </div>
        </div>
        <div>
            <div>
                <img src={address} alt="Icône représentant un point GPS"/>
            </div>
            <a href={"geo:45.2135945,1.6485671"}>
                3 rue du magnétisme 19000 Brive
            </a>
        </div>
    </div>
};

export default ContactHeroSection;