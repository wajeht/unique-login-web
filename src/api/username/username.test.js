import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { StatusCodes } from 'http-status-codes';

import app from '../../app.js';
import { splitStringOnUpperCase } from '../../utils/helpers.js';

import { adjectives as Adjectives } from '../../data/index.js';
import { animals as Animals } from '../../data/index.js';
import { verbs as Verbs } from '../../data/index.js';
import { nouns as Nouns } from '../../data/index.js';

describe('GET /api/username', () => {
  it('should returns a valid status and a default username', async () => {
    const res = await request(app).get('/api/username');
    expect(res.statusCode).toBe(StatusCodes.OK);
  });
});

describe('GET /api/username', () => {
  it('should returns a default username with adjective and animal', async () => {
    const res = await request(app).get('/api/username');
    const [adjective, animal] = splitStringOnUpperCase(res.body.username);
    expect(Animals.includes(animal)).toBeTruthy();
    expect(Adjectives.includes(adjective)).toBeTruthy();
  });
});

describe('GET /api/username/animals/adjectives', () => {
  it('should returns a username with given adjective and animal', async () => {
    const res = await request(app).get('/api/username/animals/adjectives');
    const [adjective, animal] = splitStringOnUpperCase(res.body.username);
    expect(Animals.includes(animal)).toBeTruthy();
    expect(Adjectives.includes(adjective)).toBeTruthy();
  });
});

describe('GET /api/username/animals/adjectives/verbs', () => {
  it('should returns a username with given adjective, verb and animal', async () => {
    const res = await request(app).get('/api/username/adjectives/verbs/animals');
    const [adjective, verb, animal] = splitStringOnUpperCase(res.body.username);
    expect(Animals.includes(animal)).toBeTruthy();
    expect(Adjectives.includes(adjective)).toBeTruthy();
    expect(Verbs.includes(verb)).toBeTruthy();
  });
});

describe('GET /api/username/animals/adjectives/verbs/nouns', () => {
  it('should returns a username with given adjective, verb, noun, animal', async () => {
    const res = await request(app).get('/api/username/adjectives/verbs/nouns/animals');
    const [adjective, verb, noun, animal] = splitStringOnUpperCase(res.body.username);
    expect(Animals.includes(animal)).toBeTruthy();
    expect(Adjectives.includes(adjective)).toBeTruthy();
    expect(Verbs.includes(verb)).toBeTruthy();
    expect(Nouns.includes(noun)).toBeTruthy();
  });
});

describe('GET /api/username/nouns', () => {
  it('should returns a username with just noun', async () => {
    const res = await request(app).get('/api/username/nouns');
    expect(Nouns.includes(res.body.username)).toBeTruthy();
  });
});

describe('GET /api/username/adjectives', () => {
  it('should returns a username with just adjectives', async () => {
    const res = await request(app).get('/api/username/adjectives');
    console.log(res.body.username);
    expect(Adjectives.includes(res.body.username)).toBeTruthy();
  });
});

describe('GET /api/username/animals', () => {
  it('should returns a username with just animals', async () => {
    const res = await request(app).get('/api/username/animals');
    expect(Animals.includes(res.body.username)).toBeTruthy();
  });
});

describe('GET /api/username/verbs', () => {
  it('should returns a username with just verbs', async () => {
    const res = await request(app).get('/api/username/verbs');
    expect(Verbs.includes(res.body.username)).toBeTruthy();
  });
});
