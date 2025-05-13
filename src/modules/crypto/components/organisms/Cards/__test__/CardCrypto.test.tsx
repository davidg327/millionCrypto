/**
 * @format
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import {CardCrypto} from '../CardCrypto.tsx';

describe('CardCrypto', () => {

  const defaultProps = {
    symbol: '',
    priceDollar: '',
    change: '',
    onPress: jest.fn(),
  };

  it('should render the CardCrypto correctly', () => {
    render(<CardCrypto {...defaultProps} />);
  });

});

