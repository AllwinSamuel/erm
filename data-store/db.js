import { Db,RESTConnector,RESTSerializer } from "@slyte/data";

class ErmDb extends Db{
    static Connector = RESTConnector;
    static Serializer = RESTSerializer;
}

let Schema = ErmDb.Schema;
export {ErmDb,Schema};
