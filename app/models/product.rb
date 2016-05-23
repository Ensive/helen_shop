class Product < ApplicationRecord
  has_many :comments, dependent: :destroy
  # validates :sku, :name, :category_id, :description, presence: true
  # validates :price, numericality:  {greater_than_or_equal_to: 0.01}
  # validates :name, uniqueness: true
  validates :image_url, allow_blank: true, format: {
    with: %r{\.(gif|jpg|png)\Z}i,
    message: 'URL should reference to the image'
  }

  def to_s
    name
  end
end
