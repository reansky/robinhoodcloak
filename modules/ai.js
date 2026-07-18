console.log(CONFIG.PROJECT.NAME);

/* =====================================================
   THE CLOAK AI
===================================================== */

const cloakToggle = document.getElementById("cloak-toggle");
const cloakChat = document.getElementById("cloak-chat");
const closeChat = document.getElementById("close-chat");

const sendButton = document.getElementById("send-message");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");



cloakToggle.addEventListener("click",()=>{

    cloakChat.style.display="flex";

});


closeChat.addEventListener("click",()=>{

    cloakChat.style.display="none";

});



function addUserMessage(text){

    const div=document.createElement("div");

    div.className="user-message";

    div.innerText=text;

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;

}



function addBotMessage(text){

    const div=document.createElement("div");

    div.className="bot-message";

    div.innerHTML=text;

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;

}



function getReply(question){

    question=question.toLowerCase();



    if(question.includes("what is rhc") ||
       question.includes("$rhc")){

        return "🟢 Robinhood Cloak ($RHC) is a community-driven meme token built on Robinhood Chain.";


    }



    if(question.includes("website")){

        return "🌐 You are already on the official Robinhood Cloak website.";

    }



    if(question.includes("telegram")){

        return "📢 Telegram will be announced soon.";

    }



    if(question.includes("x") ||
       question.includes("twitter")){

        return "🐦 Follow our official X account for the latest updates.";

    }



    if(question.includes("contract")){

        return "📜 The contract address will appear here after launch.";

    }



    if(question.includes("roadmap")){

        return "🚀 Build • Launch • Community • Grow.";

    }



    if(question.includes("hello") ||
       question.includes("hi") ||
       question.includes("gm")){

        return "👋 Welcome, Cloaked One.";

    }



    if(question.includes("wen")){

        return "🌕 Great things take time. Stay cloaked.";

    }



    return "🟢 The Cloak is still learning. More AI knowledge will be added soon.";

}



function sendMessage(){

    const text=userInput.value.trim();

    if(text==="") return;



    addUserMessage(text);

    userInput.value="";



    setTimeout(()=>{

        addBotMessage(

            getReply(text)

        );

    },500);

}



sendButton.addEventListener("click",sendMessage);



userInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});
