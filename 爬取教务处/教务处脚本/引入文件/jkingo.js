/**
 * (kingo自定义部分始于680行,可用ctrl+L定位)
 * ==================================================================
 * 扩展String原型方法
 * @author qukj
 * @date 2012-03-19
 * @version 1.0
 * ==================================================================
 */
/**
 * 去掉左边(开始)的空白字符
 * @param string
 * @return
 */
String.prototype.trimStart=function(string)
{
    if (!string)
    {
        string="\\s+";
    }
    var trimStartPattern=new RegExp("^("+string+")+","g");
    return this.replace(trimStartPattern,"");
}

/**
 * 去掉右边(结尾)的空白字符
 * @param string
 * @return
 */
String.prototype.trimEnd=function(string)
{
    if (!string)
    {
        string="\\s+";
    }
    var trimEndPattern=new RegExp("("+string+")+$","g");
    return this.replace(trimEndPattern,"");
}

/**
 * 去掉首尾空白字符
 * @param string
 * @return
 */
String.prototype.trim=function(string)
{
    return this.trimStart(string).trimEnd(string);
}		

/**
 * 是否以指定字符开始
 * @param string
 * @return
 */
String.prototype.startsWith=function(string)
{
    if (!string)
    {
        string="\\s";
    }
    var startsWithPattern=new RegExp("^("+string+")","g");
    return startsWithPattern.test(this);
}

/**
 * 是否以指定字符结尾
 * @param string
 * @return
 */
String.prototype.endsWith=function(string)
{
    if (!string)
    {
        string="\\s";
    }
    var endsWithPattern=new RegExp("("+string+")$","g");
    return endsWithPattern.test(this);
}		

/**
 * 倒序
 * @return
 */
String.prototype.reverse=function(){
	return this.split("").reverse().join("");
}

/**
 * 是否包含指定字符
 * @param str 子字符串
 * @return
 */
String.prototype.isContains = function(str){
    return (this.indexOf(str) > -1);
}

/**
 * 判断是否为空
 * @return
 */
String.prototype.isEmpty = function(){
    return this == "";
}

/**
 * 判断是否是整数
 * @return
 */
String.prototype.isInt = function(){
    if (this == "NaN")
        return false;
    return this == parseInt(this).toString();
}

/**
 * 保留字母
 * @return
 */
String.prototype.getEn = function(){
    return this.replace(/[^A-Za-z]/g, "");
}

/**
 * 获取字节长度，一个中文字符算2个字符
 * @return
 */
String.prototype.byteLength = function(){
    return this.replace(/[^\x00-\xff]/g, "**").length;
}

/**
 * 从左截取指定长度的字串，一个中文字符算2个字符
 * @param n 截取长度
 * @return
 */
String.prototype.left = function(n){
    return this.slice(0, n);
}

/**
 * 从右截取指定长度的字串，一个中文字符算2个字符
 * @param n 截取长度
 * @return
 */
String.prototype.right = function(n){
    return this.slice(this.length - n);
}

/**
 * 获取字符串的Unicode编码
 * @return
 */
String.prototype.unicode = function(){
    var tmpArr = [];
    for (var i = 0; i < this.length; i++)
        tmpArr.push("&#" + this.charCodeAt(i) + ";");
    return tmpArr.join("");
}

/**
 * 指定位置插入字符串
 * @param index 插入位置
 * @param str 待插入的字符串
 * @return
 */
String.prototype.insert = function(index, str){
    return this.substring(0, index) + str + this.substr(index);
}

/**
 * 字符串格式化：用指定的参数值替换对应位置的参数
 * 原型方法,使用示例：
 * var a = "I Love {0}, and You Love {1},Where are {0}!";
 * alert(a.format("You","Me"));
 * 
 * @return
 */
String.prototype.format = function()
{
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,              
        function(m,i){
            return args[i];
        });
}

/**
 * 字符串格式化：用指定的参数值替换对应位置的参数
 * 静态方法,使用示例：
 * var a = "I Love {0}, and You Love {1},Where are {0}!";
 * alert(String.format(a, "You","Me"));
 * 
 * @return
 */
String.format = function() {
    if( arguments.length == 0 )
        return null;
    var str = arguments[0];
    for(var i=1;i<arguments.length;i++) {
        var re = new RegExp('\\{' + (i-1) + '\\}','gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

/*
* 替换所有要替换的文字
* @param str1 替换前的字符串
* @param str2 替换后的字符串
* @return 
*/
String.prototype.replaceAll = function (str1,str2){
  var str = this;     
  var result = str.replace(eval("/"+str1+"/gi"),str2);
  return result;
}

/**
 * ================================================================== 
 * 类Java中的HashMap对象
 * @author qukj
 * @since 2012-03-19
 * ==================================================================
 */
function KMap(){
    this.elements = new Array();
 
    //获取MAP元素个数
    this.size = function(){
        return this.elements.length;
    }
 
    //判断MAP是否为空
    this.isEmpty = function(){
        return (this.elements.length < 1);
    }
 
    //删除MAP所有元素
    this.clear = function(){
        this.elements = new Array();
    }
 
    //向MAP中增加元素（key, value)
    this.put = function(_key, _value){
        this.elements.push({
            key: _key,
            value: _value
        });
    }
 
    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function(_key){
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        }
        catch (e) {
            bln = false;
        }
        return bln;
    }
 
    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function(_key){
        try {
         var result = null;
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    result = this.elements[i].value;
                }
            }
            return result;
        }
        catch (e) {
            return null;
        }
    }
  
    //设置MAP中指定KEY元素的值VALUE, 失败返回NULL
    this.set = function(_key,_value){
     try{
      this.remove(_key);
      this.put(_key,_value);
     }catch(e){
      return null;
     }
    }
   
    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function(_index){
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    }
 
    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function(_key){
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        }
        catch (e) {
            bln = false;
        }
        return bln;
    }
 
    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function(_value){
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        }
        catch (e) {
            bln = false;
        }
        return bln;
    }
 
    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function(){
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    }
 
    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function(){
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    }
}

/**
 * ================================================================== 
 * json与字符串的双向转换类
 * @author 
 * @since 2012-03-19
 * ==================================================================
 */
/*jslint evil: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/

"use strict";

// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.
                j = eval('(' + text + ')');
// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.
                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


/**
 * ==================================================================
 * kingo全局类，封装了通用的页面处理相关方法，可直接用[k$|kingo|kutil.方法名()]调用
 * create date : 2012-03-31
 * created by  : qukj
 * copyright   : 湖南青果软件有限公司 
 * ==================================================================
 */

//创建别名使用jQuery对象，解决$符号冲突
var jq = jq$ = j$ = jQuery.noConflict(); 

function $id(id){
	return j$("#" + id);
}

