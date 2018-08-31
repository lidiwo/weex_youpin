export default {

    formatMoney:function (cent) {
       return cent/100;
    },

    isEmpty:function (str) {
        if (str === null || str === undefined || str === '') {
            return true;
        }
        return false;
    },
    formatFlashsaleTime:function (time) {
        const unixTimestamp = new Date(time );
        return unixTimestamp.getHours()
    },

}
