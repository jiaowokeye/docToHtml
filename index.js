


var outputOption = require("./config.js");
console.log(outputOption);
var mammoth = require("mammoth");
let fs = require("node-fs");
var htmlStr = "";
var options = {
    convertImage: mammoth.images.imgElement(function (image) {
        return image.read("base64").then(function (imageBuffer) {
            return {
                src: "data:" + image.contentType + ";base64," + imageBuffer
            };
        });
    }),
    styleMap: [
        "p[style-name='Section Title'] => h1:fresh",
        "p[style-name='Subsection Title'] => h2:fresh",
        "i => strong", "u => em", "strike => del", "comment-reference => sup"
    ],
    includeDefaultStyleMap: false
};





mammoth.convertToHtml({
        path: outputOption.inputDocPath
    }, options)
    .then(function (result) {
        var text = result.value; // The raw text
        var messages = result.messages;
	// 发送 HTTP 头部 
            // HTTP 状态值: 200 : OK
            // 内容类型: text/plain
            let html = '<!DOCTYPE html>' +
                '<html lang="en">' +
                '<head>' +
                '<meta charset="UTF-8">' +
                '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />' +
                '<meta name=”renderer” content=”webkit” />' +
                '<meta name="keywords" content="移动协同办公，移动考勤，移动审批，移动CRM，定位轨迹，客户管理，销售管理，HCM，SaaS" />' +
                '<meta name="description" content="爱到位-位智天下股份有限公司，中国自主SaaS行业领先者，秉承让管理更到位的产品理念，全面管理企业日常工作，涵盖云通讯、云管理和云营销，致力于让客户便捷、高效、更好性价比地运营管理和服务。" />' +
                '<script src="http://www.idaowei.com/js/lib/jquery-1.9.1.js"></script>' +
                '<script src="http://www.idaowei.com/js/news.js"></script>' +
                '<script type="text/javascript" src="http://www.idaowei.com/js/Constant.js"></script>' +
                '<script type="text/javascript" src="http://www.idaowei.com/js/CommonResource.js"></script>' +
                '<script type="text/javascript" src="http://www.idaowei.com/js/login.js"></script>' +
                '<title>新闻</title>' +
                '<link rel="stylesheet" href="http://www.idaowei.com/css/news.css">' +
                '<link rel="shortcut icon" type="image/x-icon" href="http://www.idaowei.com/idaowei.ico" media="screen" />' +
                '</head>' +
		'<style>.text_con p img{max-width: 100%;}</style>'+
                '<body>' +
                '<!--头部开始-->' +
                '<div id="header-wrap">' +
                '<div id="Header" >' +
                '<a href="http://www.idaowei.com/index.html"><img src="http://www.idaowei.com/images/logo.png" alt="" class="logo"></a>' +
                '<span class="securities-wrap">【<span class="securities">证券代码</span>：872156】</span>' +
                '<div class="login-box floatR" id="formdiv">' +
                '<form id="loginForm" onkeydown="if(event.keyCode==13){Login.logon(true);}">' +
                '<div class="form-gruop floatL">' +
                '<span>用户名：</span><input type="text" id="username" name="username" placeholder="请输入用户名">' +
                '</div>' +
                '<div class="form-gruop floatL">' +
                '<span>密码：</span><input type="password" id="password" name="password" placeholder="请输入密码">' +
                '</div>' +
                '<div class="form-gruop floatL">' +
                '<a id="loginBtn" href="javascript:Login.logon(true)"> 登录 <span >Login</span></a>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '<div class="login-box floatR" style="display: none;" id="logindiv">' +
                '<div class="form-gruop floatL">' +
                '您好，您已登录位智天下后台管理系统' +
                '</div>' +
                '<div class="form-gruop floatL">' +
                '<a href="javascript:Login.logout();">注销</a>' +
                '<a href="javascript:Login.login(true);">进入</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
		'<div id="content">' +
		'<div class="news_title"> <h2>'+outputOption.title+'</h2><p class="timer">'+outputOption.date+'</p></div><div class="text_con">'+
         	text +
		'</div></div>'+
                '<!--footer部分开始-->' +
                '<div id="footer-wrap">' +
                '<div id="footer" >' +
                '<div class="footer-left  floatL">' +
                '<div >' +
                '<ul class="function">' +
                '<li><a href="./../productAction.html#clockinM">考勤</a></li>' +
                '<li><a href="./../productAction.html#shenpi">审批</a></li>' +
                '<li><a href="./../productAction.html#kehuguanli">客户</a></li>' +
                '<li><a href="./../productAction.html#kehubaifang">拜访</a></li>' +
                '<li><a href="./../productAction.html#sales">销售</a></li>' +
                '<li><a href="./../productAction.html#dingdanguanli">订单</a></li>' +
                '<li><a href="./../productAction.html#contacts">人脉</a></li>' +
                '<li><a href="./../productAction.html#dingwei">送货追踪</a></li>' +
                '</ul>' +
                '<ul class="share">' +
                '<li><a target="_blank" href="http://weibo.com/idaowei?refer_flag=1001030102_"><img class="imgFirst" src="http://www.idaowei.com/images/shareSina.png" alt=""><img class="imgSecond" src="http://www.idaowei.com/images/shareSinaH.png" alt=""></a></li>' +
                '<li class="shareWx">' +
                '<a target="_blank" href="javascript:;"><img class="imgFirst" src="http://www.idaowei.com/images/sharewx.png" alt=""><img class="imgSecond" src="http://www.idaowei.com/images/sharewxH.png" alt=""></a>' +
                '<div><img src="http://www.idaowei.com/images/code.jpg" alt=""></div>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '<div >' +
                '<p class="record">Copyright 2010-2017 idaowei.com All Rights Reserved 京ICP备11019734号-2 京公网安备11010802013421号</p>' +
                '</div>' +
                '</div>' +
                '<div class="footer-right floatR">' +
                '<img src="http://www.idaowei.com/images/footer-wx.png" alt="">' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<!--footer部分结束-->' +
                '</body>' +
                '</html>';
	  fs.writeFile(outputOption.outHtmlName,html,(err) => {
	    console.log('111',err)
	  })
    })
    .done();
