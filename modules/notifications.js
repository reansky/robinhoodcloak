/* =====================================================
   ROBINHOOD CLOAK NOTIFICATIONS
===================================================== */

window.Notify = {

    show(message, type = "success") {

        const toast = document.createElement("div");

        toast.className = "rhc-toast " + type;

        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 100);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 3000);

    }

};
