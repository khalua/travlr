class AddActivitiesTable < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :name
      t.string :category
      t.string :address
      t.text  :image, :default => 'http://msnbcmedia3.msn.com/j/ap/travel%20trip%20grand%20canyon%20hiking--1490284461_v2.grid-6x2.jpg'
      t.text  :description
      t.integer :total_votes, :default => 0
      t.integer :user_id
      t.integer :activity_id
      t.float :latitude, :default => 0
      t.float :longitude, :default => 0
      t.timestamps
    end
  end
end
