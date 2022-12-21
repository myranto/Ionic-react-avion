import {IonButton, IonCol, IonItem, IonRow} from "@ionic/react";
import React from "react";
import Entretient from "../../../interface/Entretient";


interface ListEntretienprops{
    entretien:Entretient;
}
export const ListEntretien:React.FC<ListEntretienprops> = ({entretien})=>{

    return (
        <IonRow >
            <IonItem routerLink={`/avion/enttretien/detail?id=${entretien.id}`} detail={false}>
                <IonCol>{entretien.id}</IonCol>
                <IonCol>{entretien.idavion}</IonCol>
                <IonCol>{entretien.date.toString()}</IonCol>
            </IonItem>
        </IonRow>
    );
};
