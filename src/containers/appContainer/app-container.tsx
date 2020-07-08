import { FunctionComponent, useState } from "react";
import React from "react"
import { IonFab, IonFabButton, IonIcon, IonPage, IonModal, IonButton, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { add } from "ionicons/icons";

export const AppContainer:FunctionComponent = props=>{
    const [showModal, setShowModal] = useState(false);
    const { children } = props;

    return (
        <IonPage>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonTitle>Add transcation</IonTitle>
                        <IonButton slot="end">
                            <IonButton onClick={()=>setShowModal(false)}>Close</IonButton>
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
            </IonModal>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        {children}
        </IonPage>
    )
}