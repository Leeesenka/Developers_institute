const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const Parser = require('rss-parser');
const app = express();
app.set('view engine', 'ejs')

app.listen(process.env.PORT||3030, ()=>{
    console.log(`run on ${process.env.PORT||3030}`);
})


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs'); 
let parser = new Parser();

app.get('/', async (req, res) => {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('pages/index', { posts: feed.items });
});

app.get('/some-route', (req, res) => {
    const posts = [{ title: 'Post 1', content: 'Content 1' }, { title: 'Post 2', content: 'Content 2' }];
    res.render('pages/search', { posts: posts });
});


app.get('/search', async (req, res) => {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    let categories = feed.items.reduce((categories, item) => {
        item.categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
        return categories;
    }, []);
    
    res.render('pages/search', { categories, posts: [] });
});




app.post('/search/title', async (req, res) => {
    try {
        const keyword = req.body.title.toLowerCase();  
        const feed = await parser.parseURL('https://thefactfile.org/feed/');
        const posts = feed.items.filter(item => item.title.toLowerCase().includes(keyword)); 

    
        let categories = feed.items.reduce((categories, item) => {
            item.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
            return categories;
        }, []);
        
        res.render('pages/search', { posts, categories }); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.post('/search/category', async (req, res) => {
    try {
        const selectedCategory = req.body.category;
        console.log("****", selectedCategory)
        const feed = await parser.parseURL('https://thefactfile.org/feed/');
        const posts = feed.items.filter(item => item.categories.includes(selectedCategory));

   
        let categories = feed.items.reduce((categories, item) => {
            item.categories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
            return categories;
        }, []);
        
        res.render('pages/search', { posts, categories }); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// //****// */
