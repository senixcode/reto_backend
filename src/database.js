import mongosse from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI
mongosse.connect(MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex:true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error))