
// Define the root path for the API
const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
console.log(rootPath);

// Retrieve the API key
const apiKey = checkApiKey();

function checkApiKey() {
    const storedKey = localStorage.getItem("apiKey");

    // If the API key is missing, prompt the user to enter it
    if (!storedKey) {
        window.location.href = "enter-api-key.html";
    }

    return storedKey;
}
