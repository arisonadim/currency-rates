import { defineStore } from 'pinia'
import axios from 'axios'
import type { State } from '../types'

export const useRates = defineStore('rates', {
  state: (): State => ({
    rates: [],
    // TODO new Map() ?
  }),
  getters: {
    filterRates(state) {
      return (str = '') => {
        const rates = state.rates.filter((i) => {
          return i.currency.includes(str.toUpperCase()) ||
              i.details.NumCode.includes(str.toLowerCase()) ||
              str === ''
        })
        return rates
      }
    },
  },
  actions: {
    async fetchRates() {
      // TODO check cache first / save to localStorage ?
      try {
        const { data } = await axios.get(
          'https://www.cbr-xml-daily.ru/daily_json.js'
        )
        const dataRaw = data?.Valute || {}
        const dataArr = Object.keys(dataRaw).map((i) => ({
          currency: i as string,
          details: dataRaw[i as string],
        }))
        this.rates = dataArr
      } catch (e) {
        console.log('axios:', e)
      }
    },
  },
})

export const useCalc = defineStore('calculator', {
  state: () => ({
  }),
  getters: {
  },
  actions: {
    calc() {
      const ratesStore = useRates()
      const fromRate = ratesStore.rates.find((i) => i.currency === 'UDS')?.details.Value
      const result = fromRate;
      console.log('calc', fromRate);
      return result
    }
  }
})
