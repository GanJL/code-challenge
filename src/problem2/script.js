
function animatedForm() {

    const allPages = document.querySelectorAll(".next")

    allPages.forEach(page=>{

        page.addEventListener("click", () => {

            const currentPage = page.parentElement;

            const nextPage = currentPage.nextElementSibling;

            const result1 = validateAddress()

            const result2 = validateAmount()

            const sendBox= currentPage.children[0].classList.value

            if (sendBox == 'send-box') {

                const result3 = validateOTP()

                if (result3) {
                    nextSlide(currentPage, nextPage)
                    document.body.style.background = ''
                }
                else {
                    document.body.style.background = 'linear-gradient(0deg, var(--error), white, white, white)'
                }
            
            }

            else {

                if (result1 && result2) {
                    nextSlide(currentPage, nextPage)
                    document.body.style.background = 'linear-gradient(0deg, var(--success), white, white, white)'
                }
                else {
                    document.body.style.background = 'linear-gradient(0deg, var(--error), white, white, white)'
                }

            }


        })
 
    })
}

animatedForm();

function validateAddress() {
    const address = document.getElementById("input-address").value
    const error = document.getElementById("address-error")
    
    if (address.length == 0) {
        error.innerHTML = 'Please fill up address!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }
    else if (address != '0x123d475e13aa54a43a7421d94caa4459da021c77') {
        error.innerHTML = 'Incorrect address! Please try again.'
        error.previousElementSibling.style.border = "2px solid red";
        return false
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}

function validateAmount() {

    const amount = document.getElementById("input-amount").value
    const error = document.getElementById("amount-error")
    
    if (amount.length == 0) {
        error.innerHTML = 'Please fill up amount!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}


function validateOTP() {

    const otp = document.getElementById("input-otp").value
    const error = document.getElementById("otp-error")

    if (otp == ""){
        error.innerHTML = 'Please fill up OTP!'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else if (otp != 123456) {
        error.innerHTML = 'Incorrect OTP! Please try again.'
        error.previousElementSibling.style.border = "2px solid red";
        return false 
    }

    else {
        error.innerHTML = ""
        error.previousElementSibling.style.border = "";
        return true
    }
}

function nextSlide(currentPage, nextPage) {
    currentPage.classList.add('inactive');
    currentPage.classList.add('shift');
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
}

function clipboard(choice){

    if (choice == 1){
        var copyText = '123456'
    }
    else {
        var copyText = '0x123d475e13aa54a43a7421d94caa4459da021c77'
    }
    
    navigator.clipboard.writeText(copyText);
}

