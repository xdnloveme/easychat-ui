import './styles/easychat-ui.scss'
import Badge from '../packages/Badge'
import Button from '../packages/Button'
import Divider from '../packages/Divider'
import Drawer from '../packages/Drawer'
import EMask from '../packages/EMask'
import ImageWall from '../packages/ImageWall'
import Modal from '../packages/Modal'
import Scroll from '../packages/Scroll'
import Picker from '../packages/Picker'
import PickerArea from '../packages/PickerArea'
import PickerDate from '../packages/PickerDate'
import ActionSheet from '../packages/ActionSheet'
import Dialog from '../packages/Dialog'
import Toast from '../packages/Toast'

const components = {
  ActionSheet,
  Badge,
  Button,
  Divider,
  Drawer,
  Dialog,
  EMask,
  ImageWall,
  Modal,
  Scroll,
  Picker,
  PickerArea,
  PickerDate,
  Toast,
}

const install = function (Vue, options = {}) {
  for (const name in components) {
    Vue.component(name, components[name])
  }

  // 挂载到原型链的方法
  Vue.prototype.$confirm = Dialog.confirm // 确认框
  Vue.prototype.$toast = Toast // 冒泡信息框
}

export default {
  ...components,
  install,
}
