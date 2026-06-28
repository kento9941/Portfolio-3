uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform vec2 uVelocity;
uniform float uRadius;
uniform float uStrength;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Vector pointing from mouse to the current pixel
  vec2 delta = uv - uMouse;
  float dist = length(delta);

  // Gaussian bell curve
  float influence = exp(- 0.015 * (dist * dist) / (uRadius * uRadius));

  float speed = length(uVelocity);

  vec2 distortion1 = delta * influence * speed * uStrength;
  vec2 distortion2 = delta * influence * speed * uStrength;
  vec2 distortion3 = delta * influence * speed * uStrength * 0.5;

  vec2 distortedUv1 = uv + distortion1;
  vec2 distortedUv2 = uv - distortion2;
  vec2 distortedUv3 = uv + distortion3;

  // --- Chromatic Aberration ---
  float aberrationAmount = speed * influence * 0.15; 
  
  vec2 rOffset = uVelocity * aberrationAmount * 1.0;
  vec2 gOffset = uVelocity * aberrationAmount * 1.5;
  vec2 bOffset = uVelocity * aberrationAmount * 2.0;

  float r1 = texture2D(uTexture, distortedUv1 - rOffset).r;
  float g1 = texture2D(uTexture, distortedUv1 - gOffset).g;
  float b1 = texture2D(uTexture, distortedUv1 - bOffset).b;
  float r2 = texture2D(uTexture, distortedUv2 - rOffset).r;
  float g2 = texture2D(uTexture, distortedUv2 - gOffset).g;
  float b2 = texture2D(uTexture, distortedUv2 - bOffset).b;
  float r3 = texture2D(uTexture, distortedUv2 - rOffset).r;
  float g3 = texture2D(uTexture, distortedUv2 - gOffset).g;
  float b3 = texture2D(uTexture, distortedUv2 - bOffset).b;

  float r = r1 * 0.3 + r2 * 0.3 + r3 * 0.4;
  float g = g1 * 0.3 + g2 * 0.3 + g3 * 0.4;
  float b = b1 * 0.3 + b2 * 0.3 + b3 * 0.4;

  gl_FragColor = vec4(r, g, b, 1.0);
}
