import { useState } from "react";
import styled from "@emotion/styled"
import { Currency } from '../types/types';

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectCurrency = (label: string, options: Currency[]) => {

    const [state, setState] = useState<string>('');

    const SelectCurrency = (): string | JSX.Element => (
       <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option>- Select -</option>
            {options.map(option => (
                <option
                    key={option.id}
                    value={option.id}
                >
                    {option.name}
                </option>
           ))}
        </Select>
       </> 
    )

  return [ state, SelectCurrency ]
}

export default useSelectCurrency
