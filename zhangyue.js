/*******************************
  本脚本老登制作
需要定制破解支付内购联系
tg@Kb0015
*******************************
[rewrite_local]
^http[s]?:\/\/ih2.ireader.com\/trade\/market\/vip\/ios\/pay_agreement.+$ url script-response-body https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/zhangyue.js
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
// 添加提示框
$notify("提示", "成功修改支付", "请确认");
$done(body);
