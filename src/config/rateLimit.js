import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 30 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    status: 'fail',
    request_url: async (request, response) => request.originalUr,
    message: 'Too many requests, please try again later.',
  },
});

export default limiter;
