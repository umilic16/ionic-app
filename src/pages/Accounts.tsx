import {
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "@ionic/react/css/ionic-swiper.css";
import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AccountComponent from "../components/AccountComponent";
import { AccountStore } from "../data/AccountStore";
import "./Accounts.css";

const Accounts: React.FC = () => {
	const accounts = AccountStore.useState((s) => s.accounts);
	const slidesRef = useRef(null);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={"primary"}>
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Accounts</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className="ion-padding">
				<IonGrid className="full-height">
					<IonRow className="ion-justify-content-center full-height">
						<IonCol className="ion-padding-top" size="12">
							<Swiper ref={slidesRef} slidesPerView={1} className="full-height">
								{accounts.map((account, index) => {
									return (
										<SwiperSlide
											key={`slide_${index}`}
											id={`slide_${index}`}
											style={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "flex-start",
												height: "100%",
											}}
										>
											<AccountComponent key={index} {...account} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};
export default Accounts;
