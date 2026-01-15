/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
掌阅
脚本名称:掌阅
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群10772238301
*******************************
[rewrite_local]
^https?:\/\/api\.ankianki\.com\/user\/order\/generalCreate.*? url script-response-body https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/ksb.js
[mitm] 
hostname = *.ankianki.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.ankianki.com\/user\/order\/generalCreate.+$ requires-body=1,max-size=0,script-path=ankianki.js

[MITM]
hostname = *.ankianki.*

*******************************/
var body=$response.body;
body = body.replace(/com.greatstudy.gold.\d+/g,'com.greatstudy.gold.168');
$done(body);
