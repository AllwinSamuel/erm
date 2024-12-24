import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Db": function() {
        return Db;
    },

    "RESTConnector": function() {
        return RESTConnector;
    },

    "RESTSerializer": function() {
        return RESTSerializer;
    }
});

import { Db,RESTConnector,RESTSerializer } from "/node_modules/@slyte/data/index.js";

class ErmDb extends Db{
    _() {
        _;
    }
}

ErmDb.Connector = RESTConnector;
ErmDb.Serializer = RESTSerializer;

ErmDb.register({
    hash: "db_erm_app_0"
});

let Schema = ErmDb.Schema;
export {ErmDb,Schema};
