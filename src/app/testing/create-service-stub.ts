import { Provider } from '@angular/core';

type ClassOf<T> = new (...args: any[]) => T;

export function createServiceStub<T>(
  provide: ClassOf<T>,
  obj: Partial<T> = {}
): Provider {
  return { provide, useValue: obj };
}
