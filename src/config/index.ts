export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL,
});
