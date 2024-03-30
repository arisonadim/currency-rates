export type Currency = {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}

export interface Rates  {
  currency: string
  details: Currency
}

export interface State  {
  rates: Rates[]
}