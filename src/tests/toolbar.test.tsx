import React from 'react';
import { render } from '@testing-library/react';
import Toolbar, { defaultTools } from '../lib/Editor/toolbar';

describe('Toolbar component', () => {
  it('should render the Undo tool when it is in the tools prop', () => {
    const { container } = render(<Toolbar tools={['Undo']} />);
    expect(container.querySelector('#ere-toolbar')).toBeInTheDocument();
    expect(container.querySelector('.ere-tool')?.getAttribute('title')).toBe('Undo');
  });

  it('should not render the Redo tool when it is not in the tools prop', () => {
    const { container } = render(<Toolbar tools={['Undo']} />);
    expect(container.querySelector('#ere-toolbar')).toBeInTheDocument();
    expect(container.querySelector('div')).not.toHaveTextContent('Redo');
  });

  it('should render all tools when they are in the tools prop', () => {
    const { container } = render(<Toolbar tools={defaultTools} />);
    expect(container.querySelector('#ere-toolbar')).toBeInTheDocument();
    for (const tool of defaultTools) {
      expect(container.querySelector(`.ere-tool[title=${tool}]`)).toBeInTheDocument();
    }
  });

  it('should render all tools when there is nothing in props', () => {
    const { container } = render(<Toolbar />);
    expect(container.querySelector('#ere-toolbar')).toBeInTheDocument();
    for (const tool of defaultTools) {
      expect(container.querySelector(`.ere-tool[title=${tool}]`)).toBeInTheDocument();
    }
  });
});
