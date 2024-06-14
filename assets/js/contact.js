/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ox1s8os','template_lkifjma','#contact-form','491ONyMYnrxsuSO_1')
    .then(() => {
        // Show message sent
        contactMessage.textContent = 'Message sent successfully✅'

        // remove messsage after 5s seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (Service Error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)