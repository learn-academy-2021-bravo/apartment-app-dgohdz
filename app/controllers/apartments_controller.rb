class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
  
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
           else
        render json: apartment
           end
    end
  
    def update
    end
  
    def destroy
    end

    private
    def apartment_params
      params.require(:apartment).permit(:street, :city, :state, :price, :bedrooms, :bathrooms, :pets)
    end
  
end
