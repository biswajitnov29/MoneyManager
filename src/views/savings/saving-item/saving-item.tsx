import React from "react"
import { IonItem, IonAvatar, IonIcon, IonLabel } from "@ionic/react"

export const SavingsItem:React.FC=()=>{

    return (
        <IonItem>
            <IonAvatar>
                <IonIcon name="wallet-outline" size="large"></IonIcon>
            </IonAvatar>
          <IonLabel>
            <h2>Finn</h2>
            <h3>I'm a big deal</h3>
            <p>Listen, I've had a pretty messed up day...</p>
          </IonLabel>
        </IonItem>
    )
}