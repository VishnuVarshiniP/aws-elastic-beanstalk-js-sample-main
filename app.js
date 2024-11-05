const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Set view engine to EJS for dynamic HTML rendering
app.set('view engine', 'ejs');

// Set the 'public' folder for static assets (images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route - renders a dynamic page with images and text
app.get('/', (req, res) => {
    const data = {
        title: 'Welcome to My App! Happy Learning Modified By Vishnu',
        description: 'This is an enhanced version of the app featuring images and dynamic content.',
        imagePath: '/images/happy-learning.jpg', // Points to an image in the public folder
        features: [
            'Interactive Web Pages',
            'Image and Text Integration',
            'Templating with EJS',
            'Serving Static Files',
        ]
    };
    res.render('index', data);
});

// About route - renders an additional page with more info
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        description: 'This app demonstrates Express with EJS templating and static file serving.'
    });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
