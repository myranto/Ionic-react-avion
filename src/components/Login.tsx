//ito le tena izy
import ApiFetchData from "./api/ApiFetchData";
import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Admin} from "../interface/Admin";
import {ifError} from "assert";
import {Redirect} from "react-router-dom";

export default class Login extends ApiFetchData{

    constructor(props:any) {
        super(props);
        this.method = 'POST';
        this.key = 'user1';
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        if (this.url!==''){
            console.log(this.url);
            super.componentDidMount();
        }
    }

    handleSubmit(event:any) {
        event.preventDefault();
        const formData = event.target;
        const mail = formData.elements.namedItem('username').value;
        const password = formData.elements.namedItem('password').value;
        const val = {
            "email": mail,
            "pwd": password
        };
        this.obj = val;
        this.url = 'https://tpws-production.up.railway.app/flotte/Admin/login';
        this.componentDidMount();
    }

    render() {
        const  username = null;
          const  password  = null;
          let error = '';
        console.log(this.state.data)
        if (typeof this.state.data==="string")
            error = this.state.data;
          else if (this.state.data.hasOwnProperty("id")){
              alert('user connecter...veuillez cliquer l\'avioon')
              window.location.replace("/avion/list/");
          }

        return(
            <IonPage id="Vehicule-page">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Flotte Avion</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <form onSubmit={this.handleSubmit}>
                        <IonInput name="username" value='user@gmail.com'  type="text" placeholder="email" />
                        <IonInput name="password" value='mmm'  type="password" placeholder="Password" />
                        <IonLabel>{error}</IonLabel>
                        <IonButton type="submit">Login</IonButton>
                    </form>
                </IonContent>
            </IonPage>
        );
    }
}