require 'rails_helper'

describe 'product', js: true do
  let!(:product) { Product.create(sku: '12345', name: 'New Product', category_id: 1, description: 'Product desc', price: 9.99) }

  it 'lists products' do
    visit '/'
    save_and_open_page
  end
end