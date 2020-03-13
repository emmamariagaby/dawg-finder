import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Form from "../Form";
import Button from "../Button";
import Footer from "../Footer";

 /** 
 * 
 *
 */
class FormScreen extends React.Component {
render() {
    return(
        <>

        <Header />
        <Container>
            <Form />
            <Button to="/">Home</Button>
        </Container>
        <Footer />
        </>
    );
}
    

};

export default FormScreen;