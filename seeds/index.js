const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Database connected!!!')
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            author: '6591871f88c9a68c1e09748f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dol',
            price: Math.floor(Math.random() * 20) + 10,
            images: [
                {
                    url: 'https://res.cloudinary.com/ddykzzkte/image/upload/v1711641567/YelpCamp/ochtqgw0k0k6nsmq3cgd.jpg',
                    filename: 'YelpCamp/ochtqgw0k0k6nsmq3cgd',
                },
                {
                    url: 'https://res.cloudinary.com/ddykzzkte/image/upload/v1711641567/YelpCamp/ochtqgw0k0k6nsmq3cgd.jpg',
                    filename: 'YelpCamp/ochtqgw0k0k6nsmq3cgd',
                }
            ],

        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});