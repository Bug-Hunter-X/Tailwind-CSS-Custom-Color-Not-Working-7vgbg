# Tailwind CSS Custom Color Issue

This repository demonstrates a common problem when using custom colors with Tailwind CSS.  The custom color `custom-blue` is defined in the `tailwind.config.js` file, but it's not being applied in the `index.html` file.  The solution involves verifying the `content` array and paths in `tailwind.config.js` to ensure Tailwind is correctly processing your CSS files and html files. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` (if necessary).
3. Open `index.html` in your browser; you will likely see a default background rather than a custom blue background.

## Solution

Refer to `bugSolution.js` and `index.html` for the corrected code.  Make sure your `content` array in `tailwind.config.js` accurately reflects the file structure of your project.