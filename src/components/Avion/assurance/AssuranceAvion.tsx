import ApiFetchData from "../../api/ApiFetchData";
import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonLabel,
    IonPage,
    IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar
} from "@ionic/react";

export default class AssuranceAvion extends ApiFetchData{
    public i =0;
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
        this.url = 'https://tpws-production.up.railway.app/flotte/assurance/get-limit?mois='+mois;
        this.i=1;
        this.componentDidMount();
    }
    render() {

        if (this.state.data.length>0){
            window.location.replace("/flotte/assurance/list");
        }else if(this.i===1){
                alert("there is not assurance");
        }
        return (
            <IonPage id="Vehicule-page">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Flotte Avion</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <form onSubmit={this.handleSubmit}>
                        <IonLabel >Voir les Vehicules expirer dans combien de mois </IonLabel>
                        <IonSelect name="mois" placeholder="choisir intervalle de mois">
                            <IonSelectOption value="1" > 1 mois</IonSelectOption>
                            <IonSelectOption value="3" >3 mois</IonSelectOption>
                        </IonSelect>
                        <IonButton  type="submit">voir</IonButton>
                    </form>
                </IonContent>
            </IonPage>
        );
    }
}