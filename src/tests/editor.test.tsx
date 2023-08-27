import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EasyReactEditor from '../lib/Editor';

const mockSetText = jest.fn();

describe('EasyReactEditor component', () => {
  beforeEach(() => {
    mockSetText.mockClear();
  });

  it('should render with default text', () => {
    const { getByText } = render(<EasyReactEditor text='Initial Text' setText={mockSetText} />);
    expect(getByText('Initial Text')).toBeInTheDocument();
  });

  it('should update text on input', async () => {
    const { getByText } = render(<EasyReactEditor text='Initial Text' setText={mockSetText} />);

    const editorContent = getByText('Initial Text');

    fireEvent.input(editorContent, {
      target: { innerHTML: 'Updated Text' },
    });

    await waitFor(() => {
      expect(mockSetText).toHaveBeenCalledWith('Updated Text');
    });
  });

  it('should clear formatting on paste', async () => {
    const { container } = render(<EasyReactEditor text='Initial Text' setText={mockSetText} />);

    const editorContent = container.querySelector('.ere-content') as HTMLElement;
    const elements: NodeListOf<Element> = editorContent.querySelectorAll('*');

    fireEvent.paste(editorContent, {
      clipboardData: {
        getData: () => '<div style="color:red">Pasted Text</div>',
      },
    });

    setTimeout(() => {
      expect(editorContent.innerHTML).toBe('Pasted Text');
      elements.forEach((element: Element) => {
        expect(element).not.toHaveAttribute('style');
      });
    });
  });
});
