console.log('DOM Manipulation Demo Started');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const mainTitle = document.getElementById('main-title');
    const demoText = document.querySelector('#demo-text');
    const changeTextBtn = document.querySelector('#change-text-btn');
    const testList = document.querySelector('#test-list');
    const addElementBtn = document.querySelector('#add-element-btn');

    console.log('Elements found:', {
        title: !!mainTitle,
        text: !!demoText,
        buttons: !!changeTextBtn,
        list: !!testList
    })

changeTextBtn.addEventListener('click', function() {
        console.log('Change Text Button Clicked');
    
        const messages = [
            'Text changed successfully!',
            'DOM Manipulation in action!',
            'This is how dynamic content works!',
            'Perfect for automation testing!',
        ];

        const randomMessage = Math.floor(Math.random() * messages.length);
        demoText.textContent = randomMessage;
        demoText.className = 'highlight';

        // Update title as well
        mainTitle.textContent = 'DOM Updated!';