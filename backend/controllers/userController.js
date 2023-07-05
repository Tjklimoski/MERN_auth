// desc    Auth user and set token
// route   POST /api/users/auth
// access  Public
function authUser(req, res) {
  res.status(200).json({ message: "Auth User" });
}
