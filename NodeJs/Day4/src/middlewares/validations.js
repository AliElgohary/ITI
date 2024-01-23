const validate = (schema) => {
  return (req, res, next) => {
    const chedValidation = schema.validate(req.body);
    if (chedValidation && chedValidation.error) {
      res.json({
        message: "validation failed",
        error: chedValidation.error.details,
      });
    } else {
      next();
    }
  };
};

export default validate;
