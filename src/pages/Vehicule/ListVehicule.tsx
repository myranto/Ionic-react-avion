import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import Vehicule from "../../components/Vehicule/Vehicule";

export default class ListVehicule extends React.Component<{}, {}>{
        constructor(props:any) {
            super(props);
            this.state = {
                message:'',
                data:[],
                error:''
            }
        }
        render() {
            return (
                <IonPage id="Vehicule-page">
                    <IonHeader>
                        <IonTitle>Flotte Vehicule</IonTitle>
                    </IonHeader>
                    <Vehicule />
                </IonPage>
            );
        }
}