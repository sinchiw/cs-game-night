const path = require('path');
const app = require('express')();






const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));



// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));


/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
