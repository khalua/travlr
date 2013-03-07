# == Schema Information
#
# Table name: trips
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  startdate  :date
#  enddate    :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#



class Trip < ActiveRecord::Base
  attr_accessible :name, :startdate, :enddate
  has_many :activities
  has_and_belongs_to_many :users

end
