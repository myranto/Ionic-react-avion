import ApiFetchData from "../api/ApiFetchData";
import {IonCol, IonGrid, IonPage, IonRow} from "@ionic/react";
import {ListAvion} from "./ListAvion";
import {Avion} from "../../interface/Avion";

export class Avions extends ApiFetchData{
    constructor(props:any) {
        super(props);
        this.method = 'GET';
        this.url = 'https://tpws-production.up.railway.app/flotte/avion/get-all/';
    }
    render() {
        return (
            <IonPage>
            <IonGrid>
                <IonRow>
                    <IonCol>id</IonCol>
                    <IonCol>nom</IonCol>
                    <IonCol>Photo</IonCol>
                    <IonCol>action</IonCol>
                </IonRow>
                {this.state.data?.map((m:Avion)=> <ListAvion key={m.id}  Fiara={m}/>)}
            </IonGrid>
            </IonPage>
        );
    }
}