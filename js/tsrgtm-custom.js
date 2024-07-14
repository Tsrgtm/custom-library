// this js provides dynamic gap between elements

document.addEventListener("DOMContentLoaded", function() {
    const flexItems = document.querySelectorAll('.flex');
    flexItems.forEach(item => {
        item.className.split(/\s+/).forEach(cls => {
            if (cls.startsWith('gap-')) {
                const gapSize = cls.split('-')[1];
                item.style.gap = `${gapSize}px`;
            }
        });
    });
});


// Script to Adjust Font Size:

document.addEventListener("DOMContentLoaded", function() {
    const elementsWithFontSize = document.querySelectorAll('[class*="font-size-"]');
    elementsWithFontSize.forEach(element => {
        const classes = element.className.split(/\s+/);
        classes.forEach(cls => {
            if (cls.startsWith('font-size-')) {
                const fontSize = cls.split('-')[2];
                element.style.fontSize = `${fontSize}px`;
            }
        });
    });
});



// Script to Adjust Font Weight:

document.addEventListener("DOMContentLoaded", function() {
    const elementsWithFontWeight = document.querySelectorAll('[class*="font-weight-"]');
    elementsWithFontWeight.forEach(element => {
        const classes = element.className.split(/\s+/);
        classes.forEach(cls => {
            if (cls.startsWith('font-weight-')) {
                const fontWeight = cls.split('-')[2];
                element.style.fontWeight = fontWeight;
            }
        });
    });
});



// JavaScript Code for Dynamic Color

document.addEventListener("DOMContentLoaded", function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.classList.forEach(cls => {
            if (cls.startsWith('text-color-')) {
                const color = '#' + cls.split('-')[2];
                element.style.color = color;
            }
            if (cls.startsWith('bg-color-')) {
                const color = '#' + cls.split('-')[2];
                element.style.backgroundColor = color;
            }
        });
    });
});



// Handle dynamic postioning as top, right, bottom, left and also dynamic margin and padding and also z-index

document.addEventListener("DOMContentLoaded", function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.classList.forEach(cls => {
            // Handle overall margin, padding, and z-index
            if (cls.match(/^(m|p)-\d+$/)) {
                const [prefix, value] = cls.split('-');
                const propertyType = prefix === 'm' ? 'margin' : 'padding';
                element.style[propertyType] = `${value}px`;
            }

            // Handle specific sides for margin and padding
            if (cls.match(/^(m|p)(t|r|b|l)-\d+$/)) {
                const [prefix, direction, value] = cls.split('-');
                const cssProperty = {
                    'mt': 'margin-top',
                    'mr': 'margin-right',
                    'mb': 'margin-bottom',
                    'ml': 'margin-left',
                    'pt': 'padding-top',
                    'pr': 'padding-right',
                    'pb': 'padding-bottom',
                    'pl': 'padding-left'
                }[prefix + direction];
                element.style[cssProperty] = `${value}px`;
            }

            // Handle positioning (top, right, bottom, left)
            if (cls.match(/^(t|r|b|l)-\d+$/)) {
                const [direction, value] = cls.split('-');
                const cssProperty = {
                    't': 'top',
                    'r': 'right',
                    'b': 'bottom',
                    'l': 'left'
                }[direction];
                element.style[cssProperty] = `${value}px`;
            }

            // Handle dynamic z-index
            if (cls.match(/^z-\d+$/)) {
                const [, zValue] = cls.split('-');
                element.style.zIndex = zValue;
            }
        });
    });
});



// javascript to handle dynamic border size, color, type and radius

