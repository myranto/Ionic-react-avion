import React from "react";
import {Admin} from "../../../interface/Admin";
import AssuranceVehicule from "../../../interface/AssuranceVehicule";
import {IonCol, IonGrid, IonPage, IonRow} from "@ionic/react";
import ListDetailAssurance from "./ListDetailAssurance";
import {Kilometrage} from "../../../interface/Kilometrage";


export default class DetailAssurance extends React.Component<{}, {list:AssuranceVehicule[]}>{


    constructor(props: any) {
        super(props);
        const assure = localStorage.getItem("assurance");
        const val = (assure!=null)?JSON.parse(assure):null;
        this.state = {list:val as AssuranceVehicule[]};
    }
    render() {
        let value:AssuranceVehicule[] = this.state.list as AssuranceVehicule[];
        value.forEach(v=>{
            v.date_assurance = new Date(v.date_assurance);
            v.datedebut = new Date(v.datedebut);
        })
        return (
            <IonPage id="Vehicule-page">
                <IonGrid>
                    <IonRow>
                        <IonCol>idvoiture</IonCol>
                        <IonCol>date debut</IonCol>
                        <IonCol>date fin</IonCol>
                        <IonCol>a payer</IonCol>
                    </IonRow>
                    {this.state.list.map((m:AssuranceVehicule)=> <ListDetailAssurance key={m.id} Assurancev={m} />)}

                </IonGrid>
            </IonPage>
        );
    }
}