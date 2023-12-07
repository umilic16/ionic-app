export const formatBalance = (balance: number | bigint) => {
	var formatter = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	});

	return formatter.format(balance);
};

export const formatCardNumber = (cardNumber: string) => {
	return `**** **** **** ${cardNumber.slice(-4)}`;
};
