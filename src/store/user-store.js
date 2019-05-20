import { observable, computed, action, decorate } from "mobx";
import { BaseStore } from './base-store';

export default class UserStore extends BaseStore {
    @observable isAuthentificated = false;

    @action getAuthToken() {
        this.isAuthentificated = JSON.parse(localStorage.getItem('isAuthentificated'));
    }

    @action login = () => {
        localStorage.setItem('isAuthentificated', true);
        console.log('THIS', this);
        this.update({isAuthentificated: true});
    }

    @action logout = () => {
        localStorage.setItem('isAuthentificated', false);
        this.update({isAuthentificated: false});
    }
}