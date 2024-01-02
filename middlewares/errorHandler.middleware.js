export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 400;
  const message = error.message || "Bad Request!";
  res.status(statusCode).json({
    success: false,
    message,
  });
};
