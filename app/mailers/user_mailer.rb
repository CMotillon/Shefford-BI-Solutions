class UserMailer < ApplicationMailer
    default to: 'cedricmotillon@outlook.com', from: 'no_reply@sheffordbisol.ca'

    def contact_form(contact)
        @contact = contact
        puts 'Is this working?'
        puts 'Is this working?'
        puts 'Is this working?'
        puts 'Is this working?'
        mail(subject: 'Blablabla')
    end
end
