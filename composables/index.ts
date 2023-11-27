export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export const useNameValidator = () => {
  const validateName = (value: string) => {
    return !value
      ? 'Name is required'
      : value.length > 20
      ? 'Name must be greater than 20 characters.'
      : true;
  };

  const nameValidationRule = (value: string) => [validateName(value)];

  return { nameValidationRule };
};

export const useEmailValidator = () => {
  const validateEmail = (value: string) =>
    !value
      ? 'Email is required.'
      : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address.'
      : true;

  const emailValidationRule = (value: string) => [validateEmail(value)];

  return { emailValidationRule };
};
