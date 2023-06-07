const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'Oi3msd4d907', 
        database: 'dvdrental',
    }
});

// db.select('city', 'city_id')
// .from('city')
// .then(rows => {
//     console.log(rows);
// })
// .catch(err =>{
//     console.log(err)
// })

db('city')
// .select('city', 'city_id')
.update({city: "Tel Aviv"})
.where({city_id:101})
.then(rows => {
    console.log(rows);
})
.catch(err => {
    console.log(err);
})