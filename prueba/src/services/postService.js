import Service from './Services.js';

const resource = 'posts';

export default {
    get() {
        return Service.get(resource);
    }
}