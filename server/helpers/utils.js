import Validator from 'validatorjs';

const validateSchema = (data, rules, res) => {
  const validation = new Validator(data, rules);

  const validate = validation.passes();

  if (!validate) {
    res.status(400).json({
      status: 'error',
      error: validation.errors.all(),
    });
  }

  return validate;
};

export default validateSchema;
