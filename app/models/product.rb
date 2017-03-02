class Product < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :order_items

  before_destroy :ensure_not_referenced_by_any_order_item

  validates :sku, :name, :category_id, :description, :price, presence: true
  validates :price, numericality:  {greater_than_or_equal_to: 0.01}
  validates :name, uniqueness: true
  validates :image_url, allow_blank: true, format: {
    with: %r{\.(gif|jpg|png)\Z}i,
    message: 'URL should reference to the image'
  }

  def to_s
    name
  end

  def average_rating
    total_stars = 0

    self.comments.where.not(stars: nil).each do |review|
      total_stars += review.stars.to_i
    end

    self.total_ratings == 0 ? 0 : total_stars / total_ratings
  end

  def total_ratings
    self.comments.where.not(stars: nil).count
  end

  private

  def ensure_not_referenced_by_any_order_item
    if order_items.empty?
      true
    else
      errors.add(:base, 'there are remaining items')
      false
    end
  end
end
