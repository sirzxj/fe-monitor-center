/*
 * 前端监控中心
 */
const BASE_URL = 'http://localhost:3000/mc'

// post提交数据
function sendDataByPost(sendDataStr) {
  var xmlhttp = new window.XMLHttpRequest()
  xmlhttp.open('POST', BASE_URL, true)
  // xmlhttp.setRequestHeader('Content-type","application/x-www-form-urlencoded")
  xmlhttp.send(sendDataStr)
}

// get提交数据
function sendDataByGet(sendDataStr) {
  const img = new window.Image()
  img.src = `${BASE_URL}?${sendDataStr}`
}

function MonitorCenter (type = 'apiMonitor', params = {}) {
  const enCodeParams = encodeURIComponent(JSON.stringify({params}))
  // 超过3000个字符，改用post上传数据
  const sendDataStr = `type=${type}&params=${enCodeParams}`
  if (sendDataStr.length > 3000) {
    sendDataByPost(sendDataStr)
  } else {
    sendDataByGet(sendDataStr)
  }
}
export default MonitorCenter