# == Schema Information
#
# Table name: activities
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  category    :string(255)
#  address     :string(255)
#  image       :text
#  description :text
#  total_votes :integer
#  user_id     :integer
#  activity_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Activity < ActiveRecord::Base
  attr_accessible :name, :category, :address, :image, :description, :total_votes, :user_id, :activity_id
  belongs_to :trip
  belongs_to :user

  before_save :geocode
  private
  def geocode
    result = Geocoder.search(self.address).first

    if result.present?
        self.latitude = result.latitude
        self.longitude = result.longitude
    end
  end
end
