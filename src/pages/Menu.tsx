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
	logOutOutline,
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import { routes } from "../routes/routes";

const Menu: React.FC = () => {
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
						{routes.map((item, index) => (
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
					{routes.map((item, index) => (
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
