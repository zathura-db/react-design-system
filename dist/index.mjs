import { tv } from 'tailwind-variants';
import React3, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { tv as tv$1 } from 'tailwind-variants/lite';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports$1) {
    exports$1._ = exports$1._interop_require_default = _interop_require_default;
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/next/dist/shared/lib/utils/warn-once.js
var require_warn_once = __commonJS({
  "node_modules/next/dist/shared/lib/utils/warn-once.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "warnOnce", {
      enumerable: true,
      get: function() {
        return warnOnce;
      }
    });
    var warnOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const warnings = /* @__PURE__ */ new Set();
      warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
  }
});

// node_modules/next/dist/shared/lib/image-blur-svg.js
var require_image_blur_svg = __commonJS({
  "node_modules/next/dist/shared/lib/image-blur-svg.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getImageBlurSvg", {
      enumerable: true,
      get: function() {
        return getImageBlurSvg;
      }
    });
    function getImageBlurSvg(param) {
      let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
      const std = 20;
      const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
      const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
      const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
      const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
      return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
    }
  }
});

// node_modules/next/dist/shared/lib/image-config.js
var require_image_config = __commonJS({
  "node_modules/next/dist/shared/lib/image-config.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      VALID_LOADERS: function() {
        return VALID_LOADERS;
      },
      imageConfigDefault: function() {
        return imageConfigDefault;
      }
    });
    var VALID_LOADERS = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ];
    var imageConfigDefault = {
      deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: false,
      minimumCacheTTL: 60,
      formats: [
        "image/webp"
      ],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "inline",
      remotePatterns: [],
      unoptimized: false
    };
  }
});

// node_modules/next/dist/shared/lib/get-img-props.js
var require_get_img_props = __commonJS({
  "node_modules/next/dist/shared/lib/get-img-props.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getImgProps", {
      enumerable: true,
      get: function() {
        return getImgProps;
      }
    });
    var _warnonce = require_warn_once();
    var _imageblursvg = require_image_blur_svg();
    var _imageconfig = require_image_config();
    var VALID_LOADING_VALUES = [
      "lazy",
      "eager",
      void 0
    ];
    function isStaticRequire(src) {
      return src.default !== void 0;
    }
    function isStaticImageData(src) {
      return src.src !== void 0;
    }
    function isStaticImport(src) {
      return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
    }
    var allImgs = /* @__PURE__ */ new Map();
    var perfObserver;
    function getInt(x) {
      if (typeof x === "undefined") {
        return x;
      }
      if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
      }
      if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
      }
      return NaN;
    }
    function getWidths(param, width, sizes) {
      let { deviceSizes, allSizes } = param;
      if (sizes) {
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for (let match; match = viewportWidthRe.exec(sizes); match) {
          percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
          const smallestRatio = Math.min(...percentSizes) * 0.01;
          return {
            widths: allSizes.filter((s) => s >= deviceSizes[0] * smallestRatio),
            kind: "w"
          };
        }
        return {
          widths: allSizes,
          kind: "w"
        };
      }
      if (typeof width !== "number") {
        return {
          widths: deviceSizes,
          kind: "w"
        };
      }
      const widths = [
        ...new Set(
          // > This means that most OLED screens that say they are 3x resolution,
          // > are actually 3x in the green color, but only 1.5x in the red and
          // > blue colors. Showing a 3x resolution image in the app vs a 2x
          // > resolution image will be visually the same, though the 3x image
          // > takes significantly more data. Even true 3x resolution screens are
          // > wasteful as the human eye cannot see that level of detail without
          // > something like a magnifying glass.
          // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
          [
            width,
            width * 2
            /*, width * 3*/
          ].map((w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1])
        )
      ];
      return {
        widths,
        kind: "x"
      };
    }
    function generateImgAttrs(param) {
      let { config, src, unoptimized, width, quality, sizes, loader } = param;
      if (unoptimized) {
        return {
          src,
          srcSet: void 0,
          sizes: void 0
        };
      }
      const { widths, kind } = getWidths(config, width, sizes);
      const last = widths.length - 1;
      return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i) => loader({
          config,
          src,
          quality,
          width: w
        }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
          config,
          src,
          quality,
          width: widths[last]
        })
      };
    }
    function getImgProps(param, _state) {
      let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
      const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
      let config;
      let c = imgConf || _imageconfig.imageConfigDefault;
      if ("allSizes" in c) {
        config = c;
      } else {
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b) => a - b);
        const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
        config = {
          ...c,
          allSizes,
          deviceSizes
        };
      }
      if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
      }
      let loader = rest.loader || defaultLoader;
      delete rest.loader;
      delete rest.srcSet;
      const isDefaultLoader = "__next_img_default" in loader;
      if (isDefaultLoader) {
        if (config.loader === "custom") {
          throw new Error('Image with src "' + src + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader');
        }
      } else {
        const customImageLoader = loader;
        loader = (obj) => {
          const { config: _, ...opts } = obj;
          return customImageLoader(opts);
        };
      }
      if (layout) {
        if (layout === "fill") {
          fill = true;
        }
        const layoutToStyle = {
          intrinsic: {
            maxWidth: "100%",
            height: "auto"
          },
          responsive: {
            width: "100%",
            height: "auto"
          }
        };
        const layoutToSizes = {
          responsive: "100vw",
          fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
          style = {
            ...style,
            ...layoutStyle
          };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
          sizes = layoutSizes;
        }
      }
      let staticSrc = "";
      let widthInt = getInt(width);
      let heightInt = getInt(height);
      let blurWidth;
      let blurHeight;
      if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
          throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
          throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
          if (!widthInt && !heightInt) {
            widthInt = staticImageData.width;
            heightInt = staticImageData.height;
          } else if (widthInt && !heightInt) {
            const ratio = widthInt / staticImageData.width;
            heightInt = Math.round(staticImageData.height * ratio);
          } else if (!widthInt && heightInt) {
            const ratio = heightInt / staticImageData.height;
            widthInt = Math.round(staticImageData.width * ratio);
          }
        }
      }
      src = typeof src === "string" ? src : staticSrc;
      let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        unoptimized = true;
        isLazy = false;
      }
      if (config.unoptimized) {
        unoptimized = true;
      }
      if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        unoptimized = true;
      }
      if (priority) {
        fetchPriority = "high";
      }
      const qualityInt = getInt(quality);
      if (process.env.NODE_ENV !== "production") {
        if (config.output === "export" && isDefaultLoader && !unoptimized) {
          throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
        }
        if (!src) {
          unoptimized = true;
        } else {
          if (fill) {
            if (width) {
              throw new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.');
            }
            if (height) {
              throw new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.');
            }
            if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
              throw new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
            }
            if ((style == null ? void 0 : style.width) && style.width !== "100%") {
              throw new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
            }
            if ((style == null ? void 0 : style.height) && style.height !== "100%") {
              throw new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
            }
          } else {
            if (typeof widthInt === "undefined") {
              throw new Error('Image with src "' + src + '" is missing required "width" property.');
            } else if (isNaN(widthInt)) {
              throw new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".');
            }
            if (typeof heightInt === "undefined") {
              throw new Error('Image with src "' + src + '" is missing required "height" property.');
            } else if (isNaN(heightInt)) {
              throw new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".');
            }
          }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
          throw new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + ".");
        }
        if (priority && loading === "lazy") {
          throw new Error('Image with src "' + src + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
        }
        if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
          throw new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".');
        }
        if (placeholder !== "empty") {
          if (widthInt && heightInt && widthInt * heightInt < 1600) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
          }
        }
        if (placeholder === "blur" && !blurDataURL) {
          const VALID_BLUR_EXT = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw new Error('Image with src "' + src + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url');
        }
        if ("ref" in rest) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
        }
        if (!unoptimized && !isDefaultLoader) {
          const urlStr = loader({
            config,
            src,
            width: widthInt || 400,
            quality: qualityInt || 75
          });
          let url;
          try {
            url = new URL(urlStr);
          } catch (err) {
          }
          if (urlStr === src || url && url.pathname === src && !url.search) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width');
          }
        }
        if (onLoadingComplete) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
        }
        for (const [legacyKey, legacyValue] of Object.entries({
          layout,
          objectFit,
          objectPosition,
          lazyBoundary,
          lazyRoot
        })) {
          if (legacyValue) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13');
          }
        }
        if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
          perfObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              var _entry_element;
              const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
              const lcpImage = allImgs.get(imgSrc);
              if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
                (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.\nRead more: https://nextjs.org/docs/api-reference/next/image#priority');
              }
            }
          });
          try {
            perfObserver.observe({
              type: "largest-contentful-paint",
              buffered: true
            });
          } catch (err) {
            console.error(err);
          }
        }
      }
      const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
      } : {}, showAltText ? {} : {
        color: "transparent"
      }, style);
      const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
      }) + '")' : 'url("' + placeholder + '")' : null;
      let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
      } : {};
      if (process.env.NODE_ENV === "development") {
        if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
          placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
        }
      }
      const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
      });
      if (process.env.NODE_ENV !== "production") {
        if (typeof window !== "undefined") {
          let fullUrl;
          try {
            fullUrl = new URL(imgAttributes.src);
          } catch (e) {
            fullUrl = new URL(imgAttributes.src, window.location.href);
          }
          allImgs.set(fullUrl.href, {
            src,
            priority,
            placeholder
          });
        }
      }
      const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
          ...imgStyle,
          ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
      };
      const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
      };
      return {
        props,
        meta
      };
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports$1) {
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    exports$1._ = exports$1._interop_require_wildcard = _interop_require_wildcard;
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
  }
});

// node_modules/next/dist/shared/lib/side-effect.js
var require_side_effect = __commonJS({
  "node_modules/next/dist/shared/lib/side-effect.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "default", {
      enumerable: true,
      get: function() {
        return SideEffect;
      }
    });
    var _react = __require("react");
    var isServer = typeof window === "undefined";
    var useClientOnlyLayoutEffect = isServer ? () => {
    } : _react.useLayoutEffect;
    var useClientOnlyEffect = isServer ? () => {
    } : _react.useEffect;
    function SideEffect(props) {
      const { headManager, reduceComponentsToState } = props;
      function emitChange() {
        if (headManager && headManager.mountedInstances) {
          const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
          headManager.updateHead(reduceComponentsToState(headElements, props));
        }
      }
      if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
      }
      useClientOnlyLayoutEffect(() => {
        var _headManager_mountedInstances2;
        headManager == null ? void 0 : (_headManager_mountedInstances2 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances2.add(props.children);
        return () => {
          var _headManager_mountedInstances3;
          headManager == null ? void 0 : (_headManager_mountedInstances3 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances3.delete(props.children);
        };
      });
      useClientOnlyLayoutEffect(() => {
        if (headManager) {
          headManager._pendingUpdate = emitChange;
        }
        return () => {
          if (headManager) {
            headManager._pendingUpdate = emitChange;
          }
        };
      });
      useClientOnlyEffect(() => {
        if (headManager && headManager._pendingUpdate) {
          headManager._pendingUpdate();
          headManager._pendingUpdate = null;
        }
        return () => {
          if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
          }
        };
      });
      return null;
    }
  }
});

// node_modules/next/dist/shared/lib/amp-context.shared-runtime.js
var require_amp_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "AmpStateContext", {
      enumerable: true,
      get: function() {
        return AmpStateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AmpStateContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      AmpStateContext.displayName = "AmpStateContext";
    }
  }
});

