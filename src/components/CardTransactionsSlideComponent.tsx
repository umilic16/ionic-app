import { FC } from "react";
import {
  IonButton,
  IonCardSubtitle,
  IonCol,
  IonIcon,
  IonList,
  IonRow,
} from "@ionic/react";

import styles from "./CardTransactionsSlideComponent.module.css";
import TransactionItem from "./TransactionComponent";
import { addOutline, arrowRedoOutline } from "ionicons/icons";
import { formatBalance } from "../Utils";
import CardComponent from "./CardComponent";

interface CardTransactions {
  index: number;
  card: {
    id: number;
    balance: number;
    type: string;
    number: string;
    profile: {
      firstname: string;
      surname: string;
    };
    expiry: string;
    secret: string;
    color: string;
    transactions: Array<any>;
  };
}

const CardTransactionSlide: FC<CardTransactions> = (props) => {
  const { index, card } = props;

  return (
    <>
      <IonRow className="ion-text-center">
        <IonCol size="12">
          <IonCardSubtitle color="dark">Balance</IonCardSubtitle>
          <IonCardSubtitle
            id={`slide_${index}_balance`}
            className={`${styles.balance} animate__animated`}
          >
            {formatBalance(card.balance)}
            <IonButton
              className={styles.addButton}
              size="small"
              color={"secondary"}
            >
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonCardSubtitle>
        </IonCol>
      </IonRow>
      <IonRow
        id={`card_${index}_container`}
        className="animate__animated ion-text-center ion-justify-content-center"
      >
        <IonCol size="12">
          <CardComponent key={index} {...card} />
        </IonCol>
      </IonRow>

      <IonRow className={`${styles.heading} ${styles.transactionList}`}>
        <IonCol size="12">
          <h6>Transactions</h6>
        </IonCol>
      </IonRow>

      {card.transactions.length > 0 && (
        <IonRow
          id={`slide_${index}_transactions`}
          className={`animate__animated ${styles.transactionList}`}
        >
          <IonCol size="12">
            <IonList>
              {card.transactions.length > 0 &&
                card.transactions
                  .slice(0)
                  .reverse()
                  .map((transaction, index) => (
                    <TransactionItem
                      key={`card_transaction_${index}`}
                      {...transaction}
                      color={card.color}
                    />
                  ))}
            </IonList>
          </IonCol>
        </IonRow>
      )}

      {card.transactions.length === 0 && (
        <IonRow
          id={`slide_${index}_transactions`}
          className="animate__animated"
        >
          <IonCol size="12">
            <h5>No transactions found</h5>
            <IonButton color={"secondary"}>
              <IonIcon icon={arrowRedoOutline} />
              &nbsp;Transfer funds
            </IonButton>
          </IonCol>
        </IonRow>
      )}
    </>
  );
};

export default CardTransactionSlide;
