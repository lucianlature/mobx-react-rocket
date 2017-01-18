import styled from 'styled-components';
import flex from 'styles/flex';
import {Page} from 'styles/styled-components/page-styled-components';

export const Home = styled(Page)`
  ${flex.vertical}
  ${flex.centerVertical}
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-weight: 300;
  font-size: 18px;
`;

export const Rocket = styled.div`
  font-size: 15px;
`;