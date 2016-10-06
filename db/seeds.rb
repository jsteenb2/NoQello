# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "destroying the peoples and they toys"
User.destroy_all
Board.destroy_all
List.destroy_all
Card.destroy_all

puts "repopulating. . . . . .  . . . . . "
5.times do |i|
  User.create!(email: "email#{i}@example.com", password: "chuckskick")
end

puts "repopulation complete"

puts "Adding boards with lists and thier cards . . . ."

2.times do |i|
  b = Board.create!(title: "title ##{i}")
  2.times do |j|
    b.lists.create!(title: "list title ##{j}", description: Faker::Pokemon.location)
    2.times do |k|
      b.lists.last.cards.create!( description: Faker::ChuckNorris.fact )
    end
  end
end

puts "boards and stuff created successfully.....!"
