import { render, fireEvent } from '@testing-library/react';
import { Bold, Hr, Italic, Ol, Redo, StrikeThrough, Ul, Underline, Undo } from '../lib/Editor/tools';

describe('Test each tools', () => {
  beforeAll(() => {
    document.execCommand = jest.fn();
  });

  it('All tools render without errors', () => {
    render(
      <>
        <Undo />
        <Redo />
        <Bold />
        <Italic />
        <StrikeThrough />
        <Underline />
        <Ul />
        <Ol />
        <Hr />
      </>
    );
  });

  it('Test Undo', () => {
    const { getByTitle } = render(<Undo />);
    fireEvent.click(getByTitle('Undo'));
    expect(document.execCommand).toHaveBeenCalledWith('undo', false, 'true');
  });

  it('Test Redo', () => {
    const { getByTitle } = render(<Redo />);
    fireEvent.click(getByTitle('Redo'));
    expect(document.execCommand).toHaveBeenCalledWith('redo', false, 'true');
  });

  it('Test Bold', () => {
    const { getByTitle } = render(<Bold />);
    fireEvent.click(getByTitle('Bold'));
    expect(document.execCommand).toHaveBeenCalledWith('bold', false, 'true');
  });

  it('Test Italic', () => {
    const { getByTitle } = render(<Italic />);
    fireEvent.click(getByTitle('Italic'));
    expect(document.execCommand).toHaveBeenCalledWith('italic', false, 'true');
  });

  it('Test Underline', () => {
    const { getByTitle } = render(<Underline />);
    fireEvent.click(getByTitle('Underline'));
    expect(document.execCommand).toHaveBeenCalledWith('underline', false, 'true');
  });

  it('Test StrikeThrough', () => {
    const { getByTitle } = render(<StrikeThrough />);
    fireEvent.click(getByTitle('StrikeThrough'));
    expect(document.execCommand).toHaveBeenCalledWith('strikeThrough', false, 'true');
  });

  it('Test UL', () => {
    const { getByTitle } = render(<Ul />);
    fireEvent.click(getByTitle('UL'));
    expect(document.execCommand).toHaveBeenCalledWith('insertUnorderedList', false, 'true');
  });

  it('Test OL', () => {
    const { getByTitle } = render(<Ol />);
    fireEvent.click(getByTitle('OL'));
    expect(document.execCommand).toHaveBeenCalledWith('insertOrderedList', false, 'true');
  });

  it('Test HR', () => {
    const { getByTitle } = render(<Hr />);
    fireEvent.click(getByTitle('HR'));
    expect(document.execCommand).toHaveBeenCalledWith('insertHorizontalRule', false, 'true');
  });
});
