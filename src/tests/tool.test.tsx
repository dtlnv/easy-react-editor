import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tool from '../lib/Editor/tools/tool';

describe('Test <Tool /> component', () => {
  beforeAll(() => {
    document.execCommand = jest.fn();
  });

  it('sets focus on the editor on mouse down', () => {
    const clickSpy = jest.fn();
    const { getByTitle } = render(<Tool icon='list' title='UL' onClick={clickSpy} />);
    fireEvent.click(getByTitle('UL'));
    expect(clickSpy).toHaveBeenCalled();
  });

  it('<Tool /> renders without errors', () => {
    render(<Tool />);
  });

  it('should make content focus on mouse down', () => {
    const mockElement = {
      focus: jest.fn(),
    };

    document.querySelector = jest.fn(() => mockElement);
    const { getByTitle } = render(<Tool icon='underline' title='Underline' />);
    const toolDiv = getByTitle('Underline');
    fireEvent.mouseDown(toolDiv);
    expect(mockElement.focus).toHaveBeenCalled();
  });

  it('should make content focus on mouse down', () => {
    const mockElement = {
      focus: jest.fn(),
    };

    document.querySelector = jest.fn(() => mockElement);
    const { getByTitle } = render(<Tool icon='underline' title='Underline' />);
    const toolDiv = getByTitle('Underline');
    fireEvent.mouseDown(toolDiv);
    expect(mockElement.focus).toHaveBeenCalled();
  });
});
