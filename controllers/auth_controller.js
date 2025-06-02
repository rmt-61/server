class AuthController {
  static login(req, res) {
    res.send('Login success!');
  }
  static register(req, res)  {
    res.json({
      message: "Register success"
    })
  }
}

module.exports = AuthController;
