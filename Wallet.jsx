import React from "react";
import { useState, useEffect } from "react";

import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonCardTitle,
  IonCardSubtitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";

import WalletTransactions from "./WalletTransactions";
import "./Wallet.css";

const Wallet = ({ props }) => {
  const availableBalance = 0; //props.availableBalance;
  const holdBalance = 0;

  return (
    <IonContent>
      <div>
        {/*Available Balance component to be written*/}
        <IonCard className="ion-padding">
          <IonGrid>
            <IonCol size="12">
              <IonRow className="wallet">
                <IonCol className="totalBalance ion-padding ">
                  <IonCardSubtitle className="">
                    Total Available Balance
                  </IonCardSubtitle>
                  <IonCardTitle>{availableBalance}</IonCardTitle>
                </IonCol>
                <IonCol className="addWithdraw-Container">
                  <IonButton className="addMoney" shape="round" color="primary">
                    <IonIcon icon={add} />
                    Add Money
                  </IonButton>

                  <IonButton className="withdraw" shape="round" color="primary">
                    Withdraw
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow className="wallet">
                <IonCol className="">
                  <IonCardSubtitle>Available Balance</IonCardSubtitle>
                  <IonCardTitle>{availableBalance}</IonCardTitle>
                </IonCol>
                <IonCol>
                  <IonCardSubtitle>Hold Balance</IonCardSubtitle>
                  <IonCardTitle>{holdBalance}</IonCardTitle>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCard>

        <IonList>
          <WalletTransactions />
        </IonList>
      </div>
    </IonContent>
  );
};

export default Wallet;

/*

import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList
} from '@ionic/react';
import Requests from './Requests';


function InfinityScroll() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  function generateItems() {
    let newItems = [];
      for (let i = 0; i < 8; i++) {
        newItems.push([`Item ${1 + items.length + i}`]);
      }
    //console.log(newItems,"before");
    setItems([...items, ...newItems]);
    //console.log(items,"*****items after******")
  };

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <div key={index}>
            <Requests index = {index} item={item}/>
          </div>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 3000);
        }}
      >
        <IonInfiniteScrollContent loadingText="Loading, Please Wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default InfinityScroll;





/*
<ion-card key={index}>
            <ion-card-header>
              <ion-card-title>Movie Title{index}{item}</ion-card-title>
              <ion-card-subtitle>Year {}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <img 
                src={'https://picsum.photos/80/80?random=' + index} 
                alt="Img Not available for this movie on OMDb" 
                width="100%"/>
            </ion-card-content>
          </ion-card>
*/
