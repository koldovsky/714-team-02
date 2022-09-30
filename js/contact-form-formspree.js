(function() {
const form = document.getElementById("contact-form");
function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status");
    const data = new FormData(event.target);
    fetch (event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submittion!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Sorry! There was a problem submitting your form"
                }
            })
        }
       })
          .catch((error) => {
                status.innerHTML = "Sorry! There was a problem submitting your form"
            });
        }
        form.addEventListener("submit", handleSubmit)
    
})();