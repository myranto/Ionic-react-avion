import ApiFetchData from "../../../api/ApiFetchData";
import {IonCol, IonGrid, IonPage, IonRow} from "@ionic/react";
import Entretient from "../../../../interface/Entretient";
import {ListEntretien} from "../ListEntretien";
import {ListDetailEntretien} from "./ListDetailEntretien";
import {DetailEntretienAv} from "../../../../interface/DetailEntretienAv";

export class DetailEntretien extends ApiFetchData{
    constructor(props:any) {
        super(props);
        this.method = 'GET';
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        this.url = 'https://tpws-production.up.railway.app/avion/entretien/detail?identretien='+id;
    }
    render() {
        return(
            <IonPage>
                <IonGrid>
                    <IonRow>
                        <IonCol>identretien</IonCol>
                        <IonCol>libelle</IonCol>
                        <IonCol>depense</IonCol>
                    </IonRow>
                    {this.state.data?.map((m:DetailEntretienAv)=> <ListDetailEntretien key={m.id}  detail={m}/>)}
                </IonGrid>
            </IonPage>
        );
    }
}