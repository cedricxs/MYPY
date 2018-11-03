

var _deskey = '6331534859898612722';
var _nowtime = '2018-08-21 21:58:18';
document.write("<script type='text/javascript' src='http://jwgl.ouc.edu.cn:80/custom/js/base64.js'></script>");
document.write("<script type='text/javascript' src='http://jwgl.ouc.edu.cn:80/custom/js/md5.js'></script>");
document.write("<script type='text/javascript' src='http://jwgl.ouc.edu.cn:80/custom/js/jkingo.des.js'></script>");
function b64_encode(data) { return base64encode(utf16to8(data)); } 
function b64_decode(data) { return utf8to16(base64decode(data)); } 
function md5(data) { return hex_md5(data); } 
function des_encode(data) { return strEnc(data, _deskey, null, null); } 
function des_decode(data) { return strDec(data, _deskey, null, null); } 
function getEncParams(params) { 
 var timestamp = _nowtime; 
 var token = md5(md5(params)+md5(timestamp)); 
 var _params = b64_encode(des_encode(params)); 
 _params = "params=" + _params + "&token="+token+"&timestamp="+timestamp; 
 return _params; 
 } 
function reloadScript(id, jsfile){
 if (id=='kingo_encypt') kingo_encypt.src = jsfile ; 
}

