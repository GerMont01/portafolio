import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import './contact.scss';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    text: Yup.string()
      .required("Required")
      .max(500, "Message cannot be longer than 500 characters"),
  });

const Contact = () => {

    return (
        <>
        <Container id="contactContainer">
            <Row id="contactRow1">
            <Col id="contactColumn1">
                <p>Interested in starting a project or just getting in touch?</p>
                <p>Fill up the form or send me an e-mail to: <span>gerardomontme@gmail.com</span></p>
            </Col>
            </Row>
            <Row id="contactRow2">
                <Col id="contactColumn2">
                    <div className="formik">
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                text: ""
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => window.open(`mailto:gerardomontme@gmail.com?body=${values.text}`)}>
                            {({ errors, touched }) => (
                            <Form className="registrationForm">
                                <Field name="name" placeholder="Enter Name" />
                                {errors.name && touched.name ? (
                                    <span>{errors.name}</span>
                                ) : (
                                    <span></span>
                                )}
                                <Field type="email" name="email" placeholder="Enter Email" />
                                {errors.email && touched.email ? (
                                    <span>{errors.email}</span>
                                ) : (
                                    <span></span>
                                )}
                                <Field name="text" placeholder="Enter Message" />
                                {errors.text && touched.text ? (
                                    <span>{errors.text}</span>
                                ) : (
                                    <span></span>
                                )}
                                <button type="submit">Send</button>
                            </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};
      
export default Contact;
      