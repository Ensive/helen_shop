require 'rails_helper'

describe 'product-comments' do
  let(:product_name) { 'Nice product' }

  let!(:product) { Product.create(sku: '12Sd23Kf8smz3', name: product_name, image_url: 'sweater-feni.jpg', category_id: 1, description: 'Nice desc', price: 130) }

  before do
    visit product_path(product)
  end

  it 'shows product description' do
    save_and_open_page
    # expect(page).to have_content('Nice description')
    # save_and_open_page
    # screenshot_and_open_image
  end
end
