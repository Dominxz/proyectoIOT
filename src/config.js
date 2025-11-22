import {config} from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'b6fkqsdgod5csmz20zla-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE || 'b6fkqsdgod5csmz20zla'
export const BD_USER=process.env.BD_USER ||'uojkfceikhl7erja'
export const BD_PASSWORD=process.env.BD_PASSWORD || 'xHXLehyq2FSMhwW4A8tT'
export const BD_PORT=process.env.BD_PORT || 3306
export const PORT=process.env.PORT || 3000

