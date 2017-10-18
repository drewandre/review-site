class User < ApplicationRecord
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
end
