
document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.recipe-card');
            card.remove();
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sortBy = document.getElementById("sortBy");
    const parent = document.querySelector(".collection-cards-parent");

    sortBy.addEventListener("change", function () {
        const cards = Array.from(parent.querySelectorAll(".recipe-card"));

        cards.sort((a, b) => {
            const aInfo = a.querySelector(".info-section");
            const bInfo = b.querySelector(".info-section");

            if (!aInfo || !bInfo) return 0;

            let aValue, bValue;

            if (sortBy.value === "time") {
                aValue = extractNumber(aInfo.querySelector("p:first-child").textContent);
                bValue = extractNumber(bInfo.querySelector("p:first-child").textContent);
            } else if (sortBy.value === "servings") {
                aValue = extractNumber(aInfo.querySelector("p:last-child").textContent);
                bValue = extractNumber(bInfo.querySelector("p:last-child").textContent);
            }

            return aValue - bValue;
        });

        // Reorder elements in the DOM
        cards.forEach(card => parent.appendChild(card));
    });

    function extractNumber(text) {
        let match = text.match(/\d+/); // Extracts the first number found in the text
        return match ? parseInt(match[0], 10) : 0;
    }
});
