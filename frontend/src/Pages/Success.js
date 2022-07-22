import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
`;

const Button = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color: white;
    background-color: burlywood;
    width: 150px;
    margin: 20px 20px;
    border-radius: 10px;
`;

const Message = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

const Success = () => {
    return(
        <Container>
            <Image src="https://i.pinimg.com/originals/a6/d5/71/a6d571ac5f04e849fd9f6eb719f67925.png"/>
            <Button>Successfull</Button>
            <Message>Your order is being prepared. Thanks for choosing us.</Message>
        </Container>
    )
}

export default Success;