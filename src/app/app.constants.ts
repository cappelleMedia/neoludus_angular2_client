import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:3001/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl: string = this.Server + this.ApiUrl;
}
