import {Contact} from "../components/Contact/Contact.jsx";
import emailjs from "@emailjs/browser";

export const ContactPage = () => {
  return <Contact/>
}


export const action = async ({request, params}) => {
  const data = await request.formData();
  const dataToSend = {
    name: data.get('name'),
    phone: data.get('phone'),
    email: data.get('email'),
    subject: data.get('subject'),
    message: data.get('message'),
  }

  try {

    return await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, dataToSend, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  } catch (error) {
   return error
  }


}


//   const id = params.id;
//   const token = getAuthToken();
//   try {
//
//     const response = await axios('http://localhost:8080/events/' + id,{
//       method:request.method,
//       headers:{
//         'Authorization': 'Bearer ' + token
//       }
//     })
//   } catch (error) {
//     throw json({message: 'Could not fetch detail for selected event.', isError: true}, {status: 500});
//   }
//   return  redirect('/events', );