import { HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";

export class Endpoints {
    constructor() {}

    static readonly HEADERS: HttpHeaders = new HttpHeaders().set(
        "Content-Type",
        "application/json"
    );

    static readonly ROOT_API: string = environment.ROOT_API;
    static readonly ENDPOINT_AUTH: string = Endpoints.ROOT_API + "/api/auth";
    static readonly LOGIN_GITHUB:  string = Endpoints.ENDPOINT_AUTH +"/gitHubLogin";
    static readonly ENDPOINT_USER: string = Endpoints.ROOT_API + "/users";
    static readonly ENDPOINT_API: string = Endpoints.ROOT_API + "/apis";
    static readonly ENDPOINT_ORGANISATION: string =
        Endpoints.ROOT_API + "/organisations";
    static readonly ENDPOINT_DEPARTEMENT: string =
        Endpoints.ROOT_API + "/departements";
    static readonly ENDPOINT_ROLES: string = Endpoints.ROOT_API + "/roles";
    static readonly ENDPOINT_FUNCTIONNALITY: string =
        Endpoints.ROOT_API + "/functionnalities";

    // static readonly ENDPOINT_UTILISATEURS: string = Endpoints.ROOT_API + '/users';
    static readonly ENDPOINT_DEPLOY: string = Endpoints.ROOT_API + "/deploy";
    static readonly ENDPOINT_OASRAML: string = Endpoints.ROOT_API;

    static readonly LOGIN_ANYPOINT: string =
        Endpoints.ROOT_API + "/mulesoftOauth?accessToken=";
}
