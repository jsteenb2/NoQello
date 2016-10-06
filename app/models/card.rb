class Card < ApplicationRecord
  belongs_to :list
  has_one :board, through: :list
end
