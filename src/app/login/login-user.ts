export class LoginUser {
    constructor(
        public username : string,
        public password : string,
        public fromSocial ? : number,
        public thirdPartyId ?:number,
        public fullName ? :string
    ){}
}
