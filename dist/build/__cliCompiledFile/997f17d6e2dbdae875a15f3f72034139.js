import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "ErmApp": function() {
        return ErmApp;
    }
});

import {ErmApp} from "./app.js";

var app = new ErmApp({
    performance : true,
    debug : true
});

export {app};
