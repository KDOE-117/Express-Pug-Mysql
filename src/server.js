const app = require('./app/app.js');


const port = app.get('port');

app.listen(3000, () => {
    console.log(`Running on port ${port}, AYE, AYE, SIR!!`)
});
