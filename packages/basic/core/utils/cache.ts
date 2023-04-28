class StorageUtil {
    private storage: Storage;
    constructor(storage: Storage) {
      this.storage = storage;
    }
    setItem(key: string, value: any): void {
      this.storage.setItem(key, JSON.stringify(value));
    }
    getItem<T>(key: string): T | null {
      const value = this.storage.getItem(key);
      if (value === null) {
        return null;
      }
      return JSON.parse(value) as T;
    }
    removeItem(key: string): void {
      this.storage.removeItem(key);
    }
    clear(): void {
      this.storage.clear();
    }
  }
  const localUtils=new StorageUtil(localStorage)
  const sessionUtils=new StorageUtil(sessionStorage)
  export {
    localUtils,
    sessionUtils
  }