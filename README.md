# React-Rails Template

## Template for start React-Rails project

Created using [Webpacker](https://github.com/rails/webpacker). Includes spec configuration for backend and frontend parts of application, and React state management.

---

Things you may want to cover:

* Ruby version `2.7.0`
* Rails version `6.0.2`
* Node version `11.2.0`
* NPM version `6.13.6`

* System dependencies
  - Postgresql - `12.1`
  - Redis - `4.0`
  - Memcached - `6.0`

* Configuration
  - `bin/setup`

* Database creation
  - `rails db:crate`

* Database initialization
  - `rails db:setup`

* How to run the test suite
  - Rails specs `bundle exec rspec spec`
  - React specs `npm run test`


## Template dependencies

### Back-end
1. [Foreman](https://github.com/ddollar/foreman)
2. [Redis](https://github.com/redis-store/redis-rails)
3. [Sidekiq](https://github.com/mperham/sidekiq)
4. [Devise](https://github.com/heartcombo/devise)
5. [Awesome Print](https://github.com/awesome-print/awesome_print)

### Front-end
1. [React](https://github.com/facebook/react)
2. [Redux](https://github.com/reduxjs/redux)
3. [Redux logger](https://github.com/LogRocket/redux-logger)
4. [Redux promise](https://github.com/redux-utilities/redux-promise)
5. [Axios](https://github.com/axios/axios)

## Features
Additional features, using for improve development process

#### CircleCI configuration
Continuous integration with CircleCI using for automated building and testing process

[Open](./.circleci/config.yml)

#### Custom seed
Custom seed used for dividing unrelated seeds to separate files
Example:
```ruby
db/seeds/001_users.rb

User.create(
  first_name: 'Luke',
  last_name: 'Skywalker',
  email: 'test@example.com',
  password: '12345678'
)
```

Also, you can run specific seed via command `rails db:seed:001_users`

#### Frontend state
Service object for receiving data from backend to frontend as an initial state, accessible via Redux. You can override `set_redux_state` in your controller and change the state class, for example to `State::User` class and save the result to `@redux_state` variable. The `@redux_state` variable is rendered in [Application layout](./app/views/layouts/application.html.erb) in [rootState](./app/javascript/src/containers/RootState/index.js) component for passing state to the other components via Redux

[Open](./app/services/state/base.rb)

Example:
```ruby
app/services/state/user.rb

module State
  class User < Base
    def initialize(user)
      @user = user
    end

    private

    attr_reader :user

    def serialized_state
      super.merge({
        user: {
          first_name: user.first_name,
          last_name:  user.last_name,
          email:      user.email
        }
      })
    end

    ...
  end
end
```

### Front-end

#### Container initializer
For passing initial state from [rootState](./app/javascript/src/containers/RootState/index.js), the containers should be wrapped in `Provider` component from `react-redux` library. For initialize component which need access to Redux state we should import it into [initializer](./app/javascript/src/initializer.js) and put it into array. Each component `exports` should look in this way:
```js
app/javascript/src/containers/ExampleComponent/index.js

...

export default {
  component: connect(mapStateToProps)(ExampleComponent),
  selector: '#exampleComponent'
}
```
Here we exporting an object with component connected to Redux and with selector. As a selector can be any value acceptable (document.querySelectorAll)[https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll] method.

Component initialization look like
Example:
```js
app/javascript/src/initializer.js

...

import ExampleComponent from './containers/ExampleComponent'

window.addEventListener('DOMContentLoaded', () => {
  [
    // Put containers here
    ExampleComponent
  ]
  
  ...

```

## Testing

### Back-end

Back-end test setup:
1. [Rspec](https://github.com/rspec/rspec-rails)
2. [Factory Bot](https://github.com/thoughtbot/factory_bot_rails)
3. [Capybara](https://github.com/teamcapybara/capybara)
4. [Shoulda matchers](https://github.com/thoughtbot/shoulda-matchers)
5. [Database cleaner](https://github.com/DatabaseCleaner/database_cleaner)
6. [Timecop](https://github.com/travisjeffery/timecop)

Start command: `bundle exec rspec spec`

### Front-end

Front-end test setup:
1. [Jest](https://github.com/facebook/jest)
2. [Testing library](https://github.com/testing-library/react-testing-library)
3. [Moxios](https://github.com/axios/moxios)

Start command: `npm run test`

Author [Igor Bezsmertnyi](https://github.com/igorbezsmertnyi)

