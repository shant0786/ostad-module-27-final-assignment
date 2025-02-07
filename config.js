const MONGODB_CONNECTION =
  "mongodb+srv://rmshanto786:shanto786@cluster0.vidqntm.mongodb.net/portfolio_assignment";
const PORT = 5500;
const REQUEST_LIMIT_TIME = 15 * 60 * 1000;
const REQUEST_LIMIT_NUMBER = 3000;
const MAX_JSON_SIZE = "10mb";
const JWT_SECRET_KEY = "the-secret-key";
const JWT_EXPIRATION_TIME = "24h";
const URL_ENCODED = true;
const WEB_CACHE = false;
EMAIL_HOST = "smtp.gmail.com";
EMAIL_PORT = 465;
EMAIL_USER = "rm.shanto786@gmail.com";
EMAIL_PASSWORD = " isqpwpxmwwdfjvyt";
MAIL_ENCRYPTION = "ssl";
MAIL_SENDERS_INFO = "UserRegistration.ltd <rm.shanto786@gmail.com>";

module.exports = {
  MONGODB_CONNECTION,
  PORT,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  MAX_JSON_SIZE,
  JWT_SECRET_KEY,
  JWT_EXPIRATION_TIME,
  URL_ENCODED,
  WEB_CACHE,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  MAIL_ENCRYPTION,
  MAIL_SENDERS_INFO,
};
