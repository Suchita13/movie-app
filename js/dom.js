var dom = (function(dom){

dom.findByClass = (className) =>{
	return document.getElementsByClassName(className);
}

return dom;

})(dom || {});