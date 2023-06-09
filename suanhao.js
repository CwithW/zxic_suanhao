function sub_15C9C(imei, len) {
    // 取imei后6位
    let s = imei.substring(len - 6);
    // 交换s的第2位和第3位
    s = s[0] + s[2] + s[1] + s.substring(3);
    return s;
}

function suanhao(imei){
    if(typeof(imei) != "string" || imei.length != 15){
        return "错误：imei不是15位";
    }
    let crypto = imei[3] + imei[6];
    let v9 = parseInt(crypto) + 125;
    crypto = "";
    crypto = sub_15C9C(imei, 15);
    let v10 = 4 * (parseInt(crypto) + v9);
    return v10 + "";
}
