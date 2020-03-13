import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
// import DogImages from "../DogImages";
import Button from "../Button";
import Footer from "../Footer";

 /** 
 * 
 */
class DogScreen extends React.Component {
render() {
    return(
        <>
        <Header />
        <Container>
            {/* <DogImages /> */}
             <Button to="/">Home</Button>
        </Container>
        <Footer />
        </>
    );
}
    

};

export default DogScreen;