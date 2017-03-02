class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_order, :current_products

  # TODO: refactor out to the external Cart module
  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  def current_products
    products = []

    current_order.order_items.each do |order_item|
      p = order_item.product
      products << { id: p.id, name: p.name, price: p.price, image_url: p.image_url }
    end

    products
  end

end
