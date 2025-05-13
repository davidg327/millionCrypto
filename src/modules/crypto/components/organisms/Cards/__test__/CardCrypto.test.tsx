/**
 * @format
 */

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {CardCrypto} from '../CardCrypto.tsx';
import {formatCurrency, getColor} from '../../../../../../functions';

const onPress = jest.fn();

describe('CardCrypto', () => {

  const defaultProps = {
    symbol: '',
    priceDollar: '',
    change: '',
    onPress: onPress,
  };

  it('should render the CardCrypto correctly', () => {
    render(<CardCrypto {...defaultProps} />);
    expect(screen.getByTestId('Container-Card-Crypto')).toBeDefined();
  });

  it('should render the On press Card Crypto correctly', () => {
    render(<CardCrypto {...defaultProps} />);
    const press = screen.getByTestId('Container-Card-Crypto');
    expect(press).toBeDefined();
    fireEvent.press(press);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should render text symbol', () => {
    render(<CardCrypto {...defaultProps} symbol={'BTC'} />);
    expect(screen.getByTestId('Text-Symbol')).toHaveTextContent('BTC');
  });

  it('should render function currency', () => {
    const price = '12000';
    render(<CardCrypto {...defaultProps} priceDollar={price} />);
    const formatted = formatCurrency(price);
    expect(screen.getByTestId('Function-Price-Dollar')).toHaveTextContent(formatted);
  });

  it('should render correct background color based on change', () => {
    render(<CardCrypto {...defaultProps} change={'12'} />);
    expect(screen.getByTestId('Text-Change')).toHaveTextContent('12%');
    const container = screen.getByTestId('Container-Change-Status');
    expect(container.props.style.backgroundColor).toBe(getColor('12'));
  });
});

