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

ActiveRecord::Schema.define(version: 20171023144534) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "examples", force: :cascade do |t|
    t.bigint "repo_id", null: false
    t.bigint "user_id", null: false
    t.string "url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["repo_id"], name: "index_examples_on_repo_id"
    t.index ["user_id"], name: "index_examples_on_user_id"
  end

  create_table "repo_tags", force: :cascade do |t|
    t.bigint "repo_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["repo_id"], name: "index_repo_tags_on_repo_id"
    t.index ["tag_id"], name: "index_repo_tags_on_tag_id"
  end

  create_table "repos", force: :cascade do |t|
    t.float "average_rating"
    t.integer "total_reviews", default: 0, null: false
    t.text "description", default: ""
    t.string "language"
    t.integer "size"
    t.string "homepage"
    t.boolean "fork", null: false
    t.date "last_update"
    t.integer "forks_count"
    t.integer "open_issues_count"
    t.integer "subscribers_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_slug"
    t.string "repo_slug"
    t.index ["user_slug", "repo_slug"], name: "index_repos_on_user_slug_and_repo_slug", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "repo_id", null: false
    t.bigint "user_id", null: false
    t.float "rating", null: false
    t.text "body", null: false
    t.integer "upvotes", default: 0, null: false
    t.integer "downvotes", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["repo_id"], name: "index_reviews_on_repo_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "login", null: false
    t.string "email"
    t.string "encrypted_password", default: "", null: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "name"
    t.text "bio"
    t.string "location"
    t.string "blog"
    t.string "avatar_url"
    t.integer "public_repos"
    t.integer "followers"
    t.integer "following"
    t.string "github_url"
    t.string "reporev_url"
    t.index ["login"], name: "index_users_on_login", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.boolean "upvoted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_votes_on_review_id"
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

end
