module State
  class Base
    def call
      serialized_state
    end

    private

    def serialized_state
      {
        server: {
          date: Date.today,
          time: time
        }
      }
    end

    def time
      Time.current.strftime('%T')
    end
  end
end
