import { validate } from 'fast-json-patch';

const validateJson = (req, res, next) => {
  const { document, operation } = req.body;
  const error = validate([operation], document);


  if (!error) {
    return next();
  }
  return res.status(400).json({
    status: 'error',
    error,
  });
};

export default validateJson;
