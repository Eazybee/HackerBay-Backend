import validateSchema from '../helpers/utils';

const validateImageUrl = (req, res, next) => {
  const imageRegex = '.(jpg|png|gif|jpeg|JPG|PNG|GIF|JPEG)$';
  const rules = {
    url: ['required', 'url', `regex:/${imageRegex}/`],
  };

  if (validateSchema(req.query, rules, res)) {
    next();
  }
};

export default validateImageUrl;
