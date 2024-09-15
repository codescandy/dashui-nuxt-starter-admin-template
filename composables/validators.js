const { isEmpty, isEmptyArray, isNullOrUndefined } = useComposables();

export const useValidators = () => {
  // 👉 Required Validator
  const requiredValidator = (value) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
      return "This field is required";

    return !!String(value).trim().length || "This field is required";
  };

  // 👉 Email Validator
  const emailValidator = (value) => {
    if (isEmpty(value)) return true;
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (Array.isArray(value))
      return value.every((val) => re.test(String(val))) || "The Email field must be a valid email";

    return re.test(String(value)) || "The Email field must be a valid email";
  };

  // 👉 Password Validator
  const passwordValidator = (password) => {
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
    const validPassword = regExp.test(password);

    return (
      // eslint-disable-next-line operator-linebreak
      validPassword ||
      "Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars"
    );
  };

  // 👉 Confirm Password Validator
  const confirmedValidator = (value, target) =>
    value === target || "The Confirm Password field confirmation does not match";

  // 👉 Between Validator
  const betweenValidator = (value, min, max) => {
    const valueAsNumber = Number(value);

    return (
      (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) ||
      `Enter number between ${min} and ${max}`
    );
  };

  // 👉 Integer Validator
  const integerValidator = (value) => {
    if (isEmpty(value)) return true;
    if (Array.isArray(value))
      return (
        value.every((val) => /^-?[0-9]+$/.test(String(val))) || "This field must be an integer"
      );

    return /^-?[0-9]+$/.test(String(value)) || "This field must be an integer";
  };

  // 👉 Decimal Validator
  const decimalValidator = (value) => {
    if (isEmpty(value)) return true;
    if (Array.isArray(value))
      return (
        value.every((val) => /^-{0,1}\d*\.{0,1}\d+$/.test(String(val))) ||
        "This field must be an decimal"
      );
    return /^-{0,1}\d*\.{0,1}\d+$/.test(String(value)) || "This field must be an decimal value";
  };

  // 👉 Regex Validator
  const regexValidator = (value, regex) => {
    if (isEmpty(value)) return true;
    let regeX = regex;
    if (typeof regeX === "string") regeX = new RegExp(regeX);
    if (Array.isArray(value)) return value.every((val) => regexValidator(val, regeX));

    return regeX.test(String(value)) || "The Regex field format is invalid";
  };

  // 👉 Alpha Validator
  const alphaValidator = (value) => {
    if (isEmpty(value)) return true;

    return (
      /^[A-Z]*$/i.test(String(value)) || "The Alpha field may only contain alphabetic characters"
    );
  };

  // 👉 URL Validator
  const urlValidator = (value) => {
    if (isEmpty(value)) return true;
    const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    return re.test(String(value)) || "URL is invalid";
  };

  // 👉 Length Validator
  const lengthValidator = (value, length) => {
    if (isEmpty(value)) return true;

    return (
      String(value).length === length ||
      `The Min Character field must be at least ${length} characters`
    );
  };

  // 👉 Alpha-dash Validator
  const alphaDashValidator = (value) => {
    if (isEmpty(value)) return true;
    const valueAsString = String(value);

    return /^[0-9A-Z_-]*$/i.test(valueAsString) || "All Character are not valid";
  };

  return {
    requiredValidator,
    emailValidator,
    passwordValidator,
    confirmedValidator,
    betweenValidator,
    integerValidator,
    decimalValidator,
    regexValidator,
    alphaValidator,
    urlValidator,
    lengthValidator,
    alphaDashValidator,
  };
};
