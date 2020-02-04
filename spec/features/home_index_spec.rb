require 'rails_helper'

RSpec.describe 'Home page index', type: :feature, js: true do
  describe '#index' do
    before do
      Timecop.freeze(Time.now)
    end

    it 'should display server datetime' do
      visit '/'
      expect(page).to have_text(Date.today.strftime("%A, %-d %B %Y"))
    end
  end
end
