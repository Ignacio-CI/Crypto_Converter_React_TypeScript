import styled from '@emotion/styled'

const Text = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({ children }: { children: string }) => {
  return (
    <Text>
      { children }
    </Text>
  )
}

export default Error
