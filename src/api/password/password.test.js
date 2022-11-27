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
    expect(res.body.password.split('').some((c) => /[A-Z]/g.test(c))).toBeTruthy();
  });

  it('should returns a default password that has some lower case characters', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.split('').some((c) => /[a-z]/g.test(c))).toBeTruthy();
  });

  it('should returns a default password that has some number characters', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.split('').some((c) => /[0-9]/g.test(c))).toBeTruthy();
  });

  it('should returns a default password that has some special characters', async () => {
    const res = await request(app).get('/api/password');
    expect(res.body.password.split('').some((c) => /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(c))).toBeTruthy(); // prettier-ignore
  });
});

describe('GET /api/password/20', () => {
  it('should returns a password that has 20 characters long', async () => {
    const res = await request(app).get('/api/password/20');
    expect(res.body.password.length).toBe(20);
  });
});

describe('GET /api/password/30', () => {
  it('should returns a password that has 30 characters long', async () => {
    const res = await request(app).get('/api/password/30');
    expect(res.body.password.length).toBe(30);
  });
});

describe('GET /api/password/32/uppercase', () => {
  it('should returns a password that has 32 characters long', async () => {
    const res = await request(app).get('/api/password/32/uppercase');
    expect(res.body.password.length).toBe(32);
  });

  it('should returns a password that has 32 characters long', async () => {
    const res = await request(app).get('/api/password/32/uppercase');
    expect(res.body.password.split('').some((c) => /[A-Z]/g.test(c))).toBeTruthy();
  });
});

describe('GET /api/password/25/lowercase', () => {
  it('should returns a password wth lowercase that has 25 characters long', async () => {
    const res = await request(app).get('/api/password/25/uppercase');
    expect(res.body.password.length).toBe(25);
  });

  it('should returns a password that has all uppercase characters', async () => {
    const res = await request(app).get('/api/password/33/uppercase');
    expect(res.body.password.split('').every((c) => /[A-Z]/g.test(c))).toBeTruthy();
  });
});

describe('GET /api/password/25/number', () => {
  it('should returns a password wth lowercase that has 25 characters long', async () => {
    const res = await request(app).get('/api/password/25/number');
    expect(res.body.password.length).toBe(25);
  });

  it('should returns a password that has all number characters', async () => {
    const res = await request(app).get('/api/password/143/number');
    expect(res.body.password.split('').some((c) => /[0-9]/g.test(c))).toBeTruthy();
  });
});

describe('GET /api/password/25/number/uppercase', () => {
  it('should returns a password that has some number characters and uppercase', async () => {
    const res = await request(app).get('/api/password/25/number/uppercase');
    expect(res.body.password.length).toBe(25);
    expect(res.body.password.split('').some((c) => /[0-9]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[A-Z]/g.test(c))).toBeTruthy();
  });
});

describe('GET /api/password/25/number/uppercase/lowercase', () => {
  it('should returns a password that has some number, uppercase, and lowercase', async () => {
    const res = await request(app).get('/api/password/25/number/uppercase/lowercase');
    expect(res.body.password.length).toBe(25);
    expect(res.body.password.split('').some((c) => /[0-9]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[A-Z]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[a-z]/g.test(c))).toBeTruthy();
  });
});

describe('GET /api/password/25/number/uppercase/lowercase/special', () => {
  it('should returns a password that has some number, uppercase, lowercase, and special characters', async () => {
    const res = await request(app).get('/api/password/25/number/uppercase/lowercase/special');
    expect(res.body.password.length).toBe(25);
    expect(res.body.password.split('').some((c) => /[0-9]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[A-Z]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[a-z]/g.test(c))).toBeTruthy();
    expect(res.body.password.split('').some((c) => /[-!$%^&*()_+|~=`{}[:;<>?,.@#]/g.test(c))).toBeTruthy(); // prettier-ignore
  });
});
