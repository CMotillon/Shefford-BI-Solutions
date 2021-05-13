class ContactsController < ApplicationController
    def contact
        @contact = Contact.new
    end

    def contact_save
        @contact = Contact.new(contact_info)
        @contact.save!

        if @contact.save
            redirect_to root_path
        end
    end

    def contact_info
        params.fetch(:contact, {}).permit(:name, :email, :phone, :title, :description)
    end
end