import { onLocationChange, onLogout, addMenuEvent } from "./utils/utils.js";

$(window).on("load", function () {
	//toast();
	onLocationChange();
	$("#logout-btn").on("click", onLogout);
	//addMenuEvent();
});
