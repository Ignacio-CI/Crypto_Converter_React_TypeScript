import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import CryptoImage from './img/imagen-criptos.png';
import Form from './components/Form';
import { Currencies } from './types/types'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 36px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App(): JSX.Element {
  const [currencies, setCurrencies] = useState<Currencies>({currency: '', cryptoCurrency: ''});
  const [result, setResult] = useState<object>({})

  useEffect(() => {
    const { currency, cryptoCurrency } = currencies;

    if(![currency, cryptoCurrency].includes('')) {
      const qouteCurrency = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=${cryptoCurrency}`;
        const response = await fetch(url);
        const data = await response.json();

        const currencyPairResult: object = (data.DISPLAY[currency][cryptoCurrency]);
        
        setResult(currencyPairResult);
      }
      
      qouteCurrency()
    }
    
  }, [currencies]);

  return (
    <>
      <Container>
        <Image
          src={CryptoImage}
          alt='Crypto Currencies Image'
        />
        <div>
          <Heading>Crypto Currency Converter</Heading>
          <Form 
            setCurrencies={setCurrencies}
          />
        </div>
      </Container>
    </>
  )
}

export default App
