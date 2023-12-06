import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCol,
	IonGrid,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
} from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { formatBalance } from "../Utils";
import styles from "./CardComponent.module.css";

interface Account {
	id: number;
	type: string;
	name: string;
	balance: number;
	availableBalance: number;
	reservedFunds: number;
	owner: string;
	number: string;
	transactions: Transaction[];
}

interface Transaction {
	name: string;
	amount: number;
	deposit: boolean;
}

const CardComponent: FC<Account> = (props) => {
	const {
		id,
		type,
		name,
		balance,
		availableBalance,
		reservedFunds,
		owner,
		number,
		transactions,
	} = props;
	return (
		<>
			<IonCard
				mode="md"
				style={{ height: "200px", width: "90%" }}
				color={"secondary"}
				className="ion-padding ion-margin-bottom"
			>
				<IonCardHeader>
					<IonCardTitle>{name}</IonCardTitle>
					<IonCardTitle>{number}</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<h5 className="ion-padding-top">Available balance:</h5>
					<h1
						style={{ color: "var(--ion-color-tertiary)" }}
						className="ion-no-margin"
					>
						{formatBalance(availableBalance)}
					</h1>
				</IonCardContent>
			</IonCard>

			<IonList className="ion-margin-top" style={{ width: "95%" }}>
				<IonItem>
					<IonLabel className="ion-text-start">Type</IonLabel>
					<IonLabel className="ion-text-end">{type}</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel className="ion-text-start">Balance</IonLabel>
					<IonLabel className="ion-text-end">{formatBalance(balance)}</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel className="ion-text-start">Reserved Funds</IonLabel>
					<IonLabel className="ion-text-end">
						{formatBalance(reservedFunds)}
					</IonLabel>
				</IonItem>
				<IonItem>
					<IonLabel className="ion-text-start">Owner</IonLabel>
					<IonLabel className="ion-text-end">{owner}</IonLabel>
				</IonItem>
			</IonList>
		</>
	);
};

export default CardComponent;
