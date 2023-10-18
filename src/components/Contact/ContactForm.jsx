import classes from './ContactForm.module.css';
import {useForm} from "react-hook-form"
import {Alert} from "../UI/Alert.jsx";
import {useEffect, useState} from "react";
import { useSubmit, Form} from "react-router-dom";
import ButtonContact from "../UI/ButtonContact.jsx";



export const ContactForm = () => {
    const [showAlert, setShowAlert] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,

        formState: {errors, isSubmitSuccessful, isSubmitting},
    } = useForm()
    useEffect(() => {
        if (isSubmitSuccessful) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 10000);
        }


    }, [isSubmitSuccessful]);

    const submit = useSubmit()



    const submitHandler = async (data,e) => {

        await submit(e.target, {method:'POST', action: '/contact'})
        reset();

    }

    return <div className={classes['contact-form']}>
        {isSubmitSuccessful && showAlert && <Alert onClick={() => setShowAlert(false)}>Message bien envoyé ! </Alert>}

        <Form onSubmit={handleSubmit(submitHandler)} >
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
                        value: 12,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir votre numéro de téléphone"
                    },
                    // pattern: {
                    //     value: /^((\+|00)33|0)1-9{4}$/,
                    //     message: '⚠️ Veuillez saisir un numéro de téléphone valide'
                    //
                    // }
                })} type="tel" placeholder="Téléphone - 0600000000"/>
                {errors.phone && <p className={classes['form-control__alert']}>{errors.phone.message}</p>}
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="subject">Objet</label>
                <input className={classes['form-control']} {...register("subject", {
                    maxLength: {
                        value: 60,
                        message: "⚠️ Trop de caractères"
                    },
                    required: {
                        value: true,
                        message: "⚠️ Veuillez saisir un objet"
                    }
                })} type="text" placeholder="Objet de votre demande"/>
                {errors.subject && <p className={classes['form-control__alert']}>{errors.subject.message}</p>}
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
            <ButtonContact >Envoyer {isSubmitting && <span className={classes.loader}></span>}</ButtonContact>
        </Form>
    </div>
};
