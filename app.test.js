const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

describe('Counter Application', () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
        document = dom.window.document;
        const script = document.createElement('script');
        script.src = '../app.js';
        document.body.appendChild(script);
    });

    test('Initial counter value should be 0', () => {
        const counter = document.getElementById('counter');
        expect(counter.textContent).toBe('0');
    });

    test('Increment button should increase counter', () => {
        const counter = document.getElementById('counter');
        const incrementButton = document.getElementById('increment');
        incrementButton.click();
        expect(counter.textContent).toBe('1');
    });

    test('Decrement button should decrease counter', () => {
        const counter = document.getElementById('counter');
        const decrementButton = document.getElementById('decrement');
        decrementButton.click();
        expect(counter.textContent).toBe('-1');
    });
});

