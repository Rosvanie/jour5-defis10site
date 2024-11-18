// ONGLET PRODUIT
function showCategory(category) {
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(categoryElement => {
        categoryElement.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Afficher l'onglet "Tous" par défaut
    if (category === 'all') {
        document.querySelectorAll('.category-content').forEach(function(categoryContent) {
            categoryContent.classList.add('active');
        });
    } else {
        document.getElementById(category).classList.add('active');
    }

    document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`).classList.add('active');
}

