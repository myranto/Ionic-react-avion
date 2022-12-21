import AssuranceVehicule from "../../../interface/AssuranceVehicule";
import {dateAssurance,datedebutAssu} from "../../../interface/AssuranceVehicule";
import React from "react";
import {IonCol, IonItem, IonRow} from "@ionic/react";
import AssuranceAv from "../../../interface/AssuranceAv";
interface ListDetailAssuranceAv {
    Assurancev:AssuranceAv;
}
export  const List:React.FC<ListDetailAssuranceAv> = ({Assurancev})=>{
    return (
        <IonRow >
            <IonCol>{Assurancev.idavion}</IonCol>
            <IonCol>{Assurancev.datedebut.toDateString()}</IonCol>
            <IonCol>{Assurancev.date_assurance.toDateString()}</IonCol>
            <IonCol>{Assurancev.a_payer}</IonCol>
        </IonRow>

    );
};