import Validator from 'validatorjs';

const validateImageUrl = (req, res, next) => {
  const imageRegex = '.(jpg|png|gif|jpeg|JPG|PNG|GIF|JPEG)$';
  const rules = {
    url: ['required', 'url', `regex:/${imageRegex}/`],
  };

  const validation = new Validator(req.query, rules);
  if (validation.passes()) {
    next();
  } else {
    res.status(400).json({
      status: 'error',
      error: validation.errors.all(),
    });
  }
};

export default validateImageUrl;
