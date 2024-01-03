export const customError = (statusCode, errorMessage) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = errorMessage;
  throw error;
};
