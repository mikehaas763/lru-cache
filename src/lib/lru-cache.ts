export class LruCache<TKey, TValue> {
    private cacheItems = new Map<TKey, TValue>();

    constructor(private maxItems: number = 100) { }

    public add(key: TKey, value: TValue) {
        this.cacheItems.set(key, value);

        return this;
    }

    // todo add a private addAll that can accept an array of items

    public get(key: TKey) {
        return this.cacheItems.get(key) || null;
    }
}
