interface LruCacheOptions {
    maxItems: number;
}

export class LruCache<TKey, TValue> {
    private cacheItems = new Map<TKey, TValue>();

    constructor(private maxItems: number = 100) { }

    public add(key: TKey, value: TValue) {
        this.cacheItems.set(key, value);

        return this;
    }

    public get(key: TKey) {
        return this.cacheItems.get(key) || null;
    }
}
