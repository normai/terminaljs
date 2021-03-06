/*!
 *  file : 20210429°1531
 *  version : Initial
 *  status : First attempt. To be cleaned up and given wise, not wild, entries.
 *  see : The comment tags are described on [ref 20210416°1641]
 *      https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
 */

/**
 *  @fileoverview Public API of PurpleTerms
 *  @externs
 */

/**
 *  This class provides a div with terminal functionalities
 *
 * @id 20190208°1923'02
 * @type {Object}
 */
var Terminal;

/**
 *  ..
 *
 * @id 20170501°0521'02
 * @type {Function} —
 * @_return {undefined} —
 */
Terminal.beep();

/**
 *  ..
 *
 * @id 20170501°0531'02
 * @type {Function} —
 * @param {boolean} —
 * @_return {undefined} —
 */
Terminal.blinkingCursor();

/**
 *  ..
 *
 * @id 20170501°0541'02
 * @type {Function} —
 * @_return {undefined} —
 */
Terminal.clear();

/**
 *  Clear the history
 *
 * @id  20210503°0931'02
 * @type {Function} —
 * @_return {undefined} —
 */
Terminal.clearHistory();

/*
   issue 20210430°1531 'JSC_TYPE_PARSE_ERROR'
   matter : When adding param annotation to a type declaration like this
      | /**
      |  * @type {Function} —
      |  * @param {Function} callback —
      |  * /
      the GoCloCom emits 'WARNING - [JSC_TYPE_PARSE_ERROR] Bad type annotation'
   see : https://github.com/google/closure-compiler/issues/3767 [ref 20210430°1532] not so helpful
   workaround : Keep the offending parts outcommented
   priority : Low
   location : File 20210429°1531 extern.js
   status : Open
*/

/**
 *  ..
 *
 * @id 20170501°0551'02
 * @type {Function} —
 * @note Remember issue 20210430°1531 'JSC_TYPE_PARSE_ERROR'
 * @param {string} // [message] —
 * @param {Function} // [callback] —
 * @_return {undefined} —
 */
Terminal.confirm();

/**
 *  Switch on XHR mode and provide backend address
 *
 * @id 20210502°1211'02
 * @param {string} url —
 * @return {undefined} —
 */
Terminal.connect();

/**
 *  Get ID of instance
 *
 * @id 20210509°1631'02
 * @_t_y_p_e {Function} —
 * @return {string} —
 */
Terminal.getId();

/**
 *  Returns the version string of the program
 *
 * @id 20210513°0913'02
 * @return {string} —
 */
Terminal.getVersion;

/**
 *  ..
 *
 * @id 20170501°0411'02
 * @type {Node} —
 */
Terminal.html;

/**
 *  ..
 *
 * @id 20170501°0611'02
 * @type {Function} —
 * @param {string} // message —
 * @param {Function} // callback —
 * @_return {undefined} —
 */
Terminal.input();

/**
 *  ..
 *
 * @id 20170501°0621'02
 * @type {Function} —
 * @param {string} // message —
 * @param {Function} // callback —
 * @_return {undefined} —
 */
Terminal.password();

/**
 *  ..
 *
 * @id 20170501°0631'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.print();

/**
 *  ..
 *
 * @id 20170501°0641'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setBackgroundColor();


// GoCloCom warning "Property setDebugBorders never defined on global this" [quest 20210508°0951]
/**
 *  Set debug borders flag
 *
 * @id 20210508°0911`02
 * @param {boolean} bStatus —
 * @return {undefined} —
 */
//this.setDebugBorders();

/**
 *  ..
 *
 * @id 20170501°0651'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setHeight();

/**
 *  Lets the user set an input prompt, e.g. '$ '.
 *
 * @id 20210504°1011'02
 * @param {string} — The wanted input prompt
 * @type {Function} —
 */
Terminal.setInputPrompt();

/**
 *  Lets the user set an output prompt, e.g. '=> ' -- Not yet used
 *
 * @id 20210504°1021'02
 * @param {string} — The wanted output prompt
 * @type {Function} —
 */
Terminal.setOutputPrompt();

/**
 *  ..
 *
 * @id 20170501°0711'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setTextColor();

/**
 *  ..
 *
 * @id 20170501°0721'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setTextSize();

/**
 *  Set beep volume. Takes a value in the range from 0.0 to 1.0
 *
 * @id 20210513°1621'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setVolume();

/**
 *  ..
 *
 * @id 20170501°0731'02
 * @param {string} —
 * @type {Function} —
 */
Terminal.setWidth();

/**
 *  ..
 *
 * @id 20170501°0741'02
 * @type {Function} —
 */
Terminal.sleep();

/* eof */
