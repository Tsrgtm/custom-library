# Custom Popup Library

A customizable library with extensive CSS and JavaScript utilities for building dynamic and responsive web interfaces. This library includes components for popups, buttons, forms, grids, flex layouts, typography, and more.

## Features

- **Dynamic Popups:** Customizable with timeouts and self-triggers.
- **Flexible Grid and Flex Layouts:** Responsive designs with dynamic gaps and alignments.
- **Comprehensive Form Styling and Validation:** Predefined styles and validation feedback.
- **Buttons and Hover Effects:** Various button styles and interactive hover effects.
- **Utility Classes:** Extensive set of utility classes for margins, paddings, positioning, borders, and more.
- **Custom Scrollbars:** Easily customize scrollbar color and size.
- **Typography and Text Utilities:** Responsive typography and text alignment classes.
- **Accordions and Cards:** Pre-styled components for interactive content display.
- **Dynamic Styling:** JavaScript-driven dynamic styles for enhanced flexibility.

## Installation

### Using GitHub Pages (CDN)

1. **Include CSS File:**
    ```html
    <link rel="stylesheet" href="https://your-username.github.io/custom-popup-library/css/popup.css">
    ```

2. **Include JavaScript File:**
    ```html
    <script src="https://your-username.github.io/custom-popup-library/js/popup.js"></script>
    ```

## Usage

### HTML Structure
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Custom Popup Library Example</title>
        <!-- Include the CSS file from CDN -->
        <link rel="stylesheet" href="https://tsrgtm.github.io/custom-library/js/tsrgtm-custom.css">
    </head>
    <body>
        <!-- Example button to trigger popup -->
        <button class="button button-primary" data-popup-target="#popup1">Open Popup 1</button>

        <!-- Popup structure -->
        <div id="popup1" class="popup-overlay" data-popup-timeout="3000">
            <div class="popup" data-bg="#fff" data-border-radius="8px" data-padding="20px" data-width="400px">
                <div class="popup-close-icon"></div>
                <div class="popup-header">Popup Title 1</div>
                <div class="popup-content">This is the content of Popup 1.</div>
            </div>
        </div>

        <!-- Example button styles -->
        <button class="button button-secondary">Secondary Button</button>
        <button class="button button-success">Success Button</button>
        <button class="button button-danger">Danger Button</button>

        <!-- Example grid layout -->
        <div class="grid-container grid-3-columns">
            <div class="card" data-card-bg="#f8f9fa" data-card-border="#ccc" data-card-shadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <div class="card-header">Card 1</div>
                <div class="card-body">Content of Card 1</div>
                <div class="card-footer">Footer of Card 1</div>
            </div>
            <div class="card" data-card-bg="#f8f9fa" data-card-border="#ccc" data-card-shadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <div class="card-header">Card 2</div>
                <div class="card-body">Content of Card 2</div>
                <div class="card-footer">Footer of Card 2</div>
            </div>
            <div class="card" data-card-bg="#f8f9fa" data-card-border="#ccc" data-card-shadow="0 4px 8px rgba(0, 0, 0, 0.1)">
                <div class="card-header">Card 3</div>
                <div class="card-body">Content of Card 3</div>
                <div class="card-footer">Footer of Card 3</div>
            </div>
        </div>

        <!-- Include the JavaScript file from CDN -->
        <script src="https://tsrgtm.github.io/custom-library/js/tsrgtm-custom.js"></script>
    </body>
    </html>
```


#### Buttons

```html
<button class="button button-primary">Primary Button</button>
<button class="button button-outline button-outline-primary">Outline Button</button>
