# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130306231000) do

  create_table "activities", :force => true do |t|
    t.string   "name"
    t.string   "category"
    t.string   "address"
    t.text     "image",       :default => "http://msnbcmedia3.msn.com/j/ap/travel%20trip%20grand%20canyon%20hiking--1490284461_v2.grid-6x2.jpg"
    t.text     "description"
    t.integer  "total_votes", :default => 0
    t.integer  "user_id"
    t.integer  "activity_id"
    t.float    "latitude",    :default => 0.0
    t.float    "longitude",   :default => 0.0
    t.datetime "created_at",                                                                                                                     :null => false
    t.datetime "updated_at",                                                                                                                     :null => false
    t.integer  "trip_id"
  end

  create_table "trips", :force => true do |t|
    t.string   "name"
    t.date     "startdate"
    t.date     "enddate"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "trips_users", :id => false, :force => true do |t|
    t.integer "trip_id"
    t.integer "user_id"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
