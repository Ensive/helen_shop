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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160520113852) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "author",     default: "Anonymous", null: false
    t.text     "body",                             null: false
    t.string   "ip"
    t.integer  "product_id"
    t.boolean  "answer",                           null: false
    t.boolean  "approved",   default: false,       null: false
    t.integer  "rank",       default: 0,           null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.index ["product_id"], name: "index_comments_on_product_id", using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.string   "sku",                limit: 25
    t.string   "name",               limit: 50,                                         null: false
    t.integer  "category_id"
    t.string   "image_url"
    t.text     "description"
    t.integer  "weight"
    t.integer  "in_stock",                                              default: 1,     null: false
    t.boolean  "available",                                             default: true,  null: false
    t.integer  "discount",                                              default: 0,     null: false
    t.boolean  "discount_available",                                    default: false, null: false
    t.decimal  "price",                         precision: 8, scale: 2,                 null: false
    t.datetime "created_at",                                                            null: false
    t.datetime "updated_at",                                                            null: false
  end

  add_foreign_key "comments", "products"
end
