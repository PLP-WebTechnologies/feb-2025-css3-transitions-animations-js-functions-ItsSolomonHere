document.addEventListener('DOMContentLoaded', function() {
    const featuredBikes = [
        { name: 'KTM 1290 Super Duke R', category: 'superbike', price: 'KES 2,800,000', image: 'images/pexels-ruben-christen-176523298-15879412.jpg' },
        { name: 'BMW S 1000 RR', category: 'superbike', price: 'KES 3,200,000', image: 'images/pexels-shubham-tekawade-392991834-18024800 (1).jpg' },
        { name: 'Suzuki Hayabusa', category: 'superbike', price: 'KES 2,500,000', image: 'images/pexels-rishtih-reddy-156395167-10701887.jpg' },
        { name: 'CF Moto 1250TR-G', category: 'superbike', price: 'KES 1,800,000', image: 'images/pexels-entero-29814441.jpg' },
        { name: 'TVS Apache RTR 310', category: 'superbike', price: 'KES 650,000', image: 'images/pexels-jisso-heby-597210750-17227165.jpg' },
        { name: 'Bajaj Dominar 400', category: 'superbike', price: 'KES 550,000', image: 'images/pexels-imperioame-11192307.jpg' },
        { name: 'Bajaj Dominar 400', category: 'superbike', price: 'KES 550,000', image: 'images/pexels-ruben-christen-176523298-15879412.jpg' },
        { name: 'Honda CBR1000RR-R Fireblade', category: 'superbike', price: 'KES 3,500,000', image: 'images/pexels-helin-gezer-903013644-20728925.jpg' },
        { name: 'KTM 1290 Super Adventure S', category: 'adventure', price: 'KES 2,950,000', image: 'images/pexels-abhinav-9269545.jpg' },
        { name: 'BMW R 1250 GS Adventure', category: 'adventure', price: 'KES 3,800,000', image: 'images/pexels-lovenzky-jonathan-2150290221-31087503.jpg' },
        { name: 'Suzuki V-Strom 1050DE', category: 'adventure', price: 'KES 2,600,000', image: 'images/pexels-fabio-photography-8331592-6372795.jpg' },
        { name: 'CF Moto 800MT', category: 'adventure', price: 'KES 1,500,000', image: 'images/pexels-entero-29814441.jpg' },
        { name: 'Honda Africa Twin', category: 'adventure', price: 'KES 2,700,000', image: 'images/pexels-hson-19280463.jpg' },
        // Add more bikes here with their actual prices and image file names
    ];

    const featuredBikesGrid = document.querySelector('.featured-bikes .bike-grid');
    const superbikeGrid = document.getElementById('superbike-grid');
    const adventureGrid = document.getElementById('adventure-grid');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h3 id="modal-title"></h3>
            <p id="modal-details"></p>
            <p class="price" id="modal-price"></p>
            <img id="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);
    const closeButton = modal.querySelector('.close-button');

    function displayBikes(bikes, gridElement) {
        if (gridElement) {
            bikes.forEach(bike => {
                const bikeCard = document.createElement('div');
                bikeCard.classList.add('bike-card');
                bikeCard.innerHTML = `
                    <img src="${bike.image}" alt="${bike.name}">
                    <h3>${bike.name}</h3>
                    <p class="price">Price: ${bike.price}</p>
                    <button class="button">View Details</button>
                `;
                gridElement.appendChild(bikeCard);
            });
        }
    }
     

    // Event listener for "View Details" buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-details-btn')) {
            const bikeName = event.target.getAttribute('data-bike-name');
            showBikeDetails(bikeName);
        }
    });

    // Event listener for closing the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Display featured bikes on the homepage
    const numberOfFeatured = Math.min(4, featuredBikes.length);
    const randomFeaturedBikes = [];
    const featuredIndices = new Set();
    while (randomFeaturedBikes.length < numberOfFeatured) {
        const randomIndex = Math.floor(Math.random() * featuredBikes.length);
        if (!featuredIndices.has(randomIndex)) {
            featuredIndices.add(randomIndex);
            randomFeaturedBikes.push(featuredBikes[randomIndex]);
        }
    }
    displayBikes(randomFeaturedBikes, featuredBikesGrid);

    // Display superbikes on the superbikes page
    const superbikes = featuredBikes.filter(bike => bike.category === 'superbike');
    displayBikes(superbikes, superbikeGrid);

    // Display adventure bikes on the adventure page
    const adventureBikes = featuredBikes.filter(bike => bike.category === 'adventure');
    displayBikes(adventureBikes, adventureGrid);
});
