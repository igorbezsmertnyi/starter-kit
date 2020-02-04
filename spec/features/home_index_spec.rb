require 'rails_helper'

RSpec.describe 'Home page index', type: :feature, js: true do
  describe '#index' do
    before do
      Timecop.freeze(Time.now)
    end

    it 'should display server datetime' do
      visit '/'

      text = "#{Date.today.strftime('%A, %-d %B %Y')} - #{Time.current.strftime('%T')}"

      expect(page).to have_text(text)
    end
  end
end
