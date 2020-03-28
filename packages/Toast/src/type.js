import loading from '../assets/loading.svg'
import success from '../assets/success.svg'
import error from '../assets/error.svg'

const types = {
  loading: {
    showIcon: true,
    message: '正在加载',
    iconSource: loading,
    styles: {
      cssstyle: ['loadingRotate'],
    },
  },
  success: {
    showIcon: true,
    message: '成功',
    iconSource: success,
  },
  error: {
    showIcon: true,
    message: '错误',
    iconSource: error,
  },
};

export default types;
