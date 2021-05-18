class UserMailer < ApplicationMailer
    default from: 'no_reply@sheffordbisol.ca'

    def contact_form(contact)
        @contact = contact
        email_subject = 'Demande de contact par ' + contact.name
        email_body = contact.description + "\n \nEmail: " + contact.email + "\nTelephone: " + contact.phone

        mail(to: 'cedricmotillon@outlook.com', subject: email_subject, body: email_body)
    end
end