// node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js
var require_head_manager_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "HeadManagerContext", {
      enumerable: true,
      get: function() {
        return HeadManagerContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var HeadManagerContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// node_modules/next/dist/shared/lib/amp-mode.js
var require_amp_mode = __commonJS({
  "node_modules/next/dist/shared/lib/amp-mode.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "isInAmpMode", {
      enumerable: true,
      get: function() {
        return isInAmpMode;
      }
    });
    function isInAmpMode(param) {
      let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
      return ampFirst || hybrid && hasQuery;
    }
  }
});

// node_modules/next/dist/shared/lib/head.js
var require_head = __commonJS({
  "node_modules/next/dist/shared/lib/head.js"(exports$1, module) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      default: function() {
        return _default;
      },
      defaultHead: function() {
        return defaultHead;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _sideeffect = /* @__PURE__ */ _interop_require_default._(require_side_effect());
    var _ampcontextsharedruntime = require_amp_context_shared_runtime();
    var _headmanagercontextsharedruntime = require_head_manager_context_shared_runtime();
    var _ampmode = require_amp_mode();
    var _warnonce = require_warn_once();
    function defaultHead(inAmpMode) {
      if (inAmpMode === void 0) inAmpMode = false;
      const head = [
        /* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          charSet: "utf-8"
        })
      ];
      if (!inAmpMode) {
        head.push(/* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        }));
      }
      return head;
    }
    function onlyReactElement(list, child) {
      if (typeof child === "string" || typeof child === "number") {
        return list;
      }
      if (child.type === _react.default.Fragment) {
        return list.concat(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          _react.default.Children.toArray(child.props.children).reduce(
            // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
            (fragmentList, fragmentChild) => {
              if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
              }
              return fragmentList.concat(fragmentChild);
            },
            []
          )
        );
      }
      return list.concat(child);
    }
    var METATYPES = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function unique() {
      const keys = /* @__PURE__ */ new Set();
      const tags = /* @__PURE__ */ new Set();
      const metaTypes = /* @__PURE__ */ new Set();
      const metaCategories = {};
      return (h) => {
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
          hasKey = true;
          const key = h.key.slice(h.key.indexOf("$") + 1);
          if (keys.has(key)) {
            isUnique = false;
          } else {
            keys.add(key);
          }
        }
        switch (h.type) {
          case "title":
          case "base":
            if (tags.has(h.type)) {
              isUnique = false;
            } else {
              tags.add(h.type);
            }
            break;
          case "meta":
            for (let i = 0, len = METATYPES.length; i < len; i++) {
              const metatype = METATYPES[i];
              if (!h.props.hasOwnProperty(metatype)) continue;
              if (metatype === "charSet") {
                if (metaTypes.has(metatype)) {
                  isUnique = false;
                } else {
                  metaTypes.add(metatype);
                }
              } else {
                const category = h.props[metatype];
                const categories = metaCategories[metatype] || /* @__PURE__ */ new Set();
                if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                  isUnique = false;
                } else {
                  categories.add(category);
                  metaCategories[metatype] = categories;
                }
              }
            }
            break;
        }
        return isUnique;
      };
    }
    function reduceComponents(headChildrenElements, props) {
      const { inAmpMode } = props;
      return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
        const key = c.key || i;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !inAmpMode) {
          if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
          [
            "https://fonts.googleapis.com/css",
            "https://use.typekit.net/"
          ].some((url) => c.props["href"].startsWith(url))) {
            const newProps = {
              ...c.props || {}
            };
            newProps["data-href"] = newProps["href"];
            newProps["href"] = void 0;
            newProps["data-optimized-fonts"] = true;
            return /* @__PURE__ */ _react.default.cloneElement(c, newProps);
          }
        }
        if (process.env.NODE_ENV === "development") {
          if (c.type === "script" && c.props["type"] !== "application/ld+json") {
            const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
            (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
          } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
            (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
          }
        }
        return /* @__PURE__ */ _react.default.cloneElement(c, {
          key
        });
      });
    }
    function Head(param) {
      let { children } = param;
      const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
      const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children
      });
    }
    var _default = Head;
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js
var require_image_config_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "ImageConfigContext", {
      enumerable: true,
      get: function() {
        return ImageConfigContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var _imageconfig = require_image_config();
    var ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
    if (process.env.NODE_ENV !== "production") {
      ImageConfigContext.displayName = "ImageConfigContext";
    }
  }
});

