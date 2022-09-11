import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 529px;

  background: radial-gradient(
    95.11% 95.11% at 50% 95.11%,
    #96e6ff 0%,
    rgba(186, 234, 250, 0.4) 100%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 21px;

  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 85px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #38005a;

  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 24px;
  max-width: 366px;
  height: 39px;

  padding: 0 15px;
`;

export const ButtonSubmit = styled.button`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  max-width: 176px;
  padding-top: 9px;
  padding-bottom: 14px;
  -webkit-text-stroke: 0.6px solid rgba(255, 255, 255, 0.3);

  border-radius: 25px;

  color: #ffffff;
  background-color: #9567ff;

  border: none;

  &:hover,
  :focus {
    background-color: #7d47fc;
  }
`;

export const InputTitle = styled.span`
  margin-bottom: 14px;
`;
