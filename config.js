(function () {
	//这是写一些配置
	//title  生成html页面文章标题   date 文章日期   inputDocPath doc路径 outHtmlName  html页面 输出路径
	var outputOption = {
		"title":"高建华：不要再谈什么狼性管理了，激发团队的人性才能成就一家健康和快乐的企业",
		"date":"2018-06-20",
		"inputDocPath":"./doc/高建华：不要再谈什么狼性管理了，激发团队的人性才能成就一家健康和快乐的企业.docx",
		"outHtmlName":"./html/wxartical2.html"
	}
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = outputOption;
	} else if ( typeof define == 'function' && define.amd ) {
		define( function () { return IScroll; } );
	} else {
		window.IScroll = outputOption;
	}

})();
