release: rails db:migrate
web: rails s -p $PORT
worker: bundle exec sidekiq -C config/sidekiq.yml
