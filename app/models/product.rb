class Product < ApplicationRecord
  has_many :comments, dependent: :destroy
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
end
