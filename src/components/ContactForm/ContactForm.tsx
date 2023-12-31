import { ChangeEvent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";

import * as SC from "./ContactFormStyled";

import { ReactComponent as ErrorIcon } from "../../assets/images/errorIcon.svg";
import oval_mob from "../../assets/images/contactFormOval.svg"
import oval_tab from "../../assets/images/oval_tab.svg"
import oval_desk from "../../assets/images/form_bg_desk.svg"
import {ReactComponent as ArrowMob} from "../../assets/images/arrow_mob.svg"
import { useMediaQuery } from "usehooks-ts";

const ContactForm: React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")
const isDesktop = useMediaQuery("(min-width:1440px)")

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("The Name field is empty"),
    email: Yup.string()
      .email("Incorrect Email Address")
      .required("The Email Address field is empty"),
    phone: Yup.string(),
    company: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
      company: "",
      package:"Basic"
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    formik.handleChange(evt);
  };


  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (
      formik.errors.userName ||
      formik.errors.email ||
      formik.errors.phone ||
      formik.errors.company
    ) {
      toast.error(`All fields are need to be filled properly!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(`${formik.values.userName} successfully subscribed on the ${formik.values.package} package`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    formik.resetForm();
  };

  return (
    <SC.CommonWrapper
      bg={isDesktop ? oval_desk : isTablet ? oval_tab : oval_mob}
    >
      <ToastContainer />
      <SC.FormStyled onSubmit={handleSubmit}>
        <SC.InputWrapper>
          <SC.InputStyled
            type="text"
            name="userName"
            placeholder="Name"
            value={formik.values.userName}
            isError={formik.errors.userName ? "error" : null}
            onChange={handleChange}
          />
          {formik.errors.userName ? (
            <>
              <ErrorIcon />
              <p>{formik.errors.userName}</p>
            </>
          ) : null}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <SC.InputStyled
            type="text"
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            isError={formik.errors.email ? "error" : null}
            onChange={handleChange}
          />
          {formik.errors.email ? (
            <>
              <ErrorIcon />
              <p>{formik.errors.email}</p>
            </>
          ) : null}
        </SC.InputWrapper>
        <SC.SelectWrapper>
          <SC.SelectStyled
            name="package"
            onChange={formik.handleChange}
            value={formik.values.package}
          >
            <option value="Basic">Basic Pack Free</option>
            <option value="Pro">Pro Pack $9.99</option>
            <option value="Ultimate">Ultimate Pack $19.99</option>
          </SC.SelectStyled>
          <ArrowMob />
        </SC.SelectWrapper>
        <SC.InputWrapper>
          <SC.InputStyled
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            isError={formik.errors.phone ? "error" : null}
            onChange={handleChange}
          />
          {formik.errors.phone ? (
            <>
              <ErrorIcon />
              <p>{formik.errors.phone}</p>
            </>
          ) : null}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <SC.InputStyled
            type="text"
            name="company"
            placeholder="Company"
            value={formik.values.company}
            isError={formik.errors.company ? "error" : null}
            onChange={handleChange}
          />
          {formik.errors.company ? (
            <>
              <ErrorIcon />
              <p>{formik.errors.company}</p>
            </>
          ) : null}
        </SC.InputWrapper>
        <SC.SubmitButton type="submit">Get on the list</SC.SubmitButton>
      </SC.FormStyled>
    </SC.CommonWrapper>
  );
};

export default ContactForm;
