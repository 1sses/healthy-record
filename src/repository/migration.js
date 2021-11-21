const { sequelize } = require('./models')

async function run () {
  await sequelize.sync({ force: true })
  console.log('DB sync finished')
}

run()
  .catch((error) => console.log(error))
  .finally(() => sequelize.close())
