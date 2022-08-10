module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab880c0b62909a1f10c1969d54c33a2f'),
  },
});
