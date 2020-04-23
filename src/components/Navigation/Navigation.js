import React from 'react';

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
          <li>
            <a href="#">{item.content}</a>
          </li>
        ))}
      </NavigationList>
    </Wrapper>
  </NavigationWrapper>
);

export default Navigation;
