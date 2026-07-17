function copyCA(){

    const contract = document.getElementById("contract").innerText;

    navigator.clipboard.writeText(contract)
    .then(()=>{

        alert("Contract copied!");

    })
    .catch(()=>{

        alert("Copy failed");

    });

}



console.log("Robinhood Cloak $RHC loaded");
