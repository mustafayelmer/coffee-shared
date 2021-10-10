# Coffee > Shared

Shared data models for coffee project

## Standards
- Language: `TS`
- Eslint: `Yes`
- Static Code Analysis: `Yes` *IntelliJ Code Inspections*
- DDD - Document Driven: `Yes`
- EDD - Exception Driven: `No`
- TDD - Test Driven: `No`

## Commands
- ``npm run clear`` *// clears "dist" folder*
- ``npm run lint`` *// runs eslint for static code analysis*
- ``npm run build`` *// builds JS files at "dist" folder*
- ``npm publish`` *or* ``npm run publix`` *// publishes "dist" folder to npm*

## Install
``npm i @yelmer-samples/coffe-shared``

## Data Models
- Weather
  - [WeatherCloud](./src/weather/WeatherCloud.ts)
  - [WeatherCoordinate](./src/weather/WeatherCoordinate.ts)
  - [WeatherHistoryItem](./src/weather/WeatherHistoryItem.ts)
  - [WeatherItem](./src/weather/WeatherItem.ts)
  - [WeatherMain](./src/weather/WeatherMain.ts)
  - [WeatherSys](./src/weather/WeatherSys.ts)
  - [WeatherWind](./src/weather/WeatherWind.ts)
  - [WeatherRoot](./src/weather/WeatherRoot.ts)
- City
  - [CityBase](./src/city/CityBase.ts)
  - [CityDetail](./src/city/CityDetail.ts)
  - [CityShort](./src/city/CityShort.ts)

---
## Prepared by
- Mustafa Yelmer
- mustafayelmer(at)gmail.com
- `2021-10-10`