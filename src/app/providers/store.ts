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
          return (
            i.currency.includes(str.toUpperCase()) ||
            i.details.NumCode.includes(str.toLowerCase()) ||
            str === ''
          )
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
  getters: {},
  actions: {
    calc(fromAmount: number, fromCurrency: string, toCurrency: string) {

      const ratesStore = useRates()

      const { Nominal: fromNominal, Value: fromRate } = ratesStore.rates.find(
        (i) => i.currency === fromCurrency
      )?.details || { Nominal: 1, Value: 1 }

      const { Nominal: toNominal, Value: toRate } = ratesStore.rates.find(
        (i) => i.currency === toCurrency
      )?.details || { Nominal: 1, Value: 1 }

      const result =
        (((fromAmount * fromRate) / toRate) * toNominal) / fromNominal

      return Number(result.toFixed(2))
    },
  },
})
