import type { Ctx, AtomMut, Atom, Unsubscribe } from '@reatom/core'

type Constructor<T> = new (...args: any[]) => T;


export declare class LitElement extends HTMLElement {
  connectedCallback(): void;
  disconnectedCallback(): void;
  requestUpdate(): void;
}


/**
 * Mixin to connect atoms from Reatom to LitElement class.
 * 
 * @param superClass - LitElement class
 * @param ctx - Reatom context
 * @param atoms - List of atoms needed to update
 */
export const atomic = <T extends Constructor<LitElement>>(superClass: T, ctx: Ctx, atoms: (Atom | AtomMut)[]): T => {
  return class Atomic extends superClass {
    private __subs = new Set<Unsubscribe>()    
    connectedCallback(): void {
        super.connectedCallback()
        atoms.forEach(atom => this.__subs.add(ctx.subscribe(atom, () => this.requestUpdate())))
    }
    disconnectedCallback(): void {
        super.disconnectedCallback()
        this.__subs.forEach(unsub => unsub())
        this.__subs.clear()
    }
  }
}
