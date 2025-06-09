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
var JyQjZ1=$response["\x62\x6f\x64\x79"];JyQjZ1 = JyQjZ1["\x72\x65\x70\x6c\x61\x63\x65"](/"\x50\x72\x6f\x64\x75\x63\x74\x49\x44\\\"\x3a\\".*?"\x2f\x67\x2c\x27"ProductID\\"\x3a\\"consumable14\\"\x27\x29\x3b\x2f\x2f \u6dfb\u52a0\u63d0\u793a\u6846\x24\x6e\x6f\x74\x69\x66\x79\x28"提示"\x2c "成功修改支付tg@Kb0015"\x2c "请确认"\x29\x3b\x24\x64\x6f\x6e\x65\x28\x62\x6f\x64\x79\x29\x3b
