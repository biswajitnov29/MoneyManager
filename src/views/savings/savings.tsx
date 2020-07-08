import { IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader } from "@ionic/react"
import React from "react"
import { SavingsItem } from "./saving-item/saving-item"

export const Savings:React.FC=()=>{
    return (
        <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Savings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList>
      <IonListHeader>
          Current month savings
        </IonListHeader>

        <SavingsItem></SavingsItem>
        </IonList>
      </IonContent>
    </>
        
    )
}