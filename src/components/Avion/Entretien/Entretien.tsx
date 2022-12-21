
import {IonCol, IonGrid, IonLabel, IonPage, IonRow} from "@ionic/react";
import ApiFetchData from "../../api/ApiFetchData";
import {KilometrageAv} from "../../../interface/KilometrageAv";
import Entretient from "../../../interface/Entretient";
import {ListEntretien} from "./ListEntretien";

export class Entretien extends ApiFetchData{
    constructor(props:any) {
        super(props);
        this.method = 'GET';
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        this.url = 'https://tpws-production.up.railway.app/avion/entretien/'+id;
    }
    render() {
        let error = '';
        if (typeof this.state.data==="string"){
            error = this.state.data;
            return (
              <IonLabel>{error}</IonLabel>
            );
        }
        else{
            let value:Entretient[] = this.state.data as Entretient[];
            value?.forEach(v=>{
                v.date = new Date(v.date);
            })

        return (
            <IonPage>
                <IonGrid>
                    <IonRow>
                        <IonCol>id_entretient</IonCol>
                        <IonCol>idavion</IonCol>
                        <IonCol>Date</IonCol>
                    </IonRow>
                    {this.state.data?.map((m:Entretient)=> <ListEntretien key={m.id}  entretien={m}/>)}
                </IonGrid>
            </IonPage>
        );
    }
    }
}