var kutil = (function(my, $){
	
	// ==========此处定义私有属性和私有方法  ==========
	// 仅供当前函数内部访问,不污染命名空间 
	
	//var my = {} ;
	var copyright = "湖南青果软件有限公司 版权所有";
	
	// 回车键转化为TAB键(IE适用)
	function return2tab(evt) {
		if (!evt) { // 如果传入了事件参数 
			evt = evt ? evt : (window.event ? window.event : null);
			if (evt.keyCode == 13) {
				evt.keyCode = 9;
			}
		} else {
			if (evt.keyCode == 13) {
				evt.keyCode = 9;
			}
		}
	}

	// ==========此处定义公用属性和公用方法  ==========
	// 可以以k$.XXX 或 king.XXX形式访问 
	
	// 定义属性: 当前日期对应的年份,四位数表示
	my.currentYear = (new Date()).getFullYear();  
	
	/*
	 * 获取当前四位年份
	 */
	my.getCurrentYear = function(){		
		var year = new Date().getFullYear();
		return year;
	}

	/*
	 * 获取当前日期,格式如 2012-03-31
	 */
	my.getCurrentDate = function(){		
		var year = new Date().getFullYear();
		var month = new Date().getMonth() + 1;
		var day = new Date().getDate();
		if (month<10) month = "0" + month;
		if (day<10) day = "0" + day;						 
		var currentDate = year + "-" + month + "-" + day ;	
		return currentDate;
	}
	
	/*
	 * 获取当前时间,格式如2012-03-31 12:10:30
	 */
	my.getCurrentDateTime = function(){		
		var year = new Date().getFullYear();
		var month = new Date().getMonth() + 1;
		var day = new Date().getDate();
		var hours = new Date().getHours();
		var minutes = new Date().getMinutes();
		if (month<10) month = "0" + month;
		if (day<10) day = "0" + day;						 
		if (hours<10) hours = "0" + hours;						 
		if (minutes<10) minutes = "0" + minutes;						 
		var currentDateTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":00";	
		return currentDateTime;
	}	
	
	/**
	 * 更改当前行的背景色
	 * param- obj 当前选定对象(this:如tr,li等)
	 */
	my.changeSelectedRow = function(obj) {
		jQuery(obj).siblings().removeClass("kingo_selected_row");
		jQuery(obj).addClass("kingo_selected_row");	
	}

	/**
	 * 数据列表显示区标题行固定 
	 */
	my.setRowFixed = function(RowIndex){
		var e = event.srcElement;
		if (e.tagName != 'DIV') return;
		var oTab = e.children(0);
		var iTop = e.scrollTop;
		var iBor = parseInt(oTab.border);
		if (typeof(RowIndex) != 'number' || RowIndex < 0) RowIndex = 0;
		oTab.rows(RowIndex).style.left	= -iBor;
		oTab.rows(RowIndex).style.top	= iTop-iBor;
	}

	/**
	 * 依据表格行和单元格名称获取单元格中的值
	 * @param tr - 表格行对象
	 * @param tdName - 单元格名称
	 * @return 单元格中的值 
	 */
	my.getValue4TD_ = function (tr, tdName) {
		var tds = tr.cells, value = '';
		for(var i = 0; i < tds.length; i++) {
			if(tds[i].getAttribute('name') == tdName) {
				value = Trim(tds[i].innerHTML);
				break;
			}
		}
		return value ;
	}
	
	/**
	 * 依据表格行和单元格名称设置单元格中的值
	 * @param tr - 表格行对象
	 * @param tdName - 单元格名称
	 * @param value - 待设置的值
	 * @return
	 */
	my.setValue4TD_ = function (tr, tdName, value) {
		var tds = tr.cells;
		for(var i = 0; i < tds.length; i++) {
			if(tds[i].getAttribute('name') == tdName) {
				tds[i].innerHTML = value;
				break;
			}
		}
		return true ;
	}	

	/**
	 * 依据表格行和单元格名称获取单元格中的值
	 * @param tr - 表格行对象
	 * @param tdName - 单元格名称
	 * @return 单元格中的值 
	 */
	my.getValue4TD = function (tr, tdName) {
		var tds = tr.cells, value = '';
		for(var i = 0; i < tds.length; i++) {
			if(tds[i].getAttribute('name') == tdName) {
				value = Trim(tds[i].innerHTML);
				// 如果是input, select, textarea 输入项，则取该输入项中的值  2013.10.29日增加...
				var _value = new String(value).toLowerCase();
				if (_value.isContains("<input") || _value.isContains("<select") || _value.isContains("<textarea")) {
					if(_value.isContains("checkbox"))
						value = $(value).attr("checked");
					else 
						value = $(value).val();
				}
				break;
			}
		}
		return value ;
	}
	
	/**
	 * 依据表格行和单元格名称设置单元格中的值
	 * @param tr - 表格行对象
	 * @param tdName - 单元格名称
	 * @param value - 待设置的值
	 * @return
	 */
	my.setValue4TD = function (tr, tdName, value) {
		var tds = tr.cells;
		for(var i = 0; i < tds.length; i++) {
			if(tds[i].getAttribute('name') == tdName) {
				// tds[i].innerHTML = value;
				// 如果是input, select, textarea 输入项，则取该输入项中的值  2013.10.29日增加...
				var _innerHTML = Trim(tds[i].innerHTML);
				var _value = new String(_innerHTML).toLowerCase();
				if (_value.isContains("<input") || _value.isContains("<select") || _value.isContains("<textarea")) {
					$(tds[i]).children().val(value);  // td项中的input赋值
				} else {
					tds[i].innerHTML = value;
				}
				break;
			}
		}
		return true ;
	}	

	/**
	 * 获取指定iframe中选定的checkbox对应的单元格中值的组合
	 * @param tdName 单元格名称
	 * @param frmName frame名称
	 * 
	 * @return 单元格值组合,以|分隔
	 */
	my.getSelectIds = function(tdName, frmName, sepator) {
		if (typeof sepator == "undefined" || kutil.isNull(sepator)) { sepator = "|"; }
		// 获取指定iframe中选定的checkbox
		//var iframe_doc = document.frames(frmName).document;
		var iframe_doc = document.getElementById(frmName).contentWindow.document; // 此方式IE、FF适用
		var checkids = $('input[type=checkbox][disabled=false]:checked', iframe_doc); 
		// 单元格值组合
		var cells = "" ; 
		for (var i=0; i<checkids.length; i++) {
			// 获取选定节点的值
			var tr_id = $(checkids[i]).parent().parent().attr("id");  
			// 用text()取td包含的值
			var cell = $("#" + tr_id + "_" + tdName, iframe_doc).text(); 
			if (kutil.isNull(cells)) {
				cells = cell;
			} else {
				cells += sepator + cell ;
			}
		}
		//alert("cells = " + cells);
		return cells ;
	}				
	
	/**
	 * 获取指定iframe名称的frame对象
	 * @param frmName frame名称
	 * 
	 * @return 
	 */
	my.getIFrameDoc = function(frmName) {
		//var iframe_doc = document.frames(frmName).document;
		var iframe_doc = document.getElementById(frmName).contentWindow.document; // 此方式IE、FF适用
		return iframe_doc ;
	}	
	
	my.getIFrame = function(frmName) {
		//var iframe_doc = document.frames(frmName).document;
		var iframe_doc = document.getElementById(frmName).contentWindow; // 此方式IE、FF适用
		return iframe_doc ;
	}	
	
	/**
	 * 全选(jquery写法)
	 * 
	 * document.getElementById('myframe').contentWindow.document.getElementById('test').style.color='red'  
	 * 通过在index.html访问ID名为'myframe'的iframe页面,并取得此iframe页面内的ID为'test'的对象,并将其颜色设置为红色.
     * $("#myframe").contents().find("#test").css('color','red');
     * 			
	 * @param obj 当前checkbox对象
	 * @param frmName frame名称
	 */
	my.allCheck = function(obj, frmName){	
		var checked = $(obj).attr("checked");
		var myframe = window.frames(frmName).document ;
		// 选定未屏蔽可用的checkbox选项同步选定标识
		$("input[type=checkbox][disabled=false]",myframe).attr("checked",checked);
	}

	/**
	 * 全选(js写法，弃用)
	 * @deprecated
	 */			
	function AllCheck0(arg){	
		if(arg["cbox"].checked==true){					
			var checkboxs=window.frames[arg["frm"]].document.getElementsByTagName('input');
			for(var i=0,length=checkboxs.length;i<length;i++){
				if(checkboxs[i].type=='checkbox'&&checkboxs[i].checked==false){
					checkboxs[i].checked=true;
				}
			}
		}else{
			var checkboxs=window.frames[arg["frm"]].document.getElementsByTagName('input');
			for(var i=0,length=checkboxs.length;i<length;i++){
				if(checkboxs[i].type=='checkbox'&&checkboxs[i].checked==true){
					checkboxs[i].checked=false;
				}
			}
		}				
	}	
	
	/**
	 * 定位到页面的第一个输入项
	 */
	my.onloadingFocus = function() {
		jQuery("input[type='text']:first").focus();
	}
	
	/**
	 * 定位到Form表单的第一个可视的输入框
	 * (window.onload事件中调用)
	 */
	my.focusOnFirst = function () {
	    if (document.forms.length > 0) {
	        for (var i=0; i < document.forms[0].elements.length; i++) {
	            var oField = document.forms[0].elements[i];
	            if (oField.type != "hidden" && oField.type != "button") {
	                oField.focus();
	                return;
	            }
	        }
	    }
	};

	/**
	 * 输入项绑定回车键转Tab键功能
	 * @ 功能扩展： 
	 *  1 可传入多个inputDiv, 以,分隔
	 *  2 屏蔽项不添加事件 
	 */
	my.enter2tab = function(inputDivs,evt) {
		var aInputDiv = new String(inputDivs).split(",");
		$.each(aInputDiv, function(i){
			jQuery("#" + aInputDiv[i] + " input[type!='hidden']").keydown(function(){
				return2tab(evt);
			})
			jQuery("#" + aInputDiv[i] + " select").keydown(function(){
				return2tab(evt);
			})
		}) ;
	}

	/**
	 * 定位到第一个输入项
	 */
	my.toFirstItem = function(inputId) {	
		var elementId = new String(inputId);
		if (!elementId.startsWith("#")) {
			elementId = "#" + elementId ;
		}
		jQuery(elementId).focus();	
	}

	/**
	 * 动态加载适应主题风格的样式文件,放置与<head>标签之间
	 * 其中的变量_webRootPath和_stylePathPrefix 由文件[../custom/js/SetRootPath.jsp]定义
	 */
	/**
	my.loadingCSS = function(){
		var mystyle = "<link rel='stylesheet' href='" + _webRootPath + "custom/css/" + _stylePathPrefix + "/KingoCommon.css' />";
		j$("head").append(mystyle);
	}
	*/
	
	/**
	 * 必须输入项绑定控制按钮事件
	 * @param items 必输项ID组合,以逗号分隔
	 * @param buttons 需要控制的按钮项ID组合,以逗号分隔; 缺省值为 btnSave
	 */
	my.bindShowButton = function(items,buttons){
	   var aItem = new String(items).split(",");
	   j$.each(aItem, function(i){
	   		var currentItem = aItem[i];
	   		var $item = j$("#" + currentItem);  // 获取表单元素的jQuery对象
	   		var type = $item.attr("type");
	   		//alert(currentItem + "/" + type);
	   		if ("text" == type || "textarea" == type) {
	   			$item.bind("keyup", function(){ kutil.showButton(items, buttons); });
	   		} else {
	   			$item.bind("change", function(){ kutil.showButton(items, buttons); });
	   			// $item.wrap("<span style='border:1px solid red; position:absolute; overflow:hidden'></span>");
	   			// <span style='border:1px solid red; position:absolute; overflow:hidden'></span>
	   		    // <select style="margin:-2px"> 
	   		}
	   		// 更改必须输入项的底色, 使用addClass 或 css 
	   		//$item.addClass("kingo_input_bg");
	   		$item[0].style.backgroundColor="#E1C7E1";
	   })
	   
	   // 非必须项绑定事件
	   bindblur(items, buttons);
	}
	
	function bindblur(items, buttons){
	   var formEles = j$("form input");
	   formEles.each(function(){
		   var ele = j$(this);
		   var id = ele.attr("id");
	   	   var type = ele.attr("type");
	   	   //alert(id + "/" + type);
	   	   if (type != "hidden" && type != "button") {
		   	   if ("text" == type) {
		   			ele.bind("keyup", function(){ kutil.showButton(items, buttons); });
		   	   } else {
		   		    ele.bind("change", function(){ kutil.showButton(items, buttons); });
		   	   }
	   		   //ele.bind("mouseout", function(){ kutil.showButton(items, buttons); });
	   	   }
	   });
	   
	   var textareaEles = j$("form textarea");
	   textareaEles.each(function(){
		   var textareaEle = j$(this);
		   textareaEle.bind("keyup", function(){ kutil.showButton(items, buttons); });
	   });	   

	   var selEles = j$("form select");
	   selEles.each(function(){
		   var selEle = j$(this);
	   	   selEle.bind("change", function(){ kutil.showButton(items, buttons); });
	   });	   
	}
		
	/**
	 * 清空指定的表单项的值，如果有表单项有默认值，则设为默认值
	 * @param items 清空项ID组合,以逗号分隔
	 */
	my.clearItems = function(items) {
	   var aItem = new String(items).split(",");
	   j$.each(aItem, function(i){
	   		var currentItem = aItem[i];
	   		var $item = j$("#" + currentItem);  // 获取表单元素的jQuery对象
	   		$item.val("");
	   })
	}
	
	/**
	 * 必须输入项控制按钮事件, 如果已全部输入，则使指定的按钮项可用
	 * @param items 必输项ID组合,以逗号分隔
	 * @param buttons 需要控制的按钮项ID组合,以逗号分隔; 缺省值为 btnSave
	 */
	my.showButton = function(items, buttons) {
		var disabled = "" ;
	    var aItem = new String(items).split(",");
	    j$.each(aItem, function(i){
	   		var currentItem = aItem[i];
	   		if (disabled === "") { 
	   			disabled = kutil.isNull($("#" + currentItem).val());
	   		} else {
	   			disabled = disabled || kutil.isNull($("#" + currentItem).val());
	   		}
	    })
	    
	    if ((typeof buttons == "undefined") ||  buttons === null || buttons === "") {
		    $('#btnSave').attr("disabled", disabled);
	    } else {
	    	var aButton = new String(buttons).split(",")
		    $.each(aButton, function(i){
		   		var currentButton = aButton[i];
		   		$("#" + currentButton).attr("disabled", disabled);
		    })
	    }
	    
	}
	
	/**
	 * 判断某个变量值是否为空值
	 * 
	 */
	my.isNull = function(initValue){
		if (initValue == null || initValue.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 将字符串转化为UTF8的字符编码 
	 * （前端做2次转码，后端做1次转码）
	 */
	my.toUTF8 = function(initValue) {
		if (initValue == null || initValue.length == 0) {
			return initValue;
		} else {
			return encodeURIComponent(encodeURIComponent(initValue));
		}
	}

	/**
	 * 获取半角字符串的长度
	 * (ascii字符统计为一个字符；汉字统计为2个字符)  
	 */
	my.getLengthB = function(str){
		var lenb = str.replace(/[^\x00-\xff]/g,'xx').length;
		return lenb;
	}

	/**
	 * 获取字符串的长度
	 * (ascii字符和汉字都统计为一个字符)  
	 */
	my.getLength = function(str){
		var len = str.length;
		return len;
	}	
	
	
	/**
	 * 下拉列表框加载
	 * 
	 *   selectId-选择框ID, 不带#
	 *   comboBoxName-下拉列表框名称
	 *   paramValue-参数值,可以不传
	 *   isYXB - 是否部门权限过滤,可以不传,缺省为0
	 *   isCDDW- 是否承担单位权限过滤,可以不传,缺省为0
	 *   isAsync- 是否异步,可以不传,缺省为true
	 */
	my.loadDropLists = function(selectId, comboBoxName, paramValue, isYXB, isCDDW, isAsync) {
		// 如果参数的长度为1，表明传入的多级下拉列表数组
		//if (arguments.length == 1) {
		//	kutil.loadDropLists3(arguments[0]);
		//	return ;
		//}
		// 初始化参数值: undefined：表示一个对象没有被定义或者没有被初始化。null：表示一个尚未存在的对象的占位符。	
		if ((typeof paramValue == "undefined") || (paramValue == null)) { paramValue = ""; }
		if ((typeof isYXB   == "undefined") || (isYXB   == null)) {	isYXB = "0"; }
		if ((typeof isCDDW  == "undefined") || (isCDDW  == null)) { isCDDW = "0"; }
		if ((typeof isAsync == "undefined") || (isAsync == null)) {	isAsync = true; }
		//alert(">> selid/comboBoxName/paramValue/isYXB/isCDDW = " + selectId + "/" + comboBoxName + "/"+ paramValue + "/" + isYXB + "/" + isCDDW );
		var url = _webRootPath + "frame/droplist/getDropLists.action";
		var data = {
					"comboBoxName" : comboBoxName,
					"paramValue"   : paramValue,
					"isYXB"  : isYXB,
					"isCDDW" : isCDDW
				  };
		jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			dataType: "json",
			async: isAsync,
			success: function(data) {
				fillDropLists(selectId, data);
			} 
		});
	}

	/**
	 *  带缺省值的下拉列表框加载
	 * 
	 *   selectId     - 选择框ID, 不带#
	 *   comboBoxName - 下拉列表框名称
	 *   paramValue   - 参数值,可以不传
	 *   initValue    - 初始缺省值,可以不传
	 */
	my.loadDropListsWithInitValue = function(selectId, comboBoxName, paramValue, initValue) {
		//alert(">> loadDropListsWithInitValue = " + selectId + ":" + comboBoxName + ":" + paramValue + ":" + initValue);
		var url = _webRootPath + "frame/droplist/getDropLists.action";
		var data = {
					 "comboBoxName" : comboBoxName,
					 "paramValue"   : paramValue
				   };
		jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			dataType: "json",
			success: function(data) {
				fillDropLists(selectId, data, initValue);
			} 
		});
	}	

	/**
	 * 填充下拉列表选择框中的记录(私有方法)
	 * @param selId
	 * @param data
	 * @param initValue 初始值
	 * @param selNull 下拉框是否允许选择空值(缺省为true)
	 * @return
	 */
	function fillDropLists(selId, data, initValue, selNull){
		if ((typeof initValue == "undefined") || (initValue == null)) { initValue = ""; }
		if ((typeof selNull == "undefined") || (selNull == null)) { selNull = true; }
	    var rows = data;
		/** jQuery.each(rows, function(i) {
			var row = rows[i];
			var str = "<option value='" + row['code'] + "'>" + row['name'] + "</option>";
			seloption.append(str);  // 逐条追加(性能不如批量追加)
		}); */
	    var str ;
	    jQuery.each(rows, function(i) {
	        var row = rows[i];
			var code = row['code'];
			var name = row['name'];
			if (initValue != null && initValue.length > 0 && initValue == code) {
				str += "<option value='" + code + "' selected='selected'>" + name + "</option>";
			} else {
				str += "<option value='" + code + "'>" + name + "</option>";
			}	        
	    });
	    
	    var selIdStr = new String(selId);
	    if (selIdStr.isContains(",")){   // 同一数据加载到多个下拉列表框情况
	    	var aSelId = selIdStr.split(",");
	    	//alert("selId=" + selId + "/aSelId=" + aSelId)
	    	for (var j = 0; j < aSelId.length ; j++) {
	    	    var seloption = jQuery("#"+aSelId[j]);
	    	    seloption.empty();
	    	    if (selNull){
	    	    	seloption.append("<option value=''></option>"); // 加上空行
	    	    }
	    	    seloption.append(str);  // 批量追加
	    	}
	    } else {
		    var seloption = jQuery("#"+selId);
		    seloption.empty();
    	    if (selNull) {
    	    	seloption.append("<option value=''></option>"); // 加上空行
    	    }
		    seloption.append(str);  // 批量追加
	    }
	}
	
	/**
	 *  多级联动下拉列表: 处理2级联动和3级联动 (私有方法,待完善)
	 *  
	 *  调用示例： 
	 *	var aParam = [
	 *             		{selId:"province", cbName:"MsProvince",params:"", isYXB:"1"},
	 *             		{selId:"city", cbName:"MsCity"}
	 *            	 ];
	 *	loadDropLists3(aParam);
	 *
	 *  @param selId   下拉列表区加载ID, 必须项
	 *  @param cbName  下拉列表数据对应的配置项名称, 缺省值为MsCodeset(来源于信息标准字典)
	 *  @param paramValue 参数值, 参数形式: name1=value1&name2=value2&...  
	 *  @param initValue  缺省值
	 *  @param isYXB   是否部门权限过滤,可以不传,缺省为0
	 *  @param isCDDW  是否承担单位权限过滤,可以不传,缺省为0
	 *  @param isAsync 是否异步,可以不传,缺省为true
	 *  
	 */
	my.loadDropLists3 = function(aParam){
		
	    var dl_length = aParam.length ;
	    
	    // 获取第一组下拉列表参数值,并加载第1组下拉列表数据
	    var oParam_1 = initDropListParams(aParam[0]);
	    loadDropListInfo(oParam_1);
	    
	    //-----------------------------------------------------------
	    if (dl_length > 1) { // 超过1级下拉列表
	    //-----------------------------------------------------------
	    
		    // 第一组下拉列表change事件
	    	var selId = oParam_1['selId'] ;
	    	var dbItem = oParam_1['dbItem'] ;
	    	var paramValue = oParam_1['paramValue'] ;
	    	jQuery("#" + selId).unbind("change"); // 解除原有的绑定事件,如果有的话
		    jQuery("#" + selId).change(function(){
		    	
	        	// 清空下一级下拉列表
				jQuery("#" + aParam[1]['selId']).empty();
				if (dl_length > 2) { // 如果有第三级，清空下拉列表
					jQuery("#" + aParam[2]['selId']).empty();
				}
		    	if (dl_length > 3) { // 如果有第四级，清空下拉列表
					jQuery("#" + aParam[3]['selId']).empty();
				}
		        var currentValue_1 = $(this).val();
		        if (!kutil.isNull(currentValue_1)) {
		    	    // 获取第二组下拉列表参数值
			        var oParam_2 = initDropListParams(aParam[1]);
			        // 处理参数传值: 将一级下拉列表的选定项及其当前值附加到参数值中
			        var paramValue_2 = oParam_2['paramValue'] ;
					if ((typeof paramValue_2 == "undefined") || (paramValue_2 == null) || (paramValue_2 == "")) {
						paramValue_2 = dbItem + "=" + currentValue_1 ;; 
					} else {
						paramValue_2 += "&" + dbItem + "=" + currentValue_1 ;  
					}
					if (paramValue != "") {
						paramValue_2 = paramValue + "&" + paramValue_2 ; 
					}
					oParam_2['paramValue'] = paramValue_2 ;
					
		        	// 加载第2组下拉列表数据
				    var selId_2 = oParam_2['selId'] ;
			    	var dbItem_2 = oParam_2['dbItem'] ;
				    loadDropListInfo(oParam_2);
				    
				    //-----------------------------------------------------------
				    if (dl_length > 2) { // 超过2级下拉列表
				    //-----------------------------------------------------------
				    	
				    	jQuery("#" + selId_2).unbind("change"); // 解除原有的绑定事件,如果有的话
						jQuery("#" + selId_2).change(function(){
							// 清空下一级下拉列表
							jQuery("#" + aParam[2]['selId']).empty();
					    	if (dl_length > 3) { // 如果有第四级，清空下拉列表
								jQuery("#" + aParam[3]['selId']).empty();
							}
							
							// 若当前值不为空值,则加载下拉列表数据
							var currentValue_2 = $(this).val();
							if (!kutil.isNull(currentValue_2)) {
							    // 获取第3组下拉列表参数值
								var oParam_3 = initDropListParams(aParam[2]);
								// 处理参数传值: 将上二级下拉列表的选定项及其当前值附加到参数值中
								var paramValue_3 = oParam_3['paramValue'] ;
								if ((typeof paramValue_3 == "undefined") || (paramValue_3 == null) || (paramValue_3 == "") ) { 
									paramValue_3 = dbItem + "=" + currentValue_1  + "&" + dbItem_2 + "=" + currentValue_2; 
								} else {
									paramValue_3 += "&" + dbItem + "=" + currentValue_1  + "&" + dbItem_2 + "=" + currentValue_2;  
								}
								if (paramValue != "") {
									paramValue_3 = paramValue + "&" + paramValue_3 ; 
								}
								oParam_3['paramValue'] = paramValue_3 ;
								//alert("selId_3/paramValue_3 = " + selId_3 + "/" + paramValue_3 );
								// 加载第3组下拉列表数据
								var selId_3  = oParam_3['selId'] ;
								var dbItem_3 = oParam_3['dbItem'] ;
							    loadDropListInfo(oParam_3);
							    
							    //-----------------------------------------------------------
							    if (dl_length > 3) { // 超过3级下拉列表
							    //-----------------------------------------------------------
							    	
							    	jQuery("#" + selId_3).unbind("change"); // 解除原有的绑定事件,如果有的话
									jQuery("#" + selId_3).change(function(){
										// 清空下一级下拉列表
										jQuery("#" + aParam[3]['selId']).empty();
										// 若当前值不为空值,则加载下拉列表数据
										var currentValue_3 = $(this).val();
										if (!kutil.isNull(currentValue_3)) {
										    // 获取第4组下拉列表参数值
											var oParam_4 = initDropListParams(aParam[3]);
											// 处理参数传值: 将上三级下拉列表的选定项及其当前值附加到参数值中
											var paramValue_4 = oParam_4['paramValue'] ;
											if ((typeof paramValue_4 == "undefined") || (paramValue_4 == null) || (paramValue_4 == "") ) { 
												paramValue_4 = dbItem + "=" + currentValue_1  + "&" + dbItem_2 + "=" + currentValue_2 + "&" + dbItem_3 + "=" + currentValue_3 ; 
											} else {
												paramValue_4 += "&" + dbItem + "=" + currentValue_1  + "&" + dbItem_2 + "=" + currentValue_2 + "&" + dbItem_3 + "=" + currentValue_3 ;  
											}
											if (paramValue != "") {
												paramValue_4 = paramValue + "&" + paramValue_4 ; 
											}
											oParam_4['paramValue'] = paramValue_4 ;
											//alert("selId_4/paramValue_4 = " + selId_4 + "/" + paramValue_4 );
											// 加载第4组下拉列表数据
											var selId_4  = oParam_4['selId'] ;
										    loadDropListInfo(oParam_4);
									    }
							    
								    //-----------------------------------------------------------
								    }) // dl_length > 3  超过3级下拉列表
								    //-----------------------------------------------------------							    
							    
							    }
						    }
						});
				    	
				    //-----------------------------------------------------------
				    } // dl_length > 2  超过2级下拉列表
				    //-----------------------------------------------------------
		        }
		    });
		    
	    //-----------------------------------------------------------
	    }  // dl_length > 1  超过一级下拉列表
	    //-----------------------------------------------------------
	    
	}
	
	/**
	 * 加载下拉列表
	 * @param oParam 下拉列表参数的JSON对象
	 */
	my.loadDropList4Single = function(oParam){
		var myParam = initDropListParams(oParam);
		loadDropListInfo(myParam);
	}
	
	// 初始化下拉列表参数缺省值
	function initDropListParams(json) {
		// 获取原始参数值
	    var selId   = json['selId'] ;
	    var cbName  = json['cbName'] ;
	    var paramValue= json['paramValue'] ;
	    var initValue = json['initValue'] ;
	    var isYXB     = json['isYXB'];
	    var isCDDW    = json['isCDDW'] ;
	    var isAsync   = json['isAsync'] ;
	    var dbItem    = json['dbItem'];
	    var selNull   = json['selNull'];  // 是否允许选取空值(缺省为true)
	    var callback  = json['callback'];
	    // 初始化参数缺省值
		if ((typeof cbName == "undefined") || (cbName == null)) { cbName = "MsCodeset"; }
		if ((typeof paramValue == "undefined") || (paramValue == null)) { paramValue = ""; }
		if ((typeof initValue == "undefined") || (initValue == null)) { initValue = ""; }
		if ((typeof isYXB   == "undefined") || (isYXB   == null)) {	isYXB = "0"; }
		if ((typeof isCDDW  == "undefined") || (isCDDW  == null)) { isCDDW = "0"; }
		if ((typeof isAsync == "undefined") || (isAsync == null)) {	isAsync = true; }
		if ((typeof dbItem == "undefined") || (isAsync == null)) {	dbItem = selId; }
		if ((typeof selNull == "undefined") || (selNull == null)) {	selNull = true; }
		//alert(selId + "/" + cbName + "/" + paramValue + "/" + initValue + "/" + isYXB + "/" + isCDDW + "/" + isAsync + "/" + dbItem);
		// 重新赋值返回
		var params = new Object();
		params['selId'] = selId;
		params['cbName'] = cbName;
		params['paramValue'] = paramValue ;
		params['initValue'] = initValue ;
		params['isYXB'] = isYXB;
		params['isCDDW'] = isCDDW ;
		params['isAsync'] = isAsync;
		params['dbItem'] = dbItem;
		params['selNull'] = selNull;
		params['callback'] = callback ;
	    return params ;
	}

	// 下拉列表框加载, 私有方法
	function loadDropListInfo(json) {
	    var selId   = json['selId'] ;
	    var cbName  = json['cbName'] ;
	    var paramValue= json['paramValue'] ;
	    var initValue = json['initValue'] ;
	    var isYXB     = json['isYXB'];
	    var isCDDW    = json['isCDDW'] ;
	    var isAsync   = json['isAsync'] ;
	    var selNull   = json['selNull'] ;
	    var callback   = json['callback'] ;
	    
		// 与服务器端交互的url和参数
		var url = _webRootPath + "frame/droplist/getDropLists.action";
		var params = {
						"comboBoxName" : cbName,
						"paramValue"   : paramValue,
						"isYXB"  : isYXB,
						"isCDDW" : isCDDW
				  	 };
		jQuery.ajax({
			type: "POST",
			url: url,
			data: params,
			dataType: "json",
			async: isAsync,
			success: function(data) {
				fillDropLists(selId, data, initValue, selNull);
				
				if (callback) { // 如果存在回调则调用回调函数
					var _type = typeof callback ;
					//alert("_type:" + _type);
					if (_type == "string") { // 传入的是字符
						eval(callback + "()");  
					} else if (_type == "function"){ // 传入的是函数
						callback();
					}					
				}
				
			} 
		});
	}	
	
	/**
	 * 下拉列表框加载
	 * 
	 *   selectId-选择框
	 *   code-列表项value赋值项
	 *   name-列表项显示项的赋值项
	 *   url-加载目录书数据的url, 调用传入:解决url的上下文路径问题
	 *   initValue-初始值,可以不传
	 */
	my.loadSelects = function(selectId, code, name, url, initValue) {
		//alert(">> selid/url/initValue = " + selectId + "/" + url + "/" + initValue);
		jQuery.ajax({
			type: "POST",
			url: url,
			data: null,
			dataType: "json",
			success: function(data) {
				var rows = data;
				var seloption = jQuery(selectId);
				seloption.empty();
				// 加上空行:请选择   
				seloption.append("<option value=''></option>");
				jQuery.each(rows, function(i) {
					var row = rows[i];
					var str = "<option value='" + row[code] + "'>" + row[name] + "</option>";
					if (initValue != null && initValue.length > 0 && initValue == row[code]) {
						str = "<option value='" + row[code] + "' selected='selected'>" + row[name] + "</option>";
					}
					seloption.append(str);
				});
			} 
		});
	}	

	/**
	 * 指定访问路径和访问参数的Ajax调用
	 * 
	 * @param url 	   访问路径
	 * @param params   URL附带的参数，可以是值对，也可以是JSON串
	 * @param callback 成功后回调函数
	 * @param async    是否异步(缺省为true)
	 * @param precallback 方法执行前回调函数
	 * 
	 */
	my.doAjax = function(url, params, callback, async, precallback) {
		var isAsync = true;
		if (async){ 
			isAsync = async;
		} else {
			isAsync = true;
		}
		jQuery.ajax({
			type: "POST",
			url: url,
			data: params, 
			dataType: "text",
			beforeSend: function() { 
					if (precallback) { 
						precallback();
					}  
				},	
			async: isAsync,
			success: callback
		})		
	} 

	/**
	 * 调用URL得到jsp页面输出流程，并将输出流追加到指定的DIV区域
	 * @param url Action或JSP访问路径
	 * @param params URL附带的参数，可以是值对，也可以是JSON串
	 * @param todiv DIV区域ID
	 */
	my.doAjaxLoading = function(url, params, todiv) {
		jQuery.ajax({
			type: "POST",
			url: url,
			data: params, 
			dataType: "text",
			beforeSend: function() { my.loading(todiv); },	
			success: function(data) {
				// 清空当前div
				jQuery("#" + todiv).empty();
				// 追加输出结果			
				jQuery("#" + todiv).html(data);
			}
		})		
	} 

	/**
	 * 数据加载提示 
	 * @param todiv DIV区域ID
	 * @return
	 */
	my.loading = function(todiv) {
		jQuery("#" + todiv).empty();	
		jQuery("#" + todiv).append("<p><center><table><tr valign='middle'><td><img src='" + _webRootPath + "custom/images/animatedEllipse.gif'></img></td><td style='font-size:20px;'>&nbsp;loading......</td></tr></table></center></P>");
	}

	/**
	 * 正在进行检索的提示
	 * @param frameId 加载数据的FRAME区域
	 * @return
	 */
	my.preloading = function(frameId) {
		//jQuery("#" + todiv).empty();	
		//jQuery("#" + todiv).append("<p><table><tr valign='middle'><td><img src='" + _webRootPath + "images/loading.gif'></img></td><td style='font-size:12px;color:blue;'>系统正在进行检索......</td></tr></table></P>");
		document.frames(frameId).document.body.innerHTML = 
			"<p><center><table><tr valign='middle'><td><img src='" + _webRootPath + "images/loading.gif'></img></td><td style='font-size:12px;color:blue;'>系统正在进行检索......</td></tr></table></center></P>";
	}
	
	/**
	 * 将数值(或字符)转化为2位小数表示 toFixed() ;
	 * @param x 转换前的数值
	 * @return f_x 转换后的数值
	 */
	my.convertTo2Digital = function (x)
	{
		var f_x = parseFloat(x);
		if (isNaN(f_x))
		{
			alert('不是有效的数值!');
			return false;
		}
		f_x = Math.round(f_x*100)/100;
		var s_x = f_x.toString();
		var pos_decimal = s_x.indexOf('.');
		if (pos_decimal < 0)
		{
			pos_decimal = s_x.length;
			s_x += '.';
		}
		while (s_x.length <= pos_decimal + 2)
		{
			s_x += '0';
		}
		return s_x;
	}
	

	var LODOP; // 声明为全局变量, 标识引用Lodop打印控件
	
	function getLodop(oOBJECT,oEMBED){
		/**************************
		  本函数根据浏览器类型决定采用哪个对象作为控件实例：
		  IE系列、IE内核系列的浏览器采用oOBJECT，
		  其它浏览器(Firefox系列、Chrome系列、Opera系列、Safari系列等)采用oEMBED,
		  对于64位浏览器指向64位的安装程序install_lodop64.exe。
		**************************/
		var installFile32 = _webRootPath + "custom/lodop/install_lodop32.exe";
		var installFile64 = _webRootPath + "custom/lodop/install_lodop64.exe";		
	    var strHtmInstall="<br><font color='#FF00FF' style='font-size: 12px; font-family: 宋体;'>打印控件未安装!点击这里<a href='"+installFile32+"' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
	    var strHtmUpdate="<br><font color='#FF00FF' style='font-size: 12px; font-family: 宋体;'>打印控件需要升级!点击这里<a href='"+installFile32+"' target='_self'>执行升级</a>,升级后请重新进入。</font>";
	    var strHtm64_Install="<br><font color='#FF00FF' style='font-size: 12px; font-family: 宋体;'>打印控件未安装!点击这里<a href='"+installFile64+"' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
	    var strHtm64_Update="<br><font color='#FF00FF' style='font-size: 12px; font-family: 宋体;'>打印控件需要升级!点击这里<a href='"+installFile64+"' target='_self'>执行升级</a>,升级后请重新进入。</font>";
	    var strHtmFireFox="<br><br><font color='#FF00FF' style='font-size: 12px; font-family: 宋体;'>注意：<br>1：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它。</font>";
	    var LODOP=oEMBED;		
		try{		     
			 //alert(navigator.userAgent);
		     //if (navigator.appVersion.indexOf("MSIE")>=0) LODOP=oOBJECT;
			 var isIE = (navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);
		     if (isIE) LODOP=oOBJECT;
		     
		     if ((LODOP==null)||(typeof(LODOP.VERSION)=="undefined")) {
				 if (navigator.userAgent.indexOf('Firefox')>=0)
		  	         document.documentElement.innerHTML=strHtmFireFox+document.documentElement.innerHTML;
				 if (navigator.userAgent.indexOf('Win64')>=0){
				 	if (isIE) 
				 		document.write(strHtm64_Install); 
				 	else
				 		document.documentElement.innerHTML=strHtm64_Install+document.documentElement.innerHTML;		 
				 } else {
				 	if (isIE) 
				 		document.write(strHtmInstall); 
				 	else
				 		document.documentElement.innerHTML=strHtmInstall+document.documentElement.innerHTML;
				 }
				 return LODOP; 
		     } else if (LODOP.VERSION<"6.1.4.3") {
		     //} else if (LODOP.VERSION<"6.1.2.9") {
			    if (navigator.userAgent.indexOf('Win64')>=0){		    	 
			        if (isIE) 
			            document.write(strHtm64_Update); 
			        else
				    	document.documentElement.innerHTML=strHtm64_Update+document.documentElement.innerHTML; 
				} else {
			        if (isIE) 
			        	document.write(strHtmUpdate); 
			        else
				    	document.documentElement.innerHTML=strHtmUpdate+document.documentElement.innerHTML; 
				}
				return LODOP;
		     }
		     //=====如下空白位置适合调用统一功能:=====
			 setTimeout(setLodopLicenses, 10); // LODOP注册
			 //alert("SET_LICENSES执行了");
		     //=======================================
		     return LODOP; 
		}catch(err){
			if (navigator.userAgent.indexOf('Win64')>=0)	
			document.documentElement.innerHTML="Error:"+strHtm64_Install+document.documentElement.innerHTML;else
			document.documentElement.innerHTML="Error:"+strHtmInstall+document.documentElement.innerHTML;
		    return LODOP; 
		}
	}
	
	// LODOP注册：license为空表示未注册，则进行LODOP软件注册
	function setLodopLicenses(){
		var license = LODOP.License ;
		if (kutil.isNull(license)) { 
			//alert("lodop.license is null .");	
			LODOP.SET_LICENSES("湖南青果软件有限公司","7FAE41D5AB0D657CCF77D05CE00F41A1","","");
		} else {
			//alert("lodop.license = " + license);	
		}
	}
	
	/**
	 * 调用LODOP控件进行打印预览
	my.preview = function(strURL, strTaskName, intOrient, strPageName, isShowPage){
		doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, false);
	};	
	*/
	my.preview = function(strURL, strTaskName, intOrient, strPageName, isShowPage, isPrintFooter, isPrintDate){
		doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, isPrintFooter, isPrintDate, false);
	};	

	/**
	 * 调用LODOP控件进行直接打印输出
	my.print = function(strURL, strTaskName, intOrient, strPageName, isShowPage){
		doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, true);
	};	
	*/
	my.print = function(strURL, strTaskName, intOrient, strPageName, isShowPage, isPrintFooter, isPrintDate){
		doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, isPrintFooter, isPrintDate, true);
	};	
	
	/**
	 * 调用LODOP控件进行打印预览或直接输出：
	 * 
	 * strURL - 打印输出页面的iframe名称或URL串,
	 * 			1) iframe名称表述,如"frm:frmReport",表示输出frame id名称为[frmReport]中内容(不进行二次查询,推荐使用)
	 * 			2) URL表述,如 "xxcx_jsjsfxx_date.jsp?id="+$("menuId").value,表示输出该URL检索出来的内容(超过10页时打印页码显示尚存在问题)
	 * strTaskName - 打印任务名，
	    		字符型参数，由开发者自主设定，未限制长度，字符要求符合Windows文件起名规则，Lodop会根据该名记忆相关的打印设置、打印维护信息。
	    		若strTaskName空，控件则不保存本地化信息，打印全部由页面程序控制。
	 * intOrient - 打印方向  1-纵向，2-横向, 缺省为1；也可以用P-纵向;L-横向标识。
	 * strPageName - 纸张名称, 缺省为A4
	 * isShowPage - 打印时是否显示页码(true-显示页码; false-不显示页码)可以不传入值,缺省为true
	 * isDirectPrint - 是否直接输出(true-直接输出; false-打印预览)
	*/
	function doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, isPrintFooter, isPrintDate, isDirectPrint){
	//function doLodopPrint(strURL, strTaskName, intOrient, strPageName, isShowPage, isDirectPrint){
		// 初始化参数值
		// undefined：表示一个对象没有被定义或者没有被初始化。null：表示一个尚未存在的对象的占位符。	
		if ((typeof strTaskName == "undefined") || (strTaskName == null)) {
			strTaskName = "KINGOSOFT高校教务网络系统2012版报表打印";
		}
		if ((typeof intOrient == "undefined") || (intOrient == null)) {
			intOrient = 1;   // 缺省打印方向：1-纵向
		}
		if (intOrient == "P") { intOrient = 1; }
		if (intOrient == "L") { intOrient = 2; }
		
		if ((typeof strPageName == "undefined") || (strPageName == null)) {
			strPageName = "A4";  // 缺省纸张名称：A4
		}
		if ((typeof isShowPage == "undefined") || (isShowPage == null)) {
			isShowPage = true;  // 缺省是否显示页码值：true
		}
		if ((typeof isPrintFooter == "undefined") || (isPrintFooter == null)) {
			isPrintFooter = false;  // 缺省是否显示页脚标识：false
		}
		if ((typeof isPrintDate == "undefined") || (isPrintDate == null)) {
			isPrintDate = false;    // 缺省是否显示打印时间：false
		}
		LODOP=getLodop(document.getElementById('LODOP_OB'),document.getElementById('LODOP_EM'));  
		// 打印初始化: 初始化运行环境，清理异常打印遗留的系统资源，设定打印任务名。
		LODOP.PRINT_INIT(strTaskName);
		// 设定纸张大小: SET_PRINT_PAGESIZE(intOrient, PageWidth,PageHeight,strPageName) 参考PrintSample5.html
		// 设定打印纸张为固定纸张或自适应内容高，并设定相关大小值或纸张名及打印方向。(intOrient: 1-纵向，2-横向，strPageName: A4纸张)
		LODOP.SET_PRINT_PAGESIZE(intOrient, 0, 0, strPageName);
		// 依据是否iframe名称输出body内容获取URL内容
		var isframe = new String(strURL).startsWith("frm:");
		//alert("strURL/isframe:" + strURL + "/" + isframe);
		if (isframe) {
			// 打印指定iframe中的body内容
			var frmName = new String(strURL).split(":")[1];
			var _html = j$(document.getElementById(frmName).contentWindow.document.body).html();
			var _body_style = j$(document.getElementById(frmName).contentWindow.document.body).attr("style");
			// 固定追加打印样式
			var strStyleCSS="<link rel='stylesheet' href='"+ _webRootPath +"css/Print.css' type='text/css'/>";
			//alert("strStyleCSS="+strStyleCSS);
			// 取文件定义样式
			var _style = j$(document.getElementById(frmName).contentWindow.document.getElementsByTagName("head")[0].document.getElementsByTagName("style")[0]).html();
			//var strFormHtml="<head>"+strStyleCSS + "<style type=\"text/css\">" + _style + "</style></head><body style='font-size:12px;text-align:center;font-family: 宋体;'>" + _html + "</body>";
			var strFormHtml= 
				"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">"+
				"<html>"+
				"<head>"+strStyleCSS + "<style type=\"text/css\">.bottom_page{display:none;}</style>";
			if (!kutil.isNull(_style)) {
				strFormHtml += "<style type=\"text/css\">" + _style + "</style>";
			}
			strFormHtml += "</head>";
			strFormHtml += "<body ";
			if (!kutil.isNull(_body_style)) {
				strFormHtml += "style='"+ _body_style +"'";
			}
			//alert(">> strFormHtml = " + strFormHtml);			
			strFormHtml += ">" + _html + "</body></html>";
			LODOP.ADD_PRINT_HTM(30,0,"100%","100%", strFormHtml);
		} else {
			//增加超文本打印项（URL模式）：ADD_PRINT_URL(Top,Left,Width,Height,strURL)
			var tjm = getTjm();
			if (strURL.indexOf("?") == -1){ // 增加页面请求的提交验证码标识
				strURL += "?tjm="+tjm ;
			} else {
				strURL += "&tjm="+tjm ;
			}
			LODOP.ADD_PRINT_URL(30,0,"100%","100%",strURL);
		}
		// 横向打印的预览默认旋转90度（正向显示）
		LODOP.SET_SHOW_MODE("LANDSCAPE_DEFROTATED",1);
		// 隐藏打印预览背景进纸版的图案
		LODOP.SET_SHOW_MODE("HIDE_PAPER_BOARD",1);
		// 依据纸张大小和方向确定页码的打印位置
		if(isShowPage && isframe) { // 如果打印时显示页码
			setPrintPage(strPageName, intOrient);
		}
		// 是否打印页脚标识和显示打印日期
		setPrintFooterInfo(strPageName, intOrient, isPrintFooter, isPrintDate);
		// 依据是否直接打印确定打印预览或直接输出
		if (isDirectPrint) { 
			LODOP.PRINT(); // 直接打印	
		} else {
			LODOP.PREVIEW(); // 打印预览	
		}
	};		

	// 依据纸张大小和方向确定页码的打印位置
	// strPageName 纸张大小 A3 : [297, 420],  A4 : [210, 297]
	// intOrient 1-纵向; 2-横向
	function setPrintPage(strPageName, intOrient){
		// 在距上边界 193mm，48mm，宽为200，高为22  这样一个区域内打印页码及总页数。
		var to_top = "283mm";
		var to_left = "0mm";
		if ("A4" == strPageName) {
			if (intOrient == 1) { // A4 横向
				to_top = "283mm";
				to_left = "0mm";
			} else { // A4纵向
				to_top = "198mm";
				to_left = "0mm";
			}
		} else if ("A3" == strPageName) {
			if (intOrient == 1) { // A3 横向
				to_top = "400mm";
				to_left = "0mm";
			} else { // A3纵向
				to_top = "280mm";
				to_left = "0mm";
			}
		}
		LODOP.ADD_PRINT_TEXT(to_top, to_left, 200, 22, "      第 # 页    共 & 页");
	    LODOP.SET_PRINT_STYLEA(2, "ItemType", 2);
	    LODOP.SET_PRINT_STYLEA(2, "HOrient", 2); // 设为水平方向居中	
	}
	
	// 依据纸张大小和方向确定页码的打印位置
	// 是否打印页脚标识和显示打印日期
	// strPageName 纸张大小 A3 : [297, 420],  A4 : [210, 297]
	// intOrient 1-纵向; 2-横向
	// isPrintFooter - 是否打印页脚
	// isPrintDate - 是否打印日期
	function setPrintFooterInfo(strPageName, intOrient, isPrintFooter, isPrintDate) {
		// 在距上边界 193mm，48mm，宽为200，高为22  这样一个区域内打印页码及总页数。
		var to_top = "283mm";
		var to_left = "0mm";
		if ("A4" == strPageName) {
			if (intOrient == 1) { // A4 横向
				to_top = "283mm";
				to_left = "0mm";
			} else { // A4纵向
				to_top = "198mm";
				to_left = "0mm";
			}
		} else if ("A3" == strPageName) {
			if (intOrient == 1) { // A3 横向
				to_top = "400mm";
				to_left = "0mm";
			} else { // A3纵向
				to_top = "280mm";
				to_left = "0mm";
			}
		}
		
		if (isPrintFooter) {
		
			/**
			var content = "教务处 制                                                                                                        打印日期：2013年09月15日";
			var nullinfo = ""; // 填充空格
			for (var i = 0; i++; i<104) {
				nullinfo += " ";
			}
			*/
			var foottitle = "教务处 制";
			var nullinfo = "                                                                                                        ";
			var printdate = "打印日期："+kutil.getCurrentDateYMD();
			var content = foottitle + nullinfo  ;
			if (isPrintDate){
				content += printdate ;
			}
			LODOP.SET_PRINT_STYLE("FontSize",9); 
			LODOP.SET_PRINT_STYLE("Bold",1); 
			LODOP.ADD_PRINT_TEXT("183mm", "10mm", 1280, 22, content);
		    LODOP.SET_PRINT_STYLEA(2, "ItemType", 1); // ItemType的值：数字型，0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
		    LODOP.SET_PRINT_STYLEA(2, "HOrient", 0);  // 0-左边距锁定；1-右边距锁定；2-水平方向居中；3-左边距和右边距同时锁定	
		    
		    /**
			LODOP.ADD_PRINT_TEXT(-30,40,200,25,"公共资源服务中心 制");
		    LODOP.SET_PRINT_STYLEA(2, "ItemType", 1); // ItemType的值：数字型，0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
			LODOP.SET_PRINT_STYLEA(0, "LinkedItem",1); // 利用SET_PRINT_STYLEA的类型“LinkedItem”可以把两个独立的内容关联起来，让它们顺序打印,
			LODOP.ADD_PRINT_TEXT(-30,885,200,25,"打印日期："+LODOP.FORMAT("TIME:YYYY年MM月DD日","DATE"));
		    LODOP.SET_PRINT_STYLEA(2, "ItemType", 1); // ItemType的值：数字型，0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
			LODOP.SET_PRINT_STYLEA(0, "LinkedItem",1);
		    */
		    
	    }
	}
		
	/**
	 * 显示提示消息3秒钟
	 * @param message 提示消息
	 * @param delay 延时(ms),缺省为3000
	 */
	my.showTip = function(message, delay) {
		// 初始化提示消息显示的延时时间
		var delayTime = 3000 ;
		// isNaN()的意思是非数字，里面传入数字的话就返回 false, 传入的不是数字的话就返回 true 
		// [ 空的话也是返回 true, 一个点也是返回 true, 点个数字组合返回的是 false, 说明是数字 ] 
		if (delay && !isNaN(delay)) {
			delayTime = delay ;
		}
		// 提示消息区: divTip 如果不存在, 则先在divTitle元素后创建该DIV
		if (!$("#divTip")) {
			$("#divTitle").after($("<div id='divTip'></div>"));
		}
		// 显示提示消息
		var $divTip = jQuery("#divTip") ;
		if ($divTip) {
			$divTip.html(message);
			setTimeout(function(){$divTip.html("");}, delayTime);
		} else {
			alert(message);
		}
	}
	
	/*将整个页面设置为不可用*/
	my.disablePage=function(){
		window.document.body.style.color="gray";
		var implements=["input","img","select"];
		for(var i=0;i<implements.length;i++){
			var impls=document.getElementsByTagName(implements[i]);
			for(var ind=0;ind<impls.length;ind++){
				impls[ind].disabled=true;impls[ind].onclick="";
			}
		}
	}	
	
	my.setTrustedWebsites = function(){
	 	try {
			var WshShell=new ActiveXObject("WScript.Shell");     
			//添加信任站点ip     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range100//","");
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range100//http","2","REG_DWORD");
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range100//:Range","127.0.0.1");
			//添加信任站点ip
			//WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range200//","");
			//WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range200//http","2","REG_DWORD");
			//WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//ZoneMap//Ranges//Range200//:Range","192.168.1.11");			    
			//修改IE ActiveX安全设置     			    
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//1001","0","REG_DWORD");     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//1004","0","REG_DWORD");     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//1200","0","REG_DWORD");     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//1201","0","REG_DWORD");     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//1405","0","REG_DWORD");     
			WshShell.RegWrite("HKCU//Software//Microsoft//Windows//CurrentVersion//Internet Settings//Zones//3//2201","0","REG_DWORD");     
			//禁用xinxp弹出窗口阻止程序     			    
			WshShell.RegWrite("HKCU//Software//Microsoft//Internet Explorer//New Windows//PopupMgr","no");     				    
			//alert("active控件安全设置，弹出窗口设置，信任站点设置成功");  	
			return true;			
		}
		 catch(e)
	    {
            alert('请在浏览器中将我设置为信任站点：Internet选项→安全→受信任的站点，点【站点】进行设置，设置时去掉https验证要求!');  
            return false;
	    }
	    
	}
	
    // 获取一个加密的随机验证码，用于提交请求时的验证== 2013.09.23 ==//
	function getTjm() {
        var tjm = "";
		var url = _webRootPath + "cas/genRequestCode" ;
		var params = "" ;
		$.ajax({
			type: "POST",
			url: url,
			data: params, 
			dataType: "text",
			async: false,  // 同步执行
			success: function(data) {
				tjm = data ;
			}
		});	
		return tjm ;
	}	
	
	/**
	* 检测密码是否符合密码策略
	* 1、用户密码不能与登陆帐号一致。
	* 2、用户密码必须为6位或6位以上字符长度，并且包含有字符和数字。
	* return 1-符合; 0-不符合
	*/
	my.isPasswordPolicy = function(username, password){
		if (password == "" || password == null || username == password){
			return "0" ;
		}
		var passwordlen = new String(password).length ;
		if (passwordlen < 6){
			return "0" ;
		}
		var letter = new String(password).replace(/[^A-Za-z]/g, ""); // 保留字母
		var letterlen = letter.length ;
		if (letterlen == passwordlen) { 
			return "0";
		}
		var digit = new String(password).replace(/[^0-9]/g, ""); // 保留数字
		var digitlen = digit.length ;
		if (digitlen == passwordlen) { 
			return "0";
		}
		return "1" ;
	}	
	
	return my ;
	
}(kutil||{}, jQuery));

var k$ = kingo  = Kingoutil = kutil ;

jQuery(document).ready(function(){	
	document.oncontextmenu = function () {
       return false;
    }	
})
