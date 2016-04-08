web: bundle exec puma -e $RAILS_ENV -C config/puma.rb
worker: bundle exec sidekiq -e $RAILS_ENV -q high,5 -q default,3 -q low,1 -L log/sidekiq.log
