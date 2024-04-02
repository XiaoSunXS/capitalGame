import { Injectable } from '@angular/core';
import { Question } from './question';
import { Capital } from './capital';
// import { MOCK_COUNTRY_CAPITALS } from './mockCountryCapitals'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOCK_COUNTRY_CAPITALS } from './mockCountryCapitals';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  constructor() { }

  url = 'http://localhost:3000/countryCapitals';

  async getAllCountryCapitals(): Promise<Capital[]> {
    const data = await fetch(this.url)
    return await data.json() ?? []
  }

  async getRandomCountry(): Promise<Capital[]> {
    const allCountryCapitals = await this.getAllCountryCapitals()
    const count = allCountryCapitals.length
    let randomNumbers: number[] = []

    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * count)
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
      }
    }
    return randomNumbers.map((rn) => allCountryCapitals[rn])
  }

  async getQuestion(): Promise<Question> {

    const randomCountries = await this.getRandomCountry()
    const randomCountry = randomCountries[0]
    const country = randomCountry.country
    const correctAnswer = randomCountry.city
    const options = randomCountries.map((v) => v.city)

    return { country, options, correctAnswer }
  }


}
