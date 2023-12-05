import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";

const Login: React.FC<{}> = () => {
  const router = useIonRouter();

  const [busy, setBusy] = useState(false);

  const login = (event: any) => {
    setBusy(true);
    event.preventDefault();
    setTimeout(() => {
      setBusy(false);
      router.push("/app", "root");
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading duration={0} message={"Logging in..."} isOpen={busy} />
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol
              size="12"
              sizeMd="8"
              sizeLg="6"
              sizeXl="4"
              className="ion-padding-top"
            >
              <div className="ion-text-center ion-margin-top">
                <img src="/assets/logo.png" alt="logo" width={"70%"} />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={login}>
                    <IonInput
                      label="Email"
                      placeholder="user@mail.com"
                      type="email"
                      labelPlacement="floating"
                      clearInput={true}
                      fill="outline"
                      required={true}
                    ></IonInput>
                    <IonInput
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      labelPlacement="floating"
                      fill="outline"
                      clearInput={true}
                      className="ion-margin-top"
                      required={true}
                    ></IonInput>
                    <IonButton
                      expand="block"
                      className="ion-margin-top"
                      type="submit"
                    >
                      Login
                      <IonIcon slot="end" icon={logInOutline} />
                    </IonButton>
                    <IonButton
                      expand="block"
                      className="ion-margin-top"
                      color={"secondary"}
                      routerLink="/register"
                      routerDirection="none"
                    >
                      Register
                      <IonIcon slot="end" icon={personCircleOutline} />
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
