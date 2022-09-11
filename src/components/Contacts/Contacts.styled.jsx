import styled from '@emotion/styled';

export const Contact = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 18px;
  margin-left: 35px;

  &:last-child {
    margin-bottom: 18px;
  }
`;

export const ContactsList = styled.ul`
  background: radial-gradient(
    95.11% 95.11% at 50% 95.11%,
    #96e6ff 0%,
    rgba(186, 234, 250, 0.4) 100%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 21px;

  max-width: 527px;
`;

export const ButtonDelete = styled.button`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  width: 141px;
  padding-top: 9px;
  padding-bottom: 14px;
  margin-left: auto;
  margin-right: 19px;

  -webkit-text-stroke: 0.6px solid rgba(255, 255, 255, 0.3);

  border-radius: 49px;

  color: #ffffff;
  background-color: #9567ff;

  border: none;

  &:hover,
  :focus {
    background-color: #7d47fc;
  }
`;