// node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// node_modules/next/dist/compiled/picomatch/index.js
var require_picomatch = __commonJS({
  "node_modules/next/dist/compiled/picomatch/index.js"(exports$1, module) {
    (() => {
      var t = { 170: (t2, e2, u2) => {
        const n = u2(510);
        const isWindows = () => {
          if (typeof navigator !== "undefined" && navigator.platform) {
            const t3 = navigator.platform.toLowerCase();
            return t3 === "win32" || t3 === "windows";
          }
          if (typeof process !== "undefined" && process.platform) {
            return process.platform === "win32";
          }
          return false;
        };
        function picomatch(t3, e3, u3 = false) {
          if (e3 && (e3.windows === null || e3.windows === void 0)) {
            e3 = { ...e3, windows: isWindows() };
          }
          return n(t3, e3, u3);
        }
        Object.assign(picomatch, n);
        t2.exports = picomatch;
      }, 154: (t2) => {
        const e2 = "\\\\/";
        const u2 = `[^${e2}]`;
        const n = "\\.";
        const o = "\\+";
        const s = "\\?";
        const r = "\\/";
        const a = "(?=.)";
        const i = "[^/]";
        const c = `(?:${r}|$)`;
        const p = `(?:^|${r})`;
        const l = `${n}{1,2}${c}`;
        const f = `(?!${n})`;
        const A = `(?!${p}${l})`;
        const _ = `(?!${n}{0,1}${c})`;
        const R = `(?!${l})`;
        const E = `[^.${r}]`;
        const h = `${i}*?`;
        const g = "/";
        const b = { DOT_LITERAL: n, PLUS_LITERAL: o, QMARK_LITERAL: s, SLASH_LITERAL: r, ONE_CHAR: a, QMARK: i, END_ANCHOR: c, DOTS_SLASH: l, NO_DOT: f, NO_DOTS: A, NO_DOT_SLASH: _, NO_DOTS_SLASH: R, QMARK_NO_DOT: E, STAR: h, START_ANCHOR: p, SEP: g };
        const C = { ...b, SLASH_LITERAL: `[${e2}]`, QMARK: u2, STAR: `${u2}*?`, DOTS_SLASH: `${n}{1,2}(?:[${e2}]|$)`, NO_DOT: `(?!${n})`, NO_DOTS: `(?!(?:^|[${e2}])${n}{1,2}(?:[${e2}]|$))`, NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e2}]|$))`, NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e2}]|$))`, QMARK_NO_DOT: `[^.${e2}]`, START_ANCHOR: `(?:^|[${e2}])`, END_ANCHOR: `(?:[${e2}]|$)`, SEP: "\\" };
        const y = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
        t2.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: y, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(t3) {
          return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${t3.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
        }, globChars(t3) {
          return t3 === true ? C : b;
        } };
      }, 697: (t2, e2, u2) => {
        const n = u2(154);
        const o = u2(96);
        const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
        const expandRange = (t3, e3) => {
          if (typeof e3.expandRange === "function") {
            return e3.expandRange(...t3, e3);
          }
          t3.sort();
          const u3 = `[${t3.join("-")}]`;
          try {
            new RegExp(u3);
          } catch (e4) {
            return t3.map(((t4) => o.escapeRegex(t4))).join("..");
          }
          return u3;
        };
        const syntaxError = (t3, e3) => `Missing ${t3}: "${e3}" - use "\\\\${e3}" to match literal characters`;
        const parse = (t3, e3) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected a string");
          }
          t3 = c[t3] || t3;
          const u3 = { ...e3 };
          const p = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
          let l = t3.length;
          if (l > p) {
            throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
          }
          const f = { type: "bos", value: "", output: u3.prepend || "" };
          const A = [f];
          const _ = u3.capture ? "" : "?:";
          const R = n.globChars(u3.windows);
          const E = n.extglobChars(R);
          const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
          const globstar = (t4) => `(${_}(?:(?!${L}${t4.dot ? y : h}).)*?)`;
          const T = u3.dot ? "" : $;
          const O = u3.dot ? H : v;
          let k = u3.bash === true ? globstar(u3) : d;
          if (u3.capture) {
            k = `(${k})`;
          }
          if (typeof u3.noext === "boolean") {
            u3.noextglob = u3.noext;
          }
          const m = { input: t3, index: -1, start: 0, dot: u3.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: A };
          t3 = o.removePrefix(t3, m);
          l = t3.length;
          const w = [];
          const N = [];
          const I = [];
          let B = f;
          let G;
          const eos = () => m.index === l - 1;
          const D = m.peek = (e4 = 1) => t3[m.index + e4];
          const M = m.advance = () => t3[++m.index] || "";
          const remaining = () => t3.slice(m.index + 1);
          const consume = (t4 = "", e4 = 0) => {
            m.consumed += t4;
            m.index += e4;
          };
          const append = (t4) => {
            m.output += t4.output != null ? t4.output : t4.value;
            consume(t4.value);
          };
          const negate = () => {
            let t4 = 1;
            while (D() === "!" && (D(2) !== "(" || D(3) === "?")) {
              M();
              m.start++;
              t4++;
            }
            if (t4 % 2 === 0) {
              return false;
            }
            m.negated = true;
            m.start++;
            return true;
          };
          const increment = (t4) => {
            m[t4]++;
            I.push(t4);
          };
          const decrement = (t4) => {
            m[t4]--;
            I.pop();
          };
          const push = (t4) => {
            if (B.type === "globstar") {
              const e4 = m.braces > 0 && (t4.type === "comma" || t4.type === "brace");
              const u4 = t4.extglob === true || w.length && (t4.type === "pipe" || t4.type === "paren");
              if (t4.type !== "slash" && t4.type !== "paren" && !e4 && !u4) {
                m.output = m.output.slice(0, -B.output.length);
                B.type = "star";
                B.value = "*";
                B.output = k;
                m.output += B.output;
              }
            }
            if (w.length && t4.type !== "paren") {
              w[w.length - 1].inner += t4.value;
            }
            if (t4.value || t4.output) append(t4);
            if (B && B.type === "text" && t4.type === "text") {
              B.output = (B.output || B.value) + t4.value;
              B.value += t4.value;
              return;
            }
            t4.prev = B;
            A.push(t4);
            B = t4;
          };
          const extglobOpen = (t4, e4) => {
            const n2 = { ...E[e4], conditions: 1, inner: "" };
            n2.prev = B;
            n2.parens = m.parens;
            n2.output = m.output;
            const o2 = (u3.capture ? "(" : "") + n2.open;
            increment("parens");
            push({ type: t4, value: e4, output: m.output ? "" : C });
            push({ type: "paren", extglob: true, value: M(), output: o2 });
            w.push(n2);
          };
          const extglobClose = (t4) => {
            let n2 = t4.close + (u3.capture ? ")" : "");
            let o2;
            if (t4.type === "negate") {
              let s2 = k;
              if (t4.inner && t4.inner.length > 1 && t4.inner.includes("/")) {
                s2 = globstar(u3);
              }
              if (s2 !== k || eos() || /^\)+$/.test(remaining())) {
                n2 = t4.close = `)$))${s2}`;
              }
              if (t4.inner.includes("*") && (o2 = remaining()) && /^\.[^\\/.]+$/.test(o2)) {
                const u4 = parse(o2, { ...e3, fastpaths: false }).output;
                n2 = t4.close = `)${u4})${s2})`;
              }
              if (t4.prev.type === "bos") {
                m.negatedExtglob = true;
              }
            }
            push({ type: "paren", extglob: true, value: G, output: n2 });
            decrement("parens");
          };
          if (u3.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t3)) {
            let n2 = false;
            let s2 = t3.replace(i, ((t4, e4, u4, o2, s3, r2) => {
              if (o2 === "\\") {
                n2 = true;
                return t4;
              }
              if (o2 === "?") {
                if (e4) {
                  return e4 + o2 + (s3 ? H.repeat(s3.length) : "");
                }
                if (r2 === 0) {
                  return O + (s3 ? H.repeat(s3.length) : "");
                }
                return H.repeat(u4.length);
              }
              if (o2 === ".") {
                return h.repeat(u4.length);
              }
              if (o2 === "*") {
                if (e4) {
                  return e4 + o2 + (s3 ? k : "");
                }
                return k;
              }
              return e4 ? t4 : `\\${t4}`;
            }));
            if (n2 === true) {
              if (u3.unescape === true) {
                s2 = s2.replace(/\\/g, "");
              } else {
                s2 = s2.replace(/\\+/g, ((t4) => t4.length % 2 === 0 ? "\\\\" : t4 ? "\\" : ""));
              }
            }
            if (s2 === t3 && u3.contains === true) {
              m.output = t3;
              return m;
            }
            m.output = o.wrapOutput(s2, m, e3);
            return m;
          }
          while (!eos()) {
            G = M();
            if (G === "\0") {
              continue;
            }
            if (G === "\\") {
              const t4 = D();
              if (t4 === "/" && u3.bash !== true) {
                continue;
              }
              if (t4 === "." || t4 === ";") {
                continue;
              }
              if (!t4) {
                G += "\\";
                push({ type: "text", value: G });
                continue;
              }
              const e5 = /^\\+/.exec(remaining());
              let n3 = 0;
              if (e5 && e5[0].length > 2) {
                n3 = e5[0].length;
                m.index += n3;
                if (n3 % 2 !== 0) {
                  G += "\\";
                }
              }
              if (u3.unescape === true) {
                G = M();
              } else {
                G += M();
              }
              if (m.brackets === 0) {
                push({ type: "text", value: G });
                continue;
              }
            }
            if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
              if (u3.posix !== false && G === ":") {
                const t4 = B.value.slice(1);
                if (t4.includes("[")) {
                  B.posix = true;
                  if (t4.includes(":")) {
                    const t5 = B.value.lastIndexOf("[");
                    const e5 = B.value.slice(0, t5);
                    const u4 = B.value.slice(t5 + 2);
                    const n3 = r[u4];
                    if (n3) {
                      B.value = e5 + n3;
                      m.backtrack = true;
                      M();
                      if (!f.output && A.indexOf(B) === 1) {
                        f.output = C;
                      }
                      continue;
                    }
                  }
                }
              }
              if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                G = `\\${G}`;
              }
              if (G === "]" && (B.value === "[" || B.value === "[^")) {
                G = `\\${G}`;
              }
              if (u3.posix === true && G === "!" && B.value === "[") {
                G = "^";
              }
              B.value += G;
              append({ value: G });
              continue;
            }
            if (m.quotes === 1 && G !== '"') {
              G = o.escapeRegex(G);
              B.value += G;
              append({ value: G });
              continue;
            }
            if (G === '"') {
              m.quotes = m.quotes === 1 ? 0 : 1;
              if (u3.keepQuotes === true) {
                push({ type: "text", value: G });
              }
              continue;
            }
            if (G === "(") {
              increment("parens");
              push({ type: "paren", value: G });
              continue;
            }
            if (G === ")") {
              if (m.parens === 0 && u3.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "("));
              }
              const t4 = w[w.length - 1];
              if (t4 && m.parens === t4.parens + 1) {
                extglobClose(w.pop());
                continue;
              }
              push({ type: "paren", value: G, output: m.parens ? ")" : "\\)" });
              decrement("parens");
              continue;
            }
            if (G === "[") {
              if (u3.nobracket === true || !remaining().includes("]")) {
                if (u3.nobracket !== true && u3.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("closing", "]"));
                }
                G = `\\${G}`;
              } else {
                increment("brackets");
              }
              push({ type: "bracket", value: G });
              continue;
            }
            if (G === "]") {
              if (u3.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                push({ type: "text", value: G, output: `\\${G}` });
                continue;
              }
              if (m.brackets === 0) {
                if (u3.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("opening", "["));
                }
                push({ type: "text", value: G, output: `\\${G}` });
                continue;
              }
              decrement("brackets");
              const t4 = B.value.slice(1);
              if (B.posix !== true && t4[0] === "^" && !t4.includes("/")) {
                G = `/${G}`;
              }
              B.value += G;
              append({ value: G });
              if (u3.literalBrackets === false || o.hasRegexChars(t4)) {
                continue;
              }
              const e5 = o.escapeRegex(B.value);
              m.output = m.output.slice(0, -B.value.length);
              if (u3.literalBrackets === true) {
                m.output += e5;
                B.value = e5;
                continue;
              }
              B.value = `(${_}${e5}|${B.value})`;
              m.output += B.value;
              continue;
            }
            if (G === "{" && u3.nobrace !== true) {
              increment("braces");
              const t4 = { type: "brace", value: G, output: "(", outputIndex: m.output.length, tokensIndex: m.tokens.length };
              N.push(t4);
              push(t4);
              continue;
            }
            if (G === "}") {
              const t4 = N[N.length - 1];
              if (u3.nobrace === true || !t4) {
                push({ type: "text", value: G, output: G });
                continue;
              }
              let e5 = ")";
              if (t4.dots === true) {
                const t5 = A.slice();
                const n3 = [];
                for (let e6 = t5.length - 1; e6 >= 0; e6--) {
                  A.pop();
                  if (t5[e6].type === "brace") {
                    break;
                  }
                  if (t5[e6].type !== "dots") {
                    n3.unshift(t5[e6].value);
                  }
                }
                e5 = expandRange(n3, u3);
                m.backtrack = true;
              }
              if (t4.comma !== true && t4.dots !== true) {
                const u4 = m.output.slice(0, t4.outputIndex);
                const n3 = m.tokens.slice(t4.tokensIndex);
                t4.value = t4.output = "\\{";
                G = e5 = "\\}";
                m.output = u4;
                for (const t5 of n3) {
                  m.output += t5.output || t5.value;
                }
              }
              push({ type: "brace", value: G, output: e5 });
              decrement("braces");
              N.pop();
              continue;
            }
            if (G === "|") {
              if (w.length > 0) {
                w[w.length - 1].conditions++;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (G === ",") {
              let t4 = G;
              const e5 = N[N.length - 1];
              if (e5 && I[I.length - 1] === "braces") {
                e5.comma = true;
                t4 = "|";
              }
              push({ type: "comma", value: G, output: t4 });
              continue;
            }
            if (G === "/") {
              if (B.type === "dot" && m.index === m.start + 1) {
                m.start = m.index + 1;
                m.consumed = "";
                m.output = "";
                A.pop();
                B = f;
                continue;
              }
              push({ type: "slash", value: G, output: b });
              continue;
            }
            if (G === ".") {
              if (m.braces > 0 && B.type === "dot") {
                if (B.value === ".") B.output = h;
                const t4 = N[N.length - 1];
                B.type = "dots";
                B.output += G;
                B.value += G;
                t4.dots = true;
                continue;
              }
              if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                push({ type: "text", value: G, output: h });
                continue;
              }
              push({ type: "dot", value: G, output: h });
              continue;
            }
            if (G === "?") {
              const t4 = B && B.value === "(";
              if (!t4 && u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                extglobOpen("qmark", G);
                continue;
              }
              if (B && B.type === "paren") {
                const t5 = D();
                let e5 = G;
                if (B.value === "(" && !/[!=<:]/.test(t5) || t5 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                  e5 = `\\${G}`;
                }
                push({ type: "text", value: G, output: e5 });
                continue;
              }
              if (u3.dot !== true && (B.type === "slash" || B.type === "bos")) {
                push({ type: "qmark", value: G, output: v });
                continue;
              }
              push({ type: "qmark", value: G, output: H });
              continue;
            }
            if (G === "!") {
              if (u3.noextglob !== true && D() === "(") {
                if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                  extglobOpen("negate", G);
                  continue;
                }
              }
              if (u3.nonegate !== true && m.index === 0) {
                negate();
                continue;
              }
            }
            if (G === "+") {
              if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                extglobOpen("plus", G);
                continue;
              }
              if (B && B.value === "(" || u3.regex === false) {
                push({ type: "plus", value: G, output: g });
                continue;
              }
              if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                push({ type: "plus", value: G });
                continue;
              }
              push({ type: "plus", value: g });
              continue;
            }
            if (G === "@") {
              if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                push({ type: "at", extglob: true, value: G, output: "" });
                continue;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (G !== "*") {
              if (G === "$" || G === "^") {
                G = `\\${G}`;
              }
              const t4 = a.exec(remaining());
              if (t4) {
                G += t4[0];
                m.index += t4[0].length;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (B && (B.type === "globstar" || B.star === true)) {
              B.type = "star";
              B.star = true;
              B.value += G;
              B.output = k;
              m.backtrack = true;
              m.globstar = true;
              consume(G);
              continue;
            }
            let e4 = remaining();
            if (u3.noextglob !== true && /^\([^?]/.test(e4)) {
              extglobOpen("star", G);
              continue;
            }
            if (B.type === "star") {
              if (u3.noglobstar === true) {
                consume(G);
                continue;
              }
              const n3 = B.prev;
              const o2 = n3.prev;
              const s2 = n3.type === "slash" || n3.type === "bos";
              const r2 = o2 && (o2.type === "star" || o2.type === "globstar");
              if (u3.bash === true && (!s2 || e4[0] && e4[0] !== "/")) {
                push({ type: "star", value: G, output: "" });
                continue;
              }
              const a2 = m.braces > 0 && (n3.type === "comma" || n3.type === "brace");
              const i2 = w.length && (n3.type === "pipe" || n3.type === "paren");
              if (!s2 && n3.type !== "paren" && !a2 && !i2) {
                push({ type: "star", value: G, output: "" });
                continue;
              }
              while (e4.slice(0, 3) === "/**") {
                const u4 = t3[m.index + 4];
                if (u4 && u4 !== "/") {
                  break;
                }
                e4 = e4.slice(3);
                consume("/**", 3);
              }
              if (n3.type === "bos" && eos()) {
                B.type = "globstar";
                B.value += G;
                B.output = globstar(u3);
                m.output = B.output;
                m.globstar = true;
                consume(G);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && !r2 && eos()) {
                m.output = m.output.slice(0, -(n3.output + B.output).length);
                n3.output = `(?:${n3.output}`;
                B.type = "globstar";
                B.output = globstar(u3) + (u3.strictSlashes ? ")" : "|$)");
                B.value += G;
                m.globstar = true;
                m.output += n3.output + B.output;
                consume(G);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && e4[0] === "/") {
                const t4 = e4[1] !== void 0 ? "|$" : "";
                m.output = m.output.slice(0, -(n3.output + B.output).length);
                n3.output = `(?:${n3.output}`;
                B.type = "globstar";
                B.output = `${globstar(u3)}${b}|${b}${t4})`;
                B.value += G;
                m.output += n3.output + B.output;
                m.globstar = true;
                consume(G + M());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              if (n3.type === "bos" && e4[0] === "/") {
                B.type = "globstar";
                B.value += G;
                B.output = `(?:^|${b}|${globstar(u3)}${b})`;
                m.output = B.output;
                m.globstar = true;
                consume(G + M());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              m.output = m.output.slice(0, -B.output.length);
              B.type = "globstar";
              B.output = globstar(u3);
              B.value += G;
              m.output += B.output;
              m.globstar = true;
              consume(G);
              continue;
            }
            const n2 = { type: "star", value: G, output: k };
            if (u3.bash === true) {
              n2.output = ".*?";
              if (B.type === "bos" || B.type === "slash") {
                n2.output = T + n2.output;
              }
              push(n2);
              continue;
            }
            if (B && (B.type === "bracket" || B.type === "paren") && u3.regex === true) {
              n2.output = G;
              push(n2);
              continue;
            }
            if (m.index === m.start || B.type === "slash" || B.type === "dot") {
              if (B.type === "dot") {
                m.output += x;
                B.output += x;
              } else if (u3.dot === true) {
                m.output += S;
                B.output += S;
              } else {
                m.output += T;
                B.output += T;
              }
              if (D() !== "*") {
                m.output += C;
                B.output += C;
              }
            }
            push(n2);
          }
          while (m.brackets > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
            m.output = o.escapeLast(m.output, "[");
            decrement("brackets");
          }
          while (m.parens > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
            m.output = o.escapeLast(m.output, "(");
            decrement("parens");
          }
          while (m.braces > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
            m.output = o.escapeLast(m.output, "{");
            decrement("braces");
          }
          if (u3.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
            push({ type: "maybe_slash", value: "", output: `${b}?` });
          }
          if (m.backtrack === true) {
            m.output = "";
            for (const t4 of m.tokens) {
              m.output += t4.output != null ? t4.output : t4.value;
              if (t4.suffix) {
                m.output += t4.suffix;
              }
            }
          }
          return m;
        };
        parse.fastpaths = (t3, e3) => {
          const u3 = { ...e3 };
          const r2 = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
          const a2 = t3.length;
          if (a2 > r2) {
            throw new SyntaxError(`Input length: ${a2}, exceeds maximum allowed length: ${r2}`);
          }
          t3 = c[t3] || t3;
          const { DOT_LITERAL: i2, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u3.windows);
          const g = u3.dot ? _ : A;
          const b = u3.dot ? R : A;
          const C = u3.capture ? "" : "?:";
          const y = { negated: false, prefix: "" };
          let $ = u3.bash === true ? ".*?" : E;
          if (u3.capture) {
            $ = `(${$})`;
          }
          const globstar = (t4) => {
            if (t4.noglobstar === true) return $;
            return `(${C}(?:(?!${h}${t4.dot ? f : i2}).)*?)`;
          };
          const create = (t4) => {
            switch (t4) {
              case "*":
                return `${g}${l}${$}`;
              case ".*":
                return `${i2}${l}${$}`;
              case "*.*":
                return `${g}${$}${i2}${l}${$}`;
              case "*/*":
                return `${g}${$}${p}${l}${b}${$}`;
              case "**":
                return g + globstar(u3);
              case "**/*":
                return `(?:${g}${globstar(u3)}${p})?${b}${l}${$}`;
              case "**/*.*":
                return `(?:${g}${globstar(u3)}${p})?${b}${$}${i2}${l}${$}`;
              case "**/.*":
                return `(?:${g}${globstar(u3)}${p})?${i2}${l}${$}`;
              default: {
                const e4 = /^(.*?)\.(\w+)$/.exec(t4);
                if (!e4) return;
                const u4 = create(e4[1]);
                if (!u4) return;
                return u4 + i2 + e4[2];
              }
            }
          };
          const x = o.removePrefix(t3, y);
          let S = create(x);
          if (S && u3.strictSlashes !== true) {
            S += `${p}?`;
          }
          return S;
        };
        t2.exports = parse;
      }, 510: (t2, e2, u2) => {
        const n = u2(716);
        const o = u2(697);
        const s = u2(96);
        const r = u2(154);
        const isObject = (t3) => t3 && typeof t3 === "object" && !Array.isArray(t3);
        const picomatch = (t3, e3, u3 = false) => {
          if (Array.isArray(t3)) {
            const n3 = t3.map(((t4) => picomatch(t4, e3, u3)));
            const arrayMatcher = (t4) => {
              for (const e4 of n3) {
                const u4 = e4(t4);
                if (u4) return u4;
              }
              return false;
            };
            return arrayMatcher;
          }
          const n2 = isObject(t3) && t3.tokens && t3.input;
          if (t3 === "" || typeof t3 !== "string" && !n2) {
            throw new TypeError("Expected pattern to be a non-empty string");
          }
          const o2 = e3 || {};
          const s2 = o2.windows;
          const r2 = n2 ? picomatch.compileRe(t3, e3) : picomatch.makeRe(t3, e3, false, true);
          const a = r2.state;
          delete r2.state;
          let isIgnored = () => false;
          if (o2.ignore) {
            const t4 = { ...e3, ignore: null, onMatch: null, onResult: null };
            isIgnored = picomatch(o2.ignore, t4, u3);
          }
          const matcher = (u4, n3 = false) => {
            const { isMatch: i, match: c, output: p } = picomatch.test(u4, r2, e3, { glob: t3, posix: s2 });
            const l = { glob: t3, state: a, regex: r2, posix: s2, input: u4, output: p, match: c, isMatch: i };
            if (typeof o2.onResult === "function") {
              o2.onResult(l);
            }
            if (i === false) {
              l.isMatch = false;
              return n3 ? l : false;
            }
            if (isIgnored(u4)) {
              if (typeof o2.onIgnore === "function") {
                o2.onIgnore(l);
              }
              l.isMatch = false;
              return n3 ? l : false;
            }
            if (typeof o2.onMatch === "function") {
              o2.onMatch(l);
            }
            return n3 ? l : true;
          };
          if (u3) {
            matcher.state = a;
          }
          return matcher;
        };
        picomatch.test = (t3, e3, u3, { glob: n2, posix: o2 } = {}) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected input to be a string");
          }
          if (t3 === "") {
            return { isMatch: false, output: "" };
          }
          const r2 = u3 || {};
          const a = r2.format || (o2 ? s.toPosixSlashes : null);
          let i = t3 === n2;
          let c = i && a ? a(t3) : t3;
          if (i === false) {
            c = a ? a(t3) : t3;
            i = c === n2;
          }
          if (i === false || r2.capture === true) {
            if (r2.matchBase === true || r2.basename === true) {
              i = picomatch.matchBase(t3, e3, u3, o2);
            } else {
              i = e3.exec(c);
            }
          }
          return { isMatch: Boolean(i), match: i, output: c };
        };
        picomatch.matchBase = (t3, e3, u3) => {
          const n2 = e3 instanceof RegExp ? e3 : picomatch.makeRe(e3, u3);
          return n2.test(s.basename(t3));
        };
        picomatch.isMatch = (t3, e3, u3) => picomatch(e3, u3)(t3);
        picomatch.parse = (t3, e3) => {
          if (Array.isArray(t3)) return t3.map(((t4) => picomatch.parse(t4, e3)));
          return o(t3, { ...e3, fastpaths: false });
        };
        picomatch.scan = (t3, e3) => n(t3, e3);
        picomatch.compileRe = (t3, e3, u3 = false, n2 = false) => {
          if (u3 === true) {
            return t3.output;
          }
          const o2 = e3 || {};
          const s2 = o2.contains ? "" : "^";
          const r2 = o2.contains ? "" : "$";
          let a = `${s2}(?:${t3.output})${r2}`;
          if (t3 && t3.negated === true) {
            a = `^(?!${a}).*$`;
          }
          const i = picomatch.toRegex(a, e3);
          if (n2 === true) {
            i.state = t3;
          }
          return i;
        };
        picomatch.makeRe = (t3, e3 = {}, u3 = false, n2 = false) => {
          if (!t3 || typeof t3 !== "string") {
            throw new TypeError("Expected a non-empty string");
          }
          let s2 = { negated: false, fastpaths: true };
          if (e3.fastpaths !== false && (t3[0] === "." || t3[0] === "*")) {
            s2.output = o.fastpaths(t3, e3);
          }
          if (!s2.output) {
            s2 = o(t3, e3);
          }
          return picomatch.compileRe(s2, e3, u3, n2);
        };
        picomatch.toRegex = (t3, e3) => {
          try {
            const u3 = e3 || {};
            return new RegExp(t3, u3.flags || (u3.nocase ? "i" : ""));
          } catch (t4) {
            if (e3 && e3.debug === true) throw t4;
            return /$^/;
          }
        };
        picomatch.constants = r;
        t2.exports = picomatch;
      }, 716: (t2, e2, u2) => {
        const n = u2(96);
        const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u2(154);
        const isPathSeparator = (t3) => t3 === p || t3 === r;
        const depth = (t3) => {
          if (t3.isPrefix !== true) {
            t3.depth = t3.isGlobstar ? Infinity : 1;
          }
        };
        const scan = (t3, e3) => {
          const u3 = e3 || {};
          const b = t3.length - 1;
          const C = u3.parts === true || u3.scanToEnd === true;
          const y = [];
          const $ = [];
          const x = [];
          let S = t3;
          let H = -1;
          let v = 0;
          let d = 0;
          let L = false;
          let T = false;
          let O = false;
          let k = false;
          let m = false;
          let w = false;
          let N = false;
          let I = false;
          let B = false;
          let G = false;
          let D = 0;
          let M;
          let P;
          let K = { value: "", depth: 0, isGlob: false };
          const eos = () => H >= b;
          const peek = () => S.charCodeAt(H + 1);
          const advance = () => {
            M = P;
            return S.charCodeAt(++H);
          };
          while (H < b) {
            P = advance();
            let t4;
            if (P === r) {
              N = K.backslashes = true;
              P = advance();
              if (P === l) {
                w = true;
              }
              continue;
            }
            if (w === true || P === l) {
              D++;
              while (eos() !== true && (P = advance())) {
                if (P === r) {
                  N = K.backslashes = true;
                  advance();
                  continue;
                }
                if (P === l) {
                  D++;
                  continue;
                }
                if (w !== true && P === i && (P = advance()) === i) {
                  L = K.isBrace = true;
                  O = K.isGlob = true;
                  G = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (w !== true && P === a) {
                  L = K.isBrace = true;
                  O = K.isGlob = true;
                  G = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (P === E) {
                  D--;
                  if (D === 0) {
                    w = false;
                    L = K.isBrace = true;
                    G = true;
                    break;
                  }
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === p) {
              y.push(H);
              $.push(K);
              K = { value: "", depth: 0, isGlob: false };
              if (G === true) continue;
              if (M === i && H === v + 1) {
                v += 2;
                continue;
              }
              d = H + 1;
              continue;
            }
            if (u3.noext !== true) {
              const t5 = P === _ || P === s || P === o || P === R || P === c;
              if (t5 === true && peek() === f) {
                O = K.isGlob = true;
                k = K.isExtglob = true;
                G = true;
                if (P === c && H === v) {
                  B = true;
                }
                if (C === true) {
                  while (eos() !== true && (P = advance())) {
                    if (P === r) {
                      N = K.backslashes = true;
                      P = advance();
                      continue;
                    }
                    if (P === h) {
                      O = K.isGlob = true;
                      G = true;
                      break;
                    }
                  }
                  continue;
                }
                break;
              }
            }
            if (P === o) {
              if (M === o) m = K.isGlobstar = true;
              O = K.isGlob = true;
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === R) {
              O = K.isGlob = true;
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === A) {
              while (eos() !== true && (t4 = advance())) {
                if (t4 === r) {
                  N = K.backslashes = true;
                  advance();
                  continue;
                }
                if (t4 === g) {
                  T = K.isBracket = true;
                  O = K.isGlob = true;
                  G = true;
                  break;
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (u3.nonegate !== true && P === c && H === v) {
              I = K.negated = true;
              v++;
              continue;
            }
            if (u3.noparen !== true && P === f) {
              O = K.isGlob = true;
              if (C === true) {
                while (eos() !== true && (P = advance())) {
                  if (P === f) {
                    N = K.backslashes = true;
                    P = advance();
                    continue;
                  }
                  if (P === h) {
                    G = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
            if (O === true) {
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
          }
          if (u3.noext === true) {
            k = false;
            O = false;
          }
          let U = S;
          let X = "";
          let F = "";
          if (v > 0) {
            X = S.slice(0, v);
            S = S.slice(v);
            d -= v;
          }
          if (U && O === true && d > 0) {
            U = S.slice(0, d);
            F = S.slice(d);
          } else if (O === true) {
            U = "";
            F = S;
          } else {
            U = S;
          }
          if (U && U !== "" && U !== "/" && U !== S) {
            if (isPathSeparator(U.charCodeAt(U.length - 1))) {
              U = U.slice(0, -1);
            }
          }
          if (u3.unescape === true) {
            if (F) F = n.removeBackslashes(F);
            if (U && N === true) {
              U = n.removeBackslashes(U);
            }
          }
          const Q = { prefix: X, input: t3, start: v, base: U, glob: F, isBrace: L, isBracket: T, isGlob: O, isExtglob: k, isGlobstar: m, negated: I, negatedExtglob: B };
          if (u3.tokens === true) {
            Q.maxDepth = 0;
            if (!isPathSeparator(P)) {
              $.push(K);
            }
            Q.tokens = $;
          }
          if (u3.parts === true || u3.tokens === true) {
            let e4;
            for (let n2 = 0; n2 < y.length; n2++) {
              const o2 = e4 ? e4 + 1 : v;
              const s2 = y[n2];
              const r2 = t3.slice(o2, s2);
              if (u3.tokens) {
                if (n2 === 0 && v !== 0) {
                  $[n2].isPrefix = true;
                  $[n2].value = X;
                } else {
                  $[n2].value = r2;
                }
                depth($[n2]);
                Q.maxDepth += $[n2].depth;
              }
              if (n2 !== 0 || r2 !== "") {
                x.push(r2);
              }
              e4 = s2;
            }
            if (e4 && e4 + 1 < t3.length) {
              const n2 = t3.slice(e4 + 1);
              x.push(n2);
              if (u3.tokens) {
                $[$.length - 1].value = n2;
                depth($[$.length - 1]);
                Q.maxDepth += $[$.length - 1].depth;
              }
            }
            Q.slashes = y;
            Q.parts = x;
          }
          return Q;
        };
        t2.exports = scan;
      }, 96: (t2, e2, u2) => {
        const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u2(154);
        e2.isObject = (t3) => t3 !== null && typeof t3 === "object" && !Array.isArray(t3);
        e2.hasRegexChars = (t3) => s.test(t3);
        e2.isRegexChar = (t3) => t3.length === 1 && e2.hasRegexChars(t3);
        e2.escapeRegex = (t3) => t3.replace(r, "\\$1");
        e2.toPosixSlashes = (t3) => t3.replace(n, "/");
        e2.removeBackslashes = (t3) => t3.replace(o, ((t4) => t4 === "\\" ? "" : t4));
        e2.escapeLast = (t3, u3, n2) => {
          const o2 = t3.lastIndexOf(u3, n2);
          if (o2 === -1) return t3;
          if (t3[o2 - 1] === "\\") return e2.escapeLast(t3, u3, o2 - 1);
          return `${t3.slice(0, o2)}\\${t3.slice(o2)}`;
        };
        e2.removePrefix = (t3, e3 = {}) => {
          let u3 = t3;
          if (u3.startsWith("./")) {
            u3 = u3.slice(2);
            e3.prefix = "./";
          }
          return u3;
        };
        e2.wrapOutput = (t3, e3 = {}, u3 = {}) => {
          const n2 = u3.contains ? "" : "^";
          const o2 = u3.contains ? "" : "$";
          let s2 = `${n2}(?:${t3})${o2}`;
          if (e3.negated === true) {
            s2 = `(?:^(?!${s2}).*$)`;
          }
          return s2;
        };
        e2.basename = (t3, { windows: e3 } = {}) => {
          const u3 = t3.split(e3 ? /[\\/]/ : "/");
          const n2 = u3[u3.length - 1];
          if (n2 === "") {
            return u3[u3.length - 2];
          }
          return n2;
        };
      } };
      var e = {};
      function __nccwpck_require__(u2) {
        var n = e[u2];
        if (n !== void 0) {
          return n.exports;
        }
        var o = e[u2] = { exports: {} };
        var s = true;
        try {
          t[u2](o, o.exports, __nccwpck_require__);
          s = false;
        } finally {
          if (s) delete e[u2];
        }
        return o.exports;
      }
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var u = __nccwpck_require__(170);
      module.exports = u;
    })();
  }
});

// node_modules/next/dist/shared/lib/match-remote-pattern.js
var require_match_remote_pattern = __commonJS({
  "node_modules/next/dist/shared/lib/match-remote-pattern.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      hasMatch: function() {
        return hasMatch;
      },
      matchRemotePattern: function() {
        return matchRemotePattern;
      }
    });
    var _picomatch = require_picomatch();
    function matchRemotePattern(pattern, url) {
      if (pattern.protocol !== void 0) {
        const actualProto = url.protocol.slice(0, -1);
        if (pattern.protocol !== actualProto) {
          return false;
        }
      }
      if (pattern.port !== void 0) {
        if (pattern.port !== url.port) {
          return false;
        }
      }
      if (pattern.hostname === void 0) {
        throw new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern));
      } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
          return false;
        }
      }
      var _pattern_pathname;
      if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
        dot: true
      }).test(url.pathname)) {
        return false;
      }
      return true;
    }
    function hasMatch(domains, remotePatterns, url) {
      return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
    }
  }
});

