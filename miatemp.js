function hello(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);
  
  // Add this log statement to see calls
  console.log('=== NodeMCU ' + name + ' ===');
  
  // this sends back a JSON response string
  res.json(hello);
}
