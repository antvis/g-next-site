"use strict";(self.webpackChunk_antv_g_site=self.webpackChunk_antv_g_site||[]).push([[2643],{90097:function(a,e,n){n.d(e,{w:function(){return t}});var r=n(2784),t=(0,r.createContext)({})},95084:function(a,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(2784),t=n(52219),s=n(90097);function o(){var i=(0,t.pC)();return r.createElement(s.w.Provider,{value:{meta:{exampleTopics:[{id:"canvas",title:{zh:"\u753B\u5E03",en:"Canvas"},examples:[{demos:[{id:"dom-canvas",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*FfHBTr2ACAkAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const $div1 = document.createElement('div');
document.getElementById('container').appendChild($div1);
const $div2 = document.createElement('div');
document.getElementById('container').appendChild($div2);

// create a renderer
const canvasRenderer1 = new CanvasRenderer();
const webglRenderer1 = new WebGLRenderer();
const svgRenderer1 = new SVGRenderer();
const canvasRenderer2 = new CanvasRenderer();

// create a canvas
const canvas1 = new Canvas({
  container: $div1,
  width: 600,
  height: 500,
  renderer: canvasRenderer1,
});

const canvas2 = new Canvas({
  container: $div2,
  width: 600,
  height: 500,
  renderer: canvasRenderer2,
});

canvas1.addEventListener(CanvasEvent.READY, () => {
  // create a circle
  const circle1 = new Circle({
    id: 'circle1',
    style: {
      cx: 300,
      cy: 200,
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  canvas1.appendChild(circle1);
  circle1.addEventListener('mouseenter', () => {
    circle1.attr('fill', '#2FC25B');
  });

  circle1.addEventListener('mouseleave', () => {
    circle1.attr('fill', '#1890FF');
  });
});

canvas2.addEventListener(CanvasEvent.READY, () => {
  const circle2 = new Circle({
    id: 'circle2',
    style: {
      cx: 300,
      cy: 200,
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  canvas2.appendChild(circle2);
  circle2.addEventListener('mouseenter', () => {
    circle2.attr('fill', '#2FC25B');
  });

  circle2.addEventListener('mouseleave', () => {
    circle2.attr('fill', '#1890FF');
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas1.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder.add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg']).onChange((renderer) => {
  canvas1.setRenderer(
    renderer === 'canvas' ? canvasRenderer1 : renderer === 'webgl' ? webglRenderer1 : svgRenderer1,
  );
});
rendererFolder.open();
`,title:{zh:"canvas.container \u4F7F\u7528 DOM \u5143\u7D20",en:"Use a DOM element for container"},filename:"dom-canvas.js",isNew:!1},{id:"user-defined-canvas",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import Stats from 'stats.js';

const $canvas = document.createElement('canvas');
const dpr = window.devicePixelRatio;
$canvas.width = dpr * 600;
$canvas.height = dpr * 500;
$canvas.style.width = '600px';
$canvas.style.height = '500px';
document.getElementById('container').appendChild($canvas);

// create a renderer
const canvasRenderer = new CanvasRenderer();

// create a canvas
const canvas = new Canvas({
  canvas: $canvas,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);
  circle.addEventListener('pointerenter', () => {
    circle.attr('fill', '#2FC25B');
  });

  circle.addEventListener('pointerleave', () => {
    circle.attr('fill', '#1890FF');
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});
`,title:{zh:"\u4F7F\u7528\u7528\u6237\u521B\u5EFA\u7684 <canvas>",en:"Use user-defined <canvas>"},filename:"user-defined-canvas.js",isNew:!1},{id:"multi-canvas",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*VSOLRbXqEeMAAAAAAAAAAAAAARQnAQ",source:`import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import Stats from 'stats.js';
import { Canvas, Group } from '@antv/g';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Mesh, CubeGeometry, MeshBasicMaterial, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';

// scene1 + scene2
const TOTAL_WIDTH = 600;
const SCENE_HEIGHT = 500;

const App = function MultiWorld() {
  let canvas1;
  let canvas2;
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0);
    const $stats = stats.dom;
    $stats.style.position = 'absolute';
    $stats.style.left = '0px';
    $stats.style.top = '0px';
    const $wrapper = document.getElementById('container');
    $wrapper.appendChild($stats);

    // create a webgl renderer
    const webglRenderer1 = new WebGLRenderer();
    webglRenderer1.registerPlugin(new Plugin3D());
    webglRenderer1.registerPlugin(new PluginControl());

    const webglRenderer2 = new WebGLRenderer();
    webglRenderer2.registerPlugin(new Plugin3D());
    webglRenderer2.registerPlugin(new PluginControl());

    // create a canvas
    canvas1 = new Canvas({
      container: 'container1',
      width: TOTAL_WIDTH / 2,
      height: SCENE_HEIGHT,
      renderer: webglRenderer1,
    });

    canvas2 = new Canvas({
      container: 'container2',
      width: TOTAL_WIDTH / 2,
      height: SCENE_HEIGHT,
      renderer: webglRenderer2,
    });

    // scene 1
    const camera1 = canvas1.getCamera();
    camera1
      .setPosition(150, 20, 500)
      .setFocalPoint(150, 250, 0)
      .setPerspective(0.1, 1000, 75, TOTAL_WIDTH / 2 / SCENE_HEIGHT);

    (async () => {
      await canvas1.ready;

      const plugin1 = webglRenderer1.getPlugin('device-renderer');
      const device1 = plugin1.getDevice();
      const map = plugin1.loadTexture(
        'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ',
      );

      await canvas2.ready;
      const plugin2 = webglRenderer2.getPlugin('device-renderer');
      const device2 = plugin2.getDevice();

      const group1 = new Group();
      const cubeGeometry = new CubeGeometry(device1, {
        width: 200,
        height: 200,
        depth: 200,
      });
      const basicMaterial = new MeshBasicMaterial(device1, {
        map,
      });

      const cube1 = new Mesh({
        style: {
          fill: '#1890FF',
          opacity: 1,
          geometry: cubeGeometry,
          material: basicMaterial,
        },
      });

      group1.appendChild(cube1);
      group1.setPosition(150, 250, 0);
      canvas1.appendChild(group1);

      // scene2
      const camera2 = canvas2.getCamera();
      camera2.setPosition(150, 20, 500).setFocalPoint(150, 250, 0);

      const map2 = plugin2.loadTexture(
        'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ',
      );

      const cubeGeometry2 = new CubeGeometry(device2, {
        width: 200,
        height: 200,
        depth: 200,
      });
      const basicMaterial2 = new MeshBasicMaterial(device2, {
        map: map2,
      });

      const cube2 = new Mesh({
        style: {
          fill: '#1890FF',
          opacity: 1,
          geometry: cubeGeometry2,
          material: basicMaterial2,
        },
      });

      const group2 = new Group();
      group2.appendChild(cube2);
      group2.setPosition(150, 250, 0);
      canvas2.appendChild(group2);
    })();
  });

  return (
    <>
      <SplitPane
        split="vertical"
        defaultSize={TOTAL_WIDTH / 2}
        onChange={(width) => {
          canvas1.resize(width, SCENE_HEIGHT);
          canvas2.resize(TOTAL_WIDTH - width, SCENE_HEIGHT);
        }}
      >
        <div
          id="container1"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div
          id="container2"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </SplitPane>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
`,title:{zh:"\u591A\u4E2A\u753B\u5E03",en:"Multiple canvas"},filename:"multi-canvas.tsx",isNew:!1},{id:"supports-css-transform",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const $wrapper = document.getElementById('container');
$wrapper.style.transform = 'scale(1.1)';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
  supportsCSSTransform: true,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    shadowColor: 'black',
    shadowBlur: 20,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u652F\u6301\u5728\u5BB9\u5668\u4E0A\u5E94\u7528 CSS Transform",en:"Support applying CSS Transform on container"},filename:"supports-css-transform.js",isNew:!1},{id:"offscreen-canvas",source:`import { setupTransferableMethodsOnMain } from '@naoak/workerize-transferable';
// @ts-ignore
import Worker from 'workerize-loader?inline!./main.worker.js';

const worker = new Worker();

// create a canvas in main thread
const $canvas = document.createElement('canvas') as HTMLCanvasElement;
const dpr = window.devicePixelRatio;
$canvas.height = dpr * 600;
$canvas.width = dpr * 500;
$canvas.style.height = '600px';
$canvas.style.width = '500px';
document.getElementById('container').appendChild($canvas);

const { left, top } = $canvas.getBoundingClientRect();
const clonePointerEvent = (e: PointerEvent) => {
  return {
    cancelable: e.cancelable,
    pointerId: e.pointerId,
    width: e.width,
    height: e.height,
    isPrimary: e.isPrimary,
    pointerType: e.pointerType,
    pressure: e.pressure,
    tangentialPressure: e.tangentialPressure,
    tiltX: e.tiltX,
    tiltY: e.tiltY,
    twist: e.twist,
    isTrusted: e.isTrusted,
    type: e.type,
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    clientX: e.clientX - left, // account for $canvas' offset
    clientY: e.clientY - top,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    movementX: e.movementX,
    movementY: e.movementY,
    pageX: e.pageX,
    pageY: e.pageY,
    screenX: e.screenX,
    screenY: e.screenY,
  };
};

// listen to pointer events and transfer them to worker
document.addEventListener(
  'pointermove',
  (e) => {
    worker.triggerEvent('pointermove', clonePointerEvent(e));
  },
  true,
);
$canvas.addEventListener(
  'pointerdown',
  (e) => {
    worker.triggerEvent('pointerdown', clonePointerEvent(e));
  },
  true,
);
$canvas.addEventListener(
  'pointerleave',
  (e) => {
    worker.triggerEvent('pointerleave', clonePointerEvent(e));
  },
  true,
);
$canvas.addEventListener(
  'pointerover',
  (e) => {
    worker.triggerEvent('pointerover', clonePointerEvent(e));
  },
  true,
);
window.addEventListener(
  'pointerup',
  (e) => {
    worker.triggerEvent('pointerup', clonePointerEvent(e));
  },
  true,
);

// transfer canvas to worker
const offscreen = $canvas.transferControlToOffscreen();

setupTransferableMethodsOnMain(
  // worker instance
  worker,
  // the name of method which use some transferables
  {
    render: {
      // pick a transferable object from the method parameters
      pickTransferablesFromParams: (params) => [params[0]],
    },
  },
);

(async () => {
  // do rendering in WebWorker
  await worker.render(offscreen, dpr);
})();
`,title:{zh:"OffscreenCanvas",en:"OffscreenCanvas"},filename:"offscreen-canvas.ts",isNew:!1}],icon:"",id:"container",title:{en:"Canvas Container",zh:"\u753B\u5E03\u5BB9\u5668"},childrenKey:"demos",order:0},{demos:[{id:"background",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*qq3MR53YLD0AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// set container's background
const $wrapper = document.getElementById('container');
$wrapper.style.background = 'grey';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
  background: 'rgba(255, 0, 0, 0.5)',
});

// create a circle
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  r: 100,
};
circleFolder.add(circleConfig, 'r', 50, 200).onChange((r) => {
  circle.style.r = r;
});
`,title:{zh:"\u8BBE\u7F6E\u753B\u5E03\u80CC\u666F\u8272",en:"Set background of Canvas"},filename:"background.js",isNew:!1},{id:"resize",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*tJDfSaJOfmgAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import * as lil from 'lil-gui';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import Stats from 'stats.js';

// scene1 + scene2
const TOTAL_WIDTH = 600;
const SCENE_HEIGHT = 500;

const App = function MultiWorld() {
  let canvas1: Canvas;
  let canvas2: Canvas;
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0);
    const $stats = stats.dom;
    $stats.style.position = 'absolute';
    $stats.style.left = '0px';
    $stats.style.top = '0px';
    const $wrapper = document.getElementById('container');
    $wrapper.appendChild($stats);

    // create a canvas renderer
    const canvasRenderer1 = new CanvasRenderer();
    const canvasRenderer2 = new CanvasRenderer();
    const svgRenderer1 = new SVGRenderer();
    const svgRenderer2 = new SVGRenderer();
    const webglRenderer1 = new WebGLRenderer();
    const webglRenderer2 = new WebGLRenderer();
    const canvaskitRenderer1 = new CanvaskitRenderer({
      wasmDir: '/',
    });
    const canvaskitRenderer2 = new CanvaskitRenderer({
      wasmDir: '/',
    });

    // create a canvas
    canvas1 = new Canvas({
      container: 'container1',
      width: TOTAL_WIDTH / 2,
      height: SCENE_HEIGHT,
      renderer: canvasRenderer1,
    });

    canvas2 = new Canvas({
      container: 'container2',
      width: TOTAL_WIDTH / 2,
      height: SCENE_HEIGHT,
      renderer: canvasRenderer2,
    });

    canvas1.addEventListener(CanvasEvent.READY, () => {
      const circle1 = new Circle({
        style: {
          cx: 100,
          cy: 100,
          r: 100,
          fill: 'blue',
        },
      });
      canvas1.appendChild(circle1);
      circle1.on('mouseenter', () => {
        circle1.attr('fill', 'yellow');
      });
      circle1.on('mouseleave', () => {
        circle1.attr('fill', 'blue');
      });
    });

    canvas2.addEventListener(CanvasEvent.READY, () => {
      const circle2 = new Circle({
        style: {
          cx: 100,
          cy: 100,
          r: 100,
          fill: 'red',
        },
      });
      canvas2.appendChild(circle2);
      circle2.on('mouseenter', () => {
        circle2.attr('fill', 'green');
      });
      circle2.on('mouseleave', () => {
        circle2.attr('fill', 'red');
      });
    });

    // GUI
    const gui = new lil.GUI({ autoPlace: false });
    $wrapper.appendChild(gui.domElement);

    const rendererFolder = gui.addFolder('renderer');
    const rendererConfig = {
      renderer: 'canvas',
      devicePixelRatio: window.devicePixelRatio,
    };
    rendererFolder
      .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg', 'canvaskit'])
      .onChange((renderer) => {
        canvas1.setRenderer(
          renderer === 'canvas'
            ? canvasRenderer1
            : renderer === 'webgl'
            ? webglRenderer1
            : renderer === 'svg'
            ? svgRenderer1
            : canvaskitRenderer1,
        );
        canvas2.setRenderer(
          renderer === 'canvas'
            ? canvasRenderer2
            : renderer === 'webgl'
            ? webglRenderer2
            : renderer === 'svg'
            ? svgRenderer2
            : canvaskitRenderer2,
        );
      });
    rendererFolder.add(rendererConfig, 'devicePixelRatio', 0.5, 5).onChange((dpr) => {
      canvas1.getConfig().devicePixelRatio = dpr;
    });
    rendererFolder.open();
  });

  return (
    <>
      <SplitPane
        split="vertical"
        defaultSize={TOTAL_WIDTH / 2}
        onChange={(width) => {
          canvas1.resize(width, SCENE_HEIGHT);
          canvas2.resize(TOTAL_WIDTH - width, SCENE_HEIGHT);
        }}
      >
        <div
          id="container1"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div
          id="container2"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </SplitPane>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
`,title:{zh:"\u6539\u53D8\u753B\u5E03\u5927\u5C0F",en:"Resize canvas"},filename:"resize.tsx",isNew:!1},{id:"rendering-on-demand",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*FfHBTr2ACAkAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
solarSystem
   |    |
   |   sun
   |
 earthOrbit
   |    |
   |  earth
   |
  moonOrbit
      |
     moon
 */

// create a renderer
const canvasRenderer = new CanvasRenderer({
  enableAutoRendering: false,
});
const webglRenderer = new WebGLRenderer({
  enableAutoRendering: false,
});
const svgRenderer = new SVGRenderer({
  enableAutoRendering: false,
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const solarSystem = new Group({
    id: 'solarSystem',
  });
  const earthOrbit = new Group({
    id: 'earthOrbit',
  });
  const moonOrbit = new Group({
    id: 'moonOrbit',
  });

  const sun = new Circle({
    id: 'sun',
    style: {
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const earth = new Circle({
    id: 'earth',
    style: {
      r: 50,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const moon = new Circle({
    id: 'moon',
    style: {
      r: 25,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  solarSystem.appendChild(sun);
  solarSystem.appendChild(earthOrbit);
  earthOrbit.appendChild(earth);
  earthOrbit.appendChild(moonOrbit);
  moonOrbit.appendChild(moon);

  solarSystem.setPosition(300, 250);
  earthOrbit.translate(100, 0);
  moonOrbit.translate(100, 0);

  canvas.appendChild(solarSystem);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  // create a main loop
  const tick = () => {
    if (stats) {
      stats.update();
    }

    // call \`render\` in each frame
    canvas.render();

    solarSystem.rotateLocal(1);
    earthOrbit.rotateLocal(2);

    requestAnimationFrame(tick);
  };
  tick();
});
`,title:{zh:"\u6309\u9700\u6E32\u67D3",en:"Rendering on demand"},filename:"rendering-on-demand.js",isNew:!1},{id:"element-from-point",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*74P9SbUsM5QAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Pick target by calling API instead of interactive events.
 * DisplayObject's \`interactive\` & \`visibility\` will affect picking but not \`opacity\`.
 *
 * You can move the red picking point with mouse click or lil-gui.
 *
 * more informations @see /zh/docs/api/builtin-objects/document#elementsfrompoint
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // create a circle
  const circle1 = new Circle({
    id: 'circle1',
    style: {
      cx: 100,
      cy: 100,
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  canvas.appendChild(circle1);

  // clone another circle
  const circle2 = circle1.cloneNode();
  circle2.id = 'circle2';
  circle2.translate(50, 50);
  canvas.appendChild(circle2);

  const result = new Text({
    interactive: false, // we don't want picking itself
    style: {
      x: 50,
      y: 300,
      fontSize: 32,
      fill: 'black',
    },
  });
  canvas.appendChild(result);

  // represent the picking point
  const pickingPoint = new Circle({
    interactive: false, // we don't want picking itself
    style: {
      cx: 150,
      cy: 150,
      r: 20,
      fill: '#F04864',
    },
  });
  canvas.appendChild(pickingPoint);

  canvas.addEventListener('click', (e) => {
    pickingPoint.setLocalPosition(e.canvasX, e.canvasY);

    pickingConfig.x = e.canvasX;
    pickingConfig.y = e.canvasY;
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const pickingFolder = gui.addFolder('point for picking');
  const pickingConfig = {
    x: 150,
    y: 150,
    elementFromPoint: async () => {
      const target = await canvas.document.elementFromPoint(pickingConfig.x, pickingConfig.y);

      result.style.text = (target && target.id) || 'null';
    },
    elementsFromPoint: async () => {
      const targets = await canvas.document.elementsFromPoint(pickingConfig.x, pickingConfig.y);

      result.style.text = '[' + targets.map((target) => target.id).join(', ') + ']';
    },
  };
  pickingFolder
    .add(pickingConfig, 'x', -100, 400)
    .onChange((x) => {
      const [_, y] = pickingPoint.getLocalPosition();
      pickingPoint.setLocalPosition(x, y);
    })
    .listen();
  pickingFolder
    .add(pickingConfig, 'y', -100, 400)
    .onChange((y) => {
      const [x, _] = pickingPoint.getLocalPosition();
      pickingPoint.setLocalPosition(x, y);
    })
    .listen();
  pickingFolder.add(pickingConfig, 'elementFromPoint').name('elementFromPoint');
  pickingFolder.add(pickingConfig, 'elementsFromPoint').name('elementsFromPoint');
  pickingFolder.open();

  const circle1Folder = gui.addFolder('circle1');
  const circle1Config = {
    interactive: true,
    visibility: 'visible',
    opacity: 1,
  };
  circle1Folder.add(circle1Config, 'interactive').onChange((interactive) => {
    circle1.interactive = interactive;
  });
  circle1Folder.add(circle1Config, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
    circle1.style.visibility = visibility;
  });
  circle1Folder.add(circle1Config, 'opacity', 0, 1).onChange((opacity) => {
    circle1.style.opacity = opacity;
  });
  const circle2Folder = gui.addFolder('circle2');
  const circle2Config = {
    interactive: true,
    visibility: 'visible',
    opacity: 1,
  };
  circle2Folder.add(circle2Config, 'interactive').onChange((interactive) => {
    circle2.interactive = interactive;
  });
  circle2Folder.add(circle2Config, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
    circle2.style.visibility = visibility;
  });
  circle2Folder.add(circle2Config, 'opacity', 0, 1).onChange((opacity) => {
    circle2.style.opacity = opacity;
  });
});
`,title:{zh:"\u901A\u8FC7 API \u65B9\u5F0F\u5B8C\u6210\u62FE\u53D6",en:"Use picking API"},filename:"element-from-point.js",isNew:!1}],icon:"",id:"basic",title:{en:"Canvas",zh:"\u753B\u5E03"},childrenKey:"demos",order:1}],childrenKey:"examples"},{id:"camera",title:{zh:"\u76F8\u673A",en:"Camera"},examples:[{demos:[{id:"ortho",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*5cbxQ5CF1GEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Group } from '@antv/g';
import { CubeGeometry, Mesh, MeshBasicMaterial, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(new Plugin3D());
webglRenderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

// create an orthographic camera
const camera = canvas.getCamera();
const group = new Group();

(async () => {
  await canvas.ready;

  const plugin = webglRenderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
  );

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: cubeGeometry,
      material: basicMaterial,
    },
  });
  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);
})();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
  group.rotate(0, 1, 0);
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const cameraFolder = gui.addFolder('orthographic projection');
const cameraConfig = {
  near: 0.1,
  far: 1000,
  zoom: 1,
};
cameraFolder.add(cameraConfig, 'near', 0, 600).onChange((near) => {
  camera.setNear(near);
});
cameraFolder.add(cameraConfig, 'far', 0, 1000).onChange((far) => {
  camera.setFar(far);
});
cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
  camera.setZoom(zoom);
});
cameraFolder.open();
`,title:{zh:"\u6B63\u4EA4\u6295\u5F71\u76F8\u673A",en:"Orthographic camera"},filename:"ortho.js",isNew:!1},{id:"perspective",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*wrMTSZeQGvsAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Group } from '@antv/g';
import { CubeGeometry, Mesh, MeshBasicMaterial, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a webgl renderer
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(new Plugin3D());
webglRenderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

// create a perspective camera
const camera = canvas.getCamera();
camera.setPerspective(0.1, 1000, 75, 600 / 500);

const group = new Group();

(async () => {
  await canvas.ready;
  const plugin = webglRenderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
  );

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: cubeGeometry,
      material: basicMaterial,
    },
  });
  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);
})();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
  group.rotate(0, 1, 0);
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);

const cameraFolder = gui.addFolder('perspective');
const cameraConfig = {
  fov: 75,
  near: 0.1,
  far: 1000,
  zoom: 1,
};
cameraFolder.add(cameraConfig, 'fov', 0, 180).onChange((fov) => {
  camera.setFov(fov);
});
cameraFolder.add(cameraConfig, 'near', 0, 600).onChange((near) => {
  camera.setNear(near);
});
cameraFolder.add(cameraConfig, 'far', 0, 1000).onChange((far) => {
  camera.setFar(far);
});
cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
  camera.setZoom(zoom);
});
cameraFolder.open();
`,title:{zh:"\u900F\u89C6\u6295\u5F71\u76F8\u673A",en:"Perspective camera"},filename:"perspective.js",isNew:!1}],icon:"",id:"projection-mode",title:{en:"Camera Projection Mode",zh:"\u76F8\u673A\u6295\u5F71\u6A21\u5F0F"},childrenKey:"demos",order:1},{demos:[{id:"landmark2",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*EL2XSL5qSQ8AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const camera = canvas.getCamera();

// create landmarks
camera.createLandmark('reset', {
  position: [300, 250],
  focalPoint: [300, 250],
  zoom: 1,
});
camera.createLandmark('look at red circle', {
  position: [200, 200],
  focalPoint: [200, 200],
  zoom: 2,
  roll: 30,
});
camera.createLandmark('look at green circle', {
  position: [400, 400],
  focalPoint: [400, 400],
  zoom: 2,
});

const circle1 = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 50,
    fill: 'red',
  },
});
const circle2 = circle1.cloneNode();
circle2.setPosition(400, 400);
circle2.style.fill = 'green';

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle1);
  canvas.appendChild(circle2);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const cameraFolder = gui.addFolder('camera landmarks');
const cameraConfig = {
  goToMark1: () => {
    camera.gotoLandmark('reset', {
      duration: 1000,
      easing: 'ease-in',
      onfinish: () => {
        console.log('reset finished');
      },
    });
  },
  goToMark2: () => {
    camera.gotoLandmark('look at red circle', {
      duration: 300,
      easing: 'linear',
    });
  },
  goToMark3: () => {
    camera.gotoLandmark('look at green circle', {
      duration: 300,
      easing: 'linear',
    });
  },
};
cameraFolder.add(cameraConfig, 'goToMark1').name('reset');
cameraFolder.add(cameraConfig, 'goToMark2').name('look at red circle');
cameraFolder.add(cameraConfig, 'goToMark3').name('look at green circle');
cameraFolder.open();
`,title:{zh:"2D \u573A\u666F\u4E0B\u7684\u76F8\u673A\u52A8\u753B",en:"Landmark"},filename:"landmark2.js",isNew:!1},{id:"landmark",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*o4eKT4ZQfJcAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Line, CameraType } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshPhongMaterial,
  SphereGeometry,
  DirectionalLight,
  Mesh,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import { forceLink, forceSimulation, forceManyBody, forceCenter } from 'd3-force-3d';

// https://bl.ocks.org/vasturiano/f59675656258d3f490e9faa40828c0e7
const dataset = {
  nodes: [
    {
      id: 'Myriel',
      group: 1,
    },
    {
      id: 'Napoleon',
      group: 1,
    },
    {
      id: 'Mlle.Baptistine',
      group: 1,
    },
    {
      id: 'Mme.Magloire',
      group: 1,
    },
    {
      id: 'CountessdeLo',
      group: 1,
    },
    {
      id: 'Geborand',
      group: 1,
    },
    {
      id: 'Champtercier',
      group: 1,
    },
    {
      id: 'Cravatte',
      group: 1,
    },
    {
      id: 'Count',
      group: 1,
    },
    {
      id: 'OldMan',
      group: 1,
    },
    {
      id: 'Labarre',
      group: 2,
    },
    {
      id: 'Valjean',
      group: 2,
    },
    {
      id: 'Marguerite',
      group: 3,
    },
    {
      id: 'Mme.deR',
      group: 2,
    },
    {
      id: 'Isabeau',
      group: 2,
    },
    {
      id: 'Gervais',
      group: 2,
    },
    {
      id: 'Tholomyes',
      group: 3,
    },
    {
      id: 'Listolier',
      group: 3,
    },
    {
      id: 'Fameuil',
      group: 3,
    },
    {
      id: 'Blacheville',
      group: 3,
    },
    {
      id: 'Favourite',
      group: 3,
    },
    {
      id: 'Dahlia',
      group: 3,
    },
    {
      id: 'Zephine',
      group: 3,
    },
    {
      id: 'Fantine',
      group: 3,
    },
    {
      id: 'Mme.Thenardier',
      group: 4,
    },
    {
      id: 'Thenardier',
      group: 4,
    },
    {
      id: 'Cosette',
      group: 5,
    },
    {
      id: 'Javert',
      group: 4,
    },
    {
      id: 'Fauchelevent',
      group: 0,
    },
    {
      id: 'Bamatabois',
      group: 2,
    },
    {
      id: 'Perpetue',
      group: 3,
    },
    {
      id: 'Simplice',
      group: 2,
    },
    {
      id: 'Scaufflaire',
      group: 2,
    },
    {
      id: 'Woman1',
      group: 2,
    },
    {
      id: 'Judge',
      group: 2,
    },
    {
      id: 'Champmathieu',
      group: 2,
    },
    {
      id: 'Brevet',
      group: 2,
    },
    {
      id: 'Chenildieu',
      group: 2,
    },
    {
      id: 'Cochepaille',
      group: 2,
    },
    {
      id: 'Pontmercy',
      group: 4,
    },
    {
      id: 'Boulatruelle',
      group: 6,
    },
    {
      id: 'Eponine',
      group: 4,
    },
    {
      id: 'Anzelma',
      group: 4,
    },
    {
      id: 'Woman2',
      group: 5,
    },
    {
      id: 'MotherInnocent',
      group: 0,
    },
    {
      id: 'Gribier',
      group: 0,
    },
    {
      id: 'Jondrette',
      group: 7,
    },
    {
      id: 'Mme.Burgon',
      group: 7,
    },
    {
      id: 'Gavroche',
      group: 8,
    },
    {
      id: 'Gillenormand',
      group: 5,
    },
    {
      id: 'Magnon',
      group: 5,
    },
    {
      id: 'Mlle.Gillenormand',
      group: 5,
    },
    {
      id: 'Mme.Pontmercy',
      group: 5,
    },
    {
      id: 'Mlle.Vaubois',
      group: 5,
    },
    {
      id: 'Lt.Gillenormand',
      group: 5,
    },
    {
      id: 'Marius',
      group: 8,
    },
    {
      id: 'BaronessT',
      group: 5,
    },
    {
      id: 'Mabeuf',
      group: 8,
    },
    {
      id: 'Enjolras',
      group: 8,
    },
    {
      id: 'Combeferre',
      group: 8,
    },
    {
      id: 'Prouvaire',
      group: 8,
    },
    {
      id: 'Feuilly',
      group: 8,
    },
    {
      id: 'Courfeyrac',
      group: 8,
    },
    {
      id: 'Bahorel',
      group: 8,
    },
    {
      id: 'Bossuet',
      group: 8,
    },
    {
      id: 'Joly',
      group: 8,
    },
    {
      id: 'Grantaire',
      group: 8,
    },
    {
      id: 'MotherPlutarch',
      group: 9,
    },
    {
      id: 'Gueulemer',
      group: 4,
    },
    {
      id: 'Babet',
      group: 4,
    },
    {
      id: 'Claquesous',
      group: 4,
    },
    {
      id: 'Montparnasse',
      group: 4,
    },
    {
      id: 'Toussaint',
      group: 5,
    },
    {
      id: 'Child1',
      group: 10,
    },
    {
      id: 'Child2',
      group: 10,
    },
    {
      id: 'Brujon',
      group: 4,
    },
    {
      id: 'Mme.Hucheloup',
      group: 8,
    },
  ],
  links: [
    {
      source: 'Napoleon',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Mlle.Baptistine',
      target: 'Myriel',
      value: 8,
    },
    {
      source: 'Mme.Magloire',
      target: 'Myriel',
      value: 10,
    },
    {
      source: 'Mme.Magloire',
      target: 'Mlle.Baptistine',
      value: 6,
    },
    {
      source: 'CountessdeLo',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Geborand',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Champtercier',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Cravatte',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Count',
      target: 'Myriel',
      value: 2,
    },
    {
      source: 'OldMan',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Valjean',
      target: 'Labarre',
      value: 1,
    },
    {
      source: 'Valjean',
      target: 'Mme.Magloire',
      value: 3,
    },
    {
      source: 'Valjean',
      target: 'Mlle.Baptistine',
      value: 3,
    },
    {
      source: 'Valjean',
      target: 'Myriel',
      value: 5,
    },
    {
      source: 'Marguerite',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Mme.deR',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Isabeau',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gervais',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Listolier',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Fameuil',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Fameuil',
      target: 'Listolier',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Listolier',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Fameuil',
      value: 4,
    },
    {
      source: 'Favourite',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Blacheville',
      value: 4,
    },
    {
      source: 'Dahlia',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Favourite',
      value: 5,
    },
    {
      source: 'Zephine',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Favourite',
      value: 4,
    },
    {
      source: 'Zephine',
      target: 'Dahlia',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Favourite',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Dahlia',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Zephine',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Marguerite',
      value: 2,
    },
    {
      source: 'Fantine',
      target: 'Valjean',
      value: 9,
    },
    {
      source: 'Mme.Thenardier',
      target: 'Fantine',
      value: 2,
    },
    {
      source: 'Mme.Thenardier',
      target: 'Valjean',
      value: 7,
    },
    {
      source: 'Thenardier',
      target: 'Mme.Thenardier',
      value: 13,
    },
    {
      source: 'Thenardier',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Thenardier',
      target: 'Valjean',
      value: 12,
    },
    {
      source: 'Cosette',
      target: 'Mme.Thenardier',
      value: 4,
    },
    {
      source: 'Cosette',
      target: 'Valjean',
      value: 31,
    },
    {
      source: 'Cosette',
      target: 'Tholomyes',
      value: 1,
    },
    {
      source: 'Cosette',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Javert',
      target: 'Valjean',
      value: 17,
    },
    {
      source: 'Javert',
      target: 'Fantine',
      value: 5,
    },
    {
      source: 'Javert',
      target: 'Thenardier',
      value: 5,
    },
    {
      source: 'Javert',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Javert',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Fauchelevent',
      target: 'Valjean',
      value: 8,
    },
    {
      source: 'Fauchelevent',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Perpetue',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Simplice',
      target: 'Perpetue',
      value: 2,
    },
    {
      source: 'Simplice',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Simplice',
      target: 'Fantine',
      value: 2,
    },
    {
      source: 'Simplice',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Scaufflaire',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Woman1',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Woman1',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Judge',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Judge',
      target: 'Bamatabois',
      value: 2,
    },
    {
      source: 'Champmathieu',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Champmathieu',
      target: 'Judge',
      value: 3,
    },
    {
      source: 'Champmathieu',
      target: 'Bamatabois',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Chenildieu',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Brevet',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Cochepaille',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Brevet',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Chenildieu',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Pontmercy',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Boulatruelle',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Eponine',
      target: 'Mme.Thenardier',
      value: 2,
    },
    {
      source: 'Eponine',
      target: 'Thenardier',
      value: 3,
    },
    {
      source: 'Anzelma',
      target: 'Eponine',
      value: 2,
    },
    {
      source: 'Anzelma',
      target: 'Thenardier',
      value: 2,
    },
    {
      source: 'Anzelma',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Woman2',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Woman2',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Woman2',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'MotherInnocent',
      target: 'Fauchelevent',
      value: 3,
    },
    {
      source: 'MotherInnocent',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gribier',
      target: 'Fauchelevent',
      value: 2,
    },
    {
      source: 'Mme.Burgon',
      target: 'Jondrette',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Mme.Burgon',
      value: 2,
    },
    {
      source: 'Gavroche',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gillenormand',
      target: 'Cosette',
      value: 3,
    },
    {
      source: 'Gillenormand',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Magnon',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'Magnon',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Gillenormand',
      value: 9,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Cosette',
      value: 2,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Mme.Pontmercy',
      target: 'Mlle.Gillenormand',
      value: 1,
    },
    {
      source: 'Mme.Pontmercy',
      target: 'Pontmercy',
      value: 1,
    },
    {
      source: 'Mlle.Vaubois',
      target: 'Mlle.Gillenormand',
      value: 1,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Mlle.Gillenormand',
      value: 2,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Mlle.Gillenormand',
      value: 6,
    },
    {
      source: 'Marius',
      target: 'Gillenormand',
      value: 12,
    },
    {
      source: 'Marius',
      target: 'Pontmercy',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Lt.Gillenormand',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Cosette',
      value: 21,
    },
    {
      source: 'Marius',
      target: 'Valjean',
      value: 19,
    },
    {
      source: 'Marius',
      target: 'Tholomyes',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Thenardier',
      value: 2,
    },
    {
      source: 'Marius',
      target: 'Eponine',
      value: 5,
    },
    {
      source: 'Marius',
      target: 'Gavroche',
      value: 4,
    },
    {
      source: 'BaronessT',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'BaronessT',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Enjolras',
      target: 'Marius',
      value: 7,
    },
    {
      source: 'Enjolras',
      target: 'Gavroche',
      value: 7,
    },
    {
      source: 'Enjolras',
      target: 'Javert',
      value: 6,
    },
    {
      source: 'Enjolras',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Enjolras',
      target: 'Valjean',
      value: 4,
    },
    {
      source: 'Combeferre',
      target: 'Enjolras',
      value: 15,
    },
    {
      source: 'Combeferre',
      target: 'Marius',
      value: 5,
    },
    {
      source: 'Combeferre',
      target: 'Gavroche',
      value: 6,
    },
    {
      source: 'Combeferre',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Prouvaire',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Prouvaire',
      target: 'Enjolras',
      value: 4,
    },
    {
      source: 'Prouvaire',
      target: 'Combeferre',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Enjolras',
      value: 6,
    },
    {
      source: 'Feuilly',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Feuilly',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Feuilly',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Courfeyrac',
      target: 'Marius',
      value: 9,
    },
    {
      source: 'Courfeyrac',
      target: 'Enjolras',
      value: 17,
    },
    {
      source: 'Courfeyrac',
      target: 'Combeferre',
      value: 13,
    },
    {
      source: 'Courfeyrac',
      target: 'Gavroche',
      value: 7,
    },
    {
      source: 'Courfeyrac',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Courfeyrac',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Courfeyrac',
      target: 'Feuilly',
      value: 6,
    },
    {
      source: 'Courfeyrac',
      target: 'Prouvaire',
      value: 3,
    },
    {
      source: 'Bahorel',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Bahorel',
      target: 'Gavroche',
      value: 5,
    },
    {
      source: 'Bahorel',
      target: 'Courfeyrac',
      value: 6,
    },
    {
      source: 'Bahorel',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Bahorel',
      target: 'Enjolras',
      value: 4,
    },
    {
      source: 'Bahorel',
      target: 'Feuilly',
      value: 3,
    },
    {
      source: 'Bahorel',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Bahorel',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Bossuet',
      target: 'Marius',
      value: 5,
    },
    {
      source: 'Bossuet',
      target: 'Courfeyrac',
      value: 12,
    },
    {
      source: 'Bossuet',
      target: 'Gavroche',
      value: 5,
    },
    {
      source: 'Bossuet',
      target: 'Bahorel',
      value: 4,
    },
    {
      source: 'Bossuet',
      target: 'Enjolras',
      value: 10,
    },
    {
      source: 'Bossuet',
      target: 'Feuilly',
      value: 6,
    },
    {
      source: 'Bossuet',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Bossuet',
      target: 'Combeferre',
      value: 9,
    },
    {
      source: 'Bossuet',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Bossuet',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Joly',
      target: 'Bahorel',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Bossuet',
      value: 7,
    },
    {
      source: 'Joly',
      target: 'Gavroche',
      value: 3,
    },
    {
      source: 'Joly',
      target: 'Courfeyrac',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Enjolras',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Feuilly',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Joly',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Joly',
      target: 'Marius',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Bossuet',
      value: 3,
    },
    {
      source: 'Grantaire',
      target: 'Enjolras',
      value: 3,
    },
    {
      source: 'Grantaire',
      target: 'Combeferre',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Courfeyrac',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Joly',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Bahorel',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Feuilly',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Prouvaire',
      value: 1,
    },
    {
      source: 'MotherPlutarch',
      target: 'Mabeuf',
      value: 3,
    },
    {
      source: 'Gueulemer',
      target: 'Thenardier',
      value: 5,
    },
    {
      source: 'Gueulemer',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Thenardier',
      value: 6,
    },
    {
      source: 'Babet',
      target: 'Gueulemer',
      value: 6,
    },
    {
      source: 'Babet',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Javert',
      value: 2,
    },
    {
      source: 'Babet',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Thenardier',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Babet',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Gueulemer',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Enjolras',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Babet',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Gueulemer',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Claquesous',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Toussaint',
      target: 'Cosette',
      value: 2,
    },
    {
      source: 'Toussaint',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Toussaint',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Child1',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Child2',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Child2',
      target: 'Child1',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Babet',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Gueulemer',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Thenardier',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Claquesous',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Montparnasse',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Bossuet',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Joly',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Grantaire',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Bahorel',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Courfeyrac',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Enjolras',
      value: 1,
    },
  ],
};

// start 3d force simulation
const simulation = forceSimulation(dataset.nodes, 3)
  .force(
    'link',
    forceLink().id(function (d) {
      return d.id;
    }),
  )
  .force('charge', forceManyBody())
  .force('center', forceCenter(0, 0));
simulation.nodes(dataset.nodes);
simulation.force('link').links(dataset.links);
simulation.tick(1000);

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;
  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // create a sphere geometry
  const sphereGeometry = new SphereGeometry(device, {
    radius: 10,
    latitudeBands: 32,
    longitudeBands: 32,
  });
  // create a material with Phong lighting model
  const material = new MeshPhongMaterial(device, {
    shininess: 30,
  });

  // @see https://antv.vision/en/docs/specification/language/palette#%E5%88%86%E7%B1%BB%E8%89%B2%E6%9D%BF
  const colorPalette = [
    '#5B8FF9',
    '#CDDDFD',
    '#61DDAA',
    '#CDF3E4',
    '#65789B',
    '#F6BD16',
    '#7262fd',
    '#78D3F8',
    '#9661BC',
    '#F6903D',
    '#008685',
    '#F08BB4',
  ];
  dataset.nodes.forEach((node) => {
    const fill = colorPalette[node.group];
    // create a mesh
    const sphere = new Mesh({
      id: node.id,
      style: {
        fill,
        opacity: 1,
        geometry: sphereGeometry,
        material,
        cursor: 'pointer',
      },
    });
    sphere.setPosition(node.x + 300, node.y + 250, node.z);
    canvas.appendChild(sphere);

    sphere.addEventListener('mouseenter', () => {
      sphere.style.fill = 'red';
    });
    sphere.addEventListener('mouseleave', () => {
      sphere.style.fill = fill;
    });
  });

  dataset.links.forEach((edge) => {
    const { source, target } = edge;
    const line = new Line({
      style: {
        x1: source.x + 300,
        y1: source.y + 250,
        z1: source.z,
        x2: target.x + 300,
        y2: target.y + 250,
        z2: target.z,
        stroke: 'black',
        lineWidth: 2,
        opacity: 0.5,
        isBillboard: true, // \u59CB\u7EC8\u9762\u5411\u5C4F\u5E55
      },
    });
    canvas.appendChild(line);
  });

  // add a directional light into scene
  const light = new DirectionalLight({
    style: {
      fill: 'white',
      direction: [-1, 0, 1],
    },
  });
  canvas.appendChild(light);

  // adjust camera's position
  const camera = canvas.getCamera();
  camera.setPerspective(0.1, 1000, 45, 600 / 500);

  // create landmarks
  camera.createLandmark('reset', {
    position: [300, 250, 500],
    focalPoint: [300, 250, 0],
    zoom: 1,
  });
  camera.createLandmark('landmark1', {
    position: [200, 200, 300],
    focalPoint: [200, 200, 0],
    zoom: 1,
    roll: 30,
  });
  camera.createLandmark('landmark2', {
    position: [400, 400, 200],
    focalPoint: [400, 400, 0],
    zoom: 0.75,
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const cameraFolder = gui.addFolder('camera landmarks');
  const cameraConfig = {
    type: 'Exploring',
    goToMark1: () => {
      camera.gotoLandmark('reset', {
        duration: 1000,
        easing: 'ease-in',
        onfinish: () => {
          console.log('reset finished');
        },
      });
    },
    goToMark2: () => {
      camera.gotoLandmark('landmark1', {
        duration: 300,
        easing: 'linear',
      });
    },
    goToMark3: () => {
      camera.gotoLandmark('landmark2', {
        duration: 1000,
        easing: 'linear',
      });
    },
    // shot1: () => {
    //   const sphere1 = canvas.document.getElementById('Valjean');
    //   camera.shot(sphere1);
    // },
    // shot2: () => {
    //   const sphere2 = canvas.document.getElementById('Bahorel');
    //   camera.shot(sphere2);
    // },
  };
  cameraFolder.add(cameraConfig, 'goToMark1').name('reset');
  cameraFolder.add(cameraConfig, 'goToMark2').name('landmark1');
  cameraFolder.add(cameraConfig, 'goToMark3').name('landmark2');
  const types = ['Orbiting', 'Exploring', 'Tracking'];
  const enums = [CameraType.ORBITING, CameraType.EXPLORING, CameraType.TRACKING];
  cameraFolder.add(cameraConfig, 'type', types).onChange((type) => {
    const index = types.indexOf(type);
    camera.setType(enums[index]);
  });
  // cameraFolder.add(cameraConfig, 'shot1').name('shot1');
  // cameraFolder.add(cameraConfig, 'shot2').name('shot2');
  cameraFolder.open();
})();
`,title:{zh:"3D \u573A\u666F\u4E0B\u7684\u76F8\u673A\u52A8\u753B",en:"Landmark"},filename:"landmark.js",isNew:!1}],icon:"",id:"camera-animation",title:{en:"Camera Animation",zh:"\u76F8\u673A\u52A8\u753B"},childrenKey:"demos",order:2},{demos:[{id:"action",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*goX8QqgVSMEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// get camera
const camera = canvas.getCamera();

canvas.addEventListener(CanvasEvent.READY, () => {
  const solarSystem = new Group({
    id: 'solarSystem',
  });
  const earthOrbit = new Group({
    id: 'earthOrbit',
  });
  const moonOrbit = new Group({
    id: 'moonOrbit',
  });

  const sun = new Circle({
    id: 'sun',
    style: {
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const sunLabel = new Text({
    style: {
      fontSize: 30,
      text: 'Sun',
      fill: 'white',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  sun.appendChild(sunLabel);
  const earth = new Circle({
    id: 'earth',
    style: {
      r: 50,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const earthLabel = new Text({
    style: {
      fontSize: 20,
      text: 'Earth',
      fill: 'white',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  earth.appendChild(earthLabel);
  const moon = new Circle({
    id: 'moon',
    style: {
      r: 25,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const moonLabel = new Text({
    style: {
      fontSize: 10,
      text: 'Moon',
      fill: 'white',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  moon.appendChild(moonLabel);

  solarSystem.appendChild(sun);
  solarSystem.appendChild(earthOrbit);
  earthOrbit.appendChild(earth);
  earthOrbit.appendChild(moonOrbit);
  moonOrbit.appendChild(moon);

  solarSystem.setPosition(300, 250);
  earthOrbit.translate(100, 0);
  moonOrbit.translate(100, 0);

  canvas.appendChild(solarSystem);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    solarSystem.rotateLocal(1);
    earthOrbit.rotateLocal(2);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const cameraFolder = gui.addFolder('camera actions');
  const cameraConfig = {
    panX: 0,
    panY: 0,
    zoom: 1,
    roll: 0,
  };

  const origin = camera.getPosition();
  cameraFolder.add(cameraConfig, 'panX', -300, 300).onChange((panX) => {
    const current = camera.getPosition();
    camera.pan(origin[0] + panX - current[0], 0);
  });
  cameraFolder.add(cameraConfig, 'panY', -300, 300).onChange((panY) => {
    const current = camera.getPosition();
    camera.pan(0, origin[1] + panY - current[1]);
  });
  cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
    camera.rotate(0, 0, roll);
  });
  cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
    camera.setZoom(zoom);
  });
  cameraFolder.open();
});
`,title:{zh:"\u76F8\u673A\u52A8\u4F5C",en:"Camera actions"},filename:"action.js",isNew:!1},{id:"view-offset",source:`import { Canvas, CanvasEvent, Group } from '@antv/g';
import { CubeGeometry, Mesh, MeshBasicMaterial, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(new Plugin3D());
webglRenderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

// create an orthographic camera
const camera = canvas.getCamera();
const group = new Group();

(async () => {
  await canvas.ready;
  const plugin = webglRenderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
  );

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: cubeGeometry,
      material: basicMaterial,
    },
  });
  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);
})();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
  group.rotate(0, 1, 0);
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const cameraFolder = gui.addFolder('set view offset');
const cameraConfig = {
  fullWidth: 600,
  fullHeight: 500,
  x: 0,
  y: 0,
  width: 600,
  height: 500,
  clearViewOffset: () => {
    camera.clearViewOffset();
    cameraConfig.x = 0;
    cameraConfig.y = 0;
    cameraConfig.width = 600;
    cameraConfig.height = 500;
  },
};
cameraFolder
  .add(cameraConfig, 'x', 0, 600)
  .onChange((x) => {
    camera.setViewOffset(
      cameraConfig.fullWidth,
      cameraConfig.fullHeight,
      x,
      cameraConfig.y,
      cameraConfig.width,
      cameraConfig.height,
    );
  })
  .listen();
cameraFolder
  .add(cameraConfig, 'y', 0, 500)
  .onChange((y) => {
    camera.setViewOffset(
      cameraConfig.fullWidth,
      cameraConfig.fullHeight,
      cameraConfig.x,
      y,
      cameraConfig.width,
      cameraConfig.height,
    );
  })
  .listen();
cameraFolder
  .add(cameraConfig, 'width', 0, 1200)
  .onChange((width) => {
    camera.setViewOffset(
      cameraConfig.fullWidth,
      cameraConfig.fullHeight,
      cameraConfig.x,
      cameraConfig.y,
      width,
      cameraConfig.height,
    );
  })
  .listen();
cameraFolder
  .add(cameraConfig, 'height', 0, 1000)
  .onChange((height) => {
    camera.setViewOffset(
      cameraConfig.fullWidth,
      cameraConfig.fullHeight,
      cameraConfig.x,
      cameraConfig.y,
      cameraConfig.width,
      height,
    );
  })
  .listen();
cameraFolder.add(cameraConfig, 'clearViewOffset').name('clearViewOffset');
cameraFolder.open();
`,title:{zh:"View Offset",en:"View Offset"},filename:"view-offset.js",isNew:!1},{id:"zoom-by-point",screenshot:"https://gw.alipayobjects.com/zos/raptor/1667978070897/Nov-09-2022%25252015-13-27.gif",source:`import { Canvas, CanvasEvent, Ellipse } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import Hammer from 'hammerjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 500,
  height: 500,
  renderer: canvasRenderer,
});

const camera = canvas.getCamera();

const ellipse = new Ellipse({
  style: {
    cx: 250,
    cy: 250,
    rx: 100,
    ry: 150,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(ellipse);
});

// handle mouse wheel event
const bindWheelHandler = () => {
  // update Camera's zoom
  // @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js
  const minZoom = 0;
  const maxZoom = Infinity;
  canvas
    .getContextService()
    .getDomElement() // g-canvas/webgl \u4E3A <canvas>\uFF0Cg-svg \u4E3A <svg>
    .addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();

        const { x, y } = canvas.client2Viewport({ x: e.clientX, y: e.clientY });

        let zoom;
        if (e.deltaY < 0) {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() / 0.95));
        } else {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() * 0.95));
        }

        camera.setZoomByViewportPoint(zoom, [x, y]);
      },
      { passive: false },
    );
};

// use hammer.js
const hammer = new Hammer(canvas);
hammer.on('pan', (ev) => {
  camera.pan(
    (-ev.deltaX / Math.pow(2, camera.getZoom())) * 0.5,
    (-ev.deltaY / Math.pow(2, camera.getZoom())) * 0.5,
  );
});

bindWheelHandler();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange(async (rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    await canvas.setRenderer(renderer);
    bindWheelHandler();
  });
rendererFolder.open();

const cameraFolder = gui.addFolder('camera actions');
const cameraConfig = {
  panX: 0,
  panY: 0,
  zoom: 1,
  roll: 0,
};

const origin = camera.getPosition();
cameraFolder.add(cameraConfig, 'panX', -300, 300).onChange((panX) => {
  const current = camera.getPosition();
  camera.pan(origin[0] + panX - current[0], 0);
});
cameraFolder.add(cameraConfig, 'panY', -300, 300).onChange((panY) => {
  const current = camera.getPosition();
  camera.pan(0, origin[1] + panY - current[1]);
});
cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
  camera.rotate(0, 0, roll);
});
cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
  camera.setZoom(zoom);
});
cameraFolder.open();
`,title:{zh:"\u4EE5\u6307\u5B9A\u89C6\u70B9\u7F29\u653E",en:"Zoom by specified viewport point"},filename:"zoom-by-point.js",isNew:!1}],icon:"",id:"camera-action",title:{en:"Camera Action",zh:"\u76F8\u673A\u52A8\u4F5C"},childrenKey:"demos",order:10}],childrenKey:"examples"},{id:"shape",title:{zh:"\u57FA\u672C\u56FE\u5F62",en:"Shape"},examples:[{demos:[{id:"circle",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*FfHBTr2ACAkAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    shadowColor: 'black',
    shadowBlur: 20,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// use AntV G devtools
window.__g_instances__ = [canvas];

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  cx: 300,
  cy: 200,
  r: 100,
  fill: '#1890FF',
  stroke: '#F04864',
  lineWidth: 4,
  lineDash: 0,
  lineDashOffset: 0,
  fillOpacity: 1,
  strokeOpacity: 1,
  shadowType: 'outer',
  shadowColor: '#000',
  shadowBlur: 20,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  pointerEvents: 'auto',
  visibility: 'visible',
};
circleFolder.add(circleConfig, 'cx', 0, 600).onChange((cx) => {
  circle.style.cx = cx;
});
circleFolder.add(circleConfig, 'cy', 0, 600).onChange((cy) => {
  circle.style.cy = cy;
});
circleFolder.add(circleConfig, 'r', 50, 200).onChange((r) => {
  circle.style.r = r;
});
circleFolder.addColor(circleConfig, 'fill').onChange((color) => {
  circle.style.fill = color;
});
circleFolder.addColor(circleConfig, 'stroke').onChange((color) => {
  circle.attr('stroke', color);
});
circleFolder.add(circleConfig, 'shadowType', ['inner', 'outer']).onChange((shadowType) => {
  circle.attr('shadowType', shadowType);
});
circleFolder.addColor(circleConfig, 'shadowColor').onChange((color) => {
  circle.attr('shadowColor', color);
});
circleFolder.add(circleConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  circle.style.shadowBlur = shadowBlur;
});
circleFolder.add(circleConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  circle.style.shadowOffsetX = shadowOffsetX;
});
circleFolder.add(circleConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  circle.style.shadowOffsetY = shadowOffsetY;
});
circleFolder.add(circleConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  circle.style.lineWidth = lineWidth;
});
circleFolder.add(circleConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  circle.style.lineDash = [lineDash];
});
circleFolder.add(circleConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  circle.style.lineDashOffset = lineDashOffset;
});
circleFolder.add(circleConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.style.fillOpacity = opacity;
});
circleFolder.add(circleConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.style.strokeOpacity = opacity;
});
circleFolder
  .add(circleConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    circle.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
circleFolder
  .add(circleConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    circle.style.cursor = cursor;
  });
circleFolder
  .add(circleConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    circle.style.pointerEvents = pointerEvents;
  });
circleFolder.add(circleConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  circle.style.visibility = visibility;
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 300,
  localPositionY: 200,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'center',
  anchorX: 0.5,
  anchorY: 0.5,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    circle.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = circle.getLocalPosition();
  circle.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = circle.getLocalPosition();
  circle.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  circle.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  circle.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  circle.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  circle.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.open();
`,title:{zh:"\u5706",en:"Circle"},filename:"circle.js",isNew:!1},{id:"gradient",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*WK1jQIIUP0cAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const linearGradient = 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff';
const radialGradient = 'r(0.5, 0.5, 1) 0:#ffffff 1:#1890ff';
const pattern = 'p(a) https://gw.alipayobjects.com/zos/rmsportal/ibtwzHXSxomqbZCPMLqS.png';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: linearGradient,
    stroke: '#F04864',
    lineWidth: 4,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  r: 100,
  fill: 'linear',
  stroke: '#F04864',
  lineWidth: 4,
  fillOpacity: 1,
  strokeOpacity: 1,
  anchorX: 0.5,
  anchorY: 0.5,
};
circleFolder.add(circleConfig, 'r', 50, 200).onChange((radius) => {
  circle.style.r = radius;
});
circleFolder.add(circleConfig, 'fill', ['linear', 'radial', 'pattern']).onChange((color) => {
  if (color === 'linear') {
    circle.style.fill = linearGradient;
  } else if (color === 'radial') {
    circle.style.fill = radialGradient;
  } else if (color === 'pattern') {
    circle.style.fill = pattern;
  }
});
circleFolder.addColor(circleConfig, 'stroke').onChange((color) => {
  circle.attr('stroke', color);
});
circleFolder.add(circleConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  circle.attr('lineWidth', lineWidth);
});
circleFolder.add(circleConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.attr('fillOpacity', opacity);
});
circleFolder.add(circleConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.attr('strokeOpacity', opacity);
});
circleFolder.open();

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 200,
  localPositionY: 100,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    circle.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = circle.getLocalPosition();
  circle.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = circle.getLocalPosition();
  circle.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  circle.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  circle.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  circle.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  circle.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.open();
`,title:{zh:"\u5E26\u6E10\u53D8\u8272\u548C\u6A21\u5F0F\u7684\u5706",en:"Circle with gradient & pattern"},filename:"gradient.js",isNew:!1},{id:"filter",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8BomR52SOm4AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const blur = 'blur(5px)';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    filter: blur,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  r: 100,
  fill: '#1890FF',
  stroke: '#F04864',
  lineWidth: 4,
  fillOpacity: 1,
  strokeOpacity: 1,
  anchorX: 0.5,
  anchorY: 0.5,
};
circleFolder.add(circleConfig, 'r', 50, 200).onChange((radius) => {
  circle.style.r = radius;
});
circleFolder.addColor(circleConfig, 'fill').onChange((color) => {
  circle.style.fill = color;
});
circleFolder.addColor(circleConfig, 'stroke').onChange((color) => {
  circle.attr('stroke', color);
});
circleFolder.add(circleConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  circle.attr('lineWidth', lineWidth);
});
circleFolder.add(circleConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.attr('fillOpacity', opacity);
});
circleFolder.add(circleConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  circle.attr('strokeOpacity', opacity);
});
circleFolder.add(circleConfig, 'anchorX', 0, 1, 0.1).onChange((anchorX) => {
  circle.attr('anchor', [anchorX, circleConfig.anchorY]);
});
circleFolder.add(circleConfig, 'anchorY', 0, 1, 0.1).onChange((anchorY) => {
  circle.attr('anchor', [circleConfig.anchorX, anchorY]);
});

const blurFolder = gui.addFolder('blur');
const blurConfig = {
  enable: true,
  radius: 5,
};
blurFolder.add(blurConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
blurFolder.add(blurConfig, 'radius', 0, 20).onChange(() => {
  circle.style.filter = generateFilter();
});
blurFolder.open();

const brightnessFolder = gui.addFolder('brightness');
const brightnessConfig = {
  enable: false,
  brightness: 1,
};
brightnessFolder.add(brightnessConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
brightnessFolder.add(brightnessConfig, 'brightness', 0, 4, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
brightnessFolder.open();

const dropShadowFolder = gui.addFolder('drop-shadow');
const dropShadowConfig = {
  enable: false,
  offsetX: 0,
  offsetY: 0,
  radius: 0,
  color: '#000',
};
dropShadowFolder.add(dropShadowConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
dropShadowFolder.add(dropShadowConfig, 'offsetX', -10, 10).onChange(() => {
  circle.style.filter = generateFilter();
});
dropShadowFolder.add(dropShadowConfig, 'offsetY', -10, 10).onChange(() => {
  circle.style.filter = generateFilter();
});
dropShadowFolder.add(dropShadowConfig, 'radius', 0, 10).onChange(() => {
  circle.style.filter = generateFilter();
});
dropShadowFolder.addColor(dropShadowConfig, 'color').onChange(() => {
  circle.style.filter = generateFilter();
});
dropShadowFolder.open();

const contrastFolder = gui.addFolder('contrast');
const contrastConfig = {
  enable: false,
  contrast: 1,
};
contrastFolder.add(contrastConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
contrastFolder.add(contrastConfig, 'contrast', 0, 4, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
contrastFolder.open();

const grayscaleFolder = gui.addFolder('grayscale');
const grayscaleConfig = {
  enable: false,
  grayscale: 0,
};
grayscaleFolder.add(grayscaleConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
grayscaleFolder.add(grayscaleConfig, 'grayscale', 0, 1, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
grayscaleFolder.open();

const sepiaFolder = gui.addFolder('sepia');
const sepiaConfig = {
  enable: false,
  sepia: 0,
};
sepiaFolder.add(sepiaConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
sepiaFolder.add(sepiaConfig, 'sepia', 0, 1, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
sepiaFolder.open();

const saturateFolder = gui.addFolder('saturate');
const saturateConfig = {
  enable: false,
  saturate: 0,
};
saturateFolder.add(saturateConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
saturateFolder.add(saturateConfig, 'saturate', 0, 1, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
saturateFolder.open();

const hueRotateFolder = gui.addFolder('hue-rotate');
const hueRotateConfig = {
  enable: false,
  angle: 0,
};
hueRotateFolder.add(hueRotateConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
hueRotateFolder.add(hueRotateConfig, 'angle', 0, 360).onChange(() => {
  circle.style.filter = generateFilter();
});
hueRotateFolder.open();

const invertFolder = gui.addFolder('invert');
const invertConfig = {
  enable: false,
  amount: 0,
};
invertFolder.add(invertConfig, 'enable').onChange(() => {
  circle.style.filter = generateFilter();
});
invertFolder.add(invertConfig, 'amount', 0, 1, 0.1).onChange(() => {
  circle.style.filter = generateFilter();
});
invertFolder.open();

const generateFilter = () => {
  return [
    blurConfig.enable ? \`blur(\${blurConfig.radius}px)\` : '',
    brightnessConfig.enable ? \`brightness(\${brightnessConfig.brightness})\` : '',
    dropShadowConfig.enable
      ? \`drop-shadow(\${dropShadowConfig.offsetX}px \${dropShadowConfig.offsetY}px \${dropShadowConfig.radius}px \${dropShadowConfig.color})\`
      : '',
    contrastConfig.enable ? \`contrast(\${contrastConfig.contrast})\` : '',
    grayscaleConfig.enable ? \`grayscale(\${grayscaleConfig.grayscale})\` : '',
    sepiaConfig.enable ? \`sepia(\${sepiaConfig.sepia})\` : '',
    saturateConfig.enable ? \`saturate(\${saturateConfig.saturate})\` : '',
    hueRotateConfig.enable ? \`hue-rotate(\${hueRotateConfig.angle}deg)\` : '',
    invertConfig.enable ? \`invert(\${invertConfig.amount})\` : '',
  ].join(' ');
};
`,title:{zh:"\u5E26\u6EE4\u955C\u7684\u5706",en:"Circle with filter"},filename:"filter.js",isNew:!1}],icon:"",id:"circle",title:{en:"Circle",zh:"\u5706"},childrenKey:"demos",order:0},{demos:[{id:"ellipse",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8eoKRbfOwgAAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Ellipse } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const ellipse = new Ellipse({
  style: {
    cx: 300,
    cy: 200,
    rx: 100,
    ry: 150,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(ellipse);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const ellipseFolder = gui.addFolder('ellipse');
const ellipseConfig = {
  cx: 300,
  cy: 200,
  rx: 100,
  ry: 150,
  fill: '#1890FF',
  stroke: '#F04864',
  lineWidth: 4,
  fillOpacity: 1,
  strokeOpacity: 1,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pointerEvents: 'auto',
  visibility: 'visible',
};
ellipseFolder.add(ellipseConfig, 'cx', 0, 600).onChange((cx) => {
  ellipse.style.cx = cx;
});
ellipseFolder.add(ellipseConfig, 'cy', 0, 600).onChange((cy) => {
  ellipse.style.cy = cy;
});
ellipseFolder.add(ellipseConfig, 'rx', 50, 200).onChange((rx) => {
  ellipse.style.rx = rx;
});
ellipseFolder.add(ellipseConfig, 'ry', 50, 200).onChange((ry) => {
  ellipse.style.ry = ry;
});
ellipseFolder.addColor(ellipseConfig, 'fill').onChange((color) => {
  ellipse.style.fill = color;
});
ellipseFolder.addColor(ellipseConfig, 'stroke').onChange((color) => {
  ellipse.style.stroke = color;
});
ellipseFolder.add(ellipseConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  ellipse.style.lineWidth = lineWidth;
});
ellipseFolder.add(ellipseConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  ellipse.style.fillOpacity = opacity;
});
ellipseFolder.add(ellipseConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  ellipse.style.strokeOpacity = opacity;
});
ellipseFolder.open();
ellipseFolder
  .add(ellipseConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    ellipse.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
ellipseFolder
  .add(ellipseConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    ellipse.style.cursor = cursor;
  });
ellipseFolder.addColor(ellipseConfig, 'shadowColor').onChange((color) => {
  ellipse.attr('shadowColor', color);
});
ellipseFolder.add(ellipseConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  ellipse.style.shadowBlur = shadowBlur;
});
ellipseFolder.add(ellipseConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  ellipse.style.shadowOffsetX = shadowOffsetX;
});
ellipseFolder.add(ellipseConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  ellipse.style.shadowOffsetY = shadowOffsetY;
});
ellipseFolder
  .add(ellipseConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    ellipse.style.pointerEvents = pointerEvents;
  });
ellipseFolder.add(ellipseConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  ellipse.style.visibility = visibility;
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 300,
  localPositionY: 200,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'center',
  anchorX: 0.5,
  anchorY: 0.5,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    ellipse.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = ellipse.getLocalPosition();
  ellipse.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = ellipse.getLocalPosition();
  ellipse.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  ellipse.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  ellipse.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  ellipse.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  ellipse.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.open();
`,title:{zh:"\u692D\u5706",en:"Ellipse"},filename:"ellipse.js",isNew:!1}],icon:"",id:"ellipse",title:{en:"Ellipse",zh:"\u692D\u5706"},childrenKey:"demos",order:1},{demos:[{id:"rect",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*owKfQKVFG1wAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const rect = new Rect({
  style: {
    x: 100,
    y: 100,
    width: 300,
    height: 200,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    radius: [0, 4, 8, 16],
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(rect);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const rectFolder = gui.addFolder('rect');
const rectConfig = {
  x: 200,
  y: 100,
  width: 300,
  height: 200,
  fill: '#1890FF',
  stroke: '#F04864',
  lineWidth: 4,
  lineDash: 0,
  lineDashOffset: 0,
  radiusTL: 0,
  radiusTR: 4,
  radiusBR: 8,
  radiusBL: 16,
  fillOpacity: 1,
  strokeOpacity: 1,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pointerEvents: 'auto',
  visibility: 'visible',
};
rectFolder.add(rectConfig, 'x', 0, 400).onChange((x) => {
  rect.style.x = x;
});
rectFolder.add(rectConfig, 'y', 0, 400).onChange((y) => {
  rect.style.y = y;
});
rectFolder.add(rectConfig, 'width', -400, 400).onChange((width) => {
  rect.style.width = width;
});
rectFolder.add(rectConfig, 'height', -400, 400).onChange((height) => {
  rect.style.height = height;
});
rectFolder.addColor(rectConfig, 'fill').onChange((color) => {
  rect.style.fill = color;
});
rectFolder.addColor(rectConfig, 'stroke').onChange((color) => {
  rect.style.stroke = color;
});
rectFolder.add(rectConfig, 'radiusTL', 0, 20).onChange((radiusTL) => {
  rect.style.radius = [radiusTL, rectConfig.radiusTR, rectConfig.radiusBR, rectConfig.radiusBL];
});
rectFolder.add(rectConfig, 'radiusTR', 0, 20).onChange((radiusTR) => {
  rect.style.radius = [rectConfig.radiusTL, radiusTR, rectConfig.radiusBR, rectConfig.radiusBL];
});
rectFolder.add(rectConfig, 'radiusBR', 0, 20).onChange((radiusBR) => {
  rect.style.radius = [rectConfig.radiusTL, rectConfig.radiusTR, radiusBR, rectConfig.radiusBL];
});
rectFolder.add(rectConfig, 'radiusBL', 0, 20).onChange((radiusBL) => {
  rect.style.radius = [rectConfig.radiusTL, rectConfig.radiusTR, rectConfig.radiusBR, radiusBL];
});
rectFolder.add(rectConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  rect.style.lineWidth = lineWidth;
});
rectFolder.add(rectConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  rect.style.lineDash = [lineDash];
});
rectFolder.add(rectConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  rect.style.lineDashOffset = lineDashOffset;
});
rectFolder.add(rectConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  rect.style.fillOpacity = opacity;
});
rectFolder.add(rectConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  rect.style.strokeOpacity = opacity;
});
rectFolder
  .add(rectConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    rect.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
rectFolder
  .add(rectConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    rect.style.cursor = cursor;
  });
rectFolder.addColor(rectConfig, 'shadowColor').onChange((color) => {
  rect.attr('shadowColor', color);
});
rectFolder.add(rectConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  rect.style.shadowBlur = shadowBlur;
});
rectFolder.add(rectConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  rect.style.shadowOffsetX = shadowOffsetX;
});
rectFolder.add(rectConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  rect.style.shadowOffsetY = shadowOffsetY;
});
rectFolder
  .add(rectConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    rect.style.pointerEvents = pointerEvents;
  });
rectFolder.add(rectConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  rect.style.visibility = visibility;
});
rectFolder.open();

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 200,
  localPositionY: 100,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    rect.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = rect.getLocalPosition();
  rect.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = rect.getLocalPosition();
  rect.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  rect.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  rect.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  rect.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  rect.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.open();
`,title:{zh:"\u77E9\u5F62",en:"Rectangle"},filename:"rect.js",isNew:!1}],icon:"",id:"rect",title:{en:"Rect",zh:"\u77E9\u5F62"},childrenKey:"demos",order:2},{demos:[{id:"image",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*OIAmRpwhNWYAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Image } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const image = new Image({
  style: {
    x: 200,
    y: 100,
    width: 200,
    height: 200,
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(image);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const imageFolder = gui.addFolder('image');
const config = {
  x: 200,
  y: 100,
  width: 200,
  height: 200,
  opacity: 1,
  src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  pointerEvents: 'auto',
  visibility: 'visible',
};
imageFolder.add(config, 'x', 0, 400).onChange((x) => {
  image.style.x = x;
});
imageFolder.add(config, 'y', 0, 400).onChange((y) => {
  image.style.y = y;
});
imageFolder.add(config, 'width', 0, 400).onChange((width) => {
  image.style.width = width;
});
imageFolder.add(config, 'height', 0, 400).onChange((height) => {
  image.style.height = height;
});
imageFolder.add(config, 'opacity', 0, 1, 0.1).onChange((opacity) => {
  image.style.opacity = opacity;
});
imageFolder
  .add(config, 'src', [
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8eoKRbfOwgAAAAAAAAAAAABkARQnAQ',
  ])
  .onChange((src) => {
    image.style.img = src;
  });
imageFolder
  .add(config, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    image.style.pointerEvents = pointerEvents;
  });
imageFolder.add(config, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  image.style.visibility = visibility;
});
imageFolder.open();

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 200,
  localPositionY: 100,
  localScaleX: 1,
  localScaleY: 1,
  localEulerAngles: 0,
  skewX: 0,
  skewY: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    image.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = image.getLocalPosition();
  image.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = image.getLocalPosition();
  image.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScaleX', -5, 5).onChange((localScaleX) => {
  if (localScaleX === 0) {
    localScaleX = 0.0001;
  }
  image.setLocalScale(localScaleX, transformConfig.localScaleY);
});
transformFolder.add(transformConfig, 'localScaleY', -5, 5).onChange((localScaleY) => {
  if (localScaleY === 0) {
    localScaleY = 0.0001;
  }
  image.setLocalScale(transformConfig.localScaleX, localScaleY);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  image.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'skewX', -180, 180).onChange((skewX) => {
  image.setLocalSkew(skewX * (Math.PI / 180), transformConfig.skewY * (Math.PI / 180));
});
transformFolder.add(transformConfig, 'skewY', -180, 180).onChange((skewY) => {
  image.setLocalSkew(transformConfig.skewX * (Math.PI / 180), skewY * (Math.PI / 180));
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  image.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  image.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.open();
`,title:{zh:"\u56FE\u7247",en:"Image"},filename:"image.js",isNew:!1}],icon:"",id:"image",title:{en:"Image",zh:"\u56FE\u7247"},childrenKey:"demos",order:3},{demos:[{id:"line",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*7YsyTJDA_CMAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Image, Line, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line
const line1 = new Line({
  style: {
    x1: 200,
    y1: 100,
    x2: 400,
    y2: 100,
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
  },
});

const line2 = new Line({
  style: {
    x1: 200,
    y1: 150,
    x2: 400,
    y2: 150,
    lineWidth: 2,
    lineDash: [10, 10],
    stroke: '#F04864',
  },
});
const line3 = new Line({
  style: {
    x1: 200,
    y1: 200,
    x2: 400,
    y2: 200,
    lineWidth: 2,
    stroke: 'l(0) 0:#F04864 0.5:#7EC2F3 1:#1890FF',
  },
});

const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const circleMarker = new Circle({
  style: {
    r: 10,
    stroke: '#1890FF',
  },
});
const imageMarker = new Image({
  style: {
    width: 50,
    height: 50,
    anchor: [0.5, 0.5],
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  },
});

const arrowLine = new Line({
  style: {
    x1: 200,
    y1: 250,
    x2: 400,
    y2: 250,
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
    markerStart: arrowMarker,
    markerEnd: circleMarker,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(line1);
  canvas.appendChild(line2);
  canvas.appendChild(line3);
  canvas.appendChild(arrowLine);

  line2.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
    duration: 1500,
    iterations: Infinity,
  });

  line3.animate(
    [
      { x1: 200, lineWidth: 2 },
      { x1: 0, lineWidth: 10 },
    ],
    {
      duration: 1500,
      iterations: Infinity,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    },
  );
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};

rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const lineFolder = gui.addFolder('line1');
const lineConfig = {
  stroke: '#1890FF',
  lineWidth: 2,
  lineJoin: 'miter',
  lineCap: 'butt',
  strokeOpacity: 1,
  x1: 200,
  y1: 100,
  x2: 400,
  y2: 100,
  lineDash: 0,
  lineDashOffset: 0,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pointerEvents: 'auto',
  visibility: 'visible',
};
lineFolder.add(lineConfig, 'lineJoin', ['miter', 'round', 'bevel']).onChange((lineJoin) => {
  line1.style.lineJoin = lineJoin;
});
lineFolder.add(lineConfig, 'lineCap', ['butt', 'round', 'square']).onChange((lineCap) => {
  line1.style.lineCap = lineCap;
});
lineFolder.add(lineConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  line1.style.lineDash = [lineDash];
});
lineFolder.add(lineConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  line1.style.lineDashOffset = lineDashOffset;
});
lineFolder.add(lineConfig, 'x1', 0, 400).onChange((x1) => {
  line1.style.x1 = x1;
});
lineFolder.add(lineConfig, 'y1', 0, 400).onChange((y1) => {
  line1.style.y1 = y1;
});
lineFolder.add(lineConfig, 'x2', 0, 400).onChange((x2) => {
  line1.style.x2 = x2;
});
lineFolder.add(lineConfig, 'y2', 0, 400).onChange((y2) => {
  line1.style.y2 = y2;
});
lineFolder.addColor(lineConfig, 'stroke').onChange((color) => {
  line1.style.stroke = color;
});
lineFolder.add(lineConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  line1.style.lineWidth = lineWidth;
});
lineFolder.add(lineConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  line1.style.strokeOpacity = opacity;
});
lineFolder
  .add(lineConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    line1.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
lineFolder
  .add(lineConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    line1.style.cursor = cursor;
  });
lineFolder.addColor(lineConfig, 'shadowColor').onChange((color) => {
  line1.attr('shadowColor', color);
});
lineFolder.add(lineConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  line1.style.shadowBlur = shadowBlur;
});
lineFolder.add(lineConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  line1.style.shadowOffsetX = shadowOffsetX;
});
lineFolder.add(lineConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  line1.style.shadowOffsetY = shadowOffsetY;
});
lineFolder
  .add(lineConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    line1.style.pointerEvents = pointerEvents;
  });
lineFolder.add(lineConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  line1.style.visibility = visibility;
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 200,
  localPositionY: 100,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    line1.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = line1.getLocalPosition();
  line1.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = line1.getLocalPosition();
  line1.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  line1.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  line1.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  line1.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  line1.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.close();

const markerFolder = gui.addFolder('marker');
const markerConfig = {
  markerStart: 'path',
  markerEnd: 'circle',
  markerStartOffset: 0,
  markerEndOffset: 0,
  x1: 200,
  y1: 250,
  x2: 400,
  y2: 250,
};
markerFolder
  .add(markerConfig, 'markerStart', ['path', 'circle', 'image', 'null'])
  .onChange((markerStartStr) => {
    let markerStart;
    if (markerStartStr === 'path') {
      markerStart = arrowMarker;
    } else if (markerStartStr === 'circle') {
      markerStart = circleMarker;
    } else if (markerStartStr === 'image') {
      markerStart = imageMarker;
    } else {
      markerStart = null;
    }

    arrowLine.style.markerStart = markerStart;
  });
markerFolder
  .add(markerConfig, 'markerEnd', ['path', 'circle', 'image', 'null'])
  .onChange((markerEndStr) => {
    let markerEnd;
    if (markerEndStr === 'path') {
      markerEnd = arrowMarker;
    } else if (markerEndStr === 'circle') {
      markerEnd = circleMarker;
    } else if (markerEndStr === 'image') {
      markerEnd = imageMarker;
    } else {
      markerEnd = null;
    }

    arrowLine.style.markerEnd = markerEnd;
  });
markerFolder.add(markerConfig, 'markerStartOffset', -20, 20).onChange((markerStartOffset) => {
  arrowLine.style.markerStartOffset = markerStartOffset;
});
markerFolder.add(markerConfig, 'markerEndOffset', -20, 20).onChange((markerEndOffset) => {
  arrowLine.style.markerEndOffset = markerEndOffset;
});
markerFolder.add(markerConfig, 'x1', 0, 400).onChange((x1) => {
  arrowLine.style.x1 = x1;
});
markerFolder.add(markerConfig, 'y1', 0, 400).onChange((y1) => {
  arrowLine.style.y1 = y1;
});
markerFolder.add(markerConfig, 'x2', 0, 400).onChange((x2) => {
  arrowLine.style.x2 = x2;
});
markerFolder.add(markerConfig, 'y2', 0, 400).onChange((y2) => {
  arrowLine.style.y2 = y2;
});
markerFolder.open();
`,title:{zh:"\u76F4\u7EBF",en:"Line"},filename:"line.js",isNew:!1},{id:"marker",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*X5W_TYz-2SIAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Image, Line, Path, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Draw arrows with marker, ported from
 * @see https://g6.antv.vision/zh/examples/item/arrows#built-in-arrows
 */

const plugin = new Plugin();

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(plugin);
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
canvaskitRenderer.registerPlugin(plugin);
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(plugin);
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

/**
 * Arrow with triangle marker
 */
const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const handle1 = new Circle({
  id: 'handle1',
  style: {
    draggable: true,
    cursor: 'move',
    fill: '#DEE9FF',
    stroke: '#5B8FF9',
    r: 10,
    cx: 100,
    cy: 50,
  },
});
const handle2 = handle1.cloneNode();
handle2.id = 'handle2';
handle2.style.cx = 300;
handle2.style.cy = 50;
const arrow1 = new Line({
  style: {
    x1: 100,
    y1: 50,
    x2: 300,
    y2: 50,
    stroke: '#F6BD16',
    lineWidth: 6,
    markerEnd: arrowMarker,
    markerEndOffset: 28,
  },
});

/**
 * Arrow with rect marker
 */
const rectMarker = new Rect({
  style: {
    width: 20,
    height: 20,
    fill: '#F6BD16',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const handle3 = handle1.cloneNode();
handle3.id = 'handle3';
handle3.style.cx = 100;
handle3.style.cy = 150;
const handle4 = handle1.cloneNode();
handle4.id = 'handle4';
handle4.style.cx = 300;
handle4.style.cy = 150;
const arrow2 = new Line({
  style: {
    x1: 100,
    y1: 150,
    x2: 300,
    y2: 150,
    stroke: '#F6BD16',
    lineWidth: 6,
    markerEnd: rectMarker,
    markerEndOffset: 28,
  },
});

/**
 * Arrow with image marker
 */
const imageMarker = new Image({
  style: {
    width: 50,
    height: 50,
    src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
  },
});
const handle5 = handle1.cloneNode();
handle5.id = 'handle5';
handle5.style.cx = 100;
handle5.style.cy = 250;
const handle6 = handle1.cloneNode();
handle6.id = 'handle6';
handle6.style.cx = 300;
handle6.style.cy = 250;
const arrow3 = new Line({
  style: {
    x1: 100,
    y1: 250,
    x2: 300,
    y2: 250,
    stroke: '#F6BD16',
    lineWidth: 6,
    markerEnd: imageMarker,
    markerEndOffset: 40,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(arrow1);
  canvas.appendChild(handle1);
  canvas.appendChild(handle2);

  canvas.appendChild(arrow2);
  canvas.appendChild(handle3);
  canvas.appendChild(handle4);

  canvas.appendChild(arrow3);
  canvas.appendChild(handle5);
  canvas.appendChild(handle6);

  let shiftX = 0;
  let shiftY = 0;
  function moveAt(target, canvasX, canvasY) {
    const newPosX = canvasX - shiftX;
    const newPosY = canvasY - shiftY;
    target.setPosition(newPosX, newPosY);

    // re-define arrow
    if (target.id === 'handle1') {
      arrow1.style.x1 = newPosX;
      arrow1.style.y1 = newPosY;
    } else if (target.id === 'handle2') {
      arrow1.style.x2 = newPosX;
      arrow1.style.y2 = newPosY;
    } else if (target.id === 'handle3') {
      arrow2.style.x1 = newPosX;
      arrow2.style.y1 = newPosY;
    } else if (target.id === 'handle4') {
      arrow2.style.x2 = newPosX;
      arrow2.style.y2 = newPosY;
    } else if (target.id === 'handle5') {
      arrow3.style.x1 = newPosX;
      arrow3.style.y1 = newPosY;
    } else if (target.id === 'handle6') {
      arrow3.style.x2 = newPosX;
      arrow3.style.y2 = newPosY;
    }
  }

  canvas.addEventListener('dragstart', function (e) {
    const [x, y] = e.target.getPosition();
    shiftX = e.canvasX - x;
    shiftY = e.canvasY - y;

    moveAt(e.target, e.canvasX, e.canvasY);
  });
  canvas.addEventListener('drag', function (e) {
    moveAt(e.target, e.canvasX, e.canvasY);
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u6807\u8BB0\u56FE\u5F62",en:"Marker"},filename:"marker.js",isNew:!1}],icon:"",id:"line",title:{en:"Line",zh:"\u76F4\u7EBF"},childrenKey:"demos",order:4},{demos:[{id:"polyline",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*bo4rRK0U8PIAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Polyline } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line
const points = [
  [50, 50],
  [100, 50],
  [100, 100],
  [150, 100],
  [150, 150],
  [200, 150],
  [200, 200],
  [250, 200],
  [250, 250],
  [300, 250],
  [300, 300],
  [350, 300],
  [350, 350],
  [400, 350],
  [400, 400],
  [450, 400],
];
const polyline = new Polyline({
  style: {
    points,
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(polyline);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const lineFolder = gui.addFolder('polyline');
const lineConfig = {
  stroke: '#1890FF',
  lineWidth: 2,
  lineJoin: 'miter',
  lineCap: 'butt',
  lineDash: 0,
  lineDashOffset: 0,
  strokeOpacity: 1,
  firstPointX: 50,
  firstPointY: 50,
  visible: true,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};
lineFolder.add(lineConfig, 'firstPointX', 0, 200).onChange((firstPointX) => {
  const newPoints = [...points];
  newPoints[0] = [firstPointX, lineConfig.firstPointY];
  polyline.style.points = newPoints;
});
lineFolder.add(lineConfig, 'firstPointY', 0, 200).onChange((firstPointY) => {
  const newPoints = [...points];
  newPoints[0] = [lineConfig.firstPointX, firstPointY];
  polyline.style.points = newPoints;
});
lineFolder.addColor(lineConfig, 'stroke').onChange((color) => {
  polyline.attr('stroke', color);
});
lineFolder.add(lineConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  polyline.attr('lineWidth', lineWidth);
});
lineFolder.add(lineConfig, 'lineJoin', ['miter', 'round', 'bevel']).onChange((lineJoin) => {
  polyline.attr('lineJoin', lineJoin);
});
lineFolder.add(lineConfig, 'lineCap', ['butt', 'round', 'square']).onChange((lineCap) => {
  polyline.attr('lineCap', lineCap);
});
lineFolder.add(lineConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  polyline.style.lineDash = [lineDash];
});
lineFolder.add(lineConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  polyline.style.lineDashOffset = lineDashOffset;
});
lineFolder.add(lineConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  polyline.attr('strokeOpacity', opacity);
});
lineFolder.add(lineConfig, 'visible').onChange((visible) => {
  if (visible) {
    polyline.style.visibility = 'visible';
    // polyline.show();
  } else {
    polyline.style.visibility = 'hidden';
    // polyline.hide();
  }
});
lineFolder
  .add(lineConfig, 'increasedLineWidthForHitTesting', 0, 50)
  .onChange((increasedLineWidthForHitTesting) => {
    polyline.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
lineFolder
  .add(lineConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    polyline.style.cursor = cursor;
  });
lineFolder.addColor(lineConfig, 'shadowColor').onChange((color) => {
  polyline.attr('shadowColor', color);
});
lineFolder.add(lineConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  polyline.style.shadowBlur = shadowBlur;
});
lineFolder.add(lineConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  polyline.style.shadowOffsetX = shadowOffsetX;
});
lineFolder.add(lineConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  polyline.style.shadowOffsetY = shadowOffsetY;
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 50,
  localPositionY: 50,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    polyline.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = polyline.getLocalPosition();
  polyline.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = polyline.getLocalPosition();
  polyline.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  polyline.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  polyline.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  polyline.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  polyline.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.close();
`,title:{zh:"\u6298\u7EBF",en:"Polyline"},filename:"polyline.js",isNew:!1},{id:"marker",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*ZoM4QIkPU2oAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Image, Path, Polyline } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line
const points = [
  [50, 50],
  [100, 50],
  [100, 100],
  [150, 100],
  [150, 150],
  [200, 150],
  [200, 200],
  [250, 200],
  [250, 250],
  [300, 250],
  [300, 300],
  [350, 300],
  [350, 350],
  [400, 350],
  [400, 400],
  [450, 400],
];
const polyline = new Polyline({
  style: {
    points,
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
  },
});

const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const circleMarker = new Circle({
  style: {
    r: 10,
    stroke: '#1890FF',
  },
});
const imageMarker = new Image({
  style: {
    width: 50,
    height: 50,
    anchor: [0.5, 0.5],
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(polyline);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const markerFolder = gui.addFolder('marker');
const markerConfig = {
  markerStart: 'null',
  markerEnd: 'null',
  markerMid: 'null',
  markerStartOffset: 0,
  markerEndOffset: 0,
};
markerFolder
  .add(markerConfig, 'markerStart', ['path', 'circle', 'image', 'null'])
  .onChange((markerStartStr) => {
    let markerStart;
    if (markerStartStr === 'path') {
      markerStart = arrowMarker.cloneNode();
    } else if (markerStartStr === 'circle') {
      markerStart = circleMarker.cloneNode();
    } else if (markerStartStr === 'image') {
      markerStart = imageMarker.cloneNode();
    } else {
      markerStart = null;
    }

    polyline.style.markerStart = markerStart;
  });
markerFolder
  .add(markerConfig, 'markerMid', ['path', 'circle', 'image', 'null'])
  .onChange((markerMidStr) => {
    let markerMid;
    if (markerMidStr === 'path') {
      markerMid = arrowMarker.cloneNode();
    } else if (markerMidStr === 'circle') {
      markerMid = circleMarker.cloneNode();
    } else if (markerMidStr === 'image') {
      markerMid = imageMarker.cloneNode();
    } else {
      markerMid = null;
    }

    polyline.style.markerMid = markerMid;
  });
markerFolder
  .add(markerConfig, 'markerEnd', ['path', 'circle', 'image', 'null'])
  .onChange((markerEndStr) => {
    let markerEnd;
    if (markerEndStr === 'path') {
      markerEnd = arrowMarker.cloneNode();
    } else if (markerEndStr === 'circle') {
      markerEnd = circleMarker.cloneNode();
    } else if (markerEndStr === 'image') {
      markerEnd = imageMarker.cloneNode();
    } else {
      markerEnd = null;
    }

    polyline.style.markerEnd = markerEnd;
  });
markerFolder.add(markerConfig, 'markerStartOffset', -20, 20).onChange((markerStartOffset) => {
  polyline.style.markerStartOffset = markerStartOffset;
});
markerFolder.add(markerConfig, 'markerEndOffset', -20, 20).onChange((markerEndOffset) => {
  polyline.style.markerEndOffset = markerEndOffset;
});
markerFolder.open();
`,title:{zh:"\u6807\u8BB0\u56FE\u5F62",en:"Marker"},filename:"marker.js",isNew:!1}],icon:"",id:"polyline",title:{en:"Polyline",zh:"\u6298\u7EBF"},childrenKey:"demos",order:5},{demos:[{id:"polygon",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*ooeZRJF65nIAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Polygon } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a polygon
const polygon = new Polygon({
  style: {
    points: [
      [200, 100],
      [400, 100],
      [400 + 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
      [400, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200 - 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
    ],
    fill: '#C6E5FF',
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a polygon to canvas
  canvas.appendChild(polygon);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const polygonFolder = gui.addFolder('polygon');
const polygonConfig = {
  fill: '#C6E5FF',
  stroke: '#1890FF',
  lineWidth: 2,
  fillOpacity: 1,
  strokeOpacity: 1,
  anchorX: 0,
  anchorY: 0,
  lineDash: 0,
  lineDashOffset: 0,
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pointerEvents: 'auto',
  visibility: 'visible',
};
polygonFolder.addColor(polygonConfig, 'fill').onChange((color) => {
  polygon.style.fill = color;
});
polygonFolder.addColor(polygonConfig, 'stroke').onChange((color) => {
  polygon.style.stroke = color;
});
polygonFolder.add(polygonConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  polygon.style.lineWidth = lineWidth;
});
polygonFolder.add(polygonConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  polygon.style.lineDash = [lineDash];
});
polygonFolder.add(polygonConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  polygon.style.lineDashOffset = lineDashOffset;
});
polygonFolder.add(polygonConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
  polygon.style.fillOpacity = opacity;
});
polygonFolder.add(polygonConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  polygon.style.strokeOpacity = opacity;
});
polygonFolder
  .add(polygonConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    polygon.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
polygonFolder
  .add(polygonConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    polygon.style.cursor = cursor;
  });
polygonFolder.addColor(polygonConfig, 'shadowColor').onChange((color) => {
  polygon.attr('shadowColor', color);
});
polygonFolder.add(polygonConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  polygon.style.shadowBlur = shadowBlur;
});
polygonFolder.add(polygonConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  polygon.style.shadowOffsetX = shadowOffsetX;
});
polygonFolder.add(polygonConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  polygon.style.shadowOffsetY = shadowOffsetY;
});
polygonFolder
  .add(polygonConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    polygon.style.pointerEvents = pointerEvents;
  });
polygonFolder.add(polygonConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  polygon.style.visibility = visibility;
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 100,
  localPositionY: 100,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    polygon.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = polygon.getLocalPosition();
  polygon.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = polygon.getLocalPosition();
  polygon.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  polygon.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  polygon.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  polygon.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  polygon.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.close();
`,title:{zh:"\u591A\u8FB9\u5F62",en:"Polygon"},filename:"polygon.js",isNew:!1},{id:"marker",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*4OujQbUBUd0AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Image, Path, Polygon } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a polygon
const polygon = new Polygon({
  style: {
    points: [
      [200, 100],
      [400, 100],
      [400 + 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
      [400, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200 - 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
    ],
    fill: '#C6E5FF',
    stroke: '#1890FF',
    lineWidth: 2,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a polygon to canvas
  canvas.appendChild(polygon);
});

const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const circleMarker = new Circle({
  style: {
    r: 10,
    stroke: '#1890FF',
  },
});
const imageMarker = new Image({
  style: {
    width: 50,
    height: 50,
    anchor: [0.5, 0.5],
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  },
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const markerFolder = gui.addFolder('marker');
const markerConfig = {
  markerStart: 'null',
  markerEnd: 'null',
  markerMid: 'null',
  markerStartOffset: 0,
  markerEndOffset: 0,
};
markerFolder
  .add(markerConfig, 'markerStart', ['path', 'circle', 'image', 'null'])
  .onChange((markerStartStr) => {
    let markerStart;
    if (markerStartStr === 'path') {
      markerStart = arrowMarker.cloneNode();
    } else if (markerStartStr === 'circle') {
      markerStart = circleMarker.cloneNode();
    } else if (markerStartStr === 'image') {
      markerStart = imageMarker.cloneNode();
    } else {
      markerStart = null;
    }

    polygon.style.markerStart = markerStart;
  });
markerFolder
  .add(markerConfig, 'markerMid', ['path', 'circle', 'image', 'null'])
  .onChange((markerMidStr) => {
    let markerMid;
    if (markerMidStr === 'path') {
      markerMid = arrowMarker.cloneNode();
    } else if (markerMidStr === 'circle') {
      markerMid = circleMarker.cloneNode();
    } else if (markerMidStr === 'image') {
      markerMid = imageMarker.cloneNode();
    } else {
      markerMid = null;
    }

    polygon.style.markerMid = markerMid;
  });
markerFolder
  .add(markerConfig, 'markerEnd', ['path', 'circle', 'image', 'null'])
  .onChange((markerEndStr) => {
    let markerEnd;
    if (markerEndStr === 'path') {
      markerEnd = arrowMarker.cloneNode();
    } else if (markerEndStr === 'circle') {
      markerEnd = circleMarker.cloneNode();
    } else if (markerEndStr === 'image') {
      markerEnd = imageMarker.cloneNode();
    } else {
      markerEnd = null;
    }

    polygon.style.markerEnd = markerEnd;
  });
markerFolder.add(markerConfig, 'markerStartOffset', -20, 20).onChange((markerStartOffset) => {
  polygon.style.markerStartOffset = markerStartOffset;
});
markerFolder.add(markerConfig, 'markerEndOffset', -20, 20).onChange((markerEndOffset) => {
  polygon.style.markerEndOffset = markerEndOffset;
});
markerFolder.open();
`,title:{zh:"\u6807\u8BB0\u56FE\u5F62",en:"Marker"},filename:"marker.js",isNew:!1},{id:"fillrule",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*VVoJSrtsmO0AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Polygon } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const star = new Polygon({
  style: {
    points: '50,0 21,90 98,35 2,35 79,90',
    fill: '#C6E5FF',
    stroke: '#1890FF',
    lineWidth: 2,
    transform: 'translate(120px, 0)',
  },
});
const star2 = new Polygon({
  style: {
    points: '50,0 21,90 98,35 2,35 79,90',
    fill: '#C6E5FF',
    fillRule: 'evenodd',
    stroke: '#1890FF',
    lineWidth: 2,
    transform: 'translate(220px, 0)',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(star);
  canvas.appendChild(star2);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u586B\u5145\u7B97\u6CD5",en:"Fillrule"},filename:"fillrule.js",isNew:!1}],icon:"",id:"polygon",title:{en:"Polygon",zh:"\u591A\u8FB9\u5F62"},childrenKey:"demos",order:6},{demos:[{id:"path",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*p7WOQ4-tspIAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

function getCirclePath(cx, cy, rx, ry) {
  return [
    ['M', cx - rx, ry],
    ['A', rx, ry, 0, 1, 0, cx + rx, ry],
    ['A', rx, ry, 0, 1, 0, cx - rx, ry],
    ['Z'],
  ];
}

const circlePath = new Path({
  style: {
    path: getCirclePath(200, 0, 100, 100),
    lineWidth: 10,
    stroke: '#54BECC',
    fill: '#F04864',
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circlePath);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  r: 100,
  lineWidth: 1,
  lineDash: 0,
  lineDashOffset: 0,
  anchorX: 0,
  anchorY: 0,
  shadowColor: '#fff',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pointerEvents: 'auto',
  visibility: 'visible',
};
circleFolder.add(circleConfig, 'r', 0, 200).onChange((r) => {
  circlePath.style.path = getCirclePath(0, 0, r, r);
  circlePath.setPosition(100, 300);
});
circleFolder.add(circleConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  circlePath.style.lineWidth = lineWidth;
});
circleFolder.add(circleConfig, 'lineDash', 0, 100).onChange((lineDash) => {
  circlePath.style.lineDash = [lineDash];
});
circleFolder.add(circleConfig, 'lineDashOffset', 0, 100).onChange((lineDashOffset) => {
  circlePath.style.lineDashOffset = lineDashOffset;
});
circleFolder.add(circleConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  circlePath.style.anchor = [anchorX, circleConfig.anchorY];
});
circleFolder.add(circleConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  circlePath.style.anchor = [circleConfig.anchorX, anchorY];
});
circleFolder.addColor(circleConfig, 'shadowColor').onChange((color) => {
  circlePath.attr('shadowColor', color);
});
circleFolder.add(circleConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
  circlePath.style.shadowBlur = shadowBlur;
});
circleFolder.add(circleConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
  circlePath.style.shadowOffsetX = shadowOffsetX;
});
circleFolder.add(circleConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
  circlePath.style.shadowOffsetY = shadowOffsetY;
});
circleFolder
  .add(circleConfig, 'pointerEvents', [
    'none',
    'auto',
    'stroke',
    'fill',
    'painted',
    'visible',
    'visiblestroke',
    'visiblefill',
    'visiblepainted',
    'all',
  ])
  .onChange((pointerEvents) => {
    circlePath.style.pointerEvents = pointerEvents;
  });
circleFolder.add(circleConfig, 'visibility', ['visible', 'hidden']).onChange((visibility) => {
  circlePath.style.visibility = visibility;
});
circleFolder.open();
`,title:{zh:"\u8DEF\u5F84\u6837\u5F0F",en:"Style of path"},filename:"path.js",isNew:!1},{id:"l-command",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*w8O1R5RGv9gAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const line = new Path({
  style: {
    path: [
      ['M', 100, 100],
      ['L', 200, 100],
    ],
    stroke: '#F04864',
    lineDash: [10],
  },
});

const polyline = new Path({
  style: {
    path: [
      ['M', 57.06339097770921, -18.541019662496844],
      ['L', 13.225168176580645, -18.202882373436317],
      ['L', 3.67394039744206e-15, -60],
      ['L', -13.225168176580643, -18.202882373436317],
      ['L', -57.06339097770921, -18.54101966249685],
      ['L', -21.398771616640953, 6.952882373436324],
      ['L', -35.267115137548394, 48.54101966249684],
      ['L', -4.133182947122317e-15, 22.5],
      ['L', 35.26711513754837, 48.54101966249685],
      ['L', 21.398771616640953, 6.952882373436322],
      ['Z'],
    ],
    stroke: '#1890FF',
    lineWidth: 1,
  },
});
polyline.translate(100, 250);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(line);
  canvas.appendChild(polyline);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5305\u542B L \u547D\u4EE4",en:"Path with L commands"},filename:"l-command.js",isNew:!1},{id:"a-command",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*iwBNR5uP3J4AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path = new Path({
  style: {
    transform: 'translate(0, 100)',
    lineWidth: 10,
    lineJoin: 'round',
    stroke: '#54BECC',
    cursor: 'pointer',
    path:
      'M 100,300' +
      'l 50,-25' +
      'a25,25 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,50 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,75 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,100 -30 0,1 50,-25' +
      'l 50,-25' +
      'l 0, 200,' +
      'z',
  },
});

const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const arc = new Path({
  style: {
    d: 'M 100 100 A 90 90 0 0 1 100 300',
    stroke: 'black',
    markerStart: arrowMarker,
    markerEnd: arrowMarker,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);
  canvas.appendChild(arc);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const markerFolder = gui.addFolder('marker');
const markerConfig = {
  markerStartOffset: 0,
  markerEndOffset: 0,
};
markerFolder.add(markerConfig, 'markerStartOffset', -20, 20).onChange((markerStartOffset) => {
  arc.style.markerStartOffset = markerStartOffset;
});
markerFolder.add(markerConfig, 'markerEndOffset', -20, 20).onChange((markerEndOffset) => {
  arc.style.markerEndOffset = markerEndOffset;
});
markerFolder.open();
`,title:{zh:"\u5305\u542B A \u547D\u4EE4",en:"Path with A commands"},filename:"a-command.js",isNew:!1},{id:"multi-segments",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*9Q4iQaoxsS0AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path = new Path({
  style: {
    transform: 'translate(200, 100) scale(10)',
    d: 'M2 4C0.8954304997175604 3.9999999991219815 -1.3527075029566811e-16 4.895430499717561 0 6C0 6 0 9.9375 0 12C1.3527075029566811e-16 13.10456950028244 0.8954304997175604 14.00000000087802 2 14C8 14 10.25 14 14 14C15.104569499040734 13.99999999912198 16 13.104569499040734 16 12C16 9 16 7.875 16 6C16 4.895430500959266 15.104569499040734 4.0000000008780185 14 4C13.414 4 13.194249999999998 4 12.828 4C12.297610373455704 3.9998867247945213 11.788985462367364 3.7890987493850155 11.414 3.414C11 3 10.84475 2.8447500000000003 10.586 2.5860000000000003C10.211014537632636 2.210901250614985 9.702389626544296 2.0001132752054787 9.172 2.0000000000000004C8 2.0000000000000004 7.560500000000001 2.0000000000000004 6.828000000000001 2.0000000000000004C6.297610373455706 2.0001132752054787 5.788985462367367 2.210901250614985 5.4140000000000015 2.5860000000000003C5.000000000000002 3 4.844750000000001 3.1552499999999997 4.586000000000001 3.414C4.211014537632636 3.7890987493850155 3.7023896265442966 3.9998867247945213 3.1720000000000015 4C2.5860000000000016 4 2.3662500000000017 4 2.0000000000000018 4C2.000000000000001 4 2.000000000000001 4 2 4M10.5 8.5C10.5 6.575499102701247 8.416666666666666 5.372686041889527 6.75 6.334936490538903C5.976497308103742 6.781518477924107 5.5 7.606836025229591 5.5 8.5C5.5 10.424500897298753 7.583333333333334 11.627313958110474 9.25 10.665063509461097C10.023502691896258 10.218481522075892 10.5 9.39316397477041 10.5 8.5C10.5 8.5 10.5 8.5 10.5 8.5M2.5 6C2.1150998205402494 6.000000000305956 1.874537208444147 5.583333333830511 2.0669872979090567 5.2500000003442C2.1563036954051213 5.095299461648009 2.321367204761929 4.999999999858005 2.5 5C2.8849001794597506 5.000000000305956 3.125462791688336 5.416666667163845 2.933012701693495 5.7500000003442C2.8436963042354777 5.904700538406512 2.6786327946700927 5.999999999858005 2.5 6C2.5 6 2.5 6 2.5 6M11.5 8.5C11.5 11.194301256218253 8.583333333333334 12.878239541354663 6.250000000000001 11.531088913245537C5.167096231345241 10.90587413090625 4.5 9.750429564678573 4.5 8.5C4.5 5.805698743781747 7.416666666666667 4.121760458645338 9.75 5.468911086754464C10.832903768654761 6.094125869093751 11.5 7.249570435321427 11.5 8.5C11.5 8.5 11.5 8.5 11.5 8.5',
    lineWidth: 1,
    lineJoin: 'round',
    stroke: '#54BECC',
    cursor: 'pointer',
  },
});
path.addEventListener('mouseenter', () => {
  path.style.stroke = 'red';
});
path.addEventListener('mouseleave', () => {
  path.style.stroke = '#54BECC';
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u8DEF\u5F84\u5B9A\u4E49\u4E2D\u5305\u542B\u591A\u6BB5",en:"Multi segments in a path definition"},filename:"multi-segments.js",isNew:!1},{id:"group",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*EaDjS48jEY0AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Group, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const g = new Group({
  style: {
    transform: 'translate(200, 200) scale(0.5)',
  },
});
const p1 = new Path({
  style: {
    d: 'M1.2858791391047205e-14,-209.99999999999994A209.99999999999994,209.99999999999994,0,0,1,207.94618110413055,29.298221178223883L0,0Z',
    fill: 'red',
  },
});
const p2 = new Path({
  style: {
    d: 'M207.94618110413066,29.298221178223898A210.00000000000006,210.00000000000006,0,0,1,137.74500635698746,158.512817222184L0,0Z',
    fill: 'green',
  },
});
const p3 = new Path({
  style: {
    d: 'M137.7450063569874,158.51281722218394A209.99999999999997,209.99999999999997,0,0,1,-6.530971076665772,209.89841928131747L0,0Z',
    fill: 'blue',
  },
});
const p4 = new Path({
  style: {
    d: 'M-6.530971076665824,209.8984192813175A210,210,0,0,1,-168.7343604741219,-125.01486149809983L0,0Z',
    fill: 'yellow',
  },
});
const p5 = new Path({
  style: {
    d: 'M-168.7343604741219,-125.01486149809983A210,210,0,0,1,-3.377057564320937e-14,-210L0,0Z',
    fill: 'black',
  },
});
g.appendChild(p1);
g.appendChild(p2);
g.appendChild(p3);
g.appendChild(p4);
g.appendChild(p5);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(g);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 Group \u7EC4\u5408\u591A\u6761\u8DEF\u5F84",en:"Compose multiple paths with a group"},filename:"group.js",isNew:!1},{id:"marker",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*6jTFTrigNVkAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Image, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const arrowMarker = new Path({
  style: {
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    stroke: '#1890FF',
    anchor: '0.5 0.5',
    transformOrigin: 'center',
  },
});
const circleMarker = new Circle({
  style: {
    r: 10,
    stroke: '#1890FF',
  },
});
const imageMarker = new Image({
  style: {
    width: 50,
    height: 50,
    anchor: [0.5, 0.5],
    transformOrigin: 'center',
    transform: 'rotate(90deg)',
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  },
});

const path = new Path({
  style: {
    lineWidth: 1,
    stroke: '#54BECC',
    path: 'M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10',
    markerStart: arrowMarker,
    markerMid: circleMarker,
    markerEnd: arrowMarker,
  },
});
path.translate(100, 100);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const markerFolder = gui.addFolder('marker');
const markerConfig = {
  markerStart: 'path',
  markerEnd: 'path',
  markerMid: 'circle',
  markerStartOffset: 0,
  markerEndOffset: 0,
};
markerFolder
  .add(markerConfig, 'markerStart', ['path', 'circle', 'image', 'null'])
  .onChange((markerStartStr) => {
    let markerStart;
    if (markerStartStr === 'path') {
      markerStart = arrowMarker.cloneNode();
    } else if (markerStartStr === 'circle') {
      markerStart = circleMarker.cloneNode();
    } else if (markerStartStr === 'image') {
      markerStart = imageMarker.cloneNode();
    } else {
      markerStart = null;
    }

    path.style.markerStart = markerStart;
  });
markerFolder
  .add(markerConfig, 'markerMid', ['path', 'circle', 'image', 'null'])
  .onChange((markerMidStr) => {
    let markerMid;
    if (markerMidStr === 'path') {
      markerMid = arrowMarker.cloneNode();
    } else if (markerMidStr === 'circle') {
      markerMid = circleMarker.cloneNode();
    } else if (markerMidStr === 'image') {
      markerMid = imageMarker.cloneNode();
    } else {
      markerMid = null;
    }

    path.style.markerMid = markerMid;
  });
markerFolder
  .add(markerConfig, 'markerEnd', ['path', 'circle', 'image', 'null'])
  .onChange((markerEndStr) => {
    let markerEnd;
    if (markerEndStr === 'path') {
      markerEnd = arrowMarker.cloneNode();
    } else if (markerEndStr === 'circle') {
      markerEnd = circleMarker.cloneNode();
    } else if (markerEndStr === 'image') {
      markerEnd = imageMarker.cloneNode();
    } else {
      markerEnd = null;
    }

    path.style.markerEnd = markerEnd;
  });
markerFolder.add(markerConfig, 'markerStartOffset', -20, 20).onChange((markerStartOffset) => {
  path.style.markerStartOffset = markerStartOffset;
});
markerFolder.add(markerConfig, 'markerEndOffset', -20, 20).onChange((markerEndOffset) => {
  path.style.markerEndOffset = markerEndOffset;
});
markerFolder.open();
`,title:{zh:"\u6807\u8BB0\u56FE\u5F62",en:"Marker"},filename:"marker.js",isNew:!1},{id:"get-point",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*tXOjRJUyDEMAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path = new Path({
  style: {
    lineWidth: 1,
    stroke: '#54BECC',
    d: 'M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10',
    transform: 'translate(100, 100)',
  },
});

const pointInPath = new Circle({
  style: {
    r: 10,
    fill: 'red',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);
  canvas.appendChild(pointInPath);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const getPointFolder = gui.addFolder('getPoint');
const getPointConfig = {
  ratio: 0,
};
getPointFolder.add(getPointConfig, 'ratio', 0, 1).onChange((ratio) => {
  let point = path.getPoint(ratio);
  if (point) {
    pointInPath.setPosition(point.x, point.y);
  }
});
`,title:{zh:"\u83B7\u53D6\u8DEF\u5F84\u4E0A\u7684\u70B9",en:"Get point from path"},filename:"get-point.js",isNew:!1},{id:"picking",screenshot:"https://gw.alipayobjects.com/zos/raptor/1668060557459/Nov-10-2022%25252014-09-04.gif",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path2 = new Path({
  style: {
    transform: 'translate(200, 100) scale(10)',
    path: 'M2 4C0.8954304997175604 3.9999999991219815 -1.3527075029566811e-16 4.895430499717561 0 6C0 6 0 9.9375 0 12C1.3527075029566811e-16 13.10456950028244 0.8954304997175604 14.00000000087802 2 14C8 14 10.25 14 14 14C15.104569499040734 13.99999999912198 16 13.104569499040734 16 12C16 9 16 7.875 16 6C16 4.895430500959266 15.104569499040734 4.0000000008780185 14 4C13.414 4 13.194249999999998 4 12.828 4C12.297610373455704 3.9998867247945213 11.788985462367364 3.7890987493850155 11.414 3.414C11 3 10.84475 2.8447500000000003 10.586 2.5860000000000003C10.211014537632636 2.210901250614985 9.702389626544296 2.0001132752054787 9.172 2.0000000000000004C8 2.0000000000000004 7.560500000000001 2.0000000000000004 6.828000000000001 2.0000000000000004C6.297610373455706 2.0001132752054787 5.788985462367367 2.210901250614985 5.4140000000000015 2.5860000000000003C5.000000000000002 3 4.844750000000001 3.1552499999999997 4.586000000000001 3.414C4.211014537632636 3.7890987493850155 3.7023896265442966 3.9998867247945213 3.1720000000000015 4C2.5860000000000016 4 2.3662500000000017 4 2.0000000000000018 4C2.000000000000001 4 2.000000000000001 4 2 4M10.5 8.5C10.5 6.575499102701247 8.416666666666666 5.372686041889527 6.75 6.334936490538903C5.976497308103742 6.781518477924107 5.5 7.606836025229591 5.5 8.5C5.5 10.424500897298753 7.583333333333334 11.627313958110474 9.25 10.665063509461097C10.023502691896258 10.218481522075892 10.5 9.39316397477041 10.5 8.5C10.5 8.5 10.5 8.5 10.5 8.5M2.5 6C2.1150998205402494 6.000000000305956 1.874537208444147 5.583333333830511 2.0669872979090567 5.2500000003442C2.1563036954051213 5.095299461648009 2.321367204761929 4.999999999858005 2.5 5C2.8849001794597506 5.000000000305956 3.125462791688336 5.416666667163845 2.933012701693495 5.7500000003442C2.8436963042354777 5.904700538406512 2.6786327946700927 5.999999999858005 2.5 6C2.5 6 2.5 6 2.5 6M11.5 8.5C11.5 11.194301256218253 8.583333333333334 12.878239541354663 6.250000000000001 11.531088913245537C5.167096231345241 10.90587413090625 4.5 9.750429564678573 4.5 8.5C4.5 5.805698743781747 7.416666666666667 4.121760458645338 9.75 5.468911086754464C10.832903768654761 6.094125869093751 11.5 7.249570435321427 11.5 8.5C11.5 8.5 11.5 8.5 11.5 8.5',
    lineWidth: 1,
    lineJoin: 'round',
    stroke: '#54BECC',
    cursor: 'pointer',
  },
});
path2.addEventListener('mouseenter', () => {
  path2.style.stroke = 'red';
});
path2.addEventListener('mouseleave', () => {
  path2.style.stroke = '#54BECC';
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path2);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const pathFolder = gui.addFolder('path');
const pathConfig = {
  increasedLineWidthForHitTesting: 0,
  cursor: 'pointer',
};
pathFolder
  .add(pathConfig, 'increasedLineWidthForHitTesting', 0, 200)
  .onChange((increasedLineWidthForHitTesting) => {
    path2.style.increasedLineWidthForHitTesting = increasedLineWidthForHitTesting;
  });
pathFolder
  .add(pathConfig, 'cursor', ['default', 'pointer', 'help', 'progress', 'text', 'move'])
  .onChange((cursor) => {
    path2.style.cursor = cursor;
  });
`,title:{zh:"\u62FE\u53D6\u533A\u57DF\u914D\u7F6E",en:"Picking"},filename:"picking.js",isNew:!1}],icon:"",id:"path",title:{en:"Path",zh:"\u8DEF\u5F84"},childrenKey:"demos",order:7},{demos:[{id:"text",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*FdtgQLndl8IAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Rect, Text, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line of text
const text = new Text({
  style: {
    x: 100,
    y: 300,
    fontFamily: 'PingFang SC',
    text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672CThis is text',
    fontSize: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 5,
  },
});

// display anchor
const origin = new Circle({
  style: {
    r: 20,
    fill: 'red',
  },
});
origin.setPosition(text.getPosition());

// display bounds
const bounds = new Rect({
  style: {
    stroke: 'black',
    lineWidth: 2,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(bounds);
  canvas.appendChild(text);
  canvas.appendChild(origin);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  const bounding = text.getBounds();
  if (bounding) {
    const { center, halfExtents } = bounding;
    bounds.attr('width', halfExtents[0] * 2);
    bounds.attr('height', halfExtents[1] * 2);
    bounds.setPosition(center[0] - halfExtents[0], center[1] - halfExtents[1]);
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const fontFolder = gui.addFolder('font');
const fontConfig = {
  text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672CThis is text',
  fontFamily: 'PingFang SC',
  fontSize: 60,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
};
fontFolder.add(fontConfig, 'text').onFinishChange((content) => {
  text.attr('text', content);
});
fontFolder
  .add(fontConfig, 'fontFamily', ['PingFang SC', 'fantasy', 'Arial', 'Times', 'Microsoft YaHei'])
  .onChange((fontFamily) => {
    text.attr('fontFamily', fontFamily);
  });
fontFolder.add(fontConfig, 'fontSize', 10, 100).onChange((fontSize) => {
  text.attr('fontSize', fontSize);
});
fontFolder.add(fontConfig, 'fontStyle', ['normal', 'italic', 'oblique']).onChange((fontStyle) => {
  text.attr('fontStyle', fontStyle);
});
fontFolder
  .add(fontConfig, 'fontWeight', ['normal', 'bold', 'bolder', 'lighter', '100', '200', '400'])
  .onChange((fontWeight) => {
    text.attr('fontWeight', fontWeight);
  });
fontFolder.add(fontConfig, 'fontVariant', ['normal', 'small-caps']).onChange((fontVariant) => {
  text.attr('fontVariant', fontVariant);
});
fontFolder
  .add(fontConfig, 'textTransform', ['capitalize', 'uppercase', 'lowercase', 'none'])
  .onChange((transform) => {
    text.attr('textTransform', transform);
  });

const fillStrokeFolder = gui.addFolder('fill & stroke');
const fillStrokeConfig = {
  fill: '#1890FF',
  fillOpacity: 1,
  stroke: '#F04864',
  strokeOpacity: 1,
  lineWidth: 5,
  lineJoin: 'miter',
  visible: true,
  textDecorationLine: 'none',
  textDecorationColor: 'none',
  textDecorationStyle: 'solid',
};
fillStrokeFolder.addColor(fillStrokeConfig, 'fill').onChange((color) => {
  text.attr('fill', color);
});
fillStrokeFolder.add(fillStrokeConfig, 'fillOpacity', 0, 1).onChange((fillOpacity) => {
  text.attr('fillOpacity', fillOpacity);
});
fillStrokeFolder.addColor(fillStrokeConfig, 'stroke').onChange((color) => {
  text.attr('stroke', color);
});
fillStrokeFolder.add(fillStrokeConfig, 'lineWidth', 0, 10).onChange((lineWidth) => {
  text.attr('lineWidth', lineWidth);
});
fillStrokeFolder
  .add(fillStrokeConfig, 'lineJoin', ['miter', 'round', 'bevel'])
  .onChange((lineJoin) => {
    text.attr('lineJoin', lineJoin);
  });
fillStrokeFolder.add(fillStrokeConfig, 'strokeOpacity', 0, 1).onChange((strokeOpacity) => {
  text.attr('strokeOpacity', strokeOpacity);
});
fillStrokeFolder.add(fillStrokeConfig, 'visible').onChange((visible) => {
  if (visible) {
    text.style.visibility = 'visible';
    // text.show();
  } else {
    text.style.visibility = 'hidden';
    // text.hide();
  }
});
fillStrokeFolder
  .add(fillStrokeConfig, 'textDecorationLine', [
    'none',
    'underline',
    'overline',
    'line-through',
    'underline overline',
  ])
  .onChange((textDecorationLine) => {
    text.attr('textDecorationLine', textDecorationLine);
  });
fillStrokeFolder
  .add(fillStrokeConfig, 'textDecorationStyle', ['solid', 'double', 'dotted', 'dashed', 'wavy'])
  .onChange((textDecorationStyle) => {
    text.attr('textDecorationStyle', textDecorationStyle);
  });
fillStrokeFolder.addColor(fillStrokeConfig, 'textDecorationColor').onChange((color) => {
  text.attr('textDecorationColor', color);
});

const layoutFolder = gui.addFolder('layout');
const layoutConfig = {
  letterSpacing: 0,
  textBaseline: 'alphabetic',
  textPath: 'null',
  textPathSide: 'left',
  textPathStartOffset: 0,
};
layoutFolder.add(layoutConfig, 'letterSpacing', 0, 10).onChange((letterSpacing) => {
  text.attr('letterSpacing', letterSpacing);
});
layoutFolder
  .add(layoutConfig, 'textBaseline', [
    'alphabetic',
    'bottom',
    'middle',
    'top',
    'hanging',
    'ideographic',
  ])
  .onChange((textBaseline) => {
    text.attr('textBaseline', textBaseline);
  });
layoutFolder.add(layoutConfig, 'textPath', ['null', 'path']).onChange((textPath) => {
  if (textPath === 'null') {
    text.attr('textPath', null);
  } else if (textPath === 'path') {
    const path = new Path({
      style: {
        d: 'M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50',
      },
    });
    text.attr('textPath', path);
  }
});
layoutFolder.add(layoutConfig, 'textPathSide', ['left', 'right']).onChange((textPathSide) => {
  text.attr('textPathSide', textPathSide);
});
layoutFolder.add(layoutConfig, 'textPathStartOffset', 0, 100).onChange((textPathStartOffset) => {
  text.attr('textPathStartOffset', textPathStartOffset);
});

const transformFolder = gui.addFolder('transform');
const transformConfig = {
  localPositionX: 100,
  localPositionY: 300,
  localScale: 1,
  localEulerAngles: 0,
  transformOrigin: 'left top',
  anchorX: 0,
  anchorY: 0,
  dx: 0,
  dy: 0,
};
transformFolder
  .add(transformConfig, 'transformOrigin', [
    'left top',
    'center',
    'right bottom',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((transformOrigin) => {
    text.style.transformOrigin = transformOrigin;
  });
transformFolder.add(transformConfig, 'localPositionX', 0, 600).onChange((localPositionX) => {
  const [lx, ly] = text.getLocalPosition();
  text.setLocalPosition(localPositionX, ly);
});
transformFolder.add(transformConfig, 'localPositionY', 0, 500).onChange((localPositionY) => {
  const [lx, ly] = text.getLocalPosition();
  text.setLocalPosition(lx, localPositionY);
});
transformFolder.add(transformConfig, 'localScale', 0.2, 5).onChange((localScale) => {
  text.setLocalScale(localScale);
});
transformFolder.add(transformConfig, 'localEulerAngles', 0, 360).onChange((localEulerAngles) => {
  text.setLocalEulerAngles(localEulerAngles);
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  text.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'anchorY', 0, 1).onChange((anchorY) => {
  text.style.anchor = [transformConfig.anchorX, anchorY];
});
transformFolder.add(transformConfig, 'anchorX', 0, 1).onChange((anchorX) => {
  text.style.anchor = [anchorX, transformConfig.anchorY];
});
transformFolder.add(transformConfig, 'dx', -100, 100).onChange((dx) => {
  text.style.dx = dx;
});
transformFolder.add(transformConfig, 'dy', -100, 100).onChange((dy) => {
  text.style.dy = dy;
});
transformFolder.open();
`,title:{zh:"\u6587\u672C",en:"Text"},filename:"text.js",isNew:!1},{id:"text-overflow",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*qQawT5L1jGEAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line of text
const text = new Text({
  style: {
    x: 100,
    y: 300,
    fontFamily: 'PingFang SC',
    text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672CThis is text',
    fontSize: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 5,
    wordWrap: true,
    wordWrapWidth: 280,
    maxLines: 2,
    textOverflow: 'ellipsis',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(text);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const multilineFolder = gui.addFolder('multiline');
const multilineConfig = {
  wordWrap: true,
  wordWrapWidth: 280,
  maxLines: 2,
  textOverflow: 'ellipsis',
  lineHeight: 0,
  leading: 0,
  textAlign: 'start',
};
multilineFolder.add(multilineConfig, 'wordWrap').onChange((wordWrap) => {
  text.attr('wordWrap', wordWrap);
});

multilineFolder.add(multilineConfig, 'wordWrapWidth', 0, 500).onChange((wordWrapWidth) => {
  text.attr('wordWrapWidth', wordWrapWidth);
});
multilineFolder.add(multilineConfig, 'maxLines', 1, 10, 1).onChange((maxLines) => {
  text.attr('maxLines', maxLines);
});
multilineFolder.add(multilineConfig, 'textOverflow').onChange((textOverflow) => {
  text.attr('textOverflow', textOverflow);
});
multilineFolder.add(multilineConfig, 'lineHeight', 0, 100).onChange((lineHeight) => {
  text.attr('lineHeight', lineHeight);
});
multilineFolder.add(multilineConfig, 'leading', 0, 30).onChange((leading) => {
  text.attr('leading', leading);
});
multilineFolder
  .add(multilineConfig, 'textAlign', ['start', 'end', 'center', 'left', 'right'])
  .onChange((textAlign) => {
    text.attr('textAlign', textAlign);
  });
`,title:{zh:"\u6587\u672C\u6EA2\u51FA",en:"Text Overflow"},filename:"text-overflow.js",isNew:!1},{id:"web-font-loader",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*V2CyT5XfZ3AAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import WebFont from 'webfontloader';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  WebFont.load({
    google: {
      families: ['Gaegu'],
    },
    active: () => {
      const text = new Text({
        style: {
          x: 100,
          y: 100,
          fontFamily: 'Gaegu',
          text: 'Almost before we knew it, we had left the ground.',
          textOverflow: 'ellipsis',
          fontSize: 30,
          fill: '#1890FF',
          stroke: '#F04864',
          lineWidth: 5,
        },
      });
      canvas.appendChild(text);
    },
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u52A0\u8F7D\u5B57\u4F53",en:"Use Web Font Loader"},filename:"web-font-loader.js",isNew:!1}],icon:"",id:"text",title:{en:"Text",zh:"\u6587\u672C"},childrenKey:"demos",order:8},{demos:[{id:"html",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*qGIRSaeHsTQAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, CustomElement, HTML, Line, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a line
const line = new Line({
  style: {
    x1: 200,
    y1: 100,
    x2: 400,
    y2: 100,
    stroke: '#1890FF',
    lineWidth: 2,
  },
});
const p1 = new HTML({
  id: 'p1',
  name: 'p1-name',
  className: 'p1-classname',
  style: {
    x: 200,
    y: 100,
    width: 60,
    height: 30,
    innerHTML: 'p1',
  },
});
const p2 = new HTML({
  id: 'p2',
  name: 'p2-name',
  className: 'p2-classname',
  style: {
    x: 400,
    y: 100,
    width: 60,
    height: 30,
    innerHTML: 'p2',
  },
});

const rect = new Rect({
  name: 'test-name',
  style: {
    x: 200,
    y: 200,
    width: 300,
    height: 100,
    fill: '#1890FF',
  },
});
const text = new Text({
  style: {
    x: 150,
    y: 50,
    text: 'Hover me!',
    fontSize: 22,
    fill: '#000',
    textAlign: 'center',
    textBaseline: 'middle',
  },
});
rect.appendChild(text);
const tooltip = new HTML({
  style: {
    x: 0,
    y: 0,
    innerHTML: 'Tooltip',
    fill: 'white',
    stroke: 'black',
    lineWidth: 6,
    width: 100,
    height: 30,
    pointerEvents: 'none',
    visibility: 'hidden',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(line);
  canvas.appendChild(p1);
  canvas.appendChild(p2);
  canvas.appendChild(rect);
  canvas.appendChild(tooltip);
});

rect.addEventListener('mousemove', (e) => {
  tooltip.setPosition(e.x, e.y);
  tooltip.style.visibility = 'visible';

  console.log('move', e.target);
});
rect.addEventListener('mouseleave', (e) => {
  tooltip.setPosition(0, 0);
  tooltip.style.visibility = 'hidden';

  console.log('leave', e.target);
});

class Custom extends CustomElement {
  constructor(config) {
    super({
      ...config,
      type: 'custom',
    });

    const tooltip = new HTML({
      style: {
        x: 0,
        y: 0,
        innerHTML: 'Tooltip',
        fill: 'white',
        stroke: 'black',
        lineWidth: 6,
        width: 100,
        height: 30,
      },
    });
    this.appendChild(tooltip);
    this.appendChild(new Rect({ style: { width: 100, height: 100, x: 0, y: 40, fill: 'red' } }));
  }

  connectedCallback() {}
}
const customEl = new Custom({
  style: {
    transform: 'translate(200, 330)',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(customEl);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const lineFolder = gui.addFolder('line');
const lineConfig = {
  stroke: '#1890FF',
  lineWidth: 2,
  strokeOpacity: 1,
  anchorX: 0,
  anchorY: 0,
  x1: 200,
  y1: 100,
  x2: 400,
  y2: 100,
};
lineFolder.add(lineConfig, 'x1', 0, 400).onChange((x1) => {
  line.style.x1 = x1;
  p1.style.x = x1;
});
lineFolder.add(lineConfig, 'y1', 0, 400).onChange((y1) => {
  line.style.y1 = y1;
  p1.style.y = y1;
});
lineFolder.add(lineConfig, 'x2', 0, 400).onChange((x2) => {
  line.style.x2 = x2;
  p2.style.x = x2;
});
lineFolder.add(lineConfig, 'y2', 0, 400).onChange((y2) => {
  line.style.y2 = y2;
  p2.style.y = y2;
});
lineFolder.addColor(lineConfig, 'stroke').onChange((color) => {
  line.style.stroke = color;
});
lineFolder.add(lineConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  line.style.lineWidth = lineWidth;
});
lineFolder.add(lineConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  line.style.strokeOpacity = opacity;
});
lineFolder.add(lineConfig, 'anchorX', 0, 1, 0.1).onChange((anchorX) => {
  line.attr('anchor', [anchorX, lineConfig.anchorY]);
});
lineFolder.add(lineConfig, 'anchorY', 0, 1, 0.1).onChange((anchorY) => {
  line.attr('anchor', [lineConfig.anchorX, anchorY]);
});
lineFolder.open();

const cameraFolder = gui.addFolder('camera actions');
const cameraConfig = {
  panX: 0,
  panY: 0,
  zoom: 1,
  roll: 0,
};

const camera = canvas.getCamera();
const origin = camera.getPosition();
cameraFolder.add(cameraConfig, 'panX', -300, 300).onChange((panX) => {
  const current = camera.getPosition();
  camera.pan(origin[0] + panX - current[0], 0);
});
cameraFolder.add(cameraConfig, 'panY', -300, 300).onChange((panY) => {
  const current = camera.getPosition();
  camera.pan(0, origin[1] + panY - current[1]);
});
cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
  camera.rotate(0, 0, roll);
});
cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
  camera.setZoom(zoom);
});
cameraFolder.open();
`,title:{zh:"HTML",en:"HTML"},filename:"html.js",isNew:!1}],icon:"",id:"html",title:{en:"HTML",zh:"HTML"},childrenKey:"demos",order:9},{demos:[{id:"custom-element",source:`import { Canvas, CanvasEvent, CSS, CustomElement, Polyline, PropertySyntax } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// register custom property
CSS.registerProperty({
  name: 'myNumber',
  syntax: PropertySyntax.NUMBER,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myAngle',
  syntax: PropertySyntax.ANGLE,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myLength',
  syntax: PropertySyntax.LENGTH,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myLengthOrPercentage',
  syntax: PropertySyntax.LENGTH_PERCENTAGE,
  initialValue: '0',
  interpolable: true,
});

class MyCustomElement extends CustomElement {
  connectedCallback() {
    this.appendChild(new Polyline({ style: { points: '100,100 200,200', stroke: 'red' } }));
  }
}
const myCustomElement = new MyCustomElement();

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(myCustomElement);

  const animation = myCustomElement.animate(
    [
      {
        myAngle: '20deg',
        myLength: '10px',
        myNumber: 0,
        myLengthOrPercentage: '50%',
      },
      {
        myAngle: '10deg',
        myLength: '20px',
        myNumber: 1,
        myLengthOrPercentage: '100%',
      },
    ],
    { duration: 2000, fill: 'both' },
  );

  if (animation) {
    animation.onframe = () => {
      console.log(
        myCustomElement.style.myAngle,
        myCustomElement.style.myLength,
        myCustomElement.style.myNumber,
        myCustomElement.style.myLengthOrPercentage,
      );
    };
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u81EA\u5B9A\u4E49\u5143\u7D20",en:"Custom Element"},filename:"custom-element.js",isNew:!1},{id:"arrow",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*EzqjQYMeYoMAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, CustomElement, Image, Line, Path, Polyline } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Arrow } from '@antv/g-components';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});
const webgpuRenderer = new WebGPURenderer();

canvasRenderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create an arrow
const lineArrow = new Arrow({
  id: 'lineArrow',
  style: {
    body: new Line({
      style: {
        x1: 200,
        y1: 100,
        x2: 0,
        y2: 0,
      },
    }),
    startHead: true,
    stroke: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
    increasedLineWidthForHitTesting: 40,
  },
});
lineArrow.translate(200, 100);

const handle1 = new Circle({
  id: 'handle1',
  style: {
    cx: 400,
    cy: 200,
    r: 10,
    fill: 'red',
    draggable: true,
  },
});
const handle2 = handle1.cloneNode();
handle2.id = 'handle2';
handle2.style.cx = 200;
handle2.style.cy = 100;

const polylineArrow = new Arrow({
  id: 'polylineArrow',
  style: {
    body: new Polyline({
      style: {
        points: [
          [0, 0],
          [50, 0],
          [50, 50],
          [100, 50],
          [100, 100],
          [150, 100],
        ],
      },
    }),
    startHead: true,
    stroke: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
  },
});
polylineArrow.translate(200, 200);

const pathArrow = new Arrow({
  id: 'pathArrow',
  style: {
    body: new Path({
      style: {
        path: 'M 100,300' + 'l 50,-25' + 'a25,25 -30 0,1 50,-80',
      },
    }),
    startHead: true,
    stroke: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
  },
});
pathArrow.translate(100, 150);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(lineArrow);
  canvas.appendChild(polylineArrow);
  canvas.appendChild(pathArrow);

  canvas.appendChild(handle1);
  canvas.appendChild(handle2);
});

let shiftX = 0;
let shiftY = 0;
function moveAt(target, canvasX, canvasY) {
  target.setPosition(canvasX - shiftX, canvasY - shiftY);

  if (target.id === 'handle1') {
    const lineBody = lineArrow.getBody();
    lineBody.style.x1 = canvasX - shiftX - 200;
    lineBody.style.y1 = canvasY - shiftY - 100;
  } else if (target.id === 'handle2') {
    const lineBody = lineArrow.getBody();
    lineBody.style.x2 = canvasX - shiftX - 200;
    lineBody.style.y2 = canvasY - shiftY - 100;
  }
}

canvas.addEventListener('dragstart', function (e) {
  const [x, y] = e.target.getPosition();
  shiftX = e.canvasX - x;
  shiftY = e.canvasY - y;

  moveAt(e.target, e.canvasX, e.canvasY);
});
canvas.addEventListener('drag', function (e) {
  moveAt(e.target, e.canvasX, e.canvasY);
});

lineArrow.addEventListener('mouseenter', () => {
  lineArrow.setAttribute('stroke', '#2FC25B');
});
lineArrow.addEventListener('mouseleave', () => {
  lineArrow.setAttribute('stroke', '#1890FF');
});

polylineArrow.addEventListener('mouseenter', () => {
  polylineArrow.setAttribute('stroke', '#2FC25B');
});
polylineArrow.addEventListener('mouseleave', () => {
  polylineArrow.setAttribute('stroke', '#1890FF');
});

pathArrow.addEventListener('mouseenter', () => {
  pathArrow.setAttribute('stroke', '#2FC25B');
});
pathArrow.addEventListener('mouseleave', () => {
  pathArrow.setAttribute('stroke', '#1890FF');
});

// define my custom arrow head
class MyCustomArrowHead extends CustomElement {
  static tag = 'my-arrow-head';

  constructor(config) {
    super({
      ...config,
      type: MyCustomArrowHead.tag,
    });

    // just draw a simple triangle, eg. '<|'
    this.head = new Path({
      style: {
        path: 'M 10,10 L -10,0 L 10,-10 Z',
      },
    });

    this.appendChild(this.head);
  }

  attributeChangedCallback(name, oldValue, value) {
    this.head.setAttribute(name, value);
  }
}

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const lineArrowFolder = gui.addFolder('line arrow');
const lineArrowConfig = {
  stroke: '#1890FF',
  lineWidth: 10,
  strokeOpacity: 1,
  startHead: 'default',
  endHead: 'none',
  startHeadOffset: 0,
  endHeadOffset: 0,
};

lineArrowFolder.addColor(lineArrowConfig, 'stroke').onChange((color) => {
  lineArrow.setAttribute('stroke', color);
});
lineArrowFolder.add(lineArrowConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  lineArrow.setAttribute('lineWidth', lineWidth);
});
lineArrowFolder.add(lineArrowConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  lineArrow.setAttribute('strokeOpacity', opacity);
});
lineArrowFolder
  .add(lineArrowConfig, 'startHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      lineArrow.setAttribute('startHead', false);
    } else if (type === 'default') {
      lineArrow.setAttribute('startHead', true);
    } else if (type === 'circle') {
      lineArrow.setAttribute('startHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      lineArrow.setAttribute('startHead', image);
    } else if (type === 'custom arrowhead') {
      lineArrow.setAttribute('startHead', new MyCustomArrowHead({ style: {} }));
    }
  });
lineArrowFolder
  .add(lineArrowConfig, 'endHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      lineArrow.setAttribute('endHead', false);
    } else if (type === 'default') {
      lineArrow.setAttribute('endHead', true);
    } else if (type === 'circle') {
      lineArrow.setAttribute('endHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      lineArrow.setAttribute('endHead', image);
    } else if (type === 'custom arrowhead') {
      lineArrow.setAttribute('endHead', new MyCustomArrowHead({ style: {} }));
    }
  });
lineArrowFolder.add(lineArrowConfig, 'startHeadOffset', -20, 20).onChange((startHeadOffset) => {
  lineArrow.setAttribute('startHeadOffset', startHeadOffset);
});
lineArrowFolder.add(lineArrowConfig, 'endHeadOffset', -20, 20).onChange((endHeadOffset) => {
  lineArrow.setAttribute('endHeadOffset', endHeadOffset);
});
lineArrowFolder.open();

const polylineArrowFolder = gui.addFolder('polyline arrow');
const polylineArrowConfig = {
  stroke: '#1890FF',
  lineWidth: 10,
  strokeOpacity: 1,
  startHead: 'default',
  endHead: 'none',
  startHeadOffset: 0,
  endHeadOffset: 0,
};
polylineArrowFolder.addColor(polylineArrowConfig, 'stroke').onChange((color) => {
  polylineArrow.setAttribute('stroke', color);
});
polylineArrowFolder.add(polylineArrowConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  polylineArrow.setAttribute('lineWidth', lineWidth);
});
polylineArrowFolder.add(polylineArrowConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  polylineArrow.setAttribute('strokeOpacity', opacity);
});
polylineArrowFolder
  .add(polylineArrowConfig, 'startHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      polylineArrow.setAttribute('startHead', false);
    } else if (type === 'default') {
      polylineArrow.setAttribute('startHead', true);
    } else if (type === 'circle') {
      polylineArrow.setAttribute('startHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      polylineArrow.setAttribute('startHead', image);
    } else if (type === 'custom arrowhead') {
      polylineArrow.setAttribute('startHead', new MyCustomArrowHead({ style: {} }));
    }
  });
polylineArrowFolder
  .add(polylineArrowConfig, 'endHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      polylineArrow.setAttribute('endHead', false);
    } else if (type === 'default') {
      polylineArrow.setAttribute('endHead', true);
    } else if (type === 'circle') {
      polylineArrow.setAttribute('endHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      polylineArrow.setAttribute('endHead', image);
    } else if (type === 'custom arrowhead') {
      polylineArrow.setAttribute('endHead', new MyCustomArrowHead({ style: {} }));
    }
  });
polylineArrowFolder
  .add(polylineArrowConfig, 'startHeadOffset', -20, 20)
  .onChange((startHeadOffset) => {
    polylineArrow.setAttribute('startHeadOffset', startHeadOffset);
  });
polylineArrowFolder.add(polylineArrowConfig, 'endHeadOffset', -20, 20).onChange((endHeadOffset) => {
  polylineArrow.setAttribute('endHeadOffset', endHeadOffset);
});

const pathArrowFolder = gui.addFolder('path arrow');
const pathArrowConfig = {
  stroke: '#1890FF',
  lineWidth: 10,
  strokeOpacity: 1,
  startHead: 'default',
  endHead: 'none',
  startHeadOffset: 0,
  endHeadOffset: 0,
};
pathArrowFolder.addColor(pathArrowConfig, 'stroke').onChange((color) => {
  pathArrow.setAttribute('stroke', color);
});
pathArrowFolder.add(pathArrowConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
  pathArrow.setAttribute('lineWidth', lineWidth);
});
pathArrowFolder.add(pathArrowConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
  pathArrow.setAttribute('strokeOpacity', opacity);
});
pathArrowFolder
  .add(pathArrowConfig, 'startHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      pathArrow.setAttribute('startHead', false);
    } else if (type === 'default') {
      pathArrow.setAttribute('startHead', true);
    } else if (type === 'circle') {
      pathArrow.setAttribute('startHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      pathArrow.setAttribute('startHead', image);
    } else if (type === 'custom arrowhead') {
      pathArrow.setAttribute('startHead', new MyCustomArrowHead({ style: {} }));
    }
  });
pathArrowFolder
  .add(pathArrowConfig, 'endHead', ['none', 'default', 'circle', 'image', 'custom arrowhead'])
  .onChange((type) => {
    if (type === 'none') {
      pathArrow.setAttribute('endHead', false);
    } else if (type === 'default') {
      pathArrow.setAttribute('endHead', true);
    } else if (type === 'circle') {
      pathArrow.setAttribute('endHead', new Circle({ style: { r: 10 } }));
    } else if (type === 'image') {
      const image = new Image({
        style: {
          width: 50,
          height: 50,
          anchor: [0.5, 0.5],
          transformOrigin: 'center',
          img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        },
      });
      image.rotateLocal(90);
      pathArrow.setAttribute('endHead', image);
    } else if (type === 'custom arrowhead') {
      pathArrow.setAttribute('endHead', new MyCustomArrowHead({ style: {} }));
    }
  });
pathArrowFolder.add(pathArrowConfig, 'startHeadOffset', -20, 20).onChange((startHeadOffset) => {
  pathArrow.setAttribute('startHeadOffset', startHeadOffset);
});
pathArrowFolder.add(pathArrowConfig, 'endHeadOffset', -20, 20).onChange((endHeadOffset) => {
  pathArrow.setAttribute('endHeadOffset', endHeadOffset);
});
`,title:{zh:"\u7BAD\u5934",en:"Arrow"},filename:"arrow.js",isNew:!1}],icon:"",id:"custom-element",title:{en:"CustomElement",zh:"\u81EA\u5B9A\u4E49\u56FE\u5F62"},childrenKey:"demos",order:10}],childrenKey:"examples"},{id:"style",title:{zh:"\u6837\u5F0F\u7CFB\u7EDF",en:"Style System"},examples:[{demos:[{id:"inheritance",source:`import { Canvas, CanvasEvent, Group, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inheritance
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  /**
   * default values defined in <Text>:
   * * fill: 'black'
   *
   * inherit from document.documentElement:
   * * fontSize: '16px'
   * * fontFamily: 'sans-serif'
   * * fontStyle: 'normal'
   * * fontWeight: 'normal'
   * * fontVariant: 'normal'
   * * visibility: 'visible'
   * * pointerEvents: 'auto'
   */
  const text1 = new Text({
    style: {
      x: 100,
      y: 100,
      text: 'hello',
      cursor: 'pointer',
    },
  });
  canvas.appendChild(text1);

  /**
   * override default value \`fill\` with \`red\`:
   */
  const text2 = new Text({
    style: {
      x: 100,
      y: 150,
      text: 'hello',
      fill: 'red',
      cursor: 'pointer',
    },
  });
  canvas.appendChild(text2);

  /**
   * override inherited \`fontSize\`
   */
  const text3 = new Text({
    style: {
      x: 100,
      y: 200,
      text: 'hello',
      fill: 'red',
      fontSize: 20, // user-defined
      cursor: 'pointer',
    },
  });
  canvas.appendChild(text3);

  const rect = new Rect({
    style: {
      x: 100,
      y: 250,
      width: 300,
      height: 50,
      fill: 'grey',
      cursor: 'pointer',
    },
  });
  canvas.appendChild(rect);
  /**
   * inherit from <Rect> which is also inherited from document.documentElement.
   */
  const text4 = new Text({
    style: {
      y: 12,
      text: 'hello from <Rect>',
      cursor: 'pointer',
    },
  });
  rect.appendChild(text4);

  /**
   * override \`fontSize\`
   */
  const group = new Group({
    style: {
      x: 100,
      y: 400,
      fontSize: 32,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(group);
  const text5 = new Text({
    style: {
      y: 12,
      text: 'hello from <Group>',
      cursor: 'pointer',
    },
  });
  group.appendChild(text5);
  const text6 = new Text({
    style: {
      y: 32,
      text: 'hello from <Group>',
      cursor: 'pointer',
    },
  });
  group.appendChild(text6);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const documentElementFolder = gui.addFolder('documentElement');
  const documentElementConfig = {
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    visibility: 'unset',
    pointerEvents: 'unset',
  };
  documentElementFolder.add(documentElementConfig, 'fontSize', 1, 32).onChange((fontSize) => {
    canvas.document.documentElement.style.fontSize = \`\${fontSize}px\`;
  });
  documentElementFolder
    .add(documentElementConfig, 'fontFamily', [
      'PingFang SC',
      'fantasy',
      'Arial',
      'Times',
      'Microsoft YaHei',
    ])
    .onChange((fontFamily) => {
      canvas.document.documentElement.style.fontFamily = fontFamily;
    });
  documentElementFolder
    .add(documentElementConfig, 'fontStyle', ['normal', 'italic', 'oblique'])
    .onChange((fontStyle) => {
      canvas.document.documentElement.style.fontStyle = fontStyle;
    });
  documentElementFolder
    .add(documentElementConfig, 'visibility', ['unset', 'visible', 'hidden'])
    .onChange((visibility) => {
      canvas.document.documentElement.style.visibility = visibility;
    });
  documentElementFolder
    .add(documentElementConfig, 'pointerEvents', ['unset', 'auto', 'none'])
    .onChange((pointerEvents) => {
      canvas.document.documentElement.style.pointerEvents = pointerEvents;
    });

  const groupFolder = gui.addFolder('group');
  const groupConfig = {
    fontSize: 32,
    visibility: 'unset',
    pointerEvents: 'unset',
  };
  groupFolder.add(groupConfig, 'fontSize', 1, 32).onChange((fontSize) => {
    group.style.fontSize = \`\${fontSize}px\`;
  });
  groupFolder
    .add(groupConfig, 'visibility', ['unset', 'visible', 'hidden'])
    .onChange((visibility) => {
      group.style.visibility = visibility;
    });
  groupFolder
    .add(groupConfig, 'pointerEvents', ['unset', 'auto', 'none'])
    .onChange((pointerEvents) => {
      group.style.pointerEvents = pointerEvents;
    });
  groupFolder.open();
});
`,title:{zh:"\u5C5E\u6027\u7EE7\u627F",en:"Inheritance"},filename:"inheritance.js",isNew:!1},{id:"color",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * <color>
 * e.g. 'red' '#f00' 'rgb(255,0,0)' 'rgba(255,0,0,0.5)' 'transparent'
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 100,
    fill: '#f00',
    stroke: 'black',
    lineWidth: 10,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  fill: '#f00',
};
circleFolder
  .add(circleConfig, 'fill', [
    'darkcyan',
    '#f00',
    '#ff0000',
    'rgb(255,0,0)',
    'rgb(100%, 0%, 0%)',
    'rgba(100%,0%,0%,0.5)',
    'transparent',
    'currentColor',
  ])
  .onChange((fill) => {
    circle.style.fill = fill;
  });
`,title:{zh:"<color>",en:"<color>"},filename:"color.js",isNew:!1},{id:"gradient",source:`import { Canvas, CanvasEvent, HTML, Line, Path, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * <gradient>
 * e.g. linear-gradient(0deg, blue, green 40%, red)
 *      radial-gradient(circle at center, red 0, blue, green 100%)
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient
 *
 * interactive demo:
 * @see https://observablehq.com/@danburzo/css-gradient-line
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// single linear gradient
const rect1 = new Rect({
  style: {
    x: 50,
    y: 50,
    width: 200,
    height: 100,
    fill: 'linear-gradient(0deg, blue, green 40%, red)',
  },
});

// multi linear gradients
const rect2 = new Rect({
  style: {
    x: 50,
    y: 250,
    width: 200,
    height: 100,
    fill: \`linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)\`,
  },
});

// single radial gradient
const rect3 = new Rect({
  style: {
    x: 350,
    y: 50,
    width: 200,
    height: 100,
    fill: 'radial-gradient(circle at center, red, blue, green 100%)',
  },
});

// hard stop
const rect4 = new Rect({
  style: {
    x: 350,
    y: 250,
    width: 200,
    height: 100,
    fill: 'radial-gradient(red 50%, blue 50%)',
  },
});

const line1 = new Line({
  style: {
    x1: 50,
    y1: 180,
    x2: 250,
    y2: 180,
    strokeWidth: 10,
    stroke: 'linear-gradient(0deg, blue, green 40%, red)',
  },
});
const line2 = new Line({
  style: {
    x1: 350,
    y1: 180,
    x2: 550,
    y2: 180,
    strokeWidth: 10,
    stroke: 'radial-gradient(circle at center, red, blue, green 100%)',
  },
});

const path = new Path({
  style: {
    d: 'M33.6,51S44.36,31.65,48.15,18,64.38,7.42,66.62,18s10.6,33.6,13.15,33.1',
    transform: 'scale(3) translate(200, 300)',
    lineWidth: 1,
    stroke: '#54BECC',
    fill: 'linear-gradient(-90deg, rgba(178, 230, 181, 0), rgba(178, 230, 181, 0.6) 14%, rgba(166, 221, 179, 0.82) 23%, rgba(101, 171, 170, 0.9) 67%, rgb(23, 80, 157))',
    shadowType: 'inner',
    shadowColor: 'red',
    shadowBlur: 10,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(line1);
  canvas.appendChild(line2);
  canvas.appendChild(path);

  canvas.appendChild(rect1);
  canvas.appendChild(rect2);
  canvas.appendChild(rect3);
  canvas.appendChild(rect4);

  canvas.appendChild(
    new HTML({
      style: {
        x: 100,
        y: 20,
        height: 30,
        width: 200,
        innerHTML: 'linear gradient',
      },
    }),
  );
  canvas.appendChild(
    new HTML({
      style: {
        x: 60,
        y: 220,
        height: 30,
        width: 200,
        innerHTML: 'multiple linear gradients',
      },
    }),
  );
  canvas.appendChild(
    new HTML({
      style: {
        x: 350,
        y: 20,
        height: 30,
        width: 200,
        innerHTML: 'radial gradient',
      },
    }),
  );
  canvas.appendChild(
    new HTML({
      style: {
        x: 350,
        y: 220,
        height: 30,
        width: 200,
        innerHTML: 'hard color stop',
      },
    }),
  );
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const linearGradientFolder = gui.addFolder('linear gradient');
const linearGradientConfig = {
  angle: 0,
  width: 200,
  height: 100,
  'side or corner': 'to right',
  'green color stop(%)': 40,
};
linearGradientFolder.add(linearGradientConfig, 'angle', 0, 360).onChange((angle) => {
  rect1.style.fill = \`linear-gradient(\${angle}deg, blue, green 40%, red)\`;
});
linearGradientFolder
  .add(linearGradientConfig, 'side or corner', [
    'to left',
    'to top',
    'to bottom',
    'to right',
    'to left top',
    'to top left',
    'to left bottom',
    'to bottom left',
    'to right top',
    'to top right',
    'to right bottom',
    'to bottom right',
  ])
  .onChange((direction) => {
    rect1.style.fill = \`linear-gradient(\${direction}, blue, green 40%, red)\`;
  });
linearGradientFolder
  .add(linearGradientConfig, 'green color stop(%)', 0, 100)
  .onChange((percentage) => {
    rect1.style.fill = \`linear-gradient(0deg, blue, green \${percentage}%, red)\`;
  });
linearGradientFolder.add(linearGradientConfig, 'width', 50, 400).onChange((width) => {
  rect1.style.width = width;
});
linearGradientFolder.add(linearGradientConfig, 'height', 50, 400).onChange((height) => {
  rect1.style.height = height;
});

const radialGradientFolder = gui.addFolder('radial gradient');
const radialGradientConfig = {
  position: 'center',
  size: 'farthest-corner',
  'green color stop(%)': 100,
};
radialGradientFolder
  .add(radialGradientConfig, 'position', [
    'top',
    'left',
    'bottom',
    'right',
    'center',
    'top left',
    'left top',
    'top right',
    'bottom left',
    'bottom right',
    '25% 25%',
    '50% 50%',
    '50px 50px',
  ])
  .onChange((position) => {
    rect3.style.fill = \`radial-gradient(circle \${radialGradientConfig.size} at \${position}, red, blue, green \${radialGradientConfig['green color stop(%)']}%)\`;
  });
radialGradientFolder
  .add(radialGradientConfig, 'size', [
    'closest-side',
    'closest-corner',
    'farthest-side',
    'farthest-corner',
    '100px',
  ])
  .onChange((size) => {
    rect3.style.fill = \`radial-gradient(circle \${size} at \${radialGradientConfig.position}, red, blue, green \${radialGradientConfig['green color stop(%)']}%)\`;
  });
radialGradientFolder
  .add(radialGradientConfig, 'green color stop(%)', 0, 100)
  .onChange((percentage) => {
    rect3.style.fill = \`radial-gradient(circle \${radialGradientConfig.size} at \${radialGradientConfig.position}, red, blue, green \${percentage}%)\`;
  });
`,title:{zh:"<gradient>",en:"<gradient>"},filename:"gradient.js",isNew:!1},{id:"pattern",source:`import { Canvas, CanvasEvent, HTML, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import SimplexNoise from 'simplex-noise';
import Stats from 'stats.js';

/**
 * <pattern>
 * support the following image source:
 * * HTMLImageElement (<img>)
 * * HTMLCanvasElement (<canvas>)
 * * HTMLVideoElement (<video>)
 * * ImageData
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern#%E5%8F%82%E6%95%B0
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// <img> URL
const rect1 = new Rect({
  style: {
    x: 50,
    y: 50,
    width: 200,
    height: 100,
    fill: {
      image:
        'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*jgjxQ57sACsAAAAAAAAAAAAAARQnAQ',
      repetition: 'repeat',
    },
  },
});

// HTMLCanvasElement (<canvas>)
// @see https://observablehq.com/@awoodruff/canvas-cartography-nacis-2019
const patternCanvas = document.createElement('canvas');
patternCanvas.width = 20;
patternCanvas.height = 20;
const ctx = patternCanvas.getContext('2d');
ctx.strokeStyle = '#333';
ctx.lineWidth = 1;
ctx.beginPath();
for (let i = 0.5; i < 20; i += 5) {
  ctx.moveTo(0, i);
  ctx.lineTo(20, i);
}
ctx.stroke();
const rect3 = new Rect({
  style: {
    x: 50,
    y: 200,
    width: 200,
    height: 100,
    fill: {
      image: patternCanvas,
      repetition: 'repeat',
    },
  },
});

const width = 200;
const height = 100;
const noiseCanvas = document.createElement('canvas');
noiseCanvas.width = width;
noiseCanvas.height = height;
const context = noiseCanvas.getContext('2d');
const image = context.createImageData(width, height);
const noise = new SimplexNoise();
for (let z = 0, y = 0, i = 0; y < height; ++y) {
  for (let x = 0; x < width; ++x, i += 4) {
    image.data[i + 3] = (noise.noise2D(x / 64, y / 64) + 1) * 128;
  }
}
context.putImageData(image, 0, 0);
const rect4 = new Rect({
  style: {
    x: 300,
    y: 200,
    width: 200,
    height: 100,
    fill: {
      image: context.canvas,
      repetition: 'repeat',
    },
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(rect1);
  canvas.appendChild(rect3);
  canvas.appendChild(rect4);

  // HTMLImageElement(<img>)
  const image = new window.Image();
  image.onload = () => {
    const rect2 = new Rect({
      style: {
        x: 300,
        y: 50,
        width: 200,
        height: 100,
        fill: {
          image,
          repetition: 'repeat',
        },
      },
    });
    canvas.appendChild(rect2);
  };
  // without \`crossOrigin\`, it will throw 'WebGL2RenderingContext': Tainted canvases may not be loaded.
  image.crossOrigin = 'Anonymous';
  image.src =
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*jgjxQ57sACsAAAAAAAAAAAAAARQnAQ';

  // HTMLVideoElement(<video>)
  const video = document.createElement('video');
  video.src =
    'https://gw.alipayobjects.com/v/rms_6ae20b/afts/video/A*VD0TTbZB9WMAAAAAAAAAAAAAARQnAQ/720P';
  video.crossOrigin = 'Anonymous';
  video.autoplay = true;
  video.controls = false;
  video.muted = true;
  video.height = 100;
  video.width = 200;

  video.onloadeddata = function () {
    const rect5 = new Rect({
      style: {
        x: 50,
        y: 350,
        width: 200,
        height: 100,
        fill: {
          image: video,
          repetition: 'no-repeat',
        },
      },
    });
    canvas.appendChild(rect5);
  };

  canvas.appendChild(
    new HTML({
      style: {
        x: 100,
        y: 20,
        height: 30,
        width: 200,
        innerHTML: 'image URL',
      },
    }),
  );

  canvas.appendChild(
    new HTML({
      style: {
        x: 300,
        y: 20,
        height: 30,
        width: 200,
        innerHTML: 'HTMLImageElement(&lt;img&gt;)',
      },
    }),
  );

  canvas.appendChild(
    new HTML({
      style: {
        x: 50,
        y: 170,
        height: 30,
        width: 300,
        innerHTML: 'HTMLCanvasElement(&lt;canvas&gt;)',
      },
    }),
  );

  canvas.appendChild(
    new HTML({
      style: {
        x: 50,
        y: 320,
        height: 30,
        width: 300,
        innerHTML: 'HTMLVideoElement(&lt;video&gt;)',
      },
    }),
  );

  canvas.appendChild(
    new HTML({
      style: {
        x: 300,
        y: 170,
        height: 30,
        width: 300,
        innerHTML: 'Perlin Noise',
      },
    }),
  );
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const patternFolder = gui.addFolder('pattern');
const patternConfig = {
  repetition: 'repeat',
};
patternFolder
  .add(patternConfig, 'repetition', ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'])
  .onChange((repetition) => {
    rect1.style.fill = {
      image:
        'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*jgjxQ57sACsAAAAAAAAAAAAAARQnAQ',
      repetition,
    };
  });
patternFolder.open();
`,title:{zh:"<pattern>",en:"<pattern>"},filename:"pattern.js",isNew:!1},{id:"paint",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * <paint>
 * include <color> <gradient> <pattern>
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// create a circle
const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 100,
    fill: '#f00',
    stroke: 'black',
    lineWidth: 10,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  fill: '#f00',
};
const linearGradient = 'linear-gradient(0deg, blue, green 40%, red)';
const radialGradient = 'radial-gradient(circle at center, red, blue, green 100%)';
const pattern = {
  image: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*jgjxQ57sACsAAAAAAAAAAAAAARQnAQ',
};
circleFolder
  .add(circleConfig, 'fill', [
    'none',
    '#f00',
    'transparent',
    linearGradient,
    radialGradient,
    'pattern',
  ])
  .onChange((fill) => {
    circle.style.fill = fill === 'pattern' ? pattern : fill;
  });
`,title:{zh:"<paint>",en:"<paint>"},filename:"paint.js",isNew:!1},{id:"length",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * <length>
 *
 * support the following units:
 * e.g. '100px' '20rem' '10em'
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const group = new Group({
  style: {
    fontSize: '20px',
  },
});
// create a circle
const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: '100px',
    fill: '#f00',
    stroke: 'black',
    lineWidth: 10,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  canvas.appendChild(group);
  group.appendChild(circle);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
const circleConfig = {
  r: '100px',
};
circleFolder.add(circleConfig, 'r', ['100px', '2rem', '5em']).onChange((r) => {
  circle.style.r = r;
});
`,title:{zh:"<length>",en:"<length>"},filename:"length.js",isNew:!1},{id:"clip",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*Iy4RQZgT3EUAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group, Path, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// in user space
const clipPathCircle = new Circle({
  style: {
    cx: 150,
    cy: 150,
    r: 35,
    fill: 'blue',
  },
});

const rect1 = new Rect({
  style: {
    x: 0,
    y: 0,
    width: 45,
    height: 45,
    stroke: 'white',
    strokeWidth: 2,
    fill: 'red',
    clipPath: clipPathCircle,
    cursor: 'pointer',
    // transform: 'translate(200px, 200px)',
  },
});
const rect2 = rect1.cloneNode();
rect2.style.y = 55;
const rect3 = rect1.cloneNode();
rect3.style.x = 55;
rect3.style.y = 55;
const rect4 = rect1.cloneNode();
rect4.style.x = 55;
rect4.style.y = 0;

const clipPathRect = new Rect({
  style: {
    x: 125,
    y: 125,
    width: 50,
    height: 50,
  },
});
const clipPath = new Path({
  style: {
    stroke: 'black',
    lineWidth: 2,
    path: 'M 10,10 L -10,0 L 10,-10 Z',
    anchor: [0.5, 0.5],
  },
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const group = new Group({
    style: {
      x: 100,
      y: 100,
    },
  });
  canvas.appendChild(clipPathCircle);
  group.appendChild(rect1);
  group.appendChild(rect2);
  group.appendChild(rect3);
  group.appendChild(rect4);
  canvas.appendChild(group);
  clipPathCircle.animate([{ transform: 'scale(1)' }, { transform: 'scale(2)' }], {
    duration: 1500,
    iterations: Infinity,
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleClipFolder = gui.addFolder('Circle as clipPath');
const circleClipConfig = {
  r: 50,
};
circleClipFolder.add(circleClipConfig, 'r', 0, 100).onChange((r) => {
  clipPathCircle.style.r = r;
});
circleClipFolder.open();

const clippedShapesFolder = gui.addFolder('Clipped shapes');
const clippedShapesConfig = {
  rect1: 'circle',
  rect2: 'circle',
  rect3: 'circle',
  rect4: 'circle',
};
[rect1, rect2, rect3, rect4].forEach((rect, index) => {
  clippedShapesFolder
    .add(clippedShapesConfig, \`rect\${index + 1}\`, ['circle', 'rect', 'path', 'null'])
    .onChange((type) => {
      switch (type) {
        case 'circle':
          rect.style.clipPath = clipPathCircle;
          break;
        case 'rect':
          rect.style.clipPath = clipPathRect;
          break;
        case 'path':
          rect.style.clipPath = clipPath;
          break;
        case 'null': // clear clip path
          rect.style.clipPath = null;
          // rect.setClip(null);
          break;
      }
    });
});
clippedShapesFolder.open();
`,title:{zh:"\u88C1\u526A\u533A\u57DF",en:"Clip Path"},filename:"clip.js",isNew:!1},{id:"custom-property",source:`import { Canvas, CanvasEvent, CSS, CustomElement, Polyline, PropertySyntax } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// register custom property
CSS.registerProperty({
  name: 'myNumber',
  syntax: PropertySyntax.NUMBER,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myAngle',
  syntax: PropertySyntax.ANGLE,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myLength',
  syntax: PropertySyntax.LENGTH,
  initialValue: '0',
  interpolable: true,
});
CSS.registerProperty({
  name: 'myLengthOrPercentage',
  syntax: PropertySyntax.LENGTH_PERCENTAGE,
  initialValue: '0',
  interpolable: true,
});

class MyCustomElement extends CustomElement {
  connectedCallback() {
    this.appendChild(new Polyline({ style: { points: '100,100 200,200', stroke: 'red' } }));
  }
}
const myCustomElement = new MyCustomElement();

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(myCustomElement);

  const animation = myCustomElement.animate(
    [
      {
        myAngle: '20deg',
        myLength: '10px',
        myNumber: 0,
        myLengthOrPercentage: '50%',
      },
      {
        myAngle: '10deg',
        myLength: '20px',
        myNumber: 1,
        myLengthOrPercentage: '100%',
      },
    ],
    { duration: 2000, fill: 'both' },
  );

  if (animation) {
    animation.onframe = () => {
      console.log(
        myCustomElement.style.myAngle,
        myCustomElement.style.myLength,
        myCustomElement.style.myNumber,
        myCustomElement.style.myLengthOrPercentage,
      );
    };
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u81EA\u5B9A\u4E49\u5C5E\u6027",en:"Use custom property"},filename:"custom-property.js",isNew:!1}],icon:"",id:"basic",title:{en:"Style System",zh:"\u6837\u5F0F\u7CFB\u7EDF"},childrenKey:"demos",order:1}],childrenKey:"examples"},{id:"event",title:{zh:"\u4E8B\u4EF6\u7CFB\u7EDF",en:"Event System"},examples:[{demos:[{id:"pinch-with-pointer",source:`import { Canvas, CanvasEvent, Circle, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';

/**
 * Implements Pinch zoom gestures with PointerEvent
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Pinch_zoom_gestures
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 300,
  height: 300,
  renderer: canvasRenderer,
});

// add a circle to canvas
const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 200,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const text = new Text({
  style: {
    x: -150,
    y: -100,
    fill: 'black',
    text: 'Pinch',
    wordWrap: true,
    wordWrapWidth: 160,
    pointerEvents: 'none',
  },
});
circle.appendChild(text);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  // Global vars to cache event state
  var evCache = new Array();
  var prevDiff = -1;

  function log(prefix, ev) {
    text.style.text =
      prefix +
      ': pointerID = ' +
      ev.pointerId +
      ' ; pointerType = ' +
      ev.pointerType +
      ' ; isPrimary = ' +
      ev.isPrimary;
  }

  function pointerdown_handler(ev) {
    // The pointerdown event signals the start of a touch interaction.
    // This event is cached to support 2-finger gestures
    evCache.push({
      pointerId: ev.pointerId,
      clientX: ev.clientX,
      clientY: ev.clientY,
    });

    log('pointerDown', ev);
  }

  function pointermove_handler(ev) {
    // This function implements a 2-pointer horizontal pinch/zoom gesture.
    //
    // If the distance between the two pointers has increased (zoom in),
    // the taget element's background is changed to "pink" and if the
    // distance is decreasing (zoom out), the color is changed to "lightblue".
    //
    // This function sets the target element's border to "dashed" to visually
    // indicate the pointer's target received a move event.
    log('pointerMove', ev);
    // ev.target.style.border = 'dashed';

    // Find this event in the cache and update its record with this event
    for (var i = 0; i < evCache.length; i++) {
      if (ev.pointerId == evCache[i].pointerId) {
        evCache[i] = {
          pointerId: ev.pointerId,
          clientX: ev.clientX,
          clientY: ev.clientY,
        };
        break;
      }
    }

    // If two pointers are down, check for pinch gestures
    if (evCache.length == 2) {
      // Calculate the distance between the two pointers
      var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

      if (prevDiff > 0) {
        if (curDiff > prevDiff) {
          // The distance between the two pointers has increased
          log('Pinch moving OUT -> Zoom in', ev);
          ev.target.style.fill = 'pink';
        }
        if (curDiff < prevDiff) {
          // The distance between the two pointers has decreased
          log('Pinch moving IN -> Zoom out', ev);
          ev.target.style.fill = 'lightblue';
        }
      }

      // Cache the distance for the next move event
      prevDiff = curDiff;
    }
  }

  function pointerup_handler(ev) {
    log(ev.type, ev);
    // Remove this pointer from the cache and reset the target's
    // background and border
    remove_event(ev);
    ev.target.style.fill = '#1890FF';

    // If the number of pointers down is less than two then reset diff tracker
    if (evCache.length < 2) prevDiff = -1;
  }

  function remove_event(ev) {
    // Remove this event from the target's cache
    for (var i = 0; i < evCache.length; i++) {
      if (evCache[i].pointerId == ev.pointerId) {
        evCache.splice(i, 1);
        break;
      }
    }
  }

  circle.addEventListener('pointerdown', pointerdown_handler);
  circle.addEventListener('pointermove', pointermove_handler);
  circle.addEventListener('pointerup', pointerup_handler);
  circle.addEventListener('pointecancel', pointerup_handler);
  circle.addEventListener('pointerout', pointerup_handler);
  circle.addEventListener('pointerleave', pointerup_handler);
});
`,title:{zh:"\u4F7F\u7528 PointerEvents \u5B9E\u73B0 Pinch \u624B\u52BF",en:"Pinch zoom gestures with PointerEvents"},filename:"pinch-with-pointer.js",isNew:!1},{id:"hammer",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*i7SaRaYw0YcAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import Hammer from 'hammerjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// add a circle to canvas
const circle = new Circle({
  id: 'circle',
  style: {
    fill: 'rgb(239, 244, 255)',
    fillOpacity: 1,
    lineWidth: 1,
    opacity: 1,
    r: 100,
    stroke: 'rgb(95, 149, 255)',
    strokeOpacity: 1,
    cursor: 'pointer',
  },
});

const text = new Text({
  id: 'text',
  style: {
    fill: '#000',
    fillOpacity: 0.9,
    font: \`normal normal normal 12px Avenir, -apple-system, system-ui, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\`,
    fontFamily: 'Avenir',
    fontSize: 22,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    lineWidth: 1,
    opacity: 1,
    strokeOpacity: 1,
    text: 'Try to tap/press/pan me',
    textAlign: 'center',
    textBaseline: 'middle',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  circle.appendChild(text);
  canvas.appendChild(circle);
  circle.setPosition(300, 200);

  // use hammer.js
  const hammer = new Hammer(circle, {
    inputClass: Hammer.PointerEventInput,
  });
  hammer.on('panleft panright tap press', (ev) => {
    text.attr('text', \`\${ev.type} gesture detected.\`);
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 Hammer.js \u624B\u52BF\u5E93",en:"Gesture with Hammer.js"},filename:"hammer.js",isNew:!1},{id:"hammer-zoom",source:`import { Canvas, CanvasEvent, Image as GImage } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import Hammer from 'hammerjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Pinch Zoom And Pan With HammerJS
 * @see https://bl.ocks.org/redgeoff/6be0295e6ebf18649966d48768398252
 */

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 200;
const MIN_SCALE = 1; // 1=scaling when first loaded
const MAX_SCALE = 64;

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvas = new Canvas({
  container: 'container',
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  renderer: canvasRenderer,
});

// prevent browser default actions
// @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action
const $canvas = canvas.getContextService().getDomElement();
$canvas.style.touchAction = 'none';

canvas.addEventListener(CanvasEvent.READY, () => {
  let image;

  let imgWidth = null;
  let imgHeight = null;
  let viewportWidth = CANVAS_WIDTH;
  let viewportHeight = CANVAS_HEIGHT;
  let scale = null;
  let lastScale = null;
  let img = null;
  let x = 0;
  let lastX = 0;
  let y = 0;
  let lastY = 0;
  let pinchCenter = null;
  let pinchCenterOffset = null;
  let curWidth;
  let curHeight;

  // Traverse the DOM to calculate the absolute position of an element
  const absolutePosition = function (el) {
    const { top, left } = canvas.getContextService().getDomElement().getBoundingClientRect();
    return { x: left, y: top };
  };

  const restrictScale = (scale) => {
    if (scale < MIN_SCALE) {
      scale = MIN_SCALE;
    } else if (scale > MAX_SCALE) {
      scale = MAX_SCALE;
    }
    return scale;
  };

  const restrictRawPos = (pos, viewportDim, imgDim) => {
    if (pos < viewportDim / scale - imgDim) {
      // too far left/up?
      pos = viewportDim / scale - imgDim;
    } else if (pos > 0) {
      // too far right/down?
      pos = 0;
    }
    return pos;
  };

  const updateLastPos = (deltaX, deltaY) => {
    lastX = x;
    lastY = y;
  };

  const translate = (deltaX, deltaY) => {
    // We restrict to the min of the viewport width/height or current width/height as the
    // current width/height may be smaller than the viewport width/height
    const newX = restrictRawPos(
      lastX + deltaX / scale,
      Math.min(viewportWidth, curWidth),
      imgWidth,
    );
    x = newX;

    const newY = restrictRawPos(
      lastY + deltaY / scale,
      Math.min(viewportHeight, curHeight),
      imgHeight,
    );
    y = newY;

    image.setLocalPosition(Math.ceil(newX * scale), Math.ceil(newY * scale));
  };

  const zoom = (scaleBy) => {
    scale = restrictScale(lastScale * scaleBy);

    curWidth = imgWidth * scale;
    curHeight = imgHeight * scale;

    image.style.width = Math.ceil(curWidth);
    image.style.height = Math.ceil(curHeight);

    // Adjust margins to make sure that we aren't out of bounds
    translate(0, 0);
  };

  const rawCenter = (e) => {
    const pos = absolutePosition(canvas);

    // We need to account for the scroll position
    const scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
    const scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

    const zoomX = -x + (e.center.x - pos.x + scrollLeft) / scale;
    const zoomY = -y + (e.center.y - pos.y + scrollTop) / scale;

    return { x: zoomX, y: zoomY };
  };

  const updateLastScale = function () {
    lastScale = scale;
  };

  const zoomAround = (scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) => {
    // Zoom
    zoom(scaleBy);

    // New raw center of viewport
    const rawCenterX = -x + Math.min(viewportWidth, curWidth) / 2 / scale;
    const rawCenterY = -y + Math.min(viewportHeight, curHeight) / 2 / scale;

    // Delta
    const deltaX = (rawCenterX - rawZoomX) * scale;
    const deltaY = (rawCenterY - rawZoomY) * scale;

    // Translate back to zoom center
    translate(deltaX, deltaY);

    if (!doNotUpdateLast) {
      updateLastScale();
      updateLastPos();
    }
  };

  const zoomCenter = (scaleBy) => {
    // Center of viewport
    const zoomX = -x + Math.min(viewportWidth, curWidth) / 2 / scale;
    const zoomY = -y + Math.min(viewportHeight, curHeight) / 2 / scale;

    zoomAround(scaleBy, zoomX, zoomY);
  };

  const zoomIn = () => {
    zoomCenter(2);
  };

  const zoomOut = () => {
    zoomCenter(1 / 2);
  };

  img = new Image();

  img.src = 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*wnQmQ6j3UGQAAAAAAAAAAAAAARQnAQ';
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    // \u56FE\u7247\u52A0\u8F7D\u6210\u529F\u540E\u521B\u5EFA
    image = new GImage({
      style: {
        width: CANVAS_WIDTH,
        height: (CANVAS_WIDTH * 119) / 960,
        src: img, // \u4F20\u5165 Image \u5BF9\u8C61
      },
    });
    canvas.appendChild(image);

    imgWidth = image.style.width;
    imgHeight = image.style.height;
    scale = viewportWidth / imgWidth;
    lastScale = scale;
    curWidth = imgWidth * scale;
    curHeight = imgHeight * scale;

    // use hammer.js
    const hammer = new Hammer(image, {
      inputClass: Hammer.PointerEventInput,
    });

    hammer.get('pinch').set({
      enable: true,
    });

    hammer.on('pan', function (e) {
      translate(e.deltaX, e.deltaY);
    });

    hammer.on('panend', function (e) {
      updateLastPos();
    });

    hammer.on('pinch', function (e) {
      // We only calculate the pinch center on the first pinch event as we want the center to
      // stay consistent during the entire pinch
      if (pinchCenter === null) {
        pinchCenter = rawCenter(e);
        var offsetX = pinchCenter.x * scale - (-x * scale + Math.min(viewportWidth, curWidth) / 2);
        var offsetY =
          pinchCenter.y * scale - (-y * scale + Math.min(viewportHeight, curHeight) / 2);
        pinchCenterOffset = { x: offsetX, y: offsetY };
      }

      // When the user pinch zooms, she/he expects the pinch center to remain in the same
      // relative location of the screen. To achieve this, the raw zoom center is calculated by
      // first storing the pinch center and the scaled offset to the current center of the
      // image. The new scale is then used to calculate the zoom center. This has the effect of
      // actually translating the zoom center on each pinch zoom event.
      var newScale = restrictScale(scale * e.scale);
      var zoomX = pinchCenter.x * newScale - pinchCenterOffset.x;
      var zoomY = pinchCenter.y * newScale - pinchCenterOffset.y;
      var zoomCenter = { x: zoomX / newScale, y: zoomY / newScale };

      zoomAround(e.scale, zoomCenter.x, zoomCenter.y, true);
    });

    hammer.on('pinchend', function (e) {
      updateLastScale();
      updateLastPos();
      pinchCenter = null;
    });

    hammer.on('doubletap', function (e) {
      const c = rawCenter(e);
      zoomAround(2, c.x, c.y);
    });

    // GUI
    const gui = new lil.GUI({ autoPlace: false });
    $wrapper.appendChild(gui.domElement);
    const rendererFolder = gui.addFolder('renderer');
    const rendererConfig = {
      renderer: 'canvas',
    };
    rendererFolder
      .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
      .onChange((renderer) => {
        canvas.setRenderer(
          renderer === 'canvas'
            ? canvasRenderer
            : renderer === 'webgl'
            ? webglRenderer
            : svgRenderer,
        );
      });
    rendererFolder.open();
    const zoomFolder = gui.addFolder('zoom');
    const zoomConfig = {
      zoomIn,
      zoomOut,
    };
    zoomFolder.add(zoomConfig, 'zoomIn');
    zoomFolder.add(zoomConfig, 'zoomOut');
  };

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });
});
`,title:{zh:"\u4F7F\u7528 Hammer.js \u624B\u52BF\u5E93\u5B9E\u73B0\u56FE\u7247\u7F29\u653E",en:"Gesture with Hammer.js"},filename:"hammer-zoom.js",isNew:!1}],icon:"",id:"gesture",title:{en:"Gesture",zh:"\u624B\u52BF"},childrenKey:"demos",order:5},{demos:[{id:"interact",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*9YqIQo56RasAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-css-select';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import interact from 'interactjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * use interact.js
 * @see https://interactjs.io/
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// register css select plugin
canvasRenderer.registerPlugin(new Plugin());
webglRenderer.registerPlugin(new Plugin());
svgRenderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  /**
   * Draggable
   */
  const circle = new Circle({
    className: 'draggable',
    style: {
      fill: 'rgb(239, 244, 255)',
      fillOpacity: 1,
      lineWidth: 1,
      opacity: 1,
      r: 60,
      stroke: 'rgb(95, 149, 255)',
      strokeOpacity: 1,
      zIndex: 1,
    },
  });
  const text = new Text({
    style: {
      text: 'Drag me',
      fontSize: 22,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  circle.appendChild(text);
  canvas.appendChild(circle);
  circle.setPosition(100, 100);
  interact(circle, {
    context: canvas.document,
  }).draggable({
    onmove: function (event) {
      const { dx, dy } = event;
      circle.translateLocal(dx, dy);
    },
  });

  /**
   * Resizable
   */
  const resizableRect = new Rect({
    style: {
      x: 220,
      y: 260,
      width: 200,
      height: 200,
      fill: '#1890FF',
    },
  });
  const resizableRectText = new Text({
    style: {
      text: 'Resize from any edge or corner',
      fontSize: 16,
      fill: 'white',
      textAlign: 'left',
      textBaseline: 'top',
      wordWrap: true,
      wordWrapWidth: 200,
    },
  });
  resizableRectText.translateLocal(0, 20);
  resizableRect.appendChild(resizableRectText);
  canvas.appendChild(resizableRect);
  interact(resizableRect, {
    context: canvas.document,
  }).resizable({
    edges: { top: true, left: true, bottom: true, right: true },
    onmove: function (event) {
      resizableRect.translateLocal(event.deltaRect.left, event.deltaRect.top);
      resizableRect.style.width = event.rect.width;
      resizableRect.style.height = event.rect.height;

      resizableRectText.style.wordWrapWidth = event.rect.width;
    },
  });

  /**
   * Drop zone
   */
  const dropZone = new Rect({
    style: {
      x: 100,
      y: 50,
      width: 300,
      height: 200,
      fill: '#1890FF',
    },
  });
  canvas.appendChild(dropZone);
  interact(dropZone, {
    context: canvas.document,
  }).dropzone({
    accept: '.draggable',
    overlap: 0.75,
    ondragenter: function (event) {
      text.style.text = 'Dragged in';
    },
    ondragleave: function (event) {
      text.style.text = 'Dragged out';
    },
    ondrop: function (event) {
      text.style.text = 'Dropped';
    },
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.style.fill = '#4e4';
    },
    ondropdeactivate: function (event) {
      event.target.style.fill = '#1890FF';
    },
  });

  /**
   * Gesture
   */
  const gesture = new Circle({
    style: {
      fill: 'rgb(239, 244, 255)',
      fillOpacity: 1,
      lineWidth: 1,
      opacity: 1,
      r: 60,
      stroke: 'rgb(95, 149, 255)',
      strokeOpacity: 1,
    },
  });
  const gestureText = new Text({
    style: {
      text: 'Tap to Change color\\n Doubletap to change size\\n Hold to rotate',
      fontSize: 12,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  gesture.appendChild(gestureText);
  canvas.appendChild(gesture);
  gesture.setPosition(500, 100);
  let tapped = false;
  let doubleTapped = false;
  interact(gesture, {
    context: canvas.document,
  })
    .on('tap', function (event) {
      event.currentTarget.style.fill = tapped ? 'red' : 'rgb(239, 244, 255)';
      tapped = !tapped;
      event.preventDefault();
    })
    .on('doubletap', function (event) {
      event.currentTarget.style.r = doubleTapped ? 100 : 60;
      doubleTapped = !doubleTapped;
      event.preventDefault();
    })
    .on('hold', function (event) {
      event.currentTarget.rotateLocal(30);
    });

  /**
   * Snapping
   */
  const snapRect = new Rect({
    style: {
      fill: 'rgb(239, 244, 255)',
      fillOpacity: 1,
      lineWidth: 1,
      opacity: 1,
      width: 200,
      height: 200,
      stroke: 'rgb(95, 149, 255)',
      strokeOpacity: 1,
    },
  });
  const snapCircle = new Circle({
    style: {
      fill: 'rgb(239, 244, 255)',
      fillOpacity: 1,
      lineWidth: 1,
      opacity: 1,
      r: 30,
      stroke: 'rgb(95, 149, 255)',
      strokeOpacity: 1,
    },
  });
  const snapText = new Text({
    style: {
      text: 'Drag me',
      fontSize: 12,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  snapRect.appendChild(snapCircle);
  snapCircle.appendChild(snapText);
  canvas.appendChild(snapRect);
  snapRect.setPosition(0, 260);
  snapCircle.translateLocal(150, 150);
  interact(snapCircle, {
    context: canvas.document,
  }).draggable({
    modifiers: [
      interact.modifiers.restrict({
        restriction: snapCircle.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true,
      }),
    ],
    inertia: true,
    onmove: function (event) {
      const { dx, dy } = event;
      snapCircle.translateLocal(dx, dy);
    },
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 Interact.js \u62D6\u62FD\u5E93",en:"Drag'n'Drop with Interact.js"},filename:"interact.js",isNew:!1},{id:"drag",source:`import { Canvas, CanvasEvent, Image } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Drag'n'Drop with PointerEvents
 * @see https://javascript.info/mouse-drag-and-drop
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const gate = new Image({
  className: 'droppable',
  style: {
    width: 200,
    height: 100,
    src: 'https://en.js.cx/clipart/soccer-gate.svg',
  },
});

const ball = new Image({
  style: {
    x: 300,
    y: 200,
    width: 100,
    height: 100,
    src: 'https://en.js.cx/clipart/ball.svg',
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(gate);
  canvas.appendChild(ball);

  ball.addEventListener('pointerdown', function (event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    moveAt(event.canvasX, event.canvasY);

    function moveAt(canvasX, canvasY) {
      ball.style.x = canvasX - shiftX + 'px';
      ball.style.y = canvasY - shiftY + 'px';
    }

    async function onMouseMove(event) {
      moveAt(event.canvasX, event.canvasY);
    }

    canvas.document.addEventListener('pointermove', onMouseMove);

    ball.addEventListener(
      'pointerup',
      function () {
        canvas.document.removeEventListener('pointermove', onMouseMove);
      },
      { once: true },
    );
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 PointerEvents \u5B9E\u73B0\u62D6\u62FD",en:"Drag with PointerEvents"},filename:"drag.js",isNew:!1}],icon:"",id:"dragndrop",title:{en:"Drag'n'Drop",zh:"\u62D6\u653E"},childrenKey:"demos",order:6},{demos:[{id:"circle",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*xJB7TY68IVUAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// add a circle to canvas
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  circle.addEventListener('pointerenter', function (e) {
    console.log(this, e.currentTarget);
    circle.style.fill = '#2FC25B';
  });

  circle.addEventListener('pointerleave', () => {
    console.log(this);
    circle.style.fill = '#1890FF';
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const circleFolder = gui.addFolder('circle');
  const circleConfig = {
    interactive: true,
    visible: true,
  };
  circleFolder.add(circleConfig, 'visible').onChange((visible) => {
    if (visible) {
      circle.style.visibility = 'visible';
      // circle.show();
    } else {
      circle.style.visibility = 'hidden';
      // circle.hide();
    }
  });
  circleFolder.add(circleConfig, 'interactive').onChange((interactive) => {
    circle.interactive = interactive;
  });
  circleFolder.open();
});
`,title:{zh:"\u5355\u4E2A\u5706\u62FE\u53D6",en:"Single circle picking"},filename:"circle.js",isNew:!1},{id:"circles",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*dc0NTrzOwHYAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});
const camera = canvas.getCamera();

canvas.addEventListener(CanvasEvent.READY, () => {
  for (let i = 0; i < 1000; i++) {
    const circle = new Circle({
      style: {
        cx: Math.random() * 600,
        cy: Math.random() * 500,
        r: 20 + Math.random() * 10,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
      },
    });

    canvas.appendChild(circle);

    circle.on('mouseenter', () => {
      circle.attr('fill', '#2FC25B');
    });

    circle.on('mouseleave', () => {
      circle.attr('fill', '#1890FF');
    });
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  camera.rotate(0, 0, 0.1);

  console.log(canvas.getStats());
});

// GUI
let currentRenderer = canvasRenderer;
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};

rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const folder0 = gui.addFolder('dirty rectangle');
const dirtyRectangleConfig = {
  enable: true,
};
folder0.add(dirtyRectangleConfig, 'enable').onChange((enable) => {
  currentRenderer.setConfig({
    enableDirtyRectangleRendering: enable,
  });
});
folder0.open();
`,title:{zh:"\u591A\u4E2A\u5706\u62FE\u53D6",en:"Multiple circle picking"},filename:"circles.js",isNew:!1},{id:"shapes",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*D7xLQp4L4VoAAAAAAAAAAAAAARQnAQ",source:`import {
  Canvas,
  CanvasEvent,
  Circle,
  Ellipse,
  Image,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Text,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    r: 50,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});
const ellipse = new Ellipse({
  style: {
    rx: 60,
    ry: 80,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});
const rect = new Rect({
  style: {
    width: 80,
    height: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    radius: 8,
    cursor: 'pointer',
  },
});
const image = new Image({
  style: {
    width: 100,
    height: 100,
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    cursor: 'pointer',
  },
});
const line = new Line({
  style: {
    x1: 0,
    y1: 0,
    x2: 200,
    y2: 0,
    stroke: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
  },
});
const polyline = new Polyline({
  style: {
    points: [
      [50, 50],
      [100, 50],
      [100, 100],
      [150, 100],
      [150, 150],
      [200, 150],
      [200, 200],
      [250, 200],
    ],
    stroke: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
  },
});
const path = new Path({
  style: {
    path:
      'M 100,300' +
      'l 50,-25' +
      'a25,25 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,50 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,75 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,100 -30 0,1 50,-25' +
      'l 50,-25' +
      'l 0, 200,' +
      'z',
    lineWidth: 10,
    lineJoin: 'round',
    stroke: '#1890FF',
    cursor: 'pointer',
  },
});
const polygon = new Polygon({
  style: {
    points: [
      [200, 100],
      [400, 100],
      [400 + 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
      [400, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200, 100 + 200 * Math.cos(Math.PI / 6) * 2],
      [200 - 200 * Math.sin(Math.PI / 6), 100 + 200 * Math.cos(Math.PI / 6)],
    ],
    stroke: '#1890FF',
    fill: '#1890FF',
    lineWidth: 10,
    cursor: 'pointer',
  },
});
const text = new Text({
  style: {
    fontFamily: 'PingFang SC',
    text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672C',
    fontSize: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 5,
    cursor: 'pointer',
  },
});
const clippedText = new Text({
  style: {
    fontFamily: 'PingFang SC',
    text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672C',
    fontSize: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 5,
    clipPath: new Circle({
      style: {
        cx: 20,
        cy: -10,
        r: 20,
      },
    }),
    cursor: 'pointer',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  circle.setPosition(100, 100);
  canvas.appendChild(circle);

  ellipse.setPosition(220, 100);
  canvas.appendChild(ellipse);

  rect.setPosition(300, 100);
  canvas.appendChild(rect);

  image.setPosition(400, 100);
  canvas.appendChild(image);

  line.setPosition(100, 200);
  canvas.appendChild(line);

  polyline.setPosition(0, 200);
  polyline.rotate(20);
  canvas.appendChild(polyline);

  path.setPosition(160, 200);
  path.rotate(20);
  path.scale(0.5);
  canvas.appendChild(path);

  polygon.setPosition(340, 200);
  polygon.scale(0.3);
  canvas.appendChild(polygon);

  text.setPosition(160, 450);
  canvas.appendChild(text);

  clippedText.setPosition(160, 500);
  canvas.appendChild(clippedText);

  circle.addEventListener('mouseenter', () => {
    circle.style.fill = '#2FC25B';
  });
  circle.addEventListener('mouseleave', () => {
    circle.style.fill = '#1890FF';
  });
  ellipse.addEventListener('mouseenter', () => {
    ellipse.style.fill = '#2FC25B';
  });
  ellipse.addEventListener('mouseleave', () => {
    ellipse.style.fill = '#1890FF';
  });
  rect.addEventListener('mouseenter', () => {
    rect.style.fill = '#2FC25B';
  });
  rect.addEventListener('mouseleave', () => {
    rect.style.fill = '#1890FF';
  });
  line.addEventListener('mouseenter', () => {
    line.style.stroke = '#2FC25B';
  });
  line.addEventListener('mouseleave', () => {
    line.style.stroke = '#1890FF';
  });
  polyline.addEventListener('mouseenter', () => {
    polyline.style.stroke = '#2FC25B';
  });
  polyline.addEventListener('mouseleave', () => {
    polyline.style.stroke = '#1890FF';
  });
  path.addEventListener('mouseenter', () => {
    path.style.stroke = '#2FC25B';
  });
  path.addEventListener('mouseleave', () => {
    path.style.stroke = '#1890FF';
  });
  polygon.addEventListener('mouseenter', () => {
    polygon.style.stroke = '#2FC25B';
  });
  polygon.addEventListener('mouseleave', () => {
    polygon.style.stroke = '#1890FF';
  });
  text.addEventListener('mouseenter', () => {
    text.attr('stroke', '#2FC25B');
  });
  text.addEventListener('mouseleave', () => {
    text.attr('stroke', '#F04864');
  });
  clippedText.addEventListener('mouseenter', () => {
    clippedText.attr('stroke', '#2FC25B');
  });
  clippedText.addEventListener('mouseleave', () => {
    clippedText.attr('stroke', '#F04864');
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener('afterrender', () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u591A\u79CD\u56FE\u5F62\u62FE\u53D6",en:"Multiple shapes picking"},filename:"shapes.js",isNew:!1}],icon:"",id:"picking",title:{en:"Picking",zh:"\u62FE\u53D6"},childrenKey:"demos",order:7},{demos:[{id:"delegate",source:`import { Canvas, CanvasEvent, Group, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * \u5B9E\u73B0\u4E8B\u4EF6\u59D4\u6258\uFF0C\u70B9\u51FB\u4E24\u4E2A\u77E9\u5F62\uFF0C\u5728\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A
 * * target
 * * currentTarget
 * * clientX/Y
 * * composedPath() \u4E8B\u4EF6\u4F20\u64AD\u8DEF\u5F84
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ul = new Group({
    id: 'ul',
  });
  const li1 = new Rect({
    id: 'li1',
    style: {
      x: 200,
      y: 100,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });
  const text = new Text({
    style: {
      x: 150,
      y: 50,
      text: 'Click me!',
      fontSize: 22,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  li1.appendChild(text);
  const li2 = new Rect({
    id: 'li2',
    style: {
      x: 200,
      y: 300,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });

  canvas.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);

  ul.addEventListener('click', (e) => {
    console.log('currentTarget', e.currentTarget);
    console.log('target', e.target);
    console.log('clientX', e.clientX);
    console.log('clientY', e.clientY);
    console.log('x', e.x);
    console.log('y', e.y);
    console.log('path', e.composedPath());
  });

  canvas.addEventListener('click', (e) => {
    console.log('currentTarget', e.currentTarget);
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4E8B\u4EF6\u59D4\u6258",en:"Delegate"},filename:"delegate.js",isNew:!1},{id:"custom",source:`import { Canvas, CanvasEvent, CustomEvent, Group, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a custom event
const event = new CustomEvent('build', { detail: { prop1: 'xx' } });

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ul = new Group({
    id: 'ul',
  });
  const li1 = new Rect({
    id: 'li1',
    style: {
      x: 200,
      y: 100,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });
  const text = new Text({
    style: {
      x: 150,
      y: 50,
      text: 'Click me!',
      fontSize: 22,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  li1.appendChild(text);

  const li2 = new Rect({
    id: 'li2',
    style: {
      x: 200,
      y: 300,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });

  canvas.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);

  li1.addEventListener('click', (e) => {
    // dispatch my custom event!
    li1.dispatchEvent(event);

    // @deprecated
    // li1.emit('build', { prop1: 'xx' });
  });

  // delegate to parent
  ul.addEventListener('build', (e) => {
    console.log(e.target); // circle
    console.log(e.detail); // { prop1: 'xx' }
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6",en:"Dispatch custom event"},filename:"custom.js",isNew:!1},{id:"deprecated-delegate",source:`import { Canvas, CanvasEvent, Group, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * \u5B9E\u73B0\u4E8B\u4EF6\u59D4\u6258\uFF0C\u70B9\u51FB\u4E24\u4E2A\u77E9\u5F62\uFF0C\u5728\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A
 * * target
 * * currentTarget
 * * clientX/Y
 * * composedPath() \u4E8B\u4EF6\u4F20\u64AD\u8DEF\u5F84
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ul = new Group({
    id: 'ul',
  });
  const li1 = new Rect({
    id: 'li1',
    name: 'test-name',
    style: {
      x: 200,
      y: 100,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });
  const text = new Text({
    style: {
      x: 150,
      y: 50,
      text: 'Click me!',
      fontSize: 22,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  li1.appendChild(text);
  const li2 = new Rect({
    id: 'li2',
    name: 'test-name',
    style: {
      x: 200,
      y: 300,
      width: 300,
      height: 100,
      fill: '#1890FF',
    },
  });

  canvas.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);

  ul.addEventListener('test-name:click', (e) => {
    console.log('target', e.target);
    console.log('path', e.composedPath());
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u517C\u5BB9\u65E7\u7248\u7684\u4E8B\u4EF6\u59D4\u6258\u5199\u6CD5",en:"Delegate with event's name"},filename:"deprecated-delegate.js",isNew:!1},{id:"builtin",source:`import { Canvas, CanvasEvent, Circle, ElementEvent, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(ElementEvent.INSERTED, (e) => {
  console.log('inserted', e.target);
});
canvas.addEventListener(ElementEvent.MOUNTED, (e) => {
  console.log('mounted', e.target);
});
canvas.addEventListener(ElementEvent.UNMOUNTED, (e) => {
  console.log('unmounted', e.target);
});
canvas.addEventListener(ElementEvent.REMOVED, (e) => {
  console.log('removed', e.target);
});
canvas.addEventListener(ElementEvent.DESTROY, (e) => {
  console.log('destroyed', e.target);
});

// observe root node
// const observer = new MutationObserver(() => {});
// observer.observe(canvas.document.documentElement, { childList: true });

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const circleFolder = gui.addFolder('circle');
let circles = [];
let removed = [];
let counter = 0;
const circleConfig = {
  insert: () => {
    let id = counter++;
    const circle = new Circle({
      id,
      style: {
        r: 40,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
        cursor: 'pointer',
      },
    });
    const text = new Text({
      id: 'text',
      style: {
        fill: '#000',
        text: '' + id,
        textAlign: 'center',
        textBaseline: 'middle',
      },
    });
    circle.appendChild(text);

    circles.push(circle);
    canvas.appendChild(circle);
    circle.setPosition(300 + (circles.length - 1) * 20, 250);

    // const records = observer.takeRecords();
    // console.log(records);
  },
  remove: () => {
    const circle = circles.pop();
    if (circle) {
      removed.push(circle);
      // remove but don't destroy, can re-insert it later
      circle.remove(false);
    }
  },
  're-insert': () => {
    const circle = removed.pop();
    if (circle) {
      circles.push(circle);
      canvas.appendChild(circle);
      // const records = observer.takeRecords();
      // console.log(records);
    }
  },
  destroy: () => {
    const circle = circles.pop();
    if (circle) {
      circle.destroy();
    }
  },
};
circleFolder.add(circleConfig, 'insert');
circleFolder.add(circleConfig, 'remove');
circleFolder.add(circleConfig, 're-insert');
circleFolder.add(circleConfig, 'destroy');
circleFolder.open();
`,title:{zh:"\u5185\u7F6E\u573A\u666F\u56FE\u4E8B\u4EF6",en:"SceneGraph Events"},filename:"builtin.js",isNew:!1},{id:"coordinates",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*kPfcTKwZG90AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Text, Line } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer({
  enableDirtyRectangleRenderingDebug: true,
});
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});
const camera = canvas.getCamera();

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  const circle = new Circle({
    style: {
      cx: 300,
      cy: 200,
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
      cursor: 'pointer',
    },
  });

  canvas.appendChild(circle);

  circle.addEventListener('mouseenter', () => {
    circle.style.fill = '#2FC25B';
  });

  circle.addEventListener('mouseleave', () => {
    circle.style.fill = '#1890FF';
  });

  const clientText = new Text({
    style: {
      fill: '#000',
      fontSize: 22,
      text: 'Client: ',
      textBaseline: 'middle',
    },
  });
  clientText.setPosition(100, 80);
  canvas.appendChild(clientText);

  const canvasText = clientText.cloneNode();
  canvasText.style.text = 'Canvas: ';
  canvasText.setPosition(100, 110);
  canvas.appendChild(canvasText);

  const viewportText = clientText.cloneNode();
  viewportText.style.text = 'Viewport: ';
  viewportText.setPosition(100, 140);
  canvas.appendChild(viewportText);

  const screenText = clientText.cloneNode();
  screenText.style.text = 'Screen: ';
  screenText.setPosition(100, 20);
  canvas.appendChild(screenText);

  const pageText = clientText.cloneNode();
  pageText.style.text = 'Page: ';
  pageText.setPosition(100, 50);
  canvas.appendChild(pageText);

  const vLine = new Line({
    style: {
      stroke: 'black',
      strokeWidth: 2,
      pointerEvents: 'none',
    },
  });
  const hLine = new Line({
    style: {
      stroke: 'black',
      strokeWidth: 2,
      pointerEvents: 'none',
    },
  });
  canvas.appendChild(vLine);
  canvas.appendChild(hLine);

  canvas.addEventListener('mousemove', (e) => {
    const screenX = e.screenX;
    const screenY = e.screenY;
    screenText.style.text = \`Screen: \${screenX}, \${screenY}\`;

    const pageX = e.pageX;
    const pageY = e.pageY;
    pageText.style.text = \`Page: \${pageX}, \${pageY}\`;

    const clientX = e.clientX;
    const clientY = e.clientY;
    clientText.style.text = \`Client: \${clientX}, \${clientY}\`;

    const canvasX = e.canvasX;
    const canvasY = e.canvasY;
    canvasText.style.text = \`Canvas: \${canvasX}, \${canvasY}\`;

    const viewportX = e.viewportX;
    const viewportY = e.viewportY;
    viewportText.style.text = \`Viewport: \${viewportX}, \${viewportY}\`;

    // AuxiliaryLine
    const hStart = { x: 0, y: e.viewportY };
    const hEnd = { x: canvas.getConfig().width, y: e.viewportY };
    hLine.style.x1 = canvas.viewport2Canvas(hStart).x;
    hLine.style.y1 = canvas.viewport2Canvas(hStart).y;
    hLine.style.x2 = canvas.viewport2Canvas(hEnd).x;
    hLine.style.y2 = canvas.viewport2Canvas(hEnd).y;

    const vStart = { x: e.viewportX, y: 0 };
    const vEnd = { x: e.viewportX, y: canvas.getConfig().height };
    vLine.style.x1 = canvas.viewport2Canvas(vStart).x;
    vLine.style.y1 = canvas.viewport2Canvas(vStart).y;
    vLine.style.x2 = canvas.viewport2Canvas(vEnd).x;
    vLine.style.y2 = canvas.viewport2Canvas(vEnd).y;
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // display dirty rectangle
  const $dirtyRectangle = document.createElement('div');
  $dirtyRectangle.style.cssText = \`
  position: absolute;
  pointer-events: none;
  background: rgba(255, 0, 0, 0.5);
  \`;
  $wrapper.appendChild($dirtyRectangle);

  canvas.addEventListener(CanvasEvent.DIRTY_RECTANGLE, (e) => {
    const { dirtyRect } = e.detail;
    const { x, y, width, height } = dirtyRect;
    const dpr = window.devicePixelRatio;

    // convert from canvas coords to viewport
    $dirtyRectangle.style.left = \`\${x / dpr}px\`;
    $dirtyRectangle.style.top = \`\${y / dpr}px\`;
    $dirtyRectangle.style.width = \`\${width / dpr}px\`;
    $dirtyRectangle.style.height = \`\${height / dpr}px\`;
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const cameraFolder = gui.addFolder('camera actions');
  const cameraConfig = {
    x: 300,
    y: 250,
    panX: 0,
    panY: 0,
    zoom: 1,
    roll: 0,
  };

  const origin = camera.getPosition();
  cameraFolder.add(cameraConfig, 'x', 0, 500).onChange((x) => {
    const current = camera.getPosition();
    camera.setPosition(x, current[1]);
    camera.setFocalPoint(x, current[1]);
  });
  cameraFolder.add(cameraConfig, 'y', 0, 500).onChange((y) => {
    const current = camera.getPosition();
    camera.setPosition(current[0], y);
    camera.setFocalPoint(current[0], y);
  });
  cameraFolder.add(cameraConfig, 'panX', -300, 300).onChange((panX) => {
    const current = camera.getPosition();
    camera.pan(origin[0] + panX - current[0], 0);
  });
  cameraFolder.add(cameraConfig, 'panY', -300, 300).onChange((panY) => {
    const current = camera.getPosition();
    camera.pan(0, origin[1] + panY - current[1]);
  });
  cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
    camera.rotate(0, 0, roll);
  });
  cameraFolder.add(cameraConfig, 'zoom', 0, 10).onChange((zoom) => {
    camera.setZoom(zoom);
  });
  cameraFolder.open();
});
`,title:{zh:"\u5750\u6807\u7CFB\u8F6C\u6362",en:"Coordinates"},filename:"coordinates.js",isNew:!1},{id:"mutation-observer",source:`import { Canvas, CanvasEvent, Circle, MutationObserver } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 300,
    cy: 250,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  circle.addEventListener('mouseenter', () => {
    circle.attr('fill', '#2FC25B');
  });

  circle.addEventListener('mouseleave', () => {
    circle.attr('fill', '#1890FF');
  });

  // use mutation observer
  const config = { attributes: true, childList: true, subtree: true, attributeOldValue: true };
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      console.log(mutation);
      if (mutation.type === 'attributes') {
      }
    }
  });
  observer.observe(circle, config);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
let currentRenderer = canvasRenderer;
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder.add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg']).onChange((renderer) => {
  currentRenderer =
    renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer;
  canvas.setRenderer(currentRenderer);
});
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 MutationObserver",en:"Use MutationObserver"},filename:"mutation-observer.js",isNew:!1},{id:"touch",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// add a circle to canvas
const circle = new Circle({
  style: {
    cx: 300,
    cy: 200,
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  circle.addEventListener('touchstart', function (e) {
    console.log('touchstart');
    circle.style.fill = '#2FC25B';
  });

  circle.addEventListener('touchmove', (e) => {
    console.log('touchmove');
  });

  circle.addEventListener('touchend', function (e) {
    console.log('touchend');
    circle.style.fill = '#1890FF';
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"TouchEvents",en:"TouchEvents"},filename:"touch.js",isNew:!1}],icon:"",id:"othters",title:{en:"Others",zh:"\u5176\u5B83"},childrenKey:"demos",order:100}],childrenKey:"examples"},{id:"animation",title:{zh:"\u52A8\u753B",en:"Animation"},examples:[{demos:[{id:"easing",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*9y3_TIoOUPMAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Image } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * ported from https://animista.net/play/entrances/scale-in
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const image = new Image({
  style: {
    x: 200,
    y: 100,
    width: 200,
    height: 200,
    transformOrigin: 'center',
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
  },
});

let animation;
let timing;
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(image);

  animation = image.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], {
    duration: 1500,
    iterations: Infinity,
    // delay: 3000,
    // direction: 'alternate',
  });
  timing = animation.effect.getTiming();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const animationFolder = gui.addFolder('animation');
const animationConfig = {
  easing: 'linear',
  playbackRate: 1,
};
animationFolder
  .add(animationConfig, 'easing', [
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'ease-out-in',
    'ease-in-quad',
    'ease-out-quad',
    'ease-in-out-quad',
    'ease-out-in-quad',

    'ease-in-cubic',
    'ease-out-cubic',
    'ease-in-out-cubic',
    'ease-out-in-cubic',

    'ease-in-quart',
    'ease-out-quart',
    'ease-in-out-quart',
    'ease-out-in-quart',

    'ease-in-quint',
    'ease-out-quint',
    'ease-in-out-quint',
    'ease-out-in-quint',

    'ease-in-expo',
    'ease-out-expo',
    'ease-in-out-expo',
    'ease-out-in-expo',

    'ease-in-sine',
    'ease-out-sine',
    'ease-in-out-sine',
    'ease-out-in-sine',

    'ease-in-circ',
    'ease-out-circ',
    'ease-in-out-circ',
    'ease-out-in-circ',

    'ease-in-back',
    'ease-out-back',
    'ease-in-out-back',
    'ease-out-in-back',

    'ease-in-bounce',
    'ease-out-bounce',
    'ease-in-out-bounce',
    'ease-out-in-bounce',

    'ease-in-elastic',
    'ease-out-elastic',
    'ease-in-out-elastic',
    'ease-out-in-elastic',

    'cubic-bezier(0.47, 0, 0.745, 0.715)',

    'spring',
    'spring-in',
    'spring-out',
    'spring-in-out',
    'spring-out-in',

    'custom',
  ])
  .onChange((type) => {
    if (type !== 'custom') {
      timing.easing = type;
    } else {
      const count = 4;
      const pos = 0;
      timing.easingFunction = (x) => {
        if (x >= 1) {
          return 1;
        }
        const stepSize = 1 / count;
        x += pos * stepSize;
        return x - (x % stepSize);
      };
    }
  });
animationFolder.add(animationConfig, 'playbackRate', 0, 5).onChange((playbackRate) => {
  animation.updatePlaybackRate(playbackRate);
});
animationFolder.open();
`,title:{zh:"\u7F13\u52A8\u51FD\u6570",en:"Easing"},filename:"easing.js",isNew:!1},{id:"lifecycle",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*hafUTp9MrfYAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * ported from https://animista.net/play/entrances/scale-in
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

let animation;
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  animation = circle.animate([{ transform: 'scale(1)' }, { transform: 'scale(2)' }], {
    duration: 500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  });

  // get triggered when animation finished
  animation.onfinish = (e) => {
    console.log('finish!', e.target, e.target.playState);
  };
  animation.finished.then(() => {
    console.log('finish promise resolved');
  });
  // get triggered at the end of each frame in a running animation
  animation.onframe = (e) => {
    console.log(e.target.effect.getComputedTiming().progress);
    console.log('frame ended!', e.target, e.target.playState);
  };
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const animationFolder = gui.addFolder('animation');
const animationConfig = {
  play: () => {
    animation.play();
  },
  pause: () => {
    animation.pause();
  },
  reverse: () => {
    animation.reverse();
  },
  finish: () => {
    animation.finish();
  },
};
animationFolder.add(animationConfig, 'play').name('Play');
animationFolder.add(animationConfig, 'pause').name('Pause');
animationFolder.add(animationConfig, 'reverse').name('Reverse');
animationFolder.add(animationConfig, 'finish').name('Finish');
animationFolder.open();
`,title:{zh:"\u52A8\u753B\u751F\u547D\u5468\u671F\u63A7\u5236\u65B9\u6CD5",en:"Lifecycle of animation"},filename:"lifecycle.js",isNew:!1},{id:"delay",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*u4RCSrwBbogAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const rect = new Rect({
  style: {
    x: 100,
    y: 200,
    width: 50,
    height: 100,
    fill: '#1890FF',
  },
});
const rect2 = new Rect({
  style: {
    x: 200,
    y: 200,
    width: 50,
    height: 100,
    fill: '#1890FF',
  },
});
const rect3 = new Rect({
  style: {
    x: 300,
    y: 200,
    width: 50,
    height: 100,
    fill: '#1890FF',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(rect);
  canvas.appendChild(rect2);
  canvas.appendChild(rect3);

  rect.animate([{ transform: 'scale(0.0001, 1)' }, { transform: 'scale(1, 1)' }], {
    duration: 1000,
    //   delay: 0,
    fill: 'both',
  });
  rect2.animate([{ transform: 'scale(0.0001, 1)' }, { transform: 'scaleY(1)' }], {
    duration: 1000,
    delay: 1000,
    fill: 'both',
  });
  rect3.animate([{ transform: 'scale(0.0001, 1)' }, { transform: 'scale(1, 1)' }], {
    duration: 1000,
    delay: 2000,
    fill: 'both',
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 delay \u5C5E\u6027",en:"Use delay"},filename:"delay.js",isNew:!1},{id:"current-time",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

let animation;
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  animation = circle.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(200px)' }], {
    duration: 2500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: Infinity,
    direction: 'alternate',
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
  currentTime: 0,
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.add(rendererConfig, 'currentTime', 0, 2500).onChange((currentTime) => {
  animation.currentTime = currentTime;
});
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528 currentTime \u5C5E\u6027",en:"Use currentTime"},filename:"current-time.js",isNew:!1},{id:"sequence",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*hafUTp9MrfYAAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    shadowColor: 'black',
    shadowBlur: 30,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  (async () => {
    const moveRight = circle.animate(
      [
        {
          transform: 'translate(0)',
        },
        {
          transform: 'translate(100px)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fill: 'both',
      },
    );
    await moveRight.finished;

    const moveDown = circle.animate(
      [
        {
          transform: 'translate(100px)',
        },
        {
          transform: 'translate(100px, 100px)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fill: 'both',
      },
    );
    await moveDown.finished;

    const moveLeft = circle.animate(
      [
        {
          transform: 'translate(100px, 100px)',
        },
        {
          transform: 'translate(0, 100px)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fill: 'both',
      },
    );
    await moveLeft.finished;

    const moveUp = circle.animate(
      [
        {
          transform: 'translate(0, 100px)',
        },
        {
          transform: 'translate(0, 0)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fill: 'both',
      },
    );
    await moveUp.finished;
  })();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u8FDE\u7EED\u52A8\u753B",en:"Sequence of animations"},filename:"sequence.js",isNew:!1},{id:"multiple-attributes",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*dZ03S7gEjz8AAAAAAAAAAABkARQnAQ",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * ported from https://animista.net/play/entrances/scale-in
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    shadowColor: 'black',
    shadowBlur: 30,
  },
});

let animation;
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);

  animation = circle.animate(
    [
      {
        transform: 'scale(1)',
        fill: '#1890FF',
        stroke: '#F04864',
        opacity: 1,
        shadowColor: 'black',
        shadowBlur: 30,
        x: 200,
      },
      {
        transform: 'scale(2)',
        fill: 'red',
        stroke: '#1890FF',
        opacity: 0.8,
        shadowColor: 'red',
        shadowBlur: 0,
        x: 400,
      },
    ],
    {
      duration: 1500,
      iterations: Infinity,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    },
  );

  // get triggerred when animation finished
  animation.onfinish = (e) => {
    console.log('finish!', e.target, e.target.playState);
  };
  animation.finished.then(() => {
    console.log('finish promise resolved');
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const animationFolder = gui.addFolder('animation');
const animationConfig = {
  play: () => {
    animation.play();
  },
  pause: () => {
    animation.pause();
  },
  reverse: () => {
    animation.reverse();
  },
  finish: () => {
    animation.finish();
  },
};
animationFolder.add(animationConfig, 'play').name('Play');
animationFolder.add(animationConfig, 'pause').name('Pause');
animationFolder.add(animationConfig, 'reverse').name('Reverse');
animationFolder.add(animationConfig, 'finish').name('Finish');
animationFolder.open();
`,title:{zh:"\u53EF\u5E94\u7528\u52A8\u753B\u7684\u5C5E\u6027",en:"Animatable attributes"},filename:"multiple-attributes.js",isNew:!1},{id:"onframe",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*vatoRoHF64MAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const rect = new Rect({
  style: {
    width: 100,
    height: 40,
    fill: 'red',
  },
});

const circle1 = new Circle({
  style: {
    cy: 20,
    r: 20,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const circle2 = new Circle({
  style: {
    cx: 100,
    cy: 20,
    r: 20,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

rect.setPosition(100, 100);
rect.appendChild(circle1);
rect.appendChild(circle2);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(rect);

  const animation = rect.animate(
    [
      {
        width: 100,
      },
      {
        width: 400,
      },
    ],
    {
      duration: 1500,
      iterations: Infinity,
    },
  );
  animation.onframe = () => {
    // use parsed value here
    circle2.setLocalPosition(rect.parsedStyle.width, 20);
    // circle2.setLocalPosition(Number(\`\${rect.style.width}\`.replace('px', '')), 20);
  };
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"onframe \u56DE\u8C03\u51FD\u6570",en:"Use onframe callback"},filename:"onframe.js",isNew:!1}],icon:"",id:"basic",title:{en:"Basic Options",zh:"\u57FA\u672C\u914D\u7F6E"},childrenKey:"demos",order:10},{demos:[{id:"offset-path",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*nk1YSrbkQPMAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Line, Path, Polyline } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * ported from https://animista.net/play/entrances/scale-in
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const offsetPathLine = new Line({
  style: {
    x1: 100,
    y1: 100,
    x2: 300,
    y2: 100,
  },
});
const offsetPathPolyline = new Polyline({
  style: {
    stroke: 'black',
    points: [
      [50, 50],
      [100, 50],
      [100, 100],
      [150, 100],
      [150, 150],
      [200, 150],
      [200, 200],
      [250, 200],
      [250, 250],
      [300, 250],
      [300, 300],
      [350, 300],
      [350, 350],
      [400, 350],
      [400, 400],
      [450, 400],
    ],
  },
});

const offsetPathPath = new Path({
  style: {
    path:
      'M 100,300' +
      'l 50,-25' +
      'a25,25 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,50 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,75 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,100 -30 0,1 50,-25' +
      'l 50,-25' +
      'l 0, 200,' +
      'z',
  },
});

const circle1 = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    offsetPath: offsetPathLine,
  },
});
const circle2 = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 10,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    offsetPath: offsetPathPolyline,
  },
});
const circle3 = new Circle({
  style: {
    cx: 200,
    cy: 300,
    r: 60,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    offsetPath: offsetPathPath,
  },
});

let animation;
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(offsetPathPolyline);
  canvas.appendChild(circle1);
  canvas.appendChild(circle2);
  canvas.appendChild(circle3);

  circle1.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
    duration: 2500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: Infinity,
    direction: 'alternate',
  });
  animation = circle2.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
    duration: 3500,
    easing: 'linear',
    iterations: Infinity,
    direction: 'alternate',
  });

  circle3.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
    duration: 4500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: Infinity,
    direction: 'alternate',
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
  currentTime: 0,
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.add(rendererConfig, 'currentTime', 0, 3500).onChange((currentTime) => {
  animation.currentTime = currentTime;
});
rendererFolder.open();
`,title:{zh:"\u8DEF\u5F84\u52A8\u753B",en:"Offset path"},filename:"offset-path.js",isNew:!1},{id:"marching-ants",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*TTyTTISXlKAAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 60,
    stroke: '#F04864',
    lineWidth: 4,
    lineDash: [10, 10],
  },
});

const rect = new Rect({
  style: {
    x: 300,
    y: 100,
    width: 200,
    height: 200,
    stroke: '#F04864',
    lineWidth: 4,
    radius: 8,
    lineDash: [10, 10],
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);
  circle.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
    duration: 500,
    iterations: Infinity,
  });

  canvas.appendChild(rect);
  rect.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
    duration: 500,
    iterations: Infinity,
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u8682\u8681\u7EBF",en:"Marching ants"},filename:"marching-ants.js",isNew:!1},{id:"line-dash",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8NOsQoWLm2IAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Path } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const path = new Path({
  style: {
    stroke: 'black',
    path:
      'M 100,300' +
      'l 50,-25' +
      'a25,25 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,50 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,75 -30 0,1 50,-25' +
      'l 50,-25' +
      'a25,100 -30 0,1 50,-25' +
      'l 50,-25' +
      'l 0, 200,' +
      'z',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(path);

  const length = path.getTotalLength();
  path.animate([{ lineDash: [0, length] }, { lineDash: [length, 0] }], {
    duration: 3500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: Infinity,
    direction: 'alternate',
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u7B14\u8FF9\u52A8\u753B",en:"Line dash"},filename:"line-dash.js",isNew:!1},{id:"ripple-effect",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*DuMkRr0AaecAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Group, Image, Path, Rect } from '@antv/g';
import { Renderer } from '@antv/g-canvas';

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: new Renderer(),
  background: 'rgb(16, 22, 29)',
});

const gradient =
  'linear-gradient(-90deg, rgba(178, 230, 181, 0), rgba(178, 230, 181, 0.6) 14%, rgba(166, 221, 179, 0.82) 23%, rgba(101, 171, 170, 0.9) 67%, rgb(23, 80, 157))';
// 'l(270) 0:rgba(178, 230, 181, 0) 0.14:rgba(178, 230, 181, 0.6) 0.23:rgba(166, 221, 179, 0.82) 0.67:rgba(101, 171, 170, 0.9) 1:rgb(23, 80, 157)';

const rippleData = [
  {
    top: 'M46.33 48.5C46.33 48.5 46.33 48.5 46.33 48.5C46.41 47.25 51.01 46.24 56.67 46.24C62.33 46.24 66.93 47.24 67.02 48.5L67.02 48.5C67.02 47.24 62.39 46.21 56.67 46.21C50.95 46.21 46.33 47.24 46.33 48.5Z',
    bottom:
      'M56.68 51C51 51 46.42 50 46.34 48.74C46.34 48.74 46.34 48.74 46.34 48.74C46.34 50.01 50.98 51.03 56.69 51.03C62.4 51.03 67 50 67 48.77L67 48.77C66.94 50 62.35 51 56.68 51Z',
    stroke: '#b0dacc',
    strokeOpacity: 1,
    scale: 3,
    durationMultiplier: 2,
  },
  {
    top: 'M32 48.31C32 48.31 32 48.37 32 48.39C32.21 45.39 43.19 43.01 56.72 43.01C70.25 43.01 81.24 45.41 81.44 48.39C81.44 48.39 81.44 48.39 81.44 48.31C81.44 45.31 70.37 42.84 56.71 42.84C43.05 42.84 32 45.29 32 48.31Z',
    bottom:
      'M56.68 54.26C43.15 54.26 32.17 51.86 31.96 48.88C31.96 48.88 31.96 48.94 31.96 48.97C31.96 51.97 43.04 54.43 56.69 54.43C70.34 54.43 81.41 52 81.41 49C81.41 49 81.41 48.94 81.41 48.91C81.2 51.86 70.21 54.26 56.68 54.26Z',
    stroke: '#b0dacc',
    strokeOpacity: 1,
    scale: 1.8,
  },
  {
    top: 'M23.62 48.2C23.62 48.2 23.62 48.27 23.62 48.31C23.89 44.31 38.62 41.11 56.67 41.11C74.72 41.11 89.45 44.33 89.72 48.31A0.43 0.43 0 0 0 89.72 48.2C89.72 44.2 74.91 40.89 56.65 40.89C38.39 40.89 23.62 44.16 23.62 48.2Z',
    bottom:
      'M56.68 56.16C38.59 56.16 23.9 52.95 23.68 48.96C23.68 48.96 23.68 49.04 23.68 49.08C23.68 53.08 38.48 56.39 56.74 56.39C75 56.39 89.81 53.11 89.81 49.08A0.5 0.5 0 0 0 89.81 48.96C89.46 53 74.77 56.16 56.68 56.16Z',
    stroke: '#b0dacc',
    strokeOpacity: 0.8,
    scale: 1.5,
  },
  {
    top: 'M19 48.14A0.69 0.69 0 0 0 19 48.27C19.3 43.73 36 40.07 56.62 40.07C77.24 40.07 94 43.73 94.31 48.27C94.31 48.22 94.31 48.18 94.31 48.14C94.31 43.54 77.45 39.82 56.66 39.82C35.87 39.82 19 43.54 19 48.14Z',
    bottom:
      'M56.68,57.2c-20.59,0-37.32-3.65-37.62-8.19a.51.51,0,0,0,0,.13c0,4.59,16.85,8.32,37.64,8.32s37.65-3.73,37.65-8.32c0,0,0-.09,0-.13C94,53.55,77.28,57.2,56.68,57.2Z',
    stroke: '#b0dacc',
    strokeOpacity: 0.57,
    scale: 1.2,
  },
  {
    top: 'M14.24 48.07C14.24 48.07 14.24 48.17 14.24 48.22C14.6 43.1 33.46 39 56.68 39C79.9 39 98.76 43.12 99.11 48.24A0.77 0.77 0 0 0 99.11 48.09C99.11 42.91 80.11 38.71 56.66 38.71C33.21 38.71 14.24 42.89 14.24 48.07Z',
    bottom:
      'M56.68 58.3C33.46 58.3 14.6 54.17 14.25 49.06C14.25 49.06 14.25 49.15 14.25 49.2C14.25 54.38 33.25 58.58 56.69 58.58C80.13 58.58 99.14 54.38 99.14 49.2A0.59 0.59 0 0 0 99.14 49.06C98.76 54.17 79.91 58.3 56.68 58.3Z',
    stroke: '#b0dacc',
    strokeOpacity: 0.5,
    scale: 1.3,
  },
  {
    top: 'M7.12 48.24A1.11 1.11 0 0 0 7.12 48.41C7.52 42.41 29.54 37.62 56.66 37.62C83.78 37.62 105.8 42.43 106.21 48.41C106.21 48.35 106.21 48.29 106.21 48.24C106.21 42.19 84.02 37.24 56.64 37.24C29.26 37.24 7.12 42.19 7.12 48.24Z',
    bottom:
      'M56.68 60.17C29.56 60.17 7.54 55.36 7.14 49.38A1.11 1.11 0 0 0 7.14 49.55C7.14 55.6 29.33 60.55 56.7 60.55C84.07 60.55 106.27 55.64 106.27 49.55C106.27 49.55 106.27 49.44 106.27 49.38C105.82 55.36 83.8 60.17 56.68 60.17Z',
    stroke: '#b0dacc',
    strokeOpacity: 0.23,
    scale: 1.2,
  },
];

const group = new Group();
const mountain1 = new Path({
  // @see https://g-next.antv.vision/zh/docs/api/basic/display-object#classname
  className: 'mountain',
  style: {
    d: 'M33.6,51S44.36,31.65,48.15,18,64.38,7.42,66.62,18s10.6,33.6,13.15,33.1Z',
    fill: gradient,
    stroke: '#efcb84',
    strokeWidth: 0.5,
    miterLimit: 10,
    shadowColor: 'rgba(124,94,44,0.5)',
    shadowBlur: 50,
    // @see https://g-next.antv.vision/zh/docs/api/basic/display-object#%E8%A3%81%E5%89%AA
    clipPath: new Rect({
      style: {
        y: -10,
        x: -10,
        width: 60,
        height: 51,
      },
    }),
  },
});

const mountain2 = mountain1.cloneNode();
mountain2.translateLocal(20, 10);
mountain2.scale(0.8);

group.appendChild(mountain2);
group.appendChild(mountain1);

// @see https://g-next.antv.vision/zh/docs/api/basic/display-object#%E9%AB%98%E7%BA%A7%E6%9F%A5%E8%AF%A2
const mountains = group.querySelectorAll('.mountain');
mountains.forEach((mountain) => {
  mountain.addEventListener('click', () => {
    mountains.forEach((m) => {
      m.style.strokeWidth = 0.5;
    });
    mountain.style.strokeWidth = 2;
  });
});

const rippleGroups = rippleData.map(({ top, bottom, stroke, strokeOpacity }) => {
  const rippleGroup = new Group({
    style: {
      strokeOpacity,
      // @see https://g-next.antv.vision/zh/docs/api/basic/display-object#pointerevents
      pointerEvents: 'none',
    },
  });
  const topRipple = new Path({
    style: {
      d: top,
      stroke,
      strokeWidth: 0.5,
      miterLimit: 10,
    },
  });
  const bottomRipple = new Path({
    style: {
      d: bottom,
      stroke,
      strokeWidth: 0.5,
      miterLimit: 10,
    },
  });
  rippleGroup.appendChild(topRipple);
  rippleGroup.appendChild(bottomRipple);
  group.appendChild(rippleGroup);

  return rippleGroup;
});

const boat = new Image({
  style: {
    width: 100,
    height: 100,
    opacity: 0,
    anchor: '0.5 0.5',
    src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*qdRtSanFh_4AAAAAAAAAAAAAARQnAQ',
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(group);
  canvas.appendChild(boat);

  rippleGroups.forEach((rippleGroup, i) => {
    const { center } = rippleGroup.getBounds();
    rippleGroup.style.transformOrigin = \`\${center[0]}px \${center[1]}px\`;
    rippleGroup.animate(
      [
        {
          transform: 'scale(0.001)',
          strokeOpacity: rippleData[i].strokeOpacity,
        },
        {
          transform: \`scale(\${rippleData[i].scale})\`,
          strokeOpacity: 0,
        },
      ],
      {
        duration: 1500 * (rippleData[i].durationMultiplier || 1),
        iterations: Infinity,
        delay: i * 150,
      },
    );
  });

  group.scale(4);
});

// canvas.addEventListener("click", function (e) {
//   // @see https://g-next.antv.vision/zh/docs/api/event#canvasxy
//   boat.style.x = e.canvasX;
//   boat.style.y = e.canvasY;
//   boat.animate([{ opacity: 0 }, { opacity: 1 }], {
//     duration: 500,
//     // @see https://g-next.antv.vision/zh/docs/api/animation#fill
//     fill: "both"
//   });
// });
`,title:{zh:"\u6D9F\u6F2A\u6548\u679C",en:"Ripple Effect"},filename:"ripple-effect.js",isNew:!1},{id:"animations",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*WRp0SbVfgjUAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

/**
 * ported from https://github.com/wellyshen/use-web-animations/tree/master/src/animations
 */
const transformOrigin = 'center bottom';
const effects = [
  () => ({
    name: 'backInDown',
    keyframes: [
      { transform: 'translateY(-1200px) scale(0.7)', opacity: 0.7, offset: 0 },
      { transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },
      { transform: 'translateY(0px)', opacity: 1, offset: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'fadeIn',
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'fadeInBottomLeft',
    keyframes: [
      { transform: 'translate3d(-100%, 100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'fadeInBottomRight',
    keyframes: [
      { transform: 'translate3d(100%, 100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'fadeOutTopRight',
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(100%, -100%, 0)', opacity: 0 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => {
    const easing1 = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    const easing2 = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    const frame1 = {
      transform: 'translate3d(0, 0, 0) scaleY(1)',
      easing: easing1,
      transformOrigin,
    };
    const frame2 = {
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      easing: easing2,
      transformOrigin,
    };
    return {
      name: 'bounce',
      keyframes: [
        { ...frame1, offset: 0 },
        { ...frame1, offset: 0.2 },
        { ...frame2, offset: 0.4 },
        { ...frame2, offset: 0.43 },
        { ...frame1, offset: 0.53 },
        {
          transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
          easing: easing2,
          transformOrigin,
          offset: 0.7,
        },
        {
          transform: 'translate3d(0, 0, 0) scaleY(0.95)',
          easing: easing1,
          transformOrigin,
          offset: 0.8,
        },
        {
          transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
          transformOrigin,
          offset: 0.9,
        },
        { ...frame1, offset: 1 },
      ],
      animationOptions: { duration: 1000, fill: 'both' },
    };
  },
  () => {
    const easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    return {
      name: 'bounceIn',
      keyframes: [
        { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, easing, offset: 0 },
        { transform: 'scale3d(1.1, 1.1, 1.1)', easing, offset: 0.2 },
        { transform: 'scale3d(0.9, 0.9, 0.9)', easing, offset: 0.4 },
        { transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1, easing, offset: 0.6 },
        { transform: 'scale3d(0.97, 0.97, 0.97)', easing, offset: 0.8 },
        { transform: 'scale3d(1, 1, 1)', opacity: 1, easing, offset: 1 },
      ],
      animationOptions: { duration: 750, fill: 'both' },
    };
  },
  () => {
    const frame = { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1 };
    return {
      name: 'bounceOut',
      keyframes: [
        { transform: 'none', opacity: 1, offset: 0 },
        { transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 },
        { ...frame, offset: 0.5 },
        { ...frame, offset: 0.55 },
        { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 1 },
      ],
      animationOptions: { duration: 750, fill: 'both' },
    };
  },
  () => {
    const frame1 = { opacity: 1 };
    const frame2 = { opacity: 0 };
    return {
      name: 'flash',
      keyframes: [
        { ...frame1, offset: 0 },
        { ...frame2, offset: 0.25 },
        { ...frame1, offset: 0.5 },
        { ...frame2, offset: 0.75 },
        { ...frame1, offset: 1 },
      ],
      animationOptions: { duration: 1000, fill: 'both' },
    };
  },
  () => ({
    name: 'headShake',
    keyframes: [
      { transform: 'translateX(0)', offset: 0 },
      { transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 },
      { transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 },
      { transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 },
      { transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 },
      { transform: 'translateX(0)', offset: 0.5 },
      { transform: 'none', offset: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both', easing: 'ease-in-out' },
  }),
  () => {
    const frame1 = { transform: 'scale(1)' };
    const frame2 = { transform: 'scale(1.3)' };
    return {
      name: 'heartBeat',
      keyframes: [
        { ...frame1, offset: 0 },
        { ...frame2, offset: 0.14 },
        { ...frame1, offset: 0.28 },
        { ...frame2, offset: 0.42 },
        { ...frame1, offset: 0.7 },
        { transform: 'none', offset: 1 },
      ],
      animationOptions: { duration: 1300, fill: 'both', easing: 'ease-in-out' },
    };
  },
  () => ({
    name: 'swing',
    keyframes: [
      { transform: 'rotateZ(0deg)', transformOrigin, offset: 0 },
      { transform: 'rotateZ(15deg)', transformOrigin, offset: 0.2 },
      { transform: 'rotateZ(-10deg)', transformOrigin, offset: 0.4 },
      { transform: 'rotateZ(5deg)', transformOrigin, offset: 0.6 },
      { transform: 'rotateZ(-5deg)', transformOrigin, offset: 0.8 },
      { transform: 'rotateZ(0deg)', transformOrigin, offset: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'skewX',
    keyframes: [
      { transform: 'skewX(0deg)', transformOrigin, offset: 0 },
      { transform: 'skewX(30deg)', transformOrigin, offset: 0.25 },
      { transform: 'skewX(-30deg)', transformOrigin, offset: 0.75 },
      { transform: 'skewX(0deg)', transformOrigin, offset: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'skewY',
    keyframes: [
      { transform: 'skewY(0deg)', transformOrigin, offset: 0 },
      { transform: 'skewY(30deg)', transformOrigin, offset: 0.25 },
      { transform: 'skewY(-30deg)', transformOrigin, offset: 0.75 },
      { transform: 'skewY(0deg)', transformOrigin, offset: 1 },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'flipX',
    keyframes: [
      { transform: 'scaleX(1)', transformOrigin },
      { transform: 'scaleX(-1)', transformOrigin },
      { transform: 'scaleX(1)', transformOrigin },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'flipY',
    keyframes: [
      { transform: 'scaleY(1)', transformOrigin: 'center' },
      { transform: 'scaleY(-1)', transformOrigin: 'center' },
      { transform: 'scaleY(1)', transformOrigin: 'center' },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
  () => ({
    name: 'matrix interpolation',
    keyframes: [
      { transform: 'skewY(30deg)', transformOrigin: 'center' },
      { transform: 'matrix(0.2,0,0,0.2,-50,0)', transformOrigin: 'center' },
    ],
    animationOptions: { duration: 1000, fill: 'both' },
  }),
];

canvas.addEventListener(CanvasEvent.READY, () => {
  effects.forEach((f, i) => {
    const { name, keyframes, animationOptions } = f();
    const row = Math.floor(i / 4);
    const group = new Group();
    const circle = new Circle({
      style: {
        r: 50,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
      },
    });
    const text = new Text({
      style: {
        text: name,
        fontSize: 10,
        fill: '#000',
        textAlign: 'center',
        textBaseline: 'middle',
      },
    });
    circle.appendChild(text);
    group.appendChild(circle);
    canvas.appendChild(group);

    group.setPosition(50 + 150 * (i % 4), 50 + 120 * row);

    circle.animate(keyframes, {
      ...animationOptions,
      iterations: Infinity,
    });
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5E38\u89C1\u7684\u52A8\u753B\u6548\u679C",en:"Useful animations"},filename:"animations.js",isNew:!1}],icon:"",id:"effects",title:{en:"Common Animation Effects",zh:"\u5E38\u89C1\u52A8\u753B\u6548\u679C"},childrenKey:"demos",order:10},{demos:[{id:"morph",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*qCHaTJUg_aEAAAAAAAAAAAAAARQnAQ",source:`import {
  Canvas,
  CanvasEvent,
  Circle,
  convertToPath,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const path1 = new Path({
    style: {
      d: 'M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10',
    },
  });
  const path2 = new Path({
    style: {
      d: [
        ['M', 0, 0],
        ['L', 200, 0],
      ],
    },
  });

  path1.translate(100, 100);
  path2.translate(100, 100);

  /**
   * Path -> Path
   */
  const path1Str = convertToPath(path1);
  const path2Str = convertToPath(path2);
  const pathA = new Path({
    style: {
      path: path1Str,
      stroke: '#F04864',
    },
  });
  canvas.appendChild(pathA);
  pathA.animate([{ d: path1Str }, { d: path2Str }], {
    duration: 2500,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate',
  });

  /**
   * Path -> Line
   */
  const line = new Line({
    style: {
      x1: 100,
      y1: 0,
      x2: 100,
      y2: 100,
      transform: 'translate(0, 100px)',
    },
  });
  const linePathStr = convertToPath(line);
  const pathB = new Path({
    style: {
      path: path1Str,
      stroke: '#F04864',
    },
  });
  canvas.appendChild(pathB);
  pathB.animate([{ path: path1Str }, { path: linePathStr }], {
    duration: 2500,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate',
  });

  /**
   * Path -> Circle
   */
  const circle = new Circle({
    style: {
      cx: 100,
      cy: 100,
      r: 50,
    },
  });
  circle.scale(2);
  const circlePathStr = convertToPath(circle);
  const pathC = new Path({
    style: {
      path: path1Str,
      stroke: '#F04864',
    },
  });
  canvas.appendChild(pathC);
  pathC.animate([{ d: path1Str }, { d: circlePathStr }], {
    duration: 2500,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate',
  });

  /**
   * Circle -> Polyline
   */
  const polylinePathStr = convertToPath(
    new Polyline({
      style: {
        points: [
          [50, 50],
          [100, 50],
          [100, 100],
          [150, 100],
          [150, 150],
          [200, 150],
        ],
        transform: 'translate(0, 200)',
      },
    }),
  );
  const pathD = new Path({
    style: {
      path: circlePathStr,
      stroke: '#F04864',
    },
  });
  canvas.appendChild(pathD);
  pathD.animate([{ path: circlePathStr }, { path: polylinePathStr }], {
    duration: 2500,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate',
  });

  /**
   * Path -> Polygon
   */
  const polygonPathStr = convertToPath(
    new Polygon({
      style: {
        points: [
          [0, 0],
          [50, 50],
          [50, 100],
        ],
        transform: 'translate(0, 300px)',
      },
    }),
  );
  const pathE = new Path({
    style: {
      path: path1Str,
      stroke: '#F04864',
    },
  });
  canvas.appendChild(pathE);
  pathE.animate([{ path: path1Str }, { path: polygonPathStr }], {
    duration: 2500,
    easing: 'ease',
    iterations: Infinity,
    direction: 'alternate',
  });

  /**
   * Rect -> Circle
   */
  const rectPathStr = convertToPath(
    new Rect({
      style: {
        x: 300,
        y: 200,
        width: 200,
        height: 100,
        transformOrigin: 'center',
      },
    }),
  );
  const pathF = new Path({
    style: {
      path: rectPathStr,
      stroke: '#F04864',
      fill: '',
      opacity: 0.5,
      lineWidth: 10,
    },
  });
  canvas.appendChild(pathF);
  pathF.animate(
    [
      { path: rectPathStr, stroke: '#F04864', fill: 'blue' },
      { path: circlePathStr, stroke: 'blue', fill: '#F04864' },
    ],
    {
      duration: 2500,
      easing: 'ease',
      iterations: Infinity,
      direction: 'alternate',
    },
  );

  /**
   * Rect -> Path
   */
  const starPath = new Path({
    style: {
      path: 'M301.113,12.011l99.25,179.996l201.864,38.778L461.706,380.808l25.508,203.958l-186.101-87.287L115.01,584.766l25.507-203.958L0,230.785l201.86-38.778L301.113,12.011',
    },
  });
  starPath.scale(0.2);
  starPath.translate(200, 200);
  const pathG = new Path({
    style: {
      path: rectPathStr,
      lineWidth: 2,
    },
  });
  canvas.appendChild(pathG);
  pathG.animate(
    [
      { path: rectPathStr, stroke: '#F04864', fill: 'blue' },
      { path: convertToPath(starPath), stroke: 'blue', fill: '#F04864' },
    ],
    {
      duration: 2500,
      easing: 'ease',
      iterations: Infinity,
      direction: 'alternate',
    },
  );
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5F62\u53D8\u52A8\u753B",en:"Morph"},filename:"morph.js",isNew:!1},{id:"convert-to-path",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*O4qsQ4QFkuMAAAAAAAAAAAAADmJ7AQ",source:`import {
  Canvas,
  CanvasEvent,
  Circle,
  convertToPath,
  Ellipse,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

/**
 * show converted path in blue
 */
const showConvertedPath = (object) => {
  const pathStr = convertToPath(object);
  const objectPath = new Path({
    style: {
      d: pathStr,
      fill: 'none',
      stroke: 'blue',
      lineWidth: 10,
    },
  });
  canvas.appendChild(objectPath);
};

canvas.addEventListener(CanvasEvent.READY, () => {
  /**
   * Circle -> Path
   */
  const circle = new Circle({
    style: {
      cx: 0,
      cy: 0,
      r: 100,
      transform: 'translate(100, 100)',
      fill: 'red',
      opacity: 0.5,
    },
  });
  canvas.appendChild(circle);
  circle.scale(0.5);
  showConvertedPath(circle);

  /**
   * Ellipse -> Path
   */
  const ellipse = new Ellipse({
    style: {
      cx: 0,
      cy: 0,
      rx: 100,
      ry: 60,
      fill: 'red',
      opacity: 0.5,
    },
  });
  ellipse.setPosition(300, 100);
  ellipse.setLocalScale(0.6);
  canvas.appendChild(ellipse);
  showConvertedPath(ellipse);

  /**
   * Rect -> Path
   */
  const rect = new Rect({
    style: {
      x: 200,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
      opacity: 0.5,
    },
  });
  canvas.appendChild(rect);
  rect.rotateLocal(30);
  showConvertedPath(rect);

  /**
   * Line -> Path
   */
  const line = new Line({
    style: {
      x1: 100,
      y1: 200,
      x2: 100,
      y2: 300,
      lineWidth: 30,
      stroke: 'red',
      opacity: 0.5,
    },
  });
  canvas.appendChild(line);
  showConvertedPath(line);

  /**
   * Polyline -> Path
   */
  const polyline = new Polyline({
    style: {
      points: '100,360 100,400, 50,400',
      lineWidth: 30,
      stroke: 'red',
      opacity: 0.5,
      transformOrigin: 'center',
    },
  });
  canvas.appendChild(polyline);
  polyline.rotateLocal(90);
  showConvertedPath(polyline);

  /**
   * Polyline -> Path
   */
  const polygon = new Polygon({
    style: {
      points: '200,360 200,400, 250,400',
      fill: 'red',
      transform: 'scale(2)',
      opacity: 0.5,
    },
  });
  canvas.appendChild(polygon);
  showConvertedPath(polygon);

  /**
   * Path -> Path
   */
  const path = new Path({
    style: {
      d: 'M301.113,12.011l99.25,179.996l201.864,38.778L461.706,380.808l25.508,203.958l-186.101-87.287L115.01,584.766l25.507-203.958L0,230.785l201.86-38.778L301.113,12.011Z',
      fill: 'red',
      opacity: 0.5,
    },
  });
  path.translate(300, 250);
  path.scale(0.2);
  canvas.appendChild(path);
  showConvertedPath(path);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u8F6C\u6362\u57FA\u7840\u56FE\u5F62\u5230\u8DEF\u5F84\u5B9A\u4E49",en:"Convert DisplayObject to CubicBezier Path string"},filename:"convert-to-path.js",isNew:!1}],icon:"",id:"morph",title:{en:"Morphing Animation",zh:"\u5F62\u53D8\u52A8\u753B"},childrenKey:"demos",order:10}],childrenKey:"examples"},{id:"scenegraph",title:{zh:"\u573A\u666F\u56FE",en:"Scene Graph"},examples:[{demos:[{id:"hierarchy",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*ZcrHSoLxRS8AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
solarSystem
   |    |
   |   sun
   |
 earthOrbit
   |    |
   |  earth
   |
  moonOrbit
      |
     moon
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const solarSystem = new Group({
    id: 'solarSystem',
  });
  const earthOrbit = new Group({
    id: 'earthOrbit',
  });
  const moonOrbit = new Group({
    id: 'moonOrbit',
  });

  const sun = new Circle({
    id: 'sun',
    style: {
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const earth = new Circle({
    id: 'earth',
    style: {
      r: 50,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const moon = new Circle({
    id: 'moon',
    style: {
      r: 25,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  solarSystem.appendChild(sun);
  solarSystem.appendChild(earthOrbit);
  earthOrbit.appendChild(earth);
  earthOrbit.appendChild(moonOrbit);
  moonOrbit.appendChild(moon);

  solarSystem.setPosition(300, 250);
  earthOrbit.translate(100, 0);
  moonOrbit.translate(100, 0);

  canvas.appendChild(solarSystem);

  // use AntV G devtools
  window.__g_instances__ = [canvas];

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }

    solarSystem.rotateLocal(1);
    earthOrbit.rotateLocal(2);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'webgpu') {
        renderer = webgpuRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();

  const sunFolder = gui.addFolder('sun');
  const sunConfig = {
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    fillOpacity: 1,
    strokeOpacity: 1,
    visibility: true,
    'z-index': 0,
  };
  sunFolder.add(sunConfig, 'r', 50, 200).onChange((radius) => {
    sun.attr('r', radius);
  });
  sunFolder.addColor(sunConfig, 'fill').onChange((color) => {
    sun.attr('fill', color);
  });
  sunFolder.addColor(sunConfig, 'stroke').onChange((color) => {
    sun.attr('stroke', color);
  });
  sunFolder.add(sunConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
    sun.attr('lineWidth', lineWidth);
  });
  sunFolder.add(sunConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
    sun.attr('fillOpacity', opacity);
  });
  sunFolder.add(sunConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
    sun.attr('strokeOpacity', opacity);
  });
  sunFolder.add(sunConfig, 'visibility').onChange((visible) => {
    if (visible) {
      sun.show();
    } else {
      sun.hide();
    }
  });
  sunFolder.add(sunConfig, 'z-index', 0, 100).onChange((zIndex) => {
    sun.setZIndex(zIndex);
  });
  sunFolder.open();

  const earthFolder = gui.addFolder('earth');
  const earthConfig = {
    r: 50,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    fillOpacity: 1,
    strokeOpacity: 1,
    visibility: true,
  };
  earthFolder.add(earthConfig, 'r', 50, 200).onChange((radius) => {
    earth.attr('r', radius);
  });
  earthFolder.addColor(earthConfig, 'fill').onChange((color) => {
    earth.attr('fill', color);
  });
  earthFolder.addColor(earthConfig, 'stroke').onChange((color) => {
    earth.attr('stroke', color);
  });
  earthFolder.add(earthConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
    earth.attr('lineWidth', lineWidth);
  });
  earthFolder.add(earthConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
    earth.attr('fillOpacity', opacity);
  });
  earthFolder.add(earthConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
    earth.attr('strokeOpacity', opacity);
  });
  earthFolder.add(earthConfig, 'visibility').onChange((visible) => {
    if (visible) {
      earth.show();
    } else {
      earth.hide();
    }
  });

  const moonFolder = gui.addFolder('moon');
  const moonConfig = {
    r: 25,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    fillOpacity: 1,
    strokeOpacity: 1,
    visibility: true,
  };
  moonFolder.add(moonConfig, 'r', 50, 200).onChange((radius) => {
    moon.attr('r', radius);
  });
  moonFolder.addColor(moonConfig, 'fill').onChange((color) => {
    moon.attr('fill', color);
  });
  moonFolder.addColor(moonConfig, 'stroke').onChange((color) => {
    moon.attr('stroke', color);
  });
  moonFolder.add(moonConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
    moon.attr('lineWidth', lineWidth);
  });
  moonFolder.add(moonConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
    moon.attr('fillOpacity', opacity);
  });
  moonFolder.add(moonConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
    moon.attr('strokeOpacity', opacity);
  });
  moonFolder.add(moonConfig, 'visibility').onChange((visible) => {
    if (visible) {
      moon.show();
    } else {
      moon.hide();
    }
  });

  const earthOrbitFolder = gui.addFolder('earthOrbit');
  const earthOrbitConfig = {
    visibility: true,
    'z-index': 0,
  };
  earthOrbitFolder.add(earthOrbitConfig, 'visibility').onChange((visible) => {
    if (visible) {
      earthOrbit.show();
    } else {
      earthOrbit.hide();
    }
  });
  earthOrbitFolder.add(earthOrbitConfig, 'z-index', 0, 100).onChange((zIndex) => {
    earthOrbit.setZIndex(zIndex);
  });

  const moonOrbitFolder = gui.addFolder('moonOrbit');
  const moonOrbitConfig = {
    visibility: true,
    'z-index': 0,
  };
  moonOrbitFolder.add(moonOrbitConfig, 'visibility').onChange((visible) => {
    if (visible) {
      moonOrbit.show();
    } else {
      moonOrbit.hide();
    }
  });
  moonOrbitFolder.add(moonOrbitConfig, 'z-index', 0, 100).onChange((zIndex) => {
    moonOrbit.setZIndex(zIndex);
  });

  // zIndexFolder.add(zIndexConfig, 'bringToFront').onChange((toFront) => {
  //   if (toFront) {
  //     sun.toFront();
  //   } else {
  //     sun.toBack();
  //   }
  // });
});
`,title:{zh:"\u5C42\u6B21\u7ED3\u6784",en:"Hierarchy"},filename:"hierarchy.js",isNew:!1},{id:"boxmodel",source:`import { Canvas, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * CSS Box Model
 * @see https://developer.mozilla.org/zh-CN/docs/learn/css/building_blocks/the_box_model
 *
 * scenegraph:
 * blue rect
 *  -> red rect
 *   -> green rect
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const parent = new Rect({
  style: {
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    fill: '#1890FF',
  },
});
canvas.appendChild(parent);

const red = new Rect({
  style: {
    x: '50%',
    y: '50%',
    width: 100,
    height: 100,
    fill: 'red',
  },
});
parent.appendChild(red);

const green = new Rect({
  style: {
    x: '-100%',
    y: 0,
    width: '100%',
    height: '100%',
    fill: 'green',
  },
});
red.appendChild(green);

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const parentFolder = gui.addFolder('blue rect');
const parentConfig = {
  x: 100,
  y: 100,
  width: 400,
  height: 400,
};
parentFolder
  .add(parentConfig, 'x', 0, 300)
  .onChange((x) => {
    parent.style.x = \`\${x}px\`;
  })
  .name('x(in px)');
parentFolder
  .add(parentConfig, 'y', 0, 300)
  .onChange((y) => {
    parent.style.y = \`\${y}px\`;
  })
  .name('y(in px)');
parentFolder
  .add(parentConfig, 'width', 0, 600)
  .onChange((width) => {
    parent.style.width = width;
  })
  .name('width(in px)');
parentFolder
  .add(parentConfig, 'height', 0, 600)
  .onChange((height) => {
    parent.style.height = height;
  })
  .name('height(in px)');
parentFolder.open();

const redFolder = gui.addFolder('red rect');
const redConfig = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
};
redFolder
  .add(redConfig, 'x', 0, 100)
  .onChange((x) => {
    red.style.x = \`\${x}%\`;
  })
  .name('x(in %)');
redFolder
  .add(redConfig, 'y', 0, 100)
  .onChange((y) => {
    red.style.y = \`\${y}%\`;
  })
  .name('y(in %)');
redFolder
  .add(redConfig, 'width', 0, 400)
  .onChange((width) => {
    red.style.width = width;
  })
  .name('width(in px)');
redFolder
  .add(redConfig, 'height', 0, 400)
  .onChange((height) => {
    red.style.height = height;
  })
  .name('height(in px)');
redFolder.open();

const greenFolder = gui.addFolder('green rect');
const greenConfig = {
  x: -100,
  y: 50,
  width: 100,
  height: 100,
};
greenFolder
  .add(greenConfig, 'x', -100, 100)
  .onChange((x) => {
    green.style.x = \`\${x}%\`;
  })
  .name('x(in %)');
greenFolder
  .add(greenConfig, 'y', -100, 100)
  .onChange((y) => {
    green.style.y = \`\${y}px\`;
  })
  .name('y(in px)');
greenFolder
  .add(greenConfig, 'width', 0, 100)
  .onChange((width) => {
    green.style.width = \`\${width}%\`;
  })
  .name('width(in %)');
greenFolder
  .add(greenConfig, 'height', 0, 100)
  .onChange((height) => {
    green.style.height = \`\${height}%\`;
  })
  .name('height(in %)');
greenFolder.open();
`,title:{zh:"\u76D2\u6A21\u578B",en:"CSS Box Model"},filename:"boxmodel.js",isNew:!1},{id:"transform",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*ZcrHSoLxRS8AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Ellipse } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ellipse = new Ellipse({
    style: {
      cx: 300,
      cy: 200,
      rx: 100,
      ry: 150,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  canvas.appendChild(ellipse);

  // original position
  const origin = new Circle({
    style: {
      r: 20,
      fill: 'red',
    },
  });
  canvas.appendChild(origin);
  origin.setLocalPosition(300, 200);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const ellipseFolder = gui.addFolder('Transform');
  const ellipseConfig = {
    translateX: 0,
    translateY: 0,
    transformOriginX: 100,
    transformOriginY: 150,
    scale: 1,
    rotate: () => {
      ellipse.rotateLocal(10);
    },
  };
  ellipseFolder.add(ellipseConfig, 'translateX', -200, 200).onChange((tx) => {
    // same as:
    // ellipse.attr('x');
    // ellipse.attr('y');
    const [x, y] = ellipse.getPosition();
    // same as:
    // * ellipse.move(300 + tx, y);
    // * ellipse.moveTo(300 + tx, y);
    ellipse.setPosition(300 + tx, y);

    const [ox, oy] = ellipse.getOrigin();
    const [lx, ly] = ellipse.getPosition();
    origin.setPosition(lx + ox, ly + oy);
  });
  ellipseFolder.add(ellipseConfig, 'translateY', -200, 200).onChange((ty) => {
    const [x, y] = ellipse.getPosition();
    // same as:
    // * ellipse.move(x, 200 + ty);
    // * ellipse.moveTo(x, 200 + ty);
    ellipse.setPosition(x, 200 + ty);

    const [ox, oy] = ellipse.getOrigin();
    const [lx, ly] = ellipse.getPosition();
    origin.setPosition(lx + ox, ly + oy);
  });
  ellipseFolder.add(ellipseConfig, 'transformOriginX', -200, 200).onChange((tx) => {
    ellipse.style.transformOrigin = \`\${tx}px \${ellipseConfig.transformOriginY}px\`;

    const [ox, oy] = ellipse.getOrigin();
    const [lx, ly] = ellipse.getPosition();
    origin.setPosition(lx + ox, ly + oy);
  });
  ellipseFolder.add(ellipseConfig, 'transformOriginY', -200, 200).onChange((ty) => {
    ellipse.style.transformOrigin = \`\${ellipseConfig.transformOriginX}px \${ty}px\`;

    const [ox, oy] = ellipse.getOrigin();
    const [lx, ly] = ellipse.getPosition();
    origin.setPosition(lx + ox, ly + oy);
  });
  ellipseFolder.add(ellipseConfig, 'rotate').name('rotate');
  ellipseFolder.add(ellipseConfig, 'scale', 0.2, 5).onChange((scaling) => {
    ellipse.setLocalScale(scaling);
  });

  ellipseFolder.open();
});
`,title:{zh:"\u53D8\u6362",en:"Transform"},filename:"transform.js",isNew:!1},{id:"origin",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*E7OfQ5-uVgYAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group, Polyline, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  /**
   * Circle
   */

  const circle = new Circle({
    style: {
      cx: 100,
      cy: 100,
      r: 100,
      fill: '#1890FF',
    },
  });
  canvas.appendChild(circle);
  circle.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.5)' }], {
    duration: 500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: Infinity,
    direction: 'alternate',
  });

  const circleOrigin = new Circle({
    id: 'circleOrigin',
    style: {
      r: 10,
      fill: '#F04864',
    },
  });
  circleOrigin.setPosition(100, 100);
  canvas.appendChild(circleOrigin);

  /**
   * Group
   */

  const group = new Group({ id: 'group' });
  const child1 = new Rect({
    id: 'rect1',
    style: {
      width: 100,
      height: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
      radius: 8,
    },
  });
  group.appendChild(child1);
  group.setPosition(200, 100);

  // original position
  const original = child1.cloneNode();
  original.setPosition(200, 100);
  original.style.opacity = 0.5;
  canvas.appendChild(original);

  const groupOrigin = new Circle({
    id: 'group-origin',
    style: {
      r: 30,
      fill: '#F04864',
    },
  });
  const originText = new Text({
    id: 'text',
    style: {
      fontFamily: 'PingFang SC',
      text: 'Origin',
      fontSize: 16,
      fill: '#fFF',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });

  groupOrigin.appendChild(originText);
  groupOrigin.setPosition(200, 100);

  canvas.appendChild(group);
  canvas.appendChild(groupOrigin);

  /**
   * Text
   */
  const text = new Text({
    id: 'rotated-text',
    style: {
      fontFamily: 'PingFang SC',
      text: 'Lorem ipsum',
      fontSize: 32,
      fill: '#FFF',
      stroke: '#1890FF',
      lineWidth: 5,
      // textAlign: 'center',
      // textBaseline: 'middle',
    },
  });
  text.setPosition(100, 400);
  canvas.appendChild(text);
  const textOrigin = new Circle({
    id: 'textOrigin',
    style: {
      r: 10,
      fill: '#F04864',
    },
  });
  textOrigin.setPosition(100, 400);
  canvas.appendChild(textOrigin);

  /**
   * Polyline
   */
  const points = [
    [50, 50],
    [100, 50],
    [100, 100],
    [150, 100],
    [150, 150],
    [200, 150],
  ];
  const polyline = new Polyline({
    style: {
      points,
      stroke: '#1890FF',
      lineWidth: 2,
    },
  });
  canvas.appendChild(polyline);
  polyline.setPosition(300, 300);
  const polylineOrigin = new Circle({
    id: 'polyline-origin',
    style: {
      r: 10,
      fill: '#F04864',
    },
  });
  polylineOrigin.setPosition(300, 300);
  canvas.appendChild(polylineOrigin);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    group.rotateLocal(1);
    text.rotateLocal(1);
    polyline.rotateLocal(1);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'webgpu') {
        renderer = webgpuRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();

  const circleFolder = gui.addFolder('animated circle');
  const circleConfig = {
    transformOriginX: 100,
    transformOriginY: 100,
    transformOrigin: 'center',
  };
  circleFolder
    .add(circleConfig, 'transformOrigin', [
      'left top',
      'center',
      'right bottom',
      '50% 50%',
      '50px 50px',
    ])
    .onChange((transformOrigin) => {
      // set transformOrigin
      circle.style.transformOrigin = transformOrigin;

      // get calculated origin
      const [ox, oy] = circle.getOrigin();
      const x = 100;
      const y = 100;

      circleOrigin.setPosition(x + ox, y + oy);

      // update dat.gui
      circleConfig.transformOriginX = ox + x;
      circleConfig.transformOriginY = oy + y;
    });
  circleFolder
    .add(circleConfig, 'transformOriginX', -200, 200)
    .onChange((tx) => {
      circle.style.transformOrigin = \`\${tx} \${circleConfig.transformOriginY}\`;

      const [ox, oy] = circle.getOrigin();
      const x = 100;
      const y = 100;
      circleOrigin.setPosition(x + ox, y + oy);
    })
    .listen();
  circleFolder
    .add(circleConfig, 'transformOriginY', -200, 200)
    .onChange((ty) => {
      circle.style.transformOrigin = \`\${circleConfig.transformOriginX}px \${ty}px\`;

      const [ox, oy] = circle.getOrigin();
      const x = 100;
      const y = 100;
      circleOrigin.setPosition(x + ox, y + oy);
    })
    .listen();
  circleFolder.open();

  const textFolder = gui.addFolder('text');
  const textConfig = {
    transformOriginX: 0,
    transformOriginY: 0,
    transformOrigin: 'left top',
  };
  textFolder
    .add(textConfig, 'transformOrigin', [
      'left top',
      'center',
      'right bottom',
      '50% 50%',
      '50px 50px',
    ])
    .onChange((transformOrigin) => {
      // set transformOrigin
      text.style.transformOrigin = transformOrigin;

      // get calculated origin
      const [ox, oy, oz] = text.getOrigin();
      const [x, y, z] = text.getPosition(); // left top corner of Bounds

      textOrigin.setPosition(x + ox, y + oy, z + oz);

      // update dat.gui
      textConfig.transformOriginX = ox + x;
      textConfig.transformOriginY = oy + y;
    });
  textFolder
    .add(textConfig, 'transformOriginX', -200, 200)
    .onChange((tx) => {
      text.style.transformOrigin = \`\${tx} \${textConfig.transformOriginY}\`;

      const [ox, oy] = text.getOrigin();
      const [lx, ly] = text.getPosition();
      textOrigin.setPosition(lx + ox, ly + oy);
    })
    .listen();
  textFolder
    .add(textConfig, 'transformOriginY', -200, 200)
    .onChange((ty) => {
      text.style.transformOrigin = \`\${textConfig.transformOriginX}px \${ty}px\`;

      const [ox, oy] = text.getOrigin();
      const [lx, ly] = text.getPosition();
      textOrigin.setPosition(lx + ox, ly + oy);
    })
    .listen();
  textFolder.open();

  let lastCloned = child1;
  const groupFolder = gui.addFolder('group');
  const groupConfig = {
    transformOriginX: 0,
    transformOriginY: 0,
    transformOrigin: 'left top',
    appendChild: () => {
      // // reset rotation
      // group.setEulerAngles(0);
      // // clone child
      // const cloned = lastCloned.cloneNode();
      // cloned.id = 'cloned';
      // cloned.translateLocal(0, 100);
      // group.appendChild(cloned);
      // lastCloned = cloned;
      // // reset transform origin, which will case re-calc origin
      // group.style.transformOrigin = group.style.transformOrigin || 'left top';
      // // get calculated origin
      // const [ox, oy, oz] = group.style.origin;
      // const [x, y, z] = group.getPosition(); // left top corner of Bounds
      // origin.setPosition(x + ox, y + oy, z + oz);
      // // update dat.gui
      // groupConfig.originX = ox;
      // groupConfig.originY = oy;
    },
  };
  groupFolder
    .add(groupConfig, 'transformOrigin', [
      'left top',
      'center',
      'right bottom',
      '50% 50%',
      '50px 50px',
    ])
    .onChange((transformOrigin) => {
      // set transformOrigin
      group.style.transformOrigin = transformOrigin;

      // get calculated origin
      const [ox, oy, oz] = group.getOrigin();
      const [x, y, z] = group.getPosition(); // left top corner of Bounds

      groupOrigin.setPosition(x + ox, y + oy, z + oz);

      // update dat.gui
      groupConfig.transformOriginX = ox + x;
      groupConfig.transformOriginY = oy + y;
    });
  groupFolder
    .add(groupConfig, 'transformOriginX', -200, 200)
    .onChange((tx) => {
      group.style.transformOrigin = \`\${tx} \${groupConfig.transformOriginY}\`;

      const [ox, oy] = group.getOrigin();
      const [lx, ly] = group.getPosition();
      groupOrigin.setPosition(lx + ox, ly + oy);
    })
    .listen();
  groupFolder
    .add(groupConfig, 'transformOriginY', -200, 200)
    .onChange((ty) => {
      group.style.transformOrigin = \`\${groupConfig.transformOriginX}px \${ty}px\`;

      const [ox, oy] = group.getOrigin();
      const [lx, ly] = group.getPosition();
      groupOrigin.setPosition(lx + ox, ly + oy);
    })
    .listen();
  groupFolder.add(groupConfig, 'appendChild');
  groupFolder.open();

  const polylineFolder = gui.addFolder('polyline');
  const polylineConfig = {
    transformOriginX: 0,
    transformOriginY: 0,
    transformOrigin: 'left top',
  };
  polylineFolder
    .add(polylineConfig, 'transformOrigin', [
      'left top',
      'center',
      'right bottom',
      '50% 50%',
      '50px 50px',
    ])
    .onChange((transformOrigin) => {
      // set transformOrigin
      polyline.style.transformOrigin = transformOrigin;

      // get calculated origin
      const [ox, oy] = polyline.getOrigin();
      const x = 300;
      const y = 300;

      // set origin's position
      polylineOrigin.setPosition(x + ox, y + oy);

      // update dat.gui
      polylineConfig.transformOriginX = ox;
      polylineConfig.transformOriginY = oy;
    });
  polylineFolder
    .add(polylineConfig, 'transformOriginX', -200, 200)
    .onChange((tx) => {
      polyline.style.transformOrigin = \`\${tx} \${polylineConfig.transformOriginY}\`;

      const [ox, oy] = polyline.getOrigin();
      const x = 300;
      const y = 300;
      polylineOrigin.setPosition(x + ox, y + oy);
    })
    .listen();
  polylineFolder
    .add(polylineConfig, 'transformOriginY', -200, 200)
    .onChange((ty) => {
      polyline.style.transformOrigin = \`\${polylineConfig.transformOriginX}px \${ty}px\`;

      const [ox, oy] = polyline.getOrigin();
      const x = 300;
      const y = 300;
      polylineOrigin.setPosition(x + ox, y + oy);
    })
    .listen();
  polylineFolder.open();
});
`,title:{zh:"\u65CB\u8F6C\u548C\u7F29\u653E\u4E2D\u5FC3",en:"Origin"},filename:"origin.js",isNew:!1},{id:"visibility",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*ZcrHSoLxRS8AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
solarSystem
   |    |
   |   sun
   |
 earthOrbit
   |    |
   |  earth
   |
  moonOrbit
      |
     moon
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const solarSystem = new Group({
    id: 'solarSystem',
  });
  const earthOrbit = new Group({
    id: 'earthOrbit',
  });
  const moonOrbit = new Group({
    id: 'moonOrbit',
  });

  const sun = new Circle({
    id: 'sun',
    style: {
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const earth = new Circle({
    id: 'earth',
    style: {
      r: 50,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const moon = new Circle({
    id: 'moon',
    style: {
      r: 25,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  solarSystem.appendChild(sun);
  solarSystem.appendChild(earthOrbit);
  earthOrbit.appendChild(earth);
  earthOrbit.appendChild(moonOrbit);
  moonOrbit.appendChild(moon);

  solarSystem.setPosition(300, 250);
  earthOrbit.translate(100, 0);
  moonOrbit.translate(50, 0);

  canvas.appendChild(solarSystem);

  // use AntV G devtools
  window.__g_instances__ = [canvas];

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.open();

  const sunFolder = gui.addFolder('sun');
  const sunConfig = {
    show: () => {
      sun.attr('visibility', 'visible');
    },
    hide: () => {
      sun.attr('visibility', 'hidden');
    },
    'z-index': 0,
  };
  sunFolder.add(sunConfig, 'hide').name('hide');
  sunFolder.add(sunConfig, 'show').name('show');
  sunFolder.add(sunConfig, 'z-index', 0, 100).onChange((zIndex) => {
    sun.style.zIndex = zIndex;
  });
  sunFolder.open();

  const earthFolder = gui.addFolder('earth');
  const earthConfig = {
    show: () => {
      earth.attr('visibility', 'visible');
    },
    hide: () => {
      earth.attr('visibility', 'hidden');
    },
    'z-index': 0,
  };
  earthFolder.add(earthConfig, 'hide').name('hide');
  earthFolder.add(earthConfig, 'show').name('show');
  earthFolder.add(earthConfig, 'z-index', 0, 100).onChange((zIndex) => {
    earth.style.zIndex = zIndex;
  });

  const moonFolder = gui.addFolder('moon');
  const moonConfig = {
    show: () => {
      moon.attr('visibility', 'visible');
    },
    hide: () => {
      moon.attr('visibility', 'hidden');
    },
  };
  moonFolder.add(moonConfig, 'hide').name('hide');
  moonFolder.add(moonConfig, 'show').name('show');

  const earthOrbitFolder = gui.addFolder('earthOrbit');
  const earthOrbitConfig = {
    show: () => {
      earthOrbit.attr('visibility', 'visible');
    },
    hide: () => {
      earthOrbit.attr('visibility', 'hidden');
    },
    'z-index': 0,
  };
  earthOrbitFolder.add(earthOrbitConfig, 'hide').name('hide');
  earthOrbitFolder.add(earthOrbitConfig, 'show').name('show');
  earthOrbitFolder.add(earthOrbitConfig, 'z-index', 0, 100).onChange((zIndex) => {
    earthOrbit.style.zIndex = zIndex;
  });

  const moonOrbitFolder = gui.addFolder('moonOrbit');
  const moonOrbitConfig = {
    show: () => {
      moonOrbit.attr('visibility', 'visible');
    },
    hide: () => {
      moonOrbit.attr('visibility', 'hidden');
    },
    'z-index': 0,
  };
  moonOrbitFolder.add(moonOrbitConfig, 'hide').name('hide');
  moonOrbitFolder.add(moonOrbitConfig, 'show').name('show');
  moonOrbitFolder.add(moonOrbitConfig, 'z-index', 0, 100).onChange((zIndex) => {
    moonOrbit.style.zIndex = zIndex;
  });
});
`,title:{zh:"\u53EF\u89C1\u6027\u548C\u5C55\u793A\u6B21\u5E8F",en:"Visibility & Z-index"},filename:"visibility.js",isNew:!1},{id:"z-index",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*gW6rQpXFK30AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// ul1 -> li1
//     -> li2
// ul2 -> li3

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ul1 = new Rect({
    id: 'ul1',
    style: {
      width: 400,
      height: 200,
      fill: 'blue',
    },
  });
  const ul1Text = new Text({
    id: 'ui1-text',
    style: {
      text: 'ul1',
      fontSize: 16,
      fill: 'white',
    },
  });
  const ul2 = new Rect({
    id: 'ul2',
    style: {
      width: 300,
      height: 250,
      fill: '#1890FF',
      lineWidth: 4,
      stroke: 'white',
    },
  });
  const ul2Text = new Text({
    id: 'ui2-text',
    style: {
      text: 'ul2',
      fontSize: 16,
      fill: 'white',
    },
  });

  const li1 = new Rect({
    id: 'li1',
    style: {
      width: 200,
      height: 50,
      fill: '#1890FF',
      lineWidth: 4,
      stroke: 'white',
    },
  });
  const li1Text = new Text({
    id: 'li1-text',
    style: {
      text: 'li1',
      fontSize: 16,
      fill: 'white',
    },
  });
  const li2 = new Rect({
    id: 'li2',
    style: {
      width: 200,
      height: 50,
      fill: '#1890FF',
      lineWidth: 4,
      stroke: 'white',
    },
  });
  const li2Text = new Text({
    id: 'li2-text',
    style: {
      text: 'li2',
      fontSize: 16,
      fill: 'white',
    },
  });

  ul1Text.translateLocal(260, 20);
  ul1.appendChild(ul1Text);
  ul1.setPosition(50, 50);
  li1Text.translateLocal(10, 20);
  li1.appendChild(li1Text);
  li2Text.translateLocal(10, 20);
  li2.appendChild(li2Text);
  li2.translateLocal(20, 30);
  ul1.appendChild(li1);
  ul1.appendChild(li2);

  ul2Text.translateLocal(60, 20);
  ul2.appendChild(ul2Text);
  ul2.setPosition(200, 100);

  canvas.appendChild(ul1);
  canvas.appendChild(ul2);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'webgpu') {
        renderer = webgpuRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();

  const zIndexFolder = gui.addFolder('z-index');
  const zIndexConfig = {
    li1ZIndex: 0,
    li2ZIndex: 0,
    ul1ZIndex: 0,
    ul2ZIndex: 0,
  };
  zIndexFolder.add(zIndexConfig, 'li1ZIndex', 0, 100).onChange((zIndex) => {
    li1.style.zIndex = zIndex;
  });
  zIndexFolder.add(zIndexConfig, 'li2ZIndex', 0, 100).onChange((zIndex) => {
    li2.style.zIndex = zIndex;
  });
  zIndexFolder.add(zIndexConfig, 'ul1ZIndex', 0, 100).onChange((zIndex) => {
    ul1.style.zIndex = zIndex;
  });
  zIndexFolder.add(zIndexConfig, 'ul2ZIndex', 0, 100).onChange((zIndex) => {
    ul2.style.zIndex = zIndex;
  });
  zIndexFolder.open();
});
`,title:{zh:"\u5C55\u793A\u6B21\u5E8F",en:"Z-index"},filename:"z-index.js",isNew:!1},{id:"change-z-index",source:`import { Canvas, CanvasEvent, Group, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const group1 = new Group();
const group2 = new Group();
const rect1 = new Rect({
  style: {
    width: 100,
    height: 100,
    fill: 'blue',
  },
});
const rect2 = new Rect({
  style: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    fill: 'red',
  },
});
group1.appendChild(rect1);
group2.appendChild(rect2);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(group1);
  canvas.appendChild(group2);

  let t = false;
  setInterval(() => {
    if (t) {
      group1.style.zIndex = 2;
      group2.style.zIndex = 0;
    } else {
      group2.style.zIndex = 2;
      group1.style.zIndex = 0;
    }
    t = !t;
  }, 1000);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4FEE\u6539 Group \u4E0A\u7684 zIndex",en:"Change zIndex on Group"},filename:"change-z-index.js",isNew:!1},{id:"clone",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*PwEYSI_ijPEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(new Plugin());
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(new Plugin());
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // add a circle to canvas
  const circle = new Circle({
    id: 'circle',
    style: {
      draggable: true,
      fill: 'rgb(239, 244, 255)',
      fillOpacity: 1,
      lineWidth: 1,
      opacity: 1,
      r: 100,
      stroke: 'rgb(95, 149, 255)',
      strokeOpacity: 1,
      cursor: 'pointer',
    },
  });

  const text = new Text({
    id: 'text',
    style: {
      draggable: true,
      fill: '#000',
      fillOpacity: 0.9,
      font: \`normal normal normal 12px Avenir, -apple-system, system-ui, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\`,
      // fontFamily: \`Avenir, -apple-system, system-ui, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\`,
      // fontFamily: 'Arial, sans-serif',
      // fontFamily: 'sans-serif',
      fontFamily: 'Avenir',
      // fontFamily: 'Times',
      // fontFamily: 'Microsoft YaHei',
      fontSize: 22,
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 'normal',
      lineWidth: 1,
      opacity: 1,
      strokeOpacity: 1,
      text: 'Drag me',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });

  circle.appendChild(text);
  canvas.appendChild(circle);
  circle.setPosition(300, 200);

  // handle dragging
  let shiftX = 0;
  let shiftY = 0;
  function moveAt(target, canvasX, canvasY) {
    target.setPosition(canvasX - shiftX, canvasY - shiftY);
  }
  circle.addEventListener('dragstart', function (e) {
    circle.style.opacity = 0.5;
    text.style.text = 'Drag me';

    const [x, y] = e.target.getPosition();
    shiftX = e.canvasX - x;
    shiftY = e.canvasY - y;

    moveAt(circle, e.canvasX, e.canvasY);

    console.log('dragstart...');
  });
  circle.addEventListener('drag', function (e) {
    moveAt(circle, e.canvasX, e.canvasY);
    text.style.text = \`Dragging...\`;
  });
  circle.addEventListener('dragend', function (e) {
    circle.style.opacity = 1;
    text.style.text = 'Drag me';

    console.log('dragend...');
  });
  circle.addEventListener('click', function (e) {
    console.log('click...');
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
    clone: () => {
      const cloned = circle.cloneNode(rendererConfig.deep);
      canvas.appendChild(cloned);
      cloned.toBack();
      cloned.translateLocal(10, 10);
    },
    deep: false,
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
    .onChange((renderer) => {
      canvas.setRenderer(
        renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
      );
    });
  rendererFolder.add(rendererConfig, 'clone');
  rendererFolder.add(rendererConfig, 'deep');
  rendererFolder.open();

  const circleFolder = gui.addFolder('circle');
  const circleConfig = {
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    fillOpacity: 1,
    strokeOpacity: 1,
    anchorX: 0.5,
    anchorY: 0.5,
    shadowColor: '#000',
    shadowBlur: 20,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  };
  circleFolder.add(circleConfig, 'r', 50, 200).onChange((radius) => {
    circle.style.r = radius;
  });
  circleFolder.addColor(circleConfig, 'fill').onChange((color) => {
    circle.style.fill = color;
  });
  circleFolder.addColor(circleConfig, 'stroke').onChange((color) => {
    circle.attr('stroke', color);
  });
  circleFolder.addColor(circleConfig, 'shadowColor').onChange((color) => {
    circle.attr('shadowColor', color);
  });
  circleFolder.add(circleConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
    circle.style.shadowBlur = shadowBlur;
  });
  circleFolder.add(circleConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
    circle.style.shadowOffsetX = shadowOffsetX;
  });
  circleFolder.add(circleConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
    circle.style.shadowOffsetY = shadowOffsetY;
  });
  circleFolder.add(circleConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
    circle.attr('lineWidth', lineWidth);
  });
  circleFolder.add(circleConfig, 'fillOpacity', 0, 1, 0.1).onChange((opacity) => {
    circle.attr('fillOpacity', opacity);
  });
  circleFolder.add(circleConfig, 'strokeOpacity', 0, 1, 0.1).onChange((opacity) => {
    circle.attr('strokeOpacity', opacity);
  });
  circleFolder.add(circleConfig, 'anchorX', 0, 1, 0.1).onChange((anchorX) => {
    circle.attr('anchor', [anchorX, circleConfig.anchorY]);
  });
  circleFolder.add(circleConfig, 'anchorY', 0, 1, 0.1).onChange((anchorY) => {
    circle.attr('anchor', [circleConfig.anchorX, anchorY]);
  });
});
`,title:{zh:"\u514B\u9686\u8282\u70B9",en:"Clone Node"},filename:"clone.js",isNew:!1}],icon:"",id:"basic",title:{en:"SceneGraph",zh:"\u573A\u666F\u56FE"},childrenKey:"demos",order:1}],childrenKey:"examples"},{id:"plugins",title:{zh:"\u63D2\u4EF6",en:"Plugins"},examples:[{demos:[{id:"a11y-text-extractor",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-a11y';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const plugin = new Plugin({
  enableExtractingText: true,
});
canvasRenderer.registerPlugin(plugin);
svgRenderer.registerPlugin(plugin);
webglRenderer.registerPlugin(plugin);
webgpuRenderer.registerPlugin(plugin);
canvaskitRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const drawBars = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // 5. Draw data
  const binsGroup = bounds.append('g');
  const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

  const barPadding = 1;
  const barRects = binGroups
    .append('rect')
    .attr('x', (d) => xScale(d.x0) + barPadding / 2)
    .attr('y', (d) => yScale(yAccessor(d)))
    .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr('fill', 'cornflowerblue')
    .on('mouseenter', function (e) {
      d3.select(e.target).attr('fill', 'red');
    })
    .on('mouseleave', function (e) {
      d3.select(e.target).attr('fill', 'cornflowerblue');
    });

  const barText = binGroups
    .filter(yAccessor)
    .append('text')
    .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .attr('fill', 'darkgrey')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds
    .append('line')
    .attr('x1', xScale(mean))
    .attr('x2', xScale(mean))
    .attr('y1', -15)
    .attr('y2', dimensions.boundedHeight)
    .attr('stroke-width', 1)
    .attr('stroke', 'maroon')
    .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds
    .append('text')
    .attr('x', xScale(mean))
    .attr('y', -20)
    .text('mean')
    .attr('fill', 'maroon')
    .style('font-size', '12px')
    .style('text-anchor', 'middle');

  // 6. Draw peripherals
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
    .attr('fill', 'black');

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '10px')
    .text('Humidity')
    .style('text-transform', 'capitalize');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528\u6D4F\u89C8\u5668\u641C\u7D22\uFF08command + F\uFF09\u6587\u672C\u5185\u5BB9",en:"Search text content in browser"},filename:"a11y-text-extractor.js",isNew:!1},{id:"a11y-keyboard-navigation",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-a11y';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const plugin = new Plugin({
  enableExtractingText: true,
  containerAriaLabel: 'D3 barchart',
});
canvasRenderer.registerPlugin(plugin);
svgRenderer.registerPlugin(plugin);
webglRenderer.registerPlugin(plugin);
webgpuRenderer.registerPlugin(plugin);
canvaskitRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const drawBars = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // 5. Draw data
  const binsGroup = bounds.append('g');
  const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

  const barPadding = 1;
  const barRects = binGroups
    .append('rect')
    .attr('x', (d) => xScale(d.x0) + barPadding / 2)
    .attr('y', (d) => yScale(yAccessor(d)))
    .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr('fill', 'cornflowerblue')
    .attr('accessible', true)
    .attr('tab-index', 0)
    .attr('aria-label', yAccessor)
    .on('mouseenter', function (e) {
      d3.select(e.target).attr('fill', 'red');
    })
    .on('mouseleave', function (e) {
      d3.select(e.target).attr('fill', 'cornflowerblue');
    });

  const barText = binGroups
    .filter(yAccessor)
    .append('text')
    .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .attr('fill', 'darkgrey')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds
    .append('line')
    .attr('x1', xScale(mean))
    .attr('x2', xScale(mean))
    .attr('y1', -15)
    .attr('y2', dimensions.boundedHeight)
    .attr('stroke-width', 1)
    .attr('stroke', 'maroon')
    .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds
    .append('text')
    .attr('x', xScale(mean))
    .attr('y', -20)
    .text('mean')
    .attr('fill', 'maroon')
    .style('font-size', '12px')
    .style('text-anchor', 'middle');

  // 6. Draw peripherals
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
    .attr('fill', 'black');

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '10px')
    .text('Humidity')
    .style('text-transform', 'capitalize');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528\u952E\u76D8\u5BFC\u822A",en:"Use keyboard navigation"},filename:"a11y-keyboard-navigation.js",isNew:!1}],icon:"",id:"a11y",title:{en:"A11y",zh:"\u65E0\u969C\u788D"},childrenKey:"demos",order:11},{demos:[{id:"skottie",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_usaTqSm6vYAAAAAAAAAAAAAARQnAQ",source:`import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvaskit';

/**
 * Skottie is a performant, secure native player for JSON animations derived from the Bodymovin plugin for After Effects.
 * @see https://skia.org/docs/user/modules/skottie/
 */

const canvaskitRenderer = new Renderer({
  wasmDir: '/',
});
const plugin = canvaskitRenderer.getPlugin('canvaskit-renderer');

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvaskitRenderer,
});

(async () => {
  const cdn = 'https://storage.googleapis.com/skia-cdn/misc/';

  const [
    _,
    legoJSON,
    confettiJSON,
    drinkJSON,
    multiframeJSON,
    flightGif,
    onboardingJSON,
    twitterJSON,
  ] = await Promise.all([
    canvas.ready,
    fetch(cdn + 'lego_loader.json').then((response) => response.text()),
    fetch(cdn + 'confetti.json').then((response) => response.text()),
    fetch(cdn + 'drinks.json').then((response) => response.text()),
    fetch(cdn + 'skottie_sample_multiframe.json').then((response) => response.text()),
    fetch(cdn + 'flightAnim.gif').then((response) => response.arrayBuffer()),
    fetch(cdn + 'onboarding.json').then((response) => response.text()),
    fetch('/lottie/twitter-favorite-heart.json').then((response) => response.text()),
  ]);

  plugin.playAnimation('sk_legos', legoJSON, [-100, -100, 300, 300]);
  plugin.playAnimation('sk_party', confettiJSON, [200, -100, 400, 400]);
  plugin.playAnimation('sk_drink', drinkJSON, [0, 200, 200, 400]);
  plugin.playAnimation('sk_animated_gif', multiframeJSON, [200, 200, 400, 400], {
    'image_0.png': flightGif,
  });
  plugin.playAnimation('sk_onboarding', onboardingJSON, [350, 0, 550, 200]);
  plugin.playAnimation('sk_twitter', twitterJSON, [400, 200, 600, 400]);
})();
`,title:{zh:"\u4F7F\u7528 Skottie \u64AD\u653E Lottie \u52A8\u753B",en:"Use Skottie playing Lottie animations"},filename:"skottie.js",isNew:!1},{id:"canvaskit-particles",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*919sR5Oxx_kAAAAAAAAAAAAAARQnAQ",source:`import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvaskit';

/**
 * Skia\u2019s particle module provides a way to quickly generate large numbers of drawing primitives with dynamic, animated behavior.
 * Particles can be used to create effects like fireworks, spark trails, ambient \u201Cweather\u201D, and much more.
 * Nearly all properties and behavior are controlled by scripts written in Skia\u2019s custom language, SkSL
 * @see https://skia.org/docs/user/modules/particles/
 * @see https://particles.skia.org/?nameOrHash=@text
 */

const canvaskitRenderer = new Renderer({
  wasmDir: '/',
});
const plugin = canvaskitRenderer.getPlugin('canvaskit-renderer');

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvaskitRenderer,
});

const text = {
  MaxCount: 2000,
  Drawable: {
    Type: 'SkCircleDrawable',
    Radius: 1,
  },
  Code: [
    'void effectSpawn(inout Effect effect) {',
    '  effect.rate = 1000;',
    '}',
    '',
    'void spawn(inout Particle p) {',
    '  p.lifetime = mix(1, 3, rand(p.seed));',
    '  float a = radians(mix(250, 290, rand(p.seed)));',
    '  float s = mix(10, 30, rand(p.seed));',
    '  p.vel.x = cos(a) * s;',
    '  p.vel.y = sin(a) * s;',
    '  p.pos += text(rand(p.seed)).xy;',
    '}',
    '',
    'void update(inout Particle p) {',
    '  float4 startColor = float4(1, 0.196, 0.078, 1);',
    '  float4 endColor   = float4(1, 0.784, 0.078, 1);',
    '  p.color = mix(startColor, endColor, p.age);',
    '}',
    '',
  ],
  Bindings: [
    {
      Type: 'SkTextBinding',
      Name: 'text',
      Text: 'AntV',
      FontSize: 96,
    },
  ],
};

const curves = {
  MaxCount: 1000,
  Drawable: {
    Type: 'SkCircleDrawable',
    Radius: 2,
  },
  Code: [
    \`
    void effectSpawn(inout Effect effect) {
      effect.rate = 200;
      effect.color = float4(1, 0, 0, 1);
    }
    void spawn(inout Particle p) {
      p.lifetime = 3 + rand(p.seed);
      p.vel.y = -50;
    }

    void update(inout Particle p) {
      float w = mix(15, 3, p.age);
      p.pos.x = sin(radians(p.age * 320)) * mix(25, 10, p.age) + mix(-w, w, rand(p.seed));
      if (rand(p.seed) < 0.5) { p.pos.x = -p.pos.x; }

      p.color.g = (mix(75, 220, p.age) + mix(-30, 30, rand(p.seed))) / 255;
    }
    \`,
  ],
  Bindings: [],
};

const fireworks = {
  MaxCount: 300,
  Drawable: {
    Type: 'SkCircleDrawable',
    Radius: 3,
  },
  Code: [
    'void effectSpawn(inout Effect effect) {',
    '  // Phase one: Launch',
    '  effect.lifetime = 4;',
    '  effect.rate = 120;',
    '  float a = radians(mix(-20, 20, rand(effect.seed)) - 90);',
    '  float s = mix(200, 220, rand(effect.seed));',
    '  effect.vel.x = cos(a) * s;',
    '  effect.vel.y = sin(a) * s;',
    '  effect.color.rgb = float3(rand(effect.seed), rand(effect.seed), rand(effect.seed));',
    '  effect.pos.x = 0;',
    '  effect.pos.y = 0;',
    '  effect.scale = 0.25;  // Also used as particle behavior flag',
    '}',
    '',
    'void effectUpdate(inout Effect effect) {',
    '  if (effect.age > 0.5 && effect.rate > 0) {',
    '    // Phase two: Explode',
    '    effect.rate = 0;',
    '    effect.burst = 50;',
    '    effect.scale = 1;',
    '  } else {',
    '    effect.vel.y += dt * 90;',
    '  }',
    '}',
    '',
    'void spawn(inout Particle p) {',
    '  bool explode = p.scale == 1;',
    '',
    '  p.lifetime = explode ? (2 + rand(p.seed) * 0.5) : 0.5;',
    '  float a = radians(rand(p.seed) * 360);',
    '  float s = explode ? mix(90, 100, rand(p.seed)) : mix(5, 10, rand(p.seed));',
    '  p.vel.x = cos(a) * s;',
    '  p.vel.y = sin(a) * s;',
    '}',
    '',
    'void update(inout Particle p) {',
    '  p.color.a = 1 - p.age;',
    '  if (p.scale == 1) {',
    '    p.vel.y += dt * 50;',
    '  }',
    '}',
    '',
  ],
  Bindings: [],
};

const spiral = {
  MaxCount: 800,
  Drawable: {
    Type: 'SkCircleDrawable',
    Radius: 2,
  },
  Code: [
    'void effectSpawn(inout Effect effect) {',
    '  effect.lifetime = 4;',
    '  effect.rate = 120;',
    '  effect.spin = 6;',
    '}',
    '',
    'void spawn(inout Particle p) {',
    '  p.lifetime = 2 + rand(p.seed);',
    '  p.vel = p.dir * mix(50, 60, rand(p.seed));',
    '}',
    '',
    'void update(inout Particle p) {',
    '  p.scale = 0.5 + 1.5 * p.age;',
    '  float3 a0 = float3(0.098, 0.141, 0.784);',
    '  float3 a1 = float3(0.525, 0.886, 0.980);',
    '  float3 b0 = float3(0.376, 0.121, 0.705);',
    '  float3 b1 = float3(0.933, 0.227, 0.953);',
    '  p.color.rgb = mix(mix(a0, a1, p.age), mix(b0, b1, p.age), rand(p.seed));',
    '}',
    '',
  ],
  Bindings: [],
};

const wave = {
  MaxCount: 6000,
  Drawable: {
    Type: 'SkCircleDrawable',
    Radius: 2,
  },
  Code: [
    'void effectSpawn(inout Effect effect) {',
    '  effect.rate = 2000;',
    '}',
    '',
    'void effectUpdate(inout Effect effect) {',
    '}',
    '',
    'void spawn(inout Particle p) {',
    '  p.pos.y += sin(effect.age * 6.28) * 40;',
    '  p.lifetime = 2 + (rand(p.seed) * 2);',
    '  p.vel.x = (30 * rand(p.seed)) + 50;',
    '  p.vel.y = (20 * rand(p.seed)) - 10;',
    '}',
    '',
    'void update(inout Particle p) {',
    '  p.color.r = p.age;',
    '  p.color.g = 1 - p.age;',
    '  float s1 = 0.5 + (1.5 * p.age);',
    '  float s2 = 1.0 + (-0.75 * p.age);',
    '  p.scale = s1 + (s2 - s1) * rand(p.seed);',
    '  p.vel.y += 20.0 * dt;',
    '}',
    '',
  ],
  Bindings: [],
};

(async () => {
  await canvas.ready;

  // curve
  const curveParticles = plugin.createParticles(JSON.stringify(curves), (canvas) => {
    canvas.translate(100, 250);
  });
  curveParticles.start(Date.now() / 1000.0, true);

  // text
  const textParticles = plugin.createParticles(JSON.stringify(text), (canvas) => {
    canvas.translate(250, 250);
  });
  textParticles.start(Date.now() / 1000.0, true);

  // fireworks
  const fireworksParticles = plugin.createParticles(JSON.stringify(fireworks), (canvas) => {
    canvas.translate(100, 350);
  });
  fireworksParticles.start(Date.now() / 1000.0, true);

  // spiral
  const spiralParticles = plugin.createParticles(JSON.stringify(spiral), (canvas) => {
    canvas.translate(350, 350);
    canvas.scale(0.5, 0.5);
  });
  spiralParticles.start(Date.now() / 1000.0, true);

  // wave
  const waveParticles = plugin.createParticles(JSON.stringify(wave), (canvas) => {
    canvas.translate(50, 350);
    canvas.scale(0.5, 0.5);
  });
  waveParticles.start(Date.now() / 1000.0, true);
})();
`,title:{zh:"\u4F7F\u7528 CanvasKit \u7ED8\u5236\u7C92\u5B50",en:"Use CanvasKit drawing particles"},filename:"canvaskit-particles.js",isNew:!1},{id:"canvaskit-emoji",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_q9uQLTx6ssAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, Text } from '@antv/g';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';

/**
 * Draw emoji with Noto Emoji
 * ported from @see https://codesandbox.io/s/dsiuc?file=/src/index.js
 * @see https://github.com/googlefonts/noto-emoji
 */

const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'Noto Color Emoji',
      url: '/NotoColorEmoji.ttf',
    },
  ],
});

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvaskitRenderer,
});

(async () => {
  await canvas.ready;

  const emoji = new Text({
    style: {
      fontFamily: 'Roboto, Noto Color Emoji',
      fontSize: 30,
      fill: 'black',
      text: 'Emoji \u{1F355}\u{1F354}\u{1F35F}\u{1F95D}\u{1F371}\u{1F576}\u{1F3A9}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}',
      wordWrap: true,
      wordWrapWidth: 200,

      strutStyle: {
        strutEnabled: true,
        fontFamilies: ['Roboto', 'Noto Color Emoji'],
        fontSize: 30,
        // mapping css line-height to this is does not seem 1:1
        heightMultiplier: 1,
        forceStrutHeight: true,
      },
    },
  });
  emoji.translate(100, 300);
  canvas.appendChild(emoji);
})();

// compared with native browser
const newStyle = document.createElement('style');
newStyle.appendChild(
  document.createTextNode(\`
@font-face {
  src: url("https://storage.googleapis.com/skia-cdn/google-web-fonts/Roboto-Regular.ttf");
  font-family: "MyRoboto";
  font-style: normal;
}

@font-face {
  font-family: "MyNoto Color Emoji";
  src: url("https://storage.googleapis.com/skia-cdn/misc/NotoColorEmoji.ttf");
  font-style: normal;
}
\`),
);
document.head.appendChild(newStyle);

const $div = document.createElement('div');
$div.setAttribute('id', 'editor');
$div.setAttribute('contenteditable', true);
$div.innerHTML = 'Emoji \u{1F355}\u{1F354}\u{1F35F}\u{1F95D}\u{1F371}\u{1F576}\u{1F3A9}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}';
$div.style = \`
  font-family: "MyRoboto", "MyNoto Color Emoji";
  line-height: 1;
  font-size: 30px;
  width: 200px;
  color: black;
  margin-left: 100px;
\`;
const $wrapper = document.getElementById('container');
$wrapper.appendChild($div);
`,title:{zh:"\u7ED8\u5236 emoji",en:"Draw emoji"},filename:"canvaskit-emoji.js",isNew:!1},{id:"canvaskit-text-along-path",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*7voUQqLoKrEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, Path, Text } from '@antv/g';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';

/**
 * Draw text along a path.
 * @see https://fiddle.skia.org/c/@Canvas_drawTextRSXform
 *
 * TextStyle API:
 * @see https://api.flutter.dev/flutter/painting/TextStyle-class.html
 */

const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvaskitRenderer,
});

(async () => {
  await canvas.ready;

  const alongPath = new Path({
    style: {
      d: 'M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10',
    },
  });

  const text = new Text({
    style: {
      fontFamily: 'sans-serif',
      fontSize: 22,
      fill: '#1890FF',
      text: 'abcdefghijklmn\u8FD9\u662F\u6D4B\u8BD5\u6587\u5B57',
      alongPath,
    },
  });
  text.translate(100, 100);
  canvas.appendChild(text);
})();
`,title:{zh:"\u6CBF\u8DEF\u5F84\u7ED8\u5236\u6587\u672C",en:"Draw text along path"},filename:"canvaskit-text-along-path.js",isNew:!1},{id:"canvaskit-paragraph",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*DYqRQLtqtIUAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Text } from '@antv/g';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Use paragraph shaping.
 * @see https://skia.org/docs/user/modules/quickstart/#text-shaping
 *
 * @see https://github.com/flutter/flutter/issues/76473
 * @see https://github.com/flutter/flutter/issues/90135#issuecomment-984916656
 *
 * TextStyle API:
 * @see https://api.flutter.dev/flutter/painting/TextStyle-class.html
 */

const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvaskitRenderer,
});

(async () => {
  await canvas.ready;

  const ellipsisText = new Text({
    style: {
      fontFamily: 'Roboto',
      fontSize: 22,
      fill: '#1890FF',
      text: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
      wordWrap: true,
      wordWrapWidth: 100,
      maxLines: 3,
      ellipsis: '...',
    },
  });
  ellipsisText.translate(100, 100);
  canvas.appendChild(ellipsisText);

  const decoratedText = new Text({
    style: {
      fontFamily: 'sans-serif',
      fontSize: 22,
      fill: '#1890FF',
      text: 'abcdefghijklmnopqrstuvwxyz\u8FD9\u662F\u6D4B\u8BD5\u6587\u672C',
      wordWrap: true,
      wordWrapWidth: 100,
      decorationLine: 'underline',
      decorationThickness: 1.5,
    },
  });
  decoratedText.translate(100, 300);
  canvas.appendChild(decoratedText);

  const shadowedText = new Text({
    style: {
      fontFamily: 'sans-serif',
      fontSize: 22,
      fill: '#1890FF',
      text: 'abcdefghijklmnopqrstuvwxyz\u8FD9\u662F\u6D4B\u8BD5\u6587\u672C',
      wordWrap: true,
      wordWrapWidth: 100,
      shadows: [
        {
          color: 'black',
          blurRadius: 15,
        },
        {
          color: 'red',
          blurRadius: 5,
          offset: [10, 10],
        },
      ],
    },
  });
  shadowedText.translate(300, 300);
  canvas.appendChild(shadowedText);

  // fontFeatures
  const fontFeaturesText = new Text({
    style: {
      fontFamily: 'Roboto',
      fontSize: 22,
      fill: '#1890FF',
      text: 'Difficult waffles 0O 3.14',
      fontFeatures: [
        {
          name: 'smcp',
          value: 1,
        },
        {
          name: 'zero',
          value: 1,
        },
      ],
    },
  });
  fontFeaturesText.translate(300, 100);
  canvas.appendChild(fontFeaturesText);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const folder = gui.addFolder('Paragraph');
  const config = {
    wordWrap: true,
    wordWrapWidth: 100,
    decorationLine: 'underline',
    decorationThickness: 1.5,
    decorationColor: '#1890FF',
    decorationStyle: 'solid',
    direction: 'ltr',
    fill: '#1890FF',
    backgroundColor: 'white',
    foregroundColor: '#1890FF',
    shadows: [],
    halfLeading: false,
    heightMultiplier: 1,
    letterSpacing: 0,
    wordSpacing: 0,
    disableHinting: false,
  };
  folder.addColor(config, 'fill').onChange((fill) => {
    decoratedText.style.fill = fill;
  });
  folder.addColor(config, 'backgroundColor').onChange((backgroundColor) => {
    decoratedText.style.backgroundColor = backgroundColor;
  });
  folder.addColor(config, 'foregroundColor').onChange((foregroundColor) => {
    decoratedText.style.foregroundColor = foregroundColor;
  });
  folder.add(config, 'wordWrap').onChange((wordWrap) => {
    decoratedText.style.wordWrap = wordWrap;
  });
  folder.add(config, 'wordWrapWidth', 50, 200).onChange((wordWrapWidth) => {
    decoratedText.style.wordWrapWidth = wordWrapWidth;
  });
  folder.add(config, 'heightMultiplier', 0, 5).onChange((heightMultiplier) => {
    decoratedText.style.heightMultiplier = heightMultiplier;
  });
  folder.add(config, 'letterSpacing', 0, 10).onChange((letterSpacing) => {
    decoratedText.style.letterSpacing = letterSpacing;
  });
  folder.add(config, 'wordSpacing', 0, 10).onChange((wordSpacing) => {
    decoratedText.style.wordSpacing = wordSpacing;
  });
  folder.add(config, 'disableHinting').onChange((disableHinting) => {
    decoratedText.style.disableHinting = disableHinting;
  });
  folder.add(config, 'halfLeading').onChange((halfLeading) => {
    decoratedText.style.halfLeading = halfLeading;
  });
  folder
    .add(config, 'decorationLine', ['none', 'underline', 'overline', 'line-through'])
    .onChange((decorationLine) => {
      decoratedText.style.decorationLine = decorationLine;
    });
  folder.add(config, 'decorationThickness', 0, 5).onChange((decorationThickness) => {
    decoratedText.style.decorationThickness = decorationThickness;
  });
  folder.addColor(config, 'decorationColor').onChange((decorationColor) => {
    decoratedText.style.decorationColor = decorationColor;
  });
  folder
    .add(config, 'decorationStyle', ['solid', 'double', 'dotted', 'dashed', 'wavy'])
    .onChange((decorationStyle) => {
      decoratedText.style.decorationStyle = decorationStyle;
    });
  folder.add(config, 'direction', ['ltr', 'rtl']).onChange((direction) => {
    decoratedText.style.direction = direction;
  });

  const strutFolder = gui.addFolder('StrutStyle');
  const strutConfig = {
    fontFamilies: ['sans-serif'],
    strutEnabled: false,
    fontSize: 22,
    heightMultiplier: 1,
    leading: 0,
    halfLeading: false,
    forceStrutHeight: false,
  };
  strutFolder.add(strutConfig, 'strutEnabled').onChange((strutEnabled) => {
    decoratedText.style.strutStyle = strutConfig;
  });
  strutFolder.add(strutConfig, 'fontSize', 10, 40).onChange((fontSize) => {
    decoratedText.style.strutStyle = strutConfig;
  });
  strutFolder.add(strutConfig, 'heightMultiplier', 0, 5).onChange((heightMultiplier) => {
    decoratedText.style.strutStyle = strutConfig;
  });
  strutFolder.add(strutConfig, 'leading', 0, 10).onChange((heightMultiplier) => {
    decoratedText.style.strutStyle = strutConfig;
  });
  strutFolder.add(strutConfig, 'halfLeading').onChange((halfLeading) => {
    decoratedText.style.strutStyle = strutConfig;
  });
  strutFolder.add(strutConfig, 'forceStrutHeight').onChange((halfLeading) => {
    decoratedText.style.strutStyle = strutConfig;
  });
})();
`,title:{zh:"\u4F7F\u7528 CanvasKit \u7ED8\u5236\u6587\u672C\u6BB5\u843D",en:"Draw paragraph with CanvasKit"},filename:"canvaskit-paragraph.js",isNew:!1}],icon:"",id:"canvaskit",title:{en:"Canvaskit",zh:"Canvaskit"},childrenKey:"demos",order:11},{demos:[{id:"dragndrop",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*A14uTY9_5UEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Image, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Drag'n'Drop with PointerEvents
 * @see https://javascript.info/mouse-drag-and-drop
 */

const plugin = new Plugin({
  // we can drag the whole document from empty space now!
  isDocumentDraggable: true,
  isDocumentDroppable: true,
  dragstartDistanceThreshold: 10,
  dragstartTimeThreshold: 100,
});

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(plugin);
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
canvaskitRenderer.registerPlugin(plugin);
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(plugin);
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const gate = new Image({
    style: {
      droppable: true,
      x: 50,
      y: 100,
      width: 200,
      height: 100,
      src: 'https://en.js.cx/clipart/soccer-gate.svg',
    },
  });

  const ball = new Image({
    style: {
      draggable: true,
      x: 300,
      y: 200,
      width: 100,
      height: 100,
      src: 'https://en.js.cx/clipart/ball.svg',
      cursor: 'pointer',
    },
  });

  canvas.appendChild(gate);
  canvas.appendChild(ball);

  const gateText = new Text({
    style: {
      x: 50,
      y: 350,
      fill: 'black',
      text: '',
      pointerEvents: 'none',
    },
  });
  const ballText = new Text({
    style: {
      x: 50,
      y: 400,
      fill: 'black',
      text: '',
      pointerEvents: 'none',
    },
  });
  canvas.appendChild(gateText);
  canvas.appendChild(ballText);

  let shiftX = 0;
  let shiftY = 0;
  function moveAt(target, canvasX, canvasY) {
    target.setPosition(canvasX - shiftX, canvasY - shiftY);
  }

  ball.addEventListener('dragstart', function (e) {
    e.target.style.opacity = 0.5;
    ballText.style.text = 'ball dragstart';

    const [x, y] = e.target.getPosition();
    shiftX = e.canvasX - x;
    shiftY = e.canvasY - y;

    moveAt(e.target, e.canvasX, e.canvasY);
  });
  ball.addEventListener('drag', function (e) {
    moveAt(e.target, e.canvasX, e.canvasY);
    ballText.style.text = \`ball drag movement: \${e.dx}, \${e.dy}\`;
  });
  ball.addEventListener('dragend', function (e) {
    e.target.style.opacity = 1;
    ballText.style.text = 'ball dragend';
  });

  gate.addEventListener('dragenter', function (e) {
    e.target.style.opacity = 0.6;
    gateText.style.text = 'gate dragenter';
  });
  gate.addEventListener('dragleave', function (e) {
    e.target.style.opacity = 1;
    gateText.style.text = 'gate dragleave';
  });
  gate.addEventListener('dragover', function (e) {
    e.target.style.opacity = 0.6;
    gateText.style.text = 'gate dragover';
  });
  gate.addEventListener('drop', function (e) {
    e.target.style.opacity = 1;
    gateText.style.text = 'gate drop';
  });

  // move camera
  const camera = canvas.getCamera();
  canvas.addEventListener('drag', function (e) {
    if (e.target === canvas.document) {
      camera.pan(-e.dx, -e.dy);
    }
  });
  canvas.addEventListener('drop', function (e) {
    if (e.target === canvas.document) {
      console.log('drop on document');
    }
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528\u62D6\u653E",en:"Use Drag'n'Drop"},filename:"dragndrop.js",isNew:!1},{id:"dragndrop-group",source:`import { Canvas, CanvasEvent, Circle, Group, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Drag'n'Drop with PointerEvents
 * @see https://javascript.info/mouse-drag-and-drop
 */

const plugin = new Plugin({
  // we can drag the whole document from empty space now!
  isDocumentDraggable: true,
  isDocumentDroppable: true,
  dragstartDistanceThreshold: 10,
  dragstartTimeThreshold: 100,
});

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(plugin);
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
canvaskitRenderer.registerPlugin(plugin);
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(plugin);
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const draggableGroup1 = new Group({
    style: {
      draggable: true,
    },
  });
  const node1 = new Circle({
    style: {
      r: 50,
      cx: -50,
      cy: -50,
      fill: 'blue',
      cursor: 'move',
    },
  });
  const text1 = new Text({
    style: {
      fill: 'white',
      text: 'node1',
      textAlign: 'center',
      textBaseline: 'middle',
      pointerEvents: 'none',
    },
  });
  draggableGroup1.appendChild(node1);
  node1.appendChild(text1);

  const draggableGroup2 = draggableGroup1.cloneNode(true);
  const node2 = draggableGroup2.childNodes[0];
  node2.style.cx = 50;
  node2.style.cy = 50;
  node2.children[0].style.text = 'node2';

  const droppableGroup1 = new Group({
    style: {
      droppable: true,
    },
  });
  const group1 = new Circle({
    style: {
      r: 120,
      cx: 150,
      cy: 200,
      fill: 'white',
      stroke: 'black',
    },
  });
  droppableGroup1.appendChild(group1);
  const droppableGroup2 = droppableGroup1.cloneNode(true);
  droppableGroup2.childNodes[0].style.cx = 400;
  droppableGroup2.style.zIndex = -1;

  group1.appendChild(draggableGroup1);
  group1.appendChild(draggableGroup2);

  canvas.appendChild(droppableGroup1);
  canvas.appendChild(droppableGroup2);

  // move camera
  const camera = canvas.getCamera();

  let shiftX = 0;
  let shiftY = 0;
  function moveAt(target, canvasX, canvasY) {
    target.setPosition(canvasX - shiftX, canvasY - shiftY);
  }
  canvas.addEventListener('dragstart', function (e) {
    const { target, canvasX, canvasY } = e;

    switch (target) {
      case draggableGroup1:
      case draggableGroup2:
        const [x, y] = target.getPosition();
        shiftX = canvasX - x;
        shiftY = canvasY - y;

        moveAt(target, canvasX, canvasY);
        target.childNodes[0].style.opacity = 0.5;
    }
  });
  canvas.addEventListener('drag', function (e) {
    const { target, canvasX, canvasY, dx, dy } = e;

    switch (target) {
      case canvas.document:
        camera.pan(-dx, -dy);
        break;
      case draggableGroup1:
      case draggableGroup2:
        moveAt(target, canvasX, canvasY);
        target.childNodes[0].style.opacity = 0.5;
        break;
    }
  });
  canvas.addEventListener('dragend', function (e) {
    const { target } = e;

    switch (target) {
      case draggableGroup1:
      case draggableGroup2:
        target.childNodes[0].style.opacity = 1;
    }
  });

  canvas.addEventListener('dragenter', function (e) {
    const { target } = e;

    switch (target) {
      case droppableGroup1:
      case droppableGroup2:
        target.childNodes[0].style.fill = 'rgba(0,0,0,0.5)';
    }
  });
  canvas.addEventListener('dragleave', function (e) {
    const { target } = e;

    switch (target) {
      case droppableGroup1:
      case droppableGroup2:
        target.childNodes[0].style.fill = 'white';
    }
  });
  // canvas.addEventListener('dragover', function (e) {
  //   e.target.style.opacity = 0.6;
  //   gateText.style.text = 'gate dragover';
  // });
  canvas.addEventListener('drop', function (e) {
    const { target } = e;

    switch (target) {
      case canvas.document:
        break;
      case droppableGroup1:
      case droppableGroup2:
        target.childNodes[0].style.fill = 'white';
        break;
    }
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5728 Group \u4E0A\u4F7F\u7528\u62D6\u653E",en:"Use Drag'n'Drop on Group"},filename:"dragndrop-group.js",isNew:!1},{id:"dragndrop-perf",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Drag and Drop Stress Test with 10,000 Shapes
 * @see https://konvajs.org/docs/sandbox/Drag_and_Drop_Stress_Test.html
 */

const plugin = new Plugin();

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(plugin);
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
canvaskitRenderer.registerPlugin(plugin);
const webglRenderer = new WebGLRenderer();
webglRenderer.registerPlugin(plugin);
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(plugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple'];
  for (let i = 0; i < 10000; i++) {
    const circle = new Circle({
      style: {
        cx: Math.random() * 600,
        cy: Math.random() * 500,
        r: 6,
        fill: colors[i % colors.length],
        draggable: true,
      },
    });
    canvas.appendChild(circle);
  }
});

let shiftX = 0;
let shiftY = 0;
function moveAt(target, canvasX, canvasY) {
  target.setPosition(canvasX - shiftX, canvasY - shiftY);
}

canvas.addEventListener('dragstart', function (e) {
  const [x, y] = e.target.getPosition();
  shiftX = e.canvasX - x;
  shiftY = e.canvasY - y;

  moveAt(e.target, e.canvasX, e.canvasY);
});
canvas.addEventListener('drag', function (e) {
  moveAt(e.target, e.canvasX, e.canvasY);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u62D6\u653E\u6027\u80FD\u6D4B\u8BD5",en:"Drag'n'Drop Perf"},filename:"dragndrop-perf.js",isNew:!1}],icon:"",id:"dragndrop",title:{en:"Drag'n'Drop",zh:"\u62D6\u653E"},childrenKey:"demos",order:11},{demos:[{id:"box2d",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*Qw5OQLGQy_4AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Image, Line, Polygon, Rect, Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { Plugin as PluginBox2D } from '@antv/g-plugin-box2d';
import Stats from 'stats.js';

const renderer = new Renderer();
const plugin = new PluginBox2D();
renderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const ground1 = new Line({
    style: {
      x1: 0,
      y1: 200,
      x2: 50,
      y2: 400,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground1);
  const ground2 = new Line({
    style: {
      x1: 50,
      y1: 400,
      x2: 400,
      y2: 400,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground2);
  const ground3 = new Line({
    style: {
      x1: 400,
      y1: 400,
      x2: 400,
      y2: 200,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground3);

  for (let i = 0; i < 10; i++) {
    const rect = new Rect({
      style: {
        fill: '#C6E5FF',
        stroke: '#1890FF',
        lineWidth: 2,
        width: 50,
        height: 50,
        rigid: 'dynamic',
        density: 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
    });

    rect.setRotation(0, 0, 0.3, 0.7);
    canvas.appendChild(rect);
  }

  const circle = new Circle({
    style: {
      fill: '#1890FF',
      r: 50,
      rigid: 'dynamic',
      density: 10,
      restitution: 0.5,
      cx: 300,
      cy: 0,
    },
  });
  canvas.appendChild(circle);
  const text = new Text({
    id: 'text',
    style: {
      fontFamily: 'PingFang SC',
      text: 'Circle',
      fontSize: 16,
      fill: '#fFF',
      textAlign: 'center',
      textBaseline: 'middle',
    },
  });
  circle.appendChild(text);

  const polygon = new Polygon({
    style: {
      points: [
        [20, 10],
        [40, 10],
        [40 + 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
        [40, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20 - 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
      ],
      fill: '#C6E5FF',
      stroke: '#1890FF',
      lineWidth: 2,
      rigid: 'dynamic',
      density: 10,
    },
  });
  polygon.setPosition(100, 100);
  canvas.appendChild(polygon);

  const image = new Image({
    style: {
      x: 200,
      y: 100,
      width: 80,
      height: 80,
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      rigid: 'dynamic',
      density: 10,
    },
  });
  canvas.appendChild(image);

  // const slope = new Polyline({
  //   style: {
  //     points: [
  //       [0, 200],
  //       [50, 400],
  //       [400, 400],
  //       [400, 200],
  //     ],
  //     stroke: '#1890FF',
  //     lineWidth: 2,
  //     rigid: 'static', // static ground
  //   },
  // });
  // canvas.appendChild(slope);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
// const gui = new lil.GUI({ autoPlace: false });
// $wrapper.appendChild(gui.domElement);
// const forceFolder = gui.addFolder('force');
// const forceConfig = {
//   applyForce: () => {
//     plugin.applyForce(circle, [0, -100], [0, 0]);
//   },
// };
// forceFolder.add(forceConfig, 'applyForce').name('applyForce');
`,title:{zh:"\u5728 2D \u573A\u666F\u4E2D\u4F7F\u7528 Box2D \u7269\u7406\u5F15\u64CE",en:"Use Box2D in 2D scene"},filename:"box2d.js",isNew:!1},{id:"matterjs",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*Qw5OQLGQy_4AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Image, Line, Polygon, Rect } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { Plugin as PluginMatterjs } from '@antv/g-plugin-matterjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const renderer = new Renderer();
const plugin = new PluginMatterjs({
  debug: true, // \u5F00\u542F debug \u6A21\u5F0F\uFF0C\u5C06\u7269\u7406\u5F15\u64CE\u4E16\u754C\u4E5F\u6E32\u67D3\u51FA\u6765
  debugContainer: document.getElementById('container'),
  debugCanvasWidth: 600,
  debugCanvasHeight: 500,
});
renderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // const ground = new Rect({
  //   style: {
  //     fill: '#C6E5FF',
  //     width: 550,
  //     height: 10,
  //     rigid: 'static',
  //     x: 0,
  //     y: 400,
  //   },
  // });
  // canvas.appendChild(ground);

  const ground1 = new Line({
    style: {
      x1: 0,
      y1: 200,
      x2: 50,
      y2: 400,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground1);
  const ground2 = new Line({
    style: {
      x1: 50,
      y1: 400,
      x2: 400,
      y2: 400,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground2);
  const ground3 = new Line({
    style: {
      x1: 400,
      y1: 400,
      x2: 400,
      y2: 200,
      stroke: '#1890FF',
      lineWidth: 2,
      width: 1000,
      height: 10,
      rigid: 'static', // static ground
    },
  });
  canvas.appendChild(ground3);

  for (let i = 0; i < 10; i++) {
    const rect = new Rect({
      style: {
        fill: '#C6E5FF',
        stroke: '#1890FF',
        lineWidth: 2,
        width: 50,
        height: 50,
        rigid: 'dynamic',
        density: 0.1,
        x: Math.random() * 100 + 100,
        y: Math.random() * 100,
      },
    });
    canvas.appendChild(rect);
  }

  const circle = new Circle({
    style: {
      fill: '#1890FF',
      r: 50,
      rigid: 'dynamic',
      density: 0.1,
      restitution: 0.5,
      cx: 300,
      cy: 0,
    },
  });
  canvas.appendChild(circle);
  // const text = new Text({
  //   id: 'text',
  //   style: {
  //     fontFamily: 'PingFang SC',
  //     text: 'Circle',
  //     fontSize: 16,
  //     fill: '#fFF',
  //     textAlign: 'center',
  //     textBaseline: 'middle',
  //   },
  // });
  // circle.appendChild(text);

  const polygon = new Polygon({
    style: {
      points: [
        [20, 10],
        [40, 10],
        [40 + 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
        [40, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20 - 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
        // [10, 10],
        // [30, 10],
        // [30, 30],
        // [10, 30],
      ],
      fill: '#C6E5FF',
      stroke: '#1890FF',
      lineWidth: 2,
      rigid: 'dynamic',
      density: 10,
    },
  });
  polygon.setPosition(100, 100);
  canvas.appendChild(polygon);

  const image = new Image({
    style: {
      x: 200,
      y: 100,
      width: 80,
      height: 80,
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      rigid: 'dynamic',
      density: 10,
    },
  });
  canvas.appendChild(image);

  // const slope = new Polyline({
  //   style: {
  //     points: [
  //       [0, 200],
  //       [50, 400],
  //       [400, 400],
  //       [400, 200],
  //     ],
  //     stroke: '#1890FF',
  //     lineWidth: 2,
  //     rigid: 'static', // static ground
  //   },
  // });
  // canvas.appendChild(slope);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const forceFolder = gui.addFolder('force');
  const forceConfig = {
    applyForce: () => {
      plugin.applyForce(circle, [0, -10], [0, 0]);
    },
  };
  forceFolder.add(forceConfig, 'applyForce').name('applyForce to circle');
});
`,title:{zh:"\u5728 2D \u573A\u666F\u4E2D\u4F7F\u7528 MatterJS \u7269\u7406\u5F15\u64CE",en:"Use MatterJS in 2D scene"},filename:"matterjs.js",isNew:!1},{id:"physx",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import { MeshBasicMaterial, CubeGeometry, Mesh, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import { Plugin as PluginPhysX } from '@antv/g-plugin-physx';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());
renderer.registerPlugin(new PluginPhysX());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  await canvas.ready;
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
  );

  const planeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const planeMaterial = new MeshBasicMaterial(device);
  const plane = new Mesh({
    style: {
      fill: '#1890FF',
      geometry: planeGeometry,
      material: planeMaterial,
      rigid: 'static',
    },
  });
  canvas.appendChild(plane);
  plane.setPosition(300, 250, 0);

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    // wireframe: true,
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      geometry: cubeGeometry,
      material: basicMaterial,
      rigid: 'dynamic',
    },
  });

  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
})();
`,title:{zh:"\u5728 3D \u573A\u666F\u4E2D\u4F7F\u7528 PhysX \u7269\u7406\u5F15\u64CE",en:"Use PhysX in 3D scene"},filename:"physx.js",isNew:!1}],icon:"",id:"physics-engine",title:{en:"Physics Engine",zh:"\u7269\u7406\u5F15\u64CE"},childrenKey:"demos",order:11},{demos:[{id:"rough",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*d4iiS5_3YVIAAAAAAAAAAAAAARQnAQ",source:`import {
  Canvas,
  CanvasEvent,
  Circle,
  convertToPath,
  Ellipse,
  Group,
  Image,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Text,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';
import { Plugin as PluginRoughSVGRenderer } from '@antv/g-plugin-rough-svg-renderer';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import WebFont from 'webfontloader';

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(new PluginRoughSVGRenderer());

// create a canvas & use \`g-canvas\`
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  /**
  solarSystem
    |    |
    |   sun
    |
  earthOrbit
    |    |
    |  earth
    |
    moonOrbit
        |
      moon
  */
  const solarSystem = new Group({
    id: 'solarSystem',
  });
  const earthOrbit = new Group({
    id: 'earthOrbit',
  });
  const moonOrbit = new Group({
    id: 'moonOrbit',
  });

  const sun = new Circle({
    id: 'sun',
    style: {
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const earth = new Circle({
    id: 'earth',
    style: {
      r: 50,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });
  const moon = new Circle({
    id: 'moon',
    style: {
      r: 25,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  solarSystem.appendChild(sun);
  solarSystem.appendChild(earthOrbit);
  earthOrbit.appendChild(earth);
  earthOrbit.appendChild(moonOrbit);
  moonOrbit.appendChild(moon);

  solarSystem.setPosition(300, 250);
  earthOrbit.translate(100, 0);
  moonOrbit.translate(100, 0);

  canvas.appendChild(solarSystem);

  /**
   * Ellipse
   */
  const ellipse = new Ellipse({
    style: {
      cx: 150,
      cy: 100,
      rx: 25,
      ry: 15,
      fill: '#1890FF',
      stroke: '#F04864',
      strokeOpacity: 0.5,
      lineWidth: 4,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(ellipse);

  /**
   * Rect
   */
  const rect = new Rect({
    style: {
      x: 50,
      y: 50,
      width: 50,
      height: 50,
      fill: '#1890FF',
      fillOpacity: 0.5,
      stroke: '#F04864',
      lineWidth: 4,
      bowing: 4,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(rect);
  rect.addEventListener('pointerenter', function () {
    rect.style.fill = 'yellow';
  });
  rect.addEventListener('pointerleave', function () {
    rect.style.fill = '#1890FF';
  });

  /**
   * Line
   */
  const line = new Line({
    style: {
      x1: 50,
      y1: 120,
      x2: 50,
      y2: 200,
      stroke: '#F04864',
      lineWidth: 4,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(line);

  /**
   * Polyline
   */
  const polyline = new Polyline({
    style: {
      points: [
        [50, 250],
        [50, 300],
        [100, 300],
        [100, 350],
      ],
      stroke: '#F04864',
      lineWidth: 4,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(polyline);

  /**
   * Polygon
   */
  const polygon = new Polygon({
    style: {
      points: [
        [50, 400],
        [100, 400],
        [100, 450],
      ],
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(polygon);

  /**
   * Path
   */
  const rectPath = convertToPath(
    new Rect({
      style: {
        x: 100,
        y: 0,
        width: 200,
        height: 100,
        transformOrigin: 'center',
      },
    }),
  );
  const starPath = new Path({
    style: {
      path: 'M301.113,12.011l99.25,179.996l201.864,38.778L461.706,380.808l25.508,203.958l-186.101-87.287L115.01,584.766l25.507-203.958L0,230.785l201.86-38.778L301.113,12.011',
    },
  });
  starPath.translate(200, 0);
  starPath.scale(0.2);
  const pathG = new Path({
    style: {
      path: rectPath,
      lineWidth: 2,
      cursor: 'pointer',
    },
  });
  canvas.appendChild(pathG);
  pathG.animate(
    [
      { path: rectPath, stroke: '#F04864', fill: 'blue' },
      { path: convertToPath(starPath), stroke: 'blue', fill: '#F04864' },
    ],
    {
      duration: 2500,
      easing: 'ease',
      iterations: Infinity,
      direction: 'alternate',
    },
  );
  pathG.translate(300, 0);

  /**
   * Text
   */
  WebFont.load({
    google: {
      families: ['Gaegu'],
    },
    active: () => {
      const text = new Text({
        style: {
          x: 100,
          y: 450,
          fontFamily: 'Gaegu',
          text: 'Almost before we knew it, we had left the ground.',
          fontSize: 30,
          fill: '#1890FF',
          stroke: '#F04864',
          lineWidth: 5,
          cursor: 'pointer',
        },
      });
      canvas.appendChild(text);
    },
  });

  const image = new Image({
    style: {
      x: 90,
      y: 130,
      width: 100,
      height: 100,
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    },
  });
  canvas.appendChild(image);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }

    solarSystem.rotateLocal(1);
    earthOrbit.rotateLocal(2);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder.add(rendererConfig, 'renderer', ['canvas', 'svg']).onChange((renderer) => {
    canvas.setRenderer(renderer === 'canvas' ? canvasRenderer : svgRenderer);
  });
  rendererFolder.open();

  const sunFolder = gui.addFolder('sun');
  const sunConfig = {
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    visibility: true,
    'z-index': 0,
    opacity: 1,
    shadowColor: '#fff',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    fillStyle: 'hachure',
    fillWeight: 4 / 2,
    hachureAngle: -41,
    hachureGap: 4 * 4,
  };
  sunFolder.add(sunConfig, 'r', 50, 200).onChange((r) => {
    sun.style.r = r;
  });
  sunFolder.add(sunConfig, 'opacity', 0, 1).onChange((opacity) => {
    sun.style.opacity = opacity;
  });
  sunFolder.addColor(sunConfig, 'fill').onChange((color) => {
    sun.style.fill = color;
  });
  sunFolder.addColor(sunConfig, 'stroke').onChange((color) => {
    sun.style.stroke = color;
  });
  sunFolder.addColor(sunConfig, 'shadowColor').onChange((color) => {
    sun.style.shadowColor = color;
  });
  sunFolder.add(sunConfig, 'shadowBlur', 0, 100).onChange((shadowBlur) => {
    sun.style.shadowBlur = shadowBlur;
  });
  sunFolder.add(sunConfig, 'shadowOffsetX', -50, 50).onChange((shadowOffsetX) => {
    sun.style.shadowOffsetX = shadowOffsetX;
  });
  sunFolder.add(sunConfig, 'shadowOffsetY', -50, 50).onChange((shadowOffsetY) => {
    sun.style.shadowOffsetY = shadowOffsetY;
  });
  sunFolder.add(sunConfig, 'lineWidth', 1, 20).onChange((lineWidth) => {
    sun.style.lineWidth = lineWidth;
  });
  sunFolder.add(sunConfig, 'visibility').onChange((visible) => {
    if (visible) {
      sun.show();
    } else {
      sun.hide();
    }
  });
  sunFolder.add(sunConfig, 'z-index', 0, 100).onChange((zIndex) => {
    sun.setZIndex(zIndex);
  });
  sunFolder
    .add(sunConfig, 'fillStyle', [
      'hachure',
      'solid',
      'zigzag',
      'cross-hatch',
      'dots',
      'dashed',
      'zigzag-line',
    ])
    .onChange((fillStyle) => {
      sun.style.fillStyle = fillStyle;
    });
  sunFolder.add(sunConfig, 'fillWeight', 0, 20).onChange((fillWeight) => {
    sun.style.fillWeight = fillWeight;
  });
  sunFolder.add(sunConfig, 'hachureAngle', -50, 50).onChange((hachureAngle) => {
    sun.style.hachureAngle = hachureAngle;
  });
  sunFolder.add(sunConfig, 'hachureGap', 0, 20).onChange((hachureGap) => {
    sun.style.hachureAngle = hachureGap;
  });
  sunFolder.open();
});
`,title:{zh:"\u4F7F\u7528 rough.js \u624B\u7ED8\u98CE\u683C\u6E32\u67D3",en:"Use rough.js"},filename:"rough.js",isNew:!1},{id:"rough-options",screenshot:"https://gw.alipayobjects.com/zos/raptor/1668150000221/Nov-11-2022%25252014-59-41.gif",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';
import { Plugin as PluginRoughSVGRenderer } from '@antv/g-plugin-rough-svg-renderer';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(new PluginRoughSVGRenderer());

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const circle = new Circle({
    style: {
      cx: 200,
      cy: 200,
      r: 100,
      fill: '#1890FF',
      stroke: '#F04864',
      lineWidth: 4,
    },
  });

  canvas.appendChild(circle);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder.add(rendererConfig, 'renderer', ['canvas', 'svg']).onChange((renderer) => {
    canvas.setRenderer(renderer === 'canvas' ? canvasRenderer : svgRenderer);
  });
  rendererFolder.open();

  const folder = gui.addFolder('rough-options');
  const config = {
    roughness: 1,
    bowing: 1,
    fillStyle: 'hachure',
    fillWeight: 4 / 2,
    hachureAngle: -41,
    hachureGap: 4 * 4,
    curveStepCount: 9,
    curveFitting: 0.95,
    simplification: 0,
    lineDash: 0,
    lineDashOffset: 0,
    fillLineDash: 0,
    fillLineDashOffset: 0,
    disableMultiStroke: false,
    disableMultiStrokeFill: false,
    dashOffset: 4 * 4,
    dashGap: 4 * 4,
    zigzagOffset: 4 * 4,
  };
  folder.add(config, 'roughness', 0, 10).onChange((roughness) => {
    circle.style.roughness = roughness;
  });
  folder.add(config, 'bowing', 0, 10).onChange((bowing) => {
    circle.style.bowing = bowing;
  });
  folder
    .add(config, 'fillStyle', [
      'hachure',
      'solid',
      'zigzag',
      'cross-hatch',
      'dots',
      'dashed',
      'zigzag-line',
    ])
    .onChange((fillStyle) => {
      circle.style.fillStyle = fillStyle;
    });
  folder.add(config, 'fillWeight', 0, 20).onChange((fillWeight) => {
    circle.style.fillWeight = fillWeight;
  });
  folder.add(config, 'hachureAngle', -50, 50).onChange((hachureAngle) => {
    circle.style.hachureAngle = hachureAngle;
  });
  folder.add(config, 'hachureGap', 0, 20).onChange((hachureGap) => {
    circle.style.hachureGap = hachureGap;
  });
  folder.add(config, 'curveStepCount', 0, 20).onChange((curveStepCount) => {
    circle.style.curveStepCount = curveStepCount;
  });
  folder.add(config, 'curveFitting', 0, 1).onChange((curveFitting) => {
    circle.style.curveFitting = curveFitting;
  });
  folder.add(config, 'lineDash', 0, 20).onChange((lineDash) => {
    circle.style.lineDash = [lineDash, lineDash];
  });
  folder.add(config, 'lineDashOffset', 0, 20).onChange((lineDashOffset) => {
    circle.style.lineDashOffset = lineDashOffset;
  });
  folder.add(config, 'fillLineDash', 0, 20).onChange((fillLineDash) => {
    circle.style.fillLineDash = [fillLineDash, fillLineDash];
  });
  folder.add(config, 'fillLineDashOffset', 0, 20).onChange((fillLineDashOffset) => {
    circle.style.fillLineDashOffset = fillLineDashOffset;
  });
  folder.add(config, 'disableMultiStroke').onChange((disableMultiStroke) => {
    circle.style.disableMultiStroke = disableMultiStroke;
  });
  folder.add(config, 'disableMultiStrokeFill').onChange((disableMultiStrokeFill) => {
    circle.style.disableMultiStrokeFill = disableMultiStrokeFill;
  });
  folder.add(config, 'simplification', 0, 1).onChange((simplification) => {
    circle.style.simplification = simplification;
  });
  folder.add(config, 'dashOffset', 0, 30).onChange((dashOffset) => {
    circle.style.dashOffset = dashOffset;
  });
  folder.add(config, 'dashGap', 0, 30).onChange((dashGap) => {
    circle.style.dashGap = dashGap;
  });
  folder.add(config, 'zigzagOffset', 0, 30).onChange((zigzagOffset) => {
    circle.style.zigzagOffset = zigzagOffset;
  });

  folder.open();
});
`,title:{zh:"rough.js \u53C2\u6570",en:"rough.js options"},filename:"rough-options.js",isNew:!1},{id:"rough-d3-barchart",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*j_F5Saag18oAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';
import { Plugin as PluginRoughSVGRenderer } from '@antv/g-plugin-rough-svg-renderer';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import WebFont from 'webfontloader';

/**
 * Ported from fullstack-d3, use stylized rendering with rough.js.
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(new PluginRoughSVGRenderer());
const webglRenderer = new WebGLRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  WebFont.load({
    google: {
      families: ['Gaegu'],
    },
    active: () => {
      drawBars();
    },
  });

  const drawBars = async () => {
    // 1. Access data
    const dataset = await d3.json(
      'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
    );
    const metricAccessor = (d) => d.humidity;
    const yAccessor = (d) => d.length;

    // 2. Create chart dimensions
    const width = 600;
    let dimensions = {
      width: width,
      height: width * 0.6,
      margin: {
        top: 30,
        right: 10,
        bottom: 50,
        left: 50,
      },
    };
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    // 3. Draw canvas
    const wrapper = d3.select(
      canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
    );

    const bounds = wrapper
      .append('g')
      .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

    // 4. Create scales

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(dataset, metricAccessor))
      .range([0, dimensions.boundedWidth])
      .nice();

    const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

    const bins = binsGenerator(dataset);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bins, yAccessor)])
      .range([dimensions.boundedHeight, 0])
      .nice();

    // 5. Draw data
    const binsGroup = bounds.append('g');
    const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

    const barPadding = 1;
    const barRects = binGroups
      .append('rect')
      .attr('x', (d) => xScale(d.x0) + barPadding / 2)
      .attr('y', (d) => yScale(yAccessor(d)))
      .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
      .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
      .attr('fill', 'cornflowerblue')
      .on('mouseenter', function (e) {
        d3.select(e.target).attr('fill', 'red');
      })
      .on('mouseleave', function (e) {
        d3.select(e.target).attr('fill', 'cornflowerblue');
      });

    const barText = binGroups
      .filter(yAccessor)
      .append('text')
      .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
      .attr('y', (d) => yScale(yAccessor(d)) - 5)
      .text(yAccessor)
      .attr('fill', 'darkgrey')
      .style('text-anchor', 'middle')
      .style('font-family', 'Gaegu')
      .style('font-size', '12px');

    const mean = d3.mean(dataset, metricAccessor);
    const meanLine = bounds
      .append('line')
      .attr('x1', xScale(mean))
      .attr('x2', xScale(mean))
      .attr('y1', -15)
      .attr('y2', dimensions.boundedHeight)
      .attr('stroke-width', 1)
      .attr('stroke', 'maroon')
      .attr('stroke-dasharray', '2px 4px');

    const meanLabel = bounds
      .append('text')
      .attr('x', xScale(mean))
      .attr('y', -20)
      .text('mean')
      .attr('fill', 'maroon')
      .style('font-family', 'Gaegu')
      .style('font-size', '12px')
      .style('text-anchor', 'middle');

    // 6. Draw peripherals
    const xAxisGenerator = d3.axisBottom().scale(xScale);

    const xAxis = bounds
      .append('g')
      .call(xAxisGenerator)
      .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
      .style('font-family', 'Gaegu')
      .attr('fill', 'black');

    const xAxisLabel = xAxis
      .append('text')
      .attr('x', dimensions.boundedWidth / 2)
      .attr('y', dimensions.margin.bottom - 10)
      .attr('fill', 'black')
      .style('font-family', 'Gaegu')
      .style('font-size', '10px')
      .text('Humidity')
      .style('text-transform', 'capitalize');
  };
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u624B\u7ED8\u98CE\u683C\u7684 D3 \u6761\u5F62\u56FE",en:"Use rough.js and D3 barchart"},filename:"rough-d3-barchart.js",isNew:!1}],icon:"",id:"rough",title:{en:"Rough",zh:"\u624B\u7ED8\u98CE\u683C"},childrenKey:"demos",order:11},{demos:[{id:"yoga-container",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*B_DmQ6lzHcIAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as PluginYoga } from '@antv/g-plugin-yoga';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

const plugin = new PluginYoga();

canvasRenderer.registerPlugin(plugin);
webglRenderer.registerPlugin(plugin);
svgRenderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // you can use Group if you want this container invisible
  const root = new Rect({
    id: 'root',
    style: {
      fill: '#C6E5FF',
      width: 500,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      x: 50,
      y: 50,
    },
  });
  canvas.appendChild(root);

  const node1 = new Rect({
    id: 'node1',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'center'
    },
  });
  node1.appendChild(
    new Text({
      id: 'node1-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '1',
      },
    }),
  );
  const node2 = new Rect({
    id: 'node2',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  node2.appendChild(
    new Text({
      id: 'node2-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '2',
      },
    }),
  );
  root.appendChild(node1);
  root.appendChild(node2);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();

  const layoutFolder = gui.addFolder('Layout');
  const flexFolder = gui.addFolder('Flex');
  const config = {
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    width: 500,
    height: 300,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    'paddingTop(percent)': 0,
    'paddingRight(percent)': 0,
    'paddingBottom(percent)': 0,
    'paddingLeft(percent)': 0,
    appendChild: () => {
      const num = root.children.length;
      const id = num + 1;
      const rect = new Rect({
        id: \`node\${id}\`,
        style: {
          fill: 'white',
          stroke: 'grey',
          lineWidth: 1,
          opacity: 0.8,
          width: 100,
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
      const text = new Text({
        id: \`node\${id}-text\`,
        style: {
          fontFamily: 'PingFang SC',
          fontSize: 32,
          fill: '#1890FF',
          text: \`\${id}\`,
        },
      });
      rect.appendChild(text);
      root.appendChild(rect);
    },
    removeChild: () => {
      const num = root.children.length;
      if (num) {
        root.removeChild(root.children[num - 1]);
      }
    },
  };
  flexFolder
    .add(config, 'flexDirection', ['row', 'column', 'row-reverse', 'column-reverse'])
    .onChange((flexDirection) => {
      root.style.flexDirection = flexDirection;
    });
  flexFolder.add(config, 'flexWrap', ['wrap', 'no-wrap', 'wrap-reverse']).onChange((flexWrap) => {
    root.style.flexWrap = flexWrap;
  });
  layoutFolder
    .add(config, 'justifyContent', [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ])
    .onChange((justifyContent) => {
      root.style.justifyContent = justifyContent;
    });
  layoutFolder
    .add(config, 'alignItems', [
      'stretch',
      'auto',
      'baseline',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
    ])
    .onChange((alignItems) => {
      root.style.alignItems = alignItems;
    });
  layoutFolder
    .add(config, 'alignContent', [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
    ])
    .onChange((alignContent) => {
      root.style.alignContent = alignContent;
    });
  layoutFolder.add(config, 'width', 200, 600).onChange((width) => {
    root.style.width = width;
  });
  layoutFolder.add(config, 'height', 200, 500).onChange((height) => {
    root.style.height = height;
  });
  layoutFolder.add(config, 'paddingTop', 0, 50).onChange((paddingTop) => {
    root.style.paddingTop = paddingTop;
  });
  layoutFolder.add(config, 'paddingRight', 0, 50).onChange((paddingRight) => {
    root.style.paddingRight = paddingRight;
  });
  layoutFolder.add(config, 'paddingBottom', 0, 50).onChange((paddingBottom) => {
    root.style.paddingBottom = paddingBottom;
  });
  layoutFolder.add(config, 'paddingLeft', 0, 50).onChange((paddingLeft) => {
    root.style.paddingLeft = paddingLeft;
  });
  layoutFolder.add(config, 'paddingTop(percent)', 0, 100).onChange((paddingTop) => {
    root.style.paddingTop = \`\${paddingTop}%\`;
  });
  layoutFolder.add(config, 'paddingRight(percent)', 0, 100).onChange((paddingRight) => {
    root.style.paddingRight = \`\${paddingRight}%\`;
  });
  layoutFolder.add(config, 'paddingBottom(percent)', 0, 100).onChange((paddingBottom) => {
    root.style.paddingBottom = \`\${paddingBottom}%\`;
  });
  layoutFolder.add(config, 'paddingLeft(percent)', 0, 100).onChange((paddingLeft) => {
    root.style.paddingLeft = \`\${paddingLeft}%\`;
  });
  layoutFolder.add(config, 'appendChild').name('appendChild');
  layoutFolder.add(config, 'removeChild').name('removeChild');
});
`,title:{zh:"\u4F7F\u7528 Yoga \u6392\u7248\u5F15\u64CE - \u5BB9\u5668\u914D\u7F6E",en:"Use Yoga layout engine - container"},filename:"yoga-container.js",isNew:!1},{id:"yoga-child",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*2zZaS6PlrOcAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Image, Polygon, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginYoga } from '@antv/g-plugin-yoga';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const plugin = new PluginYoga();
canvasRenderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const root = new Rect({
    id: 'root',
    style: {
      fill: '#C6E5FF',
      width: 500,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      x: 50,
      y: 50,
    },
  });
  canvas.appendChild(root);

  const node1 = new Rect({
    id: 'node1',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  node1.appendChild(
    new Text({
      id: 'node1-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '1',
      },
    }),
  );
  const node2 = new Rect({
    id: 'node2',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  node2.appendChild(
    new Text({
      id: 'node2-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '2',
      },
    }),
  );
  const image = new Image({
    style: {
      width: 100,
      height: 100,
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    },
  });
  const polygon = new Polygon({
    style: {
      points: [
        [20, 10],
        [40, 10],
        [40 + 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
        [40, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20, 10 + 20 * Math.cos(Math.PI / 6) * 2],
        [20 - 20 * Math.sin(Math.PI / 6), 10 + 20 * Math.cos(Math.PI / 6)],
      ],
      fill: '#C6E5FF',
      stroke: '#1890FF',
      lineWidth: 2,
    },
  });
  const circle = new Circle({
    style: {
      r: 20,
      fill: '#1890FF',
    },
  });

  root.appendChild(node1);
  root.appendChild(node2);
  root.appendChild(image);
  root.appendChild(polygon);
  root.appendChild(circle);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const layoutFolder = gui.addFolder("Node1's Layout");
  // const flexFolder = gui.addFolder('Flex');
  const config = {
    // flexDirection: 'row',
    // flexWrap: 'no-wrap',
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    'top(percent)': 0,
    'right(percent)': 0,
    'bottom(percent)': 0,
    'left(percent)': 0,
    width: 100,
    height: 100,
    'width(percent)': 0,
    'height(percent)': 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    'marginTop(percent)': 0,
    'marginRight(percent)': 0,
    'marginBottom(percent)': 0,
    'marginLeft(percent)': 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  };
  layoutFolder.add(config, 'position', ['relative', 'absolute']).onChange((position) => {
    node1.style.position = position;
  });
  layoutFolder.add(config, 'top', -50, 50).onChange((top) => {
    node1.style.top = top;
  });
  layoutFolder.add(config, 'right', -50, 50).onChange((right) => {
    node1.style.right = right;
  });
  layoutFolder.add(config, 'bottom', -50, 50).onChange((bottom) => {
    node1.style.bottom = bottom;
  });
  layoutFolder.add(config, 'left', -50, 50).onChange((left) => {
    node1.style.left = left;
  });
  layoutFolder.add(config, 'top(percent)', -100, 100).onChange((topPercent) => {
    node1.style.top = \`\${topPercent}%\`;
  });
  layoutFolder.add(config, 'right(percent)', -100, 100).onChange((rightPercent) => {
    node1.style.right = \`\${rightPercent}%\`;
  });
  layoutFolder.add(config, 'bottom(percent)', -100, 100).onChange((bottomPercent) => {
    node1.style.bottom = \`\${bottomPercent}%\`;
  });
  layoutFolder.add(config, 'left(percent)', -100, 100).onChange((leftPercent) => {
    node1.style.left = \`\${leftPercent}%\`;
  });
  layoutFolder
    .add(config, 'justifyContent', [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ])
    .onChange((justifyContent) => {
      node1.style.justifyContent = justifyContent;
    });
  layoutFolder
    .add(config, 'alignItems', [
      'stretch',
      'auto',
      'baseline',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
    ])
    .onChange((alignItems) => {
      node1.style.alignItems = alignItems;
    });
  layoutFolder.add(config, 'width', 50, 200).onChange((width) => {
    node1.style.width = width;
  });
  layoutFolder.add(config, 'height', 50, 200).onChange((height) => {
    node1.style.height = height;
  });
  layoutFolder.add(config, 'width(percent)', 0, 100).onChange((widthPercent) => {
    node1.style.width = \`\${widthPercent}%\`;
  });
  layoutFolder.add(config, 'height(percent)', 0, 100).onChange((heightPercent) => {
    node1.style.height = \`\${heightPercent}%\`;
  });
  layoutFolder.add(config, 'marginTop', 0, 50).onChange((marginTop) => {
    node1.style.marginTop = marginTop;
  });
  layoutFolder.add(config, 'marginRight', 0, 50).onChange((marginRight) => {
    node1.style.marginRight = marginRight;
  });
  layoutFolder.add(config, 'marginBottom', 0, 50).onChange((marginBottom) => {
    node1.style.marginBottom = marginBottom;
  });
  layoutFolder.add(config, 'marginLeft', 0, 50).onChange((marginLeft) => {
    node1.style.marginLeft = marginLeft;
  });
  layoutFolder.add(config, 'marginTop(percent)', 0, 100).onChange((marginTop) => {
    node1.style.marginTop = \`\${marginTop}%\`;
  });
  layoutFolder.add(config, 'marginRight(percent)', 0, 100).onChange((marginRight) => {
    node1.style.marginRight = \`\${marginRight}%\`;
  });
  layoutFolder.add(config, 'marginBottom(percent)', 0, 100).onChange((marginBottom) => {
    node1.style.marginBottom = \`\${marginBottom}%\`;
  });
  layoutFolder.add(config, 'marginLeft(percent)', 0, 100).onChange((marginLeft) => {
    node1.style.marginLeft = \`\${marginLeft}%\`;
  });
  layoutFolder.add(config, 'paddingTop', 0, 50).onChange((paddingTop) => {
    node1.style.paddingTop = paddingTop;
  });
  layoutFolder.add(config, 'paddingRight', 0, 50).onChange((paddingRight) => {
    node1.style.paddingRight = paddingRight;
  });
  layoutFolder.add(config, 'paddingBottom', 0, 50).onChange((paddingBottom) => {
    node1.style.paddingBottom = paddingBottom;
  });
  layoutFolder.add(config, 'paddingLeft', 0, 50).onChange((paddingLeft) => {
    node1.style.paddingLeft = paddingLeft;
  });
});
`,title:{zh:"\u4F7F\u7528 Yoga \u6392\u7248\u5F15\u64CE - \u5B50\u5143\u7D20\u914D\u7F6E",en:"Use Yoga layout engine - child element"},filename:"yoga-child.js",isNew:!1},{id:"yoga-available-space",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*fbvlTpdHR0IAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginYoga } from '@antv/g-plugin-yoga';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const plugin = new PluginYoga();
canvasRenderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const root = new Rect({
    id: 'root',
    style: {
      fill: '#C6E5FF',
      width: 500,
      height: 300,
      display: 'flex',
      x: 50,
      y: 50,
    },
  });
  canvas.appendChild(root);

  const node1 = new Rect({
    id: 'node1',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  });
  node1.appendChild(
    new Text({
      id: 'node1-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '1',
      },
    }),
  );
  const node2 = new Rect({
    id: 'node2',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  });
  node2.appendChild(
    new Text({
      id: 'node2-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '2',
      },
    }),
  );

  root.appendChild(node1);
  root.appendChild(node2);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const flexFolder1 = gui.addFolder("Node1's Flex");
  const config1 = {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 0,
    minWidth: 0,
    setMaxWidthNaN: () => {
      node1.style.maxWidth = NaN;
    },
    setMinWidthNaN: () => {
      node1.style.minWidth = NaN;
    },
  };
  flexFolder1.add(config1, 'flexGrow', 0, 1).onChange((flexGrow) => {
    node1.style.flexGrow = flexGrow;
  });
  flexFolder1.add(config1, 'flexShrink', 0, 1).onChange((flexShrink) => {
    node1.style.flexShrink = flexShrink;
  });
  flexFolder1.add(config1, 'maxWidth', 0, 300).onChange((maxWidth) => {
    node1.style.maxWidth = maxWidth;
  });
  flexFolder1.add(config1, 'setMaxWidthNaN').name('set maxWidth to NaN');
  flexFolder1.add(config1, 'minWidth', 0, 300).onChange((minWidth) => {
    node1.style.minWidth = minWidth;
  });
  flexFolder1.add(config1, 'setMinWidthNaN').name('set minWidth to NaN');

  const flexFolder2 = gui.addFolder("Node2's Flex");
  const config2 = {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 0,
    minWidth: 0,
    setMaxWidthNaN: () => {
      node2.style.maxWidth = NaN;
    },
    setMinWidthNaN: () => {
      node2.style.minWidth = NaN;
    },
  };
  flexFolder2.add(config2, 'flexGrow', 0, 1).onChange((flexGrow) => {
    node2.style.flexGrow = flexGrow;
  });
  flexFolder2.add(config2, 'flexShrink', 0, 1).onChange((flexShrink) => {
    node2.style.flexShrink = flexShrink;
  });
  flexFolder2.add(config2, 'maxWidth', 0, 300).onChange((maxWidth) => {
    node2.style.maxWidth = maxWidth;
  });
  flexFolder2.add(config2, 'setMaxWidthNaN').name('set maxWidth to NaN');
  flexFolder2.add(config2, 'minWidth', 0, 300).onChange((minWidth) => {
    node2.style.minWidth = minWidth;
  });
  flexFolder2.add(config2, 'setMinWidthNaN').name('set minWidth to NaN');

  const layoutConfig = {
    width: 500,
    height: 300,
  };
  const layoutFolder = gui.addFolder("Container's Layout");
  layoutFolder.add(layoutConfig, 'width', 100, 600).onChange((width) => {
    root.style.width = width;
  });
  layoutFolder.add(layoutConfig, 'height', 200, 500).onChange((height) => {
    root.style.height = height;
  });
});
`,title:{zh:"\u4F7F\u7528 Yoga \u6392\u7248\u5F15\u64CE - \u53EF\u7528\u7A7A\u95F4",en:"Use Yoga layout engine - available space"},filename:"yoga-available-space.js",isNew:!1},{id:"yoga-text",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*IH1fSJN9fsMAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Group, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginYoga } from '@antv/g-plugin-yoga';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const plugin = new PluginYoga();
canvasRenderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const root = new Rect({
    id: 'root',
    style: {
      fill: '#C6E5FF',
      width: 500,
      height: 300,
      x: 50,
      y: 50,
      display: 'flex',
      flexDirection: 'column',
      padding: [10, 10, 10, 10],
    },
  });
  canvas.appendChild(root);

  const topPanel = new Rect({
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 60,
      padding: [10, 10, 10, 10],
      marginBottom: 10,
    },
  });
  topPanel.appendChild(
    new Text({
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 24,
        fill: '#1890FF',
        text: '1',
      },
    }),
  );
  const bottomPanel = new Group({
    style: {
      display: 'flex',
      width: '100%',
      flexGrow: 1,
    },
  });
  const leftPanel = new Rect({
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      display: 'flex',
      height: '100%',
      flexGrow: 1,
      marginRight: 10,
      padding: [10, 10, 10, 10],
    },
  });
  const leftPanelText = new Text({
    style: {
      fontFamily: 'PingFang SC',
      fontSize: 32,
      fill: '#1890FF',
      text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u5B57\uFF0C\u8FD9\u662F\u6D4B\u8BD5\u6587\u5B57\uFF0C\u8FD9\u662F\u6D4B\u8BD5\u6587\u5B57\uFF0C\u8FD9\u662F\u6D4B\u8BD5\u6587\u5B57',
      wordWrap: true,
      width: '100%',
    },
  });
  leftPanel.appendChild(leftPanelText);
  const rightPanel = new Group({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 100,
      height: '100%',
    },
  });
  const node1 = new Rect({
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      height: 100,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
  });
  node1.appendChild(
    new Text({
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '2',
      },
    }),
  );
  const node2 = new Rect({
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  node2.appendChild(
    new Text({
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '3',
      },
    }),
  );
  const circle = new Circle({
    style: {
      r: 20,
      fill: '#1890FF',
      marginTop: 10,
    },
  });

  root.appendChild(topPanel);
  root.appendChild(bottomPanel);
  bottomPanel.appendChild(leftPanel);
  bottomPanel.appendChild(rightPanel);
  rightPanel.appendChild(node1);
  rightPanel.appendChild(node2);
  rightPanel.appendChild(circle);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const layoutConfig = {
    width: 500,
    height: 300,
  };
  const layoutFolder = gui.addFolder("Container's Layout");
  layoutFolder.add(layoutConfig, 'width', 100, 600).onChange((width) => {
    root.style.width = width;
  });
  layoutFolder.add(layoutConfig, 'height', 200, 500).onChange((height) => {
    root.style.height = height;
  });

  const leftConfig = {
    'width(percent)': 100,
  };
  const leftFolder = gui.addFolder("LeftPanel's Layout");
  leftFolder.add(leftConfig, 'width(percent)', 0, 100).onChange((width) => {
    leftPanelText.style.width = \`\${width}%\`;
  });
});
`,title:{zh:"\u4F7F\u7528 Yoga \u6392\u7248\u5F15\u64CE - \u6587\u5B57\u6392\u7248",en:"Use Yoga layout engine - text"},filename:"yoga-text.js",isNew:!1},{id:"yoga-animation",source:`import { Canvas, CanvasEvent, Rect, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin as PluginYoga } from '@antv/g-plugin-yoga';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

const canvasRenderer = new CanvasRenderer();
const plugin = new PluginYoga();
canvasRenderer.registerPlugin(plugin);

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const root = new Rect({
    id: 'root',
    style: {
      fill: '#C6E5FF',
      width: 500,
      height: 300,
      display: 'flex',
      x: 50,
      y: 50,
    },
  });
  canvas.appendChild(root);

  const node1 = new Rect({
    id: 'node1',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  node1.appendChild(
    new Text({
      id: 'node1-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '1',
      },
    }),
  );
  const node2 = new Rect({
    id: 'node2',
    style: {
      fill: 'white',
      stroke: 'grey',
      lineWidth: 1,
      opacity: 0.8,
      width: 100,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  });
  node2.appendChild(
    new Text({
      id: 'node2-text',
      style: {
        fontFamily: 'PingFang SC',
        fontSize: 32,
        fill: '#1890FF',
        text: '2',
      },
    }),
  );

  root.appendChild(node1);
  root.appendChild(node2);

  node1.animate(
    [
      { top: 0, left: 0, width: 100, marginAll: 0, paddingLeft: 0 },
      { top: 100, left: 100, width: 200, marginAll: 20, paddingLeft: 50 },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fill: 'both',
      iterations: Infinity,
      direction: 'alternate-reverse',
    },
  );

  node2.animate([{ flexGrow: 1 }, { flexGrow: 0.5 }], {
    duration: 1000,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fill: 'both',
    iterations: Infinity,
    direction: 'alternate-reverse',
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const layoutConfig = {
    width: 500,
    height: 300,
  };
  const layoutFolder = gui.addFolder("Container's Layout");
  layoutFolder.add(layoutConfig, 'width', 100, 600).onChange((width) => {
    root.style.width = width;
  });
  layoutFolder.add(layoutConfig, 'height', 200, 500).onChange((height) => {
    root.style.height = height;
  });
});
`,title:{zh:"\u4F7F\u7528 Yoga \u6392\u7248\u5F15\u64CE - \u5BF9\u5C5E\u6027\u5E94\u7528\u52A8\u753B",en:"Use Yoga layout engine - use animation"},filename:"yoga-animation.js",isNew:!1}],icon:"",id:"yoga",title:{en:"Yoga Layout Engine",zh:"Yoga \u6392\u7248\u5F15\u64CE"},childrenKey:"demos",order:11},{demos:[{id:"css-select",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Plugin } from '@antv/g-plugin-css-select';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
solarSystem
   |    |
   |   sun
   |
 earthOrbit
   |    |
   |  earth
   |
  moonOrbit
      |
     moon
 */

// create a canvas renderer
const canvasRenderer = new CanvasRenderer();
// register CSS select plugin
canvasRenderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const solarSystem = new Group({
  id: 'solarSystem',
});
const earthOrbit = new Group({
  id: 'earthOrbit',
});
const moonOrbit = new Group({
  id: 'moonOrbit',
});

const sun = new Circle({
  id: 'sun',
  className: 'classname-sun',
  style: {
    r: 100,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const earth = new Circle({
  id: 'earth',
  className: 'classname-earth',
  style: {
    r: 50,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const moon = new Circle({
  id: 'moon',
  className: 'classname-moon',
  style: {
    r: 25,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

solarSystem.appendChild(sun);
solarSystem.appendChild(earthOrbit);
earthOrbit.appendChild(earth);
earthOrbit.appendChild(moonOrbit);
moonOrbit.appendChild(moon);

solarSystem.setPosition(300, 250);
earthOrbit.translate(100, 0);
moonOrbit.translate(100, 0);

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(solarSystem);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false, width: 400 });
$wrapper.appendChild(gui.domElement);
const selectorFolder = gui.addFolder('CSS Selector');
const selectorConfig = {
  getElementById: 'sun',
  getElementsByClassName: 'classname-sun',
  getElementsByTagName: 'circle',
  querySelector: '[r=100]',
  querySelectorAll: '[r=100]',
};
const clear = () => {
  solarSystem.forEach((child) => {
    child.setAttribute('fill', '#1890FF');
  });
};
selectorFolder.add(selectorConfig, 'getElementById', ['sun', 'earth', 'moon']).onChange((id) => {
  clear();
  const target = solarSystem.getElementById(id);
  target.setAttribute('fill', '#F04864');
});
selectorFolder
  .add(selectorConfig, 'getElementsByClassName', [
    'classname-sun',
    'classname-earth',
    'classname-moon',
  ])
  .onChange((className) => {
    clear();
    const targets = solarSystem.getElementsByClassName(className);
    targets.forEach((target) => {
      target.setAttribute('fill', '#F04864');
    });
  });
selectorFolder
  .add(selectorConfig, 'getElementsByTagName', ['circle', 'rect'])
  .onChange((className) => {
    clear();
    const targets = solarSystem.getElementsByTagName(className);
    targets.forEach((target) => {
      target.setAttribute('fill', '#F04864');
    });
  });
selectorFolder
  .add(selectorConfig, 'querySelector', ['[r=100]', '[r=50]', '[r=25]'])
  .onChange((selector) => {
    clear();
    const target = solarSystem.querySelector(selector);
    target.setAttribute('fill', '#F04864');
  });
selectorFolder
  .add(selectorConfig, 'querySelectorAll', ['[r=100]', '[r=50]', '[r=25]'])
  .onChange((selector) => {
    clear();
    const targets = solarSystem.querySelectorAll(selector);
    targets.forEach((target) => {
      target.setAttribute('fill', '#F04864');
    });
  });
selectorFolder.open();
`,title:{zh:"CSS \u9009\u62E9\u5668\u63D2\u4EF6",en:"CSS Selector Plugin"},filename:"css-select.js",isNew:!1},{id:"orbit-control",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*1u8eRKMbVX8AAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, CameraType } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import { MeshBasicMaterial, CubeGeometry, Mesh, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  await canvas.ready;
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
  );

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    // wireframe: true,
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: cubeGeometry,
      material: basicMaterial,
    },
  });

  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);

  const camera = canvas.getCamera();

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    cube.rotate(0, 1, 0);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const cameraFolder = gui.addFolder('camera');
  const cameraConfig = {
    type: 'Exploring',
  };

  const types = ['Orbiting', 'Exploring', 'Tracking'];
  const enums = [CameraType.ORBITING, CameraType.EXPLORING, CameraType.TRACKING];
  cameraFolder.add(cameraConfig, 'type', types).onChange((type) => {
    const index = types.indexOf(type);
    camera.setType(enums[index]);
  });
})();
`,title:{zh:"\u4F7F\u7528 Orbit Control",en:"Use orbit control"},filename:"orbit-control.js",isNew:!1},{id:"annotation",source:`import {
  Canvas,
  CanvasEvent,
  Circle,
  Ellipse,
  Image,
  Line,
  Polyline,
  Polygon,
  Rect,
} from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as AnnotationPlugin } from '@antv/g-plugin-annotation';
import { Plugin as DragndropPlugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const annotationPlugin = new AnnotationPlugin({
  enableDeleteTargetWithShortcuts: true,
  enableAutoSwitchDrawingMode: true,
  selectableStyle: {
    selectionFill: 'rgba(24,144,255,0.15)',
    selectionStroke: '#1890FF',
    selectionStrokeWidth: 2.5,
    anchorFill: '#1890FF',
    anchorStroke: '#1890FF',
  },
});
canvasRenderer.registerPlugin(annotationPlugin);
svgRenderer.registerPlugin(annotationPlugin);
webglRenderer.registerPlugin(annotationPlugin);
webgpuRenderer.registerPlugin(annotationPlugin);
canvaskitRenderer.registerPlugin(annotationPlugin);

const dragndropPlugin = new DragndropPlugin({
  dragstartDistanceThreshold: 10,
  dragstartTimeThreshold: 100,
});
canvasRenderer.registerPlugin(dragndropPlugin);
svgRenderer.registerPlugin(dragndropPlugin);
webglRenderer.registerPlugin(dragndropPlugin);
webgpuRenderer.registerPlugin(dragndropPlugin);
canvaskitRenderer.registerPlugin(dragndropPlugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const circle = new Circle({
  style: {
    cx: 200,
    cy: 200,
    r: 100,
    stroke: '#F04864',
    lineWidth: 10,
    selectable: true,
  },
});

const ellipse = new Ellipse({
  style: {
    cx: 440,
    cy: 200,
    rx: 100,
    ry: 50,
    stroke: '#F04864',
    lineWidth: 10,
    selectable: true,
  },
});

const image = new Image({
  style: {
    x: 300,
    y: 280,
    width: 200,
    height: 200,
    src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
    // transform: 'scale(0.5) rotate(30deg)',
    selectable: true,
  },
});
image.addEventListener('selected', () => {
  console.log('image selected');
});
image.addEventListener('deselected', () => {
  console.log('image deselected');
});

const rect = new Rect({
  style: {
    x: 100,
    y: 280,
    width: 100,
    height: 200,
    fill: 'blue',
    stroke: 'red',
    selectable: true,
  },
});

const line = new Line({
  style: {
    x1: 100,
    y1: 100,
    x2: 100,
    y2: 300,
    lineWidth: 10,
    stroke: 'red',
    selectable: true,
  },
});

const polyline = new Polyline({
  style: {
    points: [
      [200, 100],
      [300, 100],
      [300, 200],
      [300, 300],
    ],
    lineWidth: 10,
    stroke: 'red',
    selectable: true,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(circle);
  canvas.appendChild(ellipse);
  canvas.appendChild(image);
  canvas.appendChild(rect);
  canvas.appendChild(line);
  canvas.appendChild(polyline);

  annotationPlugin.setDrawingMode(true);
  annotationPlugin.setDrawer('rect');

  annotationPlugin.addEventListener('drawer:enable', (setDrawer) => {
    console.log('drawer:enable', setDrawer);
  });

  annotationPlugin.addEventListener('draw:start', (toolstate) => {
    console.log('draw:start', toolstate);
  });

  annotationPlugin.addEventListener('draw:complete', ({ type, path }) => {
    // use any brush you preferred
    const brush = {
      stroke: 'black',
      strokeWidth: 10,
      selectable: true,
    };

    if (type === 'polyline') {
      const polyline = new Polyline({
        style: {
          ...brush,
          points: path.map(({ x, y }) => [x, y]),
        },
      });
      canvas.appendChild(polyline);
    } else if (type === 'polygon') {
      const polygon = new Polygon({
        style: {
          ...brush,
          points: path.map(({ x, y }) => [x, y]),
        },
      });
      canvas.appendChild(polygon);
    } else if (type === 'rect') {
      const rect = new Rect({
        style: {
          ...brush,
          x: path[0].x,
          y: path[0].y,
          width: path[2].x - path[0].x,
          height: path[2].y - path[0].y,
        },
      });
      canvas.appendChild(rect);
    } else if (type === 'circle') {
      const circle = new Circle({
        style: {
          ...brush,
          cx: path[0].x,
          cy: path[0].y,
          r: 20,
        },
      });
      canvas.appendChild(circle);
    }
  });

  annotationPlugin.addEventListener('draw:cancel', (toolstate) => {
    console.log('draw:cancel', toolstate);
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const selectableFolder = gui.addFolder('selectable');
const selectableConfig = {
  selectionFill: 'rgba(24,144,255,0.15)',
  selectionFillOpacity: 1,
  selectionStroke: '#1890FF',
  selectionStrokeOpacity: 1,
  selectionStrokeWidth: 2.5,
  selectionLineDash: 0,
  anchorFill: '#1890FF',
  anchorFillOpacity: 1,
  anchorStroke: '#1890FF',
  anchorStrokeOpacity: 1,
  anchorStrokeWidth: 1,
  anchorSize: 6,
};
selectableFolder.addColor(selectableConfig, 'selectionFill').onChange((selectionFill) => {
  annotationPlugin.updateSelectableStyle({
    selectionFill,
  });
});
selectableFolder
  .add(selectableConfig, 'selectionFillOpacity', 0, 1)
  .onChange((selectionFillOpacity) => {
    annotationPlugin.updateSelectableStyle({
      selectionFillOpacity,
    });
  });
selectableFolder.addColor(selectableConfig, 'selectionStroke').onChange((selectionStroke) => {
  annotationPlugin.updateSelectableStyle({
    selectionStroke,
  });
});
selectableFolder
  .add(selectableConfig, 'selectionStrokeOpacity', 0, 1)
  .onChange((selectionStrokeOpacity) => {
    annotationPlugin.updateSelectableStyle({
      selectionStrokeOpacity,
    });
  });
selectableFolder
  .add(selectableConfig, 'selectionStrokeWidth', 1, 20)
  .onChange((selectionStrokeWidth) => {
    annotationPlugin.updateSelectableStyle({
      selectionStrokeWidth,
    });
  });
selectableFolder.add(selectableConfig, 'selectionLineDash', 0, 20).onChange((selectionLineDash) => {
  annotationPlugin.updateSelectableStyle({
    selectionLineDash,
  });
});
selectableFolder.addColor(selectableConfig, 'anchorFill').onChange((anchorFill) => {
  annotationPlugin.updateSelectableStyle({
    anchorFill,
  });
});
selectableFolder.addColor(selectableConfig, 'anchorStroke').onChange((anchorStroke) => {
  annotationPlugin.updateSelectableStyle({
    anchorStroke,
  });
});
selectableFolder.add(selectableConfig, 'anchorSize', 5, 20).onChange((anchorSize) => {
  annotationPlugin.updateSelectableStyle({
    anchorSize,
  });
});
selectableFolder.add(selectableConfig, 'anchorStrokeWidth', 1, 20).onChange((anchorStrokeWidth) => {
  annotationPlugin.updateSelectableStyle({
    anchorStrokeWidth,
  });
});
selectableFolder.add(selectableConfig, 'anchorFillOpacity', 0, 1).onChange((anchorFillOpacity) => {
  annotationPlugin.updateSelectableStyle({
    anchorFillOpacity,
  });
});
selectableFolder
  .add(selectableConfig, 'anchorStrokeOpacity', 0, 1)
  .onChange((anchorStrokeOpacity) => {
    annotationPlugin.updateSelectableStyle({
      anchorStrokeOpacity,
    });
  });
selectableFolder.open();

const drawerFolder = gui.addFolder('drawer');
const drawerConfig = {
  rectStroke: '#FAAD14',
  rectStrokeWidth: 2.5,
  rectLineDash: 6,
  polylineVertexFill: '#FFFFFF',
  polylineVertexSize: 6,
  polylineVertexStroke: '#FAAD14',
  polylineVertexStrokeWidth: 2,
  polylineActiveVertexFill: '#FAAD14',
  polylineActiveVertexSize: 6,
  polylineActiveVertexStroke: '#FAAD14',
  polylineActiveVertexStrokeWidth: 4,
  polylineSegmentStroke: '#FAAD14',
  polylineActiveSegmentStroke: '#FAAD14',
};
drawerFolder.addColor(drawerConfig, 'rectStroke').onChange((rectStroke) => {
  annotationPlugin.updateDrawerStyle({
    rectStroke,
  });
});
drawerFolder.add(drawerConfig, 'rectStrokeWidth', 0, 10).onChange((rectStrokeWidth) => {
  annotationPlugin.updateDrawerStyle({
    rectStrokeWidth,
  });
});
drawerFolder.add(drawerConfig, 'rectLineDash', 0, 10).onChange((rectLineDash) => {
  annotationPlugin.updateDrawerStyle({
    rectLineDash,
  });
});
drawerFolder.addColor(drawerConfig, 'polylineVertexFill').onChange((polylineVertexFill) => {
  annotationPlugin.updateDrawerStyle({
    polylineVertexFill,
  });
});
drawerFolder.addColor(drawerConfig, 'polylineVertexStroke').onChange((polylineVertexStroke) => {
  annotationPlugin.updateDrawerStyle({
    polylineVertexStroke,
  });
});
drawerFolder.add(drawerConfig, 'polylineVertexSize', 0, 10).onChange((polylineVertexSize) => {
  annotationPlugin.updateDrawerStyle({
    polylineVertexSize,
  });
});
drawerFolder
  .add(drawerConfig, 'polylineVertexStrokeWidth', 0, 10)
  .onChange((polylineVertexStrokeWidth) => {
    annotationPlugin.updateDrawerStyle({
      polylineVertexStrokeWidth,
    });
  });
drawerFolder.addColor(drawerConfig, 'polylineSegmentStroke').onChange((polylineSegmentStroke) => {
  annotationPlugin.updateDrawerStyle({
    polylineSegmentStroke,
  });
});

drawerFolder
  .addColor(drawerConfig, 'polylineActiveVertexFill')
  .onChange((polylineActiveVertexFill) => {
    annotationPlugin.updateDrawerStyle({
      polylineActiveVertexFill,
    });
  });
drawerFolder
  .addColor(drawerConfig, 'polylineActiveVertexStroke')
  .onChange((polylineActiveVertexStroke) => {
    annotationPlugin.updateDrawerStyle({
      polylineActiveVertexStroke,
    });
  });
drawerFolder
  .add(drawerConfig, 'polylineActiveVertexSize', 0, 10)
  .onChange((polylineActiveVertexSize) => {
    annotationPlugin.updateDrawerStyle({
      polylineActiveVertexSize,
    });
  });
drawerFolder
  .add(drawerConfig, 'polylineActiveVertexStrokeWidth', 0, 10)
  .onChange((polylineActiveVertexStrokeWidth) => {
    annotationPlugin.updateDrawerStyle({
      polylineActiveVertexStrokeWidth,
    });
  });
drawerFolder
  .addColor(drawerConfig, 'polylineActiveSegmentStroke')
  .onChange((polylineActiveSegmentStroke) => {
    annotationPlugin.updateDrawerStyle({
      polylineActiveSegmentStroke,
    });
  });
drawerFolder.close();

const apiFolder = gui.addFolder('API');
const apiConfig = {
  setDrawingMode: true,
  setDrawer: 'rect',
  selectDisplayObject: 'none',
  deselectDisplayObject: 'none',
  getSelectedDisplayObjects: () => {
    console.log(annotationPlugin.getSelectedDisplayObjects());
  },
  removeImage: () => {
    image.remove();
  },
};
apiFolder.add(apiConfig, 'setDrawingMode').onChange((enable) => {
  annotationPlugin.setDrawingMode(enable);
});
apiFolder
  .add(apiConfig, 'setDrawer', ['rect', 'polyline', 'polygon', 'circle'])
  .onChange((drawer) => {
    annotationPlugin.setDrawer(drawer);
  });
apiFolder
  .add(apiConfig, 'selectDisplayObject', [
    'rect',
    'image',
    'circle',
    'ellipse',
    'line',
    'polyline',
    'none',
  ])
  .onChange((shape) => {
    let target;
    if (shape === 'rect') {
      target = rect;
    } else if (shape === 'image') {
      target = image;
    } else if (shape === 'circle') {
      target = circle;
    } else if (shape === 'ellipse') {
      target = ellipse;
    } else if (shape === 'line') {
      target = line;
    } else if (shape === 'polyline') {
      target = polyline;
    }
    annotationPlugin.selectDisplayObject(target);
  });

apiFolder
  .add(apiConfig, 'deselectDisplayObject', [
    'rect',
    'image',
    'circle',
    'ellipse',
    'line',
    'polyline',
    'none',
  ])
  .onChange((shape) => {
    let target;
    if (shape === 'rect') {
      target = rect;
    } else if (shape === 'image') {
      target = image;
    } else if (shape === 'circle') {
      target = circle;
    } else if (shape === 'ellipse') {
      target = ellipse;
    } else if (shape === 'line') {
      target = line;
    } else if (shape === 'polyline') {
      target = polyline;
    }
    annotationPlugin.deselectDisplayObject(target);
  });

apiFolder.add(apiConfig, 'getSelectedDisplayObjects');
apiFolder.add(apiConfig, 'removeImage');
apiFolder.open();

const camera = canvas.getCamera();
const cameraFolder = gui.addFolder('camera actions');
const cameraConfig = {
  panX: 0,
  panY: 0,
  zoom: 1,
  roll: 0,
};
cameraFolder.add(cameraConfig, 'zoom', 0.1, 10).onChange((zoom) => {
  camera.setZoom(zoom);
});
cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
  camera.rotate(0, 0, roll);
});
cameraFolder.open();
`,title:{zh:"\u4F7F\u7528\u6807\u6CE8",en:"Use annotation"},filename:"annotation.js",isNew:!1}],icon:"",id:"others",title:{en:"Others",zh:"\u5176\u5B83"},childrenKey:"demos",order:20}],childrenKey:"examples"},{id:"gpgpu",title:{zh:"GPGPU",en:"GPGPU"},examples:[{demos:[{id:"matrix-multiplication",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*PzQMRKjwro4AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';

const { BufferUsage } = DeviceRenderer;

/**
 * ported from https://web.dev/gpu-compute/
 *
 * should run under WebGPU-supported browsers such as Chrome 94+
 */

const WORKGROUP_SIZE_X = 8;
const WORKGROUP_SIZE_Y = 8;

// use WebGPU
const renderer = new Renderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const $wrapper = document.getElementById('container');
const canvas = new Canvas({
  container: $wrapper,
  width: 1,
  height: 1,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const kernel = new Kernel(device, {
    computeShader: \`
  struct Matrix {
    size : vec2<f32>,
    numbers: array<f32>,
  };
  
  @group(0) @binding(0) var<storage, read> firstMatrix : Matrix;
  @group(0) @binding(1) var<storage, read> secondMatrix : Matrix;
  @group(0) @binding(2) var<storage, write> resultMatrix : Matrix;
  
  @stage(compute) @workgroup_size(\${WORKGROUP_SIZE_X}, \${WORKGROUP_SIZE_Y})
  fn main(
    @builtin(global_invocation_id) global_id : vec3<u32>
  ) {
    // Guard against out-of-bounds work group sizes
    if (global_id.x >= u32(firstMatrix.size.x) || global_id.y >= u32(secondMatrix.size.y)) {
      return;
    }
  
    resultMatrix.size = vec2<f32>(firstMatrix.size.x, secondMatrix.size.y);
  
    let resultCell = vec2<u32>(global_id.x, global_id.y);
    var result = 0.0;
    for (var i = 0u; i < u32(firstMatrix.size.y); i = i + 1u) {
      let a = i + resultCell.x * u32(firstMatrix.size.y);
      let b = resultCell.y + i * u32(secondMatrix.size.y);
      result = result + firstMatrix.numbers[a] * secondMatrix.numbers[b];
    }
  
    let index = resultCell.y + resultCell.x * u32(secondMatrix.size.y);
    resultMatrix.numbers[index] = result;
  }\`,
  });

  calc(
    kernel,
    device,
    new Float32Array([2 /* rows */, 4 /* columns */, 1, 2, 3, 4, 5, 6, 7, 8]),
    new Float32Array([4 /* rows */, 2 /* columns */, 1, 2, 3, 4, 5, 6, 7, 8]),
  );

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const folder = gui.addFolder('matrix size');
  const config = {
    size: 32,
  };
  folder.add(config, 'size', [32, 64, 128, 256, 512, 1024]).onChange((size) => {
    const first = new Float32Array([size, size].concat(new Array(size * size).fill(Math.random())));
    const second = new Float32Array(
      [size, size].concat(new Array(size * size).fill(Math.random())),
    );
    calc(kernel, device, first, second);
  });
  folder.open();
});

const cpuMultiplication = (firstMatrix, secondMatrix, $div) => {
  const startTime = window.performance.now();

  const x = firstMatrix[0];
  const z = firstMatrix[1];
  const y = secondMatrix[1];

  const resultMatrix = new Float32Array(firstMatrix[0] * secondMatrix[1]);

  let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
  let product = new Array(x);
  for (let p = 0; p < x; p++) {
    product[p] = productRow.slice();
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        product[i][j] += firstMatrix[i * x + k] * secondMatrix[k * y + j];
      }
    }
  }

  const elapsed = window.performance.now() - startTime;
  setCPUTimeElapsed(elapsed, $div);

  return elapsed;
};

const gpuMultiplication = async (kernel, device, firstMatrix, secondMatrix, $div) => {
  let startTime = window.performance.now();
  const x = Math.ceil(firstMatrix[0] / WORKGROUP_SIZE_X); // X dimension of the grid of workgroups to dispatch.
  const y = Math.ceil(secondMatrix[1] / WORKGROUP_SIZE_Y); // Y dimension of the grid of workgroups to dispatch.
  const resultMatrixBufferSize = 2 + firstMatrix[0] * secondMatrix[1];
  const resultMatrix = new Float32Array(resultMatrixBufferSize);

  const firstMatrixBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: firstMatrix,
  });
  const secondMatrixBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: secondMatrix,
  });
  const resultBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: resultMatrix,
  });
  const readback = device.createReadback();

  kernel.setBinding(0, firstMatrixBuffer);
  kernel.setBinding(1, secondMatrixBuffer);
  kernel.setBinding(2, resultBuffer);
  kernel.dispatch(x, y);

  await readback.readBuffer(resultBuffer);
  const elapsed = window.performance.now() - startTime;

  setGPUTimeElapsed(elapsed, $div);

  // output
  console.log(resultMatrix);
  return elapsed;
};

const calc = async (kernel, device, firstMatrix, secondMatrix) => {
  const $div = document.createElement('div');
  $div.textContent = \`Matrix size: \${firstMatrix[0]} * \${firstMatrix[1]}\`;
  $wrapper.appendChild($div);

  const cpuTimeElapsed = cpuMultiplication(firstMatrix, secondMatrix, $div);
  const gpuTimeElapsed = await gpuMultiplication(kernel, device, firstMatrix, secondMatrix, $div);
  const speedUp = Number.parseFloat(cpuTimeElapsed / gpuTimeElapsed).toFixed(1);

  const $speedUp = document.createElement('div');
  $speedUp.textContent = \`SpeedUp: \${speedUp}x\`;
  $speedUp.style = 'font-weight: bold; margin-bottom: 16px;';
  $wrapper.appendChild($speedUp);
};

const setCPUTimeElapsed = (time, $div) => {
  const $cpu = document.createElement('div');
  $cpu.textContent = \`CPU Time Elapsed: \${Number.parseFloat(time).toFixed(2)}ms\`;
  $div.appendChild($cpu);
};
const setGPUTimeElapsed = (time, $div) => {
  const $gpu = document.createElement('div');
  $gpu.textContent = \`GPU Time Elapsed: \${Number.parseFloat(time).toFixed(2)}ms\`;
  $div.appendChild($gpu);
};
`,title:{zh:"\u77E9\u9635\u4E58\u6CD5",en:"Matrix multiplication"},filename:"matrix-multiplication.js",isNew:!1},{id:"reduce",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';

const { BufferUsage } = DeviceRenderer;

/**
 * ported from https://github.com/9ballsyndrome/WebGL_Compute_shader/blob/master/webgl-compute-bitonicSort/js/script.js
 */

const CANVAS_SIZE = 1;

// use WebGPU
const renderer = new Renderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const $wrapper = document.getElementById('container');
const canvas = new Canvas({
  container: $wrapper,
  width: CANVAS_SIZE,
  height: CANVAS_SIZE,
  renderer,
});

const workgroupSize = 128;

canvas.addEventListener(CanvasEvent.READY, () => {
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const kernel = new Kernel(device, {
    computeShader: \`
struct Array {
  size: u32,
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read_write> input : Array;

var<workgroup> shared : array<f32, \${workgroupSize}>;

@stage(compute) @workgroup_size(\${workgroupSize}, 1)
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>,
  @builtin(local_invocation_id) local_id : vec3<u32>,
  @builtin(workgroup_id) workgroup_id : vec3<u32>,
) {
  var tid = local_id.x;
  // var i = global_id.x;

  // version 4
  var i = workgroup_id.x * \${workgroupSize}u * 2u + local_id.x;
  shared[tid] = input.data[i] + input.data[i + \${workgroupSize}u];
  // shared[tid] = input.data[i];
  workgroupBarrier();

  // version 5
  // for (var s = \${workgroupSize}u / 2u; s > 32u; s = s >> 1u) {
  // version 3
  for (var s = \${workgroupSize}u / 2u; s > 0u; s = s >> 1u) {
    if (tid < s) {
      shared[tid] = shared[tid] + shared[tid + s];
    }

  // for (var s = 1u; s < \${workgroupSize}u; s = s * 2u) {
    // version 1
    // if (tid % (s * 2u) == 0u) {
    //   shared[tid] = shared[tid] + shared[tid + s];
    // }

    // version 2
    // var index = 2u * s * tid;
    // if (index < \${workgroupSize}u) {
    //   shared[index] = shared[index] + shared[index + s];
    // }
    
    workgroupBarrier();
  }

  // if (tid < 32u) {
  //   shared[tid] =
  //     shared[tid + 32u]
  //     + shared[tid + 16u]
  //     + shared[tid + 8u]
  //     + shared[tid + 4u]
  //     + shared[tid + 2u]
  //     + shared[tid + 1u];
  // }

  if (tid == 0u) {
    input.data[workgroup_id.x] = shared[0u];
  }
}\`,
  });

  calc(kernel, device, new Array(200).fill(1));

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const folder = gui.addFolder('array size');
  const config = {
    size: 32,
  };
  folder.add(config, 'size', [32, 1000, 10000, 100000, 1000000]).onChange((size) => {
    calc(
      kernel,
      device,
      new Array(Number(size)).fill(undefined).map(() => Math.random()),
    );
  });
  folder.open();
});

const cpuReduceSum = (array) => {
  const startTime = window.performance.now();
  console.log(array.reduce((prev, cur) => prev + cur, 0));
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

const gpuReduceSum = async (kernel, device, array) => {
  const padding = array.concat(new Array(workgroupSize - (array.length % workgroupSize)).fill(0));

  const input = new Float32Array(
    [padding.length] // size
      .concat(padding), // origin data
  );

  let startTime = window.performance.now();

  const result = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: input,
  });
  const readback = device.createReadback();
  kernel.setBinding(0, result);
  kernel.dispatch(Math.ceil(array.length / workgroupSize), 1);

  // result
  await readback.readBuffer(result);

  console.log(
    input.slice(1, padding.length / workgroupSize + 1).reduce((prev, cur) => prev + cur, 0),
  );
  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

const calc = async (kernel, device, array) => {
  cpuReduceSum(array);
  gpuReduceSum(kernel, device, array);
};

const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the CPU & CPU time will be printed in console.';
$wrapper.appendChild($text);
`,title:{zh:"Reduce Sum",en:"Reduce Sum"},filename:"reduce.js",isNew:!1},{id:"compute-shader-test",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';

const { BufferUsage } = DeviceRenderer;

/**
 * ported from Tint
 * @see https://dawn.googlesource.com/tint/+/f9d19719fd500668e1f74d98e881073baeaf03ff/test/intrinsics/gen/atomicSub/051100.wgsl
 */

const CANVAS_SIZE = 1;
const $canvas = document.createElement('canvas');

// use WebGPU
const renderer = new Renderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  canvas: $canvas,
  width: CANVAS_SIZE,
  height: CANVAS_SIZE,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const kernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct AtomicBuffer {
  data: array<atomic<i32>>,
};
struct Params {
  k: i32,
  center: vec2<i32>,
};

@binding(0) @group(0) var<storage, read_write> input : Buffer;
@binding(1) @group(0) var<storage, read_write> output : AtomicBuffer;
@binding(2) @group(0) var<uniform> params : Params;

@stage(compute) @workgroup_size(8, 8)
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index >= u32(4)) {
    return;
  }

  input.data[index] = input.data[index] + params.k;

  atomicSub(&output.data[index], 1);
}\`,
  });

  const inputBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([1, 2, 3, 4]),
  });
  const outputBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, 0, 0, 0]),
  });
  const uniformBuffer = device.createBuffer({
    usage: BufferUsage.UNIFORM | BufferUsage.COPY_DST,
    viewOrSize: new Int32Array([1, 0, 0, 0]),
  });
  const readback = device.createReadback();

  kernel.setBinding(0, inputBuffer);
  kernel.setBinding(1, outputBuffer);
  kernel.setBinding(2, uniformBuffer);

  for (let i = 0; i < 100; i++) {
    uniformBuffer.setSubData(0, new Int32Array([2, 0, 0, 0]));
    kernel.dispatch(1, 1);

    uniformBuffer.setSubData(0, new Int32Array([-2, 0, 0, 0]));
    kernel.dispatch(1, 1);
  }

  (async () => {
    const input = await readback.readBuffer(inputBuffer);
    const output = await readback.readBuffer(outputBuffer);

    console.log(input, output);
  })();
});
`,title:{zh:"Compute Shader \u6D4B\u8BD5",en:"Compute Shader"},filename:"compute-shader-test.js",isNew:!1}],icon:"",id:"basic-algorithm",title:{en:"Simple Algorithm",zh:"\u7B80\u5355\u7B97\u6CD5"},childrenKey:"demos",order:0},{demos:[{id:"webgpu-graph-pagerank",source:`import { WebGPUGraph } from '@antv/webgpu-graph';
import { Algorithm } from '@antv/g6';
import * as lil from 'lil-gui';

/**
 * @see /zh/docs/api/gpgpu/webgpu-graph#pagerank
 */

// GPU version
const graph = new WebGPUGraph();
// CPU version
const { pageRank } = Algorithm;

const calcInCPU = (data) => {
  const startTime = window.performance.now();
  const result = pageRank(data);
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
  // console.log('CPU result: ', result);
};
const calcInGPU = async (data) => {
  const startTime = window.performance.now();
  const result = await graph.pageRank(data);
  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
  // console.log('GPU result: ', result);
};

const simpleDataset = {
  nodes: [
    {
      id: 'A',
      label: 'A',
    },
    {
      id: 'B',
      label: 'B',
    },
    {
      id: 'C',
      label: 'C',
    },
    {
      id: 'D',
      label: 'D',
    },
    {
      id: 'E',
      label: 'E',
    },
    {
      id: 'F',
      label: 'F',
    },
    {
      id: 'G',
      label: 'G',
    },
    {
      id: 'H',
      label: 'H',
    },
    {
      id: 'I',
      label: 'I',
    },
    {
      id: 'J',
      label: 'J',
    },
    {
      id: 'K',
      label: 'K',
    },
  ],
  edges: [
    {
      source: 'D',
      target: 'A',
    },
    {
      source: 'D',
      target: 'B',
    },
    {
      source: 'B',
      target: 'C',
    },
    {
      source: 'C',
      target: 'B',
    },
    {
      source: 'F',
      target: 'B',
    },
    {
      source: 'F',
      target: 'E',
    },
    {
      source: 'E',
      target: 'F',
    },
    {
      source: 'E',
      target: 'D',
    },
    {
      source: 'E',
      target: 'B',
    },
    {
      source: 'K',
      target: 'E',
    },
    {
      source: 'J',
      target: 'E',
    },
    {
      source: 'I',
      target: 'E',
    },
    {
      source: 'H',
      target: 'E',
    },
    {
      source: 'G',
      target: 'E',
    },
    {
      source: 'G',
      target: 'B',
    },
    {
      source: 'H',
      target: 'B',
    },
    {
      source: 'I',
      target: 'B',
    },
  ],
};

calcInCPU(simpleDataset);
calcInGPU(simpleDataset);

// GUI
const gui = new lil.GUI({ autoPlace: false });
const $wrapper = document.getElementById('container');
$wrapper.appendChild(gui.domElement);
const folder = gui.addFolder('dataset');
const config = {
  dataset: 'simple',
};
folder
  .add(config, 'dataset', ['simple', '8k nodes & 5k edges', '1k nodes & 500k edges'])
  .onChange(async (dataset) => {
    let input;
    if (dataset === 'simple') {
      input = simpleDataset;
    } else if (dataset === '8k nodes & 5k edges') {
      const res = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/0b9730ff-0850-46ff-84d0-1d4afecd43e6.json',
      );
      input = await res.json();
    } else if (dataset === '1k nodes & 500k edges') {
      const res = await fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/db52686c-423b-41d8-956b-38536252a48f.json',
      );
      input = await res.json();
    }

    calcInCPU(input);
    calcInGPU(input);
  });
folder.open();
`,title:{zh:"WebGPU Graph PageRank",en:"WebGPU Graph PageRank"},filename:"webgpu-graph-pagerank.js",isNew:!1},{id:"webgpu-graph-sssp",source:`import { Algorithm } from '@antv/g6';
import { WebGPUGraph } from '@antv/webgpu-graph';
import * as lil from 'lil-gui';

/**
 * @see /zh/docs/api/gpgpu/webgpu-graph#sssp
 */

// GPU version
const graph = new WebGPUGraph();
// CPU version
const { findShortestPath } = Algorithm;

const calcInCPU = (data, sourceId, weightPropertyName) => {
  const startTime = window.performance.now();
  for (let i = 0; i < data.nodes.length; i++) {
    const { length, path, allPath } = findShortestPath(
      data,
      sourceId,
      data.nodes[i].id,
      true,
      weightPropertyName,
    );
    // console.log(\`from A to \${data.nodes[i].id} = \${length}: \`, path);
  }
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};
const calcInGPU = async (data, sourceId, weightPropertyName) => {
  const startTime = window.performance.now();
  const result = await graph.sssp(data, sourceId, weightPropertyName);
  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);

  // console.log(result);
};

const simpleDataset = {
  nodes: [
    {
      id: 'A',
      label: 'A',
    },
    {
      id: 'B',
      label: 'B',
    },
    {
      id: 'C',
      label: 'C',
    },
    {
      id: 'D',
      label: 'D',
    },
    {
      id: 'E',
      label: 'E',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
      weight: 9,
    },
    {
      source: 'A',
      target: 'C',
      weight: 4,
    },
    {
      source: 'B',
      target: 'C',
      weight: 10,
    },
    {
      source: 'B',
      target: 'D',
      weight: 2,
    },
    {
      source: 'B',
      target: 'E',
      weight: 3,
    },
    {
      source: 'C',
      target: 'D',
      weight: 2,
    },
    {
      source: 'C',
      target: 'E',
      weight: 11,
    },
    {
      source: 'D',
      target: 'B',
      weight: 2,
    },
    {
      source: 'E',
      target: 'D',
      weight: 2,
    },
  ],
};

calcInGPU(simpleDataset, 'A', 'weight');
calcInCPU(simpleDataset, 'A', 'weight');

// GUI
const gui = new lil.GUI({ autoPlace: false });
const $wrapper = document.getElementById('container');
$wrapper.appendChild(gui.domElement);
const folder = gui.addFolder('dataset');
const config = {
  dataset: 'simple',
};
folder.add(config, 'dataset', ['simple', '1k nodes & 5k edges']).onChange(async (dataset) => {
  if (dataset === 'simple') {
    calcInGPU(simpleDataset, 'A', 'weight');
    calcInCPU(simpleDataset, 'A', 'weight');
  } else if (dataset === '1k nodes & 5k edges') {
    const res = await fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/180daecd-28d0-4d8f-ac4b-064d21062c12.json',
    );
    const input = await res.json();
    calcInGPU(input, '0', 'weight');
    calcInCPU(input, '0', 'weight');
  }
});
folder.open();

const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the shortest paths will be printed in console.';
$wrapper.appendChild($text);
`,title:{zh:"WebGPU Graph SSSP",en:"WebGPU Graph SSSP"},filename:"webgpu-graph-sssp.js",isNew:!1},{id:"webgpu-graph-bfs",source:`import { Algorithm } from '@antv/g6';
import { WebGPUGraph } from '@antv/webgpu-graph';
import * as lil from 'lil-gui';

/**
 * @see /zh/docs/api/gpgpu/webgpu-graph#bfs
 */

// GPU version
const graph = new WebGPUGraph();
// CPU version
const { breadthFirstSearch } = Algorithm;

const simpleDataset = {
  nodes: [
    {
      id: 'A',
    },
    {
      id: 'B',
    },
    {
      id: 'C',
    },
    {
      id: 'D',
    },
    {
      id: 'E',
    },
    {
      id: 'F',
    },
    {
      id: 'G',
    },
    {
      id: 'H',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
    },
    {
      source: 'B',
      target: 'C',
    },
    {
      source: 'C',
      target: 'G',
    },
    {
      source: 'A',
      target: 'D',
    },
    {
      source: 'A',
      target: 'E',
    },
    {
      source: 'E',
      target: 'F',
    },
    {
      source: 'F',
      target: 'D',
    },
  ],
};

const calcInCPU = (data, root) => {
  const startTime = window.performance.now();
  breadthFirstSearch(data, root, {
    enter: ({ current, previous }) => {
      // \u5F00\u59CB\u904D\u5386\u70B9\u7684\u56DE\u8C03
      // console.log('enter', current);
    },
    leave: ({ current, previous }) => {
      // \u904D\u5386\u5B8C\u8282\u70B9\u7684\u56DE\u8C03
      // console.log('leave', current);
    },
  });
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

const calcInGPU = async (data, root) => {
  const startTime = window.performance.now();
  await graph.bfs(data, root);
  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

calcInCPU(simpleDataset, 'A');
calcInGPU(simpleDataset, 'A');

// GUI
const gui = new lil.GUI({ autoPlace: false });
const $wrapper = document.getElementById('container');
$wrapper.appendChild(gui.domElement);
const folder = gui.addFolder('dataset');
const config = {
  dataset: 'simple',
};
folder
  .add(config, 'dataset', ['simple', '1k nodes & 5k edges', '1k nodes & 500k edges'])
  .onChange(async (dataset) => {
    if (dataset === 'simple') {
      calcInCPU(simpleDataset, 'A');
      calcInGPU(simpleDataset, 'A');
    } else if (dataset === '1k nodes & 5k edges') {
      const res = await fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/180daecd-28d0-4d8f-ac4b-064d21062c12.json',
      );
      const input = await res.json();
      calcInGPU(input, '0');
      calcInCPU(input, '0');
    } else if (dataset === '1k nodes & 500k edges') {
      const res = await fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/db52686c-423b-41d8-956b-38536252a48f.json',
      );
      const input = await res.json();
      calcInGPU(input, '0');
      calcInCPU(input, '0');
    }
  });
folder.open();
`,title:{zh:"WebGPU Graph BFS",en:"WebGPU Graph BFS"},filename:"webgpu-graph-bfs.js",isNew:!1}],icon:"",id:"webgpu-graph",title:{en:"WebGPU Graph",zh:"WebGPU Graph"},childrenKey:"demos",order:1},{demos:[{id:"bfs",source:`// import { Canvas, CanvasEvent } from '@antv/g';
// import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
// import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

// const { BufferUsage } = DeviceRenderer;

/**
 * Implementing Breadth First Search in CUDA
 * @see https://siddharths2710.wordpress.com/2017/05/16/implementing-breadth-first-search-in-cuda/
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#breadthfirstsearch
 */

// /**
//  * use Compressed Sparse Row (CSR) for adjacency list
//  */
// // datasource: https://github.com/sengorajkumar/gpu_graph_algorithms/blob/master/input/simple.gr_E.csv
// const V = [0, 1, 2, 3, 4];
// const E = [1, 2, 2, 3, 4, 3, 4, 1, 3];
// const I = [0, 2, 5, 7, 8, 10];
// const W = [9, 4, 10, 2, 3, 2, 11, 2, 2];
// const From = [0, 0, 1, 1, 1, 2, 2, 3, 4];
// const To = [1, 2, 2, 3, 4, 3, 4, 1, 3];
// const BLOCK_SIZE = 1;
// const BLOCKS = 5;

// const CANVAS_SIZE = 1;

// const $wrapper = document.getElementById('container');
// const $text = document.createElement('div');
// $text.textContent = 'Please open the devtools, the top nodes will be printed in console.';
// $wrapper.appendChild($text);

// // use WebGPU
// const renderer = new Renderer();
// renderer.registerPlugin(new Plugin());

// // create a canvas
// const canvas = new Canvas({
//   container: $wrapper,
//   width: CANVAS_SIZE,
//   height: CANVAS_SIZE,
//   renderer,
// });

// canvas.addEventListener(CanvasEvent.READY, () => {
//   const plugin = renderer.getPlugin('device-renderer');
//   const device = plugin.getDevice();
//   const storeKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> r : Buffer;
// @group(0) @binding(1) var<storage, write> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     r_last.data[index] = r.data[index];
//   }
// }\`,
//   });

//   const matmulKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> graph : Buffer;
// @group(0) @binding(1) var<storage, read_write> r : Buffer;
// @group(0) @binding(2) var<storage, read> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     var sum = 0.0;
//     for (var i = 0u; i < \${V.length}u; i = i + 1u) {
//       sum = sum + r_last.data[i] * graph.data[index * \${V.length}u + i];
//     }
//     r.data[index] = sum;
//   }
// }
//     \`,
//   });

//   const rankDiffKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> r : Buffer;
// @group(0) @binding(1) var<storage, read_write> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     r_last.data[index] = abs(r_last.data[index] - r.data[index]);
//   }
// }
//     \`,
//   });

//   pageRankGPU(device, storeKernel, matmulKernel, rankDiffKernel);
// });

// const pageRankGPU = async (device, storeKernel, matmulKernel, rankDiffKernel) => {
//   const d = 0.85;
//   const eps = 0.000001;
//   let maxIteration = 1000;
//   const n = V.length;
//   const graph = new Float32Array(new Array(n * n).fill((1 - d) / n));
//   const r = new Float32Array(new Array(n).fill(1 / n));

//   From.forEach((from, i) => {
//     graph[To[i] * n + from] += d * 1.0;
//   });

//   for (let j = 0; j < n; j++) {
//     let sum = 0.0;

//     for (let i = 0; i < n; ++i) {
//       sum += graph[i * n + j];
//     }

//     for (let i = 0; i < n; ++i) {
//       if (sum != 0.0) {
//         graph[i * n + j] /= sum;
//       } else {
//         graph[i * n + j] = 1 / n;
//       }
//     }
//   }

//   const rBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
//     viewOrSize: new Float32Array(r),
//   });
//   const rLastBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
//     viewOrSize: new Float32Array(n),
//   });
//   const graphBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE,
//     viewOrSize: new Float32Array(graph),
//   });

//   const readback = device.createReadback();

//   storeKernel.setBinding(0, rBuffer);
//   storeKernel.setBinding(1, rLastBuffer);

//   matmulKernel.setBinding(0, graphBuffer);
//   matmulKernel.setBinding(1, rBuffer);
//   matmulKernel.setBinding(2, rLastBuffer);

//   rankDiffKernel.setBinding(0, rBuffer);
//   rankDiffKernel.setBinding(1, rLastBuffer);

//   const startTime = window.performance.now();
//   while (maxIteration--) {
//     storeKernel.dispatch(1, 1);

//     matmulKernel.dispatch(1, 1);

//     rankDiffKernel.dispatch(1, 1);

//     const last = await readback.readBuffer(rLastBuffer);
//     const result = last.reduce((prev, cur) => prev + cur, 0);
//     if (result < eps) {
//       const out = await readback.readBuffer(rBuffer);
//       console.log(out);
//       break;
//     }
//   }

//   console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
// };

const { breadthFirstSearch } = Algorithm;
const data = {
  nodes: [
    {
      id: 'A',
    },
    {
      id: 'B',
    },
    {
      id: 'C',
    },
    {
      id: 'D',
    },
    {
      id: 'E',
    },
    {
      id: 'F',
    },
    {
      id: 'G',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
    },
    {
      source: 'B',
      target: 'C',
    },
    {
      source: 'C',
      target: 'G',
    },
    {
      source: 'A',
      target: 'D',
    },
    {
      source: 'A',
      target: 'E',
    },
    {
      source: 'E',
      target: 'F',
    },
    {
      source: 'F',
      target: 'D',
    },
    {
      source: 'D',
      target: 'G',
    },
  ],
};

(async () => {
  // load & parse CSV datasets, which use Compressed Sparse Row (CSR) for adjacency list
  // const [V, E, From, To, I, W] = await Promise.all(
  //   [
  //     'https://gw.alipayobjects.com/os/bmw-prod/0272cae4-5ae0-4fbd-93f9-2b6a8e640a24.csv',
  //     'https://gw.alipayobjects.com/os/bmw-prod/e8b24b84-3cc4-4a73-b213-7edf4467e03a.csv',
  //     'https://gw.alipayobjects.com/os/bmw-prod/cba4ec3d-4eca-4f85-ae54-faeee0fa708a.csv',
  //     'https://gw.alipayobjects.com/os/bmw-prod/8582d1ca-9fe6-4afb-8364-df6ccc619594.csv',
  //     'https://gw.alipayobjects.com/os/bmw-prod/d84981b4-edcf-4df5-b672-45b0000fc5da.csv',
  //     'https://gw.alipayobjects.com/os/bmw-prod/eb455fa7-73ac-43fe-bc5e-d5e6c3a1fb77.csv',
  //   ].map(async (url, i) => {
  //     const res = await fetch(url);
  //     // adjust index for V, E, From and To
  //     return (await res.text()).split(',').map((v) => Number(v.trim()) - (i <= 3 ? 1 : 0));
  //   }),
  // );

  // const bigDataSet = {
  //   nodes: V.map((v) => ({
  //     id: \`\${v}\`,
  //     label: \`\${v}\`,
  //   })),
  //   edges: From.map((from, i) => ({
  //     source: \`\${from}\`,
  //     target: \`\${To[i]}\`,
  //   })),
  // };

  const startTime = window.performance.now();
  breadthFirstSearch(data, 'A', {
    enter: ({ current, previous }) => {
      console.log(current);
      // \u5F00\u59CB\u904D\u5386\u70B9\u7684\u56DE\u8C03
    },
    leave: ({ current, previous }) => {
      // \u904D\u5386\u5B8C\u8282\u70B9\u7684\u56DE\u8C03
    },
  });
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
})();
`,title:{zh:"Breadth First Search",en:"Breadth First Search"},filename:"bfs.js",isNew:!1},{id:"louvain",source:`// import { Canvas, CanvasEvent } from '@antv/g';
// import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
// import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

// const { BufferUsage } = DeviceRenderer;

/**
 * Implementing Louvain Clustering Algorithms in CUDA
 * @see https://github.com/rapidsai/cugraph/tree/branch-22.08/cpp/src/community
 * @see https://medium.com/walmartglobaltech/demystifying-louvains-algorithm-and-its-implementation-in-gpu-9a07cdd3b010
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#louvain
 */

// /**
//  * use Compressed Sparse Row (CSR) for adjacency list
//  */
// // datasource: https://github.com/sengorajkumar/gpu_graph_algorithms/blob/master/input/simple.gr_E.csv
// const V = [0, 1, 2, 3, 4];
// const E = [1, 2, 2, 3, 4, 3, 4, 1, 3];
// const I = [0, 2, 5, 7, 8, 10];
// const W = [9, 4, 10, 2, 3, 2, 11, 2, 2];
// const From = [0, 0, 1, 1, 1, 2, 2, 3, 4];
// const To = [1, 2, 2, 3, 4, 3, 4, 1, 3];
// const BLOCK_SIZE = 1;
// const BLOCKS = 5;

// const CANVAS_SIZE = 1;

// const $wrapper = document.getElementById('container');
// const $text = document.createElement('div');
// $text.textContent = 'Please open the devtools, the top nodes will be printed in console.';
// $wrapper.appendChild($text);

// // use WebGPU
// const renderer = new Renderer();
// renderer.registerPlugin(new Plugin());

// // create a canvas
// const canvas = new Canvas({
//   container: $wrapper,
//   width: CANVAS_SIZE,
//   height: CANVAS_SIZE,
//   renderer,
// });

// canvas.addEventListener(CanvasEvent.READY, () => {
//   const plugin = renderer.getPlugin('device-renderer');
//   const device = plugin.getDevice();
//   const storeKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> r : Buffer;
// @group(0) @binding(1) var<storage, write> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     r_last.data[index] = r.data[index];
//   }
// }\`,
//   });

//   const matmulKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> graph : Buffer;
// @group(0) @binding(1) var<storage, read_write> r : Buffer;
// @group(0) @binding(2) var<storage, read> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     var sum = 0.0;
//     for (var i = 0u; i < \${V.length}u; i = i + 1u) {
//       sum = sum + r_last.data[i] * graph.data[index * \${V.length}u + i];
//     }
//     r.data[index] = sum;
//   }
// }
//     \`,
//   });

//   const rankDiffKernel = new Kernel(device, {
//     computeShader: \`
// struct Buffer {
//   data: array<f32>,
// };

// @group(0) @binding(0) var<storage, read> r : Buffer;
// @group(0) @binding(1) var<storage, read_write> r_last : Buffer;

// @stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
// fn main(
//   @builtin(global_invocation_id) global_id : vec3<u32>
// ) {
//   var index = global_id.x;
//   if (index < \${V.length}u) {
//     r_last.data[index] = abs(r_last.data[index] - r.data[index]);
//   }
// }
//     \`,
//   });

//   pageRankGPU(device, storeKernel, matmulKernel, rankDiffKernel);
// });

// const pageRankGPU = async (device, storeKernel, matmulKernel, rankDiffKernel) => {
//   const d = 0.85;
//   const eps = 0.000001;
//   let maxIteration = 1000;
//   const n = V.length;
//   const graph = new Float32Array(new Array(n * n).fill((1 - d) / n));
//   const r = new Float32Array(new Array(n).fill(1 / n));

//   From.forEach((from, i) => {
//     graph[To[i] * n + from] += d * 1.0;
//   });

//   for (let j = 0; j < n; j++) {
//     let sum = 0.0;

//     for (let i = 0; i < n; ++i) {
//       sum += graph[i * n + j];
//     }

//     for (let i = 0; i < n; ++i) {
//       if (sum != 0.0) {
//         graph[i * n + j] /= sum;
//       } else {
//         graph[i * n + j] = 1 / n;
//       }
//     }
//   }

//   const rBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
//     viewOrSize: new Float32Array(r),
//   });
//   const rLastBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
//     viewOrSize: new Float32Array(n),
//   });
//   const graphBuffer = device.createBuffer({
//     usage: BufferUsage.STORAGE,
//     viewOrSize: new Float32Array(graph),
//   });

//   const readback = device.createReadback();

//   storeKernel.setBinding(0, rBuffer);
//   storeKernel.setBinding(1, rLastBuffer);

//   matmulKernel.setBinding(0, graphBuffer);
//   matmulKernel.setBinding(1, rBuffer);
//   matmulKernel.setBinding(2, rLastBuffer);

//   rankDiffKernel.setBinding(0, rBuffer);
//   rankDiffKernel.setBinding(1, rLastBuffer);

//   const startTime = window.performance.now();
//   while (maxIteration--) {
//     storeKernel.dispatch(1, 1);

//     matmulKernel.dispatch(1, 1);

//     rankDiffKernel.dispatch(1, 1);

//     const last = await readback.readBuffer(rLastBuffer);
//     const result = last.reduce((prev, cur) => prev + cur, 0);
//     if (result < eps) {
//       const out = await readback.readBuffer(rBuffer);
//       console.log(out);
//       break;
//     }
//   }

//   console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
// };

const { louvain } = Algorithm;
const data = {
  nodes: [
    {
      id: 'A',
    },
    {
      id: 'B',
    },
    {
      id: 'C',
    },
    {
      id: 'D',
    },
    {
      id: 'E',
    },
    {
      id: 'F',
    },
    {
      id: 'G',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
    },
    {
      source: 'B',
      target: 'C',
    },
    {
      source: 'C',
      target: 'G',
    },
    {
      source: 'A',
      target: 'D',
    },
    {
      source: 'A',
      target: 'E',
    },
    {
      source: 'E',
      target: 'F',
    },
    {
      source: 'F',
      target: 'D',
    },
    {
      source: 'D',
      target: 'G',
    },
  ],
};

(async () => {
  // load & parse CSV datasets, which use Compressed Sparse Row (CSR) for adjacency list
  const [V, E, From, To, I, W] = await Promise.all(
    [
      'https://gw.alipayobjects.com/os/bmw-prod/0272cae4-5ae0-4fbd-93f9-2b6a8e640a24.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/e8b24b84-3cc4-4a73-b213-7edf4467e03a.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/cba4ec3d-4eca-4f85-ae54-faeee0fa708a.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/8582d1ca-9fe6-4afb-8364-df6ccc619594.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/d84981b4-edcf-4df5-b672-45b0000fc5da.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/eb455fa7-73ac-43fe-bc5e-d5e6c3a1fb77.csv',
    ].map(async (url, i) => {
      const res = await fetch(url);
      // adjust index for V, E, From and To
      return (await res.text()).split(',').map((v) => Number(v.trim()) - (i <= 3 ? 1 : 0));
    }),
  );

  const bigDataSet = {
    nodes: V.map((v) => ({
      id: \`\${v}\`,
      label: \`\${v}\`,
    })),
    edges: From.map((from, i) => ({
      source: \`\${from}\`,
      target: \`\${To[i]}\`,
    })),
  };

  const startTime = window.performance.now();
  const result = louvain(bigDataSet);
  console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
  console.log(result);
})();
`,title:{zh:"Louvain Clustering Algorithm",en:"Louvain Clustering Algorithm"},filename:"louvain.js",isNew:!1},{id:"bellman-ford",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

const { BufferUsage } = DeviceRenderer;

/**
 * SSSP(Bellman-Ford) ported from CUDA
 * @see https://www.lewuathe.com/illustration-of-distributed-bellman-ford-algorithm.html
 * @see https://github.com/sengorajkumar/gpu_graph_algorithms
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#findshortestpathgraphdata-start-end-directed-weightpropertyname
 */

/**
 * use Compressed Sparse Row (CSR) for adjacency list
 */
// datasource: https://github.com/sengorajkumar/gpu_graph_algorithms/blob/master/input/simple.gr_E.csv
const V = [0, 1, 2, 3, 4];
const E = [1, 2, 2, 3, 4, 3, 4, 1, 3];
const I = [0, 2, 5, 7, 8, 9];
const W = [9, 4, 10, 2, 3, 2, 11, 2, 2];
const BLOCK_SIZE = 1;
const BLOCKS = 5;

const CANVAS_SIZE = 1;
const MAX_DISTANCE = 10000;

const $wrapper = document.getElementById('container');
const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the shortest paths will be printed in console.';
$wrapper.appendChild($text);

// use WebGPU
const renderer = new Renderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: $wrapper,
  width: CANVAS_SIZE,
  height: CANVAS_SIZE,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const kernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct AtomicBuffer {
  data: array<atomic<i32>>,
};

@group(0) @binding(0) var<storage, read> d_in_E : Buffer;
@group(0) @binding(1) var<storage, read> d_in_I : Buffer;
@group(0) @binding(2) var<storage, read> d_in_W : Buffer;
@group(0) @binding(3) var<storage, read> d_out_D : Buffer;
@group(0) @binding(4) var<storage, read_write> d_out_Di : AtomicBuffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    for (var j = d_in_I.data[index]; j < d_in_I.data[index + 1u]; j = j + 1) {
      var w = d_in_W.data[j];
      var du = d_out_D.data[index];
      var dv = d_out_D.data[d_in_E.data[j]];
      var newDist = du + w;
      if (du == \${MAX_DISTANCE}) {
        newDist = \${MAX_DISTANCE};
      }

      if (newDist < dv) {
        atomicMin(&d_out_Di.data[d_in_E.data[j]], newDist);
      }
    }
  }
}\`,
  });

  const updateDistanceKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};

@group(0) @binding(0) var<storage, read_write> d_out_D : Buffer;
@group(0) @binding(1) var<storage, read_write> d_out_Di : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    if (d_out_D.data[index] > d_out_Di.data[index]) {
      d_out_D.data[index] = d_out_Di.data[index];
    }
    d_out_Di.data[index] = d_out_D.data[index];
  }
}
    \`,
  });

  const updatePredKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct AtomicBuffer {
  data: array<atomic<i32>>,
};

@group(0) @binding(0) var<storage, read> d_in_V : Buffer;
@group(0) @binding(1) var<storage, read> d_in_E : Buffer;
@group(0) @binding(2) var<storage, read> d_in_I : Buffer;
@group(0) @binding(3) var<storage, read> d_in_W : Buffer;
@group(0) @binding(4) var<storage, read> d_out_D : Buffer;
@group(0) @binding(5) var<storage, read_write> d_out_P : AtomicBuffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    for (var j = d_in_I.data[index]; j < d_in_I.data[index + 1u]; j = j + 1) {
      var u = d_in_V.data[index];
      var w = d_in_W.data[j];

      var dis_u = d_out_D.data[index];
      var dis_v = d_out_D.data[d_in_E.data[j]];
      if (dis_v == dis_u + w) {
        atomicMin(&d_out_P.data[d_in_E.data[j]], u);
      }
    }
  }
}    
    \`,
  });

  calcShortestPath(device, kernel, updateDistanceKernel, updatePredKernel);
});

const calcShortestPath = async (device, relaxKernel, updateDistanceKernel, updatePredKernel) => {
  const VBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(V),
  });
  const EBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(E),
  });
  const IBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(I),
  });
  const WBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(W),
  });
  const DOutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });
  const DiOutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });
  const POutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });
  const readback = device.createReadback();

  relaxKernel.setBinding(0, EBuffer);
  relaxKernel.setBinding(1, IBuffer);
  relaxKernel.setBinding(2, WBuffer);
  relaxKernel.setBinding(3, DOutBuffer);
  relaxKernel.setBinding(4, DiOutBuffer);

  updateDistanceKernel.setBinding(0, DOutBuffer);
  updateDistanceKernel.setBinding(1, DiOutBuffer);

  updatePredKernel.setBinding(0, VBuffer);
  updatePredKernel.setBinding(1, EBuffer);
  updatePredKernel.setBinding(2, IBuffer);
  updatePredKernel.setBinding(3, WBuffer);
  updatePredKernel.setBinding(4, DOutBuffer);
  updatePredKernel.setBinding(5, POutBuffer);

  const startTime = window.performance.now();

  for (let i = 1; i < V.length; i++) {
    relaxKernel.dispatch(1, 1);
    updateDistanceKernel.dispatch(1, 1);
  }
  updatePredKernel.dispatch(1, 1);

  // result
  const out = await readback.readBuffer(DiOutBuffer);
  const predecessor = await readback.readBuffer(POutBuffer);

  const labels = ['A', 'B', 'C', 'D', 'E'];
  for (let i = 0; i < V.length; i++) {
    console.log(
      \`from \${labels[0]} to \${labels[i]} = \${out[i]}, predecessor = \${labels[predecessor[i]]}\`,
    );
  }

  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

const { findShortestPath } = Algorithm;
const data = {
  nodes: [
    {
      id: 'A',
      label: 'A',
    },
    {
      id: 'B',
      label: 'B',
    },
    {
      id: 'C',
      label: 'C',
    },
    {
      id: 'D',
      label: 'D',
    },
    {
      id: 'E',
      label: 'E',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
      weight: 9,
    },
    {
      source: 'A',
      target: 'C',
      weight: 4,
    },
    {
      source: 'B',
      target: 'C',
      weight: 10,
    },
    {
      source: 'B',
      target: 'D',
      weight: 2,
    },
    {
      source: 'B',
      target: 'E',
      weight: 3,
    },
    {
      source: 'C',
      target: 'D',
      weight: 2,
    },
    {
      source: 'C',
      target: 'E',
      weight: 11,
    },
    {
      source: 'D',
      target: 'B',
      weight: 2,
    },
    {
      source: 'E',
      target: 'D',
      weight: 2,
    },
  ],
};

const startTime = window.performance.now();
for (let i = 0; i < data.nodes.length; i++) {
  const { length, path, allPath } = findShortestPath(data, 'A', data.nodes[i].id, true, 'weight');
  console.log(\`from A to \${data.nodes[i].id} = \${length}: \`, path);
}
console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
`,title:{zh:"Bellman-Ford \u6700\u77ED\u8DEF\u5F84\u7B97\u6CD5",en:"Bellman-Ford SSSP"},filename:"bellman-ford.js",isNew:!1},{id:"bellman-ford-big-dataset",source:`import { Canvas } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

const { BufferUsage } = DeviceRenderer;

/**
 * SSSP(Bellman-Ford) ported from CUDA,
 * find all shortest paths started from Node 0
 * @see https://www.lewuathe.com/illustration-of-distributed-bellman-ford-algorithm.html
 * @see https://github.com/sengorajkumar/gpu_graph_algorithms
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#findshortestpathgraphdata-start-end-directed-weightpropertyname
 *
 * dataset: 1k vertices & 5k edges
 * @see https://github.com/sengorajkumar/gpu_graph_algorithms/tree/master/input
 */

const $wrapper = document.getElementById('container');
(async () => {
  // load & parse CSV datasets, which use Compressed Sparse Row (CSR) for adjacency list
  const [V, E, From, To, I, W] = await Promise.all(
    [
      'https://gw.alipayobjects.com/os/bmw-prod/0272cae4-5ae0-4fbd-93f9-2b6a8e640a24.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/e8b24b84-3cc4-4a73-b213-7edf4467e03a.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/cba4ec3d-4eca-4f85-ae54-faeee0fa708a.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/8582d1ca-9fe6-4afb-8364-df6ccc619594.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/d84981b4-edcf-4df5-b672-45b0000fc5da.csv',
      'https://gw.alipayobjects.com/os/bmw-prod/eb455fa7-73ac-43fe-bc5e-d5e6c3a1fb77.csv',
    ].map(async (url, i) => {
      const res = await fetch(url);
      // adjust index for V, E, From and To
      return (await res.text()).split(',').map((v) => Number(v.trim()) - (i <= 3 ? 1 : 0));
    }),
  );

  // use G6's \`findShortestPath\` method
  let startTime = window.performance.now();
  let paths = calculateInCPU(V, From, To, W);
  showResult('CPU', startTime, window.performance.now(), paths);

  // use Compute Shader with WebGPU
  startTime = window.performance.now();
  paths = await calculateInGPU(V, E, I, W);
  showResult('GPU', startTime, window.performance.now(), paths);
})();

// calculate with G6's SSSP in CPU
const calculateInCPU = (V, From, To, W) => {
  const { findShortestPath } = Algorithm;
  const data = {
    nodes: V.map((v) => ({
      id: \`\${v}\`,
      label: \`\${v}\`,
    })),
    edges: From.map((from, i) => ({
      source: \`\${from}\`,
      target: \`\${To[i]}\`,
      weight: W[i],
    })),
  };

  const paths = [];
  for (let i = 0; i < data.nodes.length; i++) {
    // use SSSP for Node 0
    const { length, path } = findShortestPath(data, '0', data.nodes[i].id, true, 'weight');
    paths.push({
      to: data.nodes[i].id,
      length,
      path,
    });
  }
  return paths;
};

// we use 3 kernels
const calculateInGPU = async (V, E, I, W) => {
  // The total number of workgroup invocations (4096) exceeds the maximum allowed (256).
  const BLOCK_SIZE = 1;
  const BLOCKS = 256;
  const CANVAS_SIZE = 1;
  const MAX_DISTANCE = 1000000;

  // use WebGPU
  const renderer = new Renderer();
  renderer.registerPlugin(new Plugin());

  // create a canvas
  const canvas = new Canvas({
    container: $wrapper,
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    renderer,
  });

  // wait for canvas' services ready
  await canvas.ready;
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const relaxKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct AtomicBuffer {
  data: array<atomic<i32>>,
};

@group(0) @binding(0) var<storage, read> d_in_E : Buffer;
@group(0) @binding(1) var<storage, read> d_in_I : Buffer;
@group(0) @binding(2) var<storage, read> d_in_W : Buffer;
@group(0) @binding(3) var<storage, read> d_out_D : Buffer;
@group(0) @binding(4) var<storage, read_write> d_out_Di : AtomicBuffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    for (var j = d_in_I.data[index]; j < d_in_I.data[index + 1u]; j = j + 1) {
      var w = d_in_W.data[j];
      var du = d_out_D.data[index];
      var dv = d_out_D.data[d_in_E.data[j]];
      var newDist = du + w;
      if (du == \${MAX_DISTANCE}) {
        newDist = \${MAX_DISTANCE};
      }

      if (newDist < dv) {
        atomicMin(&d_out_Di.data[d_in_E.data[j]], newDist);
      }
    }
  }
}\`,
  });

  const updateDistanceKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};

@group(0) @binding(0) var<storage, read_write> d_out_D : Buffer;
@group(0) @binding(1) var<storage, read_write> d_out_Di : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    if (d_out_D.data[index] > d_out_Di.data[index]) {
      d_out_D.data[index] = d_out_Di.data[index];
    }
    d_out_Di.data[index] = d_out_D.data[index];
  }
}
    \`,
  });

  const updatePredKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct AtomicBuffer {
  data: array<atomic<i32>>,
};

@group(0) @binding(0) var<storage, read> d_in_V : Buffer;
@group(0) @binding(1) var<storage, read> d_in_E : Buffer;
@group(0) @binding(2) var<storage, read> d_in_I : Buffer;
@group(0) @binding(3) var<storage, read> d_in_W : Buffer;
@group(0) @binding(4) var<storage, read> d_out_D : Buffer;
@group(0) @binding(5) var<storage, read_write> d_out_P : AtomicBuffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    for (var j = d_in_I.data[index]; j < d_in_I.data[index + 1u]; j = j + 1) {
      var u = d_in_V.data[index];
      var w = d_in_W.data[j];

      var dis_u = d_out_D.data[index];
      var dis_v = d_out_D.data[d_in_E.data[j]];
      if (dis_v == dis_u + w) {
        atomicMin(&d_out_P.data[d_in_E.data[j]], u);
      }
    }
  }
}    
    \`,
  });

  const VBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(V),
  });
  const EBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(E),
  });
  const IBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(I),
  });
  const WBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(W),
  });
  const DOutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    // since we want to find all paths for Node 0, set the first element to 0
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });
  const DiOutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });

  // store predecessors
  const POutBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Int32Array([0, ...new Array(V.length - 1).fill(MAX_DISTANCE)]),
  });
  const readback = device.createReadback();

  relaxKernel.setBinding(0, EBuffer);
  relaxKernel.setBinding(1, IBuffer);
  relaxKernel.setBinding(2, WBuffer);
  relaxKernel.setBinding(3, DOutBuffer);
  relaxKernel.setBinding(4, DiOutBuffer);

  updateDistanceKernel.setBinding(0, DOutBuffer);
  updateDistanceKernel.setBinding(1, DiOutBuffer);

  updatePredKernel.setBinding(0, VBuffer);
  updatePredKernel.setBinding(1, EBuffer);
  updatePredKernel.setBinding(2, IBuffer);
  updatePredKernel.setBinding(3, WBuffer);
  updatePredKernel.setBinding(4, DOutBuffer);
  updatePredKernel.setBinding(5, POutBuffer);

  const grids = Math.ceil(V.length / (BLOCKS * BLOCK_SIZE));
  for (let i = 1; i < V.length; i++) {
    relaxKernel.dispatch(grids, 1);
    updateDistanceKernel.dispatch(grids, 1);
  }
  updatePredKernel.dispatch(grids, 1);

  const out = await readback.readBuffer(DiOutBuffer);
  const predecessor = await readback.readBuffer(POutBuffer);

  return Array.from(out).map((length, i) => ({
    to: V[i],
    length,
    predecessor: V[predecessor[i]],
  }));
};

const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the shortest paths will be printed in console.';
$wrapper.appendChild($text);

const showResult = (label, startTime, endTime, paths) => {
  const $cpu = document.createElement('div');
  $cpu.textContent = \`\${label} Time Elapsed: \${Number.parseFloat(endTime - startTime).toFixed(
    2,
  )}ms\`;
  $wrapper.appendChild($cpu);
  // print top nodes
  console.log(paths);
};
`,title:{zh:"Bellman-Ford \u6700\u77ED\u8DEF\u5F84\u7B97\u6CD5\uFF081k \u8282\u70B9 5k \u8FB9\uFF09",en:"Bellman-Ford SSSP(1k vertices & 5k edges)"},filename:"bellman-ford-big-dataset.js",isNew:!1},{id:"pagerank",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

const { BufferUsage } = DeviceRenderer;

/**
 * Pagerank with power method, ported from CUDA
 * @see https://github.com/princeofpython/PageRank-with-CUDA/blob/main/parallel.cu
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#pagerank
 */

/**
 * use Compressed Sparse Row (CSR) for adjacency list
 */
// datasource: https://github.com/sengorajkumar/gpu_graph_algorithms/blob/master/input/simple.gr_E.csv
const V = [0, 1, 2, 3, 4];
const E = [1, 2, 2, 3, 4, 3, 4, 1, 3];
const I = [0, 2, 5, 7, 8, 10];
const W = [9, 4, 10, 2, 3, 2, 11, 2, 2];
const From = [0, 0, 1, 1, 1, 2, 2, 3, 4];
const To = [1, 2, 2, 3, 4, 3, 4, 1, 3];
const BLOCK_SIZE = 1;
const BLOCKS = 5;

const CANVAS_SIZE = 1;

const $wrapper = document.getElementById('container');
const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the top nodes will be printed in console.';
$wrapper.appendChild($text);

// use WebGPU
const renderer = new Renderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const canvas = new Canvas({
  container: $wrapper,
  width: CANVAS_SIZE,
  height: CANVAS_SIZE,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const storeKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> r : Buffer;
@group(0) @binding(1) var<storage, write> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    r_last.data[index] = r.data[index];
  }
}\`,
  });

  const matmulKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> graph : Buffer;
@group(0) @binding(1) var<storage, read_write> r : Buffer;
@group(0) @binding(2) var<storage, read> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    var sum = 0.0;
    for (var i = 0u; i < \${V.length}u; i = i + 1u) {
      sum = sum + r_last.data[i] * graph.data[index * \${V.length}u + i];
    }
    r.data[index] = sum;
  }
}
    \`,
  });

  const rankDiffKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> r : Buffer;
@group(0) @binding(1) var<storage, read_write> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    r_last.data[index] = abs(r_last.data[index] - r.data[index]);
  }
}    
    \`,
  });

  pageRankGPU(device, storeKernel, matmulKernel, rankDiffKernel);
});

const pageRankGPU = async (device, storeKernel, matmulKernel, rankDiffKernel) => {
  const d = 0.85;
  const eps = 0.000001;
  let maxIteration = 1000;
  const n = V.length;
  const graph = new Float32Array(new Array(n * n).fill((1 - d) / n));
  const r = new Float32Array(new Array(n).fill(1 / n));

  From.forEach((from, i) => {
    graph[To[i] * n + from] += d * 1.0;
  });

  for (let j = 0; j < n; j++) {
    let sum = 0.0;

    for (let i = 0; i < n; ++i) {
      sum += graph[i * n + j];
    }

    for (let i = 0; i < n; ++i) {
      if (sum != 0.0) {
        graph[i * n + j] /= sum;
      } else {
        graph[i * n + j] = 1 / n;
      }
    }
  }

  const rBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array(r),
  });
  const rLastBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array(n),
  });
  const graphBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Float32Array(graph),
  });

  const readback = device.createReadback();

  storeKernel.setBinding(0, rBuffer);
  storeKernel.setBinding(1, rLastBuffer);

  matmulKernel.setBinding(0, graphBuffer);
  matmulKernel.setBinding(1, rBuffer);
  matmulKernel.setBinding(2, rLastBuffer);

  rankDiffKernel.setBinding(0, rBuffer);
  rankDiffKernel.setBinding(1, rLastBuffer);

  const startTime = window.performance.now();
  while (maxIteration--) {
    storeKernel.dispatch(1, 1);

    matmulKernel.dispatch(1, 1);

    rankDiffKernel.dispatch(1, 1);

    const last = await readback.readBuffer(rLastBuffer);
    const result = last.reduce((prev, cur) => prev + cur, 0);
    if (result < eps) {
      const out = await readback.readBuffer(rBuffer);
      console.log(out);
      break;
    }
  }

  console.log(\`GPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
};

const { pageRank } = Algorithm;
const data = {
  nodes: [
    {
      id: 'A',
      label: 'A',
    },
    {
      id: 'B',
      label: 'B',
    },
    {
      id: 'C',
      label: 'C',
    },
    {
      id: 'D',
      label: 'D',
    },
    {
      id: 'E',
      label: 'E',
    },
  ],
  edges: [
    {
      source: 'A',
      target: 'B',
    },
    {
      source: 'A',
      target: 'C',
    },
    {
      source: 'B',
      target: 'C',
    },
    {
      source: 'B',
      target: 'D',
    },
    {
      source: 'B',
      target: 'E',
    },
    {
      source: 'C',
      target: 'D',
    },
    {
      source: 'C',
      target: 'E',
    },
    {
      source: 'D',
      target: 'B',
    },
    {
      source: 'E',
      target: 'D',
    },
  ],
};

const startTime = window.performance.now();
const result = pageRank(data);
console.log(result);
console.log(\`CPU Time Elapsed: \${window.performance.now() - startTime}ms\`);
`,title:{zh:"Pagerank \u7B97\u6CD5",en:"Pagerank"},filename:"pagerank.js",isNew:!1},{id:"pagerank-big-dataset",source:`import { Canvas } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { DeviceRenderer, Renderer } from '@antv/g-webgpu';
import { Algorithm } from '@antv/g6';

const { BufferUsage } = DeviceRenderer;

/**
 * Pagerank with power method, ported from CUDA
 * @see https://github.com/princeofpython/PageRank-with-CUDA/blob/main/parallel.cu
 *
 * compared with G6:
 * @see https://g6.antv.vision/zh/docs/api/Algorithm#pagerank
 *
 * dataset: 1k vertices & 50w edges
 * @see https://github.com/sengorajkumar/gpu_graph_algorithms/tree/master/input
 */

const $wrapper = document.getElementById('container');
(async () => {
  // load & parse TXT datasets
  const res = await fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/b2e21724-d8b7-415d-9fea-9b41b21410b8.txt',
  );
  const text = await res.text();
  let V = [];
  const From = [];
  const To = [];
  text.split('\\n').forEach((line, i) => {
    if (i === 0) {
      const [vertices] = line.split(' ');
      V = new Array(Number(vertices)).fill(undefined).map((_, i) => i);
    } else {
      const [from, to] = line.split(' ');
      From.push(Number(from));
      To.push(Number(to));
    }
  });

  // use G6's \`pagerank\` method
  let startTime = window.performance.now();
  let topNodes = calculateInCPU(V, From, To);
  showResult('CPU', startTime, window.performance.now(), topNodes);

  // use Compute Shader with WebGPU
  startTime = window.performance.now();
  topNodes = await calculateInGPU(V, From, To);
  showResult('GPU', startTime, window.performance.now(), topNodes);
})();

// calculate with G6's pagerank in CPU
const calculateInCPU = (V, From, To) => {
  const { pageRank } = Algorithm;
  const data = {
    nodes: V.map((v) => ({
      id: \`\${v}\`,
      label: \`\${v}\`,
    })),
    edges: From.map((from, i) => ({
      source: \`\${from}\`,
      target: \`\${To[i]}\`,
    })),
  };

  const result = pageRank(data);
  return Object.keys(result)
    .map((key) => ({ id: Number(key), value: result[key] }))
    .sort((a, b) => b.value - a.value);
};

// we use 3 kernels
const calculateInGPU = async (V, From, To) => {
  // The total number of workgroup invocations (4096) exceeds the maximum allowed (256).
  const BLOCK_SIZE = 1;
  const BLOCKS = 256;
  const CANVAS_SIZE = 1;
  const d = 0.85;
  const eps = 0.000001;
  let maxIteration = 1000;

  // use WebGPU
  const renderer = new Renderer();
  renderer.registerPlugin(new Plugin());

  // create a canvas
  const canvas = new Canvas({
    container: $wrapper,
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    renderer,
  });

  // wait for canvas' services ready
  await canvas.ready;

  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const n = V.length;
  const graph = new Float32Array(new Array(n * n).fill((1 - d) / n));
  const r = new Float32Array(new Array(n).fill(1 / n));

  From.forEach((from, i) => {
    graph[To[i] * n + from] += d * 1.0;
  });

  for (let j = 0; j < n; j++) {
    let sum = 0.0;

    for (let i = 0; i < n; ++i) {
      sum += graph[i * n + j];
    }

    for (let i = 0; i < n; ++i) {
      if (sum != 0.0) {
        graph[i * n + j] /= sum;
      } else {
        graph[i * n + j] = 1 / n;
      }
    }
  }

  const storeKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> r : Buffer;
@group(0) @binding(1) var<storage, write> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    r_last.data[index] = r.data[index];
  }
}\`,
  });

  const matmulKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> graph : Buffer;
@group(0) @binding(1) var<storage, read_write> r : Buffer;
@group(0) @binding(2) var<storage, read> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    var sum = 0.0;
    for (var i = 0u; i < \${V.length}u; i = i + 1u) {
      sum = sum + r_last.data[i] * graph.data[index * \${V.length}u + i];
    }
    r.data[index] = sum;
  }
}
    \`,
  });

  const rankDiffKernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<f32>,
};

@group(0) @binding(0) var<storage, read> r : Buffer;
@group(0) @binding(1) var<storage, read_write> r_last : Buffer;

@stage(compute) @workgroup_size(\${BLOCKS}, \${BLOCK_SIZE})
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>
) {
  var index = global_id.x;
  if (index < \${V.length}u) {
    r_last.data[index] = abs(r_last.data[index] - r.data[index]);
  }
}    
    \`,
  });

  const rBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array(r),
  });
  const rLastBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array(n),
  });
  const graphBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Float32Array(graph),
  });

  const readback = device.createReadback();

  storeKernel.setBinding(0, rBuffer);
  storeKernel.setBinding(1, rLastBuffer);

  matmulKernel.setBinding(0, graphBuffer);
  matmulKernel.setBinding(1, rBuffer);
  matmulKernel.setBinding(2, rLastBuffer);

  rankDiffKernel.setBinding(0, rBuffer);
  rankDiffKernel.setBinding(1, rLastBuffer);

  const grids = Math.ceil(V.length / (BLOCKS * BLOCK_SIZE));

  while (maxIteration--) {
    storeKernel.dispatch(grids, 1);
    matmulKernel.dispatch(grids, 1);
    rankDiffKernel.dispatch(grids, 1);

    const last = await readback.readBuffer(rLastBuffer);
    const result = last.reduce((prev, cur) => prev + cur, 0);
    if (result < eps) {
      const out = await readback.readBuffer(rBuffer);

      return Array.from(out)
        .map((value, id) => ({ id, value }))
        .sort((a, b) => b.value - a.value);
    }
  }
};

const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the top nodes will be printed in console.';
$wrapper.appendChild($text);

const showResult = (label, startTime, endTime, topNodes) => {
  const $cpu = document.createElement('div');
  $cpu.textContent = \`\${label} Time Elapsed: \${Number.parseFloat(endTime - startTime).toFixed(
    2,
  )}ms\`;
  $wrapper.appendChild($cpu);
  // print top nodes
  console.log(topNodes);
};
`,title:{zh:"Pagerank \u7B97\u6CD5\uFF081k \u8282\u70B9 50w \u8FB9\uFF09",en:"Pagerank(1k vertices & 50w edges)"},filename:"pagerank-big-dataset.js",isNew:!1},{id:"fruchterman",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*awdETLjRlqgAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, Circle, Line } from '@antv/g';
import { Kernel, Plugin } from '@antv/g-plugin-gpgpu';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { DeviceRenderer, Renderer as WebGPURenderer } from '@antv/g-webgpu';

const { BufferUsage } = DeviceRenderer;

/**
 * ported from https://nblintao.github.io/ParaGraphL/
 * speed up ~100x(100ms vs 30s) compared with G6 @see https://g6.antv.vision/zh/examples/net/furchtermanLayout#fruchtermanWebWorker
 *
 * rewrite with WGSL(WebGPU Shader Language),
 * use Compressed Sparse Row (CSR) for adjacency list
 */

const MAX_ITERATION = 1000;
const CANVAS_SIZE = 600;

// use WebGPU
const renderer = new WebGPURenderer();
renderer.registerPlugin(new Plugin());

// create a canvas
const $wrapper = document.getElementById('container');
const $text = document.createElement('div');
$text.textContent = 'Please open the devtools, the shortest paths will be printed in console.';
$wrapper.appendChild($text);

const canvas = new Canvas({
  container: $wrapper,
  width: 1,
  height: 1,
  renderer,
});

(async () => {
  await canvas.ready;

  // @see https://g6.antv.vision/en/examples/net/forceDirected/#basicForceDirected
  const data = await (
    await fetch(
      'https://gw.alipayobjects.com/os/basement_prod/7bacd7d1-4119-4ac1-8be3-4c4b9bcbc25f.json',
    )
  ).json();

  let startTime = window.performance.now();

  const center = [CANVAS_SIZE / 2, CANVAS_SIZE / 2];
  // generate position of each node
  const nodes = data.nodes.map((n) => ({
    x: Math.random() * CANVAS_SIZE,
    y: Math.random() * CANVAS_SIZE,
    id: n.id,
  }));
  const nodeNum = nodes.length;
  const [edges, indices, positions] = generateCSR(nodes, data.edges);

  const area = CANVAS_SIZE * CANVAS_SIZE;
  let maxDisplace = Math.sqrt(area) / 10;
  const k2 = area / (nodes.length + 1);
  const k = Math.sqrt(k2);

  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();
  const kernel = new Kernel(device, {
    computeShader: \`
struct Buffer {
  data: array<i32>,
};
struct PositionBuffer {
  data: array<vec2<f32>>,
};
@group(0) @binding(0) var<storage, read> edges : Buffer;
@group(0) @binding(1) var<storage, read> indices : Buffer;
@group(0) @binding(2) var<storage, read_write> positions : PositionBuffer;

struct Params {
  vertexNum: f32,
  k: f32,
  k2: f32,
  gravity: f32,
  speed: f32,
  maxDisplace: f32,
  center: vec2<f32>,
};
@group(0) @binding(3) var<uniform> params : Params;

fn calc_repulsive(i: u32, current_node: vec2<f32>) -> vec2<f32> {
  var dx = 0.0;
  var dy = 0.0;
  for (var j = 0u; j < u32(params.vertexNum); j = j + 1u) {
    if (i != j) {
      var nextNode = positions.data[j];
      var x_dist = current_node[0] - nextNode[0];
      var y_dist = current_node[1] - nextNode[1];
      var dist = sqrt(x_dist * x_dist + y_dist * y_dist) + 0.01;
      if (dist > 0.0) {
        var repulsiveF = params.k2 / dist;
        dx = dx + x_dist / dist * repulsiveF;
        dy = dy + y_dist / dist * repulsiveF;
      }
    }
  }
  return vec2<f32>(dx, dy);
}

fn calc_gravity(current_node: vec2<f32>) -> vec2<f32> {
  var dx = 0.0;
  var dy = 0.0;
  var vx = current_node[0] - params.center[0];
  var vy = current_node[1] - params.center[1];
  var gf = 0.01 * params.k * params.gravity;
  dx = gf * vx;
  dy = gf * vy;

  return vec2<f32>(dx, dy);
}

fn calc_attractive(i: u32, current_node: vec2<f32>) -> vec2<f32> {
  var dx = 0.0;
  var dy = 0.0;

  for (var j = indices.data[i]; j < indices.data[i + 1u]; j = j + 1) {
    var next_node = positions.data[edges.data[j]];
    var x_dist = current_node[0] - next_node[0];
    var y_dist = current_node[1] - next_node[1];
    var dist = sqrt(x_dist * x_dist + y_dist * y_dist) + 0.01;
    var attractiveF = dist * dist / params.k;
    if (dist > 0.0) {
      dx = dx - x_dist / dist * attractiveF;
      dy = dy - y_dist / dist * attractiveF;
    }
  }

  return vec2<f32>(dx, dy);
}

@stage(compute) @workgroup_size(1, 1)
fn main(
  @builtin(global_invocation_id) global_id : vec3<u32>,
) {
  var i = global_id.x;
  if (i < u32(params.vertexNum)) {
    var current_node = positions.data[i];
    var dx = 0.0;
    var dy = 0.0;

    // repulsive
    var repulsive = calc_repulsive(i, current_node);
    dx = dx + repulsive[0];
    dy = dy + repulsive[1];

    // attractive
    var attractive = calc_attractive(i, current_node);
    dx = dx + attractive[0];
    dy = dy + attractive[1];

    // gravity
    var gravity = calc_gravity(current_node);
    dx = dx - gravity[0];
    dy = dy - gravity[1];

    // speed
    dx = dx * params.speed;
    dy = dy * params.speed;

    // move
    var dist_length = sqrt(dx * dx + dy * dy);
    if (dist_length > 0.0) {
      var limited_dist = min(params.maxDisplace * params.speed, dist_length);

      positions.data[i] = vec2<f32>(
        positions.data[i][0] + dx / dist_length * limited_dist,
        positions.data[i][1] + dy / dist_length * limited_dist,
      );
    }
  }
}\`,
  });

  const readback = device.createReadback();
  const edgesBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(edges),
  });
  const indicesBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE,
    viewOrSize: new Int32Array(indices),
  });
  const positionsBuffer = device.createBuffer({
    usage: BufferUsage.STORAGE | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array(positions),
  });
  const paramBuffer = device.createBuffer({
    usage: BufferUsage.UNIFORM | BufferUsage.COPY_DST | BufferUsage.COPY_SRC,
    viewOrSize: new Float32Array([nodeNum, k, k2, 10, 0.1, maxDisplace, center[0], center[1]]),
  });

  kernel.setBinding(0, edgesBuffer);
  kernel.setBinding(1, indicesBuffer);
  kernel.setBinding(2, positionsBuffer);
  kernel.setBinding(3, paramBuffer);

  for (let i = 0; i < MAX_ITERATION; i++) {
    kernel.dispatch(nodeNum, 1);

    // update uniform
    maxDisplace *= 0.99;
    paramBuffer.setSubData(5 * 4, new Float32Array([maxDisplace]));
  }

  const result = await readback.readBuffer(positionsBuffer);

  console.log(
    \`GPU Time Elapsed: \${Number.parseFloat(window.performance.now() - startTime).toFixed(2)}ms\`,
  );

  renderCircles(edges, indices, result);
})();

const generateCSR = (nodes, edges) => {
  const resultEdges = [];
  const indices = [];
  const positions = [];
  const nodeDict = [];
  const mapIdPos = {}; // { A: 0, B: 1, C: 2 }
  let i = 0;
  for (i = 0; i < nodes.length; i++) {
    const { id, x, y } = nodes[i];
    mapIdPos[id] = i;
    nodeDict.push([]);
    positions.push(x, y);
  }
  for (i = 0; i < edges.length; i++) {
    const e = edges[i];
    nodeDict[mapIdPos[e.source]].push(mapIdPos[e.target]);
    nodeDict[mapIdPos[e.target]].push(mapIdPos[e.source]);
  }

  for (i = 0; i < nodes.length; i++) {
    const offset = resultEdges.length;
    const dests = nodeDict[i];
    const len = dests.length;
    indices[i] = offset;
    for (let j = 0; j < len; ++j) {
      const dest = dests[j];
      resultEdges.push(dest);
    }
  }

  indices.push(resultEdges.length);

  return [resultEdges, indices, positions];
};

function renderCircles(edges, indices, positions) {
  const $canvasContainer = document.createElement('div');
  $wrapper.appendChild($canvasContainer);

  const renderer = new WebGLRenderer({ targets: ['webgl2', 'webgl1'] });
  const canvas = new Canvas({
    container: $canvasContainer,
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    renderer,
  });

  canvas.addEventListener(CanvasEvent.READY, () => {
    // draw edges
    for (let i = 0; i < indices.length - 1; i++) {
      const x1 = positions[i * 2];
      const y1 = positions[i * 2 + 1];

      for (let j = indices[i]; j < indices[i + 1]; j++) {
        const x2 = positions[edges[j] * 2];
        const y2 = positions[edges[j] * 2 + 1];
        canvas.appendChild(
          new Line({
            style: {
              x1,
              y1,
              x2,
              y2,
              stroke: '#1890FF',
              lineWidth: 1,
            },
          }),
        );
      }
    }

    // draw nodes
    for (let i = 0; i < positions.length; i += 2) {
      const x = positions[i];
      const y = positions[i + 1];

      canvas.appendChild(
        new Circle({
          style: {
            cx: x,
            cy: y,
            r: 5,
            fill: 'red',
            stroke: 'blue',
            lineWidth: 2,
          },
        }),
      );
    }
  });
}
`,title:{zh:"Fruchterman \u5E03\u5C40\u7B97\u6CD5",en:"Fruchterman Layout"},filename:"fruchterman.js",isNew:!1}],icon:"",id:"graph-analysis-algorithm",title:{en:"Graph Analysis Algorithm",zh:"\u56FE\u5206\u6790\u7B97\u6CD5"},childrenKey:"demos",order:2}],childrenKey:"examples"},{id:"3d",title:{zh:"3D",en:"3D"},examples:[{demos:[{id:"point",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*gPLVTK2YDxAAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  PointMaterial,
  BufferGeometry,
  Mesh,
  VertexBufferFrequency,
  Format,
  VertexAttributeBufferIndex,
  VertexAttributeLocation,
  Plugin as Plugin3D,
  PrimitiveTopology,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import Stats from 'stats.js';
import * as lil from 'lil-gui';

/**
 * ported from @see https://threejs.org/examples/#webgl_points_sprites
 */

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
  background: 'black',
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;

  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // create buffer geometry
  const bufferGeometry = new BufferGeometry(device);
  bufferGeometry.setVertexBuffer({
    bufferIndex: VertexAttributeBufferIndex.POSITION,
    byteStride: 4 * 3,
    frequency: VertexBufferFrequency.PerVertex,
    attributes: [
      {
        format: Format.F32_RGB,
        bufferByteOffset: 4 * 0,
        location: VertexAttributeLocation.POSITION,
      },
    ],
    // use 6 vertices
    data: Float32Array.from([
      -100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, -100.0, 100.0, -100.0, -100.0, 100.0,
    ]),
  });
  // draw 4 vertices
  bufferGeometry.vertexCount = 4;
  // use GL_POINT instead of GL_TRIANGLES
  bufferGeometry.drawMode = PrimitiveTopology.Points;

  // load texture with URL
  const map = plugin.loadTexture('https://threejs.org/examples/textures/sprites/snowflake1.png');
  const pointMaterial = new PointMaterial(device, {
    size: 100,
    map,
    depthTest: false,
  });

  const mesh = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: bufferGeometry,
      material: pointMaterial,
    },
  });
  mesh.setPosition(300, 250, 0);
  canvas.appendChild(mesh);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const pointFolder = gui.addFolder('point');
  const pointConfig = {
    size: 100,
    vertexNum: 4,
  };
  pointFolder.add(pointConfig, 'size', 1, 100, 1).onChange((size) => {
    pointMaterial.size = size;
  });
  pointFolder.add(pointConfig, 'vertexNum', 0, 4, 1).onChange((vertexNum) => {
    bufferGeometry.vertexCount = vertexNum;
  });
  pointFolder.open();
})();
`,title:{zh:"\u70B9",en:"Point"},filename:"point.js",isNew:!1},{id:"plane",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*MdWeQJCW_hoAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import { MeshBasicMaterial, PlaneGeometry, Mesh, Plugin as Plugin3D } from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;

  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const planeGeometry = new PlaneGeometry(device, {
    width: 200,
    depth: 200,
    widthSegments: 1,
    depthSegments: 1,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    wireframe: true,
  });

  const plane = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: planeGeometry,
      material: basicMaterial,
    },
  });

  plane.setPosition(300, 250, 0);
  canvas.appendChild(plane);

  const plane2 = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      width: 400,
      depth: 400,
      geometry: planeGeometry,
      material: basicMaterial,
    },
  });
  plane2.setPosition(300, 450, 0);
  canvas.appendChild(plane2);

  canvas.getCamera().setPosition(300, 0, 500);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    // plane.rotate(0, 1, 0);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const planeFolder = gui.addFolder('plane');
  const planeConfig = {
    opacity: 1,
    fill: '#1890FF',
  };
  planeFolder.add(planeConfig, 'opacity', 0, 1, 0.1).onChange((opacity) => {
    plane.style.opacity = opacity;
  });
  planeFolder.addColor(planeConfig, 'fill').onChange((color) => {
    plane.style.fill = color;
  });
  planeFolder.open();

  const geometryFolder = gui.addFolder('geometry');
  const geometryConfig = {
    width: 200,
    depth: 200,
    widthSegments: 5,
    depthSegments: 5,
  };
  geometryFolder.add(geometryConfig, 'width', 50, 300).onChange((width) => {
    planeGeometry.width = width;
  });
  geometryFolder.add(geometryConfig, 'depth', 50, 300).onChange((depth) => {
    planeGeometry.depth = depth;
  });
  geometryFolder.add(geometryConfig, 'widthSegments', 1, 10, 1).onChange((widthSegments) => {
    planeGeometry.widthSegments = widthSegments;
  });
  geometryFolder.add(geometryConfig, 'depthSegments', 1, 10, 1).onChange((depthSegments) => {
    planeGeometry.depthSegments = depthSegments;
  });
  geometryFolder.open();
})();
`,title:{zh:"\u5E73\u9762",en:"Plane"},filename:"plane.js",isNew:!1},{id:"cube",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*xZcvSrlYoE8AAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshBasicMaterial,
  CubeGeometry,
  Mesh,
  Format,
  TextureDimension,
  TextureUsage,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;

  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // 1. load texture with URL
  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ',
  );

  // 2. or create texture from scratch
  // const map = device.createTexture({
  //   pixelFormat: Format.U8_RGBA_NORM,
  //   width: 1,
  //   height: 1,
  //   depth: 1,
  //   numLevels: 1,
  //   dimension: TextureDimension.n2D,
  //   usage: TextureUsage.Sampled,
  // });
  // // load image
  // const image = new window.Image();
  // image.onload = () => {
  //   map.setImageData(image);
  //   canvas.getRenderingService().dirtify();
  // };
  // image.onerror = () => {};
  // image.crossOrigin = 'Anonymous';
  // image.src =
  //   'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ';

  const cubeGeometry = new CubeGeometry(device, {
    width: 200,
    height: 200,
    depth: 200,
  });
  const basicMaterial = new MeshBasicMaterial(device, {
    // wireframe: true,
    map,
  });

  const cube = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: cubeGeometry,
      material: basicMaterial,
    },
  });

  cube.setPosition(300, 250, 0);

  canvas.appendChild(cube);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    // cube.rotate(0, 1, 0);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const cubeFolder = gui.addFolder('cube');
  const cubeConfig = {
    opacity: 1,
    fill: '#1890FF',
  };
  cubeFolder.add(cubeConfig, 'opacity', 0, 1, 0.1).onChange((opacity) => {
    cube.style.opacity = opacity;
  });
  cubeFolder.addColor(cubeConfig, 'fill').onChange((color) => {
    cube.style.fill = color;
  });
  cubeFolder.open();

  const geometryFolder = gui.addFolder('geometry');
  const geometryConfig = {
    width: 200,
    height: 200,
    depth: 200,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
  };
  geometryFolder.add(geometryConfig, 'width', 50, 300).onChange((width) => {
    cubeGeometry.width = width;
  });
  geometryFolder.add(geometryConfig, 'height', 50, 300).onChange((height) => {
    cubeGeometry.height = height;
  });
  geometryFolder.add(geometryConfig, 'depth', 50, 300).onChange((depth) => {
    cubeGeometry.depth = depth;
  });
  geometryFolder.add(geometryConfig, 'widthSegments', 1, 10, 1).onChange((widthSegments) => {
    cubeGeometry.widthSegments = widthSegments;
  });
  geometryFolder.add(geometryConfig, 'heightSegments', 1, 10, 1).onChange((heightSegments) => {
    cubeGeometry.heightSegments = heightSegments;
  });
  geometryFolder.add(geometryConfig, 'depthSegments', 1, 10, 1).onChange((depthSegments) => {
    cubeGeometry.depthSegments = depthSegments;
  });
  geometryFolder.open();

  const materialFolder = gui.addFolder('material');
  const materialConfig = {
    wireframe: false,
    map: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ',
  };
  materialFolder.add(materialConfig, 'wireframe').onChange((wireframe) => {
    cube.style.material.wireframe = !!wireframe;
  });
  materialFolder
    .add(materialConfig, 'map', [
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*_aqoS73Se3sAAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8TlCRIsKeUkAAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      'none',
    ])
    .onChange((mapURL) => {
      if (mapURL === 'none') {
        cube.style.material.map = null;
      } else {
        cube.style.material.map = plugin.loadTexture(mapURL);
      }
    });
  materialFolder.open();
})();
`,title:{zh:"\u7ACB\u65B9\u4F53",en:"Cube"},filename:"cube.js",isNew:!1},{id:"sphere",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*zjiQSol4PdcAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshPhongMaterial,
  SphereGeometry,
  AmbientLight,
  DirectionalLight,
  Mesh,
  Fog,
  FogType,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
  background: 'black',
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;
  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const map = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*npAsSLPX4A4AAAAAAAAAAAAAARQnAQ',
  );
  const specularMap = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8wz0QaP_bjoAAAAAAAAAAAAAARQnAQ',
  );
  const bumpMap = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*kuUITY47ZhMAAAAAAAAAAAAAARQnAQ',
  );
  const cloudMap = plugin.loadTexture(
    'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N2ooTq4cQroAAAAAAAAAAAAAARQnAQ',
  );

  // create a sphere geometry
  const sphereGeometry = new SphereGeometry(device, {
    radius: 200,
    latitudeBands: 32,
    longitudeBands: 32,
  });
  // create a material with Phong lighting model
  const basicMaterial = new MeshPhongMaterial(device, {
    map,
    specular: 'white',
    specularMap,
    bumpMap,
    bumpScale: 5,
    shininess: 10,
  });
  const cloudMaterial = new MeshPhongMaterial(device, {
    map: cloudMap,
    doubleSide: true,
    depthWrite: false,
  });

  // create a mesh
  const sphere = new Mesh({
    style: {
      x: 300,
      y: 250,
      z: 0,
      fill: '#1890FF',
      opacity: 1,
      geometry: sphereGeometry,
      material: basicMaterial,
    },
  });
  canvas.appendChild(sphere);

  // const cloudMesh = new Mesh({
  //   style: {
  //     opacity: 0.2,
  //     geometry: sphereGeometry,
  //     material: cloudMaterial,
  //   },
  // });
  // sphere.appendChild(cloudMesh);

  // add a directional light into scene
  const light = new DirectionalLight({
    style: {
      fill: 'white',
      direction: [-1, 0, 1],
    },
  });
  canvas.appendChild(light);

  const ambientLight = new AmbientLight({
    style: {
      fill: '#000',
    },
  });
  canvas.appendChild(ambientLight);

  // create fog, append to canvas later
  const fog = new Fog();

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    sphere.rotate(0, 0.2, 0);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const ambientFolder = gui.addFolder('ambient light');
  const ambientLightConfig = {
    fill: '#000',
  };
  ambientFolder.addColor(ambientLightConfig, 'fill').onChange((fill) => {
    ambientLight.style.fill = fill;
  });

  const lightFolder = gui.addFolder('directional light');
  const lightConfig = {
    fill: '#FFF',
    intensity: Math.PI,
    directionX: -1,
    directionY: 0,
    directionZ: 1,
  };
  lightFolder.addColor(lightConfig, 'fill').onChange((fill) => {
    light.style.fill = fill;
  });
  lightFolder.add(lightConfig, 'intensity', 0, 20).onChange((intensity) => {
    light.style.intensity = intensity;
  });
  lightFolder.add(lightConfig, 'directionX', -1, 1).onChange((directionX) => {
    const direction = light.style.direction;
    light.style.direction = [directionX, direction[1], direction[2]];
  });
  lightFolder.add(lightConfig, 'directionY', -1, 1).onChange((directionY) => {
    const direction = light.style.direction;
    light.style.direction = [direction[0], directionY, direction[2]];
  });
  lightFolder.add(lightConfig, 'directionZ', -1, 1).onChange((directionZ) => {
    const direction = light.style.direction;
    light.style.direction = [direction[0], direction[1], directionZ];
  });
  lightFolder.open();

  const fogFolder = gui.addFolder('fog');
  const fogConfig = {
    enable: false,
    type: FogType.NONE,
    fill: '#000',
    start: 1,
    end: 1000,
    density: 0,
  };
  fogFolder.add(fogConfig, 'enable').onChange((enable) => {
    if (enable) {
      canvas.appendChild(fog);
    } else {
      canvas.removeChild(fog);
    }
  });
  fogFolder
    .add(fogConfig, 'type', [FogType.NONE, FogType.EXP, FogType.EXP2, FogType.LINEAR])
    .onChange((type) => {
      fog.style.type = type;
    });
  fogFolder.addColor(fogConfig, 'fill').onChange((fill) => {
    fog.style.fill = fill;
  });
  fogFolder.add(fogConfig, 'start', 0, 1000).onChange((start) => {
    fog.style.start = start;
  });
  fogFolder.add(fogConfig, 'end', 0, 1000).onChange((end) => {
    fog.style.end = end;
  });
  fogFolder.add(fogConfig, 'density', 0, 5).onChange((density) => {
    fog.style.density = density;
  });
  fogFolder.open();

  const sphereFolder = gui.addFolder('sphere');
  const sphereConfig = {
    opacity: 1,
    fill: '#1890FF',
  };
  sphereFolder.add(sphereConfig, 'opacity', 0, 1, 0.1).onChange((opacity) => {
    sphere.style.opacity = opacity;
  });
  sphereFolder.addColor(sphereConfig, 'fill').onChange((color) => {
    sphere.style.fill = color;
  });
  sphereFolder.open();

  const geometryFolder = gui.addFolder('geometry');
  const geometryConfig = {
    radius: 200,
    latitudeBands: 32,
    longitudeBands: 32,
  };
  geometryFolder.add(geometryConfig, 'radius', 50, 300).onChange((radius) => {
    sphereGeometry.radius = radius;
  });
  geometryFolder.add(geometryConfig, 'latitudeBands', 8, 64, 1).onChange((latitudeBands) => {
    sphereGeometry.latitudeBands = latitudeBands;
  });
  geometryFolder.add(geometryConfig, 'longitudeBands', 8, 64, 1).onChange((longitudeBands) => {
    sphereGeometry.longitudeBands = longitudeBands;
  });
  geometryFolder.open();

  const materialFolder = gui.addFolder('material');
  const materialConfig = {
    map: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*npAsSLPX4A4AAAAAAAAAAAAAARQnAQ',
    emissive: '#000000',
    specular: '#FFFFFF',
    specularMap:
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8wz0QaP_bjoAAAAAAAAAAAAAARQnAQ',
    shininess: 10,
    bumpMap:
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*kuUITY47ZhMAAAAAAAAAAAAAARQnAQ',
    bumpScale: 5,
    wireframe: false,
  };
  materialFolder
    .add(materialConfig, 'map', [
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*npAsSLPX4A4AAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      'none',
    ])
    .onChange((mapURL) => {
      if (mapURL === 'none') {
        sphere.style.material.map = null;
      } else {
        const map = plugin.loadTexture(mapURL);
        sphere.style.material.map = map;
      }
    });
  materialFolder.addColor(materialConfig, 'emissive').onChange((emissive) => {
    sphere.style.material.emissive = emissive;
  });
  materialFolder.addColor(materialConfig, 'specular').onChange((specular) => {
    sphere.style.material.specular = specular;
  });
  materialFolder
    .add(materialConfig, 'specularMap', [
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8wz0QaP_bjoAAAAAAAAAAAAAARQnAQ',
      'none',
    ])
    .onChange((specularMapURL) => {
      if (specularMapURL === 'none') {
        sphere.style.material.specularMap = null;
      } else {
        const specularMap = plugin.loadTexture(specularMapURL);
        sphere.style.material.specularMap = specularMap;
      }
    });
  materialFolder.add(materialConfig, 'shininess', 0, 100).onChange((shininess) => {
    sphere.style.material.shininess = shininess;
  });
  materialFolder
    .add(materialConfig, 'bumpMap', [
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*kuUITY47ZhMAAAAAAAAAAAAAARQnAQ',
      'none',
    ])
    .onChange((bumpMapURL) => {
      if (bumpMapURL === 'none') {
        sphere.style.material.bumpMap = null;
      } else {
        const bumpMap = plugin.loadTexture(bumpMapURL);
        sphere.style.material.bumpMap = bumpMap;
      }
    });
  materialFolder.add(materialConfig, 'bumpScale', 0, 10).onChange((bumpScale) => {
    sphere.style.material.bumpScale = bumpScale;
  });
  materialFolder.add(materialConfig, 'wireframe').onChange((enable) => {
    sphere.style.material.wireframe = !!enable;
  });
  materialFolder.open();
})();
`,title:{zh:"\u7403",en:"Sphere"},filename:"sphere.js",isNew:!1},{id:"torus",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*C5ZXT7TaG9cAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshPhongMaterial,
  TorusGeometry,
  DirectionalLight,
  Mesh,
  FogType,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;
  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  const torusGeometry = new TorusGeometry(device, {
    tubeRadius: 30,
    ringRadius: 200,
  });
  const basicMaterial = new MeshPhongMaterial(device);

  const torus = new Mesh({
    style: {
      x: 300,
      y: 250,
      fill: 'white',
      opacity: 1,
      geometry: torusGeometry,
      material: basicMaterial,
    },
  });

  canvas.appendChild(torus);

  // add a directional light into scene
  const light = new DirectionalLight({
    style: {
      fill: 'white',
      direction: [-1, 0, 1],
    },
  });
  canvas.appendChild(light);

  const camera = canvas.getCamera();
  camera.setPosition(300, 0, 500);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
    torus.rotate(0, 0.2, 0);
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const torusFolder = gui.addFolder('torus');
  const torusConfig = {
    opacity: 1,
    fill: '#1890FF',
  };
  torusFolder.add(torusConfig, 'opacity', 0, 1, 0.1).onChange((opacity) => {
    torus.style.opacity = opacity;
  });
  torusFolder.addColor(torusConfig, 'fill').onChange((color) => {
    torus.style.fill = color;
  });
  torusFolder.open();

  const geometryFolder = gui.addFolder('geometry');
  const geometryConfig = {
    tubeRadius: 30,
    ringRadius: 200,
    segments: 30,
    sides: 20,
  };
  geometryFolder.add(geometryConfig, 'tubeRadius', 10, 300).onChange((tubeRadius) => {
    torusGeometry.tubeRadius = tubeRadius;
  });
  geometryFolder.add(geometryConfig, 'ringRadius', 10, 300).onChange((ringRadius) => {
    torusGeometry.ringRadius = ringRadius;
  });
  geometryFolder.add(geometryConfig, 'segments', 2, 30, 1).onChange((segments) => {
    torusGeometry.segments = segments;
  });
  geometryFolder.add(geometryConfig, 'sides', 2, 30, 1).onChange((sides) => {
    torusGeometry.sides = sides;
  });
  geometryFolder.open();

  const materialFolder = gui.addFolder('material');
  const materialConfig = {
    wireframe: false,
    map: 'none',
    fogType: FogType.NONE,
    fogColor: '#000000',
    fogDensity: 0.5,
    fogStart: 1,
    fogEnd: 1000,
  };
  materialFolder.add(materialConfig, 'wireframe').onChange((enable) => {
    torus.style.material.wireframe = !!enable;
  });
  materialFolder
    .add(materialConfig, 'map', [
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*npAsSLPX4A4AAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      'none',
    ])
    .onChange((mapURL) => {
      if (mapURL === 'none') {
        torus.style.material.map = null;
      } else {
        const map = plugin.loadTexture(mapURL);
        torus.style.material.map = map;
      }
    });
  const fogTypes = [FogType.NONE, FogType.EXP, FogType.EXP2, FogType.LINEAR];
  materialFolder.add(materialConfig, 'fogType', fogTypes).onChange((fogType) => {
    // FogType.NONE
    torus.style.material.fogType = fogType;
  });
  materialFolder.addColor(materialConfig, 'fogColor').onChange((fogColor) => {
    torus.style.material.fogColor = fogColor;
  });
  materialFolder.add(materialConfig, 'fogDensity', 0, 10).onChange((fogDensity) => {
    torus.style.material.fogDensity = fogDensity;
  });
  materialFolder.add(materialConfig, 'fogStart', 0, 1000).onChange((fogStart) => {
    torus.style.material.fogStart = fogStart;
  });
  materialFolder.add(materialConfig, 'fogEnd', 0, 1000).onChange((fogEnd) => {
    torus.style.material.fogEnd = fogEnd;
  });
  materialFolder.open();
})();
`,title:{zh:"\u5706\u73AF",en:"Torus"},filename:"torus.js",isNew:!1},{id:"buffer-geometry",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshBasicMaterial,
  BufferGeometry,
  Mesh,
  VertexBufferFrequency,
  Format,
  VertexAttributeBufferIndex,
  VertexAttributeLocation,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import Stats from 'stats.js';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;

  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // create buffer geometry
  const bufferGeometry = new BufferGeometry(device);
  bufferGeometry.setVertexBuffer({
    bufferIndex: VertexAttributeBufferIndex.POSITION,
    byteStride: 4 * 3,
    frequency: VertexBufferFrequency.PerVertex,
    attributes: [
      {
        format: Format.F32_RGB,
        bufferByteOffset: 4 * 0,
        location: VertexAttributeLocation.POSITION,
      },
    ],
    // use 6 vertices
    data: Float32Array.from([
      -100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, -100.0, 100.0, 100.0, -100.0, 100.0, -100.0,
      -100.0, 100.0, -100.0, 100.0, 100.0,
    ]),
  });
  // draw 6 vertices
  bufferGeometry.vertexCount = 6;
  // start from...
  // bufferGeometry.primitiveStart = 0;

  const basicMaterial = new MeshBasicMaterial(device);

  const mesh = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: bufferGeometry,
      material: basicMaterial,
    },
  });
  mesh.setPosition(300, 250, 0);
  canvas.appendChild(mesh);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });
})();
`,title:{zh:"\u81EA\u5B9A\u4E49 Geometry",en:"Use BufferGeometry"},filename:"buffer-geometry.js",isNew:!1}],icon:"",id:"geometry",title:{en:"Geometry",zh:"\u51E0\u4F55"},childrenKey:"demos",order:10},{demos:[{id:"shader-material",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*Nm5iSqYuF0IAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  ShaderMaterial,
  BufferGeometry,
  Mesh,
  VertexBufferFrequency,
  Format,
  VertexAttributeBufferIndex,
  VertexAttributeLocation,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import Stats from 'stats.js';
import * as lil from 'lil-gui';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());

// create a canvas
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 500;
const canvas = new Canvas({
  container: 'container',
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;

  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // create buffer geometry
  const bufferGeometry = new BufferGeometry(device);
  bufferGeometry.setVertexBuffer({
    bufferIndex: VertexAttributeBufferIndex.POSITION,
    byteStride: 4 * 3,
    frequency: VertexBufferFrequency.PerVertex,
    attributes: [
      {
        format: Format.F32_RGB,
        bufferByteOffset: 4 * 0,
        location: VertexAttributeLocation.POSITION,
      },
    ],
    // use 6 vertices
    data: Float32Array.from([
      -CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      100.0,
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      100.0,
      CANVAS_WIDTH / 2,
      -CANVAS_HEIGHT / 2,
      100.0,
      CANVAS_WIDTH / 2,
      -CANVAS_HEIGHT / 2,
      100.0,
      -CANVAS_WIDTH / 2,
      -CANVAS_HEIGHT / 2,
      100.0,
      -CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      100.0,
    ]),
  });
  // draw 6 vertices
  bufferGeometry.vertexCount = 6;

  const shaderMaterial = new ShaderMaterial(device, {
    vertexShader: \`
    layout(std140) uniform ub_SceneParams {
      mat4 u_ProjectionMatrix;
      mat4 u_ViewMatrix;
      vec3 u_CameraPosition;
      float u_DevicePixelRatio;
      vec2 u_Viewport;
      float u_IsOrtho;
    };
    layout(std140) uniform ub_MaterialParams {
      float u_Level;
    };

    layout(location = \${VertexAttributeLocation.MODEL_MATRIX0}) in vec4 a_ModelMatrix0;
    layout(location = \${VertexAttributeLocation.MODEL_MATRIX1}) in vec4 a_ModelMatrix1;
    layout(location = \${VertexAttributeLocation.MODEL_MATRIX2}) in vec4 a_ModelMatrix2;
    layout(location = \${VertexAttributeLocation.MODEL_MATRIX3}) in vec4 a_ModelMatrix3;
    layout(location = \${VertexAttributeLocation.POSITION}) in vec3 a_Position;

    void main() {
      mat4 u_ModelMatrix = mat4(a_ModelMatrix0, a_ModelMatrix1, a_ModelMatrix2, a_ModelMatrix3);
      gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * vec4(a_Position, 1.0);
    }
    \`,
    fragmentShader: \` 
    layout(std140) uniform ub_SceneParams {
      mat4 u_ProjectionMatrix;
      mat4 u_ViewMatrix;
      vec3 u_CameraPosition;
      float u_DevicePixelRatio;
      vec2 u_Viewport;
      float u_IsOrtho;
    };

    layout(std140) uniform ub_MaterialParams {
      float u_Level;
    };

    out vec4 outputColor;

    float random (vec2 st) {
      return fract(sin(
        dot(st.xy,vec2(12.9898,78.233)))*
        43758.5453123);
    }

    float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = smoothstep(0.,1.,f);

      // Mix 4 coorners percentages
      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
    }

    // gradient noise
    // float noise( in vec2 st ) {
    //   vec2 i = floor(st);
    //   vec2 f = fract(st);
      
    //   vec2 u = smoothstep(0., 1., f);

    //   return mix( mix( dot( random( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
    //                   dot( random( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
    //               mix( dot( random( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
    //                   dot( random( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
    // }

    void main() {
      vec2 st = gl_FragCoord.xy / u_Viewport;
      vec2 pos = vec2(st * u_Level);
      float n = noise(pos);
      outputColor = vec4(vec3(n), 1.0);
    }
    \`,
  });
  shaderMaterial.setUniforms({
    u_Level: 5,
  });
  const mesh = new Mesh({
    style: {
      fill: '#1890FF',
      opacity: 1,
      geometry: bufferGeometry,
      material: shaderMaterial,
    },
  });
  mesh.setPosition(300, 250, 0);
  canvas.appendChild(mesh);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);

  const noiseFolder = gui.addFolder('noise');
  const noiseConfig = {
    level: 5,
  };
  noiseFolder.add(noiseConfig, 'level', 1, 100, 1).onChange((level) => {
    shaderMaterial.setUniforms({ u_Level: level });
  });
  noiseFolder.open();
})();
`,title:{zh:"\u81EA\u5B9A\u4E49 Material",en:"Use ShaderMaterial"},filename:"shader-material.js",isNew:!1}],icon:"",id:"material",title:{en:"Material",zh:"\u6750\u8D28"},childrenKey:"demos",order:10},{demos:[{id:"force-3d",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*3XFxQKWOeKoAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Line } from '@antv/g';
import { Renderer } from '@antv/g-webgl';
import {
  MeshPhongMaterial,
  SphereGeometry,
  DirectionalLight,
  Mesh,
  Plugin as Plugin3D,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import { forceLink, forceSimulation, forceManyBody, forceCenter } from 'd3-force-3d';

// https://bl.ocks.org/vasturiano/f59675656258d3f490e9faa40828c0e7
const dataset = {
  nodes: [
    {
      id: 'Myriel',
      group: 1,
    },
    {
      id: 'Napoleon',
      group: 1,
    },
    {
      id: 'Mlle.Baptistine',
      group: 1,
    },
    {
      id: 'Mme.Magloire',
      group: 1,
    },
    {
      id: 'CountessdeLo',
      group: 1,
    },
    {
      id: 'Geborand',
      group: 1,
    },
    {
      id: 'Champtercier',
      group: 1,
    },
    {
      id: 'Cravatte',
      group: 1,
    },
    {
      id: 'Count',
      group: 1,
    },
    {
      id: 'OldMan',
      group: 1,
    },
    {
      id: 'Labarre',
      group: 2,
    },
    {
      id: 'Valjean',
      group: 2,
    },
    {
      id: 'Marguerite',
      group: 3,
    },
    {
      id: 'Mme.deR',
      group: 2,
    },
    {
      id: 'Isabeau',
      group: 2,
    },
    {
      id: 'Gervais',
      group: 2,
    },
    {
      id: 'Tholomyes',
      group: 3,
    },
    {
      id: 'Listolier',
      group: 3,
    },
    {
      id: 'Fameuil',
      group: 3,
    },
    {
      id: 'Blacheville',
      group: 3,
    },
    {
      id: 'Favourite',
      group: 3,
    },
    {
      id: 'Dahlia',
      group: 3,
    },
    {
      id: 'Zephine',
      group: 3,
    },
    {
      id: 'Fantine',
      group: 3,
    },
    {
      id: 'Mme.Thenardier',
      group: 4,
    },
    {
      id: 'Thenardier',
      group: 4,
    },
    {
      id: 'Cosette',
      group: 5,
    },
    {
      id: 'Javert',
      group: 4,
    },
    {
      id: 'Fauchelevent',
      group: 0,
    },
    {
      id: 'Bamatabois',
      group: 2,
    },
    {
      id: 'Perpetue',
      group: 3,
    },
    {
      id: 'Simplice',
      group: 2,
    },
    {
      id: 'Scaufflaire',
      group: 2,
    },
    {
      id: 'Woman1',
      group: 2,
    },
    {
      id: 'Judge',
      group: 2,
    },
    {
      id: 'Champmathieu',
      group: 2,
    },
    {
      id: 'Brevet',
      group: 2,
    },
    {
      id: 'Chenildieu',
      group: 2,
    },
    {
      id: 'Cochepaille',
      group: 2,
    },
    {
      id: 'Pontmercy',
      group: 4,
    },
    {
      id: 'Boulatruelle',
      group: 6,
    },
    {
      id: 'Eponine',
      group: 4,
    },
    {
      id: 'Anzelma',
      group: 4,
    },
    {
      id: 'Woman2',
      group: 5,
    },
    {
      id: 'MotherInnocent',
      group: 0,
    },
    {
      id: 'Gribier',
      group: 0,
    },
    {
      id: 'Jondrette',
      group: 7,
    },
    {
      id: 'Mme.Burgon',
      group: 7,
    },
    {
      id: 'Gavroche',
      group: 8,
    },
    {
      id: 'Gillenormand',
      group: 5,
    },
    {
      id: 'Magnon',
      group: 5,
    },
    {
      id: 'Mlle.Gillenormand',
      group: 5,
    },
    {
      id: 'Mme.Pontmercy',
      group: 5,
    },
    {
      id: 'Mlle.Vaubois',
      group: 5,
    },
    {
      id: 'Lt.Gillenormand',
      group: 5,
    },
    {
      id: 'Marius',
      group: 8,
    },
    {
      id: 'BaronessT',
      group: 5,
    },
    {
      id: 'Mabeuf',
      group: 8,
    },
    {
      id: 'Enjolras',
      group: 8,
    },
    {
      id: 'Combeferre',
      group: 8,
    },
    {
      id: 'Prouvaire',
      group: 8,
    },
    {
      id: 'Feuilly',
      group: 8,
    },
    {
      id: 'Courfeyrac',
      group: 8,
    },
    {
      id: 'Bahorel',
      group: 8,
    },
    {
      id: 'Bossuet',
      group: 8,
    },
    {
      id: 'Joly',
      group: 8,
    },
    {
      id: 'Grantaire',
      group: 8,
    },
    {
      id: 'MotherPlutarch',
      group: 9,
    },
    {
      id: 'Gueulemer',
      group: 4,
    },
    {
      id: 'Babet',
      group: 4,
    },
    {
      id: 'Claquesous',
      group: 4,
    },
    {
      id: 'Montparnasse',
      group: 4,
    },
    {
      id: 'Toussaint',
      group: 5,
    },
    {
      id: 'Child1',
      group: 10,
    },
    {
      id: 'Child2',
      group: 10,
    },
    {
      id: 'Brujon',
      group: 4,
    },
    {
      id: 'Mme.Hucheloup',
      group: 8,
    },
  ],
  links: [
    {
      source: 'Napoleon',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Mlle.Baptistine',
      target: 'Myriel',
      value: 8,
    },
    {
      source: 'Mme.Magloire',
      target: 'Myriel',
      value: 10,
    },
    {
      source: 'Mme.Magloire',
      target: 'Mlle.Baptistine',
      value: 6,
    },
    {
      source: 'CountessdeLo',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Geborand',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Champtercier',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Cravatte',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Count',
      target: 'Myriel',
      value: 2,
    },
    {
      source: 'OldMan',
      target: 'Myriel',
      value: 1,
    },
    {
      source: 'Valjean',
      target: 'Labarre',
      value: 1,
    },
    {
      source: 'Valjean',
      target: 'Mme.Magloire',
      value: 3,
    },
    {
      source: 'Valjean',
      target: 'Mlle.Baptistine',
      value: 3,
    },
    {
      source: 'Valjean',
      target: 'Myriel',
      value: 5,
    },
    {
      source: 'Marguerite',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Mme.deR',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Isabeau',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gervais',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Listolier',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Fameuil',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Fameuil',
      target: 'Listolier',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Tholomyes',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Listolier',
      value: 4,
    },
    {
      source: 'Blacheville',
      target: 'Fameuil',
      value: 4,
    },
    {
      source: 'Favourite',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Favourite',
      target: 'Blacheville',
      value: 4,
    },
    {
      source: 'Dahlia',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Dahlia',
      target: 'Favourite',
      value: 5,
    },
    {
      source: 'Zephine',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Zephine',
      target: 'Favourite',
      value: 4,
    },
    {
      source: 'Zephine',
      target: 'Dahlia',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Tholomyes',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Listolier',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Fameuil',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Blacheville',
      value: 3,
    },
    {
      source: 'Fantine',
      target: 'Favourite',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Dahlia',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Zephine',
      value: 4,
    },
    {
      source: 'Fantine',
      target: 'Marguerite',
      value: 2,
    },
    {
      source: 'Fantine',
      target: 'Valjean',
      value: 9,
    },
    {
      source: 'Mme.Thenardier',
      target: 'Fantine',
      value: 2,
    },
    {
      source: 'Mme.Thenardier',
      target: 'Valjean',
      value: 7,
    },
    {
      source: 'Thenardier',
      target: 'Mme.Thenardier',
      value: 13,
    },
    {
      source: 'Thenardier',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Thenardier',
      target: 'Valjean',
      value: 12,
    },
    {
      source: 'Cosette',
      target: 'Mme.Thenardier',
      value: 4,
    },
    {
      source: 'Cosette',
      target: 'Valjean',
      value: 31,
    },
    {
      source: 'Cosette',
      target: 'Tholomyes',
      value: 1,
    },
    {
      source: 'Cosette',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Javert',
      target: 'Valjean',
      value: 17,
    },
    {
      source: 'Javert',
      target: 'Fantine',
      value: 5,
    },
    {
      source: 'Javert',
      target: 'Thenardier',
      value: 5,
    },
    {
      source: 'Javert',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Javert',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Fauchelevent',
      target: 'Valjean',
      value: 8,
    },
    {
      source: 'Fauchelevent',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Bamatabois',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Perpetue',
      target: 'Fantine',
      value: 1,
    },
    {
      source: 'Simplice',
      target: 'Perpetue',
      value: 2,
    },
    {
      source: 'Simplice',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Simplice',
      target: 'Fantine',
      value: 2,
    },
    {
      source: 'Simplice',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Scaufflaire',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Woman1',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Woman1',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Judge',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Judge',
      target: 'Bamatabois',
      value: 2,
    },
    {
      source: 'Champmathieu',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Champmathieu',
      target: 'Judge',
      value: 3,
    },
    {
      source: 'Champmathieu',
      target: 'Bamatabois',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Brevet',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Chenildieu',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Brevet',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Chenildieu',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Cochepaille',
      target: 'Judge',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Champmathieu',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Brevet',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Chenildieu',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Cochepaille',
      target: 'Bamatabois',
      value: 1,
    },
    {
      source: 'Pontmercy',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Boulatruelle',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Eponine',
      target: 'Mme.Thenardier',
      value: 2,
    },
    {
      source: 'Eponine',
      target: 'Thenardier',
      value: 3,
    },
    {
      source: 'Anzelma',
      target: 'Eponine',
      value: 2,
    },
    {
      source: 'Anzelma',
      target: 'Thenardier',
      value: 2,
    },
    {
      source: 'Anzelma',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Woman2',
      target: 'Valjean',
      value: 3,
    },
    {
      source: 'Woman2',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Woman2',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'MotherInnocent',
      target: 'Fauchelevent',
      value: 3,
    },
    {
      source: 'MotherInnocent',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gribier',
      target: 'Fauchelevent',
      value: 2,
    },
    {
      source: 'Mme.Burgon',
      target: 'Jondrette',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Mme.Burgon',
      value: 2,
    },
    {
      source: 'Gavroche',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Gavroche',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gillenormand',
      target: 'Cosette',
      value: 3,
    },
    {
      source: 'Gillenormand',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Magnon',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'Magnon',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Gillenormand',
      value: 9,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Cosette',
      value: 2,
    },
    {
      source: 'Mlle.Gillenormand',
      target: 'Valjean',
      value: 2,
    },
    {
      source: 'Mme.Pontmercy',
      target: 'Mlle.Gillenormand',
      value: 1,
    },
    {
      source: 'Mme.Pontmercy',
      target: 'Pontmercy',
      value: 1,
    },
    {
      source: 'Mlle.Vaubois',
      target: 'Mlle.Gillenormand',
      value: 1,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Mlle.Gillenormand',
      value: 2,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'Lt.Gillenormand',
      target: 'Cosette',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Mlle.Gillenormand',
      value: 6,
    },
    {
      source: 'Marius',
      target: 'Gillenormand',
      value: 12,
    },
    {
      source: 'Marius',
      target: 'Pontmercy',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Lt.Gillenormand',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Cosette',
      value: 21,
    },
    {
      source: 'Marius',
      target: 'Valjean',
      value: 19,
    },
    {
      source: 'Marius',
      target: 'Tholomyes',
      value: 1,
    },
    {
      source: 'Marius',
      target: 'Thenardier',
      value: 2,
    },
    {
      source: 'Marius',
      target: 'Eponine',
      value: 5,
    },
    {
      source: 'Marius',
      target: 'Gavroche',
      value: 4,
    },
    {
      source: 'BaronessT',
      target: 'Gillenormand',
      value: 1,
    },
    {
      source: 'BaronessT',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Mabeuf',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Enjolras',
      target: 'Marius',
      value: 7,
    },
    {
      source: 'Enjolras',
      target: 'Gavroche',
      value: 7,
    },
    {
      source: 'Enjolras',
      target: 'Javert',
      value: 6,
    },
    {
      source: 'Enjolras',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Enjolras',
      target: 'Valjean',
      value: 4,
    },
    {
      source: 'Combeferre',
      target: 'Enjolras',
      value: 15,
    },
    {
      source: 'Combeferre',
      target: 'Marius',
      value: 5,
    },
    {
      source: 'Combeferre',
      target: 'Gavroche',
      value: 6,
    },
    {
      source: 'Combeferre',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Prouvaire',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Prouvaire',
      target: 'Enjolras',
      value: 4,
    },
    {
      source: 'Prouvaire',
      target: 'Combeferre',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Enjolras',
      value: 6,
    },
    {
      source: 'Feuilly',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Feuilly',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Feuilly',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Feuilly',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Courfeyrac',
      target: 'Marius',
      value: 9,
    },
    {
      source: 'Courfeyrac',
      target: 'Enjolras',
      value: 17,
    },
    {
      source: 'Courfeyrac',
      target: 'Combeferre',
      value: 13,
    },
    {
      source: 'Courfeyrac',
      target: 'Gavroche',
      value: 7,
    },
    {
      source: 'Courfeyrac',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Courfeyrac',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Courfeyrac',
      target: 'Feuilly',
      value: 6,
    },
    {
      source: 'Courfeyrac',
      target: 'Prouvaire',
      value: 3,
    },
    {
      source: 'Bahorel',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Bahorel',
      target: 'Gavroche',
      value: 5,
    },
    {
      source: 'Bahorel',
      target: 'Courfeyrac',
      value: 6,
    },
    {
      source: 'Bahorel',
      target: 'Mabeuf',
      value: 2,
    },
    {
      source: 'Bahorel',
      target: 'Enjolras',
      value: 4,
    },
    {
      source: 'Bahorel',
      target: 'Feuilly',
      value: 3,
    },
    {
      source: 'Bahorel',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Bahorel',
      target: 'Marius',
      value: 1,
    },
    {
      source: 'Bossuet',
      target: 'Marius',
      value: 5,
    },
    {
      source: 'Bossuet',
      target: 'Courfeyrac',
      value: 12,
    },
    {
      source: 'Bossuet',
      target: 'Gavroche',
      value: 5,
    },
    {
      source: 'Bossuet',
      target: 'Bahorel',
      value: 4,
    },
    {
      source: 'Bossuet',
      target: 'Enjolras',
      value: 10,
    },
    {
      source: 'Bossuet',
      target: 'Feuilly',
      value: 6,
    },
    {
      source: 'Bossuet',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Bossuet',
      target: 'Combeferre',
      value: 9,
    },
    {
      source: 'Bossuet',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Bossuet',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Joly',
      target: 'Bahorel',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Bossuet',
      value: 7,
    },
    {
      source: 'Joly',
      target: 'Gavroche',
      value: 3,
    },
    {
      source: 'Joly',
      target: 'Courfeyrac',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Enjolras',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Feuilly',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Prouvaire',
      value: 2,
    },
    {
      source: 'Joly',
      target: 'Combeferre',
      value: 5,
    },
    {
      source: 'Joly',
      target: 'Mabeuf',
      value: 1,
    },
    {
      source: 'Joly',
      target: 'Marius',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Bossuet',
      value: 3,
    },
    {
      source: 'Grantaire',
      target: 'Enjolras',
      value: 3,
    },
    {
      source: 'Grantaire',
      target: 'Combeferre',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Courfeyrac',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Joly',
      value: 2,
    },
    {
      source: 'Grantaire',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Bahorel',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Feuilly',
      value: 1,
    },
    {
      source: 'Grantaire',
      target: 'Prouvaire',
      value: 1,
    },
    {
      source: 'MotherPlutarch',
      target: 'Mabeuf',
      value: 3,
    },
    {
      source: 'Gueulemer',
      target: 'Thenardier',
      value: 5,
    },
    {
      source: 'Gueulemer',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Gueulemer',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Thenardier',
      value: 6,
    },
    {
      source: 'Babet',
      target: 'Gueulemer',
      value: 6,
    },
    {
      source: 'Babet',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Javert',
      value: 2,
    },
    {
      source: 'Babet',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Babet',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Thenardier',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Babet',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Gueulemer',
      value: 4,
    },
    {
      source: 'Claquesous',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Mme.Thenardier',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Claquesous',
      target: 'Enjolras',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Babet',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Gueulemer',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Claquesous',
      value: 2,
    },
    {
      source: 'Montparnasse',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Montparnasse',
      target: 'Thenardier',
      value: 1,
    },
    {
      source: 'Toussaint',
      target: 'Cosette',
      value: 2,
    },
    {
      source: 'Toussaint',
      target: 'Javert',
      value: 1,
    },
    {
      source: 'Toussaint',
      target: 'Valjean',
      value: 1,
    },
    {
      source: 'Child1',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Child2',
      target: 'Gavroche',
      value: 2,
    },
    {
      source: 'Child2',
      target: 'Child1',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Babet',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Gueulemer',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Thenardier',
      value: 3,
    },
    {
      source: 'Brujon',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Eponine',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Claquesous',
      value: 1,
    },
    {
      source: 'Brujon',
      target: 'Montparnasse',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Bossuet',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Joly',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Grantaire',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Bahorel',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Courfeyrac',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Gavroche',
      value: 1,
    },
    {
      source: 'Mme.Hucheloup',
      target: 'Enjolras',
      value: 1,
    },
  ],
};

// start 3d force simulation
const simulation = forceSimulation(dataset.nodes, 3)
  .force(
    'link',
    forceLink().id(function (d) {
      return d.id;
    }),
  )
  .force('charge', forceManyBody())
  .force('center', forceCenter(0, 0));
simulation.nodes(dataset.nodes);
simulation.force('link').links(dataset.links);
simulation.tick(1000);

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new Plugin3D());
renderer.registerPlugin(new PluginControl());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

(async () => {
  // wait for canvas' initialization complete
  await canvas.ready;
  // use GPU device
  const plugin = renderer.getPlugin('device-renderer');
  const device = plugin.getDevice();

  // create a sphere geometry
  const sphereGeometry = new SphereGeometry(device, {
    radius: 10,
    latitudeBands: 32,
    longitudeBands: 32,
  });
  // create a material with Phong lighting model
  const material = new MeshPhongMaterial(device, {
    shininess: 30,
  });

  // @see https://antv.vision/en/docs/specification/language/palette#%E5%88%86%E7%B1%BB%E8%89%B2%E6%9D%BF
  const colorPalette = [
    '#5B8FF9',
    '#CDDDFD',
    '#61DDAA',
    '#CDF3E4',
    '#65789B',
    '#F6BD16',
    '#7262fd',
    '#78D3F8',
    '#9661BC',
    '#F6903D',
    '#008685',
    '#F08BB4',
  ];
  dataset.nodes.forEach((node) => {
    const fill = colorPalette[node.group];
    // create a mesh
    const sphere = new Mesh({
      style: {
        fill,
        opacity: 1,
        geometry: sphereGeometry,
        material,
        cursor: 'pointer',
      },
    });
    sphere.setPosition(node.x + 300, node.y + 250, node.z);
    canvas.appendChild(sphere);

    sphere.addEventListener('mouseenter', () => {
      sphere.style.fill = 'red';
    });
    sphere.addEventListener('mouseleave', () => {
      sphere.style.fill = fill;
    });
  });

  dataset.links.forEach((edge) => {
    const { source, target } = edge;
    const line = new Line({
      style: {
        x1: source.x + 300,
        y1: source.y + 250,
        z1: source.z,
        x2: target.x + 300,
        y2: target.y + 250,
        z2: target.z,
        stroke: 'black',
        lineWidth: 2,
        opacity: 0.5,
        isBillboard: true, // \u59CB\u7EC8\u9762\u5411\u5C4F\u5E55
      },
    });
    canvas.appendChild(line);
  });

  // add a directional light into scene
  const light = new DirectionalLight({
    style: {
      fill: 'white',
      direction: [-1, 0, 1],
    },
  });
  canvas.appendChild(light);

  // adjust camera's position
  const camera = canvas.getCamera();
  camera.setPerspective(0.1, 1000, 45, 600 / 500);

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
})();
`,title:{zh:"3D \u529B\u5BFC\u5E03\u5C40",en:"Force 3D"},filename:"force-3d.js",isNew:!1},{id:"music-viz",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*nKFQQZdL3-IAAAAAAAAAAAAAARQnAQ",source:`import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Stats from 'stats.js';
import SimplexNoise from 'simplex-noise';
import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import {
  Mesh,
  SphereGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  Fog,
  FogType,
  Plugin as Plugin3D,
  CullMode,
  VertexAttributeBufferIndex,
  VertexAttributeLocation,
} from '@antv/g-plugin-3d';
import { Plugin as PluginControl } from '@antv/g-plugin-control';

/**
 * ported from https://medium.com/@mag_ops/music-visualiser-with-three-js-web-audio-api-b30175e7b5ba
 * Web Audio API @see https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext
 */

const App = function MusicViz() {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  let analyser;
  let dataArray;
  const noise = new SimplexNoise();

  useEffect(() => {
    // create a webgl renderer
    const renderer = new WebGLRenderer();
    renderer.registerPlugin(new Plugin3D());
    renderer.registerPlugin(new PluginControl());

    // create a canvas
    const canvas = new Canvas({
      container: containerRef.current,
      width: 600,
      height: 500,
      renderer,
      background: '#120f6c',
    });

    const camera = canvas.getCamera();
    camera.setPosition(300, 100, 500);
    camera.setPerspective(0.1, 1000, 75, 600 / 500);

    canvas.appendChild(
      new Fog({
        style: {
          fill: 'purple',
          type: FogType.EXP2,
          density: 0.0015,
          start: 0,
          end: 0,
        },
      }),
    );

    (async () => {
      await canvas.ready;

      const plugin = renderer.getPlugin('device-renderer');
      const device = plugin.getDevice();

      const sphereGeometry = new SphereGeometry(device, {
        radius: 100,
        latitudeBands: 32,
        longitudeBands: 32,
      });
      const groundGeometry = new PlaneGeometry(device, {
        width: 800,
        depth: 800,
        widthSegments: 20,
        depthSegments: 20,
      });
      const skyGeometry = new PlaneGeometry(device, {
        width: 800,
        depth: 800,
        widthSegments: 20,
        depthSegments: 20,
      });
      const planeMaterial = new MeshBasicMaterial(device, {
        wireframe: true,
        wireframeColor: 'purple',
        cullMode: CullMode.None,
      });
      const basicMaterial = new MeshBasicMaterial(device, {
        wireframe: true,
        wireframeColor: '#ff00ee',
      });

      const sphere = new Mesh({
        style: {
          x: 300,
          y: 200,
          fill: '#120f6c',
          opacity: 1,
          geometry: sphereGeometry,
          material: basicMaterial,
        },
      });
      canvas.appendChild(sphere);

      const ground = new Mesh({
        style: {
          x: 300,
          y: 250,
          fill: '#120f6c',
          opacity: 1,
          geometry: groundGeometry,
          material: planeMaterial,
        },
      });
      canvas.appendChild(ground);

      const sky = new Mesh({
        style: {
          x: 300,
          y: 0,
          fill: 'white',
          opacity: 1,
          geometry: skyGeometry,
          material: planeMaterial,
        },
      });
      canvas.appendChild(sky);

      canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
        if (stats) {
          stats.update();
        }

        canvas.document.documentElement.setOrigin(300, 250, 0);
        canvas.document.documentElement.rotate(0, 0.2, 0);

        if (analyser && dataArray) {
          analyser.getByteFrequencyData(dataArray);

          const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
          const upperHalfArray = dataArray.slice(dataArray.length / 2 - 1, dataArray.length - 1);

          const overallAvg = avg(dataArray);
          const lowerMax = max(lowerHalfArray);
          const lowerAvg = avg(lowerHalfArray);
          const upperMax = max(upperHalfArray);
          const upperAvg = avg(upperHalfArray);

          const lowerMaxFr = lowerMax / lowerHalfArray.length;
          const lowerAvgFr = lowerAvg / lowerHalfArray.length;
          const upperMaxFr = upperMax / upperHalfArray.length;
          const upperAvgFr = upperAvg / upperHalfArray.length;

          makeRoughGround(groundGeometry, modulate(lowerMaxFr, 0, 1, 0.5, 4));
          makeRoughGround(skyGeometry, modulate(upperAvgFr, 0, 1, 0.5, 4));
          makeRoughBall(
            sphereGeometry,
            modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8),
            modulate(upperAvgFr, 0, 1, 0, 4),
          );
        }
      });

      const makeRoughGround = (geometry, distortionFr) => {
        const bufferIndex = VertexAttributeBufferIndex.POSITION;
        const positions = geometry.vertices[bufferIndex];

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];

          const amp = 2;
          const time = window.performance.now();
          const distance = noise.noise2D(x + time * 0.003, z + time * 0.001) * distortionFr * amp;
          positions[i + 1] = distance;
        }

        geometry.updateVertexBuffer(
          bufferIndex,
          VertexAttributeLocation.POSITION,
          0,
          new Uint8Array(positions.buffer),
        );
      };

      const makeRoughBall = (geometry, bassFr, treFr) => {
        const bufferIndex = VertexAttributeBufferIndex.POSITION;
        const positions = geometry.vertices[bufferIndex];

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];

          const amp = 7;
          const time = window.performance.now();
          const radius = 100;
          const vec3 = [x, y, z];

          normalize(vec3, vec3);
          const rf = 0.0001;
          const distance =
            radius +
            bassFr +
            noise.noise3D(
              vec3[0] + time * rf * 7,
              vec3[1] + time * rf * 8,
              vec3[2] + time * rf * 9,
            ) *
              amp *
              treFr;

          positions[i] = vec3[0] * distance;
          positions[i + 1] = vec3[1] * distance;
          positions[i + 2] = vec3[2] * distance;
        }

        geometry.updateVertexBuffer(
          bufferIndex,
          VertexAttributeLocation.POSITION,
          0,
          new Uint8Array(positions.buffer),
        );
      };

      const stats = new Stats();
      stats.showPanel(0);
      const $stats = stats.dom;
      $stats.style.position = 'absolute';
      $stats.style.left = '0px';
      $stats.style.top = '0px';
      const $wrapper = containerRef.current;
      $wrapper.appendChild($stats);
    })();
  }, []);

  const handleFileChanged = (e) => {
    const files = e.target.files;
    const audio = audioRef.current;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();

    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
  };

  return (
    <>
      <label htmlFor="file">
        <input type="file" id="file" accept="audio/*" onChange={handleFileChanged} />
      </label>
      <audio id="audio" controls ref={audioRef}></audio>

      <div
        id="container1"
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
};

//some helper functions here
function fractionate(val, minVal, maxVal) {
  return (val - minVal) / (maxVal - minVal);
}

function modulate(val, minVal, maxVal, outMin, outMax) {
  const fr = fractionate(val, minVal, maxVal);
  const delta = outMax - outMin;
  return outMin + fr * delta;
}

function avg(arr) {
  const total = arr.reduce(function (sum, b) {
    return sum + b;
  });
  return total / arr.length;
}

function max(arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}

ReactDOM.render(<App />, document.getElementById('container'));
`,title:{zh:"\u97F3\u4E50\u53EF\u89C6\u5316",en:"Music Visualization"},filename:"music-viz.tsx",isNew:!1}],icon:"",id:"basic",title:{en:"More cases",zh:"\u5176\u5B83\u6848\u4F8B"},childrenKey:"demos",order:20}],childrenKey:"examples"},{id:"ecosystem",title:{zh:"\u751F\u6001",en:"Ecosystem"},examples:[{demos:[{id:"d3-piechart",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*Wq7wSK_0p3AAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/z375662r0p?file=/src/index.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const data = [38024.7, 209484.6, 6201.2, 17741.9, 24377.7];
const total = d3.sum(data);
const colors = 'blue red maroon gray orange'.split(' ');
const width = 600;
const sectorArc = d3
  .arc()
  .innerRadius(width / 8)
  .outerRadius(width / 5);
const tweens = [
  function (sectorData) {
    const currentPath = this.getAttribute('d');
    return d3.interpolate(currentPath, sectorArc(sectorData));
  },
  function (sectorData) {
    const interpolator = d3.interpolate(this._current, sectorData);
    this._current = interpolator(0);
    return (t) => sectorArc(interpolator(t));
  },
];
let svg;

function drawCharts(data) {
  const pieData = d3.pie().sort(null)(data);
  const sectors = svg.selectAll('path').data(pieData);

  sectors
    .enter()
    .append('path')
    .attr('fill', (_, i) => colors[i])
    .attr('d', sectorArc)
    .property('_current', (d) => d);

  sectors.transition().duration(1000).attrTween('d', tweens[1]);
}

canvas.addEventListener(CanvasEvent.READY, () => {
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${width / 2}px, \${width / 2}px)\`);
  svg = bounds.append('g');

  drawCharts(data);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.on('afterrender', () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

let isEven = false;
const animationFolder = gui.addFolder('animation');
const animationConfig = {
  swapData: () => {
    isEven = !isEven;
    drawCharts(isEven ? [...data].fill(total / data.length) : data);
  },
};
animationFolder.add(animationConfig, 'swapData');
animationFolder.open();
`,title:{zh:"\u66FF\u6362 D3 \u6E32\u67D3\u5C42 - \u997C\u56FE",en:"D3's Piechart"},filename:"d3-piechart.js",isNew:!1},{id:"d3-barchart",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*h6vDS6eRVFoAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const drawBars = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // 5. Draw data
  const binsGroup = bounds.append('g');
  const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

  const barPadding = 1;
  const barRects = binGroups
    .append('rect')
    .attr('x', (d) => xScale(d.x0) + barPadding / 2)
    .attr('y', (d) => yScale(yAccessor(d)))
    .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr('fill', 'cornflowerblue')
    .on('mouseenter', function (e) {
      d3.select(e.target).attr('fill', 'red');
    })
    .on('mouseleave', function (e) {
      d3.select(e.target).attr('fill', 'cornflowerblue');
    });

  const barText = binGroups
    .filter(yAccessor)
    .append('text')
    .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .attr('fill', 'darkgrey')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds
    .append('line')
    .attr('x1', xScale(mean))
    .attr('x2', xScale(mean))
    .attr('y1', -15)
    .attr('y2', dimensions.boundedHeight)
    .attr('stroke-width', 1)
    .attr('stroke', 'maroon')
    .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds
    .append('text')
    .attr('x', xScale(mean))
    .attr('y', -20)
    .text('mean')
    .attr('fill', 'maroon')
    .style('font-size', '12px')
    .style('text-anchor', 'middle');

  // 6. Draw peripherals
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
    .attr('fill', 'black');

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '10px')
    .text('Humidity')
    .style('text-transform', 'capitalize');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u66FF\u6362 D3 \u6E32\u67D3\u5C42 - \u67F1\u72B6\u56FE",en:"Takeover D3's rendering layer"},filename:"d3-barchart.js",isNew:!1},{id:"d3-linechart",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*j50URoC5hSMAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/30io6?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const drawLineChart = async () => {
  // 1. Access data
  const data = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const parseDate = d3.timeParse('%Y-%m-%d');
  //define x axis with xAccessor, wrape with parseDate from above
  const xAccessor = (d) => parseDate(d['date']);
  const yAccessor = (d) => d['temperatureMax'];

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const container = d3
    .select(
      canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
    )
    .append('g')
    .attr('x', dimensions.margin.left)
    .attr('y', dimensions.margin.top);

  // 4. Create scales

  const yScale = d3
    .scaleLinear()
    //domain is the min and max input value, range is min and max output
    //domain should be the smallest and largest numbers our y axis will need to handle \u2014 in this case the lowest and highest max temperature in our dataset.
    // could define ourselves with .domain([0, 100])
    //better to use d3.extent, which will figure if out for us
    //needs two parameters, the data and the yAccessor (temp max)
    .domain(d3.extent(data, yAccessor))
    //range, in this case, should be min and max on xaxis. Can use boundedHeight to stay within margins
    .range([dimensions.boundedHeight, 0]);

  //Draw a rectangle covering all temps below freezing.
  //define scale - 32 degrees
  const freezingTemperaturePlacement = yScale(32);
  //create the rectangle with x,y, width and height
  const freezingTemperatures = container
    .append('rect')
    .attr('x', 0)
    .attr('width', dimensions.boundedWidth)
    .attr('y', freezingTemperaturePlacement)
    .attr('height', dimensions.boundedHeight - freezingTemperaturePlacement)
    .attr('fill', '#e0f3f3');

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  // 5. Draw data

  //We transform our data point with both the accessor function and the scale to get the scaled value in pixel space.

  const lineGenerator = d3
    .line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)));

  //Now add the path element to the points
  // Will be filled by default. Use styles to add a stroke
  const line = container
    .append('path')
    .attr('d', lineGenerator(data))
    .attr('fill', 'none')
    .attr('stroke', '#af9358')
    .attr('stroke-width', 2);

  // 6. Draw Axis

  const yAxisGenerator = d3.axisLeft().scale(yScale);

  const yAxis = container.append('g').call(yAxisGenerator);

  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = container
    .append('g')
    .call(xAxisGenerator)
    .style('transform', \`translateY(\${dimensions.boundedHeight}px)\`);
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawLineChart();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u66FF\u6362 D3 \u6E32\u67D3\u5C42 - \u6298\u7EBF\u56FE",en:"D3's Linechart"},filename:"d3-linechart.js",isNew:!1},{id:"d3-scatterplot",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*JTbHSYrWlYQAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * use D3's data-driven syntax & G's rendering, ported from fullstack-d3
 * @see https://codesandbox.io/s/ruu4q?file=/chart.js
 *
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 600,
  renderer: canvasRenderer,
});

const drawScatter = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const xAccessor = (d) => d.dewPoint;
  const yAccessor = (d) => d.humidity;
  const colorAccessor = (d) => d.cloudCover;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width,
    margin: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const bounds = d3
    .select(
      canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
    )
    .append('g')
    .attr('x', dimensions.margin.left)
    .attr('y', dimensions.margin.top);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice();

  const colorScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, colorAccessor))
    .range(['skyblue', 'darkslategrey']);

  // 5. Draw data

  const dots = bounds.selectAll('circle').data(dataset);

  dots
    .join('circle')
    .attr('cx', (d) => xScale(xAccessor(d)))
    .attr('cy', (d) => yScale(yAccessor(d)))
    .attr('r', 5)
    .attr('fill', (d) => colorScale(colorAccessor(d)));

  // 6. Draw Preipherals - x axis and y axis

  //create a variable for xaxis and define it
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  //add to the bounds
  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    //move to the bottom of the screen
    .style('transform', \`translateY(\${dimensions.boundedHeight}px)\`);

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '1.4em')
    .html('Dew point (&deg;F)');

  //same thing with the y axis
  const yAxisGenerator = d3
    .axisLeft()
    .scale(yScale)
    //define the number of ticks that you want
    .ticks(4);

  const yAxis = bounds.append('g').call(yAxisGenerator);

  const yAxisLabel = yAxis
    .append('text')
    //using negative dimensions so we can rotate below with transform
    .attr('x', -dimensions.boundedHeight / 2)
    .attr('y', -dimensions.margin.left + 10)
    .style('fill', 'black')
    .text('Relative Humidity')
    .style('transform', 'rotate(-90deg)')
    .style('font-size', '1.4em')
    .style('text-anchor', 'middle');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawScatter();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};

rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u66FF\u6362 D3 \u6E32\u67D3\u5C42 - \u6563\u70B9\u56FE",en:"D3's Scatterplot"},filename:"d3-scatterplot.js",isNew:!1},{id:"d3-force-directed-graph",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*PovRRJtsBMIAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as PluginCSSSelect } from '@antv/g-plugin-css-select';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * ported from https://observablehq.com/@d3/force-directed-graph
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

const cssSelectPlugin = new PluginCSSSelect();

canvasRenderer.registerPlugin(cssSelectPlugin);
webglRenderer.registerPlugin(cssSelectPlugin);
webgpuRenderer.registerPlugin(cssSelectPlugin);
canvaskitRenderer.registerPlugin(cssSelectPlugin);
svgRenderer.registerPlugin(cssSelectPlugin);

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 600,
  renderer: canvasRenderer,
});

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/force-directed-graph
function ForceGraph(
  {
    nodes, // an iterable of node objects (typically [{id}, \u2026])
    links, // an iterable of link objects (typically [{source, target}, \u2026])
  },
  {
    nodeId = (d) => d.id, // given d in nodes, returns a unique identifier (string)
    nodeGroup, // given d in nodes, returns an (ordinal) value for color
    nodeGroups, // an array of ordinal values representing the node groups
    nodeTitle, // given d in nodes, a title string
    nodeFill = 'currentColor', // node stroke fill (if not using a group color encoding)
    nodeStroke = '#fff', // node stroke color
    nodeStrokeWidth = 1.5, // node stroke width, in pixels
    nodeStrokeOpacity = 1, // node stroke opacity
    nodeRadius = 5, // node radius, in pixels
    nodeStrength,
    linkSource = ({ source }) => source, // given d in links, returns a node identifier string
    linkTarget = ({ target }) => target, // given d in links, returns a node identifier string
    linkStroke = '#999', // link stroke color
    linkStrokeOpacity = 0.6, // link stroke opacity
    linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
    linkStrokeLinecap = 'round', // link stroke linecap
    linkStrength,
    colors = d3.schemeTableau10, // an array of color strings, for the node groups
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    invalidation, // when this promise resolves, stop the simulation
  } = {},
) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
  const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  const W = typeof linkStrokeWidth !== 'function' ? null : d3.map(links, linkStrokeWidth);
  const L = typeof linkStroke !== 'function' ? null : d3.map(links, linkStroke);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
  links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({ index: i }) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', forceLink)
    .force('charge', forceNode)
    .force('center', d3.forceCenter())
    .on('tick', ticked);

  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const svg = wrapper.append('g').style('transform', \`translate(\${width / 2}px, \${height / 2}px)\`);

  // const svg = d3
  //   .create('svg')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .attr('viewBox', [-width / 2, -height / 2, width, height])
  //   .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

  const link = svg
    .append('g')
    .attr('stroke', typeof linkStroke !== 'function' ? linkStroke : null)
    .attr('stroke-opacity', linkStrokeOpacity)
    .attr('stroke-width', typeof linkStrokeWidth !== 'function' ? linkStrokeWidth : null)
    .attr('stroke-linecap', linkStrokeLinecap)
    .selectAll('line')
    .data(links)
    .join('line');

  const node = svg
    .append('g')
    .attr('fill', nodeFill)
    .attr('stroke', nodeStroke)
    .attr('stroke-opacity', nodeStrokeOpacity)
    .attr('stroke-width', nodeStrokeWidth)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', nodeRadius)
    .call(drag(simulation));

  if (W) link.attr('stroke-width', ({ index: i }) => W[i]);
  if (L) link.attr('stroke', ({ index: i }) => L[i]);
  if (G) node.attr('fill', ({ index: i }) => color(G[i]));
  if (T) node.append('title').text(({ index: i }) => T[i]);
  if (invalidation != null) invalidation.then(() => simulation.stop());

  function intern(value) {
    return value !== null && typeof value === 'object' ? value.valueOf() : value;
  }

  function ticked() {
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

    node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
  }

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
  }

  return Object.assign(svg.node(), { scales: { color } });
}

const miserables = {
  nodes: [
    { id: 'Myriel', group: 1 },
    { id: 'Napoleon', group: 1 },
    { id: 'Mlle.Baptistine', group: 1 },
    { id: 'Mme.Magloire', group: 1 },
    { id: 'CountessdeLo', group: 1 },
    { id: 'Geborand', group: 1 },
    { id: 'Champtercier', group: 1 },
    { id: 'Cravatte', group: 1 },
    { id: 'Count', group: 1 },
    { id: 'OldMan', group: 1 },
    { id: 'Labarre', group: 2 },
    { id: 'Valjean', group: 2 },
    { id: 'Marguerite', group: 3 },
    { id: 'Mme.deR', group: 2 },
    { id: 'Isabeau', group: 2 },
    { id: 'Gervais', group: 2 },
    { id: 'Tholomyes', group: 3 },
    { id: 'Listolier', group: 3 },
    { id: 'Fameuil', group: 3 },
    { id: 'Blacheville', group: 3 },
    { id: 'Favourite', group: 3 },
    { id: 'Dahlia', group: 3 },
    { id: 'Zephine', group: 3 },
    { id: 'Fantine', group: 3 },
    { id: 'Mme.Thenardier', group: 4 },
    { id: 'Thenardier', group: 4 },
    { id: 'Cosette', group: 5 },
    { id: 'Javert', group: 4 },
    { id: 'Fauchelevent', group: 0 },
    { id: 'Bamatabois', group: 2 },
    { id: 'Perpetue', group: 3 },
    { id: 'Simplice', group: 2 },
    { id: 'Scaufflaire', group: 2 },
    { id: 'Woman1', group: 2 },
    { id: 'Judge', group: 2 },
    { id: 'Champmathieu', group: 2 },
    { id: 'Brevet', group: 2 },
    { id: 'Chenildieu', group: 2 },
    { id: 'Cochepaille', group: 2 },
    { id: 'Pontmercy', group: 4 },
    { id: 'Boulatruelle', group: 6 },
    { id: 'Eponine', group: 4 },
    { id: 'Anzelma', group: 4 },
    { id: 'Woman2', group: 5 },
    { id: 'MotherInnocent', group: 0 },
    { id: 'Gribier', group: 0 },
    { id: 'Jondrette', group: 7 },
    { id: 'Mme.Burgon', group: 7 },
    { id: 'Gavroche', group: 8 },
    { id: 'Gillenormand', group: 5 },
    { id: 'Magnon', group: 5 },
    { id: 'Mlle.Gillenormand', group: 5 },
    { id: 'Mme.Pontmercy', group: 5 },
    { id: 'Mlle.Vaubois', group: 5 },
    { id: 'Lt.Gillenormand', group: 5 },
    { id: 'Marius', group: 8 },
    { id: 'BaronessT', group: 5 },
    { id: 'Mabeuf', group: 8 },
    { id: 'Enjolras', group: 8 },
    { id: 'Combeferre', group: 8 },
    { id: 'Prouvaire', group: 8 },
    { id: 'Feuilly', group: 8 },
    { id: 'Courfeyrac', group: 8 },
    { id: 'Bahorel', group: 8 },
    { id: 'Bossuet', group: 8 },
    { id: 'Joly', group: 8 },
    { id: 'Grantaire', group: 8 },
    { id: 'MotherPlutarch', group: 9 },
    { id: 'Gueulemer', group: 4 },
    { id: 'Babet', group: 4 },
    { id: 'Claquesous', group: 4 },
    { id: 'Montparnasse', group: 4 },
    { id: 'Toussaint', group: 5 },
    { id: 'Child1', group: 10 },
    { id: 'Child2', group: 10 },
    { id: 'Brujon', group: 4 },
    { id: 'Mme.Hucheloup', group: 8 },
  ],
  links: [
    { source: 'Napoleon', target: 'Myriel', value: 1 },
    { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 },
    { source: 'Mme.Magloire', target: 'Myriel', value: 10 },
    { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 },
    { source: 'CountessdeLo', target: 'Myriel', value: 1 },
    { source: 'Geborand', target: 'Myriel', value: 1 },
    { source: 'Champtercier', target: 'Myriel', value: 1 },
    { source: 'Cravatte', target: 'Myriel', value: 1 },
    { source: 'Count', target: 'Myriel', value: 2 },
    { source: 'OldMan', target: 'Myriel', value: 1 },
    { source: 'Valjean', target: 'Labarre', value: 1 },
    { source: 'Valjean', target: 'Mme.Magloire', value: 3 },
    { source: 'Valjean', target: 'Mlle.Baptistine', value: 3 },
    { source: 'Valjean', target: 'Myriel', value: 5 },
    { source: 'Marguerite', target: 'Valjean', value: 1 },
    { source: 'Mme.deR', target: 'Valjean', value: 1 },
    { source: 'Isabeau', target: 'Valjean', value: 1 },
    { source: 'Gervais', target: 'Valjean', value: 1 },
    { source: 'Listolier', target: 'Tholomyes', value: 4 },
    { source: 'Fameuil', target: 'Tholomyes', value: 4 },
    { source: 'Fameuil', target: 'Listolier', value: 4 },
    { source: 'Blacheville', target: 'Tholomyes', value: 4 },
    { source: 'Blacheville', target: 'Listolier', value: 4 },
    { source: 'Blacheville', target: 'Fameuil', value: 4 },
    { source: 'Favourite', target: 'Tholomyes', value: 3 },
    { source: 'Favourite', target: 'Listolier', value: 3 },
    { source: 'Favourite', target: 'Fameuil', value: 3 },
    { source: 'Favourite', target: 'Blacheville', value: 4 },
    { source: 'Dahlia', target: 'Tholomyes', value: 3 },
    { source: 'Dahlia', target: 'Listolier', value: 3 },
    { source: 'Dahlia', target: 'Fameuil', value: 3 },
    { source: 'Dahlia', target: 'Blacheville', value: 3 },
    { source: 'Dahlia', target: 'Favourite', value: 5 },
    { source: 'Zephine', target: 'Tholomyes', value: 3 },
    { source: 'Zephine', target: 'Listolier', value: 3 },
    { source: 'Zephine', target: 'Fameuil', value: 3 },
    { source: 'Zephine', target: 'Blacheville', value: 3 },
    { source: 'Zephine', target: 'Favourite', value: 4 },
    { source: 'Zephine', target: 'Dahlia', value: 4 },
    { source: 'Fantine', target: 'Tholomyes', value: 3 },
    { source: 'Fantine', target: 'Listolier', value: 3 },
    { source: 'Fantine', target: 'Fameuil', value: 3 },
    { source: 'Fantine', target: 'Blacheville', value: 3 },
    { source: 'Fantine', target: 'Favourite', value: 4 },
    { source: 'Fantine', target: 'Dahlia', value: 4 },
    { source: 'Fantine', target: 'Zephine', value: 4 },
    { source: 'Fantine', target: 'Marguerite', value: 2 },
    { source: 'Fantine', target: 'Valjean', value: 9 },
    { source: 'Mme.Thenardier', target: 'Fantine', value: 2 },
    { source: 'Mme.Thenardier', target: 'Valjean', value: 7 },
    { source: 'Thenardier', target: 'Mme.Thenardier', value: 13 },
    { source: 'Thenardier', target: 'Fantine', value: 1 },
    { source: 'Thenardier', target: 'Valjean', value: 12 },
    { source: 'Cosette', target: 'Mme.Thenardier', value: 4 },
    { source: 'Cosette', target: 'Valjean', value: 31 },
    { source: 'Cosette', target: 'Tholomyes', value: 1 },
    { source: 'Cosette', target: 'Thenardier', value: 1 },
    { source: 'Javert', target: 'Valjean', value: 17 },
    { source: 'Javert', target: 'Fantine', value: 5 },
    { source: 'Javert', target: 'Thenardier', value: 5 },
    { source: 'Javert', target: 'Mme.Thenardier', value: 1 },
    { source: 'Javert', target: 'Cosette', value: 1 },
    { source: 'Fauchelevent', target: 'Valjean', value: 8 },
    { source: 'Fauchelevent', target: 'Javert', value: 1 },
    { source: 'Bamatabois', target: 'Fantine', value: 1 },
    { source: 'Bamatabois', target: 'Javert', value: 1 },
    { source: 'Bamatabois', target: 'Valjean', value: 2 },
    { source: 'Perpetue', target: 'Fantine', value: 1 },
    { source: 'Simplice', target: 'Perpetue', value: 2 },
    { source: 'Simplice', target: 'Valjean', value: 3 },
    { source: 'Simplice', target: 'Fantine', value: 2 },
    { source: 'Simplice', target: 'Javert', value: 1 },
    { source: 'Scaufflaire', target: 'Valjean', value: 1 },
    { source: 'Woman1', target: 'Valjean', value: 2 },
    { source: 'Woman1', target: 'Javert', value: 1 },
    { source: 'Judge', target: 'Valjean', value: 3 },
    { source: 'Judge', target: 'Bamatabois', value: 2 },
    { source: 'Champmathieu', target: 'Valjean', value: 3 },
    { source: 'Champmathieu', target: 'Judge', value: 3 },
    { source: 'Champmathieu', target: 'Bamatabois', value: 2 },
    { source: 'Brevet', target: 'Judge', value: 2 },
    { source: 'Brevet', target: 'Champmathieu', value: 2 },
    { source: 'Brevet', target: 'Valjean', value: 2 },
    { source: 'Brevet', target: 'Bamatabois', value: 1 },
    { source: 'Chenildieu', target: 'Judge', value: 2 },
    { source: 'Chenildieu', target: 'Champmathieu', value: 2 },
    { source: 'Chenildieu', target: 'Brevet', value: 2 },
    { source: 'Chenildieu', target: 'Valjean', value: 2 },
    { source: 'Chenildieu', target: 'Bamatabois', value: 1 },
    { source: 'Cochepaille', target: 'Judge', value: 2 },
    { source: 'Cochepaille', target: 'Champmathieu', value: 2 },
    { source: 'Cochepaille', target: 'Brevet', value: 2 },
    { source: 'Cochepaille', target: 'Chenildieu', value: 2 },
    { source: 'Cochepaille', target: 'Valjean', value: 2 },
    { source: 'Cochepaille', target: 'Bamatabois', value: 1 },
    { source: 'Pontmercy', target: 'Thenardier', value: 1 },
    { source: 'Boulatruelle', target: 'Thenardier', value: 1 },
    { source: 'Eponine', target: 'Mme.Thenardier', value: 2 },
    { source: 'Eponine', target: 'Thenardier', value: 3 },
    { source: 'Anzelma', target: 'Eponine', value: 2 },
    { source: 'Anzelma', target: 'Thenardier', value: 2 },
    { source: 'Anzelma', target: 'Mme.Thenardier', value: 1 },
    { source: 'Woman2', target: 'Valjean', value: 3 },
    { source: 'Woman2', target: 'Cosette', value: 1 },
    { source: 'Woman2', target: 'Javert', value: 1 },
    { source: 'MotherInnocent', target: 'Fauchelevent', value: 3 },
    { source: 'MotherInnocent', target: 'Valjean', value: 1 },
    { source: 'Gribier', target: 'Fauchelevent', value: 2 },
    { source: 'Mme.Burgon', target: 'Jondrette', value: 1 },
    { source: 'Gavroche', target: 'Mme.Burgon', value: 2 },
    { source: 'Gavroche', target: 'Thenardier', value: 1 },
    { source: 'Gavroche', target: 'Javert', value: 1 },
    { source: 'Gavroche', target: 'Valjean', value: 1 },
    { source: 'Gillenormand', target: 'Cosette', value: 3 },
    { source: 'Gillenormand', target: 'Valjean', value: 2 },
    { source: 'Magnon', target: 'Gillenormand', value: 1 },
    { source: 'Magnon', target: 'Mme.Thenardier', value: 1 },
    { source: 'Mlle.Gillenormand', target: 'Gillenormand', value: 9 },
    { source: 'Mlle.Gillenormand', target: 'Cosette', value: 2 },
    { source: 'Mlle.Gillenormand', target: 'Valjean', value: 2 },
    { source: 'Mme.Pontmercy', target: 'Mlle.Gillenormand', value: 1 },
    { source: 'Mme.Pontmercy', target: 'Pontmercy', value: 1 },
    { source: 'Mlle.Vaubois', target: 'Mlle.Gillenormand', value: 1 },
    { source: 'Lt.Gillenormand', target: 'Mlle.Gillenormand', value: 2 },
    { source: 'Lt.Gillenormand', target: 'Gillenormand', value: 1 },
    { source: 'Lt.Gillenormand', target: 'Cosette', value: 1 },
    { source: 'Marius', target: 'Mlle.Gillenormand', value: 6 },
    { source: 'Marius', target: 'Gillenormand', value: 12 },
    { source: 'Marius', target: 'Pontmercy', value: 1 },
    { source: 'Marius', target: 'Lt.Gillenormand', value: 1 },
    { source: 'Marius', target: 'Cosette', value: 21 },
    { source: 'Marius', target: 'Valjean', value: 19 },
    { source: 'Marius', target: 'Tholomyes', value: 1 },
    { source: 'Marius', target: 'Thenardier', value: 2 },
    { source: 'Marius', target: 'Eponine', value: 5 },
    { source: 'Marius', target: 'Gavroche', value: 4 },
    { source: 'BaronessT', target: 'Gillenormand', value: 1 },
    { source: 'BaronessT', target: 'Marius', value: 1 },
    { source: 'Mabeuf', target: 'Marius', value: 1 },
    { source: 'Mabeuf', target: 'Eponine', value: 1 },
    { source: 'Mabeuf', target: 'Gavroche', value: 1 },
    { source: 'Enjolras', target: 'Marius', value: 7 },
    { source: 'Enjolras', target: 'Gavroche', value: 7 },
    { source: 'Enjolras', target: 'Javert', value: 6 },
    { source: 'Enjolras', target: 'Mabeuf', value: 1 },
    { source: 'Enjolras', target: 'Valjean', value: 4 },
    { source: 'Combeferre', target: 'Enjolras', value: 15 },
    { source: 'Combeferre', target: 'Marius', value: 5 },
    { source: 'Combeferre', target: 'Gavroche', value: 6 },
    { source: 'Combeferre', target: 'Mabeuf', value: 2 },
    { source: 'Prouvaire', target: 'Gavroche', value: 1 },
    { source: 'Prouvaire', target: 'Enjolras', value: 4 },
    { source: 'Prouvaire', target: 'Combeferre', value: 2 },
    { source: 'Feuilly', target: 'Gavroche', value: 2 },
    { source: 'Feuilly', target: 'Enjolras', value: 6 },
    { source: 'Feuilly', target: 'Prouvaire', value: 2 },
    { source: 'Feuilly', target: 'Combeferre', value: 5 },
    { source: 'Feuilly', target: 'Mabeuf', value: 1 },
    { source: 'Feuilly', target: 'Marius', value: 1 },
    { source: 'Courfeyrac', target: 'Marius', value: 9 },
    { source: 'Courfeyrac', target: 'Enjolras', value: 17 },
    { source: 'Courfeyrac', target: 'Combeferre', value: 13 },
    { source: 'Courfeyrac', target: 'Gavroche', value: 7 },
    { source: 'Courfeyrac', target: 'Mabeuf', value: 2 },
    { source: 'Courfeyrac', target: 'Eponine', value: 1 },
    { source: 'Courfeyrac', target: 'Feuilly', value: 6 },
    { source: 'Courfeyrac', target: 'Prouvaire', value: 3 },
    { source: 'Bahorel', target: 'Combeferre', value: 5 },
    { source: 'Bahorel', target: 'Gavroche', value: 5 },
    { source: 'Bahorel', target: 'Courfeyrac', value: 6 },
    { source: 'Bahorel', target: 'Mabeuf', value: 2 },
    { source: 'Bahorel', target: 'Enjolras', value: 4 },
    { source: 'Bahorel', target: 'Feuilly', value: 3 },
    { source: 'Bahorel', target: 'Prouvaire', value: 2 },
    { source: 'Bahorel', target: 'Marius', value: 1 },
    { source: 'Bossuet', target: 'Marius', value: 5 },
    { source: 'Bossuet', target: 'Courfeyrac', value: 12 },
    { source: 'Bossuet', target: 'Gavroche', value: 5 },
    { source: 'Bossuet', target: 'Bahorel', value: 4 },
    { source: 'Bossuet', target: 'Enjolras', value: 10 },
    { source: 'Bossuet', target: 'Feuilly', value: 6 },
    { source: 'Bossuet', target: 'Prouvaire', value: 2 },
    { source: 'Bossuet', target: 'Combeferre', value: 9 },
    { source: 'Bossuet', target: 'Mabeuf', value: 1 },
    { source: 'Bossuet', target: 'Valjean', value: 1 },
    { source: 'Joly', target: 'Bahorel', value: 5 },
    { source: 'Joly', target: 'Bossuet', value: 7 },
    { source: 'Joly', target: 'Gavroche', value: 3 },
    { source: 'Joly', target: 'Courfeyrac', value: 5 },
    { source: 'Joly', target: 'Enjolras', value: 5 },
    { source: 'Joly', target: 'Feuilly', value: 5 },
    { source: 'Joly', target: 'Prouvaire', value: 2 },
    { source: 'Joly', target: 'Combeferre', value: 5 },
    { source: 'Joly', target: 'Mabeuf', value: 1 },
    { source: 'Joly', target: 'Marius', value: 2 },
    { source: 'Grantaire', target: 'Bossuet', value: 3 },
    { source: 'Grantaire', target: 'Enjolras', value: 3 },
    { source: 'Grantaire', target: 'Combeferre', value: 1 },
    { source: 'Grantaire', target: 'Courfeyrac', value: 2 },
    { source: 'Grantaire', target: 'Joly', value: 2 },
    { source: 'Grantaire', target: 'Gavroche', value: 1 },
    { source: 'Grantaire', target: 'Bahorel', value: 1 },
    { source: 'Grantaire', target: 'Feuilly', value: 1 },
    { source: 'Grantaire', target: 'Prouvaire', value: 1 },
    { source: 'MotherPlutarch', target: 'Mabeuf', value: 3 },
    { source: 'Gueulemer', target: 'Thenardier', value: 5 },
    { source: 'Gueulemer', target: 'Valjean', value: 1 },
    { source: 'Gueulemer', target: 'Mme.Thenardier', value: 1 },
    { source: 'Gueulemer', target: 'Javert', value: 1 },
    { source: 'Gueulemer', target: 'Gavroche', value: 1 },
    { source: 'Gueulemer', target: 'Eponine', value: 1 },
    { source: 'Babet', target: 'Thenardier', value: 6 },
    { source: 'Babet', target: 'Gueulemer', value: 6 },
    { source: 'Babet', target: 'Valjean', value: 1 },
    { source: 'Babet', target: 'Mme.Thenardier', value: 1 },
    { source: 'Babet', target: 'Javert', value: 2 },
    { source: 'Babet', target: 'Gavroche', value: 1 },
    { source: 'Babet', target: 'Eponine', value: 1 },
    { source: 'Claquesous', target: 'Thenardier', value: 4 },
    { source: 'Claquesous', target: 'Babet', value: 4 },
    { source: 'Claquesous', target: 'Gueulemer', value: 4 },
    { source: 'Claquesous', target: 'Valjean', value: 1 },
    { source: 'Claquesous', target: 'Mme.Thenardier', value: 1 },
    { source: 'Claquesous', target: 'Javert', value: 1 },
    { source: 'Claquesous', target: 'Eponine', value: 1 },
    { source: 'Claquesous', target: 'Enjolras', value: 1 },
    { source: 'Montparnasse', target: 'Javert', value: 1 },
    { source: 'Montparnasse', target: 'Babet', value: 2 },
    { source: 'Montparnasse', target: 'Gueulemer', value: 2 },
    { source: 'Montparnasse', target: 'Claquesous', value: 2 },
    { source: 'Montparnasse', target: 'Valjean', value: 1 },
    { source: 'Montparnasse', target: 'Gavroche', value: 1 },
    { source: 'Montparnasse', target: 'Eponine', value: 1 },
    { source: 'Montparnasse', target: 'Thenardier', value: 1 },
    { source: 'Toussaint', target: 'Cosette', value: 2 },
    { source: 'Toussaint', target: 'Javert', value: 1 },
    { source: 'Toussaint', target: 'Valjean', value: 1 },
    { source: 'Child1', target: 'Gavroche', value: 2 },
    { source: 'Child2', target: 'Gavroche', value: 2 },
    { source: 'Child2', target: 'Child1', value: 3 },
    { source: 'Brujon', target: 'Babet', value: 3 },
    { source: 'Brujon', target: 'Gueulemer', value: 3 },
    { source: 'Brujon', target: 'Thenardier', value: 3 },
    { source: 'Brujon', target: 'Gavroche', value: 1 },
    { source: 'Brujon', target: 'Eponine', value: 1 },
    { source: 'Brujon', target: 'Claquesous', value: 1 },
    { source: 'Brujon', target: 'Montparnasse', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Bossuet', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Joly', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Grantaire', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Bahorel', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Courfeyrac', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Gavroche', value: 1 },
    { source: 'Mme.Hucheloup', target: 'Enjolras', value: 1 },
  ],
};

canvas.addEventListener(CanvasEvent.READY, () => {
  const chart = ForceGraph(miserables, {
    nodeId: (d) => d.id,
    nodeGroup: (d) => d.group,
    nodeTitle: (d) => \`\${d.id}\\n\${d.group}\`,
    linkStroke: () => '#999',
    linkStrokeWidth: (l) => Math.sqrt(l.value),
    width: 600,
    height: 600,
    invalidation: null, // a promise to stop the simulation when the cell is re-run
  });
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"D3 \u529B\u5BFC",en:"D3's ForceDirectedGraph"},filename:"d3-force-directed-graph.js",isNew:!1},{id:"d3-geo",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*cG62RqGKMXsAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import * as topojson from 'topojson';
import versor from 'versor';

/**
 * @see https://observablehq.com/@d3/sketchy-earth?collection=@d3/d3-geo
 */

function curveContext(curve) {
  return {
    moveTo(x, y) {
      curve.lineStart();
      curve.point(x, y);
    },
    lineTo(x, y) {
      curve.point(x, y);
    },
    closePath() {
      curve.lineEnd();
    },
  };
}

function geoCurvePath(curve, projection, context) {
  return (object) => {
    const pathContext = context === undefined ? d3.path() : context;
    d3.geoPath(projection, curveContext(curve(pathContext)))(object);
    return context === undefined ? pathContext + '' : undefined;
  };
}

function zoom(
  projection,
  {
    // Capture the projection\u2019s original scale, before any zooming.
    scale = projection._scale === undefined
      ? (projection._scale = projection.scale())
      : projection._scale,
    scaleExtent = [0.8, 8],
  } = {},
) {
  let v0, q0, r0, a0, tl;

  const zoom = d3
    .zoom()
    .scaleExtent(scaleExtent.map((x) => x * scale))
    .on('start', zoomstarted)
    .on('zoom', zoomed);

  function point(event, that) {
    const t = d3.pointers(event, that);

    if (t.length !== tl) {
      tl = t.length;
      if (tl > 1) a0 = Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]);
      zoomstarted.call(that, event);
    }

    return tl > 1
      ? [
          d3.mean(t, (p) => p[0]),
          d3.mean(t, (p) => p[1]),
          Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]),
        ]
      : t[0];
  }

  function zoomstarted(event) {
    v0 = versor.cartesian(projection.invert(point(event, this)));
    q0 = versor((r0 = projection.rotate()));
  }

  function zoomed(event) {
    projection.scale(event.transform.k);
    const pt = point(event, this);
    const v1 = versor.cartesian(projection.rotate(r0).invert(pt));
    const delta = versor.delta(v0, v1);
    let q1 = versor.multiply(q0, delta);

    // For multitouch, compose with a rotation around the axis.
    if (pt[2]) {
      const d = (pt[2] - a0) / 2;
      const s = -Math.sin(d);
      const c = Math.sign(Math.cos(d));
      q1 = versor.multiply([Math.sqrt(1 - s * s), 0, 0, c * s], q1);
    }

    projection.rotate(versor.rotation(q1));

    // In vicinity of the antipode (unstable) of q0, restart.
    if (delta[0] < 0.7) zoomstarted.call(this, event);
  }

  return Object.assign(
    (selection) =>
      selection.property('__zoom', d3.zoomIdentity.scale(projection.scale())).call(zoom),
    {
      on(type, ...options) {
        return options.length ? (zoom.on(type, ...options), this) : zoom.on(type);
      },
    },
  );
}

(async () => {
  let world = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/d518b501-e0f9-48e0-996f-f6662c04a439.json',
  );

  const width = 500;
  const curve = d3.curveBasisClosed;
  const projection = d3.geoOrthographic().precision(0.1);
  const path = geoCurvePath(curve, projection);
  const minArea = Math.pow(10, 2 - 1);
  const sphere = { type: 'Sphere' };

  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, sphere)).bounds(sphere);
  const dy = Math.ceil(y1 - y0),
    l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale((projection.scale() * (l - 1)) / l).precision(0.2);
  const height = dy;

  let topology = world;
  topology = topojson.presimplify(topology);
  topology = topojson.simplify(topology, minArea);
  const land = topojson.feature(topology, topology.objects.land);

  const canvasRenderer = new CanvasRenderer();
  // sketchy with rough.js
  canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());
  const svgRenderer = new SVGRenderer();
  const webglRenderer = new WebGLRenderer();
  const webgpuRenderer = new WebGPURenderer();
  const canvaskitRenderer = new CanvaskitRenderer({
    wasmDir: '/',
    fonts: [
      {
        name: 'Roboto',
        url: '/Roboto-Regular.ttf',
      },
      {
        name: 'sans-serif',
        url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
      },
    ],
  });
  const canvas = new Canvas({
    container: 'container',
    width,
    height,
    renderer: canvasRenderer,
  });

  canvas.addEventListener(CanvasEvent.READY, () => {
    const svg = d3.select(
      canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
    );

    const outline = svg.append('path').attr('stroke', 'black').attr('fill', 'white');
    const feature = svg.append('path').attr('stroke', 'black').attr('fill', 'white');

    function render() {
      outline.attr('d', path(sphere));
      feature.attr('d', path(land));
    }

    svg.call(zoom(projection).on('zoom.render end.render', render)).call(render);
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'webgpu') {
        renderer = webgpuRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();
})();
`,title:{zh:"D3 Geo",en:"D3 Geo"},filename:"d3-geo.js",isNew:!1},{id:"d3-annotation",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*vrV5TbXidQwAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Plugin as PluginCSSSelect } from '@antv/g-plugin-css-select';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as d3SvgAnnotation from 'd3-svg-annotation';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

Object.assign(d3, d3SvgAnnotation);

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from https://d3-annotation.susielu.com/
 * @see https://bl.ocks.org/susielu/974e41473737320f8db5ae711ded8542
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

const cssSelectPlugin = new PluginCSSSelect();

canvasRenderer.registerPlugin(cssSelectPlugin);
webglRenderer.registerPlugin(cssSelectPlugin);
svgRenderer.registerPlugin(cssSelectPlugin);
webgpuRenderer.registerPlugin(cssSelectPlugin);
canvaskitRenderer.registerPlugin(cssSelectPlugin);

// create chart dimensions
const margin = { top: 20, right: 20, bottom: 30, left: 50 },
  height = 500 - margin.top - margin.bottom;
const maxWidth = 860 - margin.left - margin.right;
let width = 860 - margin.left - margin.right;

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 960,
  height: height + margin.top + margin.bottom,
  renderer: canvasRenderer,
});

const drawBars = async () => {
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const svg = wrapper
    .append('g')
    .style('transform', \`translate(\${margin.left}px, \${margin.top}px)\`);

  const parseTime = d3.timeParse('%d-%b-%y');
  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  const valueline = d3
    .line()
    .x((d) => x(d.date) || 0)
    .y((d) => y(d.close) || 0);

  const data = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/e5e0e405-e0b0-4585-a10d-caf6b657dc9f.json',
  );

  data.forEach(function (d) {
    d.date = parseTime(d.date);
    d.close = +d.close;
  });

  x.domain(d3.extent(data, (d) => d.date));
  y.domain([0, d3.max(data, (d) => d.close)]);

  svg
    .append('path')
    .data([data])
    .attr('class', 'line')
    .attr('d', valueline)
    .style('stroke', 'black')
    .style('stroke-width', '1px');

  svg
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  svg.append('g').call(d3.axisLeft(y));

  //Add annotations
  const labels = [
    {
      data: { date: '9-Apr-12', close: 636.23 },
      dy: 37,
      dx: -142,
      subject: { text: 'C', y: 'bottom' },
      id: 'minimize-badge',
    },
    {
      data: { date: '26-Feb-08', close: 119.15 },
      dy: -137,
      dx: 0,
      note: { align: 'middle' },
      subject: { text: 'A', y: 'bottom' },
      id: 'minimize-badge',
    },
    {
      data: { date: '18-Sep-09', close: 185.02 },
      dy: 37,
      dx: 42,
      subject: { text: 'B' },
      id: 'minimize-badge',
    },
  ].map((l) => {
    l.note = Object.assign({}, l.note, {
      title: \`Close: \${l.data.close}\`,
      label: \`\${l.data.date}\`,
    });
    return l;
  });

  //using a separate type of annotation to control the resize functionality
  const resize = [
    {
      subject: {
        y1: 0,
        y2: height,
      },
      x: width,
      dx: 10,
      dy: height / 2,
      disable: ['connector'],
      note: {
        title: '< >',
        label: 'drag to resize',
        lineType: 'none',
      },
    },
  ];

  const timeFormat = d3.timeFormat('%d-%b-%y');

  window.makeAnnotations = d3
    .annotation()
    .annotations(labels)
    .type(d3.annotationCalloutElbow)
    .accessors({ x: (d) => x(parseTime(d.date)), y: (d) => y(d.close) })
    .accessorsInverse({
      date: (d) => timeFormat(x.invert(d.x)),
      close: (d) => y.invert(d.y),
    })
    .on('subjectover', function (annotation) {
      //cannot reference this if you are using es6 function syntax
      this.append('text')
        .attr('class', 'hover')
        .text(annotation.note.title)
        .attr('text-anchor', 'middle')
        .attr('y', annotation.subject.y && annotation.subject.y == 'bottom' ? 50 : -40)
        .attr('x', -15);

      this.append('text')
        .attr('class', 'hover')
        .text(annotation.note.label)
        .attr('text-anchor', 'middle')
        .attr('y', annotation.subject.y && annotation.subject.y == 'bottom' ? 70 : -60)
        .attr('x', -15);
    })
    .on('subjectout', function (annotation) {
      this.selectAll('text.hover').remove();
    });

  //Isn't using data for placement so accessors and accessorsInverse
  //are not necessary
  window.makeResize = d3.annotation().annotations(resize).type(d3.annotationXYThreshold);

  svg.append('g').attr('class', 'annotation-test').call(makeAnnotations);

  svg.append('g').attr('class', 'annotation-resize').call(makeResize);

  svg.select('.annotation.xythreshold').call(
    d3.drag().on('drag', function (d) {
      const newWidth = Math.max(0, Math.min(maxWidth, d.x + d.dx));
      // d.x = newWidth;

      const threshold = 400;
      if (newWidth < threshold && width >= threshold) {
        makeAnnotations.type(d3.annotationBadge);
        svg.select('g.annotation-test').call(makeAnnotations);
      } else if (newWidth > threshold && width <= threshold) {
        makeAnnotations.type(d3.annotationCalloutElbow);
        svg.select('g.annotation-test').call(makeAnnotations);
      }

      width = newWidth;

      x.range([0, width]);
      makeAnnotations.updatedAccessors();
      makeResize.updatedAccessors();

      svg.select('g.x-axis').call(d3.axisBottom(x));

      svg.select('path.line').attr('d', valueline);
    }),
  );

  // load font
  // const latoFontFace = new FontFace(
  //   'Lato',
  //   'url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2)',
  // );
  // window.document.fonts.add(latoFontFace);
  // latoFontFace.loaded.then((fontFace) => {
  //   console.log(fontFace.family);
  //   canvas.document.documentElement.style.fontFamily = 'Lato';
  // });

  var bitterFontFace = new FontFace(
    'Lato',
    'url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2)',
  );
  document.fonts.add(bitterFontFace);
  bitterFontFace.loaded.then((fontFace) => {
    console.log(fontFace.family);
  });

  document.fonts.ready.then(function () {
    for (const c of document.fonts.values()) {
      console.log(c);
    }

    canvas.document.documentElement.style.fontFamily = 'Lato';
  });

  // apply CSS styles
  canvas.document.querySelectorAll('.annotation path').forEach((path) => {
    path.style.stroke = '#E8336D';
  });

  canvas.document.querySelectorAll('.annotation-note-title').forEach((title) => {
    title.style['font-weight'] = 'bold';
  });

  const handle = canvas.document.querySelector('.annotation.xythreshold');
  handle.style.cursor = 'move';
  // console.log(t, svg.selectAll('.annotation path'));
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"D3 \u6807\u6CE8",en:"D3's Annotation"},filename:"d3-annotation.js",isNew:!1}],icon:"",id:"d3",title:{en:"D3",zh:"D3"},childrenKey:"demos",order:100},{demos:[{id:"lottie-player-basic-shapes",source:`import { Canvas, CanvasEvent, HTML, Rectangle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { loadAnimation } from '@antv/g-lottie-player';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * @see https://lottiefiles.github.io/lottie-docs/breakdown/bouncy_ball/
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const bouncy_ball = {
  nm: 'Bouncy Ball',
  v: '5.5.2',
  ip: 0,
  op: 120,
  fr: 60,
  w: 512,
  h: 512,
  layers: [
    {
      ddd: 0,
      ty: 4,
      ind: 0,
      st: 0,
      ip: 0,
      op: 120,
      nm: 'Layer',
      ks: {
        a: {
          a: 0,
          k: [0, 0],
        },
        p: {
          a: 0,
          k: [0, 0],
        },
        s: {
          a: 0,
          k: [100, 100],
        },
        r: {
          a: 0,
          k: 0,
        },
        o: {
          a: 0,
          k: 100,
        },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Ellipse Group',
          it: [
            {
              ty: 'el',
              nm: 'Ellipse',
              p: {
                // position
                a: 0,
                k: [204, 169],
              },
              s: {
                // size
                a: 0,
                k: [153, 153],
              },
            },
            {
              ty: 'fl',
              nm: 'Fill',
              o: {
                a: 0,
                k: 100,
              },
              c: {
                a: 0,
                k: [0.71, 0.192, 0.278],
              },
              r: 1,
            },
            {
              ty: 'tr',
              a: {
                // anchor
                a: 0,
                k: [204, 169],
              },
              p: {
                a: 1,
                k: [
                  {
                    t: 0,
                    s: [235, 106],
                    h: 0,
                    o: {
                      x: [0.333],
                      y: [0],
                    },
                    i: {
                      x: [1],
                      y: [1],
                    },
                  },
                  {
                    t: 60,
                    s: [265, 441],
                    h: 0,
                    o: {
                      x: [0],
                      y: [0],
                    },
                    i: {
                      x: [0.667],
                      y: [1],
                    },
                  },
                  {
                    t: 120,
                    s: [235, 106],
                  },
                ],
              },
              s: {
                a: 1,
                k: [
                  {
                    t: 55,
                    s: [100, 100],
                    h: 0,
                    o: {
                      x: [0],
                      y: [0],
                    },
                    i: {
                      x: [1],
                      y: [1],
                    },
                  },
                  {
                    t: 60,
                    s: [136, 59],
                    h: 0,
                    o: {
                      x: [0],
                      y: [0],
                    },
                    i: {
                      x: [1],
                      y: [1],
                    },
                  },
                  {
                    t: 65,
                    s: [100, 100],
                  },
                ],
              },
              r: {
                // rotation
                a: 0,
                k: 0,
              },
              o: {
                // opacity
                a: 0,
                k: 100,
              },
            },
          ],
        },
      ],
    },
  ],
};

// @see https://lottiefiles.github.io/lottie-docs/shapes/#rectangle
const rect = {
  v: '5.5.7',
  ip: 0,
  op: 180,
  nm: 'Animation',
  mn: '{8f1618e3-6f83-4531-8f65-07dd4b68ee2e}',
  fr: 60,
  w: 512,
  h: 512,
  assets: [],
  layers: [
    {
      ddd: 0,
      ty: 4,
      ind: 0,
      st: 0,
      ip: 0,
      op: 180,
      nm: 'Layer',
      mn: '{85f37d8b-1792-4a4f-82d2-1b3b6d829c07}',
      ks: {
        a: {
          a: 0,
          k: [256, 256],
        },
        p: {
          a: 0,
          k: [256, 256],
        },
        s: {
          a: 0,
          k: [100, 100],
        },
        r: {
          a: 0,
          k: 0,
        },
        o: {
          a: 0,
          k: 100,
        },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Group',
          it: [
            {
              ty: 'rc',
              nm: 'Rectangle',
              p: {
                a: 0,
                k: [256, 256],
              },
              s: {
                a: 0,
                k: [256, 256],
              },
              r: {
                a: 0,
                k: 0,
              },
            },
            {
              ty: 'st',
              nm: 'Stroke',
              mn: '{0930ce27-c8f9-4371-b0cf-111a859abfaf}',
              o: {
                a: 0,
                k: 100,
              },
              c: {
                a: 0,
                k: [1, 0.9803921568627451, 0.2823529411764706],
              },
              lc: 2,
              lj: 2,
              ml: 0,
              w: {
                a: 0,
                k: 30,
              },
            },
            {
              ty: 'tr',
              a: {
                a: 0,
                k: [249.3134328358209, 254.47164179104476],
              },
              p: {
                a: 0,
                k: [249.3134328358209, 254.47164179104476],
              },
              s: {
                a: 0,
                k: [100, 100],
              },
              r: {
                a: 0,
                k: 0,
              },
              o: {
                a: 0,
                k: 100,
              },
            },
          ],
        },
      ],
    },
  ],
  meta: {
    g: 'Glaxnimate 0.4.6-26-g7b05e75c',
  },
};

// @see https://lottiefiles.github.io/lottie-docs/breakdown/bezier/#beziers-in-lottie
const path = {
  v: '5.7.1',
  ip: 0,
  op: 180,
  nm: 'Animation',
  mn: '{8f1618e3-6f83-4531-8f65-07dd4b68ee2e}',
  fr: 60,
  w: 512,
  h: 512,
  layers: [
    {
      ty: 4,
      ddd: 0,
      nm: 'Layer',
      mn: '{85f37d8b-1792-4a4f-82d2-1b3b6d829c07}',
      ip: 0,
      op: 180,
      ind: 0,
      st: 0,
      sr: 1,
      ks: {
        a: {
          a: 0,
          k: [256, 256],
        },
        p: {
          a: 0,
          k: [256, 256],
        },
        s: {
          a: 0,
          k: [100, 100],
        },
        r: {
          a: 0,
          k: 0,
        },
        o: {
          a: 0,
          k: 100,
        },
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Path',
          mn: '{9199543e-3552-4e51-a802-623f2a4a2ca1}',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  c: false,
                  v: [
                    [53, 325],
                    [429, 147],
                    [215, 430],
                  ],
                  i: [
                    [0, 0],
                    [-147, 186],
                    [114, 36],
                  ],
                  o: [
                    [89, -189],
                    [40, 189],
                    [0, 0],
                  ],
                },
              },
            },
            {
              ty: 'st',
              nm: 'Stroke',
              mn: '{0930ce27-c8f9-4371-b0cf-111a859abfaf}',
              o: {
                a: 0,
                k: 100,
              },
              c: {
                a: 0,
                k: [1, 0.979995422293431, 0.28000305180437934],
              },
              lc: 2,
              lj: 2,
              ml: 0,
              w: {
                a: 0,
                k: 30,
              },
            },
            {
              ty: 'tr',
              a: {
                a: 0,
                k: [0, 0],
              },
              p: {
                a: 0,
                k: [0, 0],
              },
              s: {
                a: 0,
                k: [100, 100],
              },
              r: {
                a: 0,
                k: 0,
              },
              o: {
                a: 0,
                k: 100,
              },
            },
          ],
        },
      ],
    },
  ],
  meta: {
    g: 'Glaxnimate 0.4.6-32-gb62899be',
  },
};

const gradient = {
  v: '5.7.1',
  ip: 0,
  op: 180,
  nm: 'Animation',
  mn: '{8f1618e3-6f83-4531-8f65-07dd4b68ee2e}',
  fr: 60,
  w: 512,
  h: 512,
  layers: [
    {
      ty: 4,
      ddd: 0,
      nm: 'Layer',
      mn: '{85f37d8b-1792-4a4f-82d2-1b3b6d829c07}',
      ip: 0,
      op: 180,
      ind: 0,
      st: 0,
      sr: 1,
      ks: {
        a: {
          a: 0,
          k: [256, 256],
        },
        p: {
          a: 0,
          k: [256, 256],
        },
        s: {
          a: 0,
          k: [100, 100],
        },
        r: {
          a: 0,
          k: 0,
        },
        o: {
          a: 0,
          k: 100,
        },
      },
      shapes: [
        // {
        //   ty: 'gf',
        //   nm: 'Gradient Fill',
        //   o: {
        //     a: 0,
        //     k: 100,
        //   },
        //   r: 1,
        //   s: {
        //     a: 0,
        //     k: [256, 496],
        //   },
        //   e: {
        //     a: 0,
        //     k: [256, 16],
        //   },
        //   t: 2,
        //   h: {
        //     a: 0,
        //     k: 0,
        //   },
        //   a: {
        //     a: 0,
        //     k: 0,
        //   },
        //   g: {
        //     p: 3,
        //     k: {
        //       a: 0,
        //       k: [
        //         0, 0.7686274509803922, 0.8509803921568627, 0.9607843137254902, 0.5,
        //         0.19600213626306554, 0.31400015259021896, 0.6899977111467155, 1,
        //         0.16099794003204396, 0.18399328603036547, 0.45900663767452504, 0, 1, 0.5, 1, 1, 1,
        //       ],
        //     },
        //   },
        // },
        {
          ty: 'gr',
          nm: 'Gradient',
          mn: '{9df3ba96-24a3-412e-abd4-e64e2e76e6df}',
          it: [
            {
              ty: 'rc',
              nm: 'Rectangle',
              mn: '{20934ad0-1c22-4752-a5b1-be99889ea79a}',
              p: {
                a: 0,
                k: [256, 256],
              },
              s: {
                a: 0,
                k: [512, 512],
              },
              r: {
                a: 0,
                k: 0,
              },
            },
            {
              ty: 'gf',
              nm: 'Gradient Fill',
              o: {
                a: 0,
                k: 100,
              },
              r: 1,
              s: {
                a: 0,
                k: [256, 496],
              },
              e: {
                a: 0,
                k: [256, 16],
              },
              t: 1,
              h: {
                a: 0,
                k: 0,
              },
              a: {
                a: 0,
                k: 0,
              },
              g: {
                p: 3,
                k: {
                  a: 0,
                  k: [
                    0, 0.7686274509803922, 0.8509803921568627, 0.9607843137254902, 0.5,
                    0.19600213626306554, 0.31400015259021896, 0.6899977111467155, 1,
                    0.16099794003204396, 0.18399328603036547, 0.45900663767452504, 0, 1, 0.5, 1, 1,
                    1,
                  ],
                },
              },
            },
            {
              ty: 'tr',
              a: {
                a: 0,
                k: [257.4805970149254, 255.76119402985074],
              },
              p: {
                a: 0,
                k: [257.4805970149254, 255.76119402985074],
              },
              s: {
                a: 0,
                k: [100, 100],
              },
              r: {
                a: 0,
                k: 0,
              },
              o: {
                a: 0,
                k: 100,
              },
            },
          ],
        },
      ],
    },
  ],
  meta: {
    g: 'Glaxnimate 0.4.6-32-gb62899be',
  },
};

const gradientAnimation = loadAnimation(gradient);
const rectAnimation = loadAnimation(rect);
const pathAnimation = loadAnimation(path);
const ballAnimation = loadAnimation(bouncy_ball, { loop: true, autoplay: true });
canvas.addEventListener(CanvasEvent.READY, () => {
  gradientAnimation.render(canvas);
  rectAnimation.render(canvas);
  pathAnimation.render(canvas);
  ballAnimation.render(canvas);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const controlFolder = gui.addFolder('control');
const controlConfig = {
  pause: () => {
    ballAnimation.pause();
  },
  play: () => {
    ballAnimation.play();
  },
  stop: () => {
    ballAnimation.stop();
  },
  speed: 1,
  goToCurrentTime: 0,
  goToFrame: 0,
};
controlFolder.add(controlConfig, 'play');
controlFolder.add(controlConfig, 'pause');
controlFolder.add(controlConfig, 'stop');
controlFolder.add(controlConfig, 'speed', -3, 3).onChange((speed) => {
  ballAnimation.setSpeed(speed);
});
controlFolder.add(controlConfig, 'goToCurrentTime', 0, 2000).onChange((time) => {
  ballAnimation.goTo(time);
});
controlFolder.add(controlConfig, 'goToFrame', 0, 100).onChange((frame) => {
  ballAnimation.goTo(frame, true);
});
controlFolder.open();
`,title:{zh:"Lottie \u64AD\u653E\u5668 - \u57FA\u7840\u56FE\u5F62",en:"Lottie Player - Basic shapes"},filename:"lottie-player-basic-shapes.js",isNew:!1},{id:"lottie-player-transform",screenshot:"https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*U_bTSJXuQMQAAAAAAAAAAAAADmJ7AQ",source:`import { Canvas, CanvasEvent, HTML, Rectangle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { loadAnimation } from '@antv/g-lottie-player';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import * as d3 from 'd3';

/**
 * @see https://lottiefiles.github.io/lottie-docs/concepts/#transform
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, async () => {
  const data = await d3.json('/lottie/transform.json');
  const animation = loadAnimation(data, { loop: true });
  const wrapper = animation.render(canvas);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"Lottie \u64AD\u653E\u5668 - \u53D8\u6362",en:"Lottie Player - Transform"},filename:"lottie-player-transform.js",isNew:!1},{id:"lottie-player-assets",screenshot:"https://gw.alipayobjects.com/zos/raptor/1667977747890/A_NVmwSb89Y3kAAAAAAAAAAAAAARQnAQ.gif",source:`import { Canvas, CanvasEvent, HTML, Rectangle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { loadAnimation } from '@antv/g-lottie-player';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import * as d3 from 'd3';

/**
 * @see https://lottiefiles.github.io/lottie-docs/breakdown/bouncy_ball/
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 600,
  renderer: canvasRenderer,
});

let pointerAnimation;
canvas.addEventListener(CanvasEvent.READY, async () => {
  const data1 = await d3.json('/lottie/data1.json');
  const animation1 = loadAnimation(data1, { loop: true, autoplay: true });
  const wrapper1 = animation1.render(canvas);
  wrapper1.scale(0.5);

  const data2 = await d3.json('/lottie/data4.json');
  const animation2 = loadAnimation(data2, { loop: true, autoplay: true });
  const wrapper2 = animation2.render(canvas);
  wrapper2.scale(0.5);
  wrapper2.translate(300, 0);

  const data3 = await d3.json('/lottie/data3.json');
  const animation3 = loadAnimation(data3, { loop: true, autoplay: true });
  const wrapper3 = animation3.render(canvas);
  wrapper3.scale(0.5);
  wrapper3.translate(300, 200);

  // const flower = await d3.json('/lottie/flower.json');
  // flowerAnimation = loadAnimation(flower, { loop: true, autoplay: true });
  // const wrapper = flowerAnimation.render(canvas);
  // wrapper.scale(0.5);
  // wrapper.translate(0, 200);

  const pointer = await d3.json(
    'https://gw.alipayobjects.com/os/OasisHub/3ccdf4d8-78e6-48c9-b06e-9e518057d144/data.json',
  );
  pointerAnimation = loadAnimation(pointer, { loop: true, autoplay: true });
  const wrapper = pointerAnimation.render(canvas);
  wrapper.scale(0.5);
  wrapper.translate(0, 200);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const controlFolder = gui.addFolder('control');
const controlConfig = {
  pause: () => {
    pointerAnimation.pause();
  },
  play: () => {
    pointerAnimation.play();
  },
  stop: () => {
    pointerAnimation.stop();
  },
  speed: 1,
  goToCurrentTime: 0,
  goToFrame: 0,
};
controlFolder.add(controlConfig, 'play');
controlFolder.add(controlConfig, 'pause');
controlFolder.add(controlConfig, 'stop');
controlFolder.add(controlConfig, 'speed', -3, 3).onChange((speed) => {
  pointerAnimation.setSpeed(speed);
});
controlFolder.add(controlConfig, 'goToCurrentTime', 0, 2000).onChange((time) => {
  pointerAnimation.goTo(time);
});
controlFolder.add(controlConfig, 'goToFrame', 0, 100).onChange((frame) => {
  pointerAnimation.goTo(frame, true);
});
controlFolder.open();
`,title:{zh:"Lottie \u64AD\u653E\u5668 - \u56FE\u7247\u8D44\u4EA7",en:"Lottie Player - Displaying assets"},filename:"lottie-player-assets.js",isNew:!1},{id:"ant",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { loadAnimation } from '@antv/g-lottie-player';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import * as d3 from 'd3';

/**
 * @see https://lottiefiles.github.io/lottie-docs/concepts/#transform
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, async () => {
  const data = await d3.json('/lottie/ant.json');
  const animation = loadAnimation(data, { loop: true });
  const wrapper = animation.render(canvas);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u8682\u8681\u5F62\u8C61",en:"Ant"},filename:"ant.js",isNew:!1}],icon:"",id:"lottie",title:{en:"Lottie",zh:"Lottie"},childrenKey:"demos",order:100},{demos:[{id:"dot",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*EyjlTIwCrlgAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';
import * as Plot from '@observablehq/plot';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 640,
  height: 400,
  renderer: canvasRenderer,
});

(async () => {
  const res = await fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/b8954a70-dcc7-4868-9b85-5e291ba8d5db.json',
  );
  const athletes = await res.json();

  Plot.dot(athletes, {
    x: 'weight',
    y: 'height',
    stroke: 'sex',
  }).plot({
    document: canvas.document,
  });

  // stats
  const stats = new Stats();
  stats.showPanel(0);
  const $stats = stats.dom;
  $stats.style.position = 'absolute';
  $stats.style.left = '0px';
  $stats.style.top = '0px';
  const $wrapper = document.getElementById('container');
  $wrapper.appendChild($stats);
  canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
    if (stats) {
      stats.update();
    }
  });

  // GUI
  const gui = new lil.GUI({ autoPlace: false });
  $wrapper.appendChild(gui.domElement);
  const rendererFolder = gui.addFolder('renderer');
  const rendererConfig = {
    renderer: 'canvas',
  };
  rendererFolder
    .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
    .onChange((rendererName) => {
      let renderer;
      if (rendererName === 'canvas') {
        renderer = canvasRenderer;
      } else if (rendererName === 'svg') {
        renderer = svgRenderer;
      } else if (rendererName === 'webgl') {
        renderer = webglRenderer;
      } else if (rendererName === 'webgpu') {
        renderer = webgpuRenderer;
      } else if (rendererName === 'canvaskit') {
        renderer = canvaskitRenderer;
      }
      canvas.setRenderer(renderer);
    });
  rendererFolder.open();
})();
`,title:{zh:"\u6563\u70B9\u56FE",en:"Dot Plot"},filename:"dot.js",isNew:!1},{id:"rough-dot",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*022sTZrfznEAAAAAAAAAAAAAARQnAQ",source:`import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';
import * as Plot from '@observablehq/plot';

// create a renderer
const canvasRenderer = new Renderer();
canvasRenderer.registerPlugin(new PluginRoughCanvasRenderer());

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 640,
  height: 400,
  renderer: canvasRenderer,
});

(async () => {
  const res = await fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/b8954a70-dcc7-4868-9b85-5e291ba8d5db.json',
  );
  const athletes = await res.json();

  Plot.dot(athletes, {
    x: 'weight',
    y: 'height',
    stroke: 'sex',
  }).plot({
    document: canvas.document,
  });
})();
`,title:{zh:"\u624B\u7ED8\u98CE\u683C\u7684\u6563\u70B9\u56FE",en:"Rough + Dot Plot"},filename:"rough-dot.js",isNew:!1}],icon:"",id:"observable-plot",title:{en:"Observable Plot",zh:"Observable Plot"},childrenKey:"demos",order:100},{demos:[{id:"web-components",source:`import '@antv/g';
import '@antv/g-canvas';
import '@antv/g-web-components';

const $wrapper = document.getElementById('container');
$wrapper.innerHTML = \`
<g-canvas renderer="canvas" width="400" height="400">
  <g-rect fill="#2f54eb" radius="0 24px 24px" x="12px" y="24px" width="200px" height="50px">
    <g-circle fill="#adc6ff" r="16px" cx="25px" cy="25px"></g-circle>
    <g-text fill="#fff" x="50px" y="20px">\u6211\u662F\u4E00\u6BB5\u6587\u5B57</g-text>
  </g-rect>
  <g-ellipse fill="#adc6ff" stroke="red" stroke-width="4px" rx="40px" ry="20px" cx="280px" cy="40px"></g-ellipse>
  <g-image src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ" x="12px" y="200px" width="200px" height="200px" transform="scale(0.5)"></g-image>
  <g-line x1="360" y1="20" x2="360" y2="120" line-cap="round" stroke="black" stroke-width="10px" stroke-dasharray="5 5"></g-line>
  <g-path
    transform="translate(0, 100px)"
    stroke="#2f54eb"
    path="M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10"
  ></g-path>
  <g-html x="10" y="200" width="120" height="400">
    <div>
      <h2>hahahah</h2>
      <hr />
      <p>bsdkjfbkjsadbfkjabnjfnalsjkfnkja</p>
    </div>
  </g-html>
</g-canvas>
\`;
`,title:{zh:"\u4F7F\u7528 Web Components",en:"Use Web Components"},filename:"web-components.js",isNew:!1},{id:"web-components-react",source:`import { Ellipse } from '@antv/g';
import '@antv/g-canvas';
import '@antv/g-web-components';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const ellipseRef = useRef(null);

  useEffect(() => {
    const ellipse = ellipseRef.current.getElementInstance() as Ellipse;
    // ellipse.animate([{ transform: 'scale(1)' }, { transform: 'scale(2)' }], {
    //   duration: 1000,
    //   fill: 'both',
    //   iterations: Infinity,
    // });

    console.log(ellipse);

    setTimeout(() => {
      console.log(ellipse);
      ellipse.style.ry = 100;
    }, 500);
  });

  return (
    <g-canvas renderer="canvas" width="400" height="400">
      <g-rect fill="#2f54eb" radius="0 24px 24px" x="12px" y="24px" width="200px" height="50px">
        <g-circle fill="#adc6ff" r="16px" cx="25px" cy="25px"></g-circle>
        <g-text fill="#fff" x="50px" y="20px">
          \u6211\u662F\u4E00\u6BB5\u6587\u5B57
        </g-text>
      </g-rect>
      <g-ellipse
        fill="#adc6ff"
        stroke="red"
        stroke-width="4px"
        rx="40px"
        ry="20px"
        cx="280px"
        cy="40px"
        ref={ellipseRef}
      ></g-ellipse>
      <g-image
        src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ"
        x="12px"
        y="200px"
        width="200px"
        height="200px"
        transform="scale(0.5)"
      ></g-image>
      <g-line
        x1="360"
        y1="20"
        x2="360"
        y2="120"
        line-cap="round"
        stroke="black"
        stroke-width="10px"
        stroke-dasharray="5 5"
      ></g-line>
      <g-path
        transform="translate(0, 100px)"
        stroke="#2f54eb"
        path="M 0,40 C 5.5555555555555545,40,22.222222222222218,44.44444444444445,33.33333333333333,40 C 44.444444444444436,35.55555555555556,55.55555555555554,14.66666666666667,66.66666666666666,13.333333333333336 C 77.77777777777777,12.000000000000002,88.88888888888887,32,100,32 C 111.11111111111113,32,122.22222222222221,14.66666666666667,133.33333333333331,13.333333333333336 C 144.44444444444443,12.000000000000002,155.55555555555557,24,166.66666666666669,24 C 177.7777777777778,24,188.8888888888889,11.111111111111114,200,13.333333333333336 C 211.1111111111111,15.555555555555557,222.22222222222226,35.111111111111114,233.33333333333334,37.333333333333336 C 244.44444444444443,39.55555555555555,255.55555555555551,31.22222222222223,266.66666666666663,26.66666666666667 C 277.77777777777777,22.111111111111114,294.4444444444444,12.777777777777779,300,10"
      ></g-path>
      <g-html x="10" y="200" width="120" height="400">
        <div>
          <h2>hahahah</h2>
          <hr />
          <p>bsdkjfbkjsadbfkjabnjfnalsjkfnkja</p>
        </div>
      </g-html>
    </g-canvas>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
`,title:{zh:"\u4F7F\u7528 Web Components \u548C React",en:"Use Web Components and React"},filename:"web-components-react.tsx",isNew:!1},{id:"react-g",source:`import { Renderer as CanvasRenderer } from '@antv/g-webgl';
import { Canvas, Circle } from '@antv/react-g';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const renderer = new CanvasRenderer();

const App = () => {
  const [size, setSize] = useState(50);
  return (
    <Canvas width={600} height={400} renderer={renderer}>
      <Circle
        cx={100}
        cy={200}
        r={size}
        fill="#1890FF"
        stroke="#F04864"
        lineWidth={4}
        onMouseenter={() => {
          setSize(100);
        }}
        onMouseleave={() => {
          setSize(50);
        }}
      />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
`,title:{zh:"ReactG",en:"ReactG"},filename:"react-g.js",isNew:!1}],icon:"",id:"declarative",title:{en:"Declarative Usage",zh:"\u58F0\u660E\u5F0F\u7528\u6CD5"},childrenKey:"demos",order:200},{demos:[{id:"image-exporter",source:`import { Canvas, CanvasEvent, HTML, Rectangle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { ImageExporter } from '@antv/g-image-exporter';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * Export contents in canvas to image.
 *
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const exporter = new ImageExporter({
  canvas,
  defaultFilename: 'test',
});

const drawBars = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // 5. Draw data
  const binsGroup = bounds.append('g');
  const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

  const barPadding = 1;
  const barRects = binGroups
    .append('rect')
    .attr('x', (d) => xScale(d.x0) + barPadding / 2)
    .attr('y', (d) => yScale(yAccessor(d)))
    .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr('fill', 'cornflowerblue')
    .on('mouseenter', function (e) {
      d3.select(e.target).attr('fill', 'red');
    })
    .on('mouseleave', function (e) {
      d3.select(e.target).attr('fill', 'cornflowerblue');
    });

  const barText = binGroups
    .filter(yAccessor)
    .append('text')
    .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .attr('fill', 'darkgrey')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds
    .append('line')
    .attr('x1', xScale(mean))
    .attr('x2', xScale(mean))
    .attr('y1', -15)
    .attr('y2', dimensions.boundedHeight)
    .attr('stroke-width', 1)
    .attr('stroke', 'maroon')
    .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds
    .append('text')
    .attr('x', xScale(mean))
    .attr('y', -20)
    .text('mean')
    .attr('fill', 'maroon')
    .style('font-size', '12px')
    .style('text-anchor', 'middle');

  // 6. Draw peripherals
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
    .attr('fill', 'black');

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '10px')
    .text('Humidity')
    .style('text-transform', 'capitalize');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();

  const tooltip = new HTML({
    style: {
      x: 100,
      y: 100,
      innerHTML: 'Tooltip',
      fill: 'white',
      stroke: 'black',
      lineWidth: 6,
      width: 100,
      height: 30,
      pointerEvents: 'none',
    },
  });
  canvas.appendChild(tooltip);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const exporterFolder = gui.addFolder('exporter');
const exporterConfig = {
  clippingRegionX: 0,
  clippingRegionY: 0,
  clippingRegionWidth: 600,
  clippingRegionHeight: 500,
  enableBackgroundColor: false,
  backgroundColor: 'none',
  enableWatermark: false,
  type: 'image/png',
  encoderOptions: 1,
  toDataURL: async () => {
    const {
      clippingRegionX,
      clippingRegionY,
      clippingRegionWidth,
      clippingRegionHeight,
      enableBackgroundColor,
      backgroundColor,
      enableWatermark,
      type,
      encoderOptions,
    } = exporterConfig;
    const canvas = await exporter.toCanvas({
      ignoreElements: (element) => {
        return [gui.domElement, stats.dom].indexOf(element) > -1;
      },
      clippingRegion: new Rectangle(
        clippingRegionX,
        clippingRegionY,
        clippingRegionWidth,
        clippingRegionHeight,
      ),
      beforeDrawImage: (context) => {
        if (enableBackgroundColor) {
          context.fillStyle = backgroundColor;
          context.fillRect(0, 0, clippingRegionWidth, clippingRegionHeight);
        }
      },
      afterDrawImage: (context) => {
        if (enableWatermark) {
          context.font = '24px Times New Roman';
          context.fillStyle = '#FFC82C';
          context.fillText('AntV', 20, 20);
        }
      },
    });
    console.log(canvas.toDataURL(type, encoderOptions));
  },
  downloadImage: async () => {
    const {
      clippingRegionX,
      clippingRegionY,
      clippingRegionWidth,
      clippingRegionHeight,
      enableBackgroundColor,
      backgroundColor,
      enableWatermark,
      type,
      encoderOptions,
    } = exporterConfig;
    const canvas = await exporter.toCanvas({
      ignoreElements: (element) => {
        return [gui.domElement, stats.dom].indexOf(element) > -1;
      },
      clippingRegion: new Rectangle(
        clippingRegionX,
        clippingRegionY,
        clippingRegionWidth,
        clippingRegionHeight,
      ),
      beforeDrawImage: (context) => {
        if (enableBackgroundColor) {
          context.fillStyle = backgroundColor;
          context.fillRect(0, 0, clippingRegionWidth, clippingRegionHeight);
        }
      },
      afterDrawImage: (context) => {
        if (enableWatermark) {
          context.font = '24px Times New Roman';
          context.fillStyle = '#FFC82C';
          context.fillText('AntV', 20, 20);
        }
      },
    });
    const dataURL = canvas.toDataURL(type, encoderOptions);
    exporter.downloadImage({
      dataURL,
      name: 'test',
    });
  },
  toSVGDataURL: async () => {
    const svgDataURL = await exporter.toSVGDataURL();
    if (!svgDataURL) {
      console.log("Current renderer doesn't support exporting SVG.");
    } else {
      console.log(svgDataURL);
    }
  },
  downloadSVG: async () => {
    const svgDataURL = await exporter.toSVGDataURL();
    if (!svgDataURL) {
      console.log("Current renderer doesn't support exporting SVG.");
    } else {
      exporter.downloadImage({
        dataURL: svgDataURL,
        name: 'test',
      });
    }
  },
};
exporterFolder.add(exporterConfig, 'clippingRegionX', 0, 600);
exporterFolder.add(exporterConfig, 'clippingRegionY', 0, 500);
exporterFolder.add(exporterConfig, 'clippingRegionWidth', 0, 600);
exporterFolder.add(exporterConfig, 'clippingRegionHeight', 0, 500);
exporterFolder.add(exporterConfig, 'enableBackgroundColor');
exporterFolder.addColor(exporterConfig, 'backgroundColor');
exporterFolder.add(exporterConfig, 'enableWatermark');
exporterFolder.add(exporterConfig, 'type', ['image/png', 'image/jpeg', 'image/webp', 'image/bmp']);
exporterFolder.add(exporterConfig, 'encoderOptions', 0, 1);
exporterFolder.add(exporterConfig, 'toDataURL');
exporterFolder.add(exporterConfig, 'downloadImage');
exporterFolder.add(exporterConfig, 'toSVGDataURL');
exporterFolder.add(exporterConfig, 'downloadSVG');
exporterFolder.open();
`,title:{zh:"\u5BFC\u51FA\u753B\u5E03\u5185\u5BB9\u6210\u56FE\u7247",en:"Export canvas' contents to image"},filename:"image-exporter.js",isNew:!1}],icon:"",id:"image-exporter",title:{en:"Image Exporter",zh:"\u5BFC\u51FA\u56FE\u7247"},childrenKey:"demos",order:300},{demos:[{id:"lite",source:`import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Canvas, CanvasEvent } from '@antv/g-lite';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as d3 from 'd3';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * inspired by sprite.js
 * @see http://spritejs.com/#/en/guide/d3
 *
 * ported from fullstack-d3
 * @see https://codesandbox.io/s/vllpx?file=/chart.js
 */

// create a renderer
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'Roboto',
      url: '/Roboto-Regular.ttf',
    },
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const drawBars = async () => {
  // 1. Access data
  const dataset = await d3.json(
    'https://gw.alipayobjects.com/os/bmw-prod/8e7cfeb6-28e5-4e78-8d16-c08468360f5f.json',
  );
  const metricAccessor = (d) => d.humidity;
  const yAccessor = (d) => d.length;

  // 2. Create chart dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas
  const wrapper = d3.select(
    canvas.document.documentElement, // use GCanvas' document element instead of a real DOM
  );

  const bounds = wrapper
    .append('g')
    .style('transform', \`translate(\${dimensions.margin.left}px, \${dimensions.margin.top}px)\`);

  // 4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3.bin().domain(xScale.domain()).value(metricAccessor).thresholds(12);

  const bins = binsGenerator(dataset);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  // 5. Draw data
  const binsGroup = bounds.append('g');
  const binGroups = binsGroup.selectAll('g').data(bins).join('g').attr('class', 'bin');

  const barPadding = 1;
  const barRects = binGroups
    .append('rect')
    .attr('x', (d) => xScale(d.x0) + barPadding / 2)
    .attr('y', (d) => yScale(yAccessor(d)))
    .attr('width', (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr('height', (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr('fill', 'cornflowerblue')
    .on('mouseenter', function (e) {
      d3.select(e.target).attr('fill', 'red');
    })
    .on('mouseleave', function (e) {
      d3.select(e.target).attr('fill', 'cornflowerblue');
    });

  const barText = binGroups
    .filter(yAccessor)
    .append('text')
    .attr('x', (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .attr('fill', 'darkgrey')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds
    .append('line')
    .attr('x1', xScale(mean))
    .attr('x2', xScale(mean))
    .attr('y1', -15)
    .attr('y2', dimensions.boundedHeight)
    .attr('stroke-width', 1)
    .attr('stroke', 'maroon')
    .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds
    .append('text')
    .attr('x', xScale(mean))
    .attr('y', -20)
    .text('mean')
    .attr('fill', 'maroon')
    .style('font-size', '12px')
    .style('text-anchor', 'middle');

  // 6. Draw peripherals
  const xAxisGenerator = d3.axisBottom().scale(xScale);

  const xAxis = bounds
    .append('g')
    .call(xAxisGenerator)
    .attr('transform', \`translateY(\${dimensions.boundedHeight}px)\`)
    .attr('fill', 'black');

  const xAxisLabel = xAxis
    .append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '10px')
    .text('Humidity')
    .style('text-transform', 'capitalize');
};

canvas.addEventListener(CanvasEvent.READY, () => {
  drawBars();
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4F7F\u7528\u8F7B\u91CF\u7248",en:"Use lightweight version of G"},filename:"lite.js",isNew:!1}],icon:"",id:"lite",title:{en:"Use lightweight version",zh:"\u4F7F\u7528\u8F7B\u91CF\u7248"},childrenKey:"demos",order:500}],childrenKey:"examples"},{id:"perf",title:{zh:"\u6027\u80FD",en:"Performance"},examples:[{demos:[{id:"canvas-circle-path",source:`import { Canvas, CanvasEvent, Circle, Path, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import Stats from 'stats.js';

/**
 * do \`pan\` action with camera
 *
 * compared with G 4.0 \uFF5E30FPS
 * @see https://codesandbox.io/s/g-4-0-data1-pan-g8t95d?file=/index.js
 */

const canvasRenderer = new CanvasRenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  let edgesNum = 2742;
  for (let i = 0; i < edgesNum; i++) {
    const x = Math.random() * 600;
    const y = Math.random() * 500;
    canvas.appendChild(
      new Path({
        attrs: {
          path: [
            ['M', x, y],
            ['L', x + Math.random() * 100, y + Math.random() * 50],
          ],
          lineWidth: 1,
          stroke: '#000',
          lineWidth: 0.3,
        },
      }),
    );
  }
  let nodesNum = 1589;
  for (let i = 0; i < nodesNum; i++) {
    const x = Math.random() * 600;
    const y = Math.random() * 500;
    canvas.appendChild(
      new Circle({
        attrs: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
          r: 2,
          cx: x,
          cy: y,
          lineWidth: 0.3,
        },
      }),
    );
    canvas.appendChild(
      new Text({
        attrs: {
          text: 'ccc',
          x,
          y,
          fill: '#ccc',
          fontSize: 12,
        },
      }),
    );
  }
});

const camera = canvas.getCamera();
let count = 0;
let tag = 1;
const animate = () => {
  if (stats) {
    stats.update();
  }
  count++;
  if (count % 80 === 0) {
    count = 0;
    tag *= -1;
  }
  camera.pan(tag, tag);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
`,title:{zh:"g-canvas \u6E32\u67D3 Circle \u548C Path",en:"Render Circle & Path with g-canvas"},filename:"canvas-circle-path.js",isNew:!1},{id:"webgl-circle-path",source:`import { Canvas, CanvasEvent, Circle, Path, Text } from '@antv/g';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import Stats from 'stats.js';

/**
 * do \`pan\` action with camera
 *
 * compared with G 4.0 \uFF5E30FPS
 * @see https://codesandbox.io/s/g-4-0-data1-pan-g8t95d?file=/index.js
 */

const renderer = new WebGLRenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  let edgesNum = 2742;
  for (let i = 0; i < edgesNum; i++) {
    const x = Math.random() * 600;
    const y = Math.random() * 500;
    canvas.appendChild(
      new Path({
        attrs: {
          d: \`M \${x} \${y} L \${x + Math.random() * 100} \${y + Math.random() * 50}\`,
          lineWidth: 1,
          stroke: '#000',
          lineWidth: 0.3,
        },
      }),
      // new Line({
      //   attrs: {
      //     x1: x,
      //     y1: y,
      //     x2: x + Math.random() * 100,
      //     y2: y + Math.random() * 50,
      //     lineWidth: 1,
      //     stroke: '#000',
      //     lineWidth: 0.3,
      //   },
      // }),
    );
  }
  let nodesNum = 1589;
  for (let i = 0; i < nodesNum; i++) {
    const x = Math.random() * 600;
    const y = Math.random() * 500;
    canvas.appendChild(
      new Circle({
        attrs: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
          r: 2,
          cx: x,
          cy: y,
          lineWidth: 0.3,
        },
      }),
    );
    canvas.appendChild(
      new Text({
        attrs: {
          text: 'ccc',
          x,
          y,
          fill: '#ccc',
          fontSize: 12,
        },
      }),
    );
  }
});

const camera = canvas.getCamera();
let count = 0;
let tag = 1;
const animate = () => {
  if (stats) {
    stats.update();
  }
  count++;
  if (count % 80 === 0) {
    count = 0;
    tag *= -1;
  }
  camera.pan(tag, tag);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
`,title:{zh:"g-webgl \u6E32\u67D3 Circle \u548C Path",en:"Render Circle & Path with g-webgl"},filename:"webgl-circle-path.js",isNew:!1},{id:"vs-g4.0",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

/**
 * compared with G 4.0 \uFF5E20FPS
 * @see https://codesandbox.io/s/g-canvas-particles-2w-jyiie?file=/src/index.tsx
 */

const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  let nodesNum = 5000;
  for (let i = 0; i < nodesNum; i++) {
    canvas.appendChild(
      new Circle({
        attrs: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
          r: 2,
          cx: Math.random() * 600,
          cy: Math.random() * 500,
          lineWidth: 0.3,
        },
      }),
    );
  }
});

const camera = canvas.getCamera();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.on(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  camera.rotate(0, 0, 1);
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u4E0E G 4.0 \u5BF9\u6BD4",en:"Compared with G 4.0"},filename:"vs-g4.0.js",isNew:!1},{id:"culling",source:`import { Canvas, CanvasEvent, Rect } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 500,
  height: 500,
  renderer: canvasRenderer,
});
const camera = canvas.getCamera();
camera.setZoom(0.1);

const rect = new Rect({
  style: {
    x: 250,
    y: 250,
    width: 2000,
    height: 2000,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

const culledRect = new Rect({
  style: {
    x: 250 - 2500,
    y: 250 - 2500,
    width: 2000,
    height: 2000,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(rect);
  canvas.appendChild(culledRect);
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();

const cameraFolder = gui.addFolder('camera actions');
const cameraConfig = {
  panX: 0,
  panY: 0,
  zoom: 0.1,
  roll: 0,
};
const printVisibility = () => {
  console.log("rect1's visibility:", rect.isVisible() ? 'visible' : 'hidden');
  console.log("rect2's visibility:", culledRect.isVisible() ? 'visible' : 'hidden');
};

const origin = camera.getPosition();
cameraFolder.add(cameraConfig, 'panX', -3000, 3000).onChange((panX) => {
  const current = camera.getPosition();
  camera.pan(origin[0] + panX - current[0], 0);
  printVisibility();
});
cameraFolder.add(cameraConfig, 'panY', -3000, 3000).onChange((panY) => {
  const current = camera.getPosition();
  camera.pan(0, origin[1] + panY - current[1]);
  printVisibility();
});
cameraFolder.add(cameraConfig, 'roll', -90, 90).onChange((roll) => {
  camera.rotate(0, 0, roll);
  printVisibility();
});
cameraFolder.add(cameraConfig, 'zoom', 0, 1).onChange((zoom) => {
  camera.setZoom(zoom);
  printVisibility();
});
cameraFolder.open();
`,title:{zh:"\u89C6\u53E3\u5254\u9664",en:"Viewport culling"},filename:"culling.js",isNew:!1},{id:"canvas-dirty-rectangle",source:`import { Canvas, CanvasEvent, Circle } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer({
  enableDirtyRectangleRenderingDebug: true,
});
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  for (let i = 0; i < 1000; i++) {
    const circle = new Circle({
      style: {
        cx: Math.random() * 600,
        cy: Math.random() * 500,
        r: 20 + Math.random() * 10,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
      },
    });

    canvas.appendChild(circle);

    circle.on('mouseenter', () => {
      circle.attr('fill', '#2FC25B');
    });

    circle.on('mouseleave', () => {
      circle.attr('fill', '#1890FF');
    });
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
});

// GUI
let currentRenderer = canvasRenderer;
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'canvas',
};
rendererFolder.add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg']).onChange((renderer) => {
  currentRenderer =
    renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer;
  canvas.setRenderer(currentRenderer);
});
rendererFolder.open();

const folder0 = gui.addFolder('dirty rectangle');
const dirtyRectangleConfig = {
  enable: true,
};
folder0.add(dirtyRectangleConfig, 'enable').onChange((enable) => {
  currentRenderer.setConfig({
    enableDirtyRectangleRendering: enable,
    enableDirtyRectangleRenderingDebug: enable,
  });
});
folder0.open();

// display dirty rectangle
const $dirtyRectangle = document.createElement('div');
$dirtyRectangle.style.cssText = \`
position: absolute;
pointer-events: none;
background: rgba(255, 0, 0, 0.5);
\`;
$wrapper.appendChild($dirtyRectangle);
canvas.addEventListener(CanvasEvent.DIRTY_RECTANGLE, (e) => {
  const { dirtyRect } = e.detail;
  const { x, y, width, height } = dirtyRect;
  const dpr = window.devicePixelRatio;

  // convert from canvas coords to viewport
  $dirtyRectangle.style.left = \`\${x / dpr}px\`;
  $dirtyRectangle.style.top = \`\${y / dpr}px\`;
  $dirtyRectangle.style.width = \`\${width / dpr}px\`;
  $dirtyRectangle.style.height = \`\${height / dpr}px\`;
});
`,title:{zh:"\u810F\u77E9\u5F62\u6E32\u67D3(Canvas)",en:"Rendering with dirty rectangle(Canvas)"},filename:"canvas-dirty-rectangle.js",isNew:!1},{id:"redraw",source:`import { Canvas, CanvasEvent, Circle, Group } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import Stats from 'stats.js';

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: new Renderer(),
});

const group = new Group();
canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(group);
  for (let i = 0; i < 1000; i++) {
    const circle = new Circle({
      style: {
        cx: Math.random() * 600,
        cy: Math.random() * 500,
        r: 20 + Math.random() * 10,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 4,
        cursor: 'pointer',
      },
    });
    group.appendChild(circle);

    circle.on('mouseenter', () => {
      circle.attr('fill', '#2FC25B');
    });

    circle.on('mouseleave', () => {
      circle.attr('fill', '#1890FF');
    });
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

let t = 0;
const spin = () => {
  console.log(canvas.getStats());
  if (stats) {
    stats.update();
  }
  group.translate(t < 20 ? 5 : -5);
  if (t > 40) {
    t = 0;
  }
  t++;
  window.requestAnimationFrame(spin);
};

spin();
`,title:{zh:"\u79FB\u52A8\u5927\u91CF\u8282\u70B9",en:"Move nodes"},filename:"redraw.js",isNew:!1},{id:"group-move",source:`import { Canvas, Circle, Group, Path, Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import Stats from 'stats.js';

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

// create a renderer
const canvasRenderer = new Renderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const groups = Array(1000)
  .fill(1)
  .map(() => {
    const text = new Text({
      attrs: {
        x: 100,
        y: 100,
        fontFamily: 'PingFang SC',
        text: '\u8FD9\u662F\u6D4B\u8BD5\u6587\u672CThis is text',
        fontSize: 15,
        fill: '#1890FF',
        stroke: '#F04864',
        lineWidth: 5,
      },
    });
    const circle = new Circle({
      attrs: {
        r: 20,
        fill: '#000',
      },
    });
    const path = new Path({
      attrs: {
        path: [
          ['M', 0, 0],
          ['L', 100, 100],
        ],
        lineWidth: 2,
        stroke: 'black',
      },
    });
    const gg = new Group({
      style: {
        x: 100,
        y: 100,
      },
    });
    gg.appendChild(text);
    gg.appendChild(circle);
    gg.appendChild(path);
    canvas.appendChild(gg);
    return gg;
  });

const loop = () => {
  if (stats) {
    stats.update();
  }

  groups.forEach((group) =>
    // ~30FPS
    // group.attr({
    //   x: Math.random() * 600,
    //   y: Math.random() * 500,
    // }),
    // ~60FPS
    group.setLocalPosition(Math.random() * 600, Math.random() * 500),
  );
  setTimeout(loop);
};
loop();
`,title:{zh:"\u9891\u7E41\u79FB\u52A8 Group",en:"Move groups"},filename:"group-move.js",isNew:!1},{id:"nodes-8k",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*D-57RohPWVgAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Line, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import Hammer from 'hammerjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
// enable culling for canvas & svg renderer
const canvasRenderer = new CanvasRenderer({
  enableCulling: true,
});
const svgRenderer = new SVGRenderer({
  enableCulling: true,
});
const webglRenderer = new WebGLRenderer();
const webgpuRenderer = new WebGPURenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

// ported from G6 @see https://g6.antv.vision/zh/examples/performance/perf#eva

const mapNodeSize = (nodes, propertyName, visualRange) => {
  let minp = 9999999999;
  let maxp = -9999999999;
  nodes.forEach((node) => {
    node[propertyName] = Math.pow(node[propertyName], 1 / 3);
    minp = node[propertyName] < minp ? node[propertyName] : minp;
    maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
  });
  const rangepLength = maxp - minp;
  const rangevLength = visualRange[1] - visualRange[0];
  nodes.forEach((node) => {
    node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
  });
};

(async () => {
  const [_, data] = await Promise.all([
    canvas.ready,
    fetch(
      'https://gw.alipayobjects.com/os/basement_prod/0b9730ff-0850-46ff-84d0-1d4afecd43e6.json',
    ).then((res) => res.json()),
  ]);

  data.nodes.forEach((node) => {
    node.label = node.olabel;
    node.degree = 0;
    data.edges.forEach((edge) => {
      if (edge.source === node.id || edge.target === node.id) {
        node.degree++;
      }
    });
  });
  mapNodeSize(data.nodes, 'degree', [1, 15]);

  /**
   * Draw edges
   */
  data.edges.forEach(({ startPoint, endPoint }) => {
    const line = new Line({
      style: {
        x1: startPoint.x * 10,
        y1: startPoint.y * 10,
        x2: endPoint.x * 10,
        y2: endPoint.y * 10,
        stroke: '#1890FF',
        lineWidth: 3,
      },
    });

    canvas.appendChild(line);
  });

  /**
   * Draw nodes
   */
  data.nodes.forEach(({ size, x, y, label }) => {
    const circle = new Circle({
      style: {
        cx: x * 10,
        cy: y * 10,
        fill: '#C6E5FF',
        stroke: '#5B8FF9',
        r: size * 10,
        lineWidth: 1,
      },
    });
    canvas.appendChild(circle);

    const text = new Text({
      style: {
        text: label,
        fontSize: 12,
        fontFamily: 'sans-serif',
        fill: '#1890FF',
      },
    });
    circle.appendChild(text);

    circle.addEventListener('mouseenter', (e) => {
      circle.style.fill = '#2FC25B';
    });

    circle.addEventListener('mouseleave', (e) => {
      circle.style.fill = '#C6E5FF';
    });
  });
})();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

const camera = canvas.getCamera();
camera.pan(1000, 800);
camera.setZoom(0.05);
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }
  console.log(canvas.getStats());

  // manipulate camera instead of the root of canvas
  camera.rotate(0, 0, 0.1);
});

// handle mouse wheel event
const bindWheelHandler = () => {
  // update Camera's zoom
  // @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js
  const minZoom = 0;
  const maxZoom = Infinity;
  canvas
    .getContextService()
    .getDomElement() // g-canvas/webgl \u4E3A <canvas>\uFF0Cg-svg \u4E3A <svg>
    .addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        let zoom;
        if (e.deltaY < 0) {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() / 0.95));
        } else {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() * 0.95));
        }
        camera.setZoom(zoom);
      },
      { passive: false },
    );
};

// use hammer.js
const hammer = new Hammer(canvas);
hammer.on('pan', (ev) => {
  camera.pan(
    -ev.deltaX / Math.pow(2, camera.getZoom()),
    -ev.deltaY / Math.pow(2, camera.getZoom()),
  );
});

bindWheelHandler();

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'webgl',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange(async (rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    await canvas.setRenderer(renderer);
    bindWheelHandler();
  });
rendererFolder.open();
`,title:{zh:"8k \u8282\u70B9",en:"8k nodes"},filename:"nodes-8k.js",isNew:!1},{id:"nodes-5w",screenshot:"https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*dwS2Rb3mq5IAAAAAAAAAAAAAARQnAQ",source:`import { Canvas, CanvasEvent, Circle, Line } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import Hammer from 'hammerjs';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// ported from G6 @see https://g6.antv.vision/zh/examples/performance/perf#moreData

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

const mapNodeSize = (nodes, propertyName, visualRange) => {
  let minp = 9999999999;
  let maxp = -9999999999;
  nodes.forEach((node) => {
    node[propertyName] = Math.pow(node[propertyName], 1 / 3);
    minp = node[propertyName] < minp ? node[propertyName] : minp;
    maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
  });
  const rangepLength = maxp - minp;
  const rangevLength = visualRange[1] - visualRange[0];
  nodes.forEach((node) => {
    node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
  });
};

(async () => {
  const [_, data] = await Promise.all([
    canvas.ready,
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/f1565312-d537-4231-adf5-81cb1cd3a0e8.json',
    ).then((res) => res.json()),
  ]);

  data.nodes.forEach((node) => {
    node.degree = 0;
    data.edges.forEach((edge) => {
      if (edge.source === node.id || edge.target === node.id) {
        node.degree++;
      }
    });
  });
  mapNodeSize(data.nodes, 'degree', [1, 15]);

  data.edges.forEach(({ source, target }) => {
    const startPoint = data.nodes.find((node) => node.id === source);
    const endPoint = data.nodes.find((node) => node.id === target);

    if (startPoint && endPoint) {
      const line = new Line({
        style: {
          x1: startPoint.x,
          y1: startPoint.y,
          x2: endPoint.x,
          y2: endPoint.y,
          stroke: '#1890FF',
          lineWidth: 0.3,
        },
      });
      canvas.appendChild(line);
    }
  });

  data.nodes.forEach(({ size, x, y }) => {
    const circle = new Circle({
      style: {
        cx: x,
        cy: y,
        fill: '#C6E5FF',
        stroke: '#5B8FF9',
        r: size,
        lineWidth: 1,
      },
    });
    canvas.appendChild(circle);
  });
})();

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

const camera = canvas.getCamera();
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  // manipulate camera instead of the root of canvas
  camera.rotate(0, 0, 1);
});

// handle mouse wheel event
const bindWheelHandler = () => {
  // update Camera's zoom
  // @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js
  const minZoom = 0;
  const maxZoom = Infinity;
  canvas
    .getContextService()
    .getDomElement() // g-canvas/webgl \u4E3A <canvas>\uFF0Cg-svg \u4E3A <svg>
    .addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        let zoom;
        if (e.deltaY < 0) {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() / 0.95));
        } else {
          zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() * 0.95));
        }
        camera.setZoom(zoom);
      },
      { passive: false },
    );
};

// use hammer.js
const hammer = new Hammer(canvas.document);
hammer.on('pan', (ev) => {
  camera.pan(
    -ev.deltaX / Math.pow(2, camera.getZoom()),
    -ev.deltaY / Math.pow(2, camera.getZoom()),
  );
});

bindWheelHandler();

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'webgl',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'webgl', 'svg'])
  .onChange(async (renderer) => {
    await canvas.setRenderer(
      renderer === 'canvas' ? canvasRenderer : renderer === 'webgl' ? webglRenderer : svgRenderer,
    );
    bindWheelHandler();
  });
rendererFolder.open();
`,title:{zh:"5.5w \u8282\u70B9",en:"5.5w nodes"},filename:"nodes-5w.js",isNew:!1},{id:"images",source:`import { Canvas, CanvasEvent, Image } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/file/A*064aSK2LUPEAAAAAAAAAAAAADmJ7AQ/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  for (let i = 0; i < 1000; i++) {
    const image = new Image({
      style: {
        x: Math.random() * 600,
        y: Math.random() * 500,
        width: 100 + Math.random() * 100,
        height: 100 + Math.random() * 100,
        img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*8eoKRbfOwgAAAAAAAAAAAABkARQnAQ',
      },
    });
    canvas.appendChild(image);
  }
  for (let i = 0; i < 1000; i++) {
    const image = new Image({
      style: {
        x: Math.random() * 600,
        y: Math.random() * 500,
        width: 100 + Math.random() * 100,
        height: 100 + Math.random() * 100,
        img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
      },
    });
    canvas.appendChild(image);
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

const camera = canvas.getCamera();
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  // manipulate camera instead of the root of canvas
  camera.rotate(0, 0, 1);
});

// update Camera's zoom
// @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js
const minZoom = 0;
const maxZoom = Infinity;
canvas
  .getContextService()
  .getDomElement() // g-canvas/webgl \u4E3A <canvas>\uFF0Cg-svg \u4E3A <svg>
  .addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      let zoom;
      if (e.deltaY < 0) {
        zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() / 0.95));
      } else {
        zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() * 0.95));
      }
      camera.setZoom(zoom);
    },
    { passive: false },
  );

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'webgl',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5927\u91CF\u56FE\u7247",en:"Instanced Image"},filename:"images.js",isNew:!1},{id:"texts",source:`import { Canvas, CanvasEvent, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import { Renderer as CanvaskitRenderer } from '@antv/g-canvaskit';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Renderer as WebGLRenderer } from '@antv/g-webgl';
import { Renderer as WebGPURenderer } from '@antv/g-webgpu';
import * as lil from 'lil-gui';
import Stats from 'stats.js';

// create a renderer
const canvasRenderer = new CanvasRenderer();
const webglRenderer = new WebGLRenderer();
const svgRenderer = new SVGRenderer();
const canvaskitRenderer = new CanvaskitRenderer({
  wasmDir: '/',
  fonts: [
    {
      name: 'sans-serif',
      url: '/NotoSansCJKsc-VF.ttf',
    },
  ],
});
const webgpuRenderer = new WebGPURenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: webglRenderer,
});

canvas.addEventListener(CanvasEvent.READY, () => {
  for (let i = 0; i < 100; i++) {
    const text = new Text({
      style: {
        x: Math.random() * 600,
        y: Math.random() * 500,
        fontFamily: 'PingFang SC',
        text: '\u6D4B\u8BD5\u6587\u672C' + i,
        fontSize: 50 + Math.random() * 10,
        fill: i % 2 === 0 ? '#1890FF' : 'red',
      },
    });
    canvas.appendChild(text);
  }
});

// stats
const stats = new Stats();
stats.showPanel(0);
const $stats = stats.dom;
$stats.style.position = 'absolute';
$stats.style.left = '0px';
$stats.style.top = '0px';
const $wrapper = document.getElementById('container');
$wrapper.appendChild($stats);

const camera = canvas.getCamera();
canvas.addEventListener(CanvasEvent.AFTER_RENDER, () => {
  if (stats) {
    stats.update();
  }

  // manipulate camera instead of the root of canvas
  camera.rotate(0, 0, 1);
});

// update Camera's zoom
// @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js
const minZoom = 0;
const maxZoom = Infinity;
canvas
  .getContextService()
  .getDomElement() // g-canvas/webgl \u4E3A <canvas>\uFF0Cg-svg \u4E3A <svg>
  .addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      let zoom;
      if (e.deltaY < 0) {
        zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() / 0.95));
      } else {
        zoom = Math.max(minZoom, Math.min(maxZoom, camera.getZoom() * 0.95));
      }
      camera.setZoom(zoom);
    },
    { passive: false },
  );

// GUI
const gui = new lil.GUI({ autoPlace: false });
$wrapper.appendChild(gui.domElement);
const rendererFolder = gui.addFolder('renderer');
const rendererConfig = {
  renderer: 'webgl',
};
rendererFolder
  .add(rendererConfig, 'renderer', ['canvas', 'svg', 'webgl', 'webgpu', 'canvaskit'])
  .onChange((rendererName) => {
    let renderer;
    if (rendererName === 'canvas') {
      renderer = canvasRenderer;
    } else if (rendererName === 'svg') {
      renderer = svgRenderer;
    } else if (rendererName === 'webgl') {
      renderer = webglRenderer;
    } else if (rendererName === 'webgpu') {
      renderer = webgpuRenderer;
    } else if (rendererName === 'canvaskit') {
      renderer = canvaskitRenderer;
    }
    canvas.setRenderer(renderer);
  });
rendererFolder.open();
`,title:{zh:"\u5927\u91CF\u6587\u672C",en:"Instanced Text"},filename:"texts.js",isNew:!1}],icon:"",id:"basic",title:{en:"Performance",zh:"\u6027\u80FD"},childrenKey:"demos",order:2}],childrenKey:"examples"},{id:"guide",title:{zh:"\u6559\u7A0B",en:"Guide"},examples:[{demos:[{id:"chapter2",source:`import { Canvas, CanvasEvent, Circle, Line, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';

// create a renderer
const canvasRenderer = new CanvasRenderer();

// create a canvas
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

const node1 = new Circle({
  style: {
    r: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const text1 = new Text({
  style: {
    text: 'Node1', // \u6587\u672C\u5185\u5BB9
    fontFamily: 'Avenir', // \u5B57\u4F53
    fontSize: 22, // \u5B57\u53F7
    fill: '#fff', // \u6587\u672C\u989C\u8272
    textAlign: 'center', // \u6C34\u5E73\u5C45\u4E2D
    textBaseline: 'middle', // \u5782\u76F4\u5C45\u4E2D
  },
});
node1.appendChild(text1);
node1.setPosition(200, 200);

const node2 = new Circle({
  style: {
    r: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const text2 = new Text({
  style: {
    text: 'Node2', // \u6587\u672C\u5185\u5BB9
    fontFamily: 'Avenir', // \u5B57\u4F53
    fontSize: 22, // \u5B57\u53F7
    fill: '#fff', // \u6587\u672C\u989C\u8272
    textAlign: 'center', // \u6C34\u5E73\u5C45\u4E2D
    textBaseline: 'middle', // \u5782\u76F4\u5C45\u4E2D
  },
});
node2.appendChild(text2);
node2.setPosition(400, 200);

const edge = new Line({
  style: {
    x1: 200,
    y1: 200,
    x2: 400,
    y2: 200,
    stroke: '#1890FF',
    lineWidth: 2,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  canvas.appendChild(edge);
  canvas.appendChild(node1);
  canvas.appendChild(node2);
});
`,title:{zh:"\u57FA\u7840\u6559\u7A0B\u7B2C\u4E8C\u8282\uFF1A\u4F7F\u7528\u6E32\u67D3\u5668",en:"Guide chapter2: use renderer"},filename:"chapter2.js",isNew:!1},{id:"chapter3",screenshot:"https://gw.alipayobjects.com/zos/raptor/1667978028753/A_Xw7JTZTFqMgAAAAAAAAAAAAAARQnAQ.gif",source:`import { Canvas, CanvasEvent, Circle, Line, Text } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import interact from 'interactjs';

// \u521B\u5EFA Canvas2D \u6E32\u67D3\u5668
const canvasRenderer = new Renderer();

// \u521B\u5EFA\u753B\u5E03
const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
  renderer: canvasRenderer,
});

// \u521B\u5EFA\u8282\u70B91
const node1 = new Circle({
  style: {
    r: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
    cursor: 'pointer',
  },
});
const text1 = new Text({
  style: {
    text: 'Node1', // \u6587\u672C\u5185\u5BB9
    fontFamily: 'Avenir', // \u5B57\u4F53
    fontSize: 22, // \u5B57\u53F7
    fill: '#fff', // \u6587\u672C\u989C\u8272
    textAlign: 'center', // \u6C34\u5E73\u5C45\u4E2D
    textBaseline: 'middle', // \u5782\u76F4\u5C45\u4E2D
  },
});
node1.appendChild(text1);
node1.setPosition(200, 200);

// \u521B\u5EFA\u8282\u70B92
const node2 = new Circle({
  style: {
    r: 40,
    fill: '#1890FF',
    stroke: '#F04864',
    lineWidth: 4,
  },
});
const text2 = new Text({
  style: {
    text: 'Node2', // \u6587\u672C\u5185\u5BB9
    fontFamily: 'Avenir', // \u5B57\u4F53
    fontSize: 22, // \u5B57\u53F7
    fill: '#fff', // \u6587\u672C\u989C\u8272
    textAlign: 'center', // \u6C34\u5E73\u5C45\u4E2D
    textBaseline: 'middle', // \u5782\u76F4\u5C45\u4E2D
  },
});
node2.appendChild(text2);
node2.setPosition(400, 200);

// \u521B\u5EFA\u8FB9
const edge = new Line({
  style: {
    x1: 200,
    y1: 200,
    x2: 400,
    y2: 200,
    stroke: '#1890FF',
    lineWidth: 2,
  },
});

canvas.addEventListener(CanvasEvent.READY, () => {
  // \u5411\u753B\u5E03\u4E2D\u6DFB\u52A0\u56FE\u5F62
  canvas.appendChild(edge);
  canvas.appendChild(node1);
  canvas.appendChild(node2);

  // \u4E3A\u8282\u70B91\u6DFB\u52A0\u4EA4\u4E92\uFF0C\u9F20\u6807\u60AC\u505C\u6539\u53D8\u989C\u8272
  node1.addEventListener('mouseenter', () => {
    node1.style.fill = 'red';
  });
  node1.addEventListener('mouseleave', () => {
    node1.style.fill = '#1890FF';
  });

  // \u4F7F\u7528 interact.js \u5B9E\u73B0\u62D6\u62FD
  interact(node1, {
    // \u76F4\u63A5\u4F20\u5165\u8282\u70B91
    context: canvas.document, // \u4F20\u5165\u4E0A\u4E0B\u6587
  }).draggable({
    onmove: function (event) {
      // interact.js \u544A\u8BC9\u6211\u4EEC\u7684\u504F\u79FB\u91CF
      const { dx, dy } = event;
      // \u6539\u53D8\u8282\u70B91\u4F4D\u7F6E
      node1.translateLocal(dx, dy);
      // \u83B7\u53D6\u8282\u70B91\u4F4D\u7F6E
      const [nx, ny] = node1.getLocalPosition();
      // \u6539\u53D8\u8FB9\u7684\u7AEF\u70B9\u4F4D\u7F6E
      edge.style.x1 = nx;
      edge.style.y1 = ny;
    },
  });
});
`,title:{zh:"\u57FA\u7840\u6559\u7A0B\u7B2C\u4E09\u8282\uFF1A\u6DFB\u52A0\u4EA4\u4E92",en:"Guide chapter3: interaction"},filename:"chapter3.js",isNew:!1}],icon:"",id:"basic",title:{en:"Guide",zh:"\u6559\u7A0B"},childrenKey:"demos",order:1e3}],childrenKey:"examples"}]}}},i)}}}]);
