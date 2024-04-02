import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRates, useCalc } from 'App/providers'

const mockData = [
  {
    currency: 'USD',
    details: {
      ID: 'R01235',
      NumCode: '840',
      CharCode: 'USD',
      Nominal: 1,
      Name: 'Доллар США',
      Value: 92.2914,
      Previous: 92.366,
    },
  },
  {
    currency: 'AZN',
    details: {
      ID: 'R01020A',
      NumCode: '944',
      CharCode: 'AZN',
      Nominal: 1,
      Name: 'Азербайджанский манат',
      Value: 54.2891,
      Previous: 54.3329,
    },
  },
  {
    currency: 'VND',
    details: {
      ID: 'R01150',
      NumCode: '704',
      CharCode: 'VND',
      Nominal: 10000,
      Name: 'Вьетнамских донгов',
      Value: 38.4483,
      Previous: 38.481,
    }
  }
]

describe('Testing Rates Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Initial state test', () => {
    const ratesStore = useRates()
    expect(ratesStore.rates).toEqual([])
  })

  it('Mock rates state test', () => {
    const ratesStore = useRates()
    ratesStore.rates = mockData
    expect(ratesStore.rates).toEqual(mockData)
  })

  // TODO fetch data API
  // it('fetch data', async () => {
  // })
})

describe('Testing Calc Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Calc action test', () => {
    const ratesStore = useRates()
    ratesStore.rates = mockData
    const calcStore = useCalc()
    expect(calcStore.calc(1, 'USD', 'VND')).toBe(24004.03)
  })

  it('Calc action fallback test', () => {
    const calcStore = useCalc()
    expect(calcStore.calc(1000, 'USD', 'RUB')).toBe(1000)
  })
})
