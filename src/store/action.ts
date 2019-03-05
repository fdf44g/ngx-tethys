import { META_KEY } from './types';
import { findAndCreateStoreMetadata } from './util';
import { Observable, from, Observer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActionState } from './action-state';

export interface DecoratorActionOptions {
    type: string;
    payload?: any;
}

/**
 * Decorates a method with a action information.
 */
export function Action(action?: DecoratorActionOptions | string) {
    return function(
        target: any,
        name: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const meta = findAndCreateStoreMetadata(target);

        // default use function name as action type
        if (!action) {
            action = {
                type: name
            };
        }
        // support string for type
        if (typeof action === 'string') {
            action = {
                type: action
            };
        }
        const type = action.type;

        if (!action.type) {
            throw new Error(
                `Action ${action.type} is missing a static "type" property`
            );
        }

        const originalFn = descriptor.value;
        meta.actions[type] = {
            fn: name,
            originalFn: originalFn,
            type
        };

        descriptor.value = function (...args: any[]) {
            ActionState.changeAction(name);
            let result = originalFn.call(this, ...args, this.snapshot);
            result = _dispatch(result);
            result.subscribe();
            return result;
        };
    };
}


function _dispatch(result: any): Observable<any> {
    if (result instanceof Promise) {
        result = from(result);
    }
    if (result instanceof Observable) {
        result = result.pipe(map(r => r));
    } else {
        result = Observable.create((observer: Observer<any>) => {
            observer.next({});
        });
    }
    return result.pipe(shareReplay());
}
