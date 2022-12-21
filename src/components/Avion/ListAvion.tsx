import {Avion} from "../../interface/Avion"
import {IonButton, IonCol, IonImg, IonItem, IonRow} from "@ionic/react";
import React from "react";


interface ListAvionprops{
    Fiara:Avion;
}
export const ListAvion:React.FC<ListAvionprops> = ({Fiara})=>{
    return (
        <IonRow >
            <IonItem routerLink={`/avion/list/detail?id=${Fiara.id}`} detail={false}>
                <IonCol>{Fiara.id}</IonCol>
                <IonCol>{Fiara.nom}</IonCol>
                <IonCol><IonImg src={`/img/${Fiara.photo}`} /></IonCol>
            </IonItem>
            <IonItem routerLink={`/avion/entretien?id=${Fiara.id}`}>
                voir entretien
            </IonItem>
        </IonRow>
    );
};
