class Order < ApplicationRecord
  belongs_to :order_status
  has_many :order_items, dependent: :destroy
  # before_create :set_order_status
  before_validation :set_order_status
  before_save :update_subtotal

  def subtotal
    order_items.collect { |oi| oi.valid? ? (oi.quantity * oi.unit_price) : 0 }.sum
  end

  private

  # TODO: implement ENUM values for status ids (1, 2, 3, 4)
  def set_order_status
    self.order_status_id = 1 # in progress
  end

  def update_subtotal
    self[:subtotal] = subtotal
  end
end
