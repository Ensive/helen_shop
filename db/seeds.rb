# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all

products_list = [
    # sku, name, category_id, image_url, description, weight, in_stock, available, discount, discount_available, price
    # @todo: consider to move sku, image_url, in_stock columns to the separate tables
    [nil, 'Костюм "JEEP" зеленый', nil, 'jeep-green.jpg', 'Хороший костюм, недорого.', 250, 2, true, 0, false, 170],
    [nil, 'Платье "С завязками"', nil, 'dress-with-ties.jpg', 'Шикарное платье. Довольно оригинально выглядит.', 400, 1, true, 0, false, 170]
]

products_list.each do |sku, name, category_id, image_url, description, weight, in_stock, available, discount, discount_available, price|
  Product.create!(
      sku: sku,
      name: name,
      category_id: category_id,
      image_url: image_url,
      description: description,
      weight: weight,
      in_stock: in_stock,
      available: available,
      discount: discount,
      discount_available: discount_available,
      price: price
  )
end

OrderStatus.delete_all
OrderStatus.create! id: 1, name: 'In Progress'
OrderStatus.create! id: 2, name: 'Placed'
OrderStatus.create! id: 3, name: 'Shipped'
OrderStatus.create! id: 4, name: 'Cancelled'
