import React from "react";
import AssuranceVehicule from "../../../interface/AssuranceVehicule";
import {IonCol, IonGrid, IonLabel, IonPage, IonRow} from "@ionic/react";
import AssuranceAv from "../../../interface/AssuranceAv";
import {List} from "./List";


export default class DetailAssuranceAv extends React.Component<{}, {list:AssuranceAv[],error:string}>{


    constructor(props: any) {
        super(props);
        this.state={
            list:[],
            error:''
        }

    }
    render() {

        const assure = localStorage.getItem("assurance");
            const val = (assure!=null)?JSON.parse(assure):null;
            this.state = {list:val as AssuranceAv[],error:''};

        let value:AssuranceAv[] = this.state.list as AssuranceAv[];
        if (this.state.error==='') {
            value.forEach(v => {
                v.date_assurance = new Date(v.date_assurance);
                v.datedebut = new Date(v.datedebut);
            })
            return (
                <IonPage id="Vehicule-page">
                    <IonGrid>
                        <IonRow>
                            <IonCol>idavion</IonCol>
                            <IonCol>date debut</IonCol>
                            <IonCol>date fin</IonCol>
                            <IonCol>a payer</IonCol>
                        </IonRow>
                        {this.state.list?.map((m: AssuranceAv) => <List key={m.id} Assurancev={m}/>)}

                    </IonGrid>
                </IonPage>
            );
        }
    }
}