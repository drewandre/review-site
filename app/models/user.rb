class User < ApplicationRecord
  include ActiveModel::Serializers::JSON

  devise :database_authenticatable, :rememberable, :trackable,
         :omniauthable, omniauth_providers: [:github]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.login = auth.info.nickname
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end

  def email_required?
    false
  end

  def api_url
    "http://localhost:3000/api/v1"
    #"https://reporev.herokuapp.com/api/v1"
  end

  def github_url
    "https://github.com/#{login}"
  end

  def reporev_url
    "#{api_url}/users/#{login}"
  end

  def attributes
    {
      "id": id,
      "login": login,
      "github_url": github_url,
      "reporev_url": reporev_url,
      # "name": "",
      # "avatar_url": "",
      # "bio": "",
      "email": email,
      "uid": uid
    }
  end

  has_many :reviews
  has_many :examples
  has_many :comments, through: :reviews
  has_many :votes, through: :reviews, source: :comments
end
