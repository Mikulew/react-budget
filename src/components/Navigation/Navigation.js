import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from 'components';
import {
  NavigationWrapper,
  NavigationList,
} from 'components/Navigation/Navigation.css';

const Navigation = ({ items }) => (
  <NavigationWrapper>
    <Wrapper>
      <NavigationList>
        {items.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.content}</Link>
          </li>
        ))}
      </NavigationList>
    </Wrapper>
  </NavigationWrapper>
);

export default Navigation;
