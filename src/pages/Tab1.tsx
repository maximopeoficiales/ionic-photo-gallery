import { OverlayEventDetail } from '@ionic/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const logResult = (result: OverlayEventDetail) => {
    console.log(JSON.stringify(result, null, 2));
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid fixed={true}>
          <IonRow >
            <IonCol className='text-center bg-slate-500 text-white'>
              hola
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
