source 'https://rubygems.org'

gem 'rails', '~> 4.1.10'

gem 'pg' #env ARCHFLAGS="-arch x86_64"
gem 'counter_culture'
gem 'after_commit_action'
gem 'ransack'
gem 'rails-observers'

gem 'redis-objects'
gem "redis", require: ["redis", "redis/connection/hiredis"]
gem 'hiredis'

gem 'devise'
gem 'authority'

gem 'haml'
gem 'jbuilder'
gem 'htmlentities'
gem 'rack-ssl', :require => 'rack/ssl'   # force SSL

gem 'useragent'
gem 'actionmailer_inline_css'
gem 'kaminari', '>= 0.14.1'
gem 'rack-ssl-enforcer', :require => false
gem 'fabrication'
gem 'rails_autolink'
# Please don't update airbrake.
# It's for internal use only, and we monkeypatch certain methods
gem 'airbrake', '3.1.15'

# Need for mongodb data import
gem 'mongo', :require => false
gem 'bson_ext', :require => false

# Remove / comment out any of the gems below if you want to disable
# a given issue tracker, notification service, or authentication.

# Issue Trackers
# ---------------------------------------
# Lighthouse
gem 'lighthouse-api'
# Redmine
gem 'oruen_redmine_client', :require => 'redmine_client'
# Pivotal Tracker
gem 'pivotal-tracker'
# Fogbugz
gem 'ruby-fogbugz', :require => 'fogbugz'
# Github Issues
gem 'octokit', '~> 2.0'
# Gitlab
gem 'gitlab', '~> 3.0.0'

# Bitbucket Issues
gem 'bitbucket_rest_api', :require => false

# Jira
gem 'jira-ruby', :require => 'jira'

# Notification services
# ---------------------------------------
gem 'campy'
# Hipchat
gem 'hipchat'
# Google Talk
gem 'xmpp4r', :require => ["xmpp4r", "xmpp4r/muc"]
# Hoiio (SMS)
gem 'hoi'
# Pushover (iOS Push notifications)
gem 'rushover'
# Hubot
gem 'httparty'
# Flowdock
gem 'flowdock'

# Authentication
# ---------------------------------------
# GitHub OAuth
gem 'omniauth-github'

gem 'ri_cal'
gem 'yajl-ruby', :require => "yajl"
gem 'sidekiq'
gem 'sinatra', :require => false
gem 'state_machine', github: 'seuros/state_machine'
gem 'git'

gem 'rinku', require: 'rails_rinku'

group :development, :test do
  gem 'rspec-rails'
  gem 'webmock', :require => false
  gem 'pry-rails'
#  gem 'rpm_contrib'
#  gem 'newrelic_rpm'
  gem 'quiet_assets'
end

group :development do
  gem 'capistrano', '~> 2.0', :require => false

  # better errors
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'meta_request'
  gem 'foreman', :require => false

end

group :test do
  gem 'capybara'
  gem 'launchy'
  gem 'database_cleaner'
  gem 'email_spec'
  gem 'timecop'
  gem 'coveralls', require: false
  gem "fakeredis", require: 'fakeredis/rspec'

  #legacy
  gem 'rspec-its'
  gem 'rspec-activemodel-mocks'
end

group :heroku, :production do
  gem 'unicorn', :require => false
  gem 'puma', :require => false
end

gem 'execjs'
gem 'therubyracer', :platform => :ruby  # C Ruby (MRI) or Rubinius, but NOT Windows
gem 'uglifier',     '>= 1.0.3'
# We can't upgrade because not compatible to jquery >= 1.9.
# To do that, we need fix the rails.js
gem 'jquery-rails', '~> 2.1.4'
gem 'underscore-rails'
gem 'turbolinks'
gem 'jquery-turbolinks'
