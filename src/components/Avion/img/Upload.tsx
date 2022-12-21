import ApiFetchData from "../../api/ApiFetchData";
import {IonPage} from "@ionic/react";

export class Upload extends ApiFetchData{

    constructor(props:any) {
        super(props);
        this.method = 'POST';
        this.key = 'upload';
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event:any) {
        event.preventDefault();
        // const file = event.target.files;
        const formData = event.target;
        let file = formData.elements.namedItem('file');
        const val = {
            "email": file
        };
        alert(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        this.obj = val;
        // this.url = 'http://localhost:8000/flotte/avion/files';
        // this.componentDidMount();
    }
    render() {
        return (
            <IonPage>
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="file" name='file' />
                <input type="submit" value="valider"/>
                </form>
            </div>
            </IonPage>
        );
    }
}