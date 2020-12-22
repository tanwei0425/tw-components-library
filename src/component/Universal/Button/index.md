---
nav:
  title: 组件
  order: 20
# 一级菜单
group:
  title: 通用
  path: /components/universal
  order: 10
# 组件名称
title: Button 按钮
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 tw-components-library 中我们提供了五种按钮。

* 主按钮：用于主行动点，一个操作区域只能有一个主按钮。

* 默认按钮：用于没有主次之分的一组行动点。

* 虚线按钮：常用于添加操作。

* 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。。

* 链接按钮：用于作为外链的行动点。

## 代码演示

### 按钮类型

```jsx
/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮、和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import React from 'react';
import { Button } from 'tw-components-library';
const ButtonDemo = () => {
    return <section className='tw-components-demo-space'>
      <Button type={'primary'}>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type={'danger'}>Danger Button</Button>
      <Button type={'dashed'}>Dashed Button</Button>
      <Button type={'link'}>link按钮</Button>
    </section>;
}

export default ButtonDemo
```

### 按钮尺寸

```jsx
/**
 * title: 按钮尺寸
 * desc: 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
 */

import React from 'react';
import { Button } from 'tw-components-library';

export default () => <section className='tw-components-demo-space'>
  <Button onClick={()=>{alert(111)}} type={'primary'} size={'lg'}>Large Button</Button>
  <Button type={'default'}>Default Button</Button>
  <Button type={'dashed'} size={'sm'}>Small Button</Button>
</section>;
```

### 不可用状态

```jsx
/**
 * title: 不可用状态
 * desc: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import React from 'react';
import { Button } from 'tw-components-library';

export default () => <section className='tw-components-demo-space'>
  <Button disabled>Disabled Button</Button>
  <Button type={'dashed'} disabled>Disabled Dashed Button</Button>
  <Button type={'link'} disabled>link按钮</Button>
  
</section>
```

### Block 按钮

```jsx
/**
 * title: Block 按钮
 * desc: block属性将使按钮适合其父宽度。
 */
import React from 'react';
import { Button } from 'tw-components-library';

const twButton = () => {
  return <section className='tw-components-demo-space'>
  <Button type={'primary'} block>Primary Button</Button>
  <Button block>Default Button</Button>
  <Button type={'danger'} block>Danger Button</Button>
  <Button type={'dashed'} block>Dashed Button</Button>
  <Button type={'link'} block>link按钮</Button>
</section>
}

export  default twButton
```

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

按钮的属性说明如下：

作者比较懒。。先不写
