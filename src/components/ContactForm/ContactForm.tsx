import * as Yup from "yup"
import { useFormik } from "formik";

const ContactForm = () => {

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("The Name field is empty"),
  email: Yup.string().email("Incorrect Email Address").required("The Email Address field is empty"),
  phone: Yup.string(),
  company: Yup.string()
});

const formik = useFormik({
    initialValues:{
        userName: "",
        email: "",
        phone: "",
        company: "",
    },
    validationSchema: validationSchema,
    onSubmit:(values)=> console.log(values),
    
})

    return ( <div>
        <form>
            <input type="text" name="userName" placeholder="Name" />
            <input type="text" name="email" placeholder="Email address" />
            <input type="text" name="phone" placeholder="Phone Number" />
            <input type="text" name="company" placeholder="Company"/>
        </form>
    </div> );
}
 
export default ContactForm;