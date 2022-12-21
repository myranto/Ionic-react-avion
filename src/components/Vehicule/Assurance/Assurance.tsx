import ApiFetchData from "../../api/ApiFetchData";
import {IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export default class Assurance extends ApiFetchData{
    constructor(props: any) {
        super(props);
        this.method = 'GET';
        this.key = 'assurance';
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event:any) {
        event.preventDefault();
        const formData = event.target;
        const mois = formData.elements.namedItem('mois').value;
        this.url = 'http://localhost:8000/flotte/assurance/get-limit?mois='+mois;
        this.componentDidMount();
    }
    render() {
        if (this.state.data.length>0){
            window.location.replace("/avion/assurance/list");
        }
        return (
            <IonPage id="Vehicule-page">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Flotte Vehicule</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <form onSubmit={this.handleSubmit}>
                        <IonLabel >Voir les Vehicules expirer dans combien de mois? </IonLabel>
                        <IonInput name="mois" placeholder="entrer le nombre" type="number" />
                        <IonButton type="submit">voir</IonButton>
                    </form>
                </IonContent>
            </IonPage>
        );
    }
}