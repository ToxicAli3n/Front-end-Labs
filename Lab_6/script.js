document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {

            const user = data.results[0];
            const picture = user.picture.large;
            const cell = user.cell;
            const city = user.location.city;
            const email = user.email;
            const coordinates = `Широта: ${user.location.coordinates.latitude}, Довгота: ${user.location.coordinates.longitude}`;

            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                        <img src="${picture}" alt="User Picture">
                        <p><strong>Мобільний:</strong> ${cell}</p>
                        <p><strong>Місто:</strong> ${city}</p>
                        <p><strong>Електронна адреса:</strong> ${email}</p>
                        <p><strong>Координати:</strong> ${coordinates}</p>
                    `;

            const userContainer = document.getElementById('userContainer');
            userContainer.appendChild(userCard);
        })
        .catch(error => {
            console.error('Помилка отримання даних:', error);
        });
});