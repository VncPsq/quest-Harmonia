const sayWelcome = (req, res) => {
  console.info(req.query);
  const { name } = req.query;
  res.send(`Welcome to Wild Series, ${name} !`);
};

module.exports = { sayWelcome };
