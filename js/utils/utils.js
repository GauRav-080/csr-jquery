import { config, oL, storageService } from "./config.js";

// helper functions
export function addMenuEvent() {
	// var aMenuBtn = $(".menulist .menu_btn"),
	// 	nLength = aMenuBtn.length,
	// 	i;
	// for (i = 0; i < nLength; i++) {
	// 	// console.log($(aMenuBtn[i]).closest(".menu_item").find(".sub_menulist"))
	// 	if ($(aMenuBtn[i]).closest(".menu_item").find(".sub_menulist").length > 0) {
	// 		$(aMenuBtn[i]).on("click", function (e) {
	// 			var oTarget = e.currentTarget,
	// 				subMenuList = oTarget.nextElementSibling;
	// 			subMenuList.classList.toggle("active");
	// 			oTarget.classList.toggle("active");
	// 		});
	// 	}
	// }
}

export function isRouteAvailable(sRouteKey) {
	return config.routes.hasOwnProperty(sRouteKey);
}

function isAuthenticated() {
	var flag = false;
	if (storageService.hasData("isAuth")) {
		flag = storageService.getData("isAuth");
	}

	return flag;
}

export function onLogout() {
	storageService.clearData();
	navigatePage("login");
}

export function downloadCSV(p_oData, p_sFilename) {
	const blob = new Blob([p_oData], { type: "text/csv" });

	// Creating an object for downloading url
	const url = window.URL.createObjectURL(blob);

	// Creating an anchor(a) tag of HTML
	const a = document.createElement("a");

	// Passing the blob downloading url
	a.setAttribute("href", url);

	// Setting the anchor tag attribute for downloading
	// and passing the download file name
	a.setAttribute("download", p_sFilename);

	// Performing a download with click
	a.click();
}

export function navigatePage(sPageKey) {
	window.location.hash = "#/" + sPageKey;
}

export function loadCurrentPage(sPageKey) {
	var oRoutes = config.routes,
		currentPageElem;
	$("#page-content").html("");
	var oPage = oRoutes[sPageKey].val;
	currentPageElem = $("#" + sPageKey + "-page").clone();
	//currentPageElem.removeClass("hide");
	$("#page-content").html(currentPageElem); //need to add logic for login page
	oPage.init();
	//showHideHeader();
	//showHideSidebar();
	//showFooter();
	//showMenu(sPageKey);
}

function destroyPage() {
	// console.log("destroy page")
	var oRoutes = config.routes,
		oPage = oRoutes[oL.currentPageKey].val;
	//displayHeaders(false);
	//onPageContentClicked();
	oPage.onPageBeforeDestroy();
	$("#page-content").html("");
}

// function onPageContentClicked() {
// 	// console.log("onPageContentClicked");
// 	if (currentDropDownBtn) {
// 			currentDropDownBtn.removeClass('dropdown_open');
// 			currentDropDownBtn = null;
// 	}
// }
// function addUserInfo() {
// 	var oData = storageService.getData('profile');
// 	$("#user-name").html(oData.first_name);
// 	$("#user-designation").html(oData.role_type);
// }
// function showMenu(sPageKey){
// 	var oMenu = config.menutree,
// 			aMenu = Object.keys(oMenu),
// 			nLength = aMenu.length,
// 			i,
// 			menuList = $(".menulist").children(),
// 			subMenuList = menuList.find(".sub_menulist"),
// 			selectedMenuList = $(".menu_item.selected");

// 			if(selectedMenuList.length > 0){
// 					$(selectedMenuList[0]).removeClass("selected");
// 					$(selectedMenuList[1]).removeClass("selected");
// 			}

// 			for(i = 0; i < nLength; i++){
// 					if(sPageKey === aMenu[i]){
// 							var sId = oMenu[sPageKey].id,
// 									aMenuId = sId.indexOf("_") > -1 ? sId.split("_") : sId;
// 							// console.log(sId)
// 							if(aMenuId.length > 1){
// 									$(menuList[aMenuId[0]]).addClass("selected");
// 									$(menuList[aMenuId[0]]).find(".menu_btn ").addClass("active");
// 									$(subMenuList[aMenuId[0]]).addClass('active');
// 									$($(subMenuList[aMenuId[0]]).children()[aMenuId[1]]).addClass("selected");
// 							}else{
// 									$(menuList[aMenuId]).addClass("selected");
// 							}
// 					}
// 			}
// }
//location functions

export function onLocationChange() {
	window.onhashchange = function (e) {
		var oLocation = getLocation(),
			locationRouteKeyFrom = oLocation.key,
			routeKeys =
				locationRouteKeyFrom && locationRouteKeyFrom.length > 0
					? locationRouteKeyFrom.split("/")
					: [],
			sPageKey =
				routeKeys[0].indexOf("?") > -1
					? routeKeys[0].split("?")[0]
					: routeKeys[0];
		//mainRouteKey = routeKeys[0];
		oL.oLocationParams = null;
		if (oL.currentPageKey !== "" && isRouteAvailable(sPageKey)) {
			//$(".app_wrapper").removeClass(currentPageKey);
			destroyPage();
		}
		if (isRouteAvailable(sPageKey)) {
			if (sPageKey === "login" && isAuthenticated()) {
				navigatePage("home");
				return;
			}
			if (sPageKey !== "login" && !isAuthenticated()) {
				navigatePage(config.defaultPage);
				return;
			}
			if (sPageKey !== "login") {
				//addUserInfo();
			}
			//$(".app_wrapper").addClass(sPageKey); //is needed?
			oL.oLocationParams = oLocation.params;
			oL.currentPageKey = sPageKey;
			loadCurrentPage(sPageKey);
			return;
		}
		navigatePage(config.defaultPage);
	};

	if (window.location.hash === "") {
		navigatePage(config.defaultPage);
	} else {
		window.dispatchEvent(new HashChangeEvent("hashchange"));
	}
}

export function getLocation() {
	var aLocation = window.location.hash.split("#/"),
		sRouteKey = aLocation[1],
		oParams =
			aLocation[1].indexOf("?") > -1
				? getParameterFromLocation(aLocation[1].split("?")[1])
				: [],
		oData = {};
	oData["key"] = sRouteKey;
	if (Object.keys(oParams).length > 0) {
		oData["params"] = oParams;
	}
	return oData;
}

export function getParameterFromLocation(p_sPath) {
	var tmp = [],
		obj = {};

	var items = p_sPath.split("&");
	for (var index = 0; index < items.length; index++) {
		tmp = items[index].split("=");
		// var obj = {};
		obj[tmp[0]] = decodeURIComponent(tmp[1]);
	}
	// result.push(obj);
	return obj;
}
