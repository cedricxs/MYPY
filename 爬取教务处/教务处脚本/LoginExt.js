j$(document).ready(function(evt){
	// 初始化验证码
	//refreshImg();
	// 加载校历
	onloadYears();
	// 初始化页面事件
	doInitHomepage();
	// Enter键转TAB
	//kutil.enter2tab("LoginForm");
	// 定位焦点
	j$("#yhmc").focus();
})

//功能：将回车键转tab键
jQuery(function () {
    jQuery('input:first').focus();
    var $inp = jQuery('input');
    $inp.bind('keydown', function (e) {
        var key = e.which;
        if (key == 13) {
            e.preventDefault();
            var nxtIdx = $inp.index(this) + 1;
            jQuery(":input:eq(" + nxtIdx + ")").focus();
        }
    });
});  

// 初始化页面事件
function doInitHomepage() {
	// 1. 通知公告
	// 1.1 加载通知公告
	loadingSchoolNotice();
	// 1.2 更多通知公告
	j$("#to_more").click(function(){
		var url = _webRootPath +　 "public/SchoolNotice.jsp";
		goUrl(url);
	})
	
	// 2. 调课信息
	loadingTkxx();
	// 2.2 更多调课信息
	j$("#to_more_tkxx").click(function(){
		var url = _webRootPath +　 "public/bbs.tkxx.more.jsp?role=jwc";
		goUrl(url);
	})

	// 3. 教室动态
	loadingJsdt();
	// 3.2 更多教室动态
	j$("#to_more_jsdt").click(function(){
		var url = _webRootPath +　 "public/bbs.jsdt.more.jsp?role=jwc";
		goUrl(url);
	})
	
	j$("#to_more,#to_more_tkxx,#to_more_jsdt").mouseover(function(){
		j$(this).css("cursor","pointer");
	});	
	
	// 2. 课表查询
	// 2.1 qry_kckb:课程课表
	j$("#qry_kckb,#qry_zykb,#qry_zrjckb,#qry_jskb,#qry_jsikb,#qry_qxkb_ajs,.qry_title").mouseover(function(){
		j$(this).css("cursor","pointer");
	});
	j$("#qry_kckb").click(function(){
		var url = _webRootPath +　"public/dykb.kckb.html";
		goUrl(url) ;
	});
	
	// 2.2 qry_zykb:专业课表
	j$("#qry_zykb").click(function(){
		var url = _webRootPath +　"public/dykb.bjkb.html";
		goUrl(url) ;
	});
	
	// 2.3 qry_zrjckb:周/日/节次课表
	j$("#qry_zrjckb").click(function(){
		var url = _webRootPath +　"public/dykb.zrjckb.html";
		goUrl(url) ;
	});

	// 2.4 qry_jskb:教师课表
	j$("#qry_jskb").click(function(){
		var url = _webRootPath +　"public/dykb.jskb.html";
		goUrl(url) ;
	});
	
	// 2.5 qry_jsikb:教室课表
	j$("#qry_jsikb").click(function(){
		var url = _webRootPath +　"public/dykb.jsikb.html";
		goUrl(url) ;
	});

	// 2.6 qry_qxkb_ajs:全校课表[按教学楼]
	j$("#qry_qxkb_ajs").click(function(){
		var url = _webRootPath +　"public/dykb.qxkb.jsi.html";
		goUrl(url) ;
	});
	
	// 2.7 qry_kxjs:空闲教室查询
	j$("#qry_kxjs").click(function(){
		var url = _webRootPath +　"public/dykb.kxjsi.html";
		goUrl(url) ;
	});

	// 2.8 qry_jssyqk:教室使用情况
	j$("#qry_jssyqk").click(function(){
		var url = _webRootPath +　"public/dykb.jsisyqk.html";
		goUrl(url) ;
	});

	// 2.9 qry_rxkb:任选课表
	//j$("#qry_rxkb").click(function(){
		//var url = _webRootPath +　"public/dykb.rxkb.html";
		//goUrl(url) ;
	//});
	
	// 2.9 qry_cjjy:成绩校验
	j$("#qry_cjjy").click(function(){
		var url = _webRootPath +　"public/chjchx.chkdgxschj.html";
		goUrl(url) ;
	});
	
	
	// 扩展事件
	j$("#qry_kckb,#qry_zykb,#qry_zrjckb,#qry_jskb,#qry_jsikb,#qry_qxkb_ajs,#qry_kxjs,#qry_jssyqk").parent().mouseover(function(){
		j$(this).css("cursor","pointer")
	});
	j$("#qry_kckb,#qry_zykb,#qry_zrjckb,#qry_jskb,#qry_jsikb,#qry_qxkb_ajs,#qry_kxjs,#qry_jssyqk").parent().click(function(){
		j$(this).children("span").triggerHandler("click");
	});

}

// 加载校内通知
function loadingSchoolNotice(){
	var _url = _webRootPath + "public/bbsSchoolNotice.action?from=loginpage&recordsPerPage=7";
	kutil.doAjax(_url, "", doPostLoading);
	function doPostLoading(response) {
		j$("#desk_notice").html(response);
	}
}

// 加载调课信息
function loadingTkxx(){
	var _url = _webRootPath + "public/bbsTkxx.action?from=loginpage&recordsPerPage=7";
	kutil.doAjax(_url, "", doPostLoading);
	function doPostLoading(response) {
		j$("#desk_tkxx").html(response);
	}
}

// 加载教室动态
function loadingJsdt(){
	var _url = _webRootPath + "public/bbsJsdt.action?from=loginpage&recordsPerPage=7";
	kutil.doAjax(_url, "", doPostLoading);
	function doPostLoading(response) {
		j$("#desk_jsdd").html(response);
	}
}

