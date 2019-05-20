import { action } from 'mobx';

export class BaseStore {
    @action
    update(props) {
        Object.assign(this, props);
    }
}