export interface User {
    _id?:                string;
    name:               string;
    app:                string;
    apm:                string;
    date:               string;
    email:              string;
    password:           string;
    role?:              string;
    session_token?:     string;
}