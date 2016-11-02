import Login from '../models/login';

export function getSomething(req, res) {
  return res.status(200).end();

  export function signIn(req, res) {
  Login.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}
}
