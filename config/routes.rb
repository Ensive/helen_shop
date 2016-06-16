Rails.application.routes.draw do
  resources :products do
    resources :comments do
      put 'upvote', to: 'comments#upvote'
    end
  end

  root 'products#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
