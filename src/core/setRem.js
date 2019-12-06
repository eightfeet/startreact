/* eslint-disable no-undef */

const isPC = !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));

/**
 * 设置dom的font-size，用于控制子元素的em基准单位，pc端时 font-size = 16px，
 * 其他按规则计算字体值（屏幕宽度:UI宽度 = 屏幕字体大小:UI字体大小）
 * @param {HTMLElement} dom
 * @returns
 */
(function () {
	let docEl = window.document.documentElement;
	let clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
	if (isPC) {
		docEl.style.fontSize = '16px';
		return;
	}
	const baseFont = parseFloat(__BASEFONT__);
	const uiWidth = parseFloat(__UIWIDTH__);

	if (clientWidth >= uiWidth) {
		docEl.style.fontSize = baseFont + "px";
	} else {
		docEl.style.fontSize = baseFont * (clientWidth / uiWidth) + "px";
	}
})();