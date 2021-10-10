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
  - *interface* [Weather](./src/weather/Weather.ts)
  - *class* [WeatherCloud](./src/weather/WeatherCloud.ts)
  - *class* [WeatherCoordinate](./src/weather/WeatherCoordinate.ts)
  - *class* [WeatherItem](./src/weather/WeatherItem.ts)
  - *class* [WeatherMain](./src/weather/WeatherMain.ts)
  - *class* [WeatherRain](./src/weather/WeatherRain.ts)
  - *class* [WeatherSnow](./src/weather/WeatherSnow.ts)
  - *class* [WeatherWind](./src/weather/WeatherWind.ts)
  - *class* [WeatherSys](./src/weather/WeatherSys.ts)
  - *class* [WeatherRoot](./src/weather/WeatherRoot.ts)
- City
  - *interface* [City](./src/city/City.ts)
  - *class* [CityBase](./src/city/CityBase.ts)
  - *class* [CityDetail](./src/city/CityDetail.ts)
  - *class* [CityShort](./src/city/CityShort.ts)

---
## Prepared by
- Mustafa Yelmer
- mustafayelmer(at)gmail.com
- `2021-10-10`