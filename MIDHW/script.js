
function search() {
    const query = document.getElementById('searchBox').value.trim();
    const resultsBox = document.getElementById('results');
    resultsBox.innerHTML = '';
    if (query) {
        resultsBox.innerHTML = '<p>Searching for: <strong>' + query + '</strong> (This is a static demo.)</p>';
    } else {
        resultsBox.innerHTML = '<p>Please enter a search term.</p>';
    }
}
