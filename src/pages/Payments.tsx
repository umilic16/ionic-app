import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";

const Payments: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Payments</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">UI goes here...</IonContent>
		</IonPage>
	);
};

export default Payments;
