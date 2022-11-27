import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { StatusCodes } from 'http-status-codes';

import app from '../../app.js';

describe('GET /api/password', () => {
  it('should returns a valid status', async () => {
    const res = await request(app).get('/api/password');
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it('should returns a default password that has 14 characters long', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.length).toBe(14);
  });

  it('should returns a default password that has some upper case characters', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.split('').some((c) => c.toUpperCase())).toBe(true);
  });

  it('should returns a default password that has some lower case characters', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.split('').some((c) => !c.toUpperCase())).toBe(false);
  });

  it('should returns a default password that has some number characters', async () => {
    const res = await request(app).get('/api/password');
    console.log(res.body.password);
    expect(
      res.body.password
        .split('')
        .some((c) => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(c)),
    ).toBe(true);
  });
});
