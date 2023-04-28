import { defineStore } from 'pinia'
import { Config } from '~/models'

export interface configStore {
    homeConfig: Config | undefined
}
export const useConfigStore = defineStore('config', {
    state: () : configStore => ({
        homeConfig: undefined
        }),
    actions: {
        setHomeConfig(value: Config) {
        this.homeConfig = value
        }
    }
})