Rails.application.routes.draw do
  get 'home', to: 'static_pages#home'
  get 'services', to: 'static_pages#services'
  get 'payroll', to: 'static_pages#payroll'
  get 'forms', to: 'static_pages#forms'
  get 'about_us', to: 'static_pages#about'
  get 'contact_us', to: 'static_pages#contact'

  root 'static_pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
