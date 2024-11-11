import session from 'express-session';
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use((req, res, next) => {
  //req.session object elérhető, - létrejövő objektum
  req.session.viewcount = 18;
});