import React from "react";
import { useState, useEffect } from "react";
import {
  IonContent,
  IonCard,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";

import TransactionDetails from "./TransactionDetails";

const WalletTransactions = () => {
  const transactionDetailsType = "allTransaction";
  const [data, setData] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const pushData = () => {
    console.log("5");
    const max = data.length + 10;
    const min = max - 10;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push(<TransactionDetails /> + i);
    }

    setData([...data, ...newData]);
  };
  const loadData = (ev) => {
    console.log("1");

    pushData();
    console.log("Loaded data");
    ev.target.complete();
    if (data.length > 1000) {
      setInfiniteDisabled(true);
    }

    console.log("2");
  };

  return (
    <div>
      <IonSegment value="allTransactions" selectOnFocus={true}>
        <IonSegmentButton value="allTransactions" color="primary" shape="round">
          <IonLabel>All Transactions</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="holdTransactions"
          color="primary"
          shape="round"
        >
          <IonLabel>Hold Transactions</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {transactionDetailsType == "allTransaction" && <TransactionDetails />}
      {transactionDetailsType == "holdTransaction" && <TransactionDetails />}
    </div>
  );
};

export default WalletTransactions;

/*
<IonInfiniteScroll
        onIonInfinite={(ev) => {
          loadData();
          setTimeout(() => ev.target.complete(), 1000);
        }}
        disabled={isInfiniteDisabled}
      >
        <IonInfiniteScrollContent
          loadingText="Loading..."
          loadingSpinner="bubbles"
        ></IonInfiniteScrollContent>
      </IonInfiniteScroll>

*/
