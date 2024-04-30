import React from 'react';
import { render } from '@testing-library/react';
import { CartContext, CartProvider } from '../../providers/CartContext';
import {  ProductContext, ProductProvider } from '../../providers/ProductContext';

describe('Context Creation', () => {
  test('Cart Context is created correctly', () => {
    const wrapper = ({ children }: any) => (
      <CartProvider>{children}</CartProvider>
    );
    const { getByText } = render(
      <CartContext.Consumer>
        {(value: any) => <div>{value ? 'Cart Context Created' : 'Cart Context Not Created'}</div>}
      </CartContext.Consumer>,
      { wrapper }
    );
    expect(getByText('Cart Context Created')).toBeInTheDocument();
  });

  test('Product Context is created correctly', () => {
    const wrapper = ({ children }: any) => (
      <ProductProvider>{children}</ProductProvider>
    );
    const { getByText } = render(
      <ProductContext.Consumer>
        {(value: any) => <div>{value ? 'Product Context Created' : 'Product Context Not Created'}</div>}
      </ProductContext.Consumer>,
      { wrapper }
    );
    expect(getByText('Product Context Created')).toBeInTheDocument();
  });

});
