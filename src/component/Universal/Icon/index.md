---
# 顶部菜单
nav:
  title: 组件
  order: 20
# 一级菜单
group:
  title: 通用
  path: /components/universal
  order: 10
# 组件名称
title: Icon 图标
---

# Icon 图标

提供了一套常用的图标集合，语义化的矢量图形。

## 图标列表

使用图标 Font Awesome （Solid）组件库

<span style="color:red">点击即可复制</span>

### 方向性图标

```jsx
/**
 * inline: ture
 */


import React,{useState} from 'react';
import { Icon } from 'tw-components-library';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TouchFeedback from 'rmc-feedback';

const TwIcon = () =>{
  const [value,setValue] = useState('')
  const IconCopy = (e) =>{
   return true
  }
  const size = "2x";
  const iconData = [
    'angle-double-down',
    'angle-double-left',
    'angle-double-right',
    'angle-double-up',
    'angle-down',
    'angle-left',
    'angle-right',
    'angle-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-circle-down',
    'arrow-circle-left',
    'arrow-circle-right',
    'arrow-circle-up',
    'arrows-alt',
    'arrows-alt-h',
    'arrows-alt-v',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'caret-square-down',
    'caret-square-left',
    'caret-square-right',
    'caret-square-up',
    'redo',
    'redo-alt',
    'sync-alt',
    'retweet',
    'recycle',
    'compress',
    'compress-alt',
    'compress-arrows-alt',
    'expand',
    'expand-alt',
    'expand-arrows-alt',
    'backward',
    'forward',
    'fast-backward',
    'fast-forward',
    'not-equal',
    'step-backward',
    'step-forward',
    'reply',
    'share',
    'share-square',
    'sort',
    'sort-down',
    'sort-up',
    'sort-alpha-down',
    'sort-alpha-down-alt',
    'sort-alpha-up',
    'sort-alpha-up-alt',
    'hand-point-down',
    'hand-point-left',
    'hand-point-right',
    'hand-point-up',
    'indent',
    'outdent',
    'download',
  ]
  return (
  <div className={'tw-icon-demo'}>
    <ul>
      {iconData.map(val=>{
        return <CopyToClipboard
              text={val}
              key={val}
              onCopy={IconCopy}
            >
          <li>
              <TouchFeedback activeClassName={'tw-icon-active-info'}>
                <div className={'tw-icon-demo-info'}>
                  <Icon icon={val} size={size} />
                  <p>{val}</p>
                </div>
              </TouchFeedback>
          </li>
        </CopyToClipboard>
      })}
    </ul>
  </div>
  )
}
export default TwIcon
```

### 提示建议性图标

```jsx
/**
 * inline: ture
 */


import React,{useState} from 'react';
import { Icon } from 'tw-components-library';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TouchFeedback from 'rmc-feedback';

const TwIcon = () =>{
  const [value,setValue] = useState('')
  const IconCopy = (e) =>{
   return true
  }
  const size = "2x";
  const iconData = [
    'ban',
    'check',
    'check-circle',
    'check-square',
    'exclamation',
    'exclamation-circle',
    'exclamation-triangle',
    'lightbulb',
    'smoking-ban',
    'pause',
    'pause-circle',
    'question',
    'question-circle',
    'plus',
    'plus-circle',
    'plus-square',
    'times',
    'times-circle',
    'minus',
    'minus-circle',
    'minus-square',
  ]
  return (
  <div className={'tw-icon-demo'}>
    <ul>
      {iconData.map(val=>{
        return <CopyToClipboard
              text={val}
               key={val}
              onCopy={IconCopy}
            >
          <li>
              <TouchFeedback activeClassName={'tw-icon-active-info'}>
                <div className={'tw-icon-demo-info'}>
                  <Icon icon={val} size={size} />
                  <p>{val}</p>
                </div>
              </TouchFeedback>
          </li>
        </CopyToClipboard>
      })}
    </ul>
  </div>
  )
}
export default TwIcon
```

### 编辑类图标

