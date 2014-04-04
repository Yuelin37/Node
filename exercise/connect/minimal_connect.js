var connect = require('connect');
var app = connect();
var mymid = require('./mymid');

app.use(mymid.logger);
app.use(mymid.hello);
app.listen(3000);

