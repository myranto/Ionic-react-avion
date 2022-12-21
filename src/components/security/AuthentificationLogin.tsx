import {Route, RouteProps} from "react-router-dom";
import {OmitNative} from "react-router";
import Login from "../Login";
import {IonLabel} from "@ionic/react";

export default class AuthentificationLogin extends Route{


    Authenticate() {
            const user1 = localStorage.getItem("user1");
            const val = (user1!=null)?JSON.parse(user1):null;
            if ((val==null) || (!val.hasOwnProperty("id"))) {
               throw 'not log in again';
            }
    }
    render() {
        try {
            this.Authenticate();
        }catch (e) {
            return (
                <Login />
            );
        }
        return super.render();
    }

}