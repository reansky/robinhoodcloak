/* =====================================================
   ROBINHOOD CLOAK UTILS
===================================================== */

window.Utils = {

    copy(text){

        navigator.clipboard.writeText(text);

    },



    shorten(address){

        if(!address || address.length < 10){

            return address;

        }

        return address.slice(0,6) + "..." + address.slice(-4);

    },



    formatNumber(number){

        return new Intl.NumberFormat().format(number);

    },



    formatUSD(number){

        return new Intl.NumberFormat("en-US",{

            style:"currency",

            currency:"USD"

        }).format(number);

    },



    open(url){

        if(url){

            window.open(url,"_blank");

        }

    }

};
