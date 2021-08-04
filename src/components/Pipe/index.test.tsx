import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Pipe from '.';

describe('Pipe Element', () => {
  const pipeExample = {name: 'José', id: 1, icon: 'icon', image: 'image'};

  render(<Pipe {...pipeExample} />);
  
  test.each`
    field          |   value
    ${'name'}      |   ${'José'}
    ${'id'}        |   ${1}
    ${'icon'}      |   ${'icon'}
    ${'image'}     |   ${'image'}
  `('should parse $value to $expected', ({ field, value }) => {
    const { getByText } = within(screen.getByTestId(field))
    expect(getByText(value)).toBeInTheDocument()
  })
})