// node_modules/next/dist/shared/lib/image-loader.js
var require_image_loader = __commonJS({
  "node_modules/next/dist/shared/lib/image-loader.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function defaultLoader(param) {
      let { config, src, width, quality } = param;
      if (process.env.NODE_ENV !== "production") {
        const missingValues = [];
        if (!src) missingValues.push("src");
        if (!width) missingValues.push("width");
        if (missingValues.length > 0) {
          throw new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src,
            width,
            quality
          }));
        }
        if (src.startsWith("//")) {
          throw new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
        }
        if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
          let parsedSrc;
          try {
            parsedSrc = new URL(src);
          } catch (err) {
            console.error(err);
            throw new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasMatch } = require_match_remote_pattern();
            if (!hasMatch(config.domains, config.remotePatterns, parsedSrc)) {
              throw new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
            }
          }
        }
      }
      return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    defaultLoader.__next_img_default = true;
    var _default = defaultLoader;
  }
});

// node_modules/next/dist/client/image-component.js
var require_image_component = __commonJS({
  "node_modules/next/dist/client/image-component.js"(exports$1, module) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "Image", {
      enumerable: true,
      get: function() {
        return Image4;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _reactdom = /* @__PURE__ */ _interop_require_default._(__require("react-dom"));
    var _head = /* @__PURE__ */ _interop_require_default._(require_head());
    var _getimgprops = require_get_img_props();
    var _imageconfig = require_image_config();
    var _imageconfigcontextsharedruntime = require_image_config_context_shared_runtime();
    var _warnonce = require_warn_once();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    var configEnv = process.env.__NEXT_IMAGE_OPTS;
    if (typeof window === "undefined") {
      globalThis.__NEXT_IMAGE_IMPORTED = true;
    }
    function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
      const src = img == null ? void 0 : img.src;
      if (!img || img["data-loaded-src"] === src) {
        return;
      }
      img["data-loaded-src"] = src;
      const p = "decode" in img ? img.decode() : Promise.resolve();
      p.catch(() => {
      }).then(() => {
        if (!img.parentElement || !img.isConnected) {
          return;
        }
        if (placeholder !== "empty") {
          setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
          const event = new Event("load");
          Object.defineProperty(event, "target", {
            writable: false,
            value: img
          });
          let prevented = false;
          let stopped = false;
          onLoadRef.current({
            ...event,
            nativeEvent: event,
            currentTarget: img,
            target: img,
            isDefaultPrevented: () => prevented,
            isPropagationStopped: () => stopped,
            persist: () => {
            },
            preventDefault: () => {
              prevented = true;
              event.preventDefault();
            },
            stopPropagation: () => {
              stopped = true;
              event.stopPropagation();
            }
          });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
          onLoadingCompleteRef.current(img);
        }
        if (process.env.NODE_ENV !== "production") {
          const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
          if (img.getAttribute("data-nimg") === "fill") {
            if (!unoptimized && (!sizesInput || sizesInput === "100vw")) {
              let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
              if (widthViewportRatio < 0.6) {
                if (sizesInput === "100vw") {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                } else {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                }
              }
            }
            if (img.parentElement) {
              const { position } = window.getComputedStyle(img.parentElement);
              const valid = [
                "absolute",
                "fixed",
                "relative"
              ];
              if (!valid.includes(position)) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
              }
            }
            if (img.height === 0) {
              (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
            }
          }
          const heightModified = img.height.toString() !== img.getAttribute("height");
          const widthModified = img.width.toString() !== img.getAttribute("width");
          if (heightModified && !widthModified || !heightModified && widthModified) {
            (0, _warnonce.warnOnce)('Image with src "' + origSrc + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
          }
        }
      });
    }
    function getDynamicProps(fetchPriority) {
      if (Boolean(_react.use)) {
        return {
          fetchPriority
        };
      }
      return {
        fetchpriority: fetchPriority
      };
    }
    var ImageElement = /* @__PURE__ */ (0, _react.forwardRef)((param, forwardedRef) => {
      let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading,
        width,
        height,
        decoding,
        "data-nimg": fill ? "fill" : "1",
        className,
        style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes,
        srcSet,
        src,
        ref: (0, _react.useCallback)((img) => {
          if (forwardedRef) {
            if (typeof forwardedRef === "function") forwardedRef(img);
            else if (typeof forwardedRef === "object") {
              forwardedRef.current = img;
            }
          }
          if (!img) {
            return;
          }
          if (onError) {
            img.src = img.src;
          }
          if (process.env.NODE_ENV !== "production") {
            if (!src) {
              console.error('Image is missing required "src" property:', img);
            }
            if (img.getAttribute("alt") === null) {
              console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
            }
          }
          if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
          }
        }, [
          src,
          placeholder,
          onLoadRef,
          onLoadingCompleteRef,
          setBlurComplete,
          onError,
          unoptimized,
          sizesInput,
          forwardedRef
        ]),
        onLoad: (event) => {
          const img = event.currentTarget;
          handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event) => {
          setShowAltText(true);
          if (placeholder !== "empty") {
            setBlurComplete(true);
          }
          if (onError) {
            onError(event);
          }
        }
      });
    });
    function ImagePreload(param) {
      let { isAppRouter, imgAttributes } = param;
      const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
      };
      if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(
          imgAttributes.src,
          // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
          opts
        );
        return null;
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_head.default, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("link", {
          rel: "preload",
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          href: imgAttributes.srcSet ? void 0 : imgAttributes.src,
          ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
      });
    }
    var Image4 = /* @__PURE__ */ (0, _react.forwardRef)((props, forwardedRef) => {
      const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
      const isAppRouter = !pagesRouter;
      const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
      const config = (0, _react.useMemo)(() => {
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b) => a - b);
        const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
        return {
          ...c,
          allSizes,
          deviceSizes
        };
      }, [
        configContext
      ]);
      const { onLoad, onLoadingComplete } = props;
      const onLoadRef = (0, _react.useRef)(onLoad);
      (0, _react.useEffect)(() => {
        onLoadRef.current = onLoad;
      }, [
        onLoad
      ]);
      const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
      (0, _react.useEffect)(() => {
        onLoadingCompleteRef.current = onLoadingComplete;
      }, [
        onLoadingComplete
      ]);
      const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
      const [showAltText, setShowAltText] = (0, _react.useState)(false);
      const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
      });
      return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
          /* @__PURE__ */ (0, _jsxruntime.jsx)(ImageElement, {
            ...imgAttributes,
            unoptimized: imgMeta.unoptimized,
            placeholder: imgMeta.placeholder,
            fill: imgMeta.fill,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            setShowAltText,
            sizesInput: props.sizes,
            ref: forwardedRef
          }),
          imgMeta.priority ? /* @__PURE__ */ (0, _jsxruntime.jsx)(ImagePreload, {
            isAppRouter,
            imgAttributes
          }) : null
        ]
      });
    });
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/shared/lib/image-external.js
var require_image_external = __commonJS({
  "node_modules/next/dist/shared/lib/image-external.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      default: function() {
        return _default;
      },
      getImageProps: function() {
        return getImageProps;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _getimgprops = require_get_img_props();
    var _imagecomponent = require_image_component();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    function getImageProps(imgProps) {
      const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: process.env.__NEXT_IMAGE_OPTS
      });
      for (const [key, value] of Object.entries(props)) {
        if (value === void 0) {
          delete props[key];
        }
      }
      return {
        props
      };
    }
    var _default = _imagecomponent.Image;
  }
});

