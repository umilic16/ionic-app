import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={"primary"}>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">UI goes here...</IonContent>
		</IonPage>
	);
};

export default Home;
