import classes from './ContactHeroSection.module.css'
import phone from '../../assets/hero/phone.svg'
import email from '../../assets/hero/email.png'
import address from '../../assets/hero/address.png'

const ContactHeroSection = () => {
    const contact = {email: import.meta.env.VITE_EMAIL_CONTACT, phone:  import.meta.env.VITE_PHONE_CONTACT, address: '12 rue des lilas, 75018 Paris'}
    return <div className={classes.contact}>
        <div>
            <div>
                <div>
                    <img src={phone} alt="Icône représentant un téléphone"/>
                </div>
                <a href={`tel:${contact.phone}`}>
                    {contact.phone}
                </a>
            </div>
            <div>
                <div>
                    <img src={email} alt="Icône représentant le signe @ d'une adresse e-mail"/>
                </div>
                <a href={`mailto: ${contact.email}`}>
                    {contact.email}
                </a>
            </div>
        </div>
        <div>
            <div>
                <img src={address} alt="Icône représentant un point GPS"/>
            </div>
            <a href={"geo:45.2135945,1.6485671"}>
                22 impasse des Châtaigniers,<br/> 19560 ST HILAIRE PEYROUX
            </a>
        </div>
    </div>
};

export default ContactHeroSection;