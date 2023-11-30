import { FC, useEffect, useState } from "react";
import styles from "./CardComponent.module.css";

interface Card {
  type: string;
  number: string;
  profile: {
    firstname: string;
    surname: string;
  };
  expiry: string;
  secret: string;
  color: string;
}

const CardComponent: FC<Card> = (props) => {
  const { type, number, profile, expiry, secret, color } = props;
  const [lastFourCardNumbers, setLastFourCardNumbers] =
    useState<string>("****");
  const [isFrontShown, setIsFrontShown] = useState<boolean>(true);

  const cardClass: string = `card_${color}`;
  const cardTypeLogo: string =
    type === "visa" ? "/visa.png" : "/mastercard.png";

  useEffect(() => {
    var lastFourNumbers: string = number
      ? number.slice(number.length - 4)
      : "1234";
    setLastFourCardNumbers(lastFourNumbers);
  }, [number]);

  const handleCardClick = () => {
    setIsFrontShown((prevVal) => !prevVal);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div
        className={`${styles.card__front} ${styles.card__part} ${styles[cardClass]}`}
        style={{ transform: `rotateY(${isFrontShown ? 0 : 180}deg)` }}
      >
        <div className={styles.card__front__top}>
          <img
            className={`${styles.card__front_chip} ${styles.card__square}`}
            src="/chip.png"
            alt="1"
          />
          <img
            className={`${styles.card__front_logo} ${styles.card__logo}`}
            src={cardTypeLogo}
            alt="2"
          />
        </div>
        <p className={styles.card_number}>
          **** **** **** {lastFourCardNumbers}
        </p>
        <div className={styles.card__space_75}>
          <span className={styles.card__label}>Card holder</span>
          <p
            className={styles.card__info}
          >{`${profile.firstname} ${profile.surname}`}</p>
        </div>
        <div className={styles.card__space_25}>
          <span className={styles.card__label}>Expires</span>
          <p className={styles.card__info}>{expiry}</p>
        </div>
      </div>
      <div
        className={`${styles.card__back} ${styles.card__part} ${styles[cardClass]}`}
        style={{ transform: `rotateY(${isFrontShown ? -180 : 0}deg)` }}
      >
        <div className={styles.card__black_line}></div>
        <div className={styles.card__back_content}>
          <div className={styles.card__secret}>
            <p className={styles.card__secret__last}>{secret}</p>
          </div>

          <img
            className={`${styles.card__back_logo} ${styles.card__logo}`}
            src={cardTypeLogo}
            alt="5"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
