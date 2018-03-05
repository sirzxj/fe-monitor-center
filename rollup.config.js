import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
	output: {
		file: 'lib/index.js',
    format: 'umd', 
    name: 'FeMonitorCenter',
    sourcemap: false
  },
  plugins: [
    babel(),
    uglify()
  ]
}

