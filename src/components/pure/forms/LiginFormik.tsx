import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Styled from "styled-components";

const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida")
})

export default function LiginFormik() {
    const initialCredentials = 
        {
            email: "",
            password: ""
        }


    return (
        <FormikForm>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                    //we save the credentials in local storage
                    localStorage.setItem("credentials", JSON.stringify(values))
                }}

            >
                {/* we obtais props from formik */}
                {props => {
                    const {
                        // values,
                        touched,
                        errors,
                        // handleChange,
                        // handleBlur,
                        // handleSubmit
                    } = props;
                    return (
                    < Form className = "form" >
                        <label htmlFor="email">Usuario</label>
                        <Field id="email" name="email" placeholder="Email@example.com" type="email" />
                        {errors.email && touched.email && <div><p>{errors.email}</p></div>}
                        <label htmlFor="password">Contraseña</label>
                        <Field id="password" name="password" placeholder="Contraseña" type="password"/>
                        {errors.password && touched.password && <div><p>{errors.password}</p></div>}
                        <button type="submit">Enviar</button>
                    </Form>)       
                }}

        </Formik>
        </FormikForm >
    )
}

const FormikForm = Styled.div`
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        border: 1px solid black;
        padding: 20px;
        border-radius: 10px;
        gap: 10px;
    }
    label{
        font-size: 1.5rem;
    }
`