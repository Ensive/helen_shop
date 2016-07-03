require 'rails_helper'

describe Comment, :type => :model do

  let(:product) { Product.new(sku: '12345', name: 'New Product', category_id: 1, description: 'Product desc', price: 9.99) }
  let(:parent_comment) { Comment.create(body: 'Body comment', product: product) }
  let!(:child_comment) { Comment.create(body: 'child', parent: parent_comment, product: product) }

  it 'has parent/child relationships' do
    expect(parent_comment.children.first).to eq child_comment
  end

  it 'upvotes' do
    Comment.upvote(child_comment.id)
    expect(child_comment.reload.rank).to eq 1
  end

  it 'has a default value of 0 for rank when created' do
    expect(parent_comment.rank).to eq 0
  end
end
