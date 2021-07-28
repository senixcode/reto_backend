import mongosse from 'mongoose'

mongosse.connect('mongodb://localhost/molichamb',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex:true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error))