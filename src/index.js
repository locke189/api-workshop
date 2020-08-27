import './styles/main.scss';
import md5 from 'md5';
console.log('Im ok!');

// DO NOT MODIFY this code
const cardTemplate = (options) => {
  const {
    avatarImgUrl,
    headerTitle,
    headerSubtitle,
    cardMediaUrl,
    cardText
  } = options;
  return `
  <div class="card">
  <div class="card__header">
    <div class="card__header-thumbnail">
      <img class="card__header-thumbnail-img" src="${avatarImgUrl}" alt="Avatar">
    </div>
    <div class="card__header-text">
      <h3 class="card__header-text-title">${headerTitle}</h3>
      <h4 class="card__header-text-subtitle">${headerSubtitle}</h4>
    </div>
  </div>
  <div class="card__media">
    <img class="card__media-img" src="${cardMediaUrl}" alt="Avatar">
  </div>
  <div class="card__footer">
    <div class="card__footer-support-text">${cardText}</div>
  </div>
</div>
  `;
}

const insertCard = (options) => {
  const cardContainer = document.querySelector('.card-container');
  console.log(cardContainer)
  cardContainer.innerHTML += cardTemplate(options);
}

// DO NOT MODIFY ^^^^

function main() {
  /*
  Workshop (APIs) using fetch.

  - Retrieve data from ANY API... (Bonus for using Marvel API)
  - Use the data to populate the cards as you see fit
  - You can not change the card API
  - You cannot use static data
  - Your score will decrease if you make multiple HTTP requests

  ~~~ May the odds be with you ~~~
  */
  // Some help:
  // use this timestamp
  const ts = new Date().getTime();
  // use this as an example to get the md5 hash
  const hash = md5('1blablabal123123');

  // INSERT YOUR CODE HERE ->
  console.log(ts);



  // Card API example
  insertCard({
    avatarImgUrl: 'https://cutt.ly/nipheBZ',
    headerTitle: 'Wolverine',
    headerSubtitle: 'X-Men',
    cardMediaUrl: 'https://cutt.ly/0ipzkMj',
    cardText: "Born with super-human senses and the power to heal from almost any wound, he's a premiere member of both the X-Men and the Avengers."
  });
  insertCard({
    avatarImgUrl: 'https://cutt.ly/nipheBZ',
    headerTitle: 'Wolverine',
    headerSubtitle: 'X-Men',
    cardMediaUrl: 'https://cutt.ly/0ipzkMj',
    cardText: "Born with super-human senses and the power to heal from almost any wound, he's a premiere member of both the X-Men and the Avengers."
  });
}

main();
