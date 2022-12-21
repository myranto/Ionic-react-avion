import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ListVehicule from "./pages/Vehicule/ListVehicule";
import DetailAssurance from "./components/Vehicule/Assurance/DetailAssurance";
import Assurance from "./components/Vehicule/Assurance/Assurance";
import AuthentificationLogin from "./components/security/AuthentificationLogin";
import DetailVehicule from "./components/Vehicule/DetailVehicule";
import Login from "./components/Login";
import {Avions} from "./components/Avion/Avion";
import {KilometrageAvion} from "./components/Avion/Kilometrage/KilometrageAvion";
import AssuranceAvion from "./components/Avion/assurance/AssuranceAvion";
import DetailAssuranceAv from "./components/Avion/assurance/DetailAssuranceAv";
import {Entretien} from "./components/Avion/Entretien/Entretien";
import {DetailEntretien} from "./components/Avion/Entretien/DetailEntretien/DetailEntretien";
import {Upload} from "./components/Avion/img/Upload";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/avion/list" />
          </Route>
          <Route path="/img/upload" >
            <Upload />
          </Route>
          <Route path="/avion/list" exact={true}>
            <Avions />
          </Route>
          <Route path="/avion/list/detail">
            <KilometrageAvion />
          </Route>
          <Route path="/flotte/assurance/list"  exact={true}>
            <DetailAssuranceAv />
          </Route>
          <Route path="/avion/entretien" exact={true} >
            <Entretien />
          </Route>
          <Route path="/avion/enttretien/detail" exact={true} >
            <DetailEntretien />
          </Route>
          <Route path="/vehicule/list/" exact={true}>
            <ListVehicule />
          </Route>
          <Route path="/vehicule/assurance/list" exact={true}>
            <DetailAssurance />
          </Route>
          <Route path="/vehicule/assurance/formulaire" exact={true}>
            <AssuranceAvion />
          </Route>
          <AuthentificationLogin path="/vehicule/list/detail" >
            <DetailVehicule />
          </AuthentificationLogin>
          <Route path="/avion/login" >
            <Login />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/vehicule/assurance/formulaire">
            <IonIcon icon={triangle} />
            <IonLabel>Assurance</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/img/upload">
            <IonIcon icon={ellipse} />
            <IonLabel>Upload</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>tab</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
