import { reveal, stagger } from './reveal'
import { tilt } from './tilt'
import { ripple } from './ripple'

export default {
  install(app) {
    app.directive('reveal', reveal)
    app.directive('stagger', stagger)
    app.directive('tilt', tilt)
    app.directive('ripple', ripple)
  }
}
