import { cardOutline, cashOutline, homeOutline, qrCodeOutline, walletOutline } from "ionicons/icons";
import Home from "../pages/Home";
import Accounts from "../pages/Accounts";
import Payments from "../pages/Payments";
import Cards from "../pages/Cards";
import QRCodeScan from "../pages/QRCodeScan";

export const routes = [
    {
        name: "Home",
        path: "/app/home",
        icon: homeOutline,
        component: Home
    },
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
    {
        name: "Cards",
        path: "/app/cards",
        icon: cardOutline,
        component: Cards
    },
    {
        name: "QR Code scan",
        path: "/app/qr_code_scan",
        icon: qrCodeOutline,
        component: QRCodeScan
    },
];