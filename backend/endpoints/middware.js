const alunoEndpoints = require('./alunoEndPoints.js');

module.exports = (api, bodyParser, cors) => {
    api.use(bodyParser.json());
    api.use(bodyParser.urlencoded({extended: false}));
    api.use(cors());
    api.use(alunoEndpoints);
}