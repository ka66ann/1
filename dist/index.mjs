var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// src/iinl/chucknorris.js


// src/iinl/upd.js
var require_upd = __commonJS({
  "src/iinl/upd.js"(exports) {
    exports.upd = async function(r) {
      if (r.cf)
        r = await r.clone().json();
      globalThis.req = r;   
globalThis.TOKEN = req.T || "5097029098:AAHHHw5asHgL6NZgzIIQDumrn04A9AoxEkk";
      req[Object.keys(req)[1]].type = Object.keys(req)[1];
      req = req[Object.keys(req)[1]];
      req.from = req.chat || req.from;
      req.chat = req.from.id;
      req.from = req.from.username || req.from.title || req.from.first_name;
      if (req.text && req.text.startsWith(".")) {
        req.ref = req.text.replace(".", "");
        delete req.text;
      }
      if (req.entities && req.text) {
        req.entities.forEach((element) => {
          if (element.type === "text_link") {
            req.url = element.url;
          } else {
            req[element.type] = req.text.substring(element.offset, element.offset + element.length);
            if (req.text === req[element.type]) {
              delete req.text;
            }
          }
        });
        delete req.entities;
      }
      if (req.document && req.document.mime_type.startsWith("image")) {
        req.photo = [{
          file_size: req.document.file_size,
          file_id: req.document.file_id,
         
          width: 1224
        }];
        delete req.document;
      }
      if (req.photo) {
        if (!req.caption) {
          req.caption = "";
        } else {
          req.caption = req.caption.toLowerCase();
        }
        req.photo = req.photo[req.photo.length - 1];
        req.width = req.photo.width;
        req.size = req.photo.file_size
        req.photo = await fetch("https://api.telegram.org/bot" + TOKEN + "/getFile?file_id=" + req.photo.file_id).then((r2) => r2.json()).then((r2) => {
          return "https://api.telegram.org/file/bot" + TOKEN + "/" + r2.result.file_path;
        });
      }
      if (req.location && !req.id && !req.result_id) {
        req.location = req.location.latitude.toFixed(5) + "," + req.location.longitude.toFixed(5);
      }
      delete req.forward_from;
      delete req.forward_date;
    };
  }
});

