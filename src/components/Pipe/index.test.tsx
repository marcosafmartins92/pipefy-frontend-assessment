import React from 'react';
import { render, screen } from '@testing-library/react';
import Pipe from '.';
import { MockedProvider } from '@apollo/client/testing';

describe('Pipe Element', () => {
  const pipeExample = {name: 'José', id: 1, icon: 'icon', image: 'image'};

  beforeEach(() => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Pipe {...pipeExample} />
      </MockedProvider>
    );
  })
  
  test.each`
    field              |   value
    ${'name'}          |   ${'José'}
    ${'cards-count'}   |   ${'0 cards'}
  `('should parse $value to $expected', ({ field, value }) => {
    const element = screen.getByTestId(field)
    expect(element).toHaveTextContent(value)
  })
  

  test('should set icon value to class name', () => {
    const iconElement = screen.getByTestId('icon');
    expect(iconElement.className).toBe('icon');
  });

});

