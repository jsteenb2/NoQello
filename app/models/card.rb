class Card < ApplicationRecord
  belongs_to :list
  has_one :board, through: :list
  has_many :activities
end
