'use strict';

class Check {
  constructor() {
    this.variables = {};
    this.interval = null;
  }

  add(name, getValue, updateState) {
    const value = this.getValue(getValue);
    const updateStateArray = this.variables[name] ?
      [updateState].concat(this.variables[name].updateState) :
      [updateState];


    this.variables[name] = {
      value,
      getValue,
      updateState: updateStateArray
    };

    if(value)
      updateState();
    else
      this.check();
  }

  getValue(getValue) {
    try {
      return getValue();
    } catch(e) {
      return false;
    }
  }

  check() {
    /* istanbul ignore if */
    if(this.interval)
      clearInterval(this.interval);

    this.interval = setInterval(() => {
      const check = Object.keys(this.variables).reduce((result, name) => {
        const variable = this.variables[name];

        /* istanbul ignore next */
        if(!variable.value) {
          variable.value = this.getValue(variable.getValue);

          if(variable.value)
            variable.updateState.forEach(update => update());
          else
            result = false;
        }

        return result;
      }, true);

      if(check)
        clearInterval(this.interval);
    }, 100);
  }
}

export default new Check();
