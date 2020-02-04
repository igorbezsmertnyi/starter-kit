class ApplicationController < ActionController::Base
  before_action :set_redux_state

  private

  def set_redux_state
    @redux_state = ::State::Base.new.call
  end
end
