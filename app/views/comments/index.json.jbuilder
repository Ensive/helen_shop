json.array! @comments, partial: 'comments/comment', as: :comment
#json.array!(@comments) do |comment|
  #json.extract! comment, :id, :author, :body, :ip, :product_id, :answer, :approved, :rank
  #json.url comment_url(comment, format: :json)
#end
