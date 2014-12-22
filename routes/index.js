
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'edbotz - crafting code since 1998' });
};

exports.philly4 = function(req, res){
  res.render('4for4', { title: 'edbotz - 4 for 4' });
};

exports.resume = function(req, res){
  res.render('resume', { title: 'edbotz - resume' });
};

exports.xmas2012 = function(req, res){
  res.render('xmas-2012', { title: 'Merry Christmas & Happy New Year!', layout: false });
};

exports.xmas2013 = function(req, res){
  res.render('xmas-2013', { title: 'Merry Christmas & Happy New Year!', layout: false });
};

exports.xmas2014 = function(req, res){
  res.render('xmas-2014', { title: 'Merry Christmas & Happy New Year!', layout: false });
};
