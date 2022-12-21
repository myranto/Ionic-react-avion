import ApiFetchData from "../api/ApiFetchData";
import {useParams} from "react-router-dom";
import {IonItem, IonList, IonPage} from "@ionic/react";
import {Kilometrage} from "../../interface/Kilometrage";
import ListDetail from "./ListDetail";
import {Admin} from "../../interface/Admin";

export default class DetailVehicule extends ApiFetchData{
    constructor(props:any) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const user1 = localStorage.getItem("user1");
        let user = (user1!=null)?JSON.parse(user1):null;
        user = user as Admin;
        this.key = "error";
        this.url = 'http://localhost:8000/flotte/kilometrage/'+id+'?token='+user.token+'&id='+user.id;
        this.method = 'GET';
    }
    public i :number=0;


    render() {
        let count = 0;

        if (this.state.data.hasOwnProperty("message"))
        {
            if (localStorage.getItem("user1")!=null){
                localStorage.removeItem("user1");
            }
            window.location.replace("/vehicule/login");
        }
        let value:Kilometrage[] = this.state.data as Kilometrage[];
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
                                    <ListDetail kill={item} key={item.id} />
                            )
                        )
                    }
                </IonList>
            </IonPage>
            );
    }
}