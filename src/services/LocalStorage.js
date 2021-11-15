class LocalStorage{
    get(key) {
        return window.localStorage.getItem(key);
    }

    set(key, value) {
        window.localStorage.setItem(key, value);
    }

    setObject(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getObject(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    remove(key) {
        window.localStorage.removeItem(key);
    }
}

export default new LocalStorage();