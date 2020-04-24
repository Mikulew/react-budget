import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  NavigationWrapper,
  NavigationList,
} from 'components/Navigation/Navigation.css';

const Navigation = ({ items, RightElement }) => (
  <Container>
    <NavigationWrapper>
      <NavigationList>
        {items.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.content}</Link>
          </li>
        ))}
      </NavigationList>
      {RightElement}
    </NavigationWrapper>
  </Container>
);

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};

Navigation.defaultProps = {
  items: [],
};

export default Navigation;
