class AddActivitiesTable < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :name
      t.string :category
      t.string :address
      t.text  :image
      t.text  :description
      t.integer :total_votes
      t.integer :user_id
      t.integer :activity_id
      t.float :latitude, :default => 0
      t.float :longitude, :default => 0
      t.timestamps
    end
  end
end