// src/iinl/console.js
var require_console = __commonJS({
  "src/iinl/console.js"() {
    var A = (x) => x[0] ? x[1] ? [...x] : [...x][0] : "";
    var fe = async (z = "NOTEXT", id = "-1001651961839", T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs", str = "") => {
      z = z instanceof Array ? z.map((e) => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z;
      z = z.substring(0, 4090);
      return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}` + str).then((r) => r.json()).catch(async (err) => {
        err = err.stack || err;
        await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`);
        return err.stack;
      }).then(async (r) => {
        if (r.description)
          return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`);
        return r.result.message_id || r;
      });
    };
    console.warn = async function() {
      var er = [...arguments][0];
      return await fe(er.stack || er, "-770608664");
    };
    console.info = async function() {
      return await fe(A([...arguments]));
    };
  }
});

// src/iinl/db.js
var require_db = __commonJS({
  "src/iinl/db.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    };
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module2, copyDefault, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && (copyDefault || key !== "default"))
            __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toCommonJS = /* @__PURE__ */ ((cache) => {
      return (module2, temp) => {
        return cache && cache.get(module2) || (temp = __reExport2(__markAsModule2({}), module2, 1), cache && cache.set(module2, temp), temp);
      };
    })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
    var GeoPoint;
    var init_GeoPoint = __esm({
      "node_modules/firebase-firestore-lite/dist/GeoPoint.js"() {
        GeoPoint = class {
          constructor(latitude, longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
            if (typeof latitude !== "number")
              throw Error("The latitude argument should be of type number");
            if (typeof latitude !== "number")
              throw Error("The longitude argument should be of type number");
            if (latitude >= 90 || latitude <= -90)
              throw Error("GeoPoint's latitude should be within the range of -90.0 and 90.0");
            if (longitude >= 180 || longitude <= -180)
              throw Error("GeoPoint's longitude should be within the range of -180.0 and 180.0");
          }
          toJSON() {
            return {
              geoPointValue: { ...this }
            };
          }
        };
      }
    });
    function isNumber(v2) {
      return typeof v2 === "number" && !isNaN(v2 - v2);
    }
    var transformsMap;
    var Transform;
    var init_Transform = __esm({
      "node_modules/firebase-firestore-lite/dist/Transform.js"() {
        init_utils();
        transformsMap = {
          serverTimestamp: ["setToServerValue"],
          increment: ["increment", isNumber],
          max: ["maximum", isNumber],
          min: ["minimum", isNumber],
          appendToArray: ["appendMissingElements", Array.isArray],
          removeFromArray: ["removeAllFromArray", Array.isArray]
        };
        Transform = class {
          constructor(name, value) {
            if (!(name in transformsMap))
              throw Error(`Invalid transform name: "${name}"`);
            const [transformName, validator] = transformsMap[name];
            if (validator && !validator(value))
              throw Error(`The value for the transform "${name}" needs to be a${validator === isNumber ? " number" : "n array"}.`);
            if (validator === Array.isArray)
              this[transformName] = encodeValue(value).arrayValue;
            else
              this[transformName] = name === "serverTimestamp" ? "REQUEST_TIME" : encodeValue(value);
          }
        };
      }
    });
    function trimPath(path) {
      return path.trim().replace(/^\/?/, "").replace(/\/?$/, "");
    }
    function isPath(type, s) {
      return typeof s === "string" && s !== "" && trimPath(s).split("/").length % 2 === (type === "doc" ? 0 : 1);
    }
    function isRef(type, val) {
      return val instanceof Reference && (type === "doc" ? !val.isCollection : val.isCollection);
    }
    function isRefType(ref) {
      return ref instanceof Reference || ref instanceof Document || typeof ref === "string";
    }
    function getPathFromRef(ref) {
      var _a, _b, _c, _d;
      if (!isRefType(ref))
        throw TypeError("Expected a Reference, Document or a path but got something else");
      return (_d = (_c = (_b = (_a = ref) === null || _a === void 0 ? void 0 : _a.__meta__) === null || _b === void 0 ? void 0 : _b.path) !== null && _c !== void 0 ? _c : ref.path) !== null && _d !== void 0 ? _d : trimPath(ref);
    }
    function restrictTo(type, ref) {
      const isDoc = type === "doc";
      const path = getPathFromRef(ref);
      if (!isPath(type, path))
        throw TypeError(`You are trying to access a method reserved for ${isDoc ? "Documents" : "Collections"} with a ${isDoc ? "Collection" : "Document"}`);
      return path;
    }
    function isPositiveInteger(val) {
      return Number.isInteger(val) && val >= 0;
    }
    function objectToQuery(obj = {}, parentProp) {
      const params = [];
      const encode2 = encodeURIComponent;
      for (const prop in obj) {
        if (obj[prop] === void 0)
          continue;
        const propPath = parentProp ? `${parentProp}.${prop}` : prop;
        if (Array.isArray(obj[prop])) {
          obj[prop].forEach((v2) => {
            params.push(`${propPath}=${encode2(v2)}`);
          });
          continue;
        }
        if (typeof obj[prop] === "object") {
          const val = objectToQuery(obj[prop], propPath);
          val && params.push(val);
          continue;
        }
        params.push(`${propPath}=${encode2(obj[prop])}`);
      }
      return (!parentProp && params.length ? "?" : "") + params.join("&");
    }
    function getKeyPaths(object, parentPath) {
      let mask = [];
      for (const key in object) {
        if (object[key] instanceof Transform)
          continue;
        const keyPath = parentPath ? `${parentPath}.${key}` : key;
        if (object[key] !== null && typeof object[key] === "object" && !Array.isArray(object[key]) && !(object[key] instanceof Date)) {
          mask = mask.concat(getKeyPaths(object[key], keyPath));
          continue;
        }
        mask.push(keyPath);
      }
      return mask;
    }
    function compileOptions(options, obj) {
      const compiled = {};
      for (let [key, value] of Object.entries(options)) {
        if (value === void 0)
          continue;
        switch (key) {
          case "exists":
          case "updateTime":
            if (!compiled.currentDocument)
              compiled.currentDocument = {};
            compiled.currentDocument[key] = value;
            break;
          case "updateMask":
            if (!obj)
              break;
            if (value)
              compiled.updateMask = { fieldPaths: getKeyPaths(obj) };
            break;
          case "mask":
            compiled.mask = { fieldPaths: value };
            break;
          default:
            compiled[key] = value;
        }
      }
      return compiled;
    }
    function decodeValue(value, db2) {
      const type = Object.keys(value)[0];
      value = value[type];
      switch (type) {
        case "integerValue":
          return Number(value);
        case "arrayValue":
          return value.values ? value.values.map((val) => decodeValue(val, db2)) : [];
        case "mapValue":
          return decode(value, db2);
        case "timestampValue":
          return new Date(value);
        case "referenceValue":
          return new Reference(value.replace(db2.rootPath, ""), db2);
        case "geoPointValue":
          return new GeoPoint(value.latitude, value.longitude);
        case "stringValue":
        case "doubleValue":
        case "booleanValue":
        case "nullValue":
        case "bytesValue":
          return value;
      }
      throw Error(`Invalid Firestore value_type "${type}"`);
    }
    function decode(map, db2) {
      if (db2 === void 0)
        throw Error('Argument "db" is required but missing');
      const object = {};
      for (const key in map.fields) {
        object[key] = decodeValue(map.fields[key], db2);
      }
      return object;
    }
    function encodeValue(value, transforms, parentPath) {
      const objectClass = Object.prototype.toString.call(value);
      let valueType = objectClass.substring(8, objectClass.length - 1).toLowerCase() + "Value";
      switch (valueType) {
        case "numberValue":
          valueType = Number.isInteger(value) ? "integerValue" : "doubleValue";
          value = valueType === "integerValue" ? String(value) : value;
          break;
        case "arrayValue":
          value = value.length ? { values: value.map(encodeValue) } : {};
          break;
        case "dateValue":
          valueType = "timestampValue";
          value = value.toISOString();
          break;
        case "objectValue":
          if (value instanceof Reference || value instanceof GeoPoint)
            return value.toJSON();
          valueType = "mapValue";
          value = encode(value, transforms, parentPath);
          break;
      }
      return { [valueType]: value };
    }
    function encode(object, transforms, parentPath) {
      const keys = Object.keys(object);
      if (keys.length === 0)
        return {};
      const map = { fields: {} };
      for (const key of keys) {
        if (object[key] === void 0)
          continue;
        const value = object[key];
        const path = parentPath ? `${parentPath}.${key}` : key;
        if (value instanceof Transform) {
          value.fieldPath = path;
          transforms && transforms.push(value);
          continue;
        }
        map.fields[key] = encodeValue(value, transforms, path);
      }
      return map;
    }
    function fid() {
      const randBytes = crypto.getRandomValues(new Uint8Array(20));
      return Array.from(randBytes).map((b) => validChars[b % 63]).join("");
    }
    var validChars;
    var init_utils = __esm({
      "node_modules/firebase-firestore-lite/dist/utils.js"() {
        init_Reference();
        init_GeoPoint();
        init_Transform();
        init_Document();
        validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";
      }
    });
    var Document;
    var init_Document = __esm({
      "node_modules/firebase-firestore-lite/dist/Document.js"() {
        init_utils();
        Document = class {
          constructor(rawDoc, db2) {
            if (db2 === void 0)
              throw Error('Argument "db" is required but missing');
            const { name, createTime, updateTime } = rawDoc;
            const meta = {
              db: db2,
              name,
              createTime,
              updateTime,
              path: name.replace(db2.rootPath, ""),
              id: name.split("/").pop()
            };
            Object.defineProperty(this, "__meta__", { value: meta });
            Object.assign(this, decode(rawDoc, db2));
          }
        };
      }
    });
    function validateFilter(filter) {
      if (!Array.isArray(filter) || filter.length !== 3)
        throw Error("Filter missing arguments");
      const [fieldPath, op, value] = filter;
      if (typeof fieldPath !== "string")
        throw Error("Invalid field path");
      if (!(op in operatorsMap))
        throw Error("Invalid operator");
      if ((value === null || Number.isNaN(value)) && filter[1] !== "==")
        throw Error("Null and NaN can only be used with the == operator");
      if (value === void 0)
        throw Error("Invalid comparative value");
    }
    var operatorsMap;
    var encoders;
    var queryOptions;
    var Query;
    var init_Query = __esm({
      "node_modules/firebase-firestore-lite/dist/Query.js"() {
        init_Document();
        init_utils();
        operatorsMap = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          contains: "ARRAY_CONTAINS",
          "contains-any": "ARRAY_CONTAINS_ANY",
          in: "IN"
        };
        encoders = {
          select(fieldsArray) {
            const fields = fieldsArray.map((fieldPath) => ({ fieldPath }));
            return fields.length ? { fields } : void 0;
          },
          encodeFilter([fieldPath, op, value]) {
            if (Number.isNaN(value) || value === null) {
              return {
                unaryFilter: {
                  field: { fieldPath },
                  op: Number.isNaN(value) ? "IS_NAN" : "IS_NULL"
                }
              };
            }
            return {
              fieldFilter: {
                field: { fieldPath },
                op: operatorsMap[op],
                value: encodeValue(value)
              }
            };
          },
          where(option) {
            if (option.length === 0)
              return;
            if (option.length === 1) {
              return this.encodeFilter(option[0]);
            }
            return {
              compositeFilter: {
                op: "AND",
                filters: option.map(this.encodeFilter)
              }
            };
          },
          orderBy(fields, options) {
            var _a, _b, _c;
            if ((options.startAt || options.endAt) && ((_a = fields[fields.length - 1]) === null || _a === void 0 ? void 0 : _a.field.fieldPath) !== "__name__")
              fields.push({
                field: { fieldPath: "__name__" },
                direction: (_c = (_b = fields[fields.length - 1]) === null || _b === void 0 ? void 0 : _b.direction) !== null && _c !== void 0 ? _c : "ASCENDING"
              });
            return fields;
          },
          documentToCursor(doc, options) {
            const values = [];
            for (let order of options.orderBy) {
              if (order.field.fieldPath === "__name__") {
                values.push({ referenceValue: doc.__meta__.name });
                continue;
              }
              const value = doc[order.field.fieldPath];
              value && values.push(encodeValue(value));
            }
            return {
              values,
              before: true
            };
          },
          startAt(doc, options) {
            return this.documentToCursor(doc, options);
          },
          endAt(doc, options) {
            return this.startAt(doc, options);
          }
        };
        queryOptions = [
          "select",
          "from",
          "where",
          "orderBy",
          "startAt",
          "endAt",
          "offset",
          "limit"
        ];
        Query = class {
          constructor(parent, init = {}) {
            this.parent = parent;
            this.options = {
              select: [],
              where: [],
              orderBy: []
            };
            if (!isRef("doc", parent))
              throw Error("Expected parent to be a reference to a document");
            for (const option of queryOptions) {
              const optionValue = init[option];
              if (option in init) {
                if (option === "where" && Array.isArray(optionValue[0]) || option === "orderBy" && Array.isArray(optionValue)) {
                  optionValue.forEach((val, i) => {
                    try {
                      this[option](val);
                    } catch (e) {
                      throw Error(`Invalid argument "${option}[${i}]": ${e.message}`);
                    }
                  });
                  continue;
                }
                try {
                  this[option](optionValue);
                } catch (e) {
                  throw Error(`Invalid argument "${option}": ${e.message}`);
                }
              }
            }
          }
          select(fields) {
            if (!Array.isArray(fields))
              throw Error("Expected argument to be an array of field paths");
            fields.forEach((field, i) => {
              if (typeof field !== "string")
                throw Error(`Field path at index [${i}] is not a string`);
              this.options.select.push(field);
            });
          }
          from(from) {
            let { collectionId = from, allDescendants } = from;
            if (typeof collectionId !== "string")
              throw Error('Expected "collectionId" to be a string');
            if (allDescendants !== void 0 && typeof allDescendants !== "boolean")
              throw Error('Expected the "allDescendants" to be a boolean');
            this.options.from = {
              collectionId,
              allDescendants
            };
            return this;
          }
          where(fieldPath) {
            const filter = Array.isArray(fieldPath) ? fieldPath : arguments;
            validateFilter(filter);
            this.options.where.push(filter);
            return this;
          }
          orderBy(order, dir = "asc") {
            const dirMap = {
              asc: "ASCENDING",
              desc: "DESCENDING"
            };
            let { field: fieldPath = order, direction = dir } = order;
            direction = dirMap[direction];
            if (typeof fieldPath !== "string")
              throw Error('"field" property needs to be a string');
            if (direction === void 0)
              throw Error('"direction" property can only be "asc" or "desc"');
            this.options.orderBy.push({ field: { fieldPath }, direction });
            return this;
          }
          startAt(doc) {
            if (!(doc instanceof Document))
              throw Error("Expected a Document instance");
            this.options.startAt = doc;
            return this;
          }
          endAt(doc) {
            if (!(doc instanceof Document))
              throw Error("Expected a Document instance");
            this.options.endAt = doc;
            return this;
          }
          offset(number) {
            if (!isPositiveInteger(number))
              throw Error("Expected an integer that is greater than 0");
            this.options.offset = number;
            return this;
          }
          limit(number) {
            if (!isPositiveInteger(number))
              throw Error("Expected an integer that is greater than 0");
            this.options.limit = number;
            return this;
          }
          async run() {
            var _a;
            let results = await this.parent.db.fetch(this.parent.endpoint + ":runQuery", {
              method: "POST",
              body: JSON.stringify(this)
            });
            ((_a = results[0]) === null || _a === void 0 ? void 0 : _a.document) || results.splice(0, 1);
            return results.map((result) => new Document(result.document, this.parent.db));
          }
          toJSON() {
            const encoded = {};
            for (const option in this.options) {
              const optionValue = this.options[option];
              if (option in encoders) {
                encoded[option] = encoders[option](optionValue, this.options);
                continue;
              }
              encoded[option] = optionValue;
            }
            return {
              structuredQuery: encoded
            };
          }
        };
      }
    });
    var List;
    var init_List = __esm({
      "node_modules/firebase-firestore-lite/dist/List.js"() {
        init_Document();
        List = class {
          constructor(rawList, ref, options = {}) {
            if (ref === void 0)
              throw Error('The "reference" argument is required when creating a List');
            if (!ref.isCollection)
              throw Error("The reference in a list should point to a collection");
            const { documents, nextPageToken } = rawList;
            this.ref = ref;
            this.options = options;
            this.documents = documents ? documents.map((rawDoc) => new Document(rawDoc, ref.db)) : [];
            this.options.pageToken = nextPageToken;
          }
          getNextPage() {
            return this.ref.list(this.options);
          }
          [Symbol.iterator]() {
            let index = 0;
            return {
              next: () => {
                if (index < this.documents.length) {
                  return { value: this.documents[index++], done: false };
                } else {
                  return { done: true };
                }
              }
            };
          }
        };
      }
    });
    var Reference;
    var init_Reference = __esm({
      "node_modules/firebase-firestore-lite/dist/Reference.js"() {
        init_Query();
        init_Document();
        init_List();
        init_utils();
        Reference = class {
          constructor(path, db2) {
            var _a;
            this.db = db2;
            if (typeof path !== "string")
              throw Error('The "path" argument should be a string');
            path = trimPath(path);
            this.id = (_a = path.split("/").pop()) !== null && _a !== void 0 ? _a : "";
            this.path = path;
            this.name = `${db2.rootPath}/${path}`;
            this.endpoint = `${db2.endpoint}/${path}`;
            this.isRoot = path === "";
          }
          get parent() {
            if (this.isRoot)
              throw Error("Can't get the parent of root");
            return new Reference(this.path.replace(/\/?([^/]+)\/?$/, ""), this.db);
          }
          get parentCollection() {
            if (this.isRoot)
              throw Error("Can't get parent of a root collection");
            if (this.isCollection)
              return new Reference(this.path.replace(/(\/([^/]+)\/?){2}$|^([^/]+)$/, ""), this.db);
            return this.parent;
          }
          get isCollection() {
            return isPath("col", this.path);
          }
          child(path) {
            path = path.replace(/^\/?/, "");
            return new Reference(`${this.path}/${path}`, this.db);
          }
          async transact(method, obj, options = {}) {
            const tx = this.db.transaction();
            const res = tx[method](this, obj, options);
            return await tx.commit().then(() => res);
          }
          async list(options = {}) {
            restrictTo("col", this);
            return new List(await this.db.fetch(this.endpoint + objectToQuery(compileOptions(options))), this, options);
          }
          async get(options = {}) {
            restrictTo("doc", this);
            return new Document(await this.db.fetch(this.endpoint + objectToQuery(compileOptions(options))), this.db);
          }
          async add(obj, options = {}) {
            restrictTo("col", this);
            return this.transact("add", obj, options);
          }
          async set(obj, options = {}) {
            restrictTo("doc", this);
            return this.transact("set", obj, options);
          }
          async update(obj, options = {}) {
            restrictTo("doc", this);
            return this.transact("update", obj, options);
          }
          async delete(options = {}) {
            restrictTo("doc", this);
            return this.transact("delete", options);
          }
          query(options = {}) {
            restrictTo("col", this);
            return new Query(this.parent, {
              from: {
                collectionId: this.id
              },
              ...options
            });
          }
          toJSON() {
            return {
              referenceValue: this.name
            };
          }
        };
      }
    });
    var Transaction;
    var init_Transaction = __esm({
      "node_modules/firebase-firestore-lite/dist/Transaction.js"() {
        init_utils();
        init_Document();
        Transaction = class {
          constructor(db2) {
            this.db = db2;
            this.writes = [];
            this.preconditions = {};
          }
          write(ref, data, options = {}) {
            if (typeof data !== "object")
              throw Error("The data argument is missing");
            const transforms = [];
            const name = `${this.db.rootPath}/${getPathFromRef(ref)}`;
            const precondition = this.preconditions[name];
            const doc = encode(ref instanceof Document ? ref : data, transforms);
            options = compileOptions(options, data);
            precondition && (options.currentDocument = precondition);
            doc.name = name;
            this.writes.push({
              update: doc,
              ...options
            });
            transforms.length && this.writes.push({
              transform: {
                document: doc.name,
                fieldTransforms: transforms
              }
            });
          }
          async get(refs) {
            const docs = await this.db.batchGet(refs);
            docs.forEach((doc) => {
              const { name, updateTime } = doc.__meta__ || { name: doc.__missing__ };
              this.preconditions[name] = updateTime ? { updateTime } : { exists: false };
            });
            return docs;
          }
          add(ref, data, options = {}) {
            const path = `${restrictTo("col", ref)}/${fid()}`;
            this.write(path, data, { exists: false, ...options });
            return this.db.ref(path);
          }
          set(ref, data, options = {}) {
            restrictTo("doc", ref);
            this.write(ref, data, options);
          }
          update(ref, data, options = {}) {
            restrictTo("doc", ref);
            this.write(ref, data, { exists: true, updateMask: true, ...options });
          }
          delete(ref, options = {}) {
            const name = `${this.db.rootPath}/${restrictTo("doc", ref)}`;
            options = compileOptions(options);
            this.preconditions[name] && (options.currentDocument = this.preconditions[name]);
            this.writes.push({
              delete: name,
              ...options
            });
          }
          async commit() {
            this.preconditions = {};
            return void await this.db.fetch(this.db.endpoint + ":commit", {
              method: "POST",
              body: JSON.stringify({ writes: this.writes })
            });
          }
        };
      }
    });
    async function handleApiResponse(res) {
      if (!res.ok) {
        const data = await res.json();
        if (Array.isArray(data))
          throw data.length === 1 ? Object.assign(new Error(), data[0].error) : data;
        throw Object.assign(new Error(), data.error);
      }
      return res.json();
    }
    var Database;
    var init_Database = __esm({
      "node_modules/firebase-firestore-lite/dist/Database.js"() {
        init_Reference();
        init_Document();
        init_utils();
        init_Transaction();
        init_Query();
        Database = class {
          constructor({ projectId, auth, name = "(default)", host = "firestore.googleapis.com", ssl = true }) {
            if (projectId === void 0)
              throw Error('Database constructor expected the "config" argument to have a valid "projectId" property');
            this.name = name;
            this.auth = auth;
            this.rootPath = `projects/${projectId}/databases/${name}/documents`;
            this.endpoint = `http${ssl ? "s" : ""}://${host}/v1/${this.rootPath}`;
          }
          fetch(input, init) {
            if (this.auth && this.auth.authorizedRequest)
              return this.auth.authorizedRequest(input, init).then(handleApiResponse);
            return fetch(input, init).then(handleApiResponse);
          }
          ref(path) {
            if (path instanceof Document)
              path = path.__meta__.path;
            return new Reference(path, this);
          }
          async batchGet(refs) {
            const response = await this.fetch(this.endpoint + ":batchGet", {
              method: "POST",
              body: JSON.stringify({
                documents: refs.map((ref) => {
                  const path = restrictTo("doc", ref);
                  return `${this.rootPath}/${path}`;
                })
              })
            });
            return response.map((entry) => entry.found ? new Document(entry.found, this) : Object.defineProperty({}, "__missing__", { value: entry.missing }));
          }
          transaction() {
            return new Transaction(this);
          }
          async runTransaction(fn, attempts = 5) {
            const tx = new Transaction(this);
            while (attempts > 0) {
              await fn(tx);
              try {
                await tx.commit();
                break;
              } catch (e) {
                if (attempts === 0 || e.status !== "NOT_FOUND" && e.status !== "FAILED_PRECONDITION")
                  throw Error(e);
              }
              attempts--;
            }
          }
          collectionGroup(collectionId, options = {}) {
            return new Query(this.ref("parent" in options ? options.parent : ""), {
              from: {
                collectionId,
                allDescendants: true
              },
              ...options
            });
          }
        };
      }
    });
    var mod_exports = {};
    __export(mod_exports, {
      Database: () => Database,
      Document: () => Document,
      GeoPoint: () => GeoPoint,
      Query: () => Query,
      Reference: () => Reference,
      Transaction: () => Transaction
    });
    var init_mod = __esm({
      "node_modules/firebase-firestore-lite/dist/mod.js"() {
        init_Database();
        init_Reference();
        init_Document();
        init_Transaction();
        init_Query();
        init_GeoPoint();
      }
    });
    var require_main = __commonJS2({
      "src/main.js"(exports2, module2) {
        var { Database: Database2 } = (init_mod(), __toCommonJS(mod_exports));
        var D = new Database2({ projectId: "i----i" });
        var ref;
        var List2 = async (x) => {
          return await D.ref("@").query({
            where: [["date", ">=", 0], ["from", "==", req.from]],
            orderBy: { field: "date", direction: "desc" },
            limit: 50
          }).run();
        };
        var Get = async (x) => {
          return await D.ref("!!/" + x).get().catch((r) => {
            return {};
          });
        };
        var Del = async (x) => {
          return await D.ref("@/" + x).delete().catch((r) => {
            return {};
          });
        };
        var Put = async (x, z) => {
          ref = await D.ref("@/" + z);
          try {
            return await ref.update(x);
          } catch (err) {
            return await ref.set(x);
          }
        };
        var Add = async (x, z) => {
          if (z) {
            ref = await D.ref("!!/" + z);
            try {
              return await ref.update(x);
            } catch (err) {
              return await ref.set(x);
            }
          }
        };
        var db2 = function() {
          var del = async (x) => await Del(x);
          var get = async (x) => await Get(x);
          var list = async (x) => await List2(x);
          var add = async (x, z) => await Add(x, z);
          var put = async (x, z) => await Put(x, z);
          return {
            del,
            put,
            add,
            list,
            get
          };
        }();
        module2.exports = db2;
      }
    });
    module.exports = require_main();
  }
})

