import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, concat } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private utilsService: UtilsService) { }

    public checkIsLoggedIn(): boolean {
        return this.utilsService.load('user') ? true : false
    }
    // private _userDB: User = {
    //     name: "Ochoa Hyde",
    //     coins: 100,
    //     moves: []
    // }
    private _user$ = new BehaviorSubject<User>(this.utilsService.load('user') || null)
    public user$ = this._user$.asObservable()

    public getUser() {
        return this.user$
    }

    public signup(user: User): void {
        this.utilsService.store('user', user)
        this._user$.next(user)
    }

    public logout() {
        console.log('logging out...')
        localStorage.removeItem("user");
    }

    public addMove(contact: Contact, amount: number) {
        const newMove = {
            toId: contact._id,
            to: contact.name,
            amount,
            at: Date.now()
        }
        const currUser = { ...this._user$.value }
        currUser.coins -= amount
        currUser.moves.unshift(newMove)
        this.utilsService.store('user', currUser)
        this._user$.next(currUser)
    }
}