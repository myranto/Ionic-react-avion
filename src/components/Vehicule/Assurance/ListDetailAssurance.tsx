import AssuranceVehicule from "../../../interface/AssuranceVehicule";
import {dateAssurance,datedebutAssu} from "../../../interface/AssuranceVehicule";
import React from "react";
import {IonCol, IonItem, IonRow} from "@ionic/react";
interface ListDetailAssurance {
    Assurancev:AssuranceVehicule;
}
const ListAssurance:React.FC<ListDetailAssurance> = ({Assurancev})=>{
    return (
        <IonRow >
                <IonCol>{Assurancev.idvoiture}</IonCol>
                <IonCol>{Assurancev.datedebut.toDateString()}</IonCol>
                <IonCol>{Assurancev.date_assurance.toDateString()}</IonCol>
                <IonCol>{Assurancev.a_payer}</IonCol>
        </IonRow>

    );
};
export default ListAssurance;