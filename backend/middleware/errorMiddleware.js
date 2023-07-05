//turning the express default error middleware that generates HTML into our own to generate JSON.
//For when any route is not found on the server
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
