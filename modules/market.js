/* =====================================================
   ROBINHOOD CLOAK MARKET V2
===================================================== */

window.Market = {

    init() {

        this.update();

        console.log("✅ Market Ready");

    },

    update() {

        this.set("price", CONFIG.MARKET.PRICE);

        this.set("marketcap", CONFIG.MARKET.MARKETCAP);

        this.set("liquidity", CONFIG.MARKET.LIQUIDITY);

        this.set("volume", CONFIG.MARKET.VOLUME);

        this.set("holders", CONFIG.MARKET.HOLDERS);

    },

    set(id, value) {

        const element = document.getElementById(id);

        if (!element) return;

        element.textContent = value;

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Market.init();

});
