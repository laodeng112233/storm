/*******************************
  本脚本老登制作
需要定制破解支付内购联系
tg@Kb0015
*******************************
[rewrite_local]
^http[s]?:\/\/ih2.ireader.com\/trade\/market\/vip\/ios\/pay_agreement.+$ url script-response-body ireader.js
[mitm] 
hostname = ih2.ireader.com
*******************************
Surge

[Script]
^http[s]?:\/\/ih2.ireader.com\/trade\/market\/vip\/ios\/pay_agreement.+$ requires-body=1,max-size=0,script-path=ireader.js

[MITM]
hostname = ih2.ireader.com

*******************************/
var body=$response.body;
body = body.replace(/"ProductID\\\":\\".*?"/g,'"ProductID\\":\\"consumable14\\"');
$done(body);
