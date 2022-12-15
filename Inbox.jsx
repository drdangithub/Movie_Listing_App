import React from "react";
import { useState, useEffect } from "react";

import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonButtons,
  IonButton,
} from "@ionic/react";
import {
  call,
  caretForward,
  caretForwardCircle,
  ellipsisVertical,
} from "ionicons/icons";

import "./Inbox.css";
//import Header from "../components/Header";

const Inbox = () => {
  const [data, setData] = useState([]);
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {data.map((item, index) => {
            return (
              <IonItem key={`item_${index}`}>
                <IonGrid>
                  <IonRow className="inboxItem">
                    <IonCol>
                      <IonIcon icon={call}></IonIcon>
                    </IonCol>

                    <IonCol>25 Nov 2019 11:05AM</IonCol>

                    <IonCol>Andrea</IonCol>

                    <IonCol> Consulting</IonCol>

                    <IonCol>
                      <IonIcon icon={caretForwardCircle}></IonIcon>
                      <p>36:07</p>
                    </IonCol>

                    <IonCol>
                      <p>+2000</p>
                    </IonCol>

                    <IonCol>
                      <p>459820</p>
                    </IonCol>

                    <IonCol>
                      <IonButtons className="ion-flex-direction-row">
                        <IonButton onClick={handleRight}>
                          <IonIcon size="small" icon={ellipsisVertical} />
                        </IonButton>
                      </IonButtons>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            );
          })}
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
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
