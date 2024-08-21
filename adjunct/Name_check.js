function navigateToPage(cardName) {
    const yearSelect = document.getElementById('year-select');
    const year = yearSelect.value;
    const url = `page1.html?card=${cardName}&year=${encodeURIComponent(year)}`;
    window.location.href = url;
    
}


