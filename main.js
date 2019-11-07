let reveal = document.querySelector('.reveal');
let submit = document.getElementById('submit');

function SuspectGenerator(firstName, lastName, occupation, age, description, image, color) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    this.image = image;
    this.color = color;
}

function WeaponGenerator(name, weight) {
    this.name = name;
    this.weight = weight;
}

function RoomGenerator(name) {
    this.name = name;
}


let suspectArray =
    [
        new SuspectGenerator('Jacob', 'Green', 'Entrepreneur', 45, 'He has a lot of connections', 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'green'),
        new SuspectGenerator('Doctor', 'Orchid', 'Scientist', 26, 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white'),
        new SuspectGenerator('Victor', 'Plum', 'Designer', 22, 'Billionaire video game designer', 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', 'purpule'),
        new SuspectGenerator('Kasandra', 'Scarlet', 'Actor', 31, 'She is an A-list movie star with a dark past', 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red'),
        new SuspectGenerator('Eleanor', 'Peacock', 'Socialité', 36, 'She is from a wealthy family and uses her status and money to earn popularity', 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue'),
        new SuspectGenerator('Jack', 'Mustard', 'Retired Football player', 62, 'He is a former football player who tries to get by on his former glory', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow')
    ]

let weaponsArray =
    [
        new WeaponGenerator('rope', 10),
        new WeaponGenerator('knife', 8),
        new WeaponGenerator('candlestick', 2),
        new WeaponGenerator('dumbbell', 30),
        new WeaponGenerator('poison', 2),
        new WeaponGenerator('axe', 15),
        new WeaponGenerator('bat', 13),
        new WeaponGenerator('trophy', 25),
        new WeaponGenerator('pistol', 20)

    ]

let roomsArray =
    [
        new RoomGenerator('Dining Room'),
        new RoomGenerator('Conservatory'),
        new RoomGenerator('Kitchen'),
        new RoomGenerator('Study'),
        new RoomGenerator('Library'),
        new RoomGenerator('Billiard Room'),
        new RoomGenerator('Lounge Room'),
        new RoomGenerator('Ballroom'),
        new RoomGenerator('Hall'),
        new RoomGenerator('Spa'),
        new RoomGenerator('Living Room'),
        new RoomGenerator('Observatory'),
        new RoomGenerator('Theater'),
        new RoomGenerator('Guest House'),
        new RoomGenerator('Patio'),

    ]

function selectRandom(arr) {
    return Math.floor(Math.random() * arr.length);  
}

function pickMystery() {
     return {suspect: suspectArray[selectRandom(suspectArray)],weapon: weaponsArray[selectRandom(weaponsArray)], room: roomsArray[selectRandom(roomsArray)]};
}

let revealEnvelope = pickMystery();


function revealMystery() {
    reveal.innerHTML = `<h1>${revealEnvelope.suspect.firstName}  ${revealEnvelope.suspect.lastName} killed Mr. Boddy using the ${revealEnvelope.weapon.name} in the ${revealEnvelope.room.name} </h1>  <img src="${revealEnvelope.suspect.image}" alt="killer img">`
}


submit.addEventListener('click', function() {
    revealMystery()
})



