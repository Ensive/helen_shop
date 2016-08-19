#json.extract! @product, :id, :name, :description, :image_url, :price, :created_at, :updated_at
#image_url = "/assets/#{:image_url}"
json.extract!(@product, :id, :name, :image_url, :price)