```jsx
/**
 * inline: ture
 */


import React,{useState} from 'react';
import { Icon } from 'tw-components-library';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TouchFeedback from 'rmc-feedback';

const TwIcon = () =>{
  const [value,setValue] = useState('')
  const IconCopy = (e) =>{
   return true
  }
  const size = "2x";
  const iconData = [
    'align-center',
    'align-justify',
    'align-left',
    'align-right',
    'bold',
    'clone',
    'code',
    'copy',
    'cut',
    'dollar-sign',
    'divide',
    'edit',
    'brush',
    'ellipsis-h',
    'ellipsis-v',
    'eraser',
    'eye-dropper',
    'font',
    'heading',
    'italic',
    'magic',
    'paint-brush',
    'marker',
    'pen',
    'pen-nib',
    'pen-square',
    'percent',
    'underline',
    'unlink',
    'upload',
    'yen-sign',
    'search',
    'search-minus',
    'search-plus',
    'square-root-alt',
    'save',
    'trash',
    'trash-alt',
    'link',
    'list',
    'list-alt',
    'list-ol',
    'list-ul',
    'border-style',
    'border-all',
    'border-none',
    'feather',
    'file',
    'file-medical',
    'file-image',
    'file-word',
    'file-excel',
    'file-pdf',
    'file-export',
    'file-download',
    'file-video',
  ]
  return (
  <div className={'tw-icon-demo'}>
    <ul>
      {iconData.map(val=>{
        return <CopyToClipboard
              text={val}
               key={val}
              onCopy={IconCopy}
            >
          <li>
              <TouchFeedback activeClassName={'tw-icon-active-info'}>
                <div className={'tw-icon-demo-info'}>
                  <Icon icon={val} size={size} />
                  <p>{val}</p>
                </div>
              </TouchFeedback>
          </li>
        </CopyToClipboard>
      })}
    </ul>
  </div>
  )
}
export default TwIcon
```

### 数据类图标

```jsx
/**
 * inline: ture
 */


import React,{useState} from 'react';
import { Icon } from 'tw-components-library';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TouchFeedback from 'rmc-feedback';

const TwIcon = () =>{
  const [value,setValue] = useState('')
  const IconCopy = (e) =>{
   return true
  }
  const size = "2x";
  const iconData = [
    'chart-area',
    'chart-bar',
    'chart-line',
    'chart-pie',
    'poll',
    'poll-h',
    'tachometer-alt',
    'wave-square',
  ]
  return (
  <div className={'tw-icon-demo'}>
    <ul>
      {iconData.map(val=>{
        return <CopyToClipboard
              text={val}
               key={val}
              onCopy={IconCopy}
            >
          <li>
              <TouchFeedback activeClassName={'tw-icon-active-info'}>
                <div className={'tw-icon-demo-info'}>
                  <Icon icon={val} size={size} />
                  <p>{val}</p>
                </div>
              </TouchFeedback>
          </li>
        </CopyToClipboard>
      })}
    </ul>
  </div>
  )
}
export default TwIcon
```

### 网站通用图标

