
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'edbotz - crafting code since 1998' })
};

exports.philly4 = function(req, res){
  res.render('4for4', { title: 'edbotz - 4 for 4' })
};
