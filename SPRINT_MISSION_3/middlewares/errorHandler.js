export function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (res.headersSent) return next(err);

  const status = err.status || 500;
  const message = err.message || '서버 오류 발생';

  res.status(status).json({ message });
}
