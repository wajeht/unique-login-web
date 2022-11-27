import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { StatusCodes } from 'http-status-codes';

import app from '../../app.js';

describe('GET /api/username', () => {
  it('should returns a valid status and a default username', async () => {
    const res = await request(app).get('/api/username');
    expect(res.statusCode).toBe(StatusCodes.OK);
  });
});
