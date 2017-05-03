var bodyParser = require('body-parser');

var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyBJ0AS4e2VWVBIjgbLcXFIt-VGkL64bt9s',
  cx: '013695641878920410177:yosxjvgbtrw'
});

module.exports = function (app) {
  var router = app.loopback.Router();
  router.get('/search', function (req, res) {
    console.log(req.query.search);
    googleSearch.build({
      q: req.query.search,
      start: 5,
      output: "xml_no_dtd",
      oe: "UTF-8",
      ie: "UTF-8",
      num: 10,
      ulang: "en",
      siteSearch: "http://osscube.com" // Restricts results to URLs from a specified site 
    }, function (error, response) {
      res.send(response);
    });
  });
  app.use(router);
}
