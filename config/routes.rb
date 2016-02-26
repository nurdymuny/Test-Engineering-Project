Rails.application.routes.draw do
  # get 'clients/index'

  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  devise_scope :user do
    root to: "feature_request#index"
    get 'staffs/staff_new' => 'staffs#staff_new', :as => 'staff_new'
    post 'staffs/registration_staff' => 'staffs#registration_staff', :as => 'registration_staff'
    get 'staffs/sign_out' => 'staffs#logout', :as => 'staff_sign_out'

    get 'staffs/staff_list' => 'staffs#staff_list'
    get 'staffs/staff_edit/' => 'staffs#staff_edit'
    put 'staffs/update_staff' => 'staffs#update_staff', :via => [:put, :patch]
    patch 'staffs/update_staff' => 'staffs#update_staff', :via => [:put, :patch]
    delete 'staffs/destroy/' => 'staffs#destroy'

  end


  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
  resources :clients
  get 'clients/register' => 'clients#register'
  resources :feature_request
  get '/deactive_request' => 'feature_request#deactive_request', :as => 'deactive_request'
  get '/activate_request' => 'feature_request#activate_request', :as => 'activate_request'
  post 'feature_request/complete_request' => 'feature_request#complete_request'
  resources :product_area

end
