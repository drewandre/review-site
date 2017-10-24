class User < ApplicationRecord
  include ActiveModel::Serializers::JSON

  devise :database_authenticatable, :rememberable, :trackable,
         :omniauthable, omniauth_providers: [:github]

  def self.from_omniauth(auth)
    info = auth.info
    raw_info = auth.extra.raw_info
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.login = info.nickname
      user.email = info.email
      user.name = info.name
      user.avatar_url = raw_info.avatar_url
      user.bio = raw_info.bio
      user.location = raw_info.location
      user.blog = raw_info.blog
      user.public_repos = raw_info.public_repos
      user.followers = raw_info.followers
      user.following = raw_info.following

      user.github_url = User.create_github_url(auth.info.nickname)
      user.reporev_url = User.create_reporev_url(auth.info.nickname)

      # necessary?
      user.password = Devise.friendly_token[0,20]
    end
  end

  def email_required?
    false
  end

  def self.api_url
    "#{ENV["WEB_URL"]}/api/v1"
    #"https://reporev.herokuapp.com/api/v1"
  end

  def self.create_github_url(login)
    "https://github.com/#{login}"
  end

  def self.create_reporev_url(login)
    "#{User.api_url}/users/#{login}"
  end

  def attributes
    {
      "id": id,
      "login": login,
      "email": email,
      "uid": uid,
      "github_url": github_url,
      "reporev_url": reporev_url,
      "name": name,
      "avatar_url": avatar_url,
      "bio": bio,
      "location": location,
      "blog": blog,
      "public_repos": public_repos,
      "followers": followers,
      "following": following
    }
  end

  has_many :reviews
  has_many :examples
  has_many :comments, through: :reviews
  has_many :votes, through: :reviews, source: :comments
end
