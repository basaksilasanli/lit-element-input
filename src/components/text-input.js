import { html, LitElement } from 'lit-element';

import Styles from './text-input.scss';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


class TextInput extends LitElement {

  constructor(){
    super();
    this.placeholder="Placeholder Metni";
    this.inputValue="";  
    this.disabled = null;
    this.readOnly = null;
  }

  static get properties() {
    return {
      label: {
        type: String,
      },
      placeholder: {
        type: String,
        reflect: true, 
      },
      inputValue: {
        type: String,
        reflect: true,
      },
      disabled: {
        type: Boolean,
      },
      readOnly: {
        type: Boolean,
      }
    };
  }

  static get styles() {
		return [Styles];
  }

  render() {
    return html`
      ${this.label? html`<p class="label">${this.label}</p>` : '' }
      <div class="container">
        <input 
          class="input" 
          placeholder=${this.placeholder}
          type="text" 
          @keyup=${this.onKeyUp}
          .value=${this.inputValue}
          ?disabled=${this.disabled}
          ?readOnly=${this.readOnly}
        >
        </input>
       
        ${(!this.readOnly && !this.disabled && this.inputValue !== '') ? html`<iron-icon icon="close" class="closeIcon" @click="${() => this.clearInput()}" ></iron-icon>`: ''}    
      <div>
      <button class='disabledButton' @click="${()=> this.changeDisable()}"> Change disableProperty </button>
      <button class='readOnlyButton' @click="${()=> this.changeReadOnly()}"> Change readOnlyProperty </button>`;
  }
  onKeyUp(event)  {
    this.inputValue = event.target.value   
  }
  clearInput = () => {
    this.setAttribute('inputValue', '');
  } 
  changeDisable = () => {
    if(this.disabled === true) {
      this.disabled = null;

    }else {
      this.disabled = true;
    }
  }
  changeReadOnly = () => {
    if(this.readOnly === true) {
      this.readOnly = null;
    }
    else {
      this.readOnly = true;
    }
  }

}

window.customElements.define('text-input', TextInput);