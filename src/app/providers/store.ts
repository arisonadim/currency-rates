import { defineStore } from 'pinia'
import axios from 'axios'
import type { Rates, State } from '../types'

export const useRates = defineStore('rates', {
  state: (): State => ({
    rates: [],
    // TODO new Map() ?
  }),
  getters: {
    filterRates(state) {
      return (str = '') => {
        const strTrimmed = str.trim()
        const rates = state.rates.filter((i) => {
          return i.currency.includes(strTrimmed.toUpperCase()) ||
              i.details.NumCode.includes(strTrimmed.toLowerCase()) ||
              strTrimmed === ''
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
