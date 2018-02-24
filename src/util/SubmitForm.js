
function initIframe(form, callback, isXML, doc){
	const id = 'sf'+ Math.floor(Math.random() * 99999);
	const ifr = document.createElement('IFRAME');
	ifr.style.display = 'none';
	ifr.id = id;
	ifr.onload = function(){
		onLoad(id);	
	};
	ifr.name = id;
	ifr.src = 'about:blank';

	document.body.appendChild(ifr);
	
	form.setAttribute('target', id);
	
	ifr.isXML = !!isXML;
	ifr.docRoot = doc || 'body';
	ifr.onComplete = function(s){
		if (callback && typeof callback == 'function') {
			callback(s);
		}	
		if ( ifr.parentNode ) {
			ifr.parentNode.removeChild( ifr );
		}
	};
	
	ifr.abort = function(){
		if ( this.parentNode ) {
			this.parentNode.removeChild( this );
		}	
	}
	
	return ifr;
			
}

function onLoad(id){
	function getDoc(frame) {
		const doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
		return doc;
	}
	const ifr = document.getElementById(id);
	
	if( !ifr ) return;
	
	let s = '';
	let doc;
	try{
		doc = getDoc( ifr );
	} catch(e) {
		//cross-origin error
		s = "无法显示此内容,可能错误：cross-origin";
	}
	if( doc ) {
		if (doc.location.href == "about:blank") {
			return;
		}
		
		if( !ifr.isXML ) {
	
			var pre = doc.getElementsByTagName(ifr.docRoot)[0];
			
			if (pre) {
				s = pre.textContent ? pre.textContent : pre.innerText;
			}
		} else {
			try {
				s = ifr.contentWindow.document.XMLDocument.text;
			} catch(e) {
				try {
					s = ifr.contentWindow.document.documentElement.firstChild.wholeText;
				} catch(e) {
					try {
						s = ifr.contentWindow.document.documentElement.firstChild.nodeValue;
					} catch(e) {
							s = "无法显示此内容,可能错误：cross-origin";//如果出现这个请检查域名是否相同 
					}
				}
			}	
		}
	}
	
	if (typeof(ifr.onComplete) == 'function') {
		ifr.onComplete(s);
	}
			
}

/**
 * @param {String|Element} From元素对象或者ID
 * @param {Function} 提交后回调
 * @param {Boolean} 返回的是否XML数据
 * @param {String} [body]返回结果容器标签
 */
export default function submit(form, callback, isXML, doc){
	if( typeof form !== 'object' ) {
		form = document.getElementById(form);	
	}
	
	const r = initIframe(form, callback, isXML, doc);
	
	form.submit();
	
	return r;	
}

