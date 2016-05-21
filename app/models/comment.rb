class Comment < ApplicationRecord
  belongs_to :product
  validates :product, presence: true
  has_ancestry
end
