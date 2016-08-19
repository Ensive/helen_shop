require 'rails_helper'
require 'spec_helper'

describe 'product', js: true do
  let!(:product) { Product.create(sku: '12345', name: 'New Product', category_id: 1, description: 'Product desc', price: 9.99) }

  it 'lists products' do
    visit '/products'
    # save_and_open_page
    # screenshot_and_save_page
    # screenshot_and_open_image

    categoryNew = I18n.t('categories.new')
    categoryClothing = I18n.t('categories.clothing')
    productPrice = product.price.to_s.gsub('.', ',')

    expect(page).to have_content(categoryClothing)
    expect(page).to have_content(categoryNew)
    expect(page).to have_content(productPrice)
  end
end
