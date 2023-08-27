<h1 align="center">
  Easy React Editor
</h1>

<p align="center">
  Online Demo: 
  <a href="https://cute-peony-badc87.netlify.app/">
    https://cute-peony-badc87.netlify.app/
  </a>
</p>

EasyReactEditor is a simple and customizable React component for building rich-text editors in your web applications. It provides a straightforward way to integrate a WYSIWYG editor into your project, enabling users to create and edit content with ease.

## Installation

You can install EasyReactEditor via npm:

`npm install easy-react-editor`

Or using Yarn:

`yarn add easy-react-editor`

## Usage

Here's a basic example of how to use EasyReactEditor in your React application:

```jsx
import React, { useState } from 'react';
import EasyReactEditor from 'easy-react-editor';

function App() {
  const [editorContent, setEditorContent] = useState('');

  return (
    <div className='App'>
      <EasyReactEditor text={editorContent} setText={setEditorContent} />
    </div>
  );
}

export default App;
```

### Props

- `text` (required) - Default text for editing, use `useState` first param.
- `setText` (required) - `useState` second param.
- `placeholder` (optional) - Represents the placeholder text for the input field. Default: `'Type text here...'`,
- `tools` (optional) - Allows you to customize the available formatting tools in the editor's toolbar. Default: `['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'UL', 'OL', 'HR']`.

```jsx
<EasyReactEditor
  text={editorContent}
  setText={setEditorContent}
  placeholder='Start typing your content here...'
  tools={['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'UL', 'OL', 'HR']}
/>
```

## Customizing CSS

EasyReactEditor allows you to customize the CSS styles for various parts of the editor to match the look and feel of your application. You can target the following CSS classes and IDs:

- `#ereditor`: The wrapper element for the editor.
- `#ereditor .ere-content`: The editing field where users enter and format text.
- `#ere-toolbar`: The toolbar that contains the formatting options.
- `#ere-toolbar .ere-tool`: Individual tool elements within the toolbar.



## Contributing

Thank you for considering contributing to EasyReactEditor! Your contributions help make this project better for everyone.

### Issues

If you find a bug, have a suggestion, or want to request a new feature, please open an issue on the [GitHub repository](https://github.com/dtlnv/easy-react-editor) to discuss it.

### Pull Requests

We welcome pull requests from the community. If you'd like to contribute code to EasyReactEditor, please follow these steps:

1. Fork the [EasyReactEditor repository](https://github.com/dtlnv/easy-react-editor) on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your changes.

4. Make your changes, add tests if applicable, and ensure the existing tests pass.

5. Commit your changes and push your changes.

6. Open a pull request on the EasyReactEditor repository and describe your changes and improvements. Your pull request will be reviewed, and once approved, it will be merged into the project!

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or feedback, please don't hesitate to contact me: timtemnov@pm.me.