// 查看校内通知
function viewNotice(schoolNoticeId) {
	var obj = new Object(); 
	obj.optype = "view";			
	var url = _webRootPath + "public/viewSchoolNoticeDetail.action?schoolNoticeId=" + schoolNoticeId;
	var result = window.showModalDialog(url, obj, "dialogWidth=800px;dialogHeight=600px;status=no;help=no;scroll=auto"); 			
}		
			
function doLogon() {
	
	// 输入信息验证
	if (!validate()) {
		return false;
	}
	
	// 验证码正确性验证
	var username = j$("#yhmc").val();
	var password = j$("#yhmm").val();
	var token = j$("#yhmm").val();
	var randnumber = j$("#randnumber").val();
	var passwordPolicy = kutil.isPasswordPolicy(username, password);
	var url = _webRootPath + "cas/logon.action";
	password = hex_md5(hex_md5(password)+hex_md5(randnumber.toLowerCase()));
	/**
	var params = {
					"yhmc" : username,
					"yhmm" : password,
					"token": token,
					"randnumber": randnumber,
					"isPasswordPolicy" : passwordPolicy
				};
	*/
	var p_username = "_u"+randnumber;
	var p_password = "_p"+randnumber;
	username = base64encode(username+";;"+_sessionid);
	var params = p_username+"="+username+"&"+p_password+"="+password+"&randnumber="+randnumber+"&isPasswordPolicy="+passwordPolicy ;
	//alert(params)
	//alert("params="+params);
	//params = getEncParams(params); 
	//alert("encparams="+params);
	doPreLogon();					
	kutil.doAjax(url, params, doPostLogon);					
	
	function doPreLogon(){
		j$("#msg").html("正在登录......");
		j$("#login").attr("disabled", true); 
		j$("#reset").attr("disabled", true);
	}

	function doPostLogon(response) {
		var data = JSON.parse(response); 
		var status = data.status ;
		var message = data.message ;
		if ("200" == status) {
			var result = data.result ;
			window.document.location.href = result ;
		} else {
			if("407" == status){
				alert(message);
				showMessage("");
			}else{
				showMessage(message);
			}
			j$("#login").attr("disabled", false); 
			j$("#reset").attr("disabled", false);
			//refreshImg();
			if ("401"==status) {
				j$("#randnumber").val("");
				j$("#randnumber").focus();
			} else {
				j$("#yhmc").val("");
				j$("#yhmm").val("");
				j$("#randnumber").val("");
				j$("#yhmc").focus();
				
			}
			var kingo_encypt = document.getElementById("kingo_encypt");
			kingo_encypt.src = _webRootPath+"custom/js/SetKingoEncypt.jsp";
			//reloadScript("kingo_encypt",_webRootPath+"custom/js/SetKingoEncypt.jsp"); 	
		}
	}
}

function validate() {
	var username = j$("#yhmc").val();
	var password = j$("#yhmm").val();
	var randnumber = j$("#randnumber").val();
	if (kutil.isNull(username)) {
		showMessage("请输入用户名!");
		j$("#yhmc").focus();
		return false;
	}
	if (kutil.isNull(password)) {
		showMessage("请输入密码!");
		j$("#yhmm").focus();
		return false;
	}
	if (kutil.isNull(randnumber)) {
		showMessage("请输入验证码!");
		j$("#randnumber").focus();
		return false;
	}
	return true;
}

// 重置密码为账号（找回密码）
function doReset() {
	var tourl = _webRootPath + "frame/retrievePassword.v2.jsp" ;
	window.document.location.href = tourl ;
}

// 转到05版教务系统
function doJwmis() {
	var tourl = "http://sctl.bnu.edu.cn/jwmis/" ;
	window.open(tourl) ;
}

/**
* 刷新验证码
*/			
var click_yzm = "0";
function refreshImg(flag){
	if (flag=="1"){
		// 通过点击生成验证码
		click_yzm = "1";
	} else {
		// 焦点定位生成验证码时已点击生成，忽略该次验证码生成
		if (click_yzm == "1"){
			//click_yzm = "0";
			return ;
		}
	}
	j$(".div_random>img").css("display","");
	var url = _webRootPath + "cas/genValidateCode?dateTime="+(new Date());
	document.getElementById("randpic").src = url ;
}

function showMessage(message){
	//j$("#msg").innerHTML = message;
	//setTimeout("j$('#msg').innerHTML='';",3000);
	alert(message);
}

function gologin(e , obj){
	var e = window.event?window.event:e;
	var x=e.keyCode;
	if(x!=13) return false;
	if(x<48||x>57) e.returnValue=false;
	obj.select();
	j$("#login").click();
}	

/**
* 转到特定的访问链接
*/
function goUrl(url){
	window.document.location.href = url ;
}

function onloadYears(){
	var url = _webRootPath + "public/getXLYears.action";
	kutil.doAjax(url,"",doPostGetXLYears);
	
	function doPostGetXLYears(response){
		var data=response;
		document.getElementById("xl_years").innerHTML=data;
		onloadXL(1);
	}
}

/**
 * 加载校历
 * @return
 */
function onloadXL(v){
	var year=document.getElementById("year").value;
	var month=document.getElementById("month").value;
	var url="";
	if(v==1){
		url=_webRootPath + "public/getXLInfos.action?year="+year+"&month="+month+"&init=init";
	}else{
		url=_webRootPath + "public/getXLInfos.action?year="+year+"&month="+month;
	}
	kutil.doAjax(url,"",doPostGetXLInfos);
	
	function doPostGetXLInfos(response){
		var data=response;
		document.getElementById("xlshow").innerHTML=data.split("*_*")[0];
		document.getElementById("xqshow").innerHTML=data.split("*_*")[1];
	}
}