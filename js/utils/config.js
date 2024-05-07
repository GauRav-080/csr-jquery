import { login } from "../pages/login.js";

var home = {
	init: () => {},
	onPageBeforeDestroy: () => {},
};
var recent_orders = {
	init: () => {},
	onPageBeforeDestroy: () => {},
};
export var config = {
	defaultPage: "login",
	routes: {
		login: {
			page: "login",
			val: login,
		},
		home: {
			page: "home",
			val: home,
		},
		"recent-orders": {
			page: "recent-orders",
			val: recent_orders,
		},
	},
	menutree: menutree,
	const: {},
	api: {},
	storeKey: "app-csr-v.0.0.1",
};

export var oL = {
	currentPageKey: "",
	//oPage: {},
	oLocationParams: null,
};

export var storageService = {
	store: window.localStorage,
	key: config.storeKey,
	isEncrypt: false,
	init: function () {
		this.store.setItem(this.key, "");
	},
	setData: function (key, value) {
		if (!this.store) {
			console.error("ERROR: Storage not available.");
			return;
		}
		var currentData = this.validateData();
		currentData[key] = value;
		this.store.setItem(this.key, this.encryptString(currentData));
	},
	getData: function (key) {
		if (!this.store) {
			console.error("ERROR: Storage not available.");
			return;
		}
		var currentData = this.store
			? JSON.parse(this.decryptString(this.store.getItem(this.key)))
			: undefined;
		if (currentData === undefined) {
			return;
		}
		return currentData && currentData[key];
	},
	hasData(key) {
		if (!this.store) {
			console.error("ERROR: Storage not available.");
			return;
		}
		let currentData = this.validateData();
		return currentData && currentData.hasOwnProperty(key);
	},
	removeData(key) {
		if (!this.store) {
			console.error("ERROR: Storage not available.");
			return;
		}
		let currentData = this.decryptString(this.store.getItem(this.key));
		currentData = currentData ? JSON.parse(currentData) : undefined;

		if (currentData && currentData.hasOwnProperty(key)) {
			delete currentData[key];
			this.store.setItem(this.key, this.encryptString(currentData));
		}
	},
	clearData() {
		let currentData = this.store
			? JSON.parse(this.decryptString(this.store.getItem(this.key)))
			: undefined;
		if (currentData === undefined) {
			console.error("ERROR: DATA not available in STORAGE.");
			return;
		}
		this.store.removeItem(this.key);
		this.store.clear();
	},
	validateData() {
		let currentData = this.store.getItem(this.key);
		if (currentData === "" || !currentData) {
			currentData = {};
		} else {
			currentData = JSON.parse(this.decryptString(currentData));
		}
		return currentData;
	},
	encryptString(p_oValue) {
		return JSON.stringify(p_oValue);
		/*  if (!this.isEncrypt || typeof (p_oValue) === 'string') {
					 return JSON.stringify(p_oValue);
			 }

			 return btoa(JSON.stringify(p_oValue)); */
	},
	decryptString(p_sValue) {
		return p_sValue;
		/* var isStrEncrypted = false;
			try {
					JSON.parse(p_sValue)
			} catch (e) {
					isStrEncrypted = true;
			}
			if (!this.isEncrypt && !isStrEncrypted) {
					return p_sValue
			}

			return atob(p_sValue); */
	},
};

export var menutree = {
	home: {
		id: "0",
	},
	recent_orders: {
		id: "0_1",
	},
};
