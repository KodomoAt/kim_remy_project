import classes from './ContactForm.module.css';
import {useForm} from "react-hook-form"
import Button from "../UI/Button.jsx";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,

        formState: {errors, isSubmitSuccessful, isSubmitting},
    } = useForm()
    const onSubmit = async (data, e) => {
        try {

            await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

            reset()
            console.log(isSubmitSuccessful)
        } catch (error) {
            console.log(error)
        }


    }
    return <div className={classes['contact-form']}>
        {isSubmitSuccessful && <span className="loader">Votre message a bien été envoyé</span>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes["form-group"]}>
                <label htmlFor="name">Nom complet</label>
                <input className={classes['form-control']} {...register("name", {
                    maxLength: {
                        value: 60,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir votre nom complet"
                    },
                })} type="text"
                       placeholder="Nom Prénom"/>
                {errors.name && <p className={classes['form-control__alert']}>{errors.name.message}</p>}
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="email">E-mail</label>
                <input className={classes['form-control']} {...register("email", {
                    maxLength: {
                        value: 320,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir votre email"
                    },
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: '⚠️ Veuillez saisir un email valide'

                    }
                })} type="email" placeholder="E-mail - exemple@email.com"/>
                {errors.email && <p className={classes['form-control__alert']}>{errors.email.message}</p>}
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="phone">Téléphone</label>
                <input className={classes['form-control']} {...register("phone", {
                    maxLength: {
                        value: 10,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir votre numéro de téléphone"
                    },
                    // pattern: {
                    //     value: /^(\+33\s[1-9]{8})|(0[1-9]\s{8})$/,
                    //     message: '⚠️ Veuillez saisir un numéro de téléphone valide'
                    //
                    // }
                })} type="tel" placeholder="Téléphone - 0600000000"/>
                {errors.phone && <p className={classes['form-control__alert']}>{errors.phone.message}</p>}
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="object">Objet</label>
                <input className={classes['form-control']} {...register("object", {
                    maxLength: {
                        value: 60,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir un objet"
                    }
                })} type="text" placeholder="Objet de votre demande"/>
                {errors.object && <p className={classes['form-control__alert']}>{errors.object.message}</p>}
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="message">Message</label>
                <textarea rows={5} className={classes['form-control--textarea']} {...register("message", {
                    maxLength: {
                        value: 350,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir un message"
                    }
                })} placeholder={`Votre message (maximum 350 caractères)`}></textarea>
                {errors.message && <p className={classes['form-control__alert']}>{errors.message.message}</p>}
            </div>

            <Button type={'submit'}>Envoyer {isSubmitting && <span className={classes.loader}></span>}</Button>
        </form>
    </div>
};