// node_modules/next/image.js
var require_image = __commonJS({
  "node_modules/next/image.js"(exports$1, module) {
    module.exports = require_image_external();
  }
});

// node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      AppRouterContext: function() {
        return AppRouterContext;
      },
      GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
      },
      LayoutRouterContext: function() {
        return LayoutRouterContext;
      },
      MissingSlotContext: function() {
        return MissingSlotContext;
      },
      TemplateContext: function() {
        return TemplateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      PathParamsContext: function() {
        return PathParamsContext;
      },
      PathnameContext: function() {
        return PathnameContext;
      },
      SearchParamsContext: function() {
        return SearchParamsContext;
      }
    });
    var _react = __require("react");
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
    }
  }
});

// node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS({
  "node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "getSegmentValue", {
      enumerable: true,
      get: function() {
        return getSegmentValue;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "node_modules/next/dist/shared/lib/segment.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// node_modules/next/dist/client/components/async-local-storage.js
var require_async_local_storage = __commonJS({
  "node_modules/next/dist/client/components/async-local-storage.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "createAsyncLocalStorage", {
      enumerable: true,
      get: function() {
        return createAsyncLocalStorage;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
    };
    var maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/request-async-storage-instance.js
var require_request_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/request-async-storage-instance.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "requestAsyncStorage", {
      enumerable: true,
      get: function() {
        return requestAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/request-async-storage.external.js
var require_request_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/request-async-storage.external.js"(exports$1, module) {
    "TURBOPACK { transition: next-shared }";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      getExpectedRequestStore: function() {
        return getExpectedRequestStore;
      },
      requestAsyncStorage: function() {
        return _requestasyncstorageinstance.requestAsyncStorage;
      }
    });
    var _requestasyncstorageinstance = require_request_async_storage_instance();
    function getExpectedRequestStore(callingExpression) {
      const store = _requestasyncstorageinstance.requestAsyncStorage.getStore();
      if (store) return store;
      throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/action-async-storage-instance.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return actionAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/action-async-storage.external.js"(exports$1, module) {
    "TURBOPACK { transition: next-shared }";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorage;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "node_modules/next/dist/client/components/redirect-status-code.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "RedirectStatusCode", {
      enumerable: true,
      get: function() {
        return RedirectStatusCode;
      }
    });
    var RedirectStatusCode;
    (function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
    })(RedirectStatusCode || (RedirectStatusCode = {}));
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "node_modules/next/dist/client/components/redirect.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      RedirectType: function() {
        return RedirectType;
      },
      getRedirectError: function() {
        return getRedirectError;
      },
      getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
      },
      getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
      },
      getURLFromRedirectError: function() {
        return getURLFromRedirectError;
      },
      isRedirectError: function() {
        return isRedirectError;
      },
      permanentRedirect: function() {
        return permanentRedirect;
      },
      redirect: function() {
        return redirect;
      }
    });
    var _requestasyncstorageexternal = require_request_async_storage_external();
    var _actionasyncstorageexternal = require_action_async_storage_external();
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    var RedirectType;
    (function(RedirectType2) {
      RedirectType2["push"] = "push";
      RedirectType2["replace"] = "replace";
    })(RedirectType || (RedirectType = {}));
    function getRedirectError(url, type, statusCode) {
      if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
      const error = new Error(REDIRECT_ERROR_CODE);
      error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
      const requestStore = _requestasyncstorageexternal.requestAsyncStorage.getStore();
      if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
      }
      return error;
    }
    function redirect(url, type) {
      if (type === void 0) type = "replace";
      const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
      throw getRedirectError(
        url,
        type,
        // If we're in an action, we want to use a 303 redirect
        // as we don't want the POST request to follow the redirect,
        // as it could result in erroneous re-submissions.
        (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.TemporaryRedirect
      );
    }
    function permanentRedirect(url, type) {
      if (type === void 0) type = "replace";
      const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
      throw getRedirectError(
        url,
        type,
        // If we're in an action, we want to use a 303 redirect
        // as we don't want the POST request to follow the redirect,
        // as it could result in erroneous re-submissions.
        (actionStore == null ? void 0 : actionStore.isAction) ? _redirectstatuscode.RedirectStatusCode.SeeOther : _redirectstatuscode.RedirectStatusCode.PermanentRedirect
      );
    }
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [errorCode, type, destination, status] = error.digest.split(";", 4);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    function getURLFromRedirectError(error) {
      if (!isRedirectError(error)) return null;
      return error.digest.split(";", 3)[2];
    }
    function getRedirectTypeFromError(error) {
      if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
      }
      return error.digest.split(";", 2)[1];
    }
    function getRedirectStatusCodeFromError(error) {
      if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
      }
      return Number(error.digest.split(";", 4)[3]);
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "node_modules/next/dist/client/components/not-found.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      isNotFoundError: function() {
        return isNotFoundError;
      },
      notFound: function() {
        return notFound;
      }
    });
    var NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
    function notFound() {
      const error = new Error(NOT_FOUND_ERROR_CODE);
      error.digest = NOT_FOUND_ERROR_CODE;
      throw error;
    }
    function isNotFoundError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error)) {
        return false;
      }
      return error.digest === NOT_FOUND_ERROR_CODE;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "node_modules/next/dist/client/components/navigation.react-server.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _redirect.RedirectType;
      },
      notFound: function() {
        return _notfound.notFound;
      },
      permanentRedirect: function() {
        return _redirect.permanentRedirect;
      },
      redirect: function() {
        return _redirect.redirect;
      }
    });
    var _redirect = require_redirect();
    var _notfound = require_not_found();
    var ReadonlyURLSearchParamsError = class extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports$1) {
    "use client";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
      },
      useServerInsertedHTML: function() {
        return useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
  }
});

