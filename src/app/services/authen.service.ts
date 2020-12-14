import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class AuthenService {
    constructor() {}
    
    private accessKey = 'accessToken'

    setAuthenticated(accessToken: string,current_user:any): void {
        localStorage.setItem(this.accessKey, accessToken)
        localStorage.setItem("_id",current_user._id)
        localStorage.setItem("firstname",current_user.firstname)
        localStorage.setItem("lastname",current_user.lastname)
        localStorage.setItem("role",current_user.role)
        localStorage.setItem("classroom",current_user.classroom)
        localStorage.setItem("guild",current_user.guild)
    }

    setUserLogin(){
        var object = {
            _id: localStorage.getItem("_id"),
            firstname: localStorage.getItem("firstname"),
            lastname: localStorage.getItem("lastname"),
            role: localStorage.getItem("role")
        }
        return object;
    }

    getAuthenticated(): string {
        return localStorage.getItem(this.accessKey)
    }

    clearAuthenticated(): void {
        localStorage.removeItem(this.accessKey)
    }
}
