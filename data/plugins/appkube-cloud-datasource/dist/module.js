define(["@emotion/css","@grafana/data","@grafana/runtime","@grafana/ui","react","rxjs"], (__WEBPACK_EXTERNAL_MODULE__emotion_css__, __WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_rxjs__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./common-ds/index.ts":
/*!****************************!*\
  !*** ./common-ds/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "METRIC_EDITOR_MODES": () => (/* binding */ METRIC_EDITOR_MODES),
/* harmony export */   "MetricEditorMode": () => (/* binding */ MetricEditorMode),
/* harmony export */   "RESPONSE_TYPE": () => (/* binding */ RESPONSE_TYPE),
/* harmony export */   "findParam": () => (/* binding */ findParam),
/* harmony export */   "getCloudElementsQuery": () => (/* binding */ getCloudElementsQuery)
/* harmony export */ });
let MetricEditorMode;
(function (MetricEditorMode) {
  MetricEditorMode[MetricEditorMode["Builder"] = 0] = "Builder";
  MetricEditorMode[MetricEditorMode["Code"] = 1] = "Code";
})(MetricEditorMode || (MetricEditorMode = {}));
const RESPONSE_TYPE = [{
  label: 'JSON',
  value: "JSON"
}, {
  label: 'Frame',
  value: "Frame"
}];
const METRIC_EDITOR_MODES = [{
  label: 'Builder',
  value: MetricEditorMode.Builder
}, {
  label: 'Code',
  value: MetricEditorMode.Code
}];
const getCloudElementsQuery = function (id, cloudElement, awsxUrl) {
  return {
    "cloudIdentifierName": cloudElement.instanceName,
    "type": "appkube-api",
    "queryMode": "Metrics",
    "matchExact": true,
    "expression": "",
    "id": "",
    "alias": "",
    "period": "",
    "zone": "",
    "externalId": "",
    "crossAccountRoleArn": "",
    "elementType": cloudElement.elementType,
    "elementId": parseInt(id, 10),
    "cloudIdentifierId": cloudElement.instanceId,
    "awsxUrl": awsxUrl,
    "logGroupName": cloudElement.logGroup
  };
};
const findParam = (paramName, url) => {
  if (!url) {
    url = location.href;
  }
  paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  const regexS = "[\\?&]" + paramName + "=([^&#]*)";
  const regex = new RegExp(regexS);
  const results = regex.exec(url);
  return results == null ? "" : results[1];
};

/***/ }),

/***/ "./components/ConfigEditor.tsx":
/*!*************************************!*\
  !*** ./components/ConfigEditor.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


function ConfigEditor(props) {
  const {
    onOptionsChange,
    options
  } = props;
  const onAwsxAPIEndpoint = event => {
    const jsonData = Object.assign({}, options.jsonData, {
      awsxEndPoint: event.target.value
    });
    onOptionsChange(Object.assign({}, options, {
      jsonData
    }));
  };
  const onGrafanaEndPoint = event => {
    const jsonData = Object.assign({}, options.jsonData, {
      grafanaEndpoint: event.target.value
    });
    onOptionsChange(Object.assign({}, options, {
      jsonData
    }));
  };
  const onAPIEndPointChange = event => {
    const jsonData = Object.assign({}, options.jsonData, {
      cmdbEndpoint: event.target.value
    });
    onOptionsChange(Object.assign({}, options, {
      jsonData
    }));
  };

  // Secure field (only sent to the backend)
  // const onAPIKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   onOptionsChange({
  //     ...options,
  //     secureJsonData: {
  //       apiKey: event.target.value,
  //     },
  //   });
  // };

  // const onResetAPIKey = () => {
  //   onOptionsChange({
  //     ...options,
  //     secureJsonFields: {
  //       ...options.secureJsonFields,
  //       apiKey: false,
  //     },
  //     secureJsonData: {
  //       ...options.secureJsonData,
  //       apiKey: '',
  //     },
  //   });
  // };

  const {
    jsonData
  } = options;
  // const { jsonData, secureJsonFields } = options;
  // const secureJsonData = (options.secureJsonData || {}) as MySecureJsonData;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "gf-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Grafana Endpoint",
    labelWidth: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    onChange: onGrafanaEndPoint,
    value: jsonData.grafanaEndpoint || '',
    placeholder: "http://localhost:3001",
    width: 40
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "CMDB API Endpoint",
    labelWidth: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    onChange: onAPIEndPointChange,
    value: jsonData.cmdbEndpoint || '',
    placeholder: "https://api.synectiks.net/cmdb",
    width: 40
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "AWSX API Endpoint",
    labelWidth: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    onChange: onAwsxAPIEndpoint,
    value: jsonData.awsxEndPoint || '',
    placeholder: "https://api.synectiks.net/cmdb",
    width: 40
  })));
}

/***/ }),

