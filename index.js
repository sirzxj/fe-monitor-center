/*!
 * Fe monitor center, collect anything if we need
 */
const BASE_URL = 'https://mc.startdt.com/mc'

// Submit Data with post method
function sendDataByPost (formData) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', BASE_URL, true)
  xmlhttp.setRequestHeader('Content-Type', 'application/json')
  xmlhttp.send(JSON.stringify(formData))
}

// Submit Data with get method
function sendDataByGet (sendDataStr) {
  const img = new Image()
  img.src = `${BASE_URL}?${sendDataStr}&t=${Date.now()}`
}

/**
 * collect api
 * @param {String} type monitor type
 * @param {Object} params collect data info
 * @param {Object} config collect config
 */
function FeMonitorCenter (type = 'apiMonitor', params = {}, config = {}) {
  // collect frequency
  if (typeof config.frequency === 'number' && Math.random() > config.frequency) {
    return
  }
  const enCodeParams = encodeURIComponent(JSON.stringify(params))
  const enCodeConfig = encodeURIComponent(JSON.stringify(config))
  const sendDataStr = `type=${type}&params=${enCodeParams}&config=${enCodeConfig}`
  // if the character length more than 300, Change the request method into 'POST'
  if (sendDataStr.length > 3000) {
    sendDataByPost({type, params, config})
  } else {
    sendDataByGet(sendDataStr)
  }
}
export default FeMonitorCenter
