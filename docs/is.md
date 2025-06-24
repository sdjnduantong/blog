### 类型判断
```typescript
const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}
```
### 值是否未定义
```typescript
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}
```
### 值是否定义
```typescript
export function isUnDef<T = unknown>(val?: T): val is T {
  return isDef(val);
}
```
### 值是否对象
```typescript
function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}
```
### 值是否空
```typescript
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}
```

### 值是否日期
```typescript
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

```
### 值是否空
```typescript
export function isNull(val: unknown): val is null {
  return val === null;
}
```

### 值是否空和未定义
```typescript
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}
```

### 值是否空或者未定义
```typescript
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}
```

###  值是否数字
```typescript
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}
```

### 值是否字符串
```typescript
export function isString(val: unknown): val is string {
  return is(val, 'String');
}
```
### 值是否Promise函数
```typescript
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
```

### 值是否函数
```typescript

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
```

### 值是否布尔
```typescript
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}
```

### 值是否数组
```typescript
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}
```

### 是否未window对象
```typescript
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}
```
### 值是否正则
```typescript
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}
```
### 是否未element元素
```typescript
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}
```
