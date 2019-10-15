import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();

const createLogger = (service) => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.simple(),
    ),
    defaultMeta: { service },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  // eslint-disable-next-line no-unused-expressions
  process.env.NODE_ENV !== 'production'
    && logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));


  return logger;
};

export default createLogger;
