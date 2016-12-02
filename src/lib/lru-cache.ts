interface LruCacheOptions {
    maxItems: number;
}

export class LruCache<TKey, Tvalue> {
    constructor(private maxItems: number = 100) { }
}