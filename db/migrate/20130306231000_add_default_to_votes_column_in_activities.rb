class AddDefaultToVotesColumnInActivities < ActiveRecord::Migration
  def change
    change_column :activities, :total_votes, :integer, :default => 0
  end
end
