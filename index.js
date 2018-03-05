/*!
 * Fe monitor center, collect anything if we need
 */
const BASE_URL = 'https://mc.startdt.com/'

// Submit Data with post
function sendDataByPost (sendDataStr) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', BASE_URL, true)
  xmlhttp.send(sendDataStr)
}

// Submit Data with get
function sendDataByGet (sendDataStr) {
  const img = new Image()
  img.src = `${BASE_URL}?${sendDataStr}?t=${Date.now()}`
}

/**
 * collect api 
 *
 * @param {String} type monitor type
 * @param {Object} callback collect data info
 */
function MonitorCenter (type = 'apiMonitor', params = {}) {
  const enCodeParams = encodeURIComponent(JSON.stringify({params}))
  // if the character length more than 300, Change the request method into 'POST' 
  const sendDataStr = `type=${type}&params=${enCodeParams}`
  if (sendDataStr.length > 3000) {
    sendDataByPost(sendDataStr)
  } else {
    sendDataByGet(sendDataStr)
  }
}

export default MonitorCenter
