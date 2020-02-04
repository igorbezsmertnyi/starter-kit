import server from '@/reducers/server'

describe('reducer dateTime', () => {
  describe('initialState', () => {
    const action = {
      type: '@INIT'
    }

    it('should be empty', () => {
      const newState = server(undefined, action)
  
      expect(newState).toEqual({ date: null, time: null })
    })
  
    it('should set dateTime', () => {
      const mock = { date: new Date(), time: '00:00:00' }
      const newState = server(mock, action)
  
      expect(newState).toEqual({ date: mock.date, time: mock.time })
    })
  })
})
