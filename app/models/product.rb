class Product < ApplicationRecord
  has_many :comments, dependent: :destroy

  def to_s
    name
  end
end
