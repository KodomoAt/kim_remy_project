import classes from './ContactHeroSection.module.css'
import phone from '../../assets/hero/phone.svg'
import email from '../../assets/hero/email.png'
import address from '../../assets/hero/address.png'

const ContactHeroSection = () => {
    return <div className={classes.contact}>
        <div>
            <div>
                <div>
                    <img src={phone} alt=""/>
                </div>
                <div>
                    06.00.00.00.00
                </div>
            </div>
            <div>
                <div>
                    <img src={email} alt=""/>
                </div>
                <div>
                    cristal.remy@gmail.com
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src={address} alt=""/>
            </div>
            <div>
                3 rue du magnétisme 19000 Brive
            </div>
        </div>
    </div>
};

export default ContactHeroSection;