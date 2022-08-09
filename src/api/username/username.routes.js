import { Router } from 'express';
const username = Router();

import {
  getUsernameByDefault,
  getUsernameByOneParam,
  getUsernameByTwoParam,
  getUsernameByThreeParam,
  getUsernameByFourParam,
} from './username.controller.js';

username.get("/", getUsernameByDefault); // prettier-ignore
username.get("/:one", getUsernameByOneParam); // prettier-ignore
username.get("/:one/:two", getUsernameByTwoParam); // prettier-ignore
username.get("/:one/:two/:three", getUsernameByThreeParam); // prettier-ignore
username.get('/:one/:two/:three/:four', getUsernameByFourParam); // prettier-ignore

export default username;
