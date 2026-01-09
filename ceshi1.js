/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
掌阅
脚本名称:掌阅
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/quanyiapi.chengquan.cn\/wx_web\/agent\/integral\/product\/queryDetails\/19003764.+$ url script-response-body https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/ceshi1.js
[mitm] 
hostname = quanyiapi.chengquan.cn
*******************************
Surge

[Script]
^http[s]?:\/\/quanyiapi.chengquan.cn\/wx_web\/agent\/integral\/product\/queryDetails\/19003764.+$ requires-body=1,max-size=0,script-path=chengquan.js

[MITM]
hostname = quanyiapi.chengquan.cn

*******************************/
var obj = JSON.parse($response.body);
    obj.data.integralAdequate= true;
obj.data.userTotalIntegral= 100000.00;
    $done({body: JSON.stringify(obj)});
