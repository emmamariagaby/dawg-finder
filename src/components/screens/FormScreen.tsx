import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Form from "../Form";
import Button from "../Button";
import Footer from "../Footer";

 /** 
 * Form kommer fram när containern är färdig. Just nu syns inte form alls om man inte flyttar den ut ur "container"
 *
 */
class FormScreen extends React.Component {
render() {
    return(
        <>

        <Header />
        <Container>
            <Form />
            <Button />
            <Button />
            <Button />
        </Container>
        <Footer />
        </>
    );
}
    

};

export default FormScreen;