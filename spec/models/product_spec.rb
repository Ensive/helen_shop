require 'rails_helper'

describe Product do

  it 'returns name when to_s is called' do
    p = Product.new(sku: '12345', name: 'New Product', category_id: 1, description: 'Product desc', price: 9.99)
    expect("#{p}").to eq 'New Product'
  end
end
