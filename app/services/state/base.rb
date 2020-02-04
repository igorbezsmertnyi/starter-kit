module State
  class Base
    def call
      serialized_state
    end

    private

    def serialized_state
      {
        server: {
          dateTime: date_time
        }
      }
    end

    def date_time
      Time.current
    end
  end
end
