import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonFab,
	IonFabButton,
	IonFabList,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
} from "@ionic/react";
import {
	add,
	cardOutline,
	cashOutline,
	colorPalette,
	document,
	globe,
	information,
	informationCircleOutline,
} from "ionicons/icons";
import { FC, useState } from "react";
import { formatBalance, formatCardNumber } from "../Utils";
import { AccountStore } from "../data/AccountStore";
import TransactionItem from "./TransactionComponent";

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

	const [infoShown, setInfoShown] = useState<string>("information");
	const cards = AccountStore.useState((s) => s.cards).filter(
		(card) => card.relatedAccount === number
	);

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

			{infoShown === "information" && (
				<div
					style={{ width: "100%" }}
					className="ion-margin-top ion-padding-top ion-text-start"
				>
					<IonLabel className="ion-padding-start">More information:</IonLabel>
					<IonList>
						<IonItem>
							<IonLabel className="ion-text-start">Type</IonLabel>
							<IonLabel className="ion-text-end">{type}</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel className="ion-text-start">Balance</IonLabel>
							<IonLabel className="ion-text-end">
								{formatBalance(balance)}
							</IonLabel>
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
				</div>
			)}

			{infoShown === "transactions" && (
				<div
					style={{ width: "100%" }}
					className="ion-margin-top ion-padding-top ion-text-start"
				>
					<IonLabel className="ion-padding-start">Transactions:</IonLabel>
					<IonList>
						{transactions.length > 0 &&
							transactions
								.slice(0)
								.reverse()
								.map((transaction, index) => (
									<TransactionItem
										key={`card_transaction_${index}`}
										{...transaction}
									/>
								))}
					</IonList>
				</div>
			)}

			{infoShown === "cards" && (
				<div
					style={{ width: "100%" }}
					className="ion-margin-top ion-padding-top ion-text-start"
				>
					<IonLabel className="ion-padding-start">Cards:</IonLabel>
					<IonList>
						{cards.map((card) => (
							<IonItem key={card.id}>
								<IonLabel className="ion-text-start">{card.type}</IonLabel>
								<IonLabel className="ion-text-end">
									{formatCardNumber(card.number)}
								</IonLabel>
							</IonItem>
						))}
					</IonList>
				</div>
			)}

			<IonFab slot="fixed" vertical="bottom" horizontal="end">
				<IonFabButton size="small">
					<IonIcon icon={add}></IonIcon>
				</IonFabButton>
				<IonFabList side="top">
					<IonFabButton>
						<IonIcon
							icon={cardOutline}
							onClick={() => setInfoShown("cards")}
						></IonIcon>
					</IonFabButton>
					<IonFabButton>
						<IonIcon
							icon={cashOutline}
							onClick={() => setInfoShown("transactions")}
						></IonIcon>
					</IonFabButton>
					<IonFabButton>
						<IonIcon
							icon={informationCircleOutline}
							onClick={() => setInfoShown("information")}
						></IonIcon>
					</IonFabButton>
				</IonFabList>
			</IonFab>
		</>
	);
};

export default CardComponent;
