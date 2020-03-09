import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";


class Home extends React.Component {
render() {
    return(
        <>
        <Header />
        <Container>
            <Button />
            <Button />
        </Container>
        <Footer />
        </>
    );
}
    

};

export default Home;