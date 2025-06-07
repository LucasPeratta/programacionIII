const home = (req, res) => {
  res.render("index", { user: req.user || null });
};

module.exports = { home };
