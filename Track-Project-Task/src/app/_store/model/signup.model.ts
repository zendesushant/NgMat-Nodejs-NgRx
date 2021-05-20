

export interface SignupModel 
{
    users:UserModel[]
}

export interface UserModel
{
    mid:string,
    username:string,
    password:string
}