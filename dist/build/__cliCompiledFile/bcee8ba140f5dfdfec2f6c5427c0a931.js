import {Home as Home} from '/router/routes/home.js';
import {Index as Index} from '/router/routes/home/index.js';
import {Details as Details} from '/router/routes/home/details.js';
import {Profile as Profile} from '/router/routes/home/profile.js';
import {SendMail as SendMail} from '/router/routes/home/sendMail.js';
import {Inbox as Inbox} from '/router/routes/home/inbox.js';
import {Sign as Sign} from '/router/routes/sign.js';
import {Wildcard as Wildcard} from '/router/routes/wildcard.js';

import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "RouterMap": function() {
        return RouterMap;
    }
});

import { RouterMap } from "/node_modules/@slyte/router/index.js";

class ErmMap extends RouterMap {
    map() {
        this.route("home",{
            path:'/',
            handler: Home
        },() => {
            this.route("index", {
                path:'/dashboard',
                handler: Index
            });
            this.route("details", {
                path: "details/:empNo",
                handler: Details
            });
            this.route("profile", {
                handler: Profile
            });
            this.route("sendMail", {
                handler: SendMail
            });
            this.route("inbox", {
                handler: Inbox
            });
        });
        this.route("sign", {
            handler: Sign
        });
        this.route("wildcard", {
            path: "/*",
            handler: Wildcard
        });
    }

    _() {
        _;
    }
}
ErmMap.path = '../routes';
export {ErmMap};
