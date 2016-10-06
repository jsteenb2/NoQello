json.board do |board|
  json.id @board.id
  json.title @board.title
  json.lists @board.lists do |list|
    json.id list.id
    json.title list.title
    json.description list.description
    json.cards list.cards do |card|
      json.id card.id
      json.description card.description
    end
  end
end
