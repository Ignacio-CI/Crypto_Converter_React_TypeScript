import '../styles/Spinner.css'
import styled from '@emotion/styled';

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>  
    </SpinnerContainer>
  )
}

export default Spinner
