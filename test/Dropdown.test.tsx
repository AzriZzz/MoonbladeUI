import React from 'react';
import { render } from '@testing-library/react';

import { Dropdown } from '../src';

describe('Dropdown', () => {
  test('renders the Dropdown colorToken: moonpurple', () => {
    const { container } = render(<Dropdown colorToken="moonpurple" />)
    expect(container.getElementsByClassName('bg-moonpurple').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonred', () => {
    const { container } = render(<Dropdown colorToken="moonred" />)
    expect(container.getElementsByClassName('bg-moonred').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonyellow', () => {
    const { container } = render(<Dropdown colorToken="moonyellow" />)
    expect(container.getElementsByClassName('bg-moonyellow').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moongreen', () => {
    const { container } = render(<Dropdown colorToken="moongreen" />)
    expect(container.getElementsByClassName('bg-moongreen').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonblue', () => {
    const { container } = render(<Dropdown colorToken="moonblue" />)
    expect(container.getElementsByClassName('bg-moonblue').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonindigo', () => {
    const { container } = render(<Dropdown colorToken="moonindigo" />)
    expect(container.getElementsByClassName('bg-moonindigo').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonpurple', () => {
    const { container } = render(<Dropdown colorToken="moonpurple" />)
    expect(container.getElementsByClassName('bg-moonpurple').length).toBe(1);
  });

  test('renders the Dropdown colorToken: moonpink', () => {
    const { container } = render(<Dropdown colorToken="moonpink" />)
    expect(container.getElementsByClassName('bg-moonpink').length).toBe(1);
  });
});
