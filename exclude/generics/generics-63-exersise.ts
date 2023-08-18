function convertToString<T>(data: T): string | undefined {
  if (Array.isArray(data)) { return data.toString(); }
  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'function':
    case 'bigint':
    case 'symbol':
    case 'boolean':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
} 
