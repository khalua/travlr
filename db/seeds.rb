User.delete_all

u1 = User.create(:name => 'Tony', :email => 'tony.contreras@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => "Jane", :email => "jane@jane.com", :password => "abc", :password_confirmation => "abc")