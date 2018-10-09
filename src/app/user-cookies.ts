import { Deserializable } from "./deserializable";
export class UserCookies  implements Deserializable{
        public tokenId : string;
        public fullname : string;
        public emailid : string;
        public clientId : number;
        public groupid : number;
        public subgroupId : number;
        public teamLead : boolean;
        public teamId : number;
        public isNetworkRole : boolean;
        public thirdPartyId : number;
        public fromSocial :number;
        public lastPageUrl :string;
        public signup_url :string;
        public message :string;
        public influencerDetailsFlag :boolean;
        public userRtbFlag :boolean;
        public leadId :number;
        public countryCode :string;
        public privilegeId :number;
        public isEurope :boolean;
        public multiRoleUserId :number;
        public currencyCode :string;
        deserialize(input: any) {
            Object.assign(this, input);
            return this;
          }
}
