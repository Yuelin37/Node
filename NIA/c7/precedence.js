var connect = require('connect');
connect()
.use(logger)
.use(restrictFileAccess)
.use(serveStaticFiles)
.use(hello);