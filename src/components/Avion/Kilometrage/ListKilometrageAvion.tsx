import {KilometrageAv} from "../../../interface/KilometrageAv";
import React from "react";
import {IonItem, IonLabel} from "@ionic/react";

interface ListDetailKillprops {
    kill:KilometrageAv,
}

export const ListKilometrageAvion:React.FC<ListDetailKillprops> = ({kill}) =>{
    return(
        <IonItem>
            <div slot="start" className="dot dot-unread"></div>
                     <IonLabel className="ion-text-wrap">
                     <h2>
                         {kill.date.toString()}
                     <span className="date">
                     </span>
                     </h2>
                     <h3> id avion {kill.idavion} kilometrage:{kill.debut} km debut et fin {kill.fin} km</h3>
                 io details anle avion
             </IonLabel>
        </IonItem>
    );
}