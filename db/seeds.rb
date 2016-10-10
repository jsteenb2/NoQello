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
4.times do |i|
  User.create!(email: "#{i}@the.com", password: "asdfjk")
end

puts "repopulation complete"

puts "Adding boards with lists and thier cards . . . ."

10.times do |i|
  b = User.all.sample.boards.create!( title: "board title ##{i}", description: Faker::ChuckNorris.fact)
  2.times do |j|
    b.lists.create!(title: "list title ##{j}", description: Faker::Pokemon.location)
    2.times do |k|
      b.lists.last.cards.create!( title: Faker::Pokemon.name, description: Faker::ChuckNorris.fact, due_date: Faker::Date.forward(300) )
      2.times do |l|
        b.lists.last.cards.last.activities.create!(
        description: Faker::ChuckNorris.fact)
      end
    end
  end
end

puts "boards and stuff created successfully.....!"
