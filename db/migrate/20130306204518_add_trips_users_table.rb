class AddTripsUsersTable < ActiveRecord::Migration
  def change
    create_table :trips_user, :id => false do |t|
      t.integer :trip_id
      t.integer :user_id
  end
end
end