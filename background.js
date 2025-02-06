


// checks whether extension is toggled on or off
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF"
    });
});

// check if the URL matches a documentation page.
// check the state of the current tab and set the nexte state.

const extensions = 'https://devleoper.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';