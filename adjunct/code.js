document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cardName = urlParams.get("card");
    const year = urlParams.get("year");

    if (cardName && year) {
        document.getElementById("department-name").textContent = cardName;
        document.getElementById("year-info").textContent = `ชั้นปี: ${year}`;
    }
});