// node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super("Bail out to client-side rendering: " + reason);
        this.reason = reason;
        this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-async-storage-instance.js
var require_static_generation_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/static-generation-async-storage-instance.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "staticGenerationAsyncStorage", {
      enumerable: true,
      get: function() {
        return staticGenerationAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-async-storage.external.js
var require_static_generation_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/static-generation-async-storage.external.js"(exports$1, module) {
    "TURBOPACK { transition: next-shared }";
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "staticGenerationAsyncStorage", {
      enumerable: true,
      get: function() {
        return _staticgenerationasyncstorageinstance.staticGenerationAsyncStorage;
      }
    });
    var _staticgenerationasyncstorageinstance = require_static_generation_async_storage_instance();
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS({
  "node_modules/next/dist/client/components/bailout-to-client-rendering.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "bailoutToClientRendering", {
      enumerable: true,
      get: function() {
        return bailoutToClientRendering;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _staticgenerationasyncstorageexternal = require_static_generation_async_storage_external();
    function bailoutToClientRendering(reason) {
      const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
      if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) return;
      if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) throw new _bailouttocsr.BailoutToCSRError(reason);
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "node_modules/next/dist/client/components/navigation.js"(exports$1, module) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports$1, {
      ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _navigationreactserver.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      },
      notFound: function() {
        return _navigationreactserver.notFound;
      },
      permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
      },
      redirect: function() {
        return _navigationreactserver.redirect;
      },
      useParams: function() {
        return useParams;
      },
      usePathname: function() {
        return usePathname2;
      },
      useRouter: function() {
        return useRouter;
      },
      useSearchParams: function() {
        return useSearchParams;
      },
      useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
      },
      useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
      },
      useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }
    });
    var _react = __require("react");
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _getsegmentvalue = require_get_segment_value();
    var _segment = require_segment();
    var _navigationreactserver = require_navigation_react_server();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    function useSearchParams() {
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined") {
        const { bailoutToClientRendering } = require_bailout_to_client_rendering();
        bailoutToClientRendering("useSearchParams()");
      }
      return readonlySearchParams;
    }
    function usePathname2() {
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    }
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw new Error("invariant expected app router to be mounted");
      }
      return router;
    }
    function useParams() {
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
      if (first === void 0) first = true;
      if (segmentPath === void 0) segmentPath = [];
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
      if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    function useSelectedLayoutSegments(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      return getSelectedLayoutSegmentPath(context.tree, parallelRouteKey);
    }
    function useSelectedLayoutSegment(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
      }
      const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
      return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
    }
    if ((typeof exports$1.default === "function" || typeof exports$1.default === "object" && exports$1.default !== null) && typeof exports$1.default.__esModule === "undefined") {
      Object.defineProperty(exports$1.default, "__esModule", { value: true });
      Object.assign(exports$1.default, exports$1);
      module.exports = exports$1.default;
    }
  }
});

// node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "node_modules/next/navigation.js"(exports$1, module) {
    module.exports = require_navigation();
  }
});

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// components/AnimatedText/AnimatedText.css
styleInject('.container {\n  width: 100%;\n  padding-right: 1%;\n  overflow: hidden;\n}\n.container .text {\n  position: relative;\n  color: #ed0101;\n  font-size: 6vh;\n  font-weight: 600;\n}\n.container .text.first-text {\n  color: #fff;\n}\n.text.sec-text::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #131a25;\n  animation: typing 1s steps(10) forwards, removeMask 0s linear 1s forwards;\n}\n.text.sec-text::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  border-left: 2px solid #4070f4;\n  animation: cursorMove 1s steps(10) forwards, cursorFlash 0.7s infinite;\n}\n@keyframes cursorMove {\n  to {\n    left: 100%;\n  }\n}\n@keyframes typing {\n  to {\n    width: 0%;\n  }\n}\n@keyframes cursorFlash {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes removeMask {\n  to {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n');

