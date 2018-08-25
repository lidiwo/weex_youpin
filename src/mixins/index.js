const stream = weex.requireModule('stream');

const baseUrl1 = "https://shopapi.io.mi.com/";
const baseUrl2 = "http://api.m.mi.com/";
export default {
    methods: {
        post: function (url, params, callback) {
            return stream.fetch({
                method: "POST",
                type: "json",
                body: params,
                url: baseUrl1 + url,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }, callback);
        },
        recommendPost:function(url,callback){
            return stream.fetch({
                method: "POST",
                type: "json",
                url: baseUrl1 + url,
                headers: {
                    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 8.0.0; MI 6 MIUI/8.8.16) MIOTWeex/1.2.1 (YouPin;2.2.3;DB9E4448612962C4B87B5F5B8E0EBC6C;0.18.0;A;53A0441AA8DCF13BB34917FAC279254E1563CB7A;MI_APP_STORE) MIOTStore/20180406 (YouPin;2.2.3;DB9E4448612962C4B87B5F5B8E0EBC6C;;A;53A0441AA8DCF13BB34917FAC279254E1563CB7A;MI_APP_STORE)",
                }
            }, callback);
        },
        phonePost: function (url, params, callback) {
            return stream.fetch({
                method: "POST",
                type: "json",
                body: params,
                url: baseUrl2 + url,
                headers: {
                    "Mishop-Client-Id": "180100041079"
                }
            }, callback);
        },
    }
}