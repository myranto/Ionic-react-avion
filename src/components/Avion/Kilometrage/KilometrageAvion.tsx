import ApiFetchData from "../../api/ApiFetchData";
import {Kilometrage} from "../../../interface/Kilometrage";
import {IonList, IonPage} from "@ionic/react";
import ListDetail from "../../Vehicule/ListDetail";
import {KilometrageAv} from "../../../interface/KilometrageAv";
import {ListKilometrageAvion} from "./ListKilometrageAvion";
import {Admin} from "../../../interface/Admin";

export class KilometrageAvion extends ApiFetchData{
    constructor(props:any) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        this.key = "error";
        const user1 = localStorage.getItem("user1");
        if (user1==null)
            window.location.replace("/avion/login");

        let user = (user1!=null)?JSON.parse(user1):null;
        user = user as Admin;
        this.url = 'https://tpws-production.up.railway.app/flotte/kilometrage/'+id+'?token='+user.token+'&id='+user.id;
        this.method = 'GET';
    }
    public i :number=0;

    render() {
        let count = 0;
        if (typeof this.state.data.data==="string")
        {
            if (localStorage.getItem("user1")!=null){
                localStorage.removeItem("user1");
            }
            window.location.replace("/avion/login");
        }
        let value:KilometrageAv[] = this.state.data as KilometrageAv[];
        value?.forEach(v=>{
            v.id = count;
            v.date = new Date(v.date);
            count++;
        })
        return (
            <IonPage id="Vehicule-page">
                <IonList>
                    {
                        value?.map(
                            (item) => (
                                <ListKilometrageAvion kill={item} key={item.id} />
                            )
                        )
                    }
                </IonList>
            </IonPage>
        );
    }
}