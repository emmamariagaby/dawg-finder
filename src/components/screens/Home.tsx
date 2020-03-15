import * as React from 'react';

import Header from "../Header";
import Container from "../Container";
import Button from "../Button";
import Footer from "../Footer";


class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <p>Looking for a dog friend?</p>
                    <p>Take the test to find out which breed suits you best!</p>
                    <div className="rowButtons">
                        <Button to='/form'>Take me to the test!</Button>
                        <Button to='/dogscreen'>Read about doggies</Button>
                    </div>
                </Container>
                <Footer />
            </>
        );
    }


};

export default Home;