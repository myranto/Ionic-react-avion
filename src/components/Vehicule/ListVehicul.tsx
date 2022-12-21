import React from "react";
import {IonCol, IonItem, IonLabel, IonNote, IonRow} from "@ionic/react";
import {Voiture} from "../../interface/Voiture";
interface ListVehiculprops {
    Vehicule:Voiture;
}
const ListVehicul:React.FC<ListVehiculprops> = ({Vehicule})=>{
    return (
        <IonRow >
            <IonItem routerLink={`/vehicule/list/detail?id=${Vehicule.id}`} detail={false}>
            <IonCol>{Vehicule.id}</IonCol>
            <IonCol>{Vehicule.nom}</IonCol>
            <IonCol>{Vehicule.idmarque}</IonCol>
            </IonItem>
        </IonRow>

    );
};
export default ListVehicul;