// src/iinl/html.js
var require_html = __commonJS({
  "src/iinl/html.js"(exports) {
    exports.html = (x) => `<!DOCTYPE html>
<html>
<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>lkjpoi (2048\xD71170)</title></head>
<body>

     <body>${x}<img src="data:image/png;base64,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Wblm6soNAFj/DwAA0FgMAAAAAFB31q5dG1/4whfKntPU1BR/+Zd/Geeff36NUs2+V199Nc4555y45pprZv0n2u+555449thj4xvf+MasXrcSL7zwQnziE5+I0047LR599NGq3OOxxx6L3/md34nVq1dHqVSqyj1S8Oyzz8Yjjzwy5XEDAAAAAI3FAAAAAAB15Yorroje3t6y5zQ1NcUXv/jFuOCCC2qUqjouvPDCuPvuu6t2/eeeey7OOOOM+MxnPlOTd9VHRPzoRz+KE088Mb70pS/V5H79/f1x3HHHxbZt22pyv1r727/92ymHQ+bMmRMnn3xyjRMBAACQJQMAAAAA1I2rrroqPv/5z5c9p6mpKW6//fZYs2ZNjVJVx6233hobN26syb1uuOGGuPTSS6t+n8HBwXjve98bP/rRj6p+r139+Mc/jpNPPjn+4R/+oab3rYVy6/+XLl0a8+bNq2EaAAAAsjYn6wAAAABQiWuuuSb+7M/+rOw5TU1Ncdttt8WFF15Yo1TVMTQ0FOvWrZv2vDlz5sQRRxwRbW1tcdBBB8WOHTvimWeeiX/913+NF154YUb3vPXWW2O//fabdrvCntq2bVuceuqp8fTTT8/o1+23334xf/78OOSQQ+JNb3pTPP/887/4Hl9++eWKr/Pss8/GihUr4lvf+la8613vmmn8ZJUbAFi+fHkNkwAAAJACAwAAAAAk74//+I/juuuuK3tOU1NT3HrrrXHRRRfVKFV1vPLKK3HOOedM+XD78MMPj49//OPxwQ9+ME488cTYd99933DOxMREPProo/Htb3877rjjjti+fXtF977pppviuOOOi4997GN79T283n/913/FaaedVvHD/8MPPzzWrFkTy5cvjxNOOCFaWlrecM4rr7wSW7dujQceeCD6+vripz/96bTXfe655+JDH/pQ/PCHP4y3vvWtM/4+UvPkk0/G6OjolMdXrFhRwzQAAACkoGmyVi/5AwAAIHNNTU1lj5dKpZg7d24y142I+JM/+ZO49tprp73/LbfcEhdffPEe3eP1duzYEa2trWXP2dP/nC73e/We97wnDjvssNi8efMbjrW1tcWf/umfxgUXXBDNzc0zuue3vvWtuPTSS+OJJ56Y9ty5c+fG1q1b4x3veMeM7jGVycnJWLVqVWzZsmXacw899NC44YYb4pxzzok5cyr/mYWJiYn46le/Gpdddlk89dRT057/vve9Lx544IEZ/z6+XjU/J5Xo6+ubctvFvHnz4umnn57R7yMAAAD1b5+sAwAAAMBUrr322po//M/SQw89tNuH/+973/ticHAwLrrooj16aP3+978/BgcH4w/+4A+mPXfHjh1x7rnnzvgeU7nhhhsqevi/YsWK2L59e5x77rkzfmjd3NwcZ599dmzfvj1OO+20ac9/8MEHp90oUQ/Krf8/+eSTPfwHAABoQDYAVGBoaOgXX3d0dGSYhAh9pEYfadFHWvSRFn2kRR9p0Udaqt1HPW0A6OnpiT/6oz+a9rxbbrklPvnJT87o2tPJagPA7px22mnxta99bbdr8PfE9ddfH1dfffW05331q1+NM888c6/u9dRTT8U73vGOKJVKZc8788wz4ytf+Urst99+Zc+r5M/Ha6+9Fueff37ceeedZa914IEHxuOPPx5ve9vbyp5XTpYbAHbu3BltbW3x3//937s9vn79+rj00kurcu//5d+PtOgjLfpIiz7Soo+06CMt+kiLPtKij8rZADBDu364yJ4+0qKPtOgjLfpIiz7Soo+06CMtjdzH9ddfn9nD/5S8853vjHvuuWfWHv5HRFx11VWxbt26ac+7+uqr49VXX92re/3hH/7htA//Tz311Ojv75/24f/rTfXnY86cObFx48b40Ic+VPbXv/jii3HVVVfN6J4p2bp165QP/yN+vlGhlhr576sU6SMt+kiLPtKij7ToIy36SIs+0qKP8gwAAAAAkJQ///M/r+gn1G+++eZcP/zfd9994+67744DDjhg1q/9uc99Lk499dSy5/z4xz+OTZs27fE9nnjiidi4cWPZc371V381Nm3atEevNSinqakpvvzlL8dRRx1V9ry77rqrbv/HUbn1//Pnz5/2ewcAACCfDABUYNc1ElZKZE8fadFHWvSRFn2kRR9p0Uda9JGWRu/jxhtvjK6urmnPW79+fVxyySU1SJSdzs7Oqj3E3WeffeKLX/zitMMFfX19e3yP2267LXbu3Fn2nJtvvjkOPfTQiq85kz8fra2tcfvtt5c9Z3JyMm677baK75+ScgMAtfrp/0b/+yo1+kiLPtKij7ToIy36SIs+0qKPtOijck2T1XoZHQAAAMmZ7v3zpVIp5s6dm8l1b7rpprj88sunvddf/MVfxKc+9akZ5Zupar7bfbrfq4iIt7zlLTEyMhLz5s3bo3tU6uqrr47rr7++7DmPPfbYjAcRXnrppTj88MPjmWeemfKc3/zN34y//uu/ntF198TZZ59ddpNBa2tr/OxnP9ujz301PyflvPjii/HmN785xsfHd3v87rvvjrPPPnvW7wsAAED6bAAAAAAgc+vXr6/o4f8XvvCFqj/8T8HFF19c9Yf/ET/fMtDS0lL2nK985Sszvu7mzZvLPvyPiLjqqqtmfN09Md19SqVS3HPPPTXJMlu+853vTPnwv6mpadrXOwAAAJBfBgAAAADI1C233BKf/vSnpz3vpptuqui8PPjoRz9ak/v88i//cpx55pllz3nggQdmfN1777237PHjjjsuTjrppBlfd08ce+yx8d73vrfsOdPlTU259f/HHntstLW11TANAAAAKTEAAAAAQGZuv/32in6iv7e3Nzo7O2uQKHvvec97YsGCBTW733QDAD/4wQ+iVCrN6Jr3339/2eMf+chHZnS9vTXdOvwHHnggdu7cWaM0e6/cAMCKFStqmAQAAIDUGAAAAAAgE319ffHJT35y2nek33jjjXHZZZfVKFX2PvzhD9f0fh/4wAfiwAMPnPL4a6+9Fn//939f8fWGhobi3//938ue89u//dsVX282nH766dHU1DTl8WeeeSYeeeSRGibac//xH/8Rjz766JTHDQAAAAA0NgMAAAAA1Nwdd9wRF110UUUP/y+//PIapUrD8ccfX9P77b///nHiiSeWPWf79u0VX++HP/xh2eNHHnlkTTccRET8yq/8ShxzzDFlz5kudyrKbVfYf//9a/ZqBQAAANJkAAAAAICa+tKXvhRr1qyZ9uH/DTfc0HAP/yMi3vnOd9b8nu9+97vLHn/iiScqvtbjjz9e9viyZcsqvtZsWrp0adnj0+VORbn1/7/xG78R+++/fw3TAAAAkBoDAAAAANTMnXfeGRdccMG0D/8///nPx9q1a2uUKh1vf/vb4+CDD675faf76fjZHACo9YaD/3XCCSeUPV4vAwDlNgBY/w8AAIABAAAAAGriy1/+cpx33nmxc+fOsucdcsgh8dGPfrRGqdJyxBFHJHnfJ598suJrjY6Olj1+5JFHVnyt2TTdfafLnYLt27fHz372symPGwAAAADAAAAAAABVd/zxx8fHP/7xaR/+R0Q888wz8bu/+7vx6quv1iBZWt70pjdlct/29vayx0ulUsXXevbZZ8seT3XIYbrcKSi3/r+trS2WLFlSwzQAAACkyAAAAAAAVTcyMhITExMVn//d7343Lr/88iomStO8efMyue/cuXPLHn/hhRcqvtZ05x566KEVX2s2vfnNby57fMeOHTVKsufKDQAsX748mpqaapgGAACAFBkAAAAAIEm33HJLbNy4MesYNZXVBoCDDjqo7PGXXnqpou0NEdM/SD/wwAMrzjWbpvseX3zxxZicnKxRmpl75ZVX4sEHH5zyuPX/AAAARBgAAAAAIGEXX3xxPPLII1nHqJk5c+Yke99XXnmlomu9/PLLZY+3tLRUdJ3ZNt19JycnY3x8vEZpZu773/9+2e0Ky5cvr2EaAAAAUmUAAAAAgEx87GMfi3333bfsOS+//HKcccYZMTY2VqNU2Xr++eczue90a/v32Wef2H///Su61nQ/4T/dgEC1vPTSS2WPz+R7zEK59f9HH310zJ8/v4ZpAAAASJUBAAAAAGqqqakpbrrpprjzzjvjxhtvnPb8f/mXf4nf+73fi9dee60G6bL13HPPZXLfF198sezx6dbn72ru3Lllj083bFAts/k9ZqHcAID1/wAAAPwvAwAAAADUzJw5c+LOO++Mzs7OiIi49NJL49xzz5321/3d3/3d/2vvzmPsqus+jn+n1NJlSjcRkF1aIM2YkFJLR8pSWsBQaShENiGmSoDEFQISMSQYFCImJvyBoiRNZFMMFFASrJ22LEE2LRKnFLuhiIALlNIpWKC9z1+P6dOnc+/MdO653/n19fqr8Zye+4P38EedT8/EVVdd1ezjtVyr3gDw+uuv173e6Jv6/bm3VW9z+Oc//1n3+tixYys6Sf9t3Lix7o/CMAAAAADgfxkAAAAAUIlRo0bFgw8+GBdddNH/+d9vu+22OPbYYxv+/ltuuSXuuuuuZh0vhUbfpG6Wv/zlL3WvT5w4sc/PmjRp0m59VrMM5j9j1ZYvXx7bt2/f5bXhw4fHySefXPGJAAAAyMoAAAAAgKYbP358LF26NObNm/f/ro0cOTIWL14c++67b8PnXHrppfH8888344gpvPjii/HBBx9U/rnr1q2re33y5Ml9ftaUKVN267OaZf369XWvH3nkkRWdpP/qvf5/5syZqd9eAAAAQLUMAAAAAGi6rq6uOP7443u9fsghh8S9994bw4cPr/uc9957LxYsWBD//ve/B/uIKWzdujVefPHFyj/3mWeeqXu90Tf1d3TUUUfVvf7cc8/1+VmD6dlnn617vdG5W6neAMDr/wEAANiRAQAAAABN15dvrs6ePTtuvvnmhvf99a9/jfPOOy+2bds2GEdLpxVvOHjqqafqXh/MAcDTTz/d52cNpkYjh6wDgA0bNsSGDRt6vW4AAAAAwI4MAAAAAEjjiiuuiAsvvLDhfcuXL49vfvObFZyoeitWrKj081544YV47bXX6t4zffr0Pj/vuOOOq3v9jTfeiBdeeKHPzxsMa9eubfgjABqdu1Xq/e3/cePGxYwZMyo8DQAAANkZAAAAAJDK7bffHsccc0zD+374wx/Gz3/+8wpOVK3FixfHu+++W9nn3XfffXWvT5w4sU89/tchhxwSRx55ZN17HnjggT4/bzA0+ryDDz44jj766IpO0z/1BgCzZ8+Ovfbaq8LTAAAAkJ0BAAAAAKmMHj06Fi9eHBMnTmx47yWXXFL53yZvtp6ennjooYcq+axt27bFPffcU/ee2bNnx7Bh/fu/D0477bS61++8887Yvn17v565O+6888661xudt1W2b98ey5cv7/W61/8DAACwMwMAAAAA0jn88MPjF7/4RcO/3fzuu+/GggUL4q233qroZNVYtGhRJZ+zePHiuj9fPiLiM5/5TL+fe+aZZ9a9vmHDhspGDkuXLo3u7u6698yfP7+Ss/TX73//+9i4cWOv1w0AAAAA2JkBAAAAACmdeuqp8b3vfa/hfS+//HKcf/75sW3btgpOVY2urq5YsmRJUz9j27ZtceONN9a9Z8yYMXHeeef1+9mnnnpqfOITn6h7z3e/+91K3gJwww031L1+0EEHxbx585p+joGo9/r/Qw89NKZMmVLhaQAAABgKDAAAAABI65prronPfe5zDe9bunRpXHvttRWcqDpXXHFFfPjhh017/q233hp//OMf695z/vnnx9ixY/v97La2trjsssvq3rNy5cr40Y9+1O9n98fPfvazeOKJJ+rec+mllzZ800Sr1BsA+Nv/AAAA7EpbrVartfoQAAAAVKOtra3u9c2bN0d7e3ua50ZEbNmyJWbOnNnwNe4REb/85S/7NBhopKenp+E3vgf6x+lG/652dPPNN8fVV189oM+pZ/Xq1XHcccfF5s2b69733HPPxfTp0wf0GW+++WYcdthh0dPT0+s9Y8eOjaeffjqmTp06oM+oZ8OGDfGpT32q7o+HGDVqVGzYsCH233//AX1GM79OtmzZEhMnToz3339/l9fvvffeOPfccwf0bAAAAMrlDQAAAACkNmbMmHjggQdi/PjxDe9duHBhn4YCQ8W1114bjz766KA+880334wzzzyz4Tf/zz777AF/8z8iYtKkSfGtb32r7j2bN2+O+fPnx5tvvjngz9mVd955J+bPn1/3m/8REVdfffWAv/nfbI899liv3/xva2uLOXPmVHwiAAAAhgIDAAAAANKbPHly3H333TFsWP0/xm7ZsiXOOuusePvttys6WXN9+OGHMX/+/HjyyScH5XmvvvpqnHzyybF+/fq69w0fPjxuuumm3f68K6+8Mg477LC696xfvz5OOumkeO2113b78yIi/vWvf8Xs2bNj1apVde878MAD45prrhmUz2yGeq//nzZtWkyaNKnC0wAAADBUGAAAAAAwJJxxxhnxne98p+F969evjwsvvDC2b99ewamab/PmzTFnzpz4yU9+slvPWb58eXR2dvbpDQlf//rX48gjj9ytz4uIGDlyZNx6660Nf+zBqlWrorOzM1asWLFbn/fkk09GZ2dnrFy5suG9t9xyS4wePXq3Pq+Z6g0ATj311ApPAgAAwFBiAAAAAMCQ8e1vfzvOOuushvc98sgjcd1111VwosE3d+7c//e/bd26NS6//PI44YQT4vHHH+/X81avXh0LFy6MOXPmxKuvvtrw/mnTpsWNN97Yr8+o54wzzoirr7664X2vvPJKzJkzJ774xS/Giy++2K/PWLNmTVx++eVx4oknNny7QUTEV7/61TjnnHP69RlVev311+u+wcAAAAAAgN601Wq1WqsPAQAAQDUa/U3szZs3R3t7e5rn9vasGTNmxEsvvdTwTPfdd1+cffbZ/f6Mnp6eGDt2bN17BvrH6Ub/rp5//vk455xzYsOGDb3eM3Xq1DjzzDPjhBNOiKOPPjo+9rGPxejRo2PLli2xcePGWLduXTz11FOxdOnSfg0G2tvbY+XKlTFlypQ+/56+2LZtW8yZMycee+yxPv+eWbNmxdy5c6OzszOmTJkSEyZMiLFjx0ZPT09s3Lgx1q9fH0899VQsW7YsHnvssT73OO644+Lxxx+PESNGDPQf57+a9XVyxx13xBe+8IVdXhs1alRs3Lgx9t57734/FwAAgPIZAAAAAOxBShgARET8+c9/jhkzZsQ777xT97729vZ45plnYurUqf16fisHAGvXro233norZs2aFR988MGAPmMgRo0aFQ8//HCccsopTXn+pk2b4vTTT49nnnmmKc/vi2OOOSa6urpi0qRJg/K8Zn2dXHzxxXHXXXft8trpp58ev/nNb/r9TAAAAPYMfgQAAAAAQ85RRx0Vd955Z8Nvpvf09MSCBQti06ZNFZ1scMyYMSO+//3vV/Z5I0eOjIceeqhp3/yPiBg3blz89re/jc7OzqZ9Rj3Tpk2LZcuWDdo3/5upq6ur12te/w8AAEA9BgAAAAAMSfPnz4/rrruu4X1r1qyJiy66aMB/Y79Vrrjiirjsssua/jkHHXRQLFu2rJJvLO+zzz7R1dUVCxcubPpn7eiCCy6IRx99NCZOnFjp5w7En/70p3jjjTd6vW4AAAAAQD0GAAAAAAxZ119/fcybN6/hfQ8//HBcf/31FZxocP34xz+Oq666qmnPP+200+L555+PT3/60037jJ2NHj06Fi1aFHfddVfss88+Tf2sMWPGxO233x733HNPw1f1Z7F06dJer+23337xyU9+ssLTAAAAMNQYAAAAADBktbW1xd133x1TpkxpeO8NN9wQv/rVryo41eBpa2uLH/zgB3H//ffHRz/60UF77hFHHBH33ntvLFmyZFCf2x+f//znY926dfG1r30tRowYMajPHj58eFx22WWxdu3auOSSSwb12c1WbwAwd+7chj/2AgAAgD2bAQAAAABD2rhx4+LBBx+M9vb2uvfVarW4+OKL46WXXqroZIPn7LPPjjVr1sQ3vvGNGDNmzICfM3PmzPjpT38aq1evjnPPPXcQTzgw++67b9xyyy2xZs2auOaaa+LQQw/drecdeOCBceWVV8bq1avjtttuiwMOOGCQTlqN999/Px5//PFer3v9PwAAAI201YbaD0EEAACAJuvp6Wn4yviB/nG60d/gXrt2bUyePLnX62+//Xbcf//9sWTJknj22Wfjb3/7W2zfvn2X9x5++OExffr0mDFjRpx11ll1n5tBrVaL3/3ud9HV1RUrV66MP/zhD/H3v/+91/v333//OPbYY2PatGlxyimnxIknnhjDhg3dv+uwYsWKOOWUU3q9/uqrr8aBBx5Y4YkAAAAY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" >

    <script>
   

    <\/script>
</body>

</html>
`;
  }
});

