import React from "react";
import {Kilometrage} from "../../interface/Kilometrage";
import {IonItem, IonLabel} from "@ionic/react";

export default class Test extends React.Component<{ kill:Kilometrage }, any>{
    constructor(props: { kill: Kilometrage }, context: any) {
        super(props, context);
    }

    render() {
        return(
            <IonItem >
                <div slot="start" className="dot dot-unread"></div>
                <IonLabel className="ion-text-wrap">
                    <h2>
                        {this.props.kill.date.toDateString()}
                        <span className="date">
        </span>
                    </h2>
                    <h3> id voiture {this.props.kill.idvoiture} kilometrage:{this.props.kill.debut} km debut et fin {this.props.kill.fin} km</h3>
                    io details anle tomobila
                </IonLabel>
            </IonItem>
        );
    }

}