/***/ "./components/QueryEditor.tsx":
/*!************************************!*\
  !*** ./components/QueryEditor.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-ds */ "./common-ds/index.ts");
/* harmony import */ var _extended_EditorRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extended/EditorRow */ "./extended/EditorRow.tsx");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./service/index.ts");





function QueryEditor(_ref) {
  let {
    query,
    onChange,
    onRunQuery,
    datasource
  } = _ref;
  const defaultFrame = [{
    label: "All",
    value: ""
  }];
  const service = new _service__WEBPACK_IMPORTED_MODULE_4__.Services(datasource.meta.jsonData.cmdbEndpoint || "", datasource.meta.jsonData.grafanaEndpoint || "");
  const [elementId, setElementId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [supportedPanels, setSupportedPanels] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [allFrames, setAllFrames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [frames, setFrames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFrame);
  const onChanged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const getCloudElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, query) => {
    service.getCloudElements(id).then(res => {
      if (res && res[0]) {
        const cloudElement = res[0];
        if (cloudElement) {
          const cloudElementQuery = (0,_common_ds__WEBPACK_IMPORTED_MODULE_2__.getCloudElementsQuery)(id, cloudElement, datasource.meta.jsonData.awsxEndPoint || "");
          query = Object.assign({}, query, cloudElementQuery);
          onChange(Object.assign({}, query));
          service.getSupportedPanels(cloudElement.elementType.toUpperCase(), "AWS").then(res => {
            if (res && res.length > 0) {
              const panels = [];
              const frames = {};
              res.map(panel => {
                panels.push({
                  label: panel.name,
                  value: panel.name
                });
                frames[panel.name] = panel.frames;
              });
              setSupportedPanels(panels);
              setAllFrames(frames);
              const {
                queryString
              } = query;
              const frame = frames[queryString];
              if (frame) {
                const arrFrames = frame.split(",").map(f => {
                  return {
                    label: f,
                    value: f
                  };
                });
                setFrames([...defaultFrame, ...arrFrames]);
              } else {
                setFrames([...defaultFrame]);
              }
            }
          });
        }
      }
    });
  }, [onChange]); // eslint-disable-line react-hooks/exhaustive-deps

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (onChanged.current === false) {
      let id = "";
      if (document.getElementById("elementId")) {
        var _document$getElementB;
        id = (_document$getElementB = document.getElementById("elementId")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
      } else if (document.getElementById("var-elementId")) {
        var _document$getElementB2;
        id = (_document$getElementB2 = document.getElementById("var-elementId")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value;
      } else {
        id = query.elementId;
      }
      if (id) {
        setElementId(id);
        getCloudElements(id, query);
      } else {
        alert("Please set 'elementId' variable");
      }
      onChanged.current = true;
    }
  }, [query, onChange, getCloudElements]);
  const onChangeElementType = e => {
    onChange(Object.assign({}, query, {
      elementType: e.target.value
    }));
  };
  const onChangeInstanceID = e => {
    onChange(Object.assign({}, query, {
      cloudIdentifierId: e.target.value
    }));
  };
  const onChangeSupportedPanel = value => {
    onChange(Object.assign({}, query, {
      queryString: value
    }));
    const frame = allFrames[value];
    if (frame) {
      const arrFrames = frame.split(",").map(f => {
        return {
          label: f,
          value: f
        };
      });
      setFrames([...defaultFrame, ...arrFrames]);
    } else {
      setFrames([...defaultFrame]);
    }
  };
  const onChangeResponseType = value => {
    onChange(Object.assign({}, query, {
      responseType: value
    }));
  };
  const onChangeFrame = value => {
    localStorage.setItem("datasource-selected-frame", value);
    onChange(Object.assign({}, query, {
      selectedFrame: value
    }));
  };
  const {
    elementType,
    cloudIdentifierId,
    queryString,
    responseType,
    selectedFrame
  } = query;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_extended_EditorRow__WEBPACK_IMPORTED_MODULE_3__.EditorRows, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_extended_EditorRow__WEBPACK_IMPORTED_MODULE_3__.EditorRow, {
    label: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Element Type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: elementType,
    onChange: e => onChangeElementType(e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Instance ID"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: cloudIdentifierId,
    onChange: e => onChangeInstanceID(e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Element ID"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
    disabled: true,
    value: elementId
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_extended_EditorRow__WEBPACK_IMPORTED_MODULE_3__.EditorRows, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_extended_EditorRow__WEBPACK_IMPORTED_MODULE_3__.EditorRow, {
    label: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Supported Panels"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    className: "min-width-12 width-12",
    value: queryString,
    options: supportedPanels,
    onChange: e => onChangeSupportedPanel(e.value),
    menuShouldPortal: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Response Type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    className: "min-width-12 width-12",
    value: responseType,
    options: _common_ds__WEBPACK_IMPORTED_MODULE_2__.RESPONSE_TYPE,
    onChange: e => onChangeResponseType(e.value),
    menuShouldPortal: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: "Frames"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    className: "min-width-12 width-12",
    value: selectedFrame,
    options: frames,
    onChange: e => onChangeFrame(e.value),
    menuShouldPortal: true
  })))));
}

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSource": () => (/* binding */ DataSource)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./service/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _common_ds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-ds */ "./common-ds/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





class DataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    _defineProperty(this, "service", void 0);
    _defineProperty(this, "awsxUrl", void 0);
    this.service = new _service__WEBPACK_IMPORTED_MODULE_1__.Services(instanceSettings.jsonData.cmdbEndpoint || "", instanceSettings.jsonData.grafanaEndpoint || "");
    instanceSettings.meta.jsonData = JSON.parse(JSON.stringify(instanceSettings.jsonData));
    this.awsxUrl = instanceSettings.jsonData.awsxEndPoint || "";
  }
  getCloudElements(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.service.getCloudElements(id).then(res => {
      let cloudElementQuery = {};
      if (res && res[0]) {
        const cloudElement = res[0];
        if (cloudElement) {
          cloudElementQuery = (0,_common_ds__WEBPACK_IMPORTED_MODULE_3__.getCloudElementsQuery)(id, cloudElement, this.awsxUrl);
        }
      }
      return cloudElementQuery;
    }));
  }
  getDefaultQuery(_) {
    return _types__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_QUERY;
  }
  query(request) {
    let id = "";
    if (document.getElementById("elementId")) {
      var _document$getElementB;
      id = (_document$getElementB = document.getElementById("elementId")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
    } else if (document.getElementById("var-elementId")) {
      var _document$getElementB2;
      id = (_document$getElementB2 = document.getElementById("var-elementId")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value;
    }
    if (id) {
      return this.getCloudElements(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(query => {
        let targets = request.targets;
        for (let i = 0; i < targets.length; i++) {
          targets[i] = Object.assign({}, targets[i], query);
        }
        return super.query(request);
      }));
    } else {
      return super.query(request);
    }
  }
}

/***/ }),

/***/ "./extended/EditorRow.tsx":
/*!********************************!*\
  !*** ./extended/EditorRow.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorRow": () => (/* binding */ EditorRow),
