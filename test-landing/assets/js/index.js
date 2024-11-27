import { R as Runner, b as buildPoly, a as buildCircle, c as buildRectangle, d as buildRoundedRectangle, e as buildLine, A as ArcUtils, B as BezierUtils, Q as QuadraticUtils, f as BatchPart, F as FILL_COMMANDS, g as BATCH_POOL, D as DRAW_CALL_POOL, M as MeshGeometry, h as Mesh, P as PlaneGeometry, i as MeshMaterial, T as Texture, W as WRAP_MODES, C as Container, j as BLEND_MODES, k as Color, S as Sprite, l as Ticker, U as UPDATE_PRIORITY } from "./MainApp.js";
export { bx as ALPHA_MODES, ag as AbstractMultiResource, n as AccessibilityManager, ci as AlphaFilter, p as Application, ah as ArrayResource, r as Assets, s as AssetsClass, ai as Attribute, j as BLEND_MODES, by as BUFFER_BITS, bz as BUFFER_TYPE, aj as BackgroundSystem, ak as BaseImageResource, cA as BasePrepare, al as BaseRenderTexture, am as BaseTexture, an as BatchDrawCall, ao as BatchGeometry, ap as BatchRenderer, aq as BatchShaderGenerator, ar as BatchSystem, as as BatchTextureArray, cL as BitmapFont, cM as BitmapFontData, cN as BitmapText, a3 as BlobResource, cj as BlurFilter, ck as BlurFilterPass, c7 as Bounds, c3 as BrowserAdapter, at as Buffer, au as BufferResource, av as BufferSystem, bA as CLEAR_MODES, bB as COLOR_MASK_BITS, t as Cache, aw as CanvasResource, bR as Circle, k as Color, cl as ColorMatrixFilter, a4 as CompressedTextureResource, C as Container, ax as ContextSystem, cB as CountLimiter, ay as CubeResource, bS as DEG_TO_RAD, bC as DRAW_MODES, cm as DisplacementFilter, c8 as DisplayObject, bD as ENV, bT as Ellipse, ca as EventBoundary, cb as EventSystem, bP as ExtensionType, ch as Extract, bE as FORMATS, a5 as FORMATS_TO_COMPONENTS, cn as FXAAFilter, cc as FederatedDisplayObject, cd as FederatedEvent, ce as FederatedMouseEvent, cf as FederatedPointerEvent, cg as FederatedWheelEvent, cp as FillStyle, az as Filter, aA as FilterState, aB as FilterSystem, aC as Framebuffer, aD as FramebufferSystem, bF as GC_MODES, aE as GLFramebuffer, aF as GLProgram, aG as GLTexture, cq as GRAPHICS_CURVES, aH as GenerateTextureSystem, aI as Geometry, aJ as GeometrySystem, cr as Graphics, cs as GraphicsData, ct as GraphicsGeometry, cT as HTMLText, cU as HTMLTextStyle, aK as IGLUniformData, aL as INSTALLED, a6 as INTERNAL_FORMATS, a7 as INTERNAL_FORMAT_TO_BYTES_PER_PIXEL, aM as ImageBitmapResource, aN as ImageResource, cu as LINE_CAP, cv as LINE_JOIN, cw as LineStyle, L as LoaderParserPriority, bG as MASK_TYPES, bH as MIPMAP_MODES, bI as MSAA_QUALITY, aO as MaskData, aP as MaskSystem, bU as Matrix, h as Mesh, cy as MeshBatchUvs, M as MeshGeometry, i as MeshMaterial, aQ as MultisampleSystem, co as NoiseFilter, aR as ObjectRenderer, aS as ObjectRendererSystem, bV as ObservablePoint, bW as PI_2, bJ as PRECISION, cz as ParticleRenderer, P as PlaneGeometry, aT as PluginSystem, bX as Point, bY as Polygon, cC as Prepare, aU as Program, aV as ProjectionSystem, aW as Quad, aX as QuadUv, bZ as RAD_TO_DEG, bK as RENDERER_TYPE, b_ as Rectangle, aY as RenderTexture, aZ as RenderTexturePool, a_ as RenderTextureSystem, a$ as Renderer, q as ResizePlugin, b0 as Resource, b$ as RoundedRectangle, R as Runner, bL as SAMPLER_TYPES, bM as SCALE_MODES, c0 as SHAPES, b1 as SVGResource, b2 as ScissorSystem, b3 as Shader, b4 as ShaderSystem, S as Sprite, b5 as SpriteMaskFilter, cF as Spritesheet, b6 as StartupSystem, b7 as State, b8 as StateSystem, b9 as StencilSystem, ba as SystemManager, bN as TARGETS, cH as TEXT_GRADIENT, bO as TYPES, a8 as TYPES_TO_BYTES_PER_COMPONENT, a9 as TYPES_TO_BYTES_PER_PIXEL, c9 as TemporaryDisplayObject, cI as Text, cO as TextFormat, cJ as TextMetrics, cK as TextStyle, T as Texture, bb as TextureGCSystem, bc as TextureMatrix, bd as TextureSystem, be as TextureUvs, l as Ticker, c6 as TickerPlugin, cD as TilingSprite, cE as TilingSpriteRenderer, c1 as Transform, bf as TransformFeedbackSystem, U as UPDATE_PRIORITY, bg as UniformGroup, bh as VideoResource, bi as ViewSystem, bj as ViewableBuffer, W as WRAP_MODES, cP as XMLFormat, cQ as XMLStringFormat, o as accessibleTarget, cR as autoDetectFormat, bk as autoDetectRenderer, bl as autoDetectResource, u as cacheTextureArray, v as checkDataUrl, w as checkExtension, bm as checkMaxIfStatementsInShader, x as convertToList, y as copySearchParams, z as createStringVariations, E as createTexture, bn as createUBOElements, cx as curves, bo as defaultFilterVertex, bp as defaultVertex, G as detectAvif, aa as detectCompressedTextures, H as detectDefaults, I as detectMp4, J as detectOgv, K as detectWebm, N as detectWebp, bQ as extensions, m as filters, bq as generateProgram, br as generateUniformBufferSync, O as getFontFamilyName, bs as getTestContext, bt as getUBOData, c2 as groupD8, c4 as isMobile, V as isSingleItem, cS as loadBitmapFont, ab as loadDDS, X as loadImageBitmap, Y as loadJson, ac as loadKTX, Z as loadSVG, _ as loadTextures, $ as loadTxt, a0 as loadVideo, a1 as loadWebFont, ad as parseDDS, ae as parseKTX, af as resolveCompressedTextureUrl, a2 as resolveTextureUrl, c5 as settings, cG as spritesheetAsset, bu as uniformParsers, bv as unsafeEvalSupported, bw as utils } from "./MainApp.js";
class TransformFeedback {
  constructor() {
    this._glTransformFeedbacks = {}, this.buffers = [], this.disposeRunner = new Runner("disposeTransformFeedback");
  }
  bindBuffer(index, buffer) {
    this.buffers[index] = buffer;
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
    for (let i2 = 0; i2 < total; i2++) {
      const index = i2 * 4;
      if (this.textureScale > 0) {
        const dx = prev.x - points[i2].x, dy = prev.y - points[i2].y, distance = Math.sqrt(dx * dx + dy * dy);
        prev = points[i2], amount += distance / textureWidth;
      } else
        amount = i2 / (total - 1);
      uvs[index] = amount, uvs[index + 1] = 0, uvs[index + 2] = amount, uvs[index + 3] = 1;
    }
    let indexCount = 0;
    for (let i2 = 0; i2 < total - 1; i2++) {
      const index = i2 * 2;
      indices[indexCount++] = index, indices[indexCount++] = index + 1, indices[indexCount++] = index + 2, indices[indexCount++] = index + 2, indices[indexCount++] = index + 1, indices[indexCount++] = index + 3;
    }
    uvBuffer.update(), indexBuffer.update(), this.updateVertices();
  }
  updateVertices() {
    const points = this.points;
    if (points.length < 1)
      return;
    let lastPoint = points[0], nextPoint, perpX = 0, perpY = 0;
    const vertices = this.buffers[0].data, total = points.length, halfWidth = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
    for (let i2 = 0; i2 < total; i2++) {
      const point = points[i2], index = i2 * 4;
      i2 < points.length - 1 ? nextPoint = points[i2 + 1] : nextPoint = point, perpY = -(nextPoint.x - lastPoint.x), perpX = nextPoint.y - lastPoint.y;
      const perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
      perpLength < 1e-6 ? (perpX = 0, perpY = 0) : (perpX /= perpLength, perpY /= perpLength, perpX *= halfWidth, perpY *= halfWidth), vertices[index] = point.x + perpX, vertices[index + 1] = point.y + perpY, vertices[index + 2] = point.x - perpX, vertices[index + 3] = point.y - perpY, lastPoint = point;
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
    const w2 = this._leftWidth + this._rightWidth, scaleW = this._width > w2 ? 1 : this._width / w2, h2 = this._topHeight + this._bottomHeight, scaleH = this._height > h2 ? 1 : this._height / h2;
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
      for (let i2 = 0; i2 < this._buffers.length; ++i2)
        this._buffers[i2].destroy();
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
      const sign = Math.sign(this.animationSpeed * deltaTime);
      for (this._currentTime = Math.floor(this._currentTime); lag >= this._durations[this.currentFrame]; )
        lag -= this._durations[this.currentFrame] * sign, this._currentTime += sign;
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
    for (let i2 = 0; i2 < frames.length; ++i2)
      textures.push(Texture.from(frames[i2]));
    return new AnimatedSprite(textures);
  }
  static fromImages(images) {
    const textures = [];
    for (let i2 = 0; i2 < images.length; ++i2)
      textures.push(Texture.from(images[i2]));
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
      for (let i2 = 0; i2 < value.length; i2++)
        this._textures.push(value[i2].texture), this._durations.push(value[i2].time);
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
export { AnimatedSprite, NineSlicePlane, ParticleContainer, RopeGeometry, SimpleMesh, SimplePlane, SimpleRope, TimeLimiter, TransformFeedback, VERSION, graphicsUtils };
