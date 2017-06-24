'use strict';

class Check {
  constructor() {
    this.variables = {};
    this.interval = null;
  }

  add(name, getValue, updateState) {
    const value = this.getValue(getValue);

    this.variables[name] = {
      value,
      getValue,
      updateState
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
    if(this.interval)
      clearInterval(this.interval);

    this.interval = setInterval(() => {
      const names = Object.keys(this.variables);
      let check = true;

      names.forEach(name => {
        const variable = this.variables[name];

        if(!variable.value) {
          variable.value = this.getValue(variable.getValue);

          if(variable.value)
            variable.updateState();
          else
            check = false;
        }
      });

      if(check)
        clearInterval(this.interval);
    }, 1000);
  }
}

export default new Check();
