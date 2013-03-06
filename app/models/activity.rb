# == Schema Information
#
# Table name: activities
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  category    :string(255)
#  address     :string(255)
#  image       :text             default("http://msnbcmedia3.msn.com/j/ap/travel%20trip%20grand%20canyon%20hiking--1490284461_v2.grid-6x2.jpg")
#  description :text
#  total_votes :integer          default(0)
#  user_id     :integer
#  activity_id :integer
#  latitude    :float            default(0.0)
#  longitude   :float            default(0.0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  trip_id     :integer
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
