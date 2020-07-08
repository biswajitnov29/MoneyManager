import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cardOutline, cashOutline,bookmarkOutline } from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import { Savings } from './views/savings/savings';
import { AppContainer } from './containers/appContainer/app-container';

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Savings" exact={true} render={()=>(
            <AppContainer ><Savings/></AppContainer>
          )}/>
          <Route path="/Expenses" component={Tab2} exact={true} />
          <Route path="/Earnings" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/Savings" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Savings" href="/Savings">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>Savings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Expenses" href="/Expenses">
            <IonIcon icon={cardOutline} />
            <IonLabel>Expenses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Earnings" href="/Earnings">
            <IonIcon icon={cashOutline} />
            <IonLabel>Earnings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
