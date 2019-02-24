import * as Ice from "@lemon/ice";

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const express = require('express');

const debug = console.log;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
const start = (locator:Ice.Locator, inputOptions:PieOptions) => {
    const config:() => PieOptions = (locator.byKey("config")) || (():PieOptions => {return {} as PieOptions});
    const options:PieOptions = Object.assign({}, config(), inputOptions);

    var app = express();
    app.use(logger('dev'));
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use((req, res, next) => {
        req.custom = {
            locator,
        };
        next();
    });
    // app.use('/api', apiHandler);
    // app.use('/', routes);
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        next(err);
    });
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.json({
                message: err.message,
                error: err
            });
        });
    }
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: {}
        });
    });
    /**
     * Get port from environment and store in Express.
     */
    var port = options.port || 3000;
    app.set('port', port);
    /**
     * Create HTTP server.
     */
    var server = http.createServer(app);
    /**
     * Listen on provided port, on all network interfaces.
     */
    if(options.shouldListen === undefined || options.shouldListen) { server.listen(port); }

    server.on('error', console.error);
    server.on('listening', onListening(server));
    return app;
};
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = (server) => () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
};
export class Server {
    constructor(dataProvider:Ice.Locator, options?:PieOptions) {
        return start(dataProvider, options);
    }
}

export class PieOptions {
    port?: number;
    shouldListen?: boolean;
}

export default Server;