/* harmony export */   "EditorRows": () => (/* binding */ EditorRows)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stack */ "./extended/Stack.tsx");




const EditorRow = _ref => {
  let {
    label,
    collapsible,
    collapsed = true,
    title,
    dataTestId,
    children
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(collapsed);
  const testId = function () {
    let compType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return `infinity-query-row${compType ? '-' + compType : ''}-${(dataTestId || label).replace(/\ /g, '-')}`.toLowerCase();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: styles.root,
    "data-testid": testId('wrapper')
  }, collapsible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: show ? 'angle-down' : 'angle-right',
    fill: "text",
    size: "sm",
    variant: "secondary",
    onClick: e => {
      setShow(!show);
      e.preventDefault();
    },
    style: {
      marginRight: '10px'
    },
    "data-testid": testId(`collapse-${show ? 'hide' : 'show'}`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    onClick: e => {
      setShow(!show);
      e.preventDefault();
    },
    "data-testid": testId(`title`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", {
    className: styles.collapseTile
  }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: styles.collapseTileSecondary
  }, title ? title() : 'Options')), show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      display: 'flex',
      marginTop: label && collapsible ? '15px' : '0px',
      marginLeft: '0px'
    },
    "data-testid": testId(`children`)
  }, children));
};
const getStyles = theme => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.borderRadius(1)
    }),
    collapseTile: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: theme.spacing(1),
      color: theme.colors.secondary.text
    }),
    collapseTileSecondary: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      '&:hover': {
        color: theme.colors.secondary.text
      }
    })
  };
};
const EditorRows = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Stack__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 0.5,
    direction: "column"
  }, children);
};

/***/ }),

/***/ "./extended/Stack.tsx":
/*!****************************!*\
  !*** ./extended/Stack.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Stack = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)((0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(theme => getStyles(theme, props), [props]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: styles.root
  }, children);
};
const getStyles = (theme, props) => {
  var _props$direction, _props$wrap, _props$gap;
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: (_props$direction = props.direction) !== null && _props$direction !== void 0 ? _props$direction : 'row',
      flexWrap: ((_props$wrap = props.wrap) !== null && _props$wrap !== void 0 ? _props$wrap : true) ? 'wrap' : undefined,
      alignItems: props.alignItems,
      gap: theme.spacing((_props$gap = props.gap) !== null && _props$gap !== void 0 ? _props$gap : 2),
      flexGrow: props.flexGrow
    })
  };
};

/***/ }),

/***/ "./service/index.ts":
/*!**************************!*\
  !*** ./service/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Services": () => (/* binding */ Services)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// const BASE_URL = "https://api.synectiks.net/cmdb";
// const APPKUBE_URL="http://localhost:3001"
const GET_CLOUD_ELEMENT = "/cloud-element/search";
const GET_SUPPORTED_PANELS = "/cloud-element-supported-api/search";
class Services {
  constructor(cmdbEndpoint, grafanaEndpoint) {
    _defineProperty(this, "cmdbEndpoint", "");
    _defineProperty(this, "grafanaEndpoint", "");
    this.cmdbEndpoint = cmdbEndpoint;
    this.grafanaEndpoint = grafanaEndpoint;
  }
  getCloudElements(id) {
    return fetch(`${this.cmdbEndpoint}${GET_CLOUD_ELEMENT}?id=${id}`).then(response => response.json());
  }
  getSupportedPanels(elementType, cloud) {
    return fetch(`${this.cmdbEndpoint}${GET_SUPPORTED_PANELS}?elementType=${elementType}&cloud=${cloud}`).then(response => response.json());
  }
}

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_QUERY": () => (/* binding */ DEFAULT_QUERY)
/* harmony export */ });
const DEFAULT_QUERY = {
  constant: 6.5
};

/**
 * These are options configured for each DataSource instance
 */

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_css__;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ConfigEditor */ "./components/ConfigEditor.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/QueryEditor */ "./components/QueryEditor.tsx");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.DataSource).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__.QueryEditor);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=module.js.map