import { IonContent } from "@ionic/react";
import React from "react";
import { useState, useEffect } from "react";

import {
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";

const TransactionDetails = () => {
  const [data, setData] = useState([]);
  const loadData = 1;

  const [infinityScroll, setInfinityScroll] = useState(false);
  const handleRight = "";

  function increment() {
    const base = data.length;
    const newData = [];
    for (let i = base; i < base + 15; i++) {
      newData.push(`Item ${i}`);
    }
    data.length >= 1000 && setInfinityScroll((prevState) => !prevState);
    setData([...data, ...newData]);
  }

  useEffect(() => {
    increment();
  }, []);

  return (
    <>
      <IonList>
        {data.map((item, index) => (
          <IonItem key={`item_${index}`}>
            <IonGrid className="ion-padding-start ion-padding-end extra-padding ion-padding-bottom ion-margin-bottom">
              <IonRow className="ion-justify-content-between">
                <IonCol>{index + 1}</IonCol>
                <IonCol>25 Nov 2019</IonCol>
                <IonCol>59</IonCol>
                <IonCol>added by ConsultEase</IonCol>
                <IonCol>Calling Credits - Membership Plan</IonCol>
                <IonCol>CE#CE00005822</IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          increment();
          ev.target.complete();
        }}
      >
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText="Loading"
        ></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </>
  );
};

export default TransactionDetails;
