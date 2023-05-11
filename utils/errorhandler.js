class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Class Inheritance</h2>

// <p>Use the "extends" keyword to inherit all methods from another class.</p>
// <p>Use the "super" method to call the parent's constructor function.</p>

// <p id="demo"></p>

// <script>
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// mycar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = mycar.show();
// </script>

// </body>
// </html>

// Error.captureStackTrace() Non-standard
// A non-standard V8 function that creates the stack property on an Error instance.

// Error.stackTraceLimit Non-standard
// A non-standard V8 numerical property that limits how many stack frames to include in an error stacktrace.

// Error.prepareStackTrace() Non-standard Optional
// A non-standard V8 function that, if provided by usercode, is called by the V8 JavaScript engine for thrown exceptions, allowing the user to provide custom formatting for stacktraces.

// The Error() constructor creates an error object.

// new Error(message, options)
