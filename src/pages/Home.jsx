import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InfinityScroll from '../components/InfinityScroll';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <InfinityScroll />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
