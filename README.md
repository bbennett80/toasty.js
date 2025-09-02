# Toasty  
A lightweight, dependency-free JavaScript toast/notification library for showing temporary alerts in the browser.  

## Features  
- ✅ **Simple API** – Just one function to show a toast  
- 🎯 **Customizable** – Choose message, type, duration, and position  
- 📱 **Responsive** – Works across screen sizes  
- ♻ **Automatic cleanup** – Fades out after a set time or on click  
- 🔢 **Toast limit** – Default of 5 toasts at once. Can be configured to meet your needs

---

## Installation  

Just copy the `Toasty` function into your JavaScript project or include it in a script file:  

```html
<script src="toasty.js"></script>
```

---

## Usage  

```javascript
// Basic usage
Toasty({ message: "Success!" });

// With options
Toasty({
    message: "Something went wrong",
    type: "error", // success, error, warning, info
    duration: 4000, // milliseconds
    position: "bottom-left" // top-right, top-left, bottom-right, bottom-left, top, bottom
});
```

---

## Options  

| Option     | Type     | Default      | Description |
|------------|----------|--------------|-------------|
| `message`  | String   | `"Copied"`   | Text to display in the toast |
| `type`     | String   | `"success"`  | One of: `success`, `error`, `warning`, `info` |
| `duration` | Number   | `3000`       | How long the toast stays visible (in ms) |
| `position` | String   | `"top-right"`| Where to place the toast: `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top`, `bottom` |

---

## Example  

```javascript
// Success toast
Toasty({ message: "Profile saved!", type: "success" });

// Error toast
Toasty({ message: "Failed to load data", type: "error" });

// Warning toast
Toasty({ message: "Low battery", type: "warning", position: "bottom-left" });

// Info toast
Toasty({ message: "New update available", type: "info", duration: 5000 });
```

---

## Custom Styles  

By default, `Toasty` applies styles for quick usage. However, you can override them by configuring the `Basic Styles` portion of the library.  

**Default toast styles** (you can override any of these, add or remove as needed):  
```js
// Basic styles
Object.assign(toast.style, {
    backgroundColor: '#003764',
    color: '#fff',
    padding: '1rem 1.5rem',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    opacity: '0',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    transform: 'translateY(-20px)',
    pointerEvents: 'auto',
    maxWidth: '80%',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    lineHeight: '1.4',
    background: {
        success: '#1d4ed8',
        error: '#f44336',
        warning: '#ff9800',
        info: '#4caf50'
    }[type] || '#333'
});
```

If you want **full control**, remove the inline background setting in the JS and rely entirely on CSS classes instead.

---

## License  
MIT License – Free to use and modify.  

## Components (WIP)
A side, to a side, of a side project with DaisyUI and Jinja2 component library.
