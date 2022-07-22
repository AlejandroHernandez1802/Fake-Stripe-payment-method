import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PayButton = styled.button`
    width: 200px;
    padding: 20px;
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`;

const Homepage = () => {

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }


    useEffect(() => { 
        const makeRequest = async () => {
            try{
                const res = await axios.post("http://localhost:3001/api/order/payment", {tokenId:stripeToken.id, amount:2000});
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
        }

        stripeToken && makeRequest();

    }, [stripeToken]);

    return(
        <Container>
            <StripeCheckout name='Alejandro Shop' 
            image='https://avatars.githubusercontent.com/u/53655822?v=4' 
            billingAddress
            shippingAddress
            description='Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey = "pk_test_51LO0mvF7jDrJUDKQ0zfmUZOK3ysM0nZ2EIZck0QvWnDtpEFQ32wavKqLBEDHvnMdzDMmpTSjEfAbKTehfPeHtNBx00UJmkYnZk"
            >
                <PayButton>Pay now</PayButton>
            </StripeCheckout>
        </Container>
    )
}

export default Homepage;