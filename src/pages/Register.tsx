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
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import {
	checkmarkDone,
	logInOutline,
	personCircleOutline,
} from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";

const Register: React.FC = () => {
	const history = useHistory();

	const register = (event: any) => {
		event.preventDefault();
		history.push("/");
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={"primary"}>
					<IonTitle>Register</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
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
								<img src={Logo} alt="logo" width={"70%"} />
							</div>
						</IonCol>
					</IonRow>
					<IonRow className="ion-justify-content-center">
						<IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
							<IonCard>
								<IonCardContent>
									<form onSubmit={register}>
										<IonInput
											label="Username"
											placeholder="Enter your username"
											labelPlacement="floating"
											clearInput={true}
											fill="outline"
											required={true}
										></IonInput>
										<IonInput
											label="Email"
											placeholder="user@mail.com"
											type="email"
											labelPlacement="floating"
											clearInput={true}
											fill="outline"
											class="ion-margin-top"
											required={true}
										></IonInput>
										<IonInput
											label="Password"
											placeholder="Enter your password"
											type="password"
											labelPlacement="floating"
											fill="outline"
											clearInput={true}
											class="ion-margin-top"
											required={true}
										></IonInput>
										<IonInput
											label="Repeat Password"
											placeholder="Repeat your password"
											type="password"
											labelPlacement="floating"
											fill="outline"
											clearInput={true}
											class="ion-margin-top"
											required={true}
										></IonInput>
										<IonButton
											expand="block"
											className="ion-margin-top"
											color={"secondary"}
											type="submit"
										>
											Register
											<IonIcon slot="end" icon={checkmarkDone} />
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

export default Register;