// components/AnimatedText/AnimatedText.tsx
function AnimatedText({
  prefix,
  textContent
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "container" }, prefix ? /* @__PURE__ */ React.createElement("span", { className: "text first-text" }, prefix) : null, /* @__PURE__ */ React.createElement("span", { className: "text sec-text" }, textContent));
}
var button = tv({
  base: "rounded-md my-1",
  variants: {
    baseColour: {
      red: "bg-themeRed",
      orange: "bg-themeOrange",
      blue: "bg-themeBlue",
      green: "bg-themeGreen",
      purple: "bg-themePurple",
      black: "bg-themeBlack",
      orangeOutline: "bg-transparent border-2 border-themeOrange text-themeOrange"
    },
    textColour: {
      white: "text-white"
    },
    hoverStyle: {
      white: "hover:bg-transparent hover:outline outline-2 outline-white transition-colors duration-200",
      redOffset: "hover:bg-red-700",
      orangeOffset: "hover:bg-orange-600",
      blueOffset: "hover:bg-blue-700",
      greenOffset: "hover:bg-green-900",
      purpleOffset: "hover:bg-purple-700",
      blackOffset: "hover:bg-gray-800",
      orangeFill: "hover:bg-themeOrange hover:text-white transition-colors duration-200",
      orangeOutline: "hover:bg-transparent hover:border-themeOrange border-2 border-themeOrange"
    },
    buttonSize: {
      small: "py-2 px-4 font-bold",
      large: "px-6 py-3 font-bold"
    },
    display: {
      inline: "inline-block",
      block: "block w-full"
    }
  },
  defaultVariants: {
    baseColour: "red",
    display: "inline",
    hoverStyle: "white",
    textColour: "white",
    buttonSize: "large"
  }
});
var Button = ({
  hoverStyle,
  baseColour,
  textColour,
  display,
  buttonSize,
  className,
  ...props
}) => {
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: button({
        baseColour,
        display,
        hoverStyle,
        textColour,
        buttonSize,
        className
      }),
      ...props
    }
  );
};
var Button_default = Button;

// components/InformationCard/InformationCard.tsx
var import_image = __toESM(require_image());
function InformationCard({
  informationCard,
  cardWidth,
  fade,
  buttonClassName
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `transition-all duration-300 ease-in-out w-[240px] sm:w-[320px] bg-white rounded-2xl shadow-2xl drop-shadow-xl mb-16 flex flex-col h-[480px] sm:h-[540px] md:h-[480px] ${fade}`,
      style: {
        minWidth: cardWidth,
        maxWidth: cardWidth
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "h-1/2 w-full overflow-hidden rounded-t-2xl border-b-2 border-gray-100 relative" }, /* @__PURE__ */ React.createElement("a", { href: informationCard.linkOne.href, target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ React.createElement(
      import_image.default,
      {
        src: informationCard.image,
        alt: `Image of ${informationCard.title} project`,
        className: `w-full h-full object-cover ${informationCard.scaleImage || ""}`,
        width: cardWidth,
        height: 240
      }
    )), informationCard.stack && informationCard.stack.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-2 left-2 flex flex-wrap gap-1.5 z-10" }, informationCard.stack.map((tech, index) => /* @__PURE__ */ React.createElement(
      "span",
      {
        key: index,
        className: "bg-themeOrange text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-md"
      },
      tech
    )))),
    /* @__PURE__ */ React.createElement("div", { className: "h-1/2 flex flex-col justify-between text-center" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 sm:px-8 py-4 flex-1 flex flex-col justify-center" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-gray-900 pb-2" }, informationCard.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm leading-relaxed" }, informationCard.text)), /* @__PURE__ */ React.createElement("div", { className: "flex w-full" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: informationCard.linkOne.href,
        target: "_blank",
        rel: "noreferrer",
        className: `${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center ${informationCard.linkTwo ? "flex-1 rounded-bl-2xl border-r-2 border-white" : "w-full rounded-b-2xl"}`
      },
      informationCard.linkOne.text
    ), informationCard.linkTwo && /* @__PURE__ */ React.createElement(
      "a",
      {
        href: informationCard.linkTwo.href,
        target: "_blank",
        rel: "noreferrer",
        className: `${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center flex-1 rounded-br-2xl`
      },
      informationCard.linkTwo.text
    )))
  );
}

// components/InformationCard/HiddenInformationCard.tsx
var import_image2 = __toESM(require_image());
function HiddenInformationCard({ informationCard }) {
  return /* @__PURE__ */ React.createElement("div", { className: "hidden" }, /* @__PURE__ */ React.createElement(
    import_image2.default,
    {
      src: informationCard.image,
      alt: `Image of ${informationCard.title} project`,
      width: 320,
      height: 240
    }
  ), /* @__PURE__ */ React.createElement("h4", null, informationCard.title), /* @__PURE__ */ React.createElement("p", null, informationCard.text));
}
var directionButtonsStyles = tv({
  slots: {
    icon: "w-6 h-6"
  },
  variants: {
    buttonColour: {
      orange: {
        icon: "text-themeOrange"
      },
      black: {
        icon: "text-themeBlack"
      }
    }
  },
  defaultVariants: {
    buttonColour: "orange"
  }
});
function DirectionButtons({
  onPrevious,
  onNext,
  buttonColour = "orange",
  buttonClassName
}) {
  const { icon } = directionButtonsStyles({ buttonColour });
  return /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-12 mb-10" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onPrevious,
      className: "bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110",
      "aria-label": "Previous testimonial"
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 26 24",
        strokeWidth: 4,
        stroke: "currentColor",
        className: buttonClassName ?? icon()
      },
      /* @__PURE__ */ React.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.75 19.5L8.25 12l7.5-7.5"
        }
      )
    )
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onNext,
      className: "bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110",
      "aria-label": "Next testimonial"
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 4,
        stroke: "currentColor",
        className: buttonClassName ?? icon()
      },
      /* @__PURE__ */ React.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.25 4.5l7.5 7.5-7.5 7.5"
        }
      )
    )
  ));
}

// components/Carousel/Carousel.tsx
var carouselStyles = tv({
  slots: {
    button: ""
  },
  variants: {
    buttonColour: {
      orange: {
        button: "bg-themeOrange hover:bg-themeBlack"
      },
      black: {
        button: "bg-themeBlack hover:bg-themeOrange"
      }
    }
  },
  defaultVariants: {
    buttonColour: "orange"
  }
});
var CARD_WIDTH = 320;
var GAP = 32;
function Carousel({
  informationCards,
  autoRotate = false,
  buttonColour = "orange",
  className
}) {
  if (informationCards.length < 3) {
    throw new Error("Carousel component requires at least 3 information cards");
  }
  const { button: button2 } = carouselStyles({ buttonColour });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
  const [gap, setGap] = useState(GAP);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(240);
        setGap(12);
      } else {
        setCardWidth(CARD_WIDTH);
        setGap(GAP);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      goToIndex(currentIndex + 1);
    }, 5e3);
    return () => clearInterval(interval);
  }, [currentIndex, autoRotate]);
  const goToIndex = (idx) => {
    setTransition(true);
    let next = idx;
    if (next < 0) next = informationCards.length - 1;
    if (next >= informationCards.length) next = 0;
    setCurrentIndex(next);
  };
  const onTransitionEnd = () => {
  };
  const getVisibleIndexes = () => {
    const left = (currentIndex - 1 + informationCards.length) % informationCards.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % informationCards.length;
    return [left, center, right];
  };
  const [leftIndex, centerIndex, rightIndex] = getVisibleIndexes();
  const getTranslateX = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      const viewportCenter = window.innerWidth / 2;
      const centerTilePosition = cardWidth + gap + cardWidth / 2;
      return viewportCenter - centerTilePosition;
    }
    return 0;
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center w-full md:w-auto relative" }, /* @__PURE__ */ React.createElement("div", { className: "overflow-hidden w-full" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: carouselRef,
      className: "flex gap-3 sm:gap-8 select-none",
      style: {
        width: `${(cardWidth + gap) * 3 - gap}px`,
        transform: `translateX(${getTranslateX()}px)`,
        transition: transition ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none"
      },
      onTransitionEnd
    },
    informationCards.map((informationCard, index) => {
      if (index === leftIndex || index === centerIndex || index === rightIndex)
        return null;
      return /* @__PURE__ */ React.createElement(
        HiddenInformationCard,
        {
          key: index,
          informationCard
        }
      );
    }),
    [leftIndex, centerIndex, rightIndex].map((pos) => {
      const t = informationCards[pos];
      let fade = "opacity-50 scale-90";
      if (pos === centerIndex) fade = "opacity-100 scale-100 z-10";
      return /* @__PURE__ */ React.createElement(
        InformationCard,
        {
          key: pos,
          informationCard: t,
          cardWidth,
          fade,
          buttonClassName: className ?? button2()
        }
      );
    })
  )), /* @__PURE__ */ React.createElement(
    DirectionButtons,
    {
      onPrevious: () => goToIndex(currentIndex - 1),
      onNext: () => goToIndex(currentIndex + 1),
      buttonColour,
      buttonClassName: className
    }
  ));
}
function Chart({
  chartTitle,
  chartColour,
  skills
}) {
  return /* @__PURE__ */ React3.createElement("div", { className: "w-[80%] md:w-1/2 lg:w-1/3 mx-auto p-5 bg-gray-800 shadow-2xl" }, /* @__PURE__ */ React3.createElement("h3", { className: "text-white text-2xl mb-6 tracking-wider" }, chartTitle), skills.map((skill) => /* @__PURE__ */ React3.createElement("div", { key: skill.name, className: "mb-5 w-full" }, /* @__PURE__ */ React3.createElement("div", { className: "flex justify-between mb-1" }, /* @__PURE__ */ React3.createElement("p", { className: "text-white font-bold tracking-wide" }, skill.name), /* @__PURE__ */ React3.createElement("p", { className: "text-white font-bold" }, skill.level, "%")), /* @__PURE__ */ React3.createElement("div", { className: "bg-gray-900 h-4 rounded" }, /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: `${chartColour} h-4 rounded`,
      style: { width: `${skill.level}%` }
    }
  )))));
}
var dropDownStyles = tv({
  slots: {
    button: ""
  },
  variants: {
    colour: {
      Orange: {
        button: "text-themeOrange"
      },
      Blue: {
        button: "text-themeBlue"
      },
      Green: {
        button: "text-themeGreen"
      },
      Red: {
        button: "text-themeRed"
      },
      Purple: {
        button: "text-themePurple"
      },
      Black: {
        button: "text-themeBlack"
      }
    }
  },
  defaultVariants: {
    colour: "Orange"
  }
});
function DropDown({
  isOpen,
  onToggle,
  children,
  primaryColour = "Orange",
  className,
  toggleText
}) {
  const { button: button2 } = dropDownStyles({
    colour: primaryColour
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      className: `mt-4 text-sm font-semibold ${className ?? button2()} hover:underline flex items-center gap-2`
    },
    isOpen ? toggleText == null ? void 0 : toggleText.CloseText : toggleText == null ? void 0 : toggleText.OpenText,
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`
      },
      "\u25BC"
    )
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`
    },
    children
  ));
}
function Footer() {
  return /* @__PURE__ */ React3.createElement("footer", { className: "bg-gray-800 text-white py-4" }, /* @__PURE__ */ React3.createElement("div", { className: "max-w-6xl mx-auto flex justify-center items-center space-x-4" }, /* @__PURE__ */ React3.createElement(
    "a",
    {
      href: "https://www.linkedin.com/in/danielbarrow92/",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "transition-colors"
    },
    /* @__PURE__ */ React3.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        className: "w-6 h-6"
      },
      /* @__PURE__ */ React3.createElement("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.867 0-2.154 1.46-2.154 2.968v5.697h-3v-10h2.879v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.596 1.999 3.596 4.597v5.598z" })
    )
  ), /* @__PURE__ */ React3.createElement("span", { className: "text-sm" }, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Daniel Barrow")));
}

// components/LayoutNavigation/LayoutNavigation.tsx
var import_navigation = __toESM(require_navigation2());

// components/Navigation/Navigation.tsx
function Navigation() {
  return /* @__PURE__ */ React.createElement("nav", { className: "sticky top-0 z-50 flex bg-white h-16 border-b border-gray-200 shadow-md" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "flex h-full items-center cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-10 w-10 bg-themeRed rounded-full items-center justify-center mx-4 text-white text-xs font-semibold border border-gray-200 shadow-md hover:bg-themeRedOffset cursor-pointer" }, "DB"))));
}

