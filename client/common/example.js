/*
  Original Author: Matei Copot http://codepen.io/towc/
  Source: http://codepen.io/towc/pen/xGbOma

  - ported to es2015
  - linted
  - refactored to help readability
*/

const draw = (ctx, state, x, y, wave) => {
  let hsl = 'hsl(hue, 80%, 50%)';
  ctx.fillStyle = hsl.replace('hue', (2 * state.frame.last + wave + (Math.random() * 90) || 0) % 360);
  ctx.fillRect(
    state.center.x + x * state.tile.size,
    state.center.y + y * state.tile.size,
    state.tile.size,
    state.tile.size
  );
};

const animate = (ctx, state) => {
  window.requestAnimationFrame(() => animate(ctx, state));

  state.frame.last = state.frame.last + 1;

  ctx.fillStyle = 'rgba(0, 0, 0, .04)';
  ctx.fillRect(0, 0, state.width, state.height);

  if (state.frame.last - state.wave.times.last >= state.wave.times.wait){
    state.waves.push(state.frame.last);
    state.waveLengths.push(0);
    state.wave.times.last = state.frame.last;
  }

  for (let i = 0; i < state.waves.length; i++) {
    const wave = state.waves[i];

    if (state.frame.last % state.wave.times.tile === 0) {
      const len = state.waveLengths[i]++;

      for (let j = 0; j < len; j++) {
        draw(ctx, state, -len + j + 1, -j, wave);
        draw(ctx, state, len - j - 1, j, wave);
        draw(ctx, state, -len + j + 1, j, wave);
        draw(ctx, state, len - j - 1, -j, wave);
      }
    }

    if (state.frame.last - state.wave >= state.wave.times.kill) {
      state.waves.splice(i, 1);
      state.waveLengths.splice(i, 1);
      i = i - 1;
    }
  }
};

export const animateExample = (ctx) => {
  const state = {
    width: ctx.canvas.width,
    height: ctx.canvas.height,
    center: {
      x: ctx.canvas.width * 0.5,
      y: ctx.canvas.height * 0.5
    },
    tile: {
      size: 10
    },
    wave: {
      times: {
        wait: 60,
        kill: 300,
        tile: 4,
        last: 0
      }
    },
    frame: {
      last: 0
    },
    waves: [0],
    waveLengths: [1]
  };

  animate(ctx, state);
};

