/* =====================================================
   THE CLOAK TERMINAL V2
===================================================== */

window.Terminal = {

    initialized: false,

    isOpen: false,

    history: [],

    historyIndex: -1,

    commands: {},

    elements: {

        overlay: null,
        output: null,
        input: null,
        openButton: null,
        closeButton: null

    },

    bootLines: [

" ██████╗ ██╗      ██████╗  █████╗ ██╗  ██╗",
"██╔════╝ ██║     ██╔═══██╗██╔══██╗██║ ██╔╝",
"██║      ██║     ██║   ██║███████║█████╔╝ ",
"██║      ██║     ██║   ██║██╔══██║██╔═██╗ ",
"╚██████╗ ███████╗╚██████╔╝██║  ██║██║  ██╗",
" ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝",

"",
"Robinhood Cloak Terminal",
"Version " + CONFIG.PROJECT.VERSION,
"",
"Loading AI...",
"Loading Market...",
"Loading Security...",
"",
"System Online",
"",
"Type 'help'",
""

],

    init() {

        if (this.initialized) return;

        this.cache();

        this.registerCommands();

        this.events();

        this.initialized = true;

        console.log("✅ Terminal Ready");

    },

    cache() {

        this.elements.overlay =
            document.getElementById("terminal-overlay");

        this.elements.output =
            document.getElementById("terminal-output");

        this.elements.input =
            document.getElementById("terminal-command");

        this.elements.openButton =
            document.getElementById("terminal-toggle-floating");

        this.elements.closeButton =
            document.getElementById("terminal-close");

    },

    events() {

        if (this.elements.openButton) {

            this.elements.openButton.addEventListener("click", () => {

                this.open();

            });

        }

        if (this.elements.closeButton) {

            this.elements.closeButton.addEventListener("click", () => {

                this.close();

            });

        }

        if (this.elements.input) {

            this.elements.input.addEventListener("keydown", (e) => {

                this.keydown(e);

            });

        }

    },

    open() {

        if (!this.elements.overlay) return;

        this.elements.overlay.classList.add("active");

        this.isOpen = true;

        this.boot();

    },

    close() {

        if (!this.elements.overlay) return;

        this.elements.overlay.classList.remove("active");

        this.isOpen = false;

    },

    boot() {

        this.elements.output.textContent = "";

        let i = 0;

        const next = () => {

            if (i >= this.bootLines.length) {

                this.elements.input.focus();

                return;

            }

            this.print(this.bootLines[i]);

            i++;

            setTimeout(next, 120);

        };

        next();

    },

    print(text = "") {

        this.elements.output.textContent += text + "\n";

        this.elements.output.scrollTop =
            this.elements.output.scrollHeight;

    },

       registerCommands() {

        this.commands = {

            help: () => {

                this.print("");
                this.print("AVAILABLE COMMANDS");
                this.print("------------------");
                this.print("help");
                this.print("about");
                this.print("status");
                this.print("market");
                this.print("price");
                this.print("contract");
                this.print("website");
                this.print("telegram");
                this.print("x");
                this.print("ai");
                this.print("clear");
                this.print("");

            },

            about: () => {

                this.print("");
                this.print(CONFIG.PROJECT.NAME);
                this.print("Ticker  : " + CONFIG.PROJECT.SYMBOL);
                this.print("Chain   : " + CONFIG.PROJECT.CHAIN);
                this.print("Version : " + CONFIG.PROJECT.VERSION);
                this.print("");

            },

            status: () => {

                this.print("");
                this.print("SYSTEM STATUS");
                this.print("----------------");
                this.print("AI        : ONLINE");
                this.print("Market    : READY");
                this.print("Terminal  : ONLINE");
                this.print("Website   : ONLINE");
                this.print("");

            },

            market: () => {

                this.print("");
                this.print("MARKET");
                this.print("----------------");
                this.print("Price      : " + CONFIG.MARKET.PRICE);
                this.print("MarketCap  : " + CONFIG.MARKET.MARKETCAP);
                this.print("Liquidity  : " + CONFIG.MARKET.LIQUIDITY);
                this.print("Volume     : " + CONFIG.MARKET.VOLUME);
                this.print("Holders    : " + CONFIG.MARKET.HOLDERS);
                this.print("");

            },

            price: () => {

                this.print("");
                this.print("Current Price");
                this.print(CONFIG.MARKET.PRICE);
                this.print("");

            },

            contract: () => {

                navigator.clipboard.writeText(
                    CONFIG.TOKEN.CONTRACT
                );

                this.print("");
                this.print("Contract copied:");
                this.print(CONFIG.TOKEN.CONTRACT);
                this.print("");

            },

            website: () => {

                window.open(CONFIG.LINKS.WEBSITE,"_blank");

                this.print("");
                this.print("Opening Website...");
                this.print("");

            },

            telegram: () => {

                window.open(CONFIG.LINKS.TELEGRAM,"_blank");

                this.print("");
                this.print("Opening Telegram...");
                this.print("");

            },

            x: () => {

                window.open(CONFIG.LINKS.X,"_blank");

                this.print("");
                this.print("Opening X...");
                this.print("");

            },

            ai: () => {

                this.print("");
                this.print(CONFIG.AI.NAME);
                this.print("Status : ONLINE");
                this.print("");

            },

            clear: () => {

                this.elements.output.textContent="";

            }

        };

    },

    keydown(e) {

        if(e.key==="Enter"){

            const cmd=this.elements.input.value.trim();

            if(cmd==="") return;

            this.history.push(cmd);

            this.historyIndex=this.history.length;

            this.print("> "+cmd);

            this.execute(cmd);

            this.elements.input.value="";

            return;

        }

        if(e.key==="ArrowUp"){

            if(this.history.length===0) return;

            this.historyIndex--;

            if(this.historyIndex<0){

                this.historyIndex=0;

            }

            this.elements.input.value=this.history[this.historyIndex];

            e.preventDefault();

        }

        if(e.key==="ArrowDown"){

            if(this.history.length===0) return;

            this.historyIndex++;

            if(this.historyIndex>=this.history.length){

                this.historyIndex=this.history.length;

                this.elements.input.value="";

                return;

            }

            this.elements.input.value=this.history[this.historyIndex];

            e.preventDefault();

        }

    },

    execute(command){

        const cmd=command.toLowerCase();

        if(this.commands[cmd]){

            this.commands[cmd]();

        }else{

            this.print("");
            this.print("Unknown command: "+command);
            this.print('Type "help"');
            this.print("");

        }

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    Terminal.init();

});
