/* =====================================================
   ROBINHOOD CLOAK CONFIG
===================================================== */

const CONFIG = {

    PROJECT: {

        NAME: "Robinhood Cloak",

        SYMBOL: "$RHC",

        CHAIN: "Robinhood Chain",

        VERSION: "2.0.0"

    },

    TOKEN: {

        CONTRACT: "PASTE_YOUR_CONTRACT_HERE",

        SUPPLY: "1,000,000,000",

        TAX: "0 / 0"

    },

    LINKS: {

        WEBSITE: "https://yourwebsite.com",

        X: "https://x.com/",

        TELEGRAM: "https://t.me/",

        DEX: "https://dexscreener.com/"

    },

    AI: {

        NAME: "The Cloak AI",

        VERSION: "2.0"

    },

    MARKET: {

        PRICE: "$0.000000",

        MARKETCAP: "$0",

        LIQUIDITY: "$0",

        VOLUME: "$0",

        HOLDERS: "0"

    }

};

Object.freeze(CONFIG);

console.log("✅ CONFIG LOADED");
