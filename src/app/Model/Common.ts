export class commonsvc {

    _API_BASE_URL:string = 'https://restcountries.com'
    _API_VERSION         = 'v3.1'
    _API_KEY_:string     = '45asdf45asdf54asdf54asdf54asdf54asdf54asdf5f4'

    geturl(endpoint: string){
        return `${this._API_BASE_URL}/${this._API_VERSION}/${endpoint}?API_KEY=${this._API_KEY_}`
    }


}