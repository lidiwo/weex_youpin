export default {

    formatMoney:function (cent) {
       // return cent.parseInt(cent)/100;
       return cent/100;
    },

    isEmpty:function (str) {
        if(str===null||str===undefined||str===''){
            return true;
        }
        return false;
    }
}
