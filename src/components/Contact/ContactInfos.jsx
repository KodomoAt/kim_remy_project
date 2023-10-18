import classes from './ContactInfos.module.css'
import {GiPositionMarker} from 'react-icons/gi'
import {AiFillPhone} from 'react-icons/ai'
import {MdAlternateEmail} from 'react-icons/md'

export const ContactInfos = () => {
    const contact = {email: import.meta.env.VITE_EMAIL_CONTACT, phone:  import.meta.env.VITE_PHONE_CONTACT}
    return <>
        <div className={classes['contact-infos']}>
            <div className={classes['contact-infos__title']}>

                <h3>N'hésitez pas à me contacter pour prendre rendez-vous !</h3>
            </div>
            <div className={classes['contact-infos__content']}>

                <div className={classes['contact-infos__content__address']}>

                    <p><GiPositionMarker size={"1.5rem"} style={{color: "#395A5F", verticalAlign: 'middle'}}/> 22
                        impasse
                        des Châtaigniers, 19560 ST HILAIRE PEYROUX</p>
                </div>
                <div className={classes['contact-infos__content__phone']}>
                    <span></span>
                    <p><AiFillPhone size={"1.5rem"} style={{color: "#395A5F", verticalAlign: 'middle'}}/> <a
                        href={`tel:${contact.phone}`}>
                        {contact.phone}
                    </a>
                    </p>
                </div>
                <
                    div className={classes['contact-infos__content__email']}>
                    <span></span>
                    <p><MdAlternateEmail size={"1.5rem"} style={{color: "#395A5F", verticalAlign: 'middle'}}/> <a
                        href={`mailto: ${contact.email}`}>
                        {contact.email}
                    </a>
                    </p>
                </div>
            </div>
        </div>
    </>
}