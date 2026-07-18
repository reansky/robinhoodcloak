/* =====================================================
   THE CLOAK AI V2
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("cloak-toggle");
    const chat = document.getElementById("cloak-chat");
    const close = document.getElementById("close-chat");

    const messages = document.getElementById("chat-messages");
    const input = document.getElementById("user-input");
    const send = document.getElementById("send-message");

    if (!toggle || !chat) return;

    toggle.onclick = () => {

        chat.style.display = "flex";

        input.focus();

    };

    close.onclick = () => {

        chat.style.display = "none";

    };

    function bot(text){

        const div=document.createElement("div");

        div.className="bot-message";

        div.innerHTML=text;

        messages.appendChild(div);

        messages.scrollTop=messages.scrollHeight;

    }

    function user(text){

        const div=document.createElement("div");

        div.className="user-message";

        div.innerHTML=text;

        messages.appendChild(div);

        messages.scrollTop=messages.scrollHeight;

    }

    function reply(q){

        q=q.toLowerCase();

        if(q.includes("hello") || q.includes("hi") || q.includes("gm")){

            return "👋 Welcome, Cloaked One.";

        }

        if(q.includes("rhc") || q.includes("robinhood cloak")){

            return "🟢 Robinhood Cloak ($RHC) is a community project built on Robinhood Chain.";

        }

        if(q.includes("contract")){

            return "📜 Contract:<br><br>"+CONFIG.TOKEN.CONTRACT;

        }

        if(q.includes("price")){

            return "💰 Current Price:<br><br>"+CONFIG.MARKET.PRICE;

        }

        if(q.includes("market")){

            return "📊 Market Cap: "+CONFIG.MARKET.MARKETCAP+
            "<br>Liquidity: "+CONFIG.MARKET.LIQUIDITY+
            "<br>Volume: "+CONFIG.MARKET.VOLUME;

        }

        if(q.includes("telegram")){

            return "📢 Telegram:<br><br>"+CONFIG.LINKS.TELEGRAM;

        }

        if(q.includes("website")){

            return "🌐 Website:<br><br>"+CONFIG.LINKS.WEBSITE;

        }

        if(q.includes("x") || q.includes("twitter")){

            return "🐦 X:<br><br>"+CONFIG.LINKS.X;

        }

        return "🤖 I'm still learning. More Robinhood Cloak knowledge will be added soon.";

    }

    function sendMessage(){

        const text=input.value.trim();

        if(text==="") return;

        user(text);

        input.value="";

        setTimeout(()=>{

            bot(reply(text));

        },400);

    }

    send.onclick=sendMessage;

    input.addEventListener("keypress",(e)=>{

        if(e.key==="Enter"){

            sendMessage();

        }

    });

});

/* ===========================
QUICK ACTIONS
=========================== */

document.querySelectorAll(".quick-actions button").forEach(btn=>{

btn.addEventListener("click",()=>{

input.value=btn.dataset.question;

sendMessage();

});

});


/* ===========================
TYPING EFFECT
=========================== */

const typing=

document.getElementById("typing-indicator");

const oldSend=sendMessage;

sendMessage=function(){

const text=input.value.trim();

if(text==="") return;

user(text);

input.value="";

typing.style.display="flex";

setTimeout(()=>{

typing.style.display="none";

bot(reply(text));

},700);

};
