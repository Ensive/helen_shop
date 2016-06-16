class Comment < ApplicationRecord
  belongs_to :product
  validates :product, presence: true
  has_ancestry

  def self.upvote(id)
    comment = find(id)
    comment.update_attributes(rank: comment.rank.to_i + 1)
  end
end
