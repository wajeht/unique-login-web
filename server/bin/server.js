const app = require('../app.js');

const config = require('../config/config.js');
const { PORT } = config || 3000;

app.listen(PORT, (err) => {
    if (err) {
        throw new Error('Something went wrong with starting server!');
    }
    console.log(`Server started on http://localhost:${PORT}`);
});
