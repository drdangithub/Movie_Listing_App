import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InfinityScroll from '../components/InfinityScroll';

const Popular = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popular</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Popular</IonTitle>
          </IonToolbar>
        </IonHeader>

        <InfinityScroll />

      </IonContent>
    </IonPage>
  );
};

export default Popular;
