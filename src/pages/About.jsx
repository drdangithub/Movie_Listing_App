import { 
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCard} 
from '@ionic/react';

const About = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
        <IonCard>
            <IonCardHeader>
                <h1>Movie Listing App <br/>(Interview Project) </h1>
                <IonCardTitle><h1>VOCSO Technologies Pvt. Ltd.</h1></IonCardTitle>
                <IonCardSubtitle>By Rahul Dangi</IonCardSubtitle>
                <p>
                    This is my first time working with Ionic.<br/>
                    Thank You.
                </p>
            </IonCardHeader>
            <IonCardContent>  
            </IonCardContent>
        </IonCard>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default About;
