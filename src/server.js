import constants from './config/constants.js';
import app from './app.js';

const { PORT } = constants;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
