import { FormEvent, useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from '@emotion/styled';
import Error from '../components/Error';
import useSelectCurrency from '../hooks/useSelectCurrency';
import { fiatCurrencies } from '../data/currencies';
import { Currencies, Currency } from '../types/types';

const SubmitInput = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin: 30px auto 30px auto;
    transition: background-color .3s ease;
    
    &:hover {
        background-color: #7A7EFD;
        cursor: pointer;
    }
`;

interface FormProps {
    setCurrencies: Dispatch<SetStateAction<Currencies>>;
}

const Form = ({ setCurrencies }: FormProps): JSX.Element => {
    const [crypto, setCrypto] = useState<Currency[]>([]);
    const [error, setError] = useState<boolean>(false);

    const [ currency, SelectCurrency ] = useSelectCurrency('Select a fiat currency', fiatCurrencies);
    const [ cryptoCurrency, SelectCryptoCurrency ] = useSelectCurrency('Select a crypto currency', crypto);

    useEffect(() => {
        
        const requestAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

            const response = await fetch(url);
            const result = await response.json();
            
            const cryptosArray: Currency[] = result.Data.map(({ CoinInfo }: { CoinInfo: { Name: string, FullName: string } }) => {
                const cryptoObject: Currency = {
                    id: CoinInfo.Name,
                    name: CoinInfo.FullName
                };

                return cryptoObject;
            });

            setCrypto(cryptosArray);
            
        }
        requestAPI();
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if([currency, cryptoCurrency].includes('')) {
        setError(true);
        return;
      }

      setError(false);
      setCurrencies({
        currency: currency as string,
        cryptoCurrency: cryptoCurrency as string    
      });
      
    }
    

  return (
    <>
        {error && <Error>All fields are required</Error>}

        <form
            onSubmit={handleSubmit}
        >
        <SelectCurrency />
        <SelectCryptoCurrency />

        <SubmitInput 
            type="submit" 
            value="Convert"
        />
        </form>
    </>
    
  )
}

export default Form
