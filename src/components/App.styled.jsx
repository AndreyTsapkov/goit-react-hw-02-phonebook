import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  height: 100vh;
  background: radial-gradient(
      94.4% 1159.49% at 2% 83.64%,
      #07a8db 0%,
      rgba(7, 168, 219, 0) 100%
    ),
    linear-gradient(0deg, rgba(139, 140, 253, 0.5), rgba(139, 140, 253, 0.5)),
    radial-gradient(
      83.37% 83.37% at 50.13% 97.48%,
      #baeafa 41.67%,
      rgba(228, 244, 249, 0) 100%
    );
`;

export const AppSection = styled.section`
  min-width: 683px;

  &:last-child {
    margin-left: 100px;
  }
`;

export const AppMainTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;

  color: #38005a;

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);

  margin-left: 85px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #38005a;

  -webkit-text-stroke: 0.8px solid rgba(255, 255, 255, 0.3);
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);

  margin-top: 70px;
  margin-bottom: 40px;
`;

export const DesignDiv = styled.div`
  position: relative;
  display: flex;
`;

export const Circle = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  border-radius: 50%;
`;
