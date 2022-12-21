import {DetailEntretienAv} from "../../../../interface/DetailEntretienAv";
import {IonCol, IonItem, IonRow} from "@ionic/react";
import React from "react";

interface ListDetailEntretienprops {
    detail:DetailEntretienAv
}
export const ListDetailEntretien:React.FC<ListDetailEntretienprops> = ({detail}) =>{
    return(
        <IonRow >
            <IonItem routerLink={`/avion/enttretien/detail?id=${detail.id}`} detail={false}>
                <IonCol>{detail.identretien}</IonCol>
                <IonCol>{detail.libelle}</IonCol>
                <IonCol>{detail.depense} Ar</IonCol>
            </IonItem>
        </IonRow>
    );
}