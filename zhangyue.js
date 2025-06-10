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
function _0xd688(_0x722081,_0x393173){var _0x1632f6=_0x1632();return _0xd688=function(_0xd6880e,_0x55be2f){_0xd6880e=_0xd6880e-0x9c;var _0x343e32=_0x1632f6[_0xd6880e];return _0x343e32;},_0xd688(_0x722081,_0x393173);}var _0x55c5da=_0xd688;function _0x1632(){var _0x5df901=['17022IbmtGq','340590auDIOL','1197482cXEEvq','752238SbbiBz','10XutWUb','3774QBexQr','成功修改支付tg@Kb0015','作者老登需要定制可联系','210vdYLUM','487296TfdnlB','3YAByaB','495016HsRlKW','16YdTfOc'];_0x1632=function(){return _0x5df901;};return _0x1632();}(function(_0x322872,_0x146254){var _0x271ebc=_0xd688,_0x39ff02=_0x322872();while(!![]){try{var _0x57babd=parseInt(_0x271ebc(0x9c))/0x1*(parseInt(_0x271ebc(0x9d))/0x2)+parseInt(_0x271ebc(0xa7))/0x3*(-parseInt(_0x271ebc(0xa8))/0x4)+parseInt(_0x271ebc(0x9e))/0x5+-parseInt(_0x271ebc(0xa2))/0x6*(-parseInt(_0x271ebc(0xa5))/0x7)+parseInt(_0x271ebc(0xa6))/0x8+-parseInt(_0x271ebc(0xa0))/0x9*(-parseInt(_0x271ebc(0xa1))/0xa)+-parseInt(_0x271ebc(0x9f))/0xb;if(_0x57babd===_0x146254)break;else _0x39ff02['push'](_0x39ff02['shift']());}catch(_0x289c06){_0x39ff02['push'](_0x39ff02['shift']());}}}(_0x1632,0x20f82));var body=$response['body'];body=body['replace'](/"ProductID\\\":\\".*?"/g,'\x22ProductID\x5c\x22:\x5c\x22consumable14\x5c\x22'),$notify('提示',_0x55c5da(0xa3),_0x55c5da(0xa4)),$done(body);
