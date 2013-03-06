User.delete_all
Trip.delete_all
Activity.delete_all

u1 = User.create(:name => 'Tony', :email => 'tony.contreras@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => "Jane", :email => "jane@jane.com", :password => "abc", :password_confirmation => "abc")
u3 = User.create(:name=>'Nick',:email=>'h55nick@gmail.com',:password=>'aa',:password_confirmation=>'aa' )


t1 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-01', :enddate => '2012-03-10')
t2 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-11', :enddate => '2012-03-20')
t3 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-21', :enddate => '2012-03-30')

a1 = Activity.create(:name => "Hiking in the Grand Canyon", :category => "outdoors", :address => "Grand Canyon", :description => "blah blah blah" )
a2 = Activity.create(:name => "Activity2", :category => "cat2", :address => "New York City", :description => "blah blah blah" )
a3 = Activity.create(:name => "Activity3", :category => "cat2", :address => "Austin, TX", :description => "blah blah blah" )
a4 = Activity.create(:name => "Activity4", :category => "cat3", :address => "Boise, Idaho", :description => "blah blah blah" )
a5 = Activity.create(:name => "Activity5", :category => "cat4", :address => "Los Angeles, CA", :description => "blah blah blah" )
a6 = Activity.create(:name => "Activity6", :category => "cat4", :address => "Lincoln, Nebraska", :description => "blah blah blah" )

u1.trips << t1
u2.trips << t2
u3.trips << t3

t1.activities << a1 << a2
t2.activities << a3 << a4
t3.activities << a5 << a6
