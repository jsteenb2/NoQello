json.board do |board|
  json.id @board.id
  json.title @board.title
  # json.lists @board.lists
  json.lists @board.lists do |list|
    json.id list.id
    json.title list.title
    json.description list.description
    # json.cards list.cards
    json.cards list.cards do |card|
      json.id card.id
      json.title card.title
      json.description card.description
      json.due_date card.due_date
      json.completed card.completed
      # json.activities card.activities
      json.activities card.activities do |activity|
        json.id activity.id
        json.completed activity.completed
        json.description activity.description
      end
    end
  end
end
