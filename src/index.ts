// By Bram Kragten @bramkragten

import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  property,
  TemplateResult,
} from "lit-element";

@customElement("my-counter")
export default class MyCounter extends LitElement {
  @property({ type: Number }) public count = 0;

  public inc(): void {
    this.count++;
  }

  public dec(): void {
    this.count--;
  }

  protected render(): TemplateResult {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }

  static get styles(): CSSResult {
    return css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 60px;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: #f3f30d;
        color: #0a0aff;
      }
    `;
  }
}