// components/LayoutNavigation/NavigationBlackList.tsx
var NavigationBlackList = ["/"];
var NavigationBlackList_default = NavigationBlackList;

// components/LayoutNavigation/LayoutNavigation.tsx
function LayoutNavigation() {
  if (NavigationBlackList_default.includes((0, import_navigation.usePathname)())) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Navigation, null);
}
var linkVariants = tv$1({
  base: "cursor-pointer",
  variants: {
    colour: {
      black: "text-themeBlack hover:underline",
      red: "text-themeRed hover:text-themeRedOffset",
      white: "text-white hover:underline"
    },
    fontWeight: {
      bold: "font-bold",
      normal: "font-normal"
    }
  },
  defaultVariants: {
    colour: "red",
    fontWeight: "normal"
  }
});
function Link({
  onClick,
  href,
  children,
  linkColour,
  fontWeight,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      onClick,
      href,
      className: linkVariants({ colour: linkColour, fontWeight }) + " " + className
    },
    children
  );
}
function Pagination() {
  const [sectionElements, setSectionElements] = useState([]);
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setSectionElements(Array.from(sections));
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      sectionElements.map((section, index) => {
        if (section.offsetTop <= window.scrollY + 500 && section.offsetHeight + section.offsetTop >= window.scrollY) {
          setCurrentSection(sectionElements[index].id);
          return;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return /* @__PURE__ */ React.createElement("div", { className: "hidden sm:block" }, /* @__PURE__ */ React.createElement(
    "ul",
    {
      id: "pagination",
      className: "fixed top-1/2 px-3 right-8 list-none -translate-y-1/2 list-inside bg-black rounded-md z-[9999]"
    },
    sectionElements.map((section, index) => /* @__PURE__ */ React.createElement(
      "li",
      {
        key: "pagination" + index,
        className: `relative my-4 bg-white rounded-full w-2 h-2 transition-transform duration-200 ease-in hover:scale-150 ${section.id === currentSection ? "scale-150" : ""}`
      },
      /* @__PURE__ */ React.createElement(
        "a",
        {
          href: "#" + section.id,
          className: "absolute inset-0 no-underline text-inherit peer"
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-white text-themeBlack text-xs rounded border border-gray-300 opacity-0 peer-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" }, section.id)
    ))
  ));
}

// components/ProjectTile/ProjectTile.tsx
var import_image3 = __toESM(require_image());
function ProjectTile({
  imageSrc,
  title,
  description,
  link1,
  link2,
  stack = [],
  mobileViewScaleImage
}) {
  const cardData = {
    image: imageSrc,
    title,
    text: description,
    linkOne: link1,
    linkTwo: link2,
    scaleImage: mobileViewScaleImage ? "scale-125 origin-center" : void 0,
    stack
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "block md:hidden w-full flex justify-center px-4" }, /* @__PURE__ */ React.createElement(
    InformationCard,
    {
      informationCard: cardData,
      cardWidth: 280,
      fade: "opacity-100 scale-100",
      buttonClassName: "bg-themeOrange hover:bg-orange-600"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer" }, /* @__PURE__ */ React.createElement(import_image3.default, { src: imageSrc, alt: title, fill: true, className: "object-cover" }), stack.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-4 left-4 flex flex-wrap gap-2 z-10" }, stack.map((tech, index) => /* @__PURE__ */ React.createElement(
    "span",
    {
      key: index,
      className: "bg-themeOrange text-white px-3 py-1 rounded-full text-sm font-medium shadow-md group-hover:shadow-none transition-shadow duration-300"
    },
    tech
  ))), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center px-12 py-8 space-y-3 opacity-0 group-hover:opacity-100" }, /* @__PURE__ */ React.createElement("h3", { className: "text-3xl font-bold leading-tight text-white text-center" }, title), /* @__PURE__ */ React.createElement("p", { className: "text-base text-white leading-snug text-center max-w-xl" }, description), /* @__PURE__ */ React.createElement("div", { className: "flex flex-row gap-4" }, /* @__PURE__ */ React.createElement(
    Button_default,
    {
      baseColour: "orange",
      hoverStyle: "orangeOutline",
      buttonSize: "small",
      className: " min-w-[120px]",
      onClick: () => window.open(link1.href, "_blank")
    },
    link1.text
  ), link2 && /* @__PURE__ */ React.createElement(
    Button_default,
    {
      baseColour: "orangeOutline",
      hoverStyle: "orangeFill",
      buttonSize: "small",
      className: " min-w-[120px]",
      onClick: () => window.open(link2.href, "_blank")
    },
    link2.text
  ))))));
}

// components/Section/Section.css
styleInject(".clip-chevron {\n  clip-path: polygon(0 10%, 50% 0%, 100% 10%, 100% 100%, 0 100%);\n}\n");
var sectionVariants = tv$1({
  base: "flex flex-col items-center text-center relative z-10",
  variants: {
    type: {
      normal: "py-16",
      chevron: "py-32 clip-chevron"
    }
  },
  defaultVariants: {
    type: "normal"
  }
});
var colourTheme = {
  white: {
    background: "bg-white",
    textColour: "text-blue",
    underlineColour: "bg-themeRed"
  },
  black: {
    background: "bg-themeBlack",
    textColour: "text-white",
    underlineColour: "bg-white"
  },
  orange: {
    background: "bg-themeOrange",
    textColour: "text-white",
    underlineColour: "bg-white"
  },
  blue: {
    background: "bg-themeBlue",
    textColour: "text-white",
    underlineColour: "bg-white"
  },
  green: {
    background: "bg-themeGreen",
    textColour: "text-white",
    underlineColour: "bg-white"
  }
};
function Section({
  sectionTitle,
  children,
  disableHeading,
  disableUnderline,
  underlineColourOverride,
  className,
  colour = "white",
  type
}) {
  const theme = colourTheme[colour];
  return /* @__PURE__ */ React.createElement("section", { id: sectionTitle }, type === "chevron" && /* @__PURE__ */ React.createElement("div", { className: ` clip-chevron ${theme.background}` }), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `${sectionVariants({ type })} ${theme.background} ${theme.textColour} ${className}`
    },
    !disableHeading && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, sectionTitle), !disableUnderline && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `mx-auto mt-3 mb-12 h-1 w-[5%] md:w-[2%] rounded-full ${underlineColourOverride ?? theme.underlineColour}`
      }
    )),
    children
  ));
}

// components/StarBackground/StarBackground.css
styleInject("@keyframes animStar {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-1000px);\n  }\n}\n");
function randomColorInRange(colorStart, colorEnd) {
  const start = parseInt(colorStart.replace("#", ""), 16);
  const end = parseInt(colorEnd.replace("#", ""), 16);
  const r = (start >> 16 & 255) + Math.random() * ((end >> 16 & 255) - (start >> 16 & 255));
  const g = (start >> 8 & 255) + Math.random() * ((end >> 8 & 255) - (start >> 8 & 255));
  const b = (start & 255) + Math.random() * ((end & 255) - (start & 255));
  return `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
}
function StarfieldSection({
  children,
  layerConfigs = [
    { count: 500, size: 1, duration: 50, colorRange: ["#ffffff", "#ffcccc"] },
    { count: 250, size: 2, duration: 100, colorRange: ["#ffffff", "#99ccff"] },
    { count: 120, size: 3, duration: 200, colorRange: ["#ffffff", "#ff99ff"] }
  ]
}) {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const resize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const layers = useMemo(() => {
    if (!size.width || !size.height) return [];
    return layerConfigs.map(({ count, colorRange }) => {
      const shadows = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * size.width;
        const y = Math.random() * size.height * 3;
        const color = randomColorInRange(colorRange[0], colorRange[1]);
        shadows.push(`${x}px ${y}px ${color}`);
      }
      return shadows.join(", ");
    });
  }, [layerConfigs, size]);
  const starStyles = (i) => {
    const layer = layerConfigs[i];
    return {
      width: layer.size,
      height: layer.size,
      boxShadow: layers[i],
      animationDuration: `${layer.duration}s`
    };
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: containerRef,
      className: "relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#1b2735_0%,#090a0f_100%)]"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]",
        style: starStyles(0)
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]",
        style: starStyles(1)
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none will-change-transform animate-[animStar_linear_infinite]",
        style: starStyles(2)
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "relative z-10 flex flex-col items-center justify-center text-center text-white gap-6 h-full px-4" }, children)
  );
}
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= breakpoint);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);
  return isMobile;
}

// components/Timeline/Timeline.tsx
function Timeline({ Timelines, PrimaryColour }) {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleProjects = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto" }, /* @__PURE__ */ React.createElement("ul", { className: "relative" }, Timelines && Timelines.map((item, index) => /* @__PURE__ */ React.createElement("li", { key: index, className: "relative flex" }, !isMobile && /* @__PURE__ */ React.createElement("div", { className: "w-40 text-right pr-6 pt-6" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold block" }, item.startDate, " to"), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold block" }, item.endDate ? item.endDate : "current")), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `relative w-8 flex justify-center ${isMobile && "ml-4"}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "absolute top-0 bottom-0 w-[4px] bg-gray-300" }),
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `relative z-10 w-4 h-4 rounded-full mt-7 
                    ${index === 0 ? `bg-theme${PrimaryColour}` : `bg-white border-4 border-theme${PrimaryColour}`}`
      }
    )
  ), /* @__PURE__ */ React.createElement("div", { className: "ml-4 bg-white rounded-lg p-6 w-full text-left" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold " }, isMobile && `${item.startDate} to ${item.endDate ? item.endDate : "current"} - `, item.JobTitle, " at ", item.companyName), item.content && (item.content.length > 1 ? /* @__PURE__ */ React.createElement("ul", { className: "mt-2 leading-relaxed list-disc pl-5" }, item.content.map((contentItem, index2) => /* @__PURE__ */ React.createElement("li", { key: index2 }, contentItem))) : /* @__PURE__ */ React.createElement("span", { className: "" }, item.content[0])), item.projects && item.projects.length > 0 && /* @__PURE__ */ React.createElement(
    DropDown,
    {
      isOpen: openIndex === index,
      onToggle: () => toggleProjects(index),
      primaryColour: PrimaryColour,
      toggleText: {
        OpenText: "View What I Have Worked On",
        CloseText: "Hide What I Have Worked On"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "mt-4 space-y-4" }, item.projects.map((project, pIndex) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: pIndex,
        className: "bg-gray-100 rounded-md p-4 space-y-3"
      },
      /* @__PURE__ */ React.createElement("h4", { className: "font-semibold" }, project.ShortDescription),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm mt-1" }, project.Description),
      project.BulletPoints && /* @__PURE__ */ React.createElement("h5", { className: "text-sm mt-1 font-semibold" }, "My contributions were:"),
      project.BulletPoints && project.BulletPoints.length > 0 && /* @__PURE__ */ React.createElement("ul", { className: "text-sm list-disc pl-5 mt-2" }, project.BulletPoints.map(
        (bulletPoint, bulletPointIndex) => /* @__PURE__ */ React.createElement("li", { key: bulletPointIndex }, bulletPoint)
      ))
    )))
  ))))));
}

export { AnimatedText, Button_default as Button, Carousel, Chart, DirectionButtons, DropDown, Footer, HiddenInformationCard, InformationCard, LayoutNavigation, Link, Navigation, NavigationBlackList_default as NavigationBlackList, Pagination, ProjectTile, Section, StarfieldSection, Timeline, useIsMobile };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map