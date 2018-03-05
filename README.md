# fe-monitor-center

Front-end minotor system, browser module

## Install

```bash
npm i fe-monitor-center -S
```
or use with cdn

```html
<script src="https://cdn.jsdelivr.net/npm/fe-monitor-center"></script>
```

## Usage


```javascript
import FeMonitorCenter from 'fe-monitor-center'

FeMonitorCenter('apiMonitor', {
  url: 'http://test.abc.com/simple/info',
  param: '{"city":1303,"storeName":"","storeStatus":"1","currentPage":1,"pageSize":20}',
  response: '{"success":false,"codeNum":0,"codeDesc":"system problem","value":""}',
  desc: 'Server error',
  group: 1,
  type: 2,
  app: 'console-admin'
})
```

## LICENSE

[MIT](https://raw.githubusercontent.com/sirzxj/fe-monitor-center/master/LICENSE)
