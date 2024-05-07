import { storageService } from "../utils/config.js";

export var login = {
	init: function () {
		storageService.init();
		// this._enableDisableSubmit = this.enableDisableSubmit.bind(this);
		// this._onEmailChange = this.onEmailChange.bind(this);
		// this._onPasswordChange = this.onPasswordChange.bind(this);
		// this._handleEvents = this.handleEvents.bind(this);

		// $("#formEmail").on("change paste keyup", this._onEmailChange);
		// $('#formPassword').on("change paste keyup", this._onPasswordChange);
		// this._enableDisableSubmit();
	},
	onEmailChange: function (e) {
		this._enableDisableSubmit();
	},
	onPasswordChange: function (e) {
		// console.log(e.target.value, "   password")
		this._enableDisableSubmit();
	},
	enableDisableSubmit: function () {
		// var userValue = $("#formEmail").val(),
		// 	passValue = $("#formPassword").val();
		// if (userValue !== "" && passValue != "") {
		// 	if ($("#sign-in-btn").hasClass("disabled")) {
		// 		$("#sign-in-btn").on("click", this._handleEvents);
		// 	}
		// 	$("#sign-in-btn").removeClass("disabled");
		// } else {
		// 	$("#sign-in-btn").addClass("disabled");
		// 	$("#sign-in-btn").off("click", this._handleEvents);
		// }
	},
	onSuccess: function (p_sMsg) {
		/* $.toast({
          autoDismiss: true,
          type: "error",
          message: p_sMsg
      }); */
		storageService.setData("isAuth", true);
		navigatePage("summary");
	},
	handleEvents: function (e) {
		// var userValue = $("#formEmail").val(),
		// 	passValue = $("#formPassword").val(),
		// 	oScope = this,
		// 	sUrl = config.const.api.login;
		// e.preventDefault();
		// var oData = {
		// 	emailId: userValue,
		// 	password: passValue,
		// };
		// $.ajax({
		// 	type: "POST",
		// 	url: sUrl,
		// 	headers: {
		// 		/* "content-type": "application/json;charset=UTF-8", */ // Or add this line
		// 		"content-type": "application/json-patch+json",
		// 		"X-API-Key": atob(config.secretKeyEncr),
		// 	},
		// 	contentType: "application/json",
		// 	processData: false,
		// 	data: JSON.stringify(oData),
		// 	success: function (response, status, xhr) {
		// 		// console.log(response, "  on success ", status);
		// 		if (response.isSuccess) {
		// 			var oData = response.result;
		// 			storageService.setData("profile", oData);
		// 			oScope.onSuccess(response.statusMessage);
		// 		} else {
		// 			oScope.onLoginFailed(response.statusMessage);
		// 		}
		// 	},
		// 	error: function (xhr, status, error) {
		// 		console.log(status, " on Error ");
		// 		var res = xhr.responseJSON;
		// 		oScope.onLoginFailed(res.statusMessage);
		// 	},
		// });
	},
	onLoginFailed: function (p_sMsg) {
		// $.toast({
		//     autoDismiss: true,
		//     type: "error",
		//     message: p_sMsg
		// });
		// $('.login_wrapper').addClass("shake").delay(500).queue(function () {
		//     $(this).removeClass("shake");
		//     $(this).dequeue();
		// });
	},
	onPageBeforeDestroy: function () {
		this.destroy();
	},
	destroy: function () {
		// $('#sign-in-btn').off('click', this._handleEvents);
		// $("#formEmail").off("change paste keyup", this._onEmailChange);
		// $('#formPassword').off('change paste keyup', this._onPasswordChange);
		// this._enableDisableSubmit = null;
		// this._onEmailChange = null;
		// this._onPasswordChange = null;
		// this._handleEvents = null;
	},
};
