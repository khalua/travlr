User.delete_all

u2 = User.create(:name=>'Nick',:email=>'h55nick@gmail.com',:password=>'aa',:password_confirmation=>'aa' )
u1 = User.create(:name => 'Tony', :email => 'tony.contreras@gmail.com', :password => 'a', :password_confirmation => 'a')

t1 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-01', :enddate => '2012-03-10')
t2 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-11', :enddate => '2012-03-20')
t3 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-21', :enddate => '2012-03-30')


