import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonRouterOutlet,
	IonSplitPane,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import {
	cardOutline,
	cashOutline,
	homeOutline,
	logOutOutline,
	walletOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Accounts from "./Accounts";
import Cards from "./Cards";
import Home from "./Home";
import Payments from "./Payments";

const Menu: React.FC = () => {
	const pages = [
		{ name: "Home", path: "/app/home", icon: homeOutline, component: Home },
		{
			name: "Accounts",
			path: "/app/accounts",
			icon: walletOutline,
			component: Accounts,
		},
		{
			name: "Payments",
			path: "/app/payments",
			icon: cashOutline,
			component: Payments,
		},
		{ name: "Cards", path: "/app/cards", icon: cardOutline, component: Cards },
	];
	return (
		<IonPage>
			<IonSplitPane contentId="main">
				<IonMenu contentId="main">
					<IonHeader>
						<IonToolbar color={"primary"}>
							<IonTitle>Menu</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonContent>
						{pages.map((item, index) => (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									detail={true}
									routerLink={item.path}
									routerDirection="none"
									lines="none"
								>
									<IonIcon slot="start" icon={item.icon} />
									{item.name}
								</IonItem>
							</IonMenuToggle>
						))}
						<IonMenuToggle autoHide={false}>
							<IonButton
								expand="block"
								className="ion-padding-horizontal ion-margin-top"
								routerLink="/"
								routerDirection="root"
							>
								<IonIcon slot="start" icon={logOutOutline} />
								Logout
							</IonButton>
						</IonMenuToggle>
					</IonContent>
				</IonMenu>
				<IonRouterOutlet id="main">
					{pages.map((item, index) => (
						<Route
							key={index}
							exact
							path={item.path}
							component={item.component}
						/>
					))}
					<Route exact path="/app">
						<Redirect to="/app/home" />
					</Route>
				</IonRouterOutlet>
			</IonSplitPane>
		</IonPage>
	);
};

export default Menu;