document.addEventListener("DOMContentLoaded", function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.classList.forEach(cls => {
            // Handle overall border size
            if (cls.match(/^br-size-\d+$/)) {
                const [, , size] = cls.split('-');
                element.style.borderWidth = `${size}px`;
            }

            // Handle border color
            if (cls.match(/^br-color-#[0-9a-f]{6}$/i)) {
                const [, , color] = cls.split('-');
                element.style.borderColor = `${color}`;
            }

            // Handle specific side border sizes like br-t-1, br-r-2, etc.
            if (cls.match(/^br-(t|r|b|l)-\d+$/)) {
                const [_, side, size] = cls.split('-');
                const sideFull = {
                    't': 'Top',
                    'r': 'Right',
                    'b': 'Bottom',
                    'l': 'Left'
                }[side];
                element.style[`border${sideFull}Width`] = `${size}px`;
                element.style[`border${sideFull}Style`] = 'solid'; // Ensure border style is set to visible
            }

            // Handle border radius
            if (cls.match(/^br-radius-\d+$/)) {
                const [, , radius] = cls.split('-');
                element.style.borderRadius = `${radius}px`;
            }

            // Handle border type
            if (cls.match(/^br-type-(solid|dashed|dotted)$/)) {
                const [, , type] = cls.split('-');
                element.style.borderStyle = type;
            }
        });
    });
});


// JavaScript Code for Dynamic Dimension Properties height and width 

document.addEventListener("DOMContentLoaded", function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.classList.forEach(cls => {
            // Handle width, height, max-width, max-height, min-width, min-height
            if (cls.match(/^(width|height|max-width|max-height|min-width|min-height)-\d+(px|%|vw|vh)$/)) {
                const [prop, value] = cls.split('-');
                element.style[prop] = value;
            }
            // Handle dynamic min-vw and min-vh, max-vw and max-vh specifically
            if (cls.match(/^(max|min)-(width|height)-\d+-v(w|h)$/)) {
                const [minmaxProp, value, unit] = cls.split('-');
                const property = minmaxProp.replace('max', 'max-').replace('min', 'min-'); // Construct correct CSS property name
                element.style[property] = `${value}${unit}`;
            }
        });
    });
});



// custom scroll-bar color and size 

document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll('.scroll-custom');

    scrollElements.forEach(element => {
        const thumbColor = element.getAttribute('data-thumb-color');
        const trackColor = element.getAttribute('data-track-color');
        const scrollbarSize = element.getAttribute('data-scrollbar-size');

        if (thumbColor) {
            element.style.setProperty('--scrollbar-thumb-color', thumbColor);
        }
        if (trackColor) {
            element.style.setProperty('--scrollbar-track-color', trackColor);
        }
        if (scrollbarSize) {
            element.style.setProperty('--scrollbar-size', scrollbarSize);
        }
    });
});



// javascript to handle dynamic opacity of elements 

document.addEventListener("DOMContentLoaded", function() {
    const opacityElements = document.querySelectorAll('[class*="opacity-"]'); // Select elements with an opacity class

    opacityElements.forEach(element => {
        // Extract all classes
        element.classList.forEach(cls => {
            if (cls.startsWith('opacity-')) {
                const opacityValue = parseInt(cls.split('-')[1], 10);
                if (!isNaN(opacityValue) && opacityValue >= 1 && opacityValue <= 100) {
                    const computedOpacity = opacityValue / 100; // Convert to a scale of 0-1
                    element.style.opacity = computedOpacity;
                }
            }
        });
    });
});





// add dynamic hover effect to the element 

document.addEventListener("DOMContentLoaded", function() {
    const hoverElements = document.querySelectorAll('[data-hover-effect]');

    hoverElements.forEach(element => {
        const originalStyles = {
            color: element.style.color,
            backgroundColor: element.style.backgroundColor,
            boxShadow: element.style.boxShadow,
            transform: element.style.transform
        };

        element.addEventListener('mouseenter', function() {
            this.style.color = element.dataset.hoverColor || originalStyles.color;
            this.style.backgroundColor = element.dataset.hoverBgColor || originalStyles.backgroundColor;
            if (element.dataset.hoverGlow) {
                this.style.boxShadow = `0 0 8px ${element.dataset.hoverGlow}`;
            }
            if (element.dataset.hoverScale) {
                this.style.transform = `scale(${element.dataset.hoverScale})`;
            }
        });

        element.addEventListener('mouseleave', function() {
            this.style.color = originalStyles.color;
            this.style.backgroundColor = originalStyles.backgroundColor;
            this.style.boxShadow = originalStyles.boxShadow;
            this.style.transform = originalStyles.transform;
        });
    });
});




