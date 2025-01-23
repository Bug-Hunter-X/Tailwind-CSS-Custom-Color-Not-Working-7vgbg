```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Or adjust to your file paths
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // Example custom color
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