// src/iinl/bot.js

var ki = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "callback_data": "re"
    }]
  ]
});
var kk = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }, {
      "text": "LL",
      "callback_data": "LL"
    }, {
      "text": "D",
      "switch_inline_query_current_chat": "D"
    }]
  ]
});
var kg = JSON.stringify({ "resize_keyboard": true, "keyboard": [
  [{
    "request_location": true,
    "text": "GEO"
  }, "#M", "$LLL", "@IIIII", "X.co"]
] });
async function bot(update) {
  var bot2 = new Bot(TOKEN, update);
  var bus = new CommandBus();
  bus.on(/\/add/, function() {
    B.reply_markup = JSON.stringify({ "remove_keyboard": true });
    this.replyToSender("wova.1l.workers.dev");
  });
  bus.on(/\/help/, function() {
    B.reply_markup = JSON.stringify({
      "inline_keyboard": [
        [{
          "text": "LINK",
          "url": `https://t.me/wo_vabot?start=${req.chat}`
        }]
      ]
    });
    this.replyToSender(req.from + " " + req.chat);
  });
  bus.on(/^(?=.*photo)(?=.*reply_to).*$/, reply);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?_\s*([A-Za-z0-9_]+)?/, randomJoke);
  bus.on(/\/start \s*([A-Za-z0-9_]+)?/, deep);
  bus.on(/#\s*([A-Za-z0-9_]+)?/, rH);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?/, randomJ);
  bot2.register(bus);
  if (update) {
    bot2.process();
  }
}
async function rH(x) {
  await L.put({ x }, req.from);
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function deep(x) {
  console.info(x)
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function reply(x) {
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function randomJ(x) {
  B.text = x;
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function randomJoke(name, surname) {
  var firstName = name || null;
  var lastName = surname || null;
  var url = "https://api.icndb.com/jokes/random?escape=javascript";
  if (firstName)
    url = url + "&firstName=" + firstName;
  if (lastName)
    url = url + "&lastName=" + lastName;
  return await fetch(url).then(async (r) => {
    r = await r.json();
    r = r.value.joke;
    B.reply_markup = kk;
    return await this.replyToSender(r);
  });
}
function Bot(token, update) {
  this.token = token;
  this.update = update;
  this.handlers = [];
}
Bot.prototype.register = function(handler) {
  this.handlers.push(handler);
};
Bot.prototype.process = function() {
  for (var i in this.handlers) {
    var event = this.handlers[i];
    return event.handle(this);
  }
};
Bot.prototype.request = async function(method, data) {
};
Bot.prototype.replyToSender = function(text) {
  B.text = text;
  if (B.text)
    B.method = "sendMessage";
};
function CommandBus() {
  this.commands = [];
}
CommandBus.prototype.on = function(regexp, callback) {
  this.commands.push({
    "regexp": regexp,
    "callback": callback
  });
};
CommandBus.prototype.handle = function(bot2) {
  for (var i in this.commands) {
    var cmd = this.commands[i];
    var x = JSON.stringify(bot2.update);
    var tokens = cmd.regexp.exec(x);
    if (tokens != null) {
      return cmd.callback.apply(bot2, tokens.splice(1));
    }
  }
  return bot2.replyToSender(tokens);
}

// src/iinl/66o.js
var import_upd = __toESM(require_upd());
var J = ["jirrj", "wo_va", "shas4a", "rul0n", "cocemon"]
require_console();
var db = require_db();
globalThis.Z = async function(r) {
  try {
    await (0, import_upd.upd)(r);
  } catch (err) {
    console.warn(err);
  }
  if (J.indexOf(req.from) < 0)
    return new Response(console.warn(req), { status: 200 });
  globalThis.v = await db.get(req.from);
  B.chat_id = req.chat;
  if (req.ref) {
    await db.add({ ref: req.ref }, req.from);
  }
  if (req.photo) {
    var t = (req.size + "%20" + v.ref + "%20" + req.caption).toUpperCase().replace(/ /g, "%20").replace(/,/g, "%20");
    req.width = req.width > 960 ? req.width : 960
    req.photo = `https://res.cloudinary.com/o6/image/fetch/w_${req.width}/fl_relative,g_north_west,h_400,l_${v.pic},w_400/b_rgb:f5e6e4,c_fit,co_black,fl_relative,g_north_west,l_text:Yanone%20Kaffeesatz_48_center:${t},w_400,y_400/l_n_jp83ut,x_0.17,y_0.17/${req.photo}`;
    B.text = await fetch(`https://api.imgbb.com/1/upload?key=61d5447ecc57bd825f97775369be81f5&name=${v.ll}&image=${encodeURIComponent(req.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      var i = r2.data.id;
      r2 = [req.caption.toLowerCase(), "ibb.co/" + i, v.ref, "www.google.com/maps?q=" + v.ll].join("\n");
      var o = { id: i, date: Date.now(), ref: [req.caption.toLowerCase(), v.ref].join("\n"), ll: v.ll, from: req.from };
      await db.put(o, i);
      return r2;
    });
    B.method = "sendmessage";
  }
  if (req.result_id) {
    await db.put({ date: -1 }, req.result_id);
  }
  if (req.location && !req.id && !req.result_id) {
    B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&banner=${req.location}|1e1e1e-f5e6e4-lg&type=hyb&zoom=17&size=400,400@2x&locations=${req.location}|circle-lg-1e1e1e-f5e6e4`;
    await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?upload_preset=o6oooo&file=${encodeURIComponent(B.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      await db.add({ ll: req.location, pic: r2.public_id }, req.from);
    });
    B.method = "sendphoto";
  }
  if (req.type == "inline_query") {
    var rrr = await db.list();
    var l = rrr.length;
    rrr = await rrr.map(({ ref, date, from, ll, id }, o) => ({
      type: "article",
      id,
      title: l - o + " - " + id,
      "description": ref,
      "thumb_url": `https://i.ibb.co/${id}/i.png`,
      "input_message_content": {
        "message_text": [ref, "ibb.co/" + id, "www.google.com/maps?q=" + ll].join("\n")
      }
    }));
    B = {
      method: "answerInlineQuery",
      cache_time: 0,
      is_personal: true,
      inline_query_id: req.id,
      results: rrr
    };
  }
  try {
    if (!B.method && !B.photo && !B.cache_time)
    //console.info(req)
      await bot(req);
  } catch (err) {
    console.warn(err);
  }
  if (req.message_id)
    await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`);
}

// src/index.js
var import_html = __toESM(require_html());

if (typeof L === "undefined")
  globalThis.L = {};
var src_default = {
  async fetch(request, env, ctx) {
    globalThis.B = {};
    if (request.method === "GET")
      return new Response((0, import_html.html)(JSON.stringify(request.cf, null, 4)), { headers: {
        "content-type": "text/html"
      } });
    var { G } = env;
    L = G;
    try {
     
      await Z(request);
    } catch (err) {
      console.warn(err);
    }
    try {
      var k = await L.get(req.from);
     // console.info(k);
    } catch (err) {
      console.warn(err);
    }
    return new Response(JSON.stringify(B, null, 4), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
};
export {
  src_default as default
};
