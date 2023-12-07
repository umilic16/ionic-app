import { homeOutline, qrCodeOutline, walletOutline } from "ionicons/icons";
import Accounts from "../pages/Accounts";
import Home from "../pages/Home";
import QRCodeScan from "../pages/QRCodeScan";

export const routes = [
	{
		name: "Home",
		path: "/app/home",
		icon: homeOutline,
		component: Home,
	},
	{
		name: "Accounts",
		path: "/app/accounts",
		icon: walletOutline,
		component: Accounts,
	},
	{
		name: "QR Code scan",
		path: "/app/qr_code_scan",
		icon: qrCodeOutline,
		component: QRCodeScan,
	},
];
