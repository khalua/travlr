User.delete_all

u2 = User.create(:name=>'Nick',:email=>'h55nick@gmail.com',:password=>'aa',:password_confirmation=>'aa' )
u1 = User.create(:name => 'Tony', :email => 'tony.contreras@gmail.com', :password => 'a', :password_confirmation => 'a')