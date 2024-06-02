const placesData = {
    "places_to_visit": [
      {
        "name": "Howrah Bridge",
        "description": "One of the most iconic landmarks in Kolkata, the Howrah Bridge is a cantilever bridge over the Hooghly River. It's a marvel of engineering and a popular tourist spot, known for its unique design and historical significance. The bridge is a lifeline for daily commuters and offers stunning views of the river, especially during sunrise and sunset.",
        "tips": "Best visited during early mornings or late evenings to avoid traffic.",
        "how_to_reach": "Easily accessible via public transport or taxi.",
        "image_link": "https://media1.thrillophilia.com/filestore/5hx8hkxds220kko4fa37is6ed18c_1586255639_Howrah-Bridge.jpg?w=753&h=450&dpr=1.0"
        
      },
      {
        "name": "Botanical Garden",
        "description": "The Acharya Jagadish Chandra Bose Indian Botanic Garden, also known as the Botanical Garden, is home to a diverse collection of flora, including the famous Great Banyan Tree, which is over 250 years old and one of the largest trees in the world by canopy coverage. The garden is a tranquil escape from the bustling city and offers picturesque landscapes, ideal for nature walks and photography.",
        "tips": "Wear comfortable shoes as the garden is expansive.",
        "how_to_reach": "Located in Shibpur, Howrah, it can be reached by taxi or bus.",
        "image_link": "https://media1.thrillophilia.com/filestore/3btqqm6jh1uwgmjwti4zcgr1zk69_1586256347_Botanical_Garden-Kolkata.jpg?w=753&h=450&dpr=1.0"
      },
      {
        "name": "Victoria Memorial",
        "description": "A grand marble building dedicated to Queen Victoria, the Victoria Memorial now serves as a museum showcasing the rich history and heritage of Kolkata. The museum features an extensive collection of artifacts, paintings, and manuscripts. The surrounding gardens are beautifully landscaped, making it a perfect spot for a leisurely stroll.",
        "tips": "Visit in the evening to see the building beautifully lit up.",
        "how_to_reach": "Located in the heart of the city, accessible by metro, bus, or taxi.",
        "image_link": "https://media1.thrillophilia.com/filestore/woa947eeo251abzzxyn06r7w52zl_1586255201_Victoria_Memorial_Kolkata_panorama.jpg?w=753&h=450&dpr=1.0"
      },
      {
        "name": "New Market",
        "description": "A bustling market offering a wide variety of goods including clothing, jewelry, and accessories. New Market is a shopper's paradise, known for its vibrant atmosphere and diverse range of products. The market also has numerous eateries where you can savor local delicacies.",
        "tips": "Bargaining is essential to get the best deals.",
        "how_to_reach": "Situated on Lindsay Street, accessible by public transport.",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/3/37/New_Market%2C_Kolkata%2C_2011.jpg"
      },
      {
        "name": "Dakshinapan Shopping Center",
        "description": "Known for its handicrafts and traditional items, Dakshinapan Shopping Center is a popular destination for those looking to buy souvenirs and gifts. The complex features a variety of shops selling regional crafts, textiles, and artifacts, reflecting the rich cultural heritage of India.",
        "tips": "Great place to buy souvenirs and gifts.",
        "how_to_reach": "Located in Dhakuria, easily reachable by taxi or bus.",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/8/87/Dakshinapan_-_Market_Complex_-_Dhakuria_-_Kolkata_2014-02-12_2026.JPG"
      },
      {
        "name": "College Street",
        "description": "Famous for its bookstores and coffee houses, College Street is a paradise for book lovers. The area is lined with numerous bookshops, some of which are century-old establishments. It's also home to the historic Indian Coffee House, a popular hangout spot for intellectuals and students.",
        "tips": "Spend some time at the Indian Coffee House for a taste of local culture.",
        "how_to_reach": "Accessible by metro, taxi, or bus.",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/College_Street_-_Kolkata_7387.JPG/800px-College_Street_-_Kolkata_7387.JPG"
      },
      {
        "name": "Alipore Zoo",
        "description": "A popular destination for families, Alipore Zoo houses a variety of animals, including rare and exotic species. The zoo, established in 1876, is the oldest zoological park in India and offers educational and recreational experiences for visitors of all ages.",
        "tips": "Visit during weekends for special events.",
        "how_to_reach": "Located in Alipore, accessible by bus or taxi.",
        "image_link": "https://media1.thrillophilia.com/filestore/v7obdrup3lebjbhvwayphw9rz525_1587994596_Alipore_Zoological_Gardens.jpg?w=753&h=450&dpr=1.0"
      }
    ]
  }
  

const container = document.getElementsByClassName('container')[0]
const search = document.getElementById('search')

console.log(search);

placesData.places_to_visit.forEach(place=>{
  const cardElement = document.createElement('div');
  const cardInfo = document.createElement('div');
  const cardInfoHeading = document.createElement('h3')
  const cardInfoTips = document.createElement('h3')
  cardInfo.className= 'info-button';
  cardInfoTips.innerText=`Tips: ${place.tips}`;
  cardInfoHeading.innerText= place.how_to_reach;
  cardInfo.append(cardInfoHeading, cardInfoTips);
  cardElement.className="card";
  const cardImage = document.createElement('img');
  const cardHeading = document.createElement('h2');
  const cardDesc = document.createElement('p');
  cardHeading.innerText=place.name;
  cardDesc.innerText=place.description;
  cardImage.src=place.image_link;
  cardElement.append(cardImage, cardHeading, cardDesc, cardInfo);
  cardElement.id=place.name;
  container.append(cardElement); 
})

search.addEventListener('input', e=>{
  const input = search.value 
  if (input.length <= 2){
    const cards = document.getElementsByClassName('card-invisible');
    for (let index = 0; index < cards.length; index++) {
      cards[index].className='card';
    }
    return; 
  }
  else {
    const cards = document.getElementsByClassName('card');
    console.log(cards);
    for (let index = 0; index < cards.length; index++) {
      const id = cards[index].id;
      if(id.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
        cards[index].className = 'card'
        continue;
      }
      else {
        cards[index].className = 'card-invisible'
      }
    }
  }
})