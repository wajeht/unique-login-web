import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

const constants = {
  PORT: process.env.PORT,
};

export default constants;
