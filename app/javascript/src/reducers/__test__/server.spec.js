import server from '@/reducers/server'

describe('reducer dateTime', () => {
  describe('initialState', () => {
    const action = {
      type: '@INIT'
    }

    it('should be empty', () => {
      const newState = server(undefined, action)
  
      expect(newState).toEqual({ dateTime: null })
    })
  
    it('should set dateTime', () => {
      const mock = { dateTime: new Date() }
      const newState = server(mock, action)
  
      expect(newState).toEqual({ dateTime: mock.dateTime })
    })
  })
})
