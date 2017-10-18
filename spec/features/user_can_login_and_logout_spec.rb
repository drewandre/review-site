require "rails_helper"

def set_omniauth(opts = {})
  default = {
    provider: :github,
    uuid: "1234",
    github: {
      nickname: "zerovolts",
      email: "zach@zerovolts.com",
      password: "b24bjfnsf08"
    }
  }

  credentials = default.merge(opts)
  provider = credentials[:provider]
  user_hash = credentials[provider]

  OmniAuth.config.test_mode = true

  OmniAuth.config.mock_auth[provider] = OmniAuth::AuthHash.new({
    "provider" => credentials[:provider],
    "uid" => credentials[:uuid],
    "info" => {
      "nickname" => user_hash[:nickname],
      "email" => user_hash[:email],
    }
  })
end

def set_invalid_omniauth(opts = {})
  credentials = {
    provider: :github,
    invalid: :invalid_credentials
  }.merge(opts)

  OmniAuth.config.test_mode = true
  OmniAuth.config.mock_auth[credentials[:provider]] = credentials[:invalid]
end

feature "user can login and logout" do

  scenario "user logs in and out" do
    set_omniauth()

    visit "/"
    expect(page).to have_link "Sign in"

    click_link "Sign in"
    expect(page).to have_content "zerovolts"
    expect(page).to have_link "Sign out"

    click_link "Sign out"
    expect(page).to have_link "Sign in"
  end
end
