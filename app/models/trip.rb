# == Schema Information
#
# Table name: trips
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  startdate   :date
#  enddate     :date
#  priority_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Trip < ActiveRecord::Base
  attr_accessible :name, :startdate, :enddate
  has_many :activities, :inverse_of => :trip
  has_many :users, :inverse_of => :trip
  has_secure_password
end
