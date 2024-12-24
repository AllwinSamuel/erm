import { RouterMap } from "@slyte/router";

class ErmMap extends RouterMap {
	static path='../routes'
	map() {
        this.route("home",{path:'/'},() => {
            this.route("index",{path:'/dashboard'});
            this.route("details", {path: "details/:empNo"});
            this.route("profile");
        });
        this.route("sign");
        this.route("wildcard", {
            path: "/*"
        });
    }
}
export {ErmMap};
