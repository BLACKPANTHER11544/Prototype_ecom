// const errorHandler = (err, req, res, next) => {
//   const error = res.status === 200 ? 500 : res.status;
//   res.status(error);
//   res.json({
//     message: err.message,
//     stack: process.env.Node_ENV === "Production" ? null : err.stack,
//   });
//   next(err);
// };

// const notFound = (req, res, next) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// };

// export { notFound, errorHandler };

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