// add dynamic opacity on hover 

document.addEventListener("DOMContentLoaded", function() {
    const hoverOpacityElements = document.querySelectorAll('[data-hover-opacity]');

    hoverOpacityElements.forEach(element => {
        const originalOpacity = window.getComputedStyle(element).opacity; // Store original opacity

        element.addEventListener('mouseenter', function() {
            this.style.opacity = this.getAttribute('data-hover-opacity');
        });

        element.addEventListener('mouseleave', function() {
            this.style.opacity = originalOpacity; // Revert to original opacity
        });
    });
});



// dynamically truncateTextByWords with word value 

document.addEventListener("DOMContentLoaded", function() {
    // Function to truncate text to a specified number of words
    function truncateTextByWords(element, maxWords) {
        const originalText = element.innerText || element.textContent; // Get the original text
        const words = originalText.split(/\s+/); // Split by whitespace to get words

        if (words.length > maxWords) {
            element.innerText = words.slice(0, maxWords).join(" ") + "..."; // Join first maxWords words and add ellipsis
        }
    }

    // Apply the function to all elements with the 'data-truncate-words' attribute
    const elementsToTruncate = document.querySelectorAll('[data-truncate-words]');
    elementsToTruncate.forEach(element => {
        const maxWords = parseInt(element.getAttribute('data-truncate-words'), 10);
        if (!isNaN(maxWords)) {
            truncateTextByWords(element, maxWords);
        }
    });
});




// dynamic js for grip templates 

