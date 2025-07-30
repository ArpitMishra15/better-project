// middleware 
import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 80,             // Limit each IP to 20 requests per minute
  message: "Too many requests, try again later",
});

export default rateLimiter;
