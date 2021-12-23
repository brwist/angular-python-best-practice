function requireHTTPS(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static("./dist/owner-project"));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/owner-project/'});
});
app.listen(process.env.PORT || 8000, function() {
  console.log('%s listening at %s', app.name, process.env.PORT);
});
