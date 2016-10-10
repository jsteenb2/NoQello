class Card < ApplicationRecord
  belongs_to :list
  has_one :board, through: :list
  has_many :activities
  accepts_nested_attributes_for :activities, reject_if: :all_blank
end
