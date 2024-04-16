console.log("conductor loaded");

function checkWebflowLoaded() {
    // Check if a specific element that signifies the designer interface has loaded is present
    if (document.querySelector('button[data-automation-id="publish-menu-button"]')) {
        console.log('Webflow Designer Interface is fully loaded.');
    } else {
        console.log('Webflow Designer Interface is not yet loaded.');
        // Optionally, recheck after some time
        setTimeout(checkWebflowLoaded, 200);
    }
}

// Start checking
checkWebflowLoaded();

/*

// This function is called whenever the observed elements change
function handleMutation(mutations, observer) {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                // Check if the added node is the menu button or contains it
                if (node.matches('.your-menu-class') || node.querySelector('.your-menu-class')) {
                    // Your code to modify the menu or interact with it
                    console.log('Menu is added to DOM');
                    // Insert your items or modify as necessary
                }
            });
        }
    });
}

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Create an observer instance linked to the callback function
const observer = new MutationObserver(handleMutation);

// Start observing the target node for configured mutations
const targetNode = document.body; // You might need to choose a more specific part of the DOM
observer.observe(targetNode, config);

// Don't forget to disconnect the observer when it's not needed to avoid memory leaks
// observer.disconnect();
*/