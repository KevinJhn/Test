// setup database here, change the values to suit your environment
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "712354",
  DB: "db_binar_ch8",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};