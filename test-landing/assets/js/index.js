import { d as deprecation, p as parse, f as format, r as resolve, g as getBufferType, B as BaseTextureCache, a as BoundingBox, C as CanvasRenderTarget, E as EventEmitter, P as ProgramCache, T as TextureCache, c as clearTextureCache, b as correctBlendMode, e as createIndicesForQuads, h as destroyTextureCache, i as detectVideoAlphaMode, j as determineCrossOrigin, k as earcut_1, l as getCanvasBoundingBox, m as getResolutionOfUrl, n as hex2rgb, o as hex2string, q as isMobile, s as isPow2, t as isWebGLSupported, u as log2, v as nextPow2, w as path, x as premultiplyBlendMode, y as premultiplyRgba, z as premultiplyTint, A as premultiplyTintToRgba, D as removeItems, F as rgb2hex, G as sign, H as string2hex, I as trimCanvas, J as uid, R as Runner, K as buildPoly, L as buildCircle, M as buildRectangle, N as buildRoundedRectangle, O as buildLine, Q as ArcUtils, S as BezierUtils, U as QuadraticUtils, V as BatchPart, W as FILL_COMMANDS, X as BATCH_POOL, Y as DRAW_CALL_POOL, Z as MeshGeometry, _ as Mesh, $ as PlaneGeometry, a0 as MeshMaterial, a1 as Texture, a2 as WRAP_MODES, a3 as Container, a4 as BLEND_MODES, a5 as Color, a6 as Sprite, a7 as Ticker, a8 as UPDATE_PRIORITY } from "./MainApp.js";
export { c6 as ALPHA_MODES, aS as AbstractMultiResource, aa as AccessibilityManager, cS as AlphaFilter, ac as Application, aT as ArrayResource, ae as Assets, af as AssetsClass, aU as Attribute, a4 as BLEND_MODES, c7 as BUFFER_BITS, c8 as BUFFER_TYPE, aV as BackgroundSystem, aW as BaseImageResource, d8 as BasePrepare, aX as BaseRenderTexture, aY as BaseTexture, aZ as BatchDrawCall, a_ as BatchGeometry, a$ as BatchRenderer, b0 as BatchShaderGenerator, b1 as BatchSystem, b2 as BatchTextureArray, dj as BitmapFont, dk as BitmapFontData, dl as BitmapText, aF as BlobResource, cT as BlurFilter, cU as BlurFilterPass, cH as Bounds, cE as BrowserAdapter, b3 as Buffer, b4 as BufferResource, b5 as BufferSystem, c9 as CLEAR_MODES, ca as COLOR_MASK_BITS, ag as Cache, b6 as CanvasResource, cq as Circle, a5 as Color, cV as ColorMatrixFilter, aG as CompressedTextureResource, a3 as Container, b7 as ContextSystem, d9 as CountLimiter, b8 as CubeResource, cr as DEG_TO_RAD, cb as DRAW_MODES, cW as DisplacementFilter, cI as DisplayObject, cc as ENV, cs as Ellipse, cK as EventBoundary, cL as EventSystem, co as ExtensionType, cR as Extract, cd as FORMATS, aH as FORMATS_TO_COMPONENTS, cX as FXAAFilter, cM as FederatedDisplayObject, cN as FederatedEvent, cO as FederatedMouseEvent, cP as FederatedPointerEvent, cQ as FederatedWheelEvent, cZ as FillStyle, b9 as Filter, ba as FilterState, bb as FilterSystem, bc as Framebuffer, bd as FramebufferSystem, ce as GC_MODES, be as GLFramebuffer, bf as GLProgram, bg as GLTexture, c_ as GRAPHICS_CURVES, bh as GenerateTextureSystem, bi as Geometry, bj as GeometrySystem, c$ as Graphics, d0 as GraphicsData, d1 as GraphicsGeometry, ds as HTMLText, dt as HTMLTextStyle, bk as IGLUniformData, bl as INSTALLED, aI as INTERNAL_FORMATS, aJ as INTERNAL_FORMAT_TO_BYTES_PER_PIXEL, bm as ImageBitmapResource, bn as ImageResource, d2 as LINE_CAP, d3 as LINE_JOIN, d4 as LineStyle, ah as LoaderParserPriority, cf as MASK_TYPES, cg as MIPMAP_MODES, ch as MSAA_QUALITY, bo as MaskData, bp as MaskSystem, ct as Matrix, _ as Mesh, d6 as MeshBatchUvs, Z as MeshGeometry, a0 as MeshMaterial, bq as MultisampleSystem, cY as NoiseFilter, br as ObjectRenderer, bs as ObjectRendererSystem, cu as ObservablePoint, cv as PI_2, ci as PRECISION, d7 as ParticleRenderer, $ as PlaneGeometry, bt as PluginSystem, cw as Point, cx as Polygon, da as Prepare, bu as Program, bv as ProjectionSystem, bw as Quad, bx as QuadUv, cy as RAD_TO_DEG, cj as RENDERER_TYPE, cz as Rectangle, by as RenderTexture, bz as RenderTexturePool, bA as RenderTextureSystem, bB as Renderer, ad as ResizePlugin, bC as Resource, cA as RoundedRectangle, R as Runner, ck as SAMPLER_TYPES, cl as SCALE_MODES, cB as SHAPES, bD as SVGResource, bE as ScissorSystem, bF as Shader, bG as ShaderSystem, a6 as Sprite, bH as SpriteMaskFilter, dd as Spritesheet, bI as StartupSystem, bJ as State, bK as StateSystem, bL as StencilSystem, bM as SystemManager, cm as TARGETS, df as TEXT_GRADIENT, cn as TYPES, aK as TYPES_TO_BYTES_PER_COMPONENT, aL as TYPES_TO_BYTES_PER_PIXEL, cJ as TemporaryDisplayObject, dg as Text, dm as TextFormat, dh as TextMetrics, di as TextStyle, a1 as Texture, bN as TextureGCSystem, bO as TextureMatrix, bP as TextureSystem, bQ as TextureUvs, a7 as Ticker, cG as TickerPlugin, db as TilingSprite, dc as TilingSpriteRenderer, cC as Transform, bR as TransformFeedbackSystem, a8 as UPDATE_PRIORITY, bS as UniformGroup, bT as VideoResource, bU as ViewSystem, bV as ViewableBuffer, a2 as WRAP_MODES, dn as XMLFormat, dp as XMLStringFormat, ab as accessibleTarget, dq as autoDetectFormat, bW as autoDetectRenderer, bX as autoDetectResource, ai as cacheTextureArray, aj as checkDataUrl, ak as checkExtension, bY as checkMaxIfStatementsInShader, al as convertToList, am as copySearchParams, an as createStringVariations, ao as createTexture, bZ as createUBOElements, d5 as curves, b_ as defaultFilterVertex, b$ as defaultVertex, ap as detectAvif, aM as detectCompressedTextures, aq as detectDefaults, ar as detectMp4, as as detectOgv, at as detectWebm, au as detectWebp, cp as extensions, a9 as filters, c0 as generateProgram, c1 as generateUniformBufferSync, av as getFontFamilyName, c2 as getTestContext, c3 as getUBOData, cD as groupD8, q as isMobile, aw as isSingleItem, dr as loadBitmapFont, aN as loadDDS, ax as loadImageBitmap, ay as loadJson, aO as loadKTX, az as loadSVG, aA as loadTextures, aB as loadTxt, aC as loadVideo, aD as loadWebFont, aP as parseDDS, aQ as parseKTX, aR as resolveCompressedTextureUrl, aE as resolveTextureUrl, cF as settings, de as spritesheetAsset, c4 as uniformParsers, c5 as unsafeEvalSupported } from "./MainApp.js";
const url = {
  get parse() {
    return deprecation("7.3.0", "utils.url.parse is deprecated, use native URL API instead."), parse;
  },
  get format() {
    return deprecation("7.3.0", "utils.url.format is deprecated, use native URL API instead."), format;
  },
  get resolve() {
    return deprecation("7.3.0", "utils.url.resolve is deprecated, use native URL API instead."), resolve;
  }
};
function skipHello() {
  deprecation("7.0.0", "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello");
}
function sayHello() {
  deprecation("7.0.0", `sayHello is deprecated, please use Renderer's "hello" option`);
}
const DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
const map = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function interleaveTypedArrays(arrays, sizes) {
  let outSize = 0, stride = 0;
  const views = {};
  for (let i = 0; i < arrays.length; i++)
    stride += sizes[i], outSize += arrays[i].length;
  const buffer = new ArrayBuffer(outSize * 4);
  let out = null, littleOffset = 0;
  for (let i = 0; i < arrays.length; i++) {
    const size = sizes[i], array = arrays[i], type = getBufferType(array);
    views[type] || (views[type] = new map[type](buffer)), out = views[type];
    for (let j = 0; j < array.length; j++) {
      const indexStart = (j / size | 0) * stride + littleOffset, index2 = j % size;
      out[indexStart + index2] = array[j];
    }
    littleOffset += size;
  }
  return new Float32Array(buffer);
}
function decomposeDataUri(dataUri) {
  const dataUriMatch = DATA_URI.exec(dataUri);
  if (dataUriMatch)
    return {
      mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : void 0,
      subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : void 0,
      charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : void 0,
      encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : void 0,
      data: dataUriMatch[5]
    };
}
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTextureCache,
  BoundingBox,
  CanvasRenderTarget,
  DATA_URI,
  EventEmitter,
  ProgramCache,
  TextureCache,
  clearTextureCache,
  correctBlendMode,
  createIndicesForQuads,
  decomposeDataUri,
  deprecation,
  destroyTextureCache,
  detectVideoAlphaMode,
  determineCrossOrigin,
  earcut: earcut_1,
  getBufferType,
  getCanvasBoundingBox,
  getResolutionOfUrl,
  hex2rgb,
  hex2string,
  interleaveTypedArrays,
  isMobile,
  isPow2,
  isWebGLSupported,
  log2,
  nextPow2,
  path,
  premultiplyBlendMode,
  premultiplyRgba,
  premultiplyTint,
  premultiplyTintToRgba,
  removeItems,
  rgb2hex,
  sayHello,
  sign,
  skipHello,
  string2hex,
  trimCanvas,
  uid,
  url
}, Symbol.toStringTag, { value: "Module" }));
class TransformFeedback {
  constructor() {
    this._glTransformFeedbacks = {}, this.buffers = [], this.disposeRunner = new Runner("disposeTransformFeedback");
  }
  bindBuffer(index2, buffer) {
    this.buffers[index2] = buffer;
  }
  destroy() {
    this.disposeRunner.emit(this, false);
  }
}
const VERSION = "7.4.2";
const graphicsUtils = {
  buildPoly,
  buildCircle,
  buildRectangle,
  buildRoundedRectangle,
  buildLine,
  ArcUtils,
  BezierUtils,
  QuadraticUtils,
  BatchPart,
  FILL_COMMANDS,
  BATCH_POOL,
  DRAW_CALL_POOL
};
class RopeGeometry extends MeshGeometry {
  constructor(width = 200, points, textureScale = 0) {
    super(new Float32Array(points.length * 4), new Float32Array(points.length * 4), new Uint16Array((points.length - 1) * 6)), this.points = points, this._width = width, this.textureScale = textureScale, this.build();
  }
  get width() {
    return this._width;
  }
  build() {
    const points = this.points;
    if (!points)
      return;
    const vertexBuffer = this.getBuffer("aVertexPosition"), uvBuffer = this.getBuffer("aTextureCoord"), indexBuffer = this.getIndex();
    if (points.length < 1)
      return;
    vertexBuffer.data.length / 4 !== points.length && (vertexBuffer.data = new Float32Array(points.length * 4), uvBuffer.data = new Float32Array(points.length * 4), indexBuffer.data = new Uint16Array((points.length - 1) * 6));
    const uvs = uvBuffer.data, indices = indexBuffer.data;
    uvs[0] = 0, uvs[1] = 0, uvs[2] = 0, uvs[3] = 1;
    let amount = 0, prev = points[0];
    const textureWidth = this._width * this.textureScale, total = points.length;
    for (let i = 0; i < total; i++) {
      const index2 = i * 4;
      if (this.textureScale > 0) {
        const dx = prev.x - points[i].x, dy = prev.y - points[i].y, distance = Math.sqrt(dx * dx + dy * dy);
        prev = points[i], amount += distance / textureWidth;
      } else
        amount = i / (total - 1);
      uvs[index2] = amount, uvs[index2 + 1] = 0, uvs[index2 + 2] = amount, uvs[index2 + 3] = 1;
    }
    let indexCount = 0;
    for (let i = 0; i < total - 1; i++) {
      const index2 = i * 2;
      indices[indexCount++] = index2, indices[indexCount++] = index2 + 1, indices[indexCount++] = index2 + 2, indices[indexCount++] = index2 + 2, indices[indexCount++] = index2 + 1, indices[indexCount++] = index2 + 3;
    }
    uvBuffer.update(), indexBuffer.update(), this.updateVertices();
  }
  updateVertices() {
    const points = this.points;
    if (points.length < 1)
      return;
    let lastPoint = points[0], nextPoint, perpX = 0, perpY = 0;
    const vertices = this.buffers[0].data, total = points.length, halfWidth = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
    for (let i = 0; i < total; i++) {
      const point = points[i], index2 = i * 4;
      i < points.length - 1 ? nextPoint = points[i + 1] : nextPoint = point, perpY = -(nextPoint.x - lastPoint.x), perpX = nextPoint.y - lastPoint.y;
      const perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
      perpLength < 1e-6 ? (perpX = 0, perpY = 0) : (perpX /= perpLength, perpY /= perpLength, perpX *= halfWidth, perpY *= halfWidth), vertices[index2] = point.x + perpX, vertices[index2 + 1] = point.y + perpY, vertices[index2 + 2] = point.x - perpX, vertices[index2 + 3] = point.y - perpY, lastPoint = point;
    }
    this.buffers[0].update();
  }
  update() {
    this.textureScale > 0 ? this.build() : this.updateVertices();
  }
}
class SimplePlane extends Mesh {
  constructor(texture, verticesX, verticesY) {
    const planeGeometry = new PlaneGeometry(texture.width, texture.height, verticesX, verticesY), meshMaterial = new MeshMaterial(Texture.WHITE);
    super(planeGeometry, meshMaterial), this.texture = texture, this.autoResize = true;
  }
  textureUpdated() {
    this._textureID = this.shader.texture._updateID;
    const geometry = this.geometry, { width, height } = this.shader.texture;
    this.autoResize && (geometry.width !== width || geometry.height !== height) && (geometry.width = this.shader.texture.width, geometry.height = this.shader.texture.height, geometry.build());
  }
  set texture(value) {
    this.shader.texture !== value && (this.shader.texture = value, this._textureID = -1, value.baseTexture.valid ? this.textureUpdated() : value.once("update", this.textureUpdated, this));
  }
  get texture() {
    return this.shader.texture;
  }
  _render(renderer) {
    this._textureID !== this.shader.texture._updateID && this.textureUpdated(), super._render(renderer);
  }
  destroy(options) {
    this.shader.texture.off("update", this.textureUpdated, this), super.destroy(options);
  }
}
const DEFAULT_BORDER_SIZE = 10;
class NineSlicePlane extends SimplePlane {
  constructor(texture, leftWidth, topHeight, rightWidth, bottomHeight) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    super(Texture.WHITE, 4, 4), this._origWidth = texture.orig.width, this._origHeight = texture.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = (_b = leftWidth != null ? leftWidth : (_a = texture.defaultBorders) == null ? void 0 : _a.left) != null ? _b : DEFAULT_BORDER_SIZE, this._rightWidth = (_d = rightWidth != null ? rightWidth : (_c = texture.defaultBorders) == null ? void 0 : _c.right) != null ? _d : DEFAULT_BORDER_SIZE, this._topHeight = (_f = topHeight != null ? topHeight : (_e = texture.defaultBorders) == null ? void 0 : _e.top) != null ? _f : DEFAULT_BORDER_SIZE, this._bottomHeight = (_h = bottomHeight != null ? bottomHeight : (_g = texture.defaultBorders) == null ? void 0 : _g.bottom) != null ? _h : DEFAULT_BORDER_SIZE, this.texture = texture;
  }
  textureUpdated() {
    this._textureID = this.shader.texture._updateID, this._refresh();
  }
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(value) {
    this.geometry.getBuffer("aVertexPosition").data = value;
  }
  updateHorizontalVertices() {
    const vertices = this.vertices, scale = this._getMinScale();
    vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight * scale, vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - this._bottomHeight * scale, vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
  }
  updateVerticalVertices() {
    const vertices = this.vertices, scale = this._getMinScale();
    vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth * scale, vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - this._rightWidth * scale, vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
  }
  _getMinScale() {
    const w = this._leftWidth + this._rightWidth, scaleW = this._width > w ? 1 : this._width / w, h = this._topHeight + this._bottomHeight, scaleH = this._height > h ? 1 : this._height / h;
    return Math.min(scaleW, scaleH);
  }
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value, this._refresh();
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value, this._refresh();
  }
  get leftWidth() {
    return this._leftWidth;
  }
  set leftWidth(value) {
    this._leftWidth = value, this._refresh();
  }
  get rightWidth() {
    return this._rightWidth;
  }
  set rightWidth(value) {
    this._rightWidth = value, this._refresh();
  }
  get topHeight() {
    return this._topHeight;
  }
  set topHeight(value) {
    this._topHeight = value, this._refresh();
  }
  get bottomHeight() {
    return this._bottomHeight;
  }
  set bottomHeight(value) {
    this._bottomHeight = value, this._refresh();
  }
  _refresh() {
    const texture = this.texture, uvs = this.geometry.buffers[1].data;
    this._origWidth = texture.orig.width, this._origHeight = texture.orig.height;
    const _uvw = 1 / this._origWidth, _uvh = 1 / this._origHeight;
    uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0, uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0, uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1, uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1, uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth, uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - _uvw * this._rightWidth, uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight, uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - _uvh * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
  }
}
class SimpleMesh extends Mesh {
  constructor(texture = Texture.EMPTY, vertices, uvs, indices, drawMode) {
    const geometry = new MeshGeometry(vertices, uvs, indices);
    geometry.getBuffer("aVertexPosition").static = false;
    const meshMaterial = new MeshMaterial(texture);
    super(geometry, meshMaterial, null, drawMode), this.autoUpdate = true;
  }
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(value) {
    this.geometry.getBuffer("aVertexPosition").data = value;
  }
  _render(renderer) {
    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), super._render(renderer);
  }
}
class SimpleRope extends Mesh {
  constructor(texture, points, textureScale = 0) {
    const ropeGeometry = new RopeGeometry(texture.height, points, textureScale), meshMaterial = new MeshMaterial(texture);
    textureScale > 0 && (texture.baseTexture.wrapMode = WRAP_MODES.REPEAT), super(ropeGeometry, meshMaterial), this.autoUpdate = true;
  }
  _render(renderer) {
    const geometry = this.geometry;
    (this.autoUpdate || geometry._width !== this.shader.texture.height) && (geometry._width = this.shader.texture.height, geometry.update()), super._render(renderer);
  }
}
class ParticleContainer extends Container {
  constructor(maxSize = 1500, properties, batchSize = 16384, autoResize = false) {
    super();
    const maxBatchSize = 16384;
    batchSize > maxBatchSize && (batchSize = maxBatchSize), this._properties = [false, true, false, false, false], this._maxSize = maxSize, this._batchSize = batchSize, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = false, this.blendMode = BLEND_MODES.NORMAL, this.autoResize = autoResize, this.roundPixels = true, this.baseTexture = null, this.setProperties(properties), this._tintColor = new Color(0), this.tintRgb = new Float32Array(3), this.tint = 16777215;
  }
  setProperties(properties) {
    properties && (this._properties[0] = "vertices" in properties || "scale" in properties ? !!properties.vertices || !!properties.scale : this._properties[0], this._properties[1] = "position" in properties ? !!properties.position : this._properties[1], this._properties[2] = "rotation" in properties ? !!properties.rotation : this._properties[2], this._properties[3] = "uvs" in properties ? !!properties.uvs : this._properties[3], this._properties[4] = "tint" in properties || "alpha" in properties ? !!properties.tint || !!properties.alpha : this._properties[4]);
  }
  updateTransform() {
    this.displayObjectUpdateTransform();
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(value) {
    this._tintColor.setValue(value), this._tintColor.toRgbArray(this.tintRgb);
  }
  render(renderer) {
    !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", () => this.onChildrenChange(0))), renderer.batch.setObjectRenderer(renderer.plugins.particle), renderer.plugins.particle.render(this));
  }
  onChildrenChange(smallestChildIndex) {
    const bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
    for (; this._bufferUpdateIDs.length < bufferIndex; )
      this._bufferUpdateIDs.push(0);
    this._bufferUpdateIDs[bufferIndex] = ++this._updateID;
  }
  dispose() {
    if (this._buffers) {
      for (let i = 0; i < this._buffers.length; ++i)
        this._buffers[i].destroy();
      this._buffers = null;
    }
  }
  destroy(options) {
    super.destroy(options), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
  }
}
class TimeLimiter {
  constructor(maxMilliseconds) {
    this.maxMilliseconds = maxMilliseconds, this.frameStart = 0;
  }
  beginFrame() {
    this.frameStart = Date.now();
  }
  allowedToUpload() {
    return Date.now() - this.frameStart < this.maxMilliseconds;
  }
}
class AnimatedSprite extends Sprite {
  constructor(textures, autoUpdate = true) {
    super(textures[0] instanceof Texture ? textures[0] : textures[0].texture), this._textures = null, this._durations = null, this._autoUpdate = autoUpdate, this._isConnectedToTicker = false, this.animationSpeed = 1, this.loop = true, this.updateAnchor = false, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = false, this._previousFrame = null, this.textures = textures;
  }
  stop() {
    this._playing && (this._playing = false, this._autoUpdate && this._isConnectedToTicker && (Ticker.shared.remove(this.update, this), this._isConnectedToTicker = false));
  }
  play() {
    this._playing || (this._playing = true, this._autoUpdate && !this._isConnectedToTicker && (Ticker.shared.add(this.update, this, UPDATE_PRIORITY.HIGH), this._isConnectedToTicker = true));
  }
  gotoAndStop(frameNumber) {
    this.stop(), this.currentFrame = frameNumber;
  }
  gotoAndPlay(frameNumber) {
    this.currentFrame = frameNumber, this.play();
  }
  update(deltaTime) {
    if (!this._playing)
      return;
    const elapsed = this.animationSpeed * deltaTime, previousFrame = this.currentFrame;
    if (this._durations !== null) {
      let lag = this._currentTime % 1 * this._durations[this.currentFrame];
      for (lag += elapsed / 60 * 1e3; lag < 0; )
        this._currentTime--, lag += this._durations[this.currentFrame];
      const sign2 = Math.sign(this.animationSpeed * deltaTime);
      for (this._currentTime = Math.floor(this._currentTime); lag >= this._durations[this.currentFrame]; )
        lag -= this._durations[this.currentFrame] * sign2, this._currentTime += sign2;
      this._currentTime += lag / this._durations[this.currentFrame];
    } else
      this._currentTime += elapsed;
    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : previousFrame !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < previousFrame || this.animationSpeed < 0 && this.currentFrame > previousFrame) && this.onLoop(), this.updateTexture());
  }
  updateTexture() {
    const currentFrame = this.currentFrame;
    this._previousFrame !== currentFrame && (this._previousFrame = currentFrame, this._texture = this._textures[currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
  }
  destroy(options) {
    this.stop(), super.destroy(options), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
  }
  static fromFrames(frames) {
    const textures = [];
    for (let i = 0; i < frames.length; ++i)
      textures.push(Texture.from(frames[i]));
    return new AnimatedSprite(textures);
  }
  static fromImages(images) {
    const textures = [];
    for (let i = 0; i < images.length; ++i)
      textures.push(Texture.from(images[i]));
    return new AnimatedSprite(textures);
  }
  get totalFrames() {
    return this._textures.length;
  }
  get textures() {
    return this._textures;
  }
  set textures(value) {
    if (value[0] instanceof Texture)
      this._textures = value, this._durations = null;
    else {
      this._textures = [], this._durations = [];
      for (let i = 0; i < value.length; i++)
        this._textures.push(value[i].texture), this._durations.push(value[i].time);
    }
    this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
  }
  get currentFrame() {
    let currentFrame = Math.floor(this._currentTime) % this._textures.length;
    return currentFrame < 0 && (currentFrame += this._textures.length), currentFrame;
  }
  set currentFrame(value) {
    if (value < 0 || value > this.totalFrames - 1)
      throw new Error(`[AnimatedSprite]: Invalid frame index value ${value}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
    const previousFrame = this.currentFrame;
    this._currentTime = value, previousFrame !== this.currentFrame && this.updateTexture();
  }
  get playing() {
    return this._playing;
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(value) {
    value !== this._autoUpdate && (this._autoUpdate = value, !this._autoUpdate && this._isConnectedToTicker ? (Ticker.shared.remove(this.update, this), this._isConnectedToTicker = false) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (Ticker.shared.add(this.update, this), this._isConnectedToTicker = true));
  }
}
export { AnimatedSprite, NineSlicePlane, ParticleContainer, RopeGeometry, SimpleMesh, SimplePlane, SimpleRope, TimeLimiter, TransformFeedback, VERSION, graphicsUtils, index as utils };
