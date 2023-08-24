import styled from "@emotion/styled";

const ResultContainer = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`;

const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
    
  return (
    <ResultContainer>
        <Image src={`https://cryptocompare.com${IMAGEURL}`} alt="imagen" />
        <div>
            <Price>Current price: <span>{PRICE}</span></Price>
            <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
            <Text>Lowest price of the day: <span>{LOWDAY}</span></Text>
            <Text>Price change last 24 hrs: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>
    </ResultContainer>
  )
}

export default Result
