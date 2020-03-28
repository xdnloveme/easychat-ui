const types = {
  loading: {
    showIcon: true,
    message: '正在加载',
    iconSource: require('../assets/loading.svg'),
    styles: {
      cssstyle: ['loadingRotate'],
    },
  },
  success: {
    showIcon: true,
    message: '成功',
    iconSource: require('../assets/success.svg'),
  },
  error: {
    showIcon: true,
    message: '错误',
    iconSource: require('../assets/error.svg'),
  },
};

export default types;