document.addEventListener("DOMContentLoaded", function() {
    const gridElements = document.querySelectorAll('[data-grid]');

    gridElements.forEach(element => {
        const cols = element.getAttribute('data-grid-cols');
        const rows = element.getAttribute('data-grid-rows');
        const gap = element.getAttribute('data-grid-gap');
        const align = element.getAttribute('data-grid-align');

        if (cols) {
            element.style.gridTemplateColumns = cols.includes('fr') || cols.includes('px') || cols.includes('%') ? cols : `repeat(${cols}, 1fr)`;
        }
        if (rows) {
            element.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        }
        if (gap) {
            element.style.gap = `${gap}px`;
        }
        if (align === 'center') {
            element.style.justifyContent = 'center';
            element.style.alignItems = 'center';
        }

        // Responsive attributes
        const smCols = element.getAttribute('data-grid-cols-sm');
        const mdCols = element.getAttribute('data-grid-cols-md');
        const lgCols = element.getAttribute('data-grid-cols-lg');
        const xlCols = element.getAttribute('data-grid-cols-xl');

        const smRows = element.getAttribute('data-grid-rows-sm');
        const mdRows = element.getAttribute('data-grid-rows-md');
        const lgRows = element.getAttribute('data-grid-rows-lg');
        const xlRows = element.getAttribute('data-grid-rows-xl');

        function applyResponsiveGrid() {
            const width = window.innerWidth;

            if (width >= 1200 && xlCols) {
                element.style.gridTemplateColumns = `repeat(${xlCols}, 1fr)`;
            } else if (width >= 992 && lgCols) {
                element.style.gridTemplateColumns = `repeat(${lgCols}, 1fr)`;
            } else if (width >= 768 && mdCols) {
                element.style.gridTemplateColumns = `repeat(${mdCols}, 1fr)`;
            } else if (width >= 576 && smCols) {
                element.style.gridTemplateColumns = `repeat(${smCols}, 1fr)`;
            }

            if (width >= 1200 && xlRows) {
                element.style.gridTemplateRows = `repeat(${xlRows}, 1fr)`;
            } else if (width >= 992 && lgRows) {
                element.style.gridTemplateRows = `repeat(${lgRows}, 1fr)`;
            } else if (width >= 768 && mdRows) {
                element.style.gridTemplateRows = `repeat(${mdRows}, 1fr)`;
            } else if (width >= 576 && smRows) {
                element.style.gridTemplateRows = `repeat(${smRows}, 1fr)`;
            }
        }

        applyResponsiveGrid();
        window.addEventListener('resize', applyResponsiveGrid);
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const floatElements = document.querySelectorAll('[data-float]');

    floatElements.forEach(element => {
        const floatVal = element.getAttribute('data-float');
        const smFloat = element.getAttribute('data-float-sm');
        const mdFloat = element.getAttribute('data-float-md');
        const lgFloat = element.getAttribute('data-float-lg');
        const xlFloat = element.getAttribute('data-float-xl');

        // Apply initial float value
        if (floatVal) {
            element.style.float = floatVal;
        }

        // Function to apply responsive float values
        function applyResponsiveFloat() {
            const width = window.innerWidth;

            if (width >= 1200 && xlFloat) {
                element.style.float = xlFloat;
            } else if (width >= 992 && lgFloat) {
                element.style.float = lgFloat;
            } else if (width >= 768 && mdFloat) {
                element.style.float = mdFloat;
            } else if (width >= 576 && smFloat) {
                element.style.float = smFloat;
            } else if (floatVal) {
                element.style.float = floatVal;
            }
        }

        applyResponsiveFloat();
        window.addEventListener('resize', applyResponsiveFloat);
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const cardElements = document.querySelectorAll('[data-card]');

    cardElements.forEach(element => {
        const bgColor = element.getAttribute('data-card-bg');
        const borderColor = element.getAttribute('data-card-border');
        const shadow = element.getAttribute('data-card-shadow');
        const radius = element.getAttribute('data-card-radius');
        const padding = element.getAttribute('data-card-padding');
        const margin = element.getAttribute('data-card-margin');
        const textColor = element.getAttribute('data-card-text');

        if (bgColor) {
            element.style.backgroundColor = bgColor;
        }
        if (borderColor) {
            element.style.borderColor = borderColor;
        }
        if (shadow) {
            element.style.boxShadow = shadow;
        }
        if (radius) {
            element.style.borderRadius = radius;
        }
        if (padding) {
            element.style.padding = padding;
        }
        if (margin) {
            element.style.margin = margin;
        }
        if (textColor) {
            element.style.color = textColor;
        }
    });
});




// js for form styling and validation 

document.addEventListener("DOMContentLoaded", function() {
    const formElements = document.querySelectorAll('[data-form]');
    const form = document.querySelector('form');

    formElements.forEach(element => {
        const bgColor = element.getAttribute('data-form-bg');
        const borderColor = element.getAttribute('data-form-border');
        const radius = element.getAttribute('data-form-radius');
        const padding = element.getAttribute('data-form-padding');
        const margin = element.getAttribute('data-form-margin');
        const textColor = element.getAttribute('data-form-text');
        const boxShadow = element.getAttribute('data-form-shadow');
        const fontSize = element.getAttribute('data-form-font-size');
        const validMessage = element.getAttribute('data-valid-msg');
        const invalidMessage = element.getAttribute('data-invalid-msg');

        if (bgColor) {
            element.style.backgroundColor = bgColor;
        }
        if (borderColor) {
            element.style.borderColor = borderColor;
        }
        if (radius) {
            element.style.borderRadius = radius;
        }
        if (padding) {
            element.style.padding = padding;
        }
        if (margin) {
            element.style.margin = margin;
        }
        if (textColor) {
            element.style.color = textColor;
        }
        if (boxShadow) {
            element.style.boxShadow = boxShadow;
        }
        if (fontSize) {
            element.style.fontSize = fontSize;
        }

        element.addEventListener('input', function() {
            const messageElement = this.nextElementSibling;
            if (this.checkValidity()) {
                this.classList.add('valid');
                this.classList.remove('invalid');
                if (messageElement && validMessage) {
                    messageElement.textContent = validMessage;
                    messageElement.classList.add('visible');
                    messageElement.classList.remove('hidden');
                }
            } else {
                this.classList.add('invalid');
                this.classList.remove('valid');
                if (messageElement && invalidMessage) {
                    messageElement.textContent = invalidMessage;
                    messageElement.classList.add('visible');
                    messageElement.classList.remove('hidden');
                }
            }
        });
    });

    form.addEventListener('submit', function(event) {
        formElements.forEach(element => {
            const messageElement = element.nextElementSibling;
            if (!element.checkValidity()) {
                element.classList.add('invalid');
                if (messageElement && element.getAttribute('data-invalid-msg')) {
                    messageElement.textContent = element.getAttribute('data-invalid-msg');
                    messageElement.classList.add('visible');
                }
                event.preventDefault();
            }
        });
    });
});




// js for accordins styling 

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const items = accordion.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            // Check if the accordion item should be pre-opened
            if (header.getAttribute('data-pre-open') === 'true') {
                header.classList.add('active');
                content.classList.add('active');
            }

            header.addEventListener('click', function() {
                const isActive = header.classList.contains('active');
                // Close all accordion items
                items.forEach(i => {
                    i.querySelector('.accordion-header').classList.remove('active');
                    i.querySelector('.accordion-content').classList.remove('active');
                });
                // Toggle the clicked item
                if (!isActive) {
                    header.classList.add('active');
                    content.classList.add('active');
                }
            });

            // Apply dynamic properties
            const bgColor = header.getAttribute('data-bg');
            const textColor = header.getAttribute('data-text-color');
            const padding = header.getAttribute('data-padding');
            const margin = header.getAttribute('data-margin');
            const borderColor = header.getAttribute('data-border-color');
            const borderRadius = header.getAttribute('data-border-radius');

            if (bgColor) {
                header.style.backgroundColor = bgColor;
            }
            if (textColor) {
                header.style.color = textColor;
            }
            if (padding) {
                header.style.padding = padding;
            }
            if (margin) {
                header.style.margin = margin;
            }
            if (borderColor) {
                header.style.borderColor = borderColor;
            }
            if (borderRadius) {
                header.style.borderRadius = borderRadius;
            }
        });
    });
});





// javascript for handling popups 

document.addEventListener("DOMContentLoaded", function() {
    const popupButtons = document.querySelectorAll('[data-popup-target]');
    const popups = document.querySelectorAll('.popup-overlay');

    popupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(button.getAttribute('data-popup-target'));
            if (target) {
                showPopup(target);
            }
        });
    });

    popups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === popup || e.target.classList.contains('popup-close-icon')) {
                closePopup(popup);
            }
        });
    });

    function showPopup(popup) {
        popup.style.display = 'flex';
        applyPopupStyles(popup);
    }

    function closePopup(popup) {
        popup.style.display = 'none';
    }

    function applyPopupStyles(popup) {
        const content = popup.querySelector('.popup');
        const bgColor = content.getAttribute('data-bg');
        const borderRadius = content.getAttribute('data-border-radius');
        const padding = content.getAttribute('data-padding');
        const width = content.getAttribute('data-width');

        if (bgColor) {
            content.style.setProperty('--popup-bg', bgColor);
        }
        if (borderRadius) {
            content.style.setProperty('--popup-border-radius', borderRadius);
        }
        if (padding) {
            content.style.setProperty('--popup-padding', padding);
        }
        if (width) {
            content.style.setProperty('--popup-width', width);
        }
    }

    // Timeout Popups
    const timeoutPopups = document.querySelectorAll('[data-popup-timeout]');
    timeoutPopups.forEach(popup => {
        const timeout = parseInt(popup.getAttribute('data-popup-timeout'), 10);
        if (timeout) {
            setTimeout(() => {
                showPopup(popup);
            }, timeout);
        }
    });

    // Self-triggered Popups (e.g., show popup after some condition)
    function triggerSelfPopup(selector, delay = 0) {
        setTimeout(() => {
            const popup = document.querySelector(selector);
            if (popup) {
                showPopup(popup);
            }
        }, delay);
    }

});