```jsx
/**
 * inline: ture
 */


import React,{useState} from 'react';
import { Icon } from 'tw-components-library';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TouchFeedback from 'rmc-feedback';

const TwIcon = () =>{
  const [value,setValue] = useState('')
  const IconCopy = (e) =>{
   return true
  }
  const size = "2x";
  const iconData = [
    'history',
   'home',
   'hospital',
   'hourglass-half',
   'house-user',
   'icons',
   'image',
   'images',
   'key',
   'keyboard',
   'laptop-code',
   'lock',
   'lock-open',
   'map-marked-alt',
   'map-marker-alt',
   'microphone',
   'microphone-slash',
   'mobile-alt',
   'money-bill-alt',
   'music',
   'network-wired',
   'paper-plane',
   'paperclip',
   'phone',
   'phone-slash',
   'phone-square',
   'phone-square-alt',
   'plane',
   'plane-slash',
   'poo',
   'power-off',
   'print',
   'qrcode',
   'restroom',
   'satellite-dish',
   'share-alt',
   'shopping-cart',
   'signal',
   'sliders-h',
   'stamp',
   'star',
   'subway',
   'swimmer',
   'table',
   'tag',
   'tags',
   'th-large',
   'th',
   'toggle-off',
   'toggle-on',
   'tools',
   'thumbtack',
   'thumbs-down',
   'thumbs-up',
   'user',
   'user-circle',
   'user-friends',
   'venus',
   'mars',
   'wifi',
   'video',
   'video-slash',
   'volume-down',
   'volume-mute',
   'volume-off',
   'volume-up',
   'wrench',
   'yen-sign',
   'spinner',
   'address-book',
   'address-card',
   'apple-alt',
   'at',
   'atlas',
   'atom',
   'asterisk',
   'award',
   'baby-carriage',
   'backspace',
   'balance-scale',
   'barcode',
   'bars',
   'band-aid',
   'battery-empty',
   'battery-full',
   'battery-half',
   'beer',
   'bell',
   'bell-slash',
   'biking',
   'birthday-cake',
   'bolt',
   'book',
   'book-medical',
   'book-open',
   'bookmark',
   'briefcase',
   'briefcase-medical',
   'broadcast-tower',
   'bug',
   'bullhorn',
   'bullseye',
   'bus-alt',
   'calculator',
   'calendar',
   'calendar-alt',
   'calendar-plus',
   'calendar-times',
   'camera',
   'camera-retro',
   'car',
   'car-battery',
   'cart-arrow-down',
   'cart-plus',
   'chess-knight',
   'clinic-medical',
   'clipboard-list',
   'clock',
   'cloud',
   'cloud-upload-alt',
   'cloud-download-alt',
   'cloud-moon',
   'cloud-moon-rain',
   'cloud-rain',
   'cloud-showers-heavy',
   'cloud-sun',
   'cloud-sun-rain',
   'code-branch',
   'cog',
   'coins',
   'comment',
   'comment-alt',
   'comment-dots',
   'compass',
   'copyright',
   'credit-card',
   'crop-alt',
   'cubes',
   'database',
   'desktop',
   'envelope',
   'envelope-open',
   'envelope-open-text',
   'euro-sign',
   'eye',
   'eye-slash',
   'faucet',
   'filter',
   'fingerprint',
   'flag',
   'flask',
   'folder-open',
   'folder-plus',
   'funnel-dollar',
   'gamepad',
   'gem',
   'gift',
   'globe',
   'graduation-cap',
   'hammer',
   'hashtag',
   'hdd',
   'headphones-alt',
   'heart',
   'heartbeat',
  ]
  return (
  <div className={'tw-icon-demo'}>
    <ul>
      {iconData.map(val=>{
        return <CopyToClipboard
              text={val}
              key={val}
              onCopy={IconCopy}
            >
          <li>
              <TouchFeedback activeClassName={'tw-icon-active-info'}>
                <div className={'tw-icon-demo-info'}>
                  <Icon icon={val} size={size} />
                  <p>{val}</p>
                </div>
              </TouchFeedback>
          </li>
        </CopyToClipboard>
      })}
    </ul>
  </div>
  )
}
export default TwIcon
```

## 代码演示

### 基本用法

```jsx
/**
 * title: 基本用法
 * desc: 通过不同属性，可以为图标设置尺寸、旋转、翻转、动画旋转等功能，
 */

import React from 'react';
import { Icon } from 'tw-components-library';

const themeAll = [
  {
    icon:'atom',
    size:'1x',
  },
  {
    icon:'asterisk',
    size:'2x',
  },
  {
    icon:'award',
    size:'3x',
  },
   {
    icon:'biking',
    size:'2x',
    rotation:90,
  },
  {
    icon:'spinner',
    size:'2x',
    spin:true,
  },
  {
    icon:'bell',
    size:'2x',
    pulse:true,
  },
]
const TwIcon = () =>{
  return <div className={'tw-components-demo-space'}>
  {themeAll.map(val=>{
    return  <Icon key={val.icon} icon={val.icon} rotation={val.rotation} spin={val.spin} pulse={val.pulse} size={val.size} />
  })}
  </div>
}
export default TwIcon
```

### 多色图标

```jsx
/**
 * title: 多色图标
 * desc: 多色图标可以通过 <span style="color:#1890ff">theme</span> 属性设置主题色
 */
// 目前支持 primary，secondary，success，info，warning，danger，light，dark，共8种色彩，默认为dark

import React from 'react';
import { Icon } from 'tw-components-library';

const themeAll = [
  {
    icon:'code',
    theme:'primary',
  },
  {
    icon:'copy',
    theme:'secondary',
  },
  {
    icon:'cut',
    theme:'success',
  },
  {
    icon:'dollar-sign',
    theme:'info',
  },
  {
    icon:'edit',
    theme:'warning',
  },
  {
    icon:'divide',
    theme:'danger',
  },
  {
    icon:'brush',
    theme:'light',
  },
   {
    icon:'cloud',
    theme:'dark',
  },
]
const size = '2x'
const TwIcon = () =>{
  return <div className={'tw-components-demo-space'}>
  {themeAll.map(val=>{
    return  <Icon key={val.icon} icon={val.icon} theme={val.theme} size={size} />
  })}
  </div>
}
export default TwIcon
```

## API

图标的属性说明如下：

作者比较懒。。先不写