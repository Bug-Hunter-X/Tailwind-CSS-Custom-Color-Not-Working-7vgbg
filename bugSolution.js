```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'], // Include index.html and correct path
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db',
      },
    },
  },
  plugins: [],
};
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Issue</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-custom-blue">
  <h1>This is a heading</h1>
</body>
</html>
```