
import React from "react";
import {IonItem, IonLabel, IonNote} from "@ionic/react";
import {Kilometrage} from "../../interface/Kilometrage";

interface ListDetailprops {
    kill:Kilometrage,
}
const listDetail:React.FC<ListDetailprops> = ({kill}) =>{
    return(
        <IonItem>
            <div slot="start" className="dot dot-unread"></div>
            <IonLabel className="ion-text-wrap">
                <h2>
                    {kill.date.toString()}
                    <span className="date">
        </span>
                </h2>
                <h3> id voiture {kill.idvoiture} kilometrage:{kill.debut} km debut et fin {kill.fin} km</h3>
                io details anle tomobila
            </IonLabel>
        </IonItem>
    );
}
export default listDetail;