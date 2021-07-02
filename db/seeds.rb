# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create email: 'diegohmailbox@gmail.com', password: '000000', password_confirmation: '000000'
apartments = [
{
    street:'7303 Bonnie Pl.',
    city:'Reseda',
    state:'CA',
    manager: 'MS',
    email:'email',
    price:'3000',
    bedrooms:3,
    bathrooms:3,
    pets:'Yes',
    user_id:1
},
{
    street:"1275 Westchester Pl",
    city:'Los Angeles',
    state:'CA',
    manager:'DH',
    email:'email',
    price:'1250',
    bedrooms:1,
    bathrooms:1,
    pets:'Yes',
    user_id:1
}
]
apartments.each do |value|
    Apartment.create value
    puts "creating apartment: #{value}"
end