class CommentsController < ApplicationController
  # before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /products/:product_id/comments.json
  def index
    product_id = params[:product_id]
    @comments = Product.find(product_id).comments.order(created_at: :desc).all
  end

  # POST /products/:product_id/comments.json
  def create
    @comment = Comment.create(comment_params.merge(product_id: params[:product_id]))
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:author, :body, :stars, :parent_id)
    end
end
