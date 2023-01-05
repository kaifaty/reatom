# What is Lit?

Lit is a simple library for building fast, lightweight web components.

At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive

## About

Package provide `atomic` mixin for `LitElement` class witch subscribes for atoms in list and request component update on atom changes.

Atom state in component you can get with `ctx.get(atom)`

```Javascript
atomic(LitElement, reatomContext, listOfAtoms)
```

## Example

```Javascript
import { atomic } from "@reatom/npm-lit";
import { atom, action, createCtx } from "@reatom/core";
import { LitElement, html } from "lit";

const ctx = createCtx();
const count = atom(0);
const countText = atom((ctx) => `Current count: ${ctx.spy(count)}`);
const increment = action((ctx) => {
  count(ctx, (v) => v + 1);
});

setInterval(() => increment(ctx), 1000);

export class Test extends atomic(LitElement, ctx, [countText]) {
  render() {
    return html`<div>
      Render: ${ctx.get(countText)} <br />
      <button @click="${() => increment(ctx)}">Inc</button>
    </div>`;
  }
}

if (!customElements.get("test-element")) {
  customElements.define("test-element", Test);
}

```
