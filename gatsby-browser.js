import "./src/styles/global.scss";

const addScript = (url) => {
	const script = document.createElement("script");
	script.src = url;
	script.async = true;
	document.body.appendChild(script);
};

export const onClientEntry = () => {
	window.onload = () => {
		addScript(
			"https://platform-api.sharethis.com/js/sharethis.js#property=5efd2b295adf140012a0515c&product=inline-share-buttons&cms=sop",
		);
	};
};
