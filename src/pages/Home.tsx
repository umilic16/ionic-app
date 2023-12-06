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
import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSlide from "../components/CardTransactionsSlideComponent";
import { AccountStore } from "../data/AccountStore";

const Home: React.FC = () => {
	const cards = AccountStore.useState((s) => s.cards);

	const [pageTitle, setPageTitle] = useState(cards[0].description);

	const slidesRef = useRef(null);

	const changeSlide = async (e: any) => {
		setPageTitle(cards[e.activeIndex].description);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={"primary"}>
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>{pageTitle}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className="ion-padding">
				<IonGrid>
					<IonRow className="ion-justify-content-center">
						<IonCol className="ion-padding-top">
							<Swiper
								ref={slidesRef}
								slidesPerView={1}
								onSlideChange={(e) => changeSlide(e)}
							>
								{cards.map((card, index) => {
									return (
										<SwiperSlide
											key={`slide_${index}`}
											id={`slide_${index}`}
											style={{ display: "flex", flexDirection: "column" }}
										>
											<CardSlide key={index} card={{ ...card }} index={index} />
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

export default Home;
