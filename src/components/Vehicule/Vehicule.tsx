import ApiFetchData from "../api/ApiFetchData";
import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Voiture} from "../../interface/Voiture";
import ListVehicul from "./ListVehicul";
export default class Vehicule extends ApiFetchData{
    constructor(props:any) {
        super(props);
        this.method = 'GET';
        this.url = 'http://localhost:8000/flotte/voiture/get-all/';
    }

    render() {
        return (
            <IonGrid>
                <IonRow>
                    <IonCol>id</IonCol>
                    <IonCol>nom</IonCol>
                    <IonCol>marque</IonCol>
                </IonRow>
                {this.state.data?.map((m:Voiture)=> <ListVehicul key={m.id} Vehicule={m} />)}
            </IonGrid>
            );
    }

}