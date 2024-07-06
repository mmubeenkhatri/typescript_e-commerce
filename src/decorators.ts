function log(target: any, key: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}

